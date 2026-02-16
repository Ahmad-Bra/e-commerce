// Order controller - single clean implementation
import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { v4 as uuidv4 } from "uuid";
import { redisCacheMiddleware } from "../middleware/cache/redis.middleware";

const prisma = new PrismaClient();

export class OrderController {
  // Create an order for a user. Body: { addressId: string, items: { product_id: string, quantity: number }[] }
  public async createOrder(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params as { userId?: string };
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    try {
      const { addressId, items } = req.body as {
        addressId?: string;
        items: Array<{ product_id: string; quantity: number }>;
      };

      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: "No items provided" });
      }

      // Validate address and ownership
      if (!addressId)
        return res.status(400).json({ message: "addressId is required" });
      const address = await prisma.address.findUnique({
        where: { id: addressId },
      });
      if (!address || address.userId !== userId) {
        return res
          .status(400)
          .json({ message: "Address not found or doesn't belong to user" });
      }

      // Fetch product prices
      const productIds = items.map((i) => i.product_id);
      const products = await prisma.products.findMany({
        where: { id: { in: productIds } },
        select: { id: true, price: true },
      });
      if (products.length !== productIds.length)
        return res
          .status(400)
          .json({ message: "One or more products not found" });

      const priceMap: Record<string, number> = {};
      products.forEach((p) => (priceMap[p.id] = p.price));

      let total = 0;
      for (const it of items) {
        const price = priceMap[it.product_id];
        if (price === undefined)
          return res
            .status(400)
            .json({ message: `Product ${it.product_id} not found` });
        if (!Number.isInteger(it.quantity) || it.quantity <= 0)
          return res
            .status(400)
            .json({ message: `Invalid quantity for product ${it.product_id}` });
        total += price * it.quantity;
      }

      const barcode = uuidv4();

      // Use transaction for order + items creation
      const createdOrder = await prisma.$transaction(async (tx) => {
        const order = await tx.order.create({
          data: {
            userId,
            barcode,
            total,
            addressId,
          },
        });

        const orderItemsData = items.map((it) => ({
          order_id: order.id,
          product_id: it.product_id,
          quantity: it.quantity,
          price: priceMap[it.product_id],
        }));

        // createMany typing for relation model may vary depending on generated client; cast tx to any to avoid type errors
        await (tx as any).order_item.createMany({ data: orderItemsData });

        return order;
      });

      // Fetch full order with items and relations (separate queries to avoid include typing mismatch)
      const orderItems = await (prisma as any).order_item.findMany({
        where: { order_id: createdOrder.id },
        include: { product: true },
      });
      const orderWithRelations = await prisma.order.findUnique({
        where: { id: createdOrder.id },
        include: {
          address: true,
          user: {
            omit: {
              password: true,
              verify_token: true,
              expiration_verify_token: true,
            },
          },
        },
      });

      const responseOrder = {
        ...(orderWithRelations as any),
        order_item: orderItems,
      };
      return res.status(201).json({ success: true, order: responseOrder });
    } catch (error) {
      console.error("createOrder error:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message || error,
      });
    }
  }

  public async getUserOrders(req: Request, res: Response): Promise<Response> {
    const { userId } = req.params as { userId?: string };
    if (!userId) return res.status(401).json({ message: "Unauthorized" });

    try {
      const orders = await prisma.order.findMany({
        where: { userId },
        include: { address: true },
        orderBy: { created_at: "desc" },
      });

      const orderIds = orders.map((o) => o.id);
      const items = await (prisma as any).order_item.findMany({
        where: { order_id: { in: orderIds } },
        include: { product: true },
      });

      // group items by order_id
      const itemsByOrder: Record<string, any[]> = {};
      for (const it of items) {
        itemsByOrder[it.order_id] = itemsByOrder[it.order_id] || [];
        itemsByOrder[it.order_id].push(it);
      }

      const ordersWithItems = orders.map((o) => ({
        ...(o as any),
        order_item: itemsByOrder[o.id] || [],
      }));

      redisCacheMiddleware.setCache(req.originalUrl, ordersWithItems);

      return res.status(200).json({ success: true, data: ordersWithItems });
    } catch (error) {
      console.error("getUserOrders error:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message || error,
      });
    }
  }

  public async getOrderById(req: Request, res: Response): Promise<Response> {
    const { orderId, userId } = req.params as {
      orderId?: string;
      userId: string;
    };
    if (!orderId) return res.status(400).json({ message: "orderId required" });

    try {
      const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: {
          address: true,
          user: {
            omit: {
              password: true,
              verify_token: true,
              expiration_verify_token: true,
            },
          },
        },
      });
      if (!order) return res.status(404).json({ message: "Order not found" });

      const orderItems = await prisma.order_item.findMany({
        where: { order_id: { in: [orderId] } },
        include: { product: true },
      });
      const orderResponse = { ...(order as any), order_item: orderItems };

      return res.status(200).json(orderResponse);
    } catch (error) {
      console.error("getOrderById error:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message || error,
      });
    }
  }
  public async updateOrderStatus(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { orderId } = req.params as { orderId?: string };
    const { status } = req.body as { status?: string };

    if (!orderId) {
      return res.status(400).json({ message: "Order ID is required" });
    }
    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const validStatuses = ["pending", "delivered", "cancelled"];
    if (!validStatuses.includes(status.toLocaleLowerCase())) {
      return res.status(400).json({
        message: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
    }

    try {
      const order = await prisma.order.findUnique({
        where: { id: orderId },
      });

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      const updatedOrder = await prisma.order.update({
        where: { id: orderId },
        data: { status },
      });

      return res.status(200).json({
        success: true,
        message: `Order status updated to ${status}`,
        order: updatedOrder,
      });
    } catch (error) {
      console.error("updateOrderStatus error:", error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: (error as Error).message || error,
      });
    }
  }
}

export const orderController = new OrderController();

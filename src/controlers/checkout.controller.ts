import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export class CheckoutController {
  // POST /checkout/:userId
  public async checkout(req: Request, res: Response) {
    const { userId } = req.params as { userId?: string };
    const { addressId } = req.body as { addressId?: string };
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    if (!addressId)
      return res.status(400).json({ message: "addressId is required" });

    try {
      // Validate address
      const address = await prisma.address.findUnique({
        where: { id: addressId },
      });
      if (!address || address.userId !== userId) {
        return res
          .status(400)
          .json({ message: "Address not found or doesn't belong to user" });
      }

      // Get user's cart and items
      const cart = await prisma.cart.findUnique({
        where: { userId },
        include: { items: true },
      });
      if (!cart || !cart.items.length) {
        return res.status(400).json({ message: "Cart is empty" });
      }

      // Fetch product details
      const productIds = cart.items.map((item) => item.productId);
      const products = await prisma.products.findMany({
        where: { id: { in: productIds } },
        select: { id: true, price: true, in_stock: true },
      });
      const priceMap: Record<string, number> = {};
      const stockMap: Record<string, number> = {};
      products.forEach((p) => {
        priceMap[p.id] = p.price;
        stockMap[p.id] = p.in_stock;
      });

      // Validate stock and calculate total
      let total = 0;
      for (const item of cart.items) {
        const price = priceMap[item.productId];
        const stock = stockMap[item.productId];
        if (price === undefined)
          return res
            .status(400)
            .json({ message: `Product ${item.productId} not found` });
        if (item.quantity > stock)
          return res
            .status(400)
            .json({
              message: `Not enough stock for product ${item.productId}`,
            });
        total += price * item.quantity;
      }

      // Generate barcode
      const barcode = uuidv4();

      // Transaction: create order, order_items, update stock, clear cart
      const order = await prisma.$transaction(async (tx) => {
        // Create order
        const createdOrder = await tx.order.create({
          data: {
            userId,
            barcode,
            total,
            addressId,
          },
        });

        // Create order items
        const orderItemsData = cart.items.map((item) => ({
          order_id: createdOrder.id,
          product_id: item.productId,
          quantity: item.quantity,
          price: priceMap[item.productId],
        }));
        await (tx as any).order_item.createMany({ data: orderItemsData });

        // Update product stock
        for (const item of cart.items) {
          await tx.products.update({
            where: { id: item.productId },
            data: { in_stock: { decrement: item.quantity } },
          });
        }

        // Clear cart
        await tx.cartItem.deleteMany({ where: { cartId: cart.id } });

        // Return order with items
        const orderItems = await (tx as any).order_item.findMany({
          where: { order_id: createdOrder.id },
          include: { product: true },
        });
        const orderWithRelations = await tx.order.findUnique({
          where: { id: createdOrder.id },
          include: { address: true, user: true },
        });
        return { ...(orderWithRelations as any), order_item: orderItems };
      });

      return res.status(201).json({ success: true, order });
    } catch (error) {
      console.error("checkout error:", error);
      return res
        .status(500)
        .json({
          message: "Internal Server Error",
          error: (error as Error).message || error,
        });
    }
  }
}

export const checkoutController = new CheckoutController();

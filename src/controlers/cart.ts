import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cache/redis.middleware";
const prisma = new PrismaClient();

class Calculator {
  private price: number;
  private qty: number;
  private discount: number;
  constructor(price: number, qty: number, discount: number) {
    this.price = price;
    this.qty = qty;
    this.discount = discount;
  }
  private calcTotalPrice() {
    return this.price * this.qty;
  }
  private calcDiscount() {
    const price = this.calcTotalPrice();
    const finalPrice = price - this.discount;
    return Number(finalPrice.toFixed(2));
  }
}

export class Cart extends Calculator {
  constructor(price: number, qty: number, discount: number) {
    super(price, qty, discount);
  }

  public async getAll(request: Request, respones: Response) {
    // const { search } = request.query;
    const { user_id: userId } = request.params;

    try {
      // if (search) {
      //   const data = await prisma.cart.findMany({
      //     where: {
      //       OR: [
      //         {
      //           description: {
      //             startsWith: String(search).trim(),
      //             mode: "insensitive",
      //           },
      //         },
      //         {
      //           name: {
      //             startsWith: String(search).trim(),
      //             mode: "insensitive",
      //           },
      //         },
      //       ],
      //     },
      //   });
      //   respones.status(200).json(data);
      //   return;
      // }
      const data = await prisma.cart.findUnique({
        where: { userId },
        include: { items: { include: { product: true } } },
      });

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, data);
      respones.status(200).json(data);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async create(request: Request, respones: Response) {
    const { product_id, quantity } = request.body;
    const { userId } = request.params;

    try {
      let [cart, product] = await Promise.all([
        await prisma.cart.findUnique({ where: { userId } }),
        await prisma.products.findUnique({
          where: { id: product_id },
        }),
      ]);

      if (!cart) {
        cart = await prisma.cart.create({
          data: {
            userId,
            items: {
              create: [{ productId: product_id, quantity }],
            },
          },
        });
      } else {
        const existingItem = await prisma.cartItem.findFirst({
          where: { cartId: cart.id, productId: product_id },
        });
        if (existingItem) {
          await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + quantity },
          });
        } else {
          await prisma.cartItem.create({
            data: { cartId: cart.id, productId: product_id, quantity },
          });
        }
      }

      // const total_price = new Cart().calcTotalPrice(
      //   product.price,
      //   product.quantity
      // );

      // const price_with_discount = new Cart().calcDiscount(
      //   product.price,
      //   product.discount,
      //   product.quantity
      // );

      respones
        .status(200)
        .json({ message: "product added to cart successfully" });
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }

  public async delete(request: Request, respones: Response) {
    const { userId } = request.params;
    const { product_id } = request.body;

    try {
      const cart = await prisma.cart.findUnique({ where: { userId } });
      if (!cart) return respones.status(404).json({ error: "Cart not found" });
      await prisma.cartItem.deleteMany({
        where: { cartId: cart.id, productId: product_id },
      });

      respones
        .status(200)
        .json({ message: "product removed from cart successfully" });
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
}

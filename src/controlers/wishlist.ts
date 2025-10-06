import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
const prisma = new PrismaClient();
export class Wishlist {
  public async getAll(request: Request, respones: Response) {
    const { user_id } = request.params;

    try {
      const data = await prisma.wishlist.findUnique({
        where: { userId: user_id },
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
    const { product_id } = request.body;
    const { user_id } = request.params;

    try {
      let wishlist = await prisma.wishlist.findUnique({
        where: { userId: user_id },
      });

      if (!wishlist) {
        wishlist = await prisma.wishlist.create({
          data: {
            userId: user_id,
            items: {
              create: [{ productId: product_id }],
            },
          },
        });
      } else {
        await prisma.wishlistItem.create({
          data: { wishlistId: wishlist.id, productId: product_id },
        });
      }

      respones
        .status(200)
        .json({ message: "Product added to wishlist successfully" });
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }

  public async delete(request: Request, respones: Response) {
    const { user_id } = request.params;
    const { product_id } = request.body;

    try {
      const wishlist = await prisma.wishlist.findUnique({
        where: { userId: user_id },
      });
      if (!wishlist)
        return respones.status(404).json({ error: "Wishlist not found" });
      await prisma.wishlistItem.deleteMany({
        where: { wishlistId: wishlist.id, productId: product_id },
      });
      respones
        .status(200)
        .json({ message: "product removed from wishlist successfully" });
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
}

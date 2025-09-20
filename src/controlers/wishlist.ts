import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
const prisma = new PrismaClient();
export class Wishlist {
  public async getAll(request: Request, respones: Response) {
    const { userId } = request.params;

    try {
      const data = await prisma.wishlist.findUnique({
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
    const { productId } = request.body;
    const { userId } = request.params;

    try {
      let wishlist = await prisma.wishlist.findUnique({ where: { userId } });

      if (!wishlist) {
        wishlist = await prisma.wishlist.create({
          data: {
            userId,
            items: {
              create: [{ productId }],
            },
          },
        });
      } else {
        await prisma.wishlistItem.create({
          data: { wishlistId: wishlist.id, productId },
        });
      }

      respones
        .status(200)
        .json({ message: "product added to wishlist successfully" });
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }

  public async delete(request: Request, respones: Response) {
    const { userId } = request.params;
    const { productId } = request.body;

    try {
      const wishlist = await prisma.wishlist.findUnique({ where: { userId } });
      if (!wishlist)
        return respones.status(404).json({ error: "Wishlist not found" });
      await prisma.wishlistItem.deleteMany({
        where: { wishlistId: wishlist.id, productId },
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

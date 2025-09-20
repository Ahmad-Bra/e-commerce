import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
const prisma = new PrismaClient();
export class Brands {
  public async getBrands(request: Request, respones: Response) {
    const { search = "", orderBy } = request.query;
    try {
      if (search || orderBy) {
        const brands = await prisma.brand.findMany({
          orderBy: [
            {
              name: orderBy == "asc" ? "asc" : "desc",
            },
            {
              id: orderBy == "asc" ? "asc" : "desc",
            },
          ],
          where: {
            OR: [
              {
                description: {
                  startsWith: String(search).trim(),
                  mode: "insensitive",
                },
              },
              {
                name: {
                  startsWith: String(search).trim(),
                  mode: "insensitive",
                },
              },
            ],
          },
          include: { products: true },
        });

        // set data to redis cache
        redisCacheMiddleware.setCache(request.originalUrl, brands);

        respones.status(200).json(brands);
        return;
      }
      const brands = await prisma.brand.findMany({
        include: { products: true },
      });

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, brands);

      respones.status(200).json(brands);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async getBrand(request: Request, respones: Response) {
    const { id } = request.params;
    try {
      if (!id) {
        respones.status(400).json({ message: "error params value" });
        return;
      }

      const brand = await prisma.brand.findUnique({
        where: {
          id,
        },
      });
      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, brand);

      respones.status(200).json(brand);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async createBrands(request: Request, respones: Response) {
    const body = request.body;

    try {
      const createdBrands = await prisma.brand.create({
        data: {
          ...body,
        },
        include: {
          products: true,
        },
      });
      respones.status(201).json(createdBrands);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async deleteBrands(request: Request, respones: Response) {
    const { id } = request.params;

    try {
      if (id) {
        await prisma.brand.delete({ where: { id } });

        respones
          .status(200)
          .json({ message: "your brand deleted successfuly" });
        return;
      }

      respones.status(400);
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
}

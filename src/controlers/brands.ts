import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import ErrorsValidation from "../services/ErrorsValidation";
const prisma = new PrismaClient();
export class Brands {
  public async getBrands(request: Request, respones: Response) {
    const { search = "", orderBy, page, limit } = request.query;
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
          take: limit ? Number(limit) : undefined,
          skip: page ? (Number(page) - 1) * Number(limit) : undefined,
          include: { products: true },
        });

        // set data to redis cache
        redisCacheMiddleware.setCache(request.originalUrl, brands);

        respones.status(200).json({
          data: brands,
          page: page ? Number(page) : undefined,
          limit: limit ? Number(limit) : undefined,
          total: brands.length,
        });
        return;
      }
      const brands = await prisma.brand.findMany({
        take: limit ? Number(limit) : undefined,
        skip: page ? (Number(page) - 1) * Number(limit) : undefined,
        include: { products: true },
      });

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, brands);

      respones.status(200).json({
        data: brands,
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        total: brands.length,
      });
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
    new ErrorsValidation(request, respones).errorChecker();

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

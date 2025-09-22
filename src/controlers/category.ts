import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import ErrorsValidation from "../services/ErrorsValidation";
const prisma = new PrismaClient();
export class Category {
  public async getCategories(request: Request, respones: Response) {
    const { search = "", orderBy, page, limit } = request.query;
    try {
      if (search || orderBy) {
        const category = await prisma.category.findMany({
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
        redisCacheMiddleware.setCache(request.originalUrl, category);

        respones.status(200).json({
          data: category,
          page: page ? Number(page) : undefined,
          limit: limit ? Number(limit) : undefined,
          total: category.length,
        });
        return;
      }
      const category = await prisma.category.findMany({
        take: limit ? Number(limit) : undefined,
        skip: page ? (Number(page) - 1) * Number(limit) : undefined,
        include: { products: true },
      });

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, category);

      respones.status(200).json({
        data: category,
        page: page ? Number(page) : undefined,
        limit: limit ? Number(limit) : undefined,
        total: category.length,
      });
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async getCategory(request: Request, respones: Response) {
    const { id } = request.params;
    try {
      if (!id) {
        respones.status(400).json({ message: "error params value" });
        return;
      }

      const category = await prisma.category.findUnique({
        where: {
          id,
        },
      });

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, category);

      respones.status(200).json(category);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async createCategory(request: Request, respones: Response) {
    new ErrorsValidation(request, respones).errorChecker();

    const body = request.body;

    try {
      const createdCategory = await prisma.category.create({
        data: {
          ...body,
        },
        include: {
          products: true,
        },
      });
      respones.status(201).json(createdCategory);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async deleteCategory(request: Request, respones: Response) {
    const { id } = request.params;

    try {
      if (id) {
        await prisma.category.delete({ where: { id } });

        respones
          .status(200)
          .json({ message: "your category deleted successfuly" });
        return;
      }

      respones.status(400);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
}

export const categoryClass = new Category();

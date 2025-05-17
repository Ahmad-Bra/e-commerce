import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
const prisma = new PrismaClient();
export class Category {
  public async getCategories(request: Request, respones: Response) {
    const { search, orderBy } = request.query;
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
        });
        respones.status(200).json(category);
        return;
      }
      const category = await prisma.category.findMany();

      respones.status(200).json(category);
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
      respones.status(200).json(category);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async createCategory(request: Request, respones: Response) {
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

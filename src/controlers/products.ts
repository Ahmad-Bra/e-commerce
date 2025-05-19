import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
const prisma = new PrismaClient();
export class Products {
  public async getProducts(request: Request, respones: Response) {
    const { search, orderBy } = request.query;
    try {
      if (search || orderBy) {
        const products = await prisma.products.findMany({
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
          include: {
            categories: true,
            brands: true,
            comments: true,
          },
        });
        respones.status(200).json(products);
        return;
      }
      const products = await prisma.products.findMany({
        include: {
          categories: true,
          brands: true,
          // comments: true,
        },
      });
      respones.status(200).json(products);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async getProduct(request: Request, respones: Response) {
    const { id } = request.params;
    try {
      if (!id) {
        respones.status(400).json({ message: "error params value" });
        return;
      }

      const product = await prisma.products.findUnique({
        where: {
          id,
        },
      });
      respones.status(200).json(product);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async createProduct(request: Request, respones: Response) {
    const body = request.body;

    try {
      const createdProduct = await prisma.products.create({
        data: {
          ...body,
        },
        include: {
          categories: true,
          brands: true,
          comments: true,
        },
      });
      respones.status(201).json(createdProduct);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async updateProduct(request: Request, respones: Response) {
    const body = request.body;
    const { id } = request.params;
    try {
      const updatedProduct = await prisma.products.update({
        where: { id },
        data: {
          ...body,
        },
      });

      respones.status(200).json({
        message: "your product updated successfuly",
        data: { ...updatedProduct },
      });
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async deleteProduct(request: Request, respones: Response) {
    const { id } = request.params;

    try {
      if (id) {
        await prisma.products.delete({ where: { id } });

        respones
          .status(200)
          .json({ message: "your product deleted successfuly" });
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

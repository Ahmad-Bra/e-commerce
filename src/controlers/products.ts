import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import ErrorsValidation from "../services/ErrorsValidation";

const prisma = new PrismaClient();
export class Products {
  public async seedProducts(request: Request, respones: Response) {
    try {
      // Create sample brands and categories first (find or create)
      let brand1 = await prisma.brand.findFirst({ where: { name: "Acme" } });
      if (!brand1) {
        brand1 = await prisma.brand.create({
          data: { name: "Acme", description: "Acme electronics" },
        });
      }

      let brand2 = await prisma.brand.findFirst({ where: { name: "Contoso" } });
      if (!brand2) {
        brand2 = await prisma.brand.create({
          data: { name: "Contoso", description: "Contoso gadgets" },
        });
      }

      let category1 = await prisma.category.findFirst({
        where: { name: "Laptops" },
      });
      if (!category1) {
        category1 = await prisma.category.create({
          data: { name: "Laptops", description: "Portable computers" },
        });
      }

      let category2 = await prisma.category.findFirst({
        where: { name: "Phones" },
      });
      if (!category2) {
        category2 = await prisma.category.create({
          data: { name: "Phones", description: "Smartphones and mobiles" },
        });
      }

      // Create 30 sample products programmatically
      const created: any[] = [];
      const brands = [brand1, brand2];
      const categories = [category1, category2];

      for (let i = 1; i <= 30; i++) {
        const brand = brands[i % brands.length];
        const category = categories[i % categories.length];
        const name = `${brand.name} Product ${i}`;
        const slug = `${brand.name
          .toLowerCase()
          .replace(/\s+/g, "-")}-product-${i}`;
        // Try to find existing by slug
        let prod = await prisma.products.findFirst({ where: { slug } });
        if (!prod) {
          prod = await prisma.products.create({
            data: {
              name,
              description: `Sample description for ${name}`,
              slug,
              price: Number((100 + i * 10).toFixed(2)),
              currency: "USD",
              discount: i % 5 === 0 ? 10 : 0,
              info: {
                weight: `${1 + (i % 5) * 0.1}kg`,
                color: i % 2 === 0 ? "black" : "white",
              },
              cpu_info: {
                model: `model-${i}`,
                cores: 4 + (i % 4),
                threads: 8 + (i % 4),
              },
              in_stock: 5 + (i % 20),
              rating: Number((3 + (i % 3) * 0.7).toFixed(1)),
              brand: { connect: { id: brand.id } },
              category: { connect: { id: category.id } },
              images: [`/images/${slug}-1.png`],
            },
          });
        }
        created.push(prod);
      }

      respones.status(201).json({ message: "seed completed", data: created });
      return;
    } catch (error) {
      console.error(error);
      respones.status(500).json({ message: "seed failed", error });
      return;
    }
  }
  public async getProducts(request: Request, respones: Response) {
    const {
      search = "",
      orderBy,
      page,
      limit,
      byCategory,
      byBrand,
    } = request.query;

    try {
      if (search || orderBy || byCategory || byBrand) {
        const [total, products] = await Promise.all([
          prisma.products.count(),
          prisma.products.findMany({
            orderBy: [
              {
                name: orderBy == "asc" ? "asc" : "desc",
              },
              {
                id: orderBy == "asc" ? "asc" : "desc",
              },
            ],
            where: {
              categoryId: (byCategory as string)
                ? (byCategory as string)
                : undefined,
              brandId: (byBrand as string) ? (byBrand as string) : undefined,
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
            include: {
              category: {
                select: {
                  id: true,
                  name: true,
                  description: true,
                },
              },
              brand: {
                select: {
                  id: true,
                  name: true,
                  description: true,
                },
              },
              comments: true,
            },
            omit: {
              categoryId: true,
              brandId: true,
            },
          }),
        ]);

        // set data to redis cache
        redisCacheMiddleware.setCache(request.originalUrl, products);

        respones.status(200).json({
          data: products,
          page: page ? Number(page) : undefined,
          nextPage:
            total > Number(page) * Number(limit)
              ? Number(page) + 1
              : page
              ? null
              : undefined,
          limit: limit ? Number(limit) : undefined,
          total: products.length,
        });
        return;
      }
      const [total, products] = await Promise.all([
        prisma.products.count(),
        prisma.products.findMany({
          orderBy: [
            {
              name: "asc",
            },
            {
              id: "asc",
            },
          ],
          take: limit ? Number(limit) : undefined,
          skip: page ? (Number(page) - 1) * Number(limit) : undefined,
          include: {
            category: {
              select: {
                id: true,
                name: true,
                description: true,
              },
            },
            brand: {
              select: {
                id: true,
                name: true,
                description: true,
              },
            },
            comments: true,
          },
          omit: {
            categoryId: true,
            brandId: true,
          },
        }),
      ]);

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, products);

      respones.status(200).json({
        data: products,
        page: page ? Number(page) : undefined,
        nextPage:
          total > Number(page) * Number(limit)
            ? Number(page) + 1
            : page
            ? null
            : undefined,
        limit: limit ? Number(limit) : undefined,
        total: products.length,
      });
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

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, product);

      respones.status(200).json(product);
      return;
    } catch (error) {
      console.log(error);
      respones.status(500).json({ messgae: error });
      return;
    }
  }
  public async createProduct(request: Request, respones: Response) {
    new ErrorsValidation(request, respones).errorChecker();
    const body = request.body;

    try {
      const createdProduct = await prisma.products.create({
        data: {
          ...body,
        },
        include: {
          category: true,
          brand: true,
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
    new ErrorsValidation(request, respones).errorChecker();

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

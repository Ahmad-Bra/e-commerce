"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const index_1 = require("../../generated/prisma/index");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
const ErrorsValidation_1 = __importDefault(require("../services/ErrorsValidation"));
const prisma = new index_1.PrismaClient();
class Products {
    seedProducts(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Create sample brands and categories first (find or create)
                let brand1 = yield prisma.brand.findFirst({ where: { name: "Acme" } });
                if (!brand1) {
                    brand1 = yield prisma.brand.create({
                        data: { name: "Acme", description: "Acme electronics" },
                    });
                }
                let brand2 = yield prisma.brand.findFirst({ where: { name: "Contoso" } });
                if (!brand2) {
                    brand2 = yield prisma.brand.create({
                        data: { name: "Contoso", description: "Contoso gadgets" },
                    });
                }
                let category1 = yield prisma.category.findFirst({
                    where: { name: "Laptops" },
                });
                if (!category1) {
                    category1 = yield prisma.category.create({
                        data: { name: "Laptops", description: "Portable computers" },
                    });
                }
                let category2 = yield prisma.category.findFirst({
                    where: { name: "Phones" },
                });
                if (!category2) {
                    category2 = yield prisma.category.create({
                        data: { name: "Phones", description: "Smartphones and mobiles" },
                    });
                }
                // Create 30 sample products programmatically
                const created = [];
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
                    let prod = yield prisma.products.findFirst({ where: { slug } });
                    if (!prod) {
                        prod = yield prisma.products.create({
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
            }
            catch (error) {
                console.error(error);
                respones.status(500).json({ message: "seed failed", error });
                return;
            }
        });
    }
    getProducts(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search = "", orderBy, page, limit, byCategory, byBrand, } = request.query;
            try {
                if (search || orderBy || byCategory || byBrand) {
                    const [total, products] = yield Promise.all([
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
                                categoryId: byCategory
                                    ? byCategory
                                    : undefined,
                                brandId: byBrand ? byBrand : undefined,
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
                                category: true,
                                brand: true,
                                comments: true,
                            },
                        }),
                    ]);
                    // set data to redis cache
                    redis_middleware_1.redisCacheMiddleware.setCache(request.originalUrl, products);
                    respones.status(200).json({
                        data: products,
                        page: page ? Number(page) : undefined,
                        nextPage: total > Number(page) * Number(limit)
                            ? Number(page) + 1
                            : page
                                ? null
                                : undefined,
                        limit: limit ? Number(limit) : undefined,
                        total: products.length,
                    });
                    return;
                }
                const [total, products] = yield Promise.all([
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
                            category: true,
                            brand: true,
                            comments: true,
                        },
                    }),
                ]);
                // set data to redis cache
                redis_middleware_1.redisCacheMiddleware.setCache(request.originalUrl, products);
                respones.status(200).json({
                    data: products,
                    page: page ? Number(page) : undefined,
                    nextPage: total > Number(page) * Number(limit) ? Number(page) + 1 : null,
                    limit: limit ? Number(limit) : undefined,
                    total: products.length,
                });
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    getProduct(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                if (!id) {
                    respones.status(400).json({ message: "error params value" });
                    return;
                }
                const product = yield prisma.products.findUnique({
                    where: {
                        id,
                    },
                });
                // set data to redis cache
                redis_middleware_1.redisCacheMiddleware.setCache(request.originalUrl, product);
                respones.status(200).json(product);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    createProduct(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            new ErrorsValidation_1.default(request, respones).errorChecker();
            const body = request.body;
            try {
                const createdProduct = yield prisma.products.create({
                    data: Object.assign({}, body),
                    include: {
                        category: true,
                        brand: true,
                        comments: true,
                    },
                });
                respones.status(201).json(createdProduct);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    updateProduct(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            new ErrorsValidation_1.default(request, respones).errorChecker();
            const body = request.body;
            const { id } = request.params;
            try {
                const updatedProduct = yield prisma.products.update({
                    where: { id },
                    data: Object.assign({}, body),
                });
                respones.status(200).json({
                    message: "your product updated successfuly",
                    data: Object.assign({}, updatedProduct),
                });
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    deleteProduct(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                if (id) {
                    yield prisma.products.delete({ where: { id } });
                    respones
                        .status(200)
                        .json({ message: "your product deleted successfuly" });
                    return;
                }
                respones.status(400);
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
}
exports.Products = Products;

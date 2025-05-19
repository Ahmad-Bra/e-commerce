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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const index_1 = require("../../generated/prisma/index");
const prisma = new index_1.PrismaClient();
class Products {
    getProducts(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search, orderBy } = request.query;
            try {
                if (search || orderBy) {
                    const products = yield prisma.products.findMany({
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
                const products = yield prisma.products.findMany({
                    include: {
                        categories: true,
                        brands: true,
                        // comments: true,
                    },
                });
                respones.status(200).json(products);
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
            const body = request.body;
            try {
                const createdProduct = yield prisma.products.create({
                    data: Object.assign({}, body),
                    include: {
                        categories: true,
                        brands: true,
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

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
exports.Category = void 0;
const index_1 = require("../../generated/prisma/index");
const prisma = new index_1.PrismaClient();
class Category {
    getCategories(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search, orderBy } = request.query;
            try {
                if (search || orderBy) {
                    const category = yield prisma.category.findMany({
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
                const category = yield prisma.category.findMany();
                respones.status(200).json(category);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    getCategory(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                if (!id) {
                    respones.status(400).json({ message: "error params value" });
                    return;
                }
                const category = yield prisma.category.findUnique({
                    where: {
                        id,
                    },
                });
                respones.status(200).json(category);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    createCategory(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = request.body;
            try {
                const createdCategory = yield prisma.category.create({
                    data: Object.assign({}, body),
                    include: {
                        products: true,
                    },
                });
                respones.status(201).json(createdCategory);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    deleteCategory(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                if (id) {
                    yield prisma.category.delete({ where: { id } });
                    respones
                        .status(200)
                        .json({ message: "your category deleted successfuly" });
                    return;
                }
                respones.status(400);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
}
exports.Category = Category;

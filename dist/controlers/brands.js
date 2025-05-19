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
exports.Brands = void 0;
const index_1 = require("../../generated/prisma/index");
const prisma = new index_1.PrismaClient();
class Brands {
    getBrands(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search, orderBy } = request.query;
            try {
                if (search || orderBy) {
                    const brands = yield prisma.brand.findMany({
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
                    respones.status(200).json(brands);
                    return;
                }
                const brands = yield prisma.brand.findMany();
                respones.status(200).json(brands);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    getBrand(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                if (!id) {
                    respones.status(400).json({ message: "error params value" });
                    return;
                }
                const brands = yield prisma.brand.findUnique({
                    where: {
                        id,
                    },
                });
                respones.status(200).json(brands);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    createBrands(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = request.body;
            try {
                const createdBrands = yield prisma.brand.create({
                    data: Object.assign({}, body),
                    include: {
                        products: true,
                    },
                });
                respones.status(201).json(createdBrands);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    deleteBrands(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            try {
                if (id) {
                    yield prisma.brand.delete({ where: { id } });
                    respones
                        .status(200)
                        .json({ message: "your brand deleted successfuly" });
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
exports.Brands = Brands;

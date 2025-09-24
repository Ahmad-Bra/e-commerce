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
exports.Wishlist = void 0;
const index_1 = require("../../generated/prisma/index");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
const prisma = new index_1.PrismaClient();
class Wishlist {
    getAll(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request.params;
            try {
                const data = yield prisma.wishlist.findUnique({
                    where: { userId },
                    include: { items: { include: { product: true } } },
                });
                // set data to redis cache
                redis_middleware_1.redisCacheMiddleware.setCache(request.originalUrl, data);
                respones.status(200).json(data);
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    create(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productId } = request.body;
            const { userId } = request.params;
            try {
                let wishlist = yield prisma.wishlist.findUnique({ where: { userId } });
                if (!wishlist) {
                    wishlist = yield prisma.wishlist.create({
                        data: {
                            userId,
                            items: {
                                create: [{ productId }],
                            },
                        },
                    });
                }
                else {
                    yield prisma.wishlistItem.create({
                        data: { wishlistId: wishlist.id, productId },
                    });
                }
                respones
                    .status(200)
                    .json({ message: "Product added to wishlist successfully" });
                return;
            }
            catch (error) {
                console.log(error);
                respones.status(500).json({ messgae: error });
                return;
            }
        });
    }
    delete(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request.params;
            const { productId } = request.body;
            try {
                const wishlist = yield prisma.wishlist.findUnique({ where: { userId } });
                if (!wishlist)
                    return respones.status(404).json({ error: "Wishlist not found" });
                yield prisma.wishlistItem.deleteMany({
                    where: { wishlistId: wishlist.id, productId },
                });
                respones
                    .status(200)
                    .json({ message: "product removed from wishlist successfully" });
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
exports.Wishlist = Wishlist;

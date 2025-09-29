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
exports.Cart = void 0;
const index_1 = require("../../generated/prisma/index");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
const prisma = new index_1.PrismaClient();
class Calculator {
    constructor(price, qty, discount) {
        this.price = price;
        this.qty = qty;
        this.discount = discount;
    }
    calcTotalPrice() {
        return this.price * this.qty;
    }
    calcDiscount() {
        const price = this.calcTotalPrice();
        const finalPrice = price - this.discount;
        return Number(finalPrice.toFixed(2));
    }
}
class Cart extends Calculator {
    constructor(price, qty, discount) {
        super(price, qty, discount);
    }
    getAll(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { search } = request.query;
            const { userId } = request.params;
            try {
                // if (search) {
                //   const data = await prisma.cart.findMany({
                //     where: {
                //       OR: [
                //         {
                //           description: {
                //             startsWith: String(search).trim(),
                //             mode: "insensitive",
                //           },
                //         },
                //         {
                //           name: {
                //             startsWith: String(search).trim(),
                //             mode: "insensitive",
                //           },
                //         },
                //       ],
                //     },
                //   });
                //   respones.status(200).json(data);
                //   return;
                // }
                const data = yield prisma.cart.findUnique({
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
            const { productId, quantity } = request.body;
            const { userId } = request.params;
            try {
                let [cart, product] = yield Promise.all([
                    yield prisma.cart.findUnique({ where: { userId } }),
                    yield prisma.products.findUnique({
                        where: { id: productId },
                    }),
                ]);
                if (!cart) {
                    cart = yield prisma.cart.create({
                        data: {
                            userId,
                            items: {
                                create: [{ productId, quantity }],
                            },
                        },
                    });
                }
                else {
                    const existingItem = yield prisma.cartItem.findFirst({
                        where: { cartId: cart.id, productId },
                    });
                    if (existingItem) {
                        yield prisma.cartItem.update({
                            where: { id: existingItem.id },
                            data: { quantity: existingItem.quantity + quantity },
                        });
                    }
                    else {
                        yield prisma.cartItem.create({
                            data: { cartId: cart.id, productId, quantity },
                        });
                    }
                }
                // const total_price = new Cart().calcTotalPrice(
                //   product.price,
                //   product.quantity
                // );
                // const price_with_discount = new Cart().calcDiscount(
                //   product.price,
                //   product.discount,
                //   product.quantity
                // );
                respones
                    .status(200)
                    .json({ message: "product added to cart successfully" });
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
                const cart = yield prisma.cart.findUnique({ where: { userId } });
                if (!cart)
                    return respones.status(404).json({ error: "Cart not found" });
                yield prisma.cartItem.deleteMany({
                    where: { cartId: cart.id, productId },
                });
                respones
                    .status(200)
                    .json({ message: "product removed from cart successfully" });
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
exports.Cart = Cart;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const wishlist_1 = require("../controlers/wishlist");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
exports.router = express_1.default.Router();
const wishlistClass = new wishlist_1.Wishlist();
exports.router.get("/wishlist/:userId", redis_middleware_1.redisCacheMiddleware.getCache, wishlistClass.getAll);
exports.router.post("/wishlist/:userId", wishlistClass.create);
exports.router.delete("/wishlist/:userId", wishlistClass.delete);

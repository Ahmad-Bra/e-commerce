"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const cart_1 = require("../controlers/cart");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
exports.router = express_1.default.Router();
const cartClass = new cart_1.Cart();
exports.router.get("/cart/:userId", redis_middleware_1.redisCacheMiddleware.getCache, cartClass.getAll);
exports.router.post("/cart/:userId", cartClass.create);
exports.router.delete("/cart/:userId", cartClass.delete);

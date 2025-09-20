"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const products_1 = require("../controlers/products");
const authentication_1 = require("../middleware/auth/authentication");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
exports.router = express_1.default.Router();
const productClass = new products_1.Products();
exports.router.get("/products", redis_middleware_1.redisCacheMiddleware.getCache, productClass.getProducts);
exports.router.get("/products/:id", redis_middleware_1.redisCacheMiddleware.getCache, productClass.getProduct);
exports.router.post("/products", authentication_1.isUserAuthorized, productClass.createProduct);
exports.router.put("/products/:id", authentication_1.isUserAuthorized, productClass.updateProduct);
exports.router.delete("/products/:id", authentication_1.isUserAuthorized, productClass.deleteProduct);

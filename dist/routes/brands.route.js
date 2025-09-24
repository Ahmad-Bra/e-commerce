"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const brands_1 = require("../controlers/brands");
const authentication_1 = require("../middleware/auth/authentication");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
const express_validator_1 = require("express-validator");
const validation_1 = require("../middleware/api/validation");
exports.router = express_1.default.Router();
const brandsClass = new brands_1.Brands();
exports.router.get("/brands", redis_middleware_1.redisCacheMiddleware.getCache, brandsClass.getBrands);
exports.router.get("/brands/:id", redis_middleware_1.redisCacheMiddleware.getCache, brandsClass.getBrand);
exports.router.post("/brands", authentication_1.isUserAuthorized, (0, express_validator_1.checkSchema)(validation_1.brandRules), brandsClass.createBrands);
exports.router.delete("/brands/:id", authentication_1.isUserAuthorized, brandsClass.deleteBrands);

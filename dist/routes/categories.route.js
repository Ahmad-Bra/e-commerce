"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../middleware/auth/authentication");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
const category_1 = require("../controlers/category");
const validation_1 = require("../middleware/api/validation");
const express_validator_1 = require("express-validator");
exports.router = express_1.default.Router();
exports.router.get("/categories", redis_middleware_1.redisCacheMiddleware.getCache, category_1.categoryClass.getCategories);
exports.router.get("/categories/:id", redis_middleware_1.redisCacheMiddleware.getCache, category_1.categoryClass.getCategory);
exports.router.post("/categories", authentication_1.isUserAuthorized, (0, express_validator_1.checkSchema)(validation_1.categoryRules), category_1.categoryClass.createCategory);
exports.router.delete("/categories/:id", authentication_1.isUserAuthorized, category_1.categoryClass.deleteCategory);

// @ts-nocheck
import express from "express";
import { Category } from "../controllers/category.controller";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cache/redis.middleware";
import { categoryClass } from "../controllers/category.controller";
import { categoryRules } from "../middleware/api/validation";
import { checkSchema } from "express-validator";
export const router = express.Router();

router.get(
  "/categories",
  redisCacheMiddleware.getCache,
  categoryClass.getCategories
);

router.get(
  "/categories/:id",
  redisCacheMiddleware.getCache,
  categoryClass.getCategory
);

router.post(
  "/categories",
  isUserAuthorized,
  checkSchema(categoryRules),
  categoryClass.createCategory
);

router.delete(
  "/categories/:id",
  isUserAuthorized,
  categoryClass.deleteCategory
);

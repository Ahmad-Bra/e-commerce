// @ts-nocheck
import express from "express";
import { Category } from "../controlers/category";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import { categoryClass } from "../controlers/category";
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

router.post("/categories", isUserAuthorized, categoryClass.createCategory);

router.delete(
  "/categories/:id",
  isUserAuthorized,
  categoryClass.deleteCategory
);

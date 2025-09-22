// @ts-nocheck
import express from "express";
import { Brands } from "../controlers/brands";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import { checkSchema } from "express-validator";
import { brandRules } from "../middleware/api/validation";
export const router = express.Router();
const brandsClass = new Brands();

router.get("/brands", redisCacheMiddleware.getCache, brandsClass.getBrands);

router.get("/brands/:id", redisCacheMiddleware.getCache, brandsClass.getBrand);

router.post(
  "/brands",
  isUserAuthorized,
  checkSchema(brandRules),
  brandsClass.createBrands
);

router.delete("/brands/:id", isUserAuthorized, brandsClass.deleteBrands);

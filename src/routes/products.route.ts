// @ts-nocheck
import express from "express";
import { Products } from "../controlers/products";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import { productRules } from "../middleware/api/validation";
import { checkSchema } from "express-validator";
export const router = express.Router();
const productClass = new Products();

router.get(
  "/products",
  redisCacheMiddleware.getCache,
  productClass.getProducts
);

// Seed endpoint must come before the param route to avoid matching ':id' = 'seed'
router.post("/products/seed", productClass.seedProducts);

router.get(
  "/products/:id",
  redisCacheMiddleware.getCache,
  productClass.getProduct
);

router.post(
  "/products",
  isUserAuthorized,
  checkSchema(productRules),
  productClass.createProduct
);
router.put(
  "/products/:id",
  isUserAuthorized,
  checkSchema(productRules),
  productClass.updateProduct
);
router.delete("/products/:id", isUserAuthorized, productClass.deleteProduct);

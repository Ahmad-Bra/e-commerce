// @ts-nocheck
import express from "express";
import { Products } from "../controlers/products";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
export const router = express.Router();
const productClass = new Products();

router.get(
  "/products",
  redisCacheMiddleware.getCache,
  productClass.getProducts
);
router.get(
  "/products/:id",
  redisCacheMiddleware.getCache,
  productClass.getProduct
);

router.post("/products", isUserAuthorized, productClass.createProduct);
router.put("/products/:id", isUserAuthorized, productClass.updateProduct);
router.delete("/products/:id", isUserAuthorized, productClass.deleteProduct);

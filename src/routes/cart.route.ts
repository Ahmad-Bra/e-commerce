// @ts-nocheck
import express from "express";
import { Cart } from "../controlers/cart";
import { redisCacheMiddleware } from "../middleware/cache/redis.middleware";
import { isUserAuthorized } from "../middleware/auth/authentication";
export const router = express.Router();
const cartClass = new Cart();

router.get(
  "/cart/:user_id",
  isUserAuthorized,
  redisCacheMiddleware.getCache,
  cartClass.getAll
);

router.post("/cart/:user_id", isUserAuthorized, cartClass.create);

router.delete("/cart/:user_id", isUserAuthorized, cartClass.delete);

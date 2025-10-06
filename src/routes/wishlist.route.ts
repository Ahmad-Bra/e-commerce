// @ts-nocheck
import express from "express";
import { Wishlist } from "../controlers/wishlist";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
export const router = express.Router();
const wishlistClass = new Wishlist();

router.get(
  "/wishlist/:user_id",
  redisCacheMiddleware.getCache,
  wishlistClass.getAll
);

router.post("/wishlist/:user_id", wishlistClass.create);

router.delete("/wishlist/:user_id", wishlistClass.delete);

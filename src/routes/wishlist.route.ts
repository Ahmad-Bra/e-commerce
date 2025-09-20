// @ts-nocheck
import express from "express";
import { Wishlist } from "../controlers/wishlist";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
export const router = express.Router();
const wishlistClass = new Wishlist();

router.get(
  "/wishlist/:userId",
  redisCacheMiddleware.getCache,
  wishlistClass.getAll
);

router.post("/wishlist/:userId", wishlistClass.create);

router.delete("/wishlist/:userId", wishlistClass.delete);

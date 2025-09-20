// @ts-nocheck
import express from "express";
import { Cart } from "../controlers/cart";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
export const router = express.Router();
const cartClass = new Cart();

router.get("/cart/:userId", redisCacheMiddleware.getCache, cartClass.getAll);

router.post("/cart/:userId", cartClass.create);

router.delete("/cart/:userId", cartClass.delete);

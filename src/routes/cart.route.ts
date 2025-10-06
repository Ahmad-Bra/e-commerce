// @ts-nocheck
import express from "express";
import { Cart } from "../controlers/cart";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
export const router = express.Router();
const cartClass = new Cart();

router.get("/cart/:user_id", redisCacheMiddleware.getCache, cartClass.getAll);

router.post("/cart/:user_id", cartClass.create);

router.delete("/cart/:user_id", cartClass.delete);

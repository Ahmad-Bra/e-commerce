// @ts-nocheck
import express from "express";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { body, checkSchema } from "express-validator";
import { commentsRules } from "../middleware/api/validation";
export const router = express.Router();
import { commentClass } from "../controllers/comments.controller";
import { redisCacheMiddleware } from "../middleware/cache/redis.middleware";

router.get(
  "/comments/:product_id",
  redisCacheMiddleware.getCache,
  commentClass.getComments
);

router.post(
  "/comments",
  isUserAuthorized,
  checkSchema(commentsRules),
  commentClass.createComment
);

router.put(
  "/comments/:comment_id",
  isUserAuthorized,
  checkSchema(commentsRules),
  commentClass.updateComment
);

router.delete(
  "/comments/:comment_id",
  isUserAuthorized,
  commentClass.deleteComment
);

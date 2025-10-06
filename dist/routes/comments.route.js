"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const authentication_1 = require("../middleware/auth/authentication");
const express_validator_1 = require("express-validator");
const validation_1 = require("../middleware/api/validation");
exports.router = express_1.default.Router();
const comments_1 = require("../controlers/comments");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
exports.router.get("/comments/:product_id", redis_middleware_1.redisCacheMiddleware.getCache, comments_1.commentClass.getComments);
exports.router.post("/comments", authentication_1.isUserAuthorized, (0, express_validator_1.checkSchema)(validation_1.commentsRules), comments_1.commentClass.createComment);
exports.router.put("/comments/:comment_id", authentication_1.isUserAuthorized, (0, express_validator_1.checkSchema)(validation_1.commentsRules), comments_1.commentClass.updateComment);
exports.router.delete("/comments/:comment_id", authentication_1.isUserAuthorized, comments_1.commentClass.deleteComment);

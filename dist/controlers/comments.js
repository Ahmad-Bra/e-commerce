"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentClass = void 0;
const ErrorsValidation_1 = __importDefault(require("../services/ErrorsValidation"));
const index_1 = require("../../generated/prisma/index");
const redis_middleware_1 = require("../middleware/cashe/redis.middleware");
const prisma = new index_1.PrismaClient();
class Comments {
    checkUser(req, res, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield prisma.user.findUnique({
                    where: { id: user_id },
                });
                if (!user)
                    return res.status(404).json({ message: "User not found" });
            }
            catch (error) {
                console.log("error while finding user", error);
                return res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    getComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            new ErrorsValidation_1.default(req, res);
            try {
                const { product_id } = req.params;
                const comments = yield prisma.comments.findMany({
                    where: { product_id },
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            },
                        },
                        product: {
                            select: {
                                id: true,
                                name: true,
                                description: true,
                            },
                        },
                    },
                    omit: {
                        author_id: true,
                        product_id: true,
                    },
                });
                if (!comments) {
                    return res.status(404).json({ message: "Comment not found" });
                }
                redis_middleware_1.redisCacheMiddleware.setCache(req.originalUrl, comments);
                return res.json({
                    success: true,
                    data: comments,
                    total: comments.length,
                });
            }
            catch (error) {
                console.error("Error fetching comment:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            new ErrorsValidation_1.default(req, res);
            const { title, description, rating, author_id, product_id } = req.body;
            try {
                const user = yield prisma.user.findUnique({
                    where: { id: author_id },
                });
                if (!user)
                    return res.status(404).json({ message: "User not found" });
                const newComment = yield prisma.comments.create({
                    data: {
                        author_id,
                        product_id,
                        title,
                        description,
                        rating,
                    },
                });
                return res
                    .status(201)
                    .json({ message: "Comment created successfuly", comment: newComment });
            }
            catch (error) {
                console.error("Error creating comment:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    updateComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            new ErrorsValidation_1.default(req, res);
            const { comment_id: commentId } = req.params;
            const newComment = req.body;
            try {
                const updatedComment = yield prisma.comments.update({
                    where: { id: commentId },
                    data: Object.assign(Object.assign({}, newComment), { updated_at: new Date().toISOString() }),
                });
                res.status(200).json({
                    success: true,
                    message: "Comment updated successfuly",
                    comment: updatedComment,
                });
            }
            catch (error) {
                console.error("Error updating comment:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    deleteComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            new ErrorsValidation_1.default(req, res);
            try {
                const { comment_id: commentId } = req.params;
                const { author_id } = req.body;
                yield prisma.comments.delete({
                    where: { id: commentId, author_id },
                });
                res.status(204).send(); // No content
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
}
exports.commentClass = new Comments();

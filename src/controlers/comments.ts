import { Request, Response } from "express";
import ErrorsValidation from "../services/ErrorsValidation";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";

const prisma = new PrismaClient();

class Comments {
  public async checkUser(req: Request, res: Response, user_id: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: user_id },
      });
      if (!user) return res.status(404).json({ message: "User not found" });
    } catch (error) {
      console.log("error while finding user", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  public async getComments(req: Request, res: Response): Promise<any> {
    new ErrorsValidation(req, res);

    try {
      const { product_id } = req.params;

      const comments = await prisma.comments.findMany({
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
      redisCacheMiddleware.setCache(req.originalUrl, comments);

      return res.json({
        success: true,
        data: comments,
        total: comments.length,
      });
    } catch (error) {
      console.error("Error fetching comment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  public async createComment(req: Request, res: Response): Promise<any> {
    new ErrorsValidation(req, res);
    const { title, description, rating, author_id, product_id } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { id: author_id },
      });

      if (!user) return res.status(404).json({ message: "User not found" });

      const newComment = await prisma.comments.create({
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
    } catch (error) {
      console.error("Error creating comment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  public async updateComment(req: Request, res: Response): Promise<any> {
    new ErrorsValidation(req, res);

    const { comment_id: commentId } = req.params;
    const newComment = req.body;

    try {
      const updatedComment = await prisma.comments.update({
        where: { id: commentId },
        data: {
          ...newComment,
          updated_at: new Date().toISOString(),
        },
      });
      res.status(200).json({
        success: true,
        message: "Comment updated successfuly",
        comment: updatedComment,
      });
    } catch (error) {
      console.error("Error updating comment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  public async deleteComment(req: Request, res: Response): Promise<any> {
    new ErrorsValidation(req, res);

    try {
      const { comment_id: commentId } = req.params;
      const { author_id } = req.body;
      await prisma.comments.delete({
        where: { id: commentId, author_id },
      });
      res.status(204).send(); // No content
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export const commentClass = new Comments();

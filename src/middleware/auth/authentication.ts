import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const isUserAuthorized = async (
  request: Request,
  respones: Response,
  next: NextFunction
) => {
  const token = request.headers?.authorization?.split(" ")[1];
  if (!token) return respones.status(401).json({ message: "Unauthorized" });

  const isTokenValid = jwt.verify(token, process.env.JWT_SECRET as string);
  if (!isTokenValid)
    return respones.status(401).json({ message: "Expired token" });

  next();
};

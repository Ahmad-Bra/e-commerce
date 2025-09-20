import { NextFunction, Request, Response } from "express";
export const isUserAuthorized = async (
  request: Request,
  respones: Response,
  next: NextFunction
) => {
  const token = request.headers?.authorization?.split(" ")[1];
  if (!token) {
    respones.status(401).json({ message: "Unauthorized" });
    return;
  }

  next();
};

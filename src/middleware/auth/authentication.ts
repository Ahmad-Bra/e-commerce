import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
export const isUserAuthorized = async (
  request: Request,
  respones: Response,
  next: NextFunction
): Promise<any> => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return respones.status(401).json({ error: "No authorization header" });
  }

  const [scheme, token] = authHeader.split(" ");
  if (scheme !== "Bearer" || !token) {
    return respones
      .status(401)
      .json({ error: "Malformed authorization header" });
  }

  // optional extra guard
  if (typeof token !== "string" || token.split(".").length !== 3) {
    return respones.status(401).json({ error: "Malformed token" });
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET as string);
  const expiresAt = (payload as any).exp * 1000; // Convert to milliseconds
  if (Date.now() > expiresAt) {
    return respones.status(401).json({ error: "Token has expired" });
  }

  next();
};

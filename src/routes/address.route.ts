import express, { Request, Response, NextFunction } from "express";
import { address } from "../controlers/address.controller";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import { checkSchema } from "express-validator";
import { addressRules } from "../middleware/api/validation";

export const router = express.Router();

const asyncWrapper = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

router.get(
  "/address/:userId",
  isUserAuthorized,
  redisCacheMiddleware.getCache,
  asyncWrapper(address.getUserAddresses)
);
router.post(
  "/address/:userId",
  isUserAuthorized,
  checkSchema(addressRules),
  asyncWrapper(address.createUserAddress)
);
router.put(
  "/address/:userId/:id",
  isUserAuthorized,
  checkSchema(addressRules),
  asyncWrapper(address.updateUserAddress)
);
router.delete(
  "/address/:userId/:id",
  isUserAuthorized,
  asyncWrapper(address.deleteUserAddress)
);
export default router;

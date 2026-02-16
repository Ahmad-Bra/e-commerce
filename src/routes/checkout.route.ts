import { Router, RequestHandler } from "express";
import { checkoutController } from "../controlers/checkout.controller";
import { isUserAuthorized } from "../middleware/auth/authentication";
const router = Router();

// POST /checkout/:userId
router.post("/checkout/:userId", isUserAuthorized, ((req, res, next) => {
  checkoutController.checkout(req, res).catch(next);
}) as RequestHandler);

export { router };

// @ts-nocheck
import express from "express";
import { PaymentsController } from "../controllers/payments.controller";
import { isUserAuthorized } from "../middleware/auth/authentication";

export const router = express.Router();
const paymentsController = new PaymentsController();

router.post(
  "/payments/create-payment-intent/:user_id",
  isUserAuthorized,
  paymentsController.createPaymentIntent
);

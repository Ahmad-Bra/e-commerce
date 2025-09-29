// @ts-nocheck
import express from "express";
import { PaymentsController } from "../controlers/payments";
import { isUserAuthorized } from "../middleware/auth/authentication";

export const router = express.Router();
const paymentsController = new PaymentsController();

router.post(
  "/payments/create-payment-intent/:userId",
  isUserAuthorized,
  paymentsController.createPaymentIntent
); 
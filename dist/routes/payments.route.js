"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const payments_1 = require("../controlers/payments");
const authentication_1 = require("../middleware/auth/authentication");
exports.router = express_1.default.Router();
const paymentsController = new payments_1.PaymentsController();
exports.router.post("/payments/create-payment-intent/:userId", authentication_1.isUserAuthorized, paymentsController.createPaymentIntent);

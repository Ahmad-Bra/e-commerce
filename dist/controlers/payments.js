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
exports.PaymentsController = void 0;
const index_1 = __importDefault(require("../index"));
const index_2 = require("../../generated/prisma/index");
const prisma = new index_2.PrismaClient();
class PaymentsController {
    createPaymentIntent(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = request.params;
            try {
                const cart = yield prisma.cart.findUnique({
                    where: { userId },
                    include: { items: { include: { product: true } } },
                });
                if (!cart || !cart.items || cart.items.length === 0) {
                    response.status(400).json({ error: "Cart is empty" });
                    return;
                }
                const amountInCents = cart.items.reduce((sum, item) => {
                    const price = Number(item.product.price || 0);
                    const quantity = Number(item.quantity || 0);
                    return sum + Math.round(price * 100) * quantity;
                }, 0);
                if (amountInCents <= 0) {
                    response.status(400).json({ error: "Invalid cart total" });
                    return;
                }
                const paymentIntent = yield index_1.default.paymentIntents.create({
                    amount: amountInCents,
                    currency: "usd",
                    automatic_payment_methods: { enabled: true },
                    metadata: { userId, cartId: cart.id },
                });
                response.status(200).json({ clientSecret: paymentIntent.client_secret });
                return;
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: "Failed to create payment intent" });
                return;
            }
        });
    }
    stripeWebhook(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const sig = request.headers["stripe-signature"];
            let event;
            try {
                if (!sig) {
                    response.status(400).send("Missing Stripe signature");
                    return;
                }
                const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
                event = index_1.default.webhooks.constructEvent(request.rawBody || request.body, sig, endpointSecret);
            }
            catch (err) {
                console.error(`Webhook signature verification failed.`, err);
                response.status(400).send(`Webhook Error`);
                return;
            }
            try {
                switch (event.type) {
                    case "payment_intent.succeeded": {
                        const paymentIntent = event.data.object;
                        break;
                    }
                    case "payment_intent.payment_failed": {
                        break;
                    }
                    default:
                        break;
                }
                response.json({ received: true });
                return;
            }
            catch (err) {
                console.error("Error handling webhook:", err);
                response.status(500).send("Webhook handler failed");
                return;
            }
        });
    }
}
exports.PaymentsController = PaymentsController;

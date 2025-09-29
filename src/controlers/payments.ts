import { Request, Response } from "express";
import stripe from "../index";
import type Stripe from "stripe";
import { PrismaClient } from "../../generated/prisma/index";

const prisma = new PrismaClient();

export class PaymentsController {
  public async createPaymentIntent(request: Request, response: Response) {
    const { userId } = request.params as { userId: string };

    try {
      const cart = await prisma.cart.findUnique({
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

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        metadata: { userId, cartId: cart.id },
      });

      response.status(200).json({ clientSecret: paymentIntent.client_secret });
      return;
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: "Failed to create payment intent" });
      return;
    }
  }

  public async stripeWebhook(request: Request, response: Response) {
    const sig = request.headers["stripe-signature"] as string | undefined;

    let event: Stripe.Event;

    try {
      if (!sig) {
        response.status(400).send("Missing Stripe signature");
        return;
      }

      const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
      event = stripe.webhooks.constructEvent(
        (request as any).rawBody || (request as any).body,
        sig,
        endpointSecret
      );
    } catch (err) {
      console.error(`Webhook signature verification failed.`, err);
      response.status(400).send(`Webhook Error`);
      return;
    }

    try {
      switch (event.type) {
        case "payment_intent.succeeded": {
          const paymentIntent = (event as any).data.object;
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
    } catch (err) {
      console.error("Error handling webhook:", err);
      response.status(500).send("Webhook handler failed");
      return;
    }
  }
} 
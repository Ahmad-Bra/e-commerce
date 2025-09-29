import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import sesstion from "express-session";
import connectPgSimple from "connect-pg-simple";
import Stripe from "stripe";
import pg from "pg";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import { router as ProductRoutes } from "./routes/products.route";
import { router as categoriesRoutes } from "./routes/categories.route";
import { router as cartRoutes } from "./routes/cart.route";
import { router as brandsRoutes } from "./routes/brands.route";
import { router as authRoutes } from "./routes/auth/authentication.route";
import { router as wishlistRoutes } from "./routes/wishlist.route";
import { router as paymentsRoutes } from "./routes/payments.route";
const stripe = new Stripe(process.env.STRIPE_SK as string);
export default stripe;
import passport from "passport";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://js.stripe.com"],
        frameSrc: ["'self'", "https://js.stripe.com", "https://hooks.stripe.com"],
        connectSrc: ["'self'", "https://api.stripe.com"],
        imgSrc: ["'self'", "data:", "blob:", "https://*.stripe.com"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'", "https://hooks.stripe.com"],
      },
    },
    crossOriginEmbedderPolicy: false,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-8", // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
  // store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);

app.use(cookieParser());
app.use(
  sesstion({
    secret: process.env.SECRET_KEY as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      expires: new Date(Date.now() + 1000 * 60 * 60),
    },
    store: new (connectPgSimple(sesstion))({
      pool: new pg.Pool({
        connectionString: process.env.DATABASE_URL as string,
      }),
      tableName: "session",
    }),
  })
);

// Initialize passport after session middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.get("/", (request: Request, respones: Response) => {
  console.log(request.path);

  respones.send("Hello from e-commerce api");
  return;
});

// authentication API
app.use("/api", authRoutes);

// categories API
app.use("/api", categoriesRoutes);

// brands API
app.use("/api", brandsRoutes);

// product API
app.use("/api", ProductRoutes);

// cart API
app.use("/api", cartRoutes);

// wishlist API
app.use("/api", wishlistRoutes);

// payments API
app.use("/api", paymentsRoutes);

app.listen(PORT, () => console.log(`listing in port ${PORT}`));

import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import sesstion from "express-session";
import MongoStore from "connect-mongo";
import { router as ProductRoutes } from "./routes/products.route";
import { router as categoriesRoutes } from "./routes/categories.route";
import { router as cartRoutes } from "./routes/cart.route";
import { router as brandsRoutes } from "./routes/brands.route";
import { router as authRoutes } from "./routes/auth/authentication.route";
import { router as wishlistRoutes } from "./routes/wishlist.route";

import { isUserAuthorized } from "./middleware/auth/authentication";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
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
    store: MongoStore.create({
      mongoUrl: process.env.DATABASE_URL as string,
      collectionName: "sessions",
    }),
  })
);

app.use(express.json());
/* @ts-ignore */
app.get("/", (request: Request, respones: Response) => {
  respones.send("hi");
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

app.listen(PORT, () => console.log(`listing in port ${PORT}`));

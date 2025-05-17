import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { router as ProductRoutes } from "./routes/products.route";
import { router as categoriesRoutes } from "./routes/categories.route";
import { router as brandsRoutes } from "./routes/brands.route";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (request: Request, respones: Response) => {
  respones.status(200).send("hi");
  return;
});

// categories API
app.use("/api", categoriesRoutes);

// brands API
app.use("/api", brandsRoutes);

// product API
app.use("/api", ProductRoutes);
app.listen(PORT, () => console.log(`listing in port ${PORT}`));

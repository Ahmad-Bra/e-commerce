import express from "express";
import { Products } from "../controlers/products";
export const router = express.Router();
const productClass = new Products();
router.get("/products", productClass.getProducts);
router.get("/products/:id", productClass.getProduct);

router.post("/products", productClass.createProduct);
router.put("/products/:id", productClass.updateProduct);
router.delete("/products/:id", productClass.deleteProduct);

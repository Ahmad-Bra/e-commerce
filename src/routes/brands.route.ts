import express from "express";
import { Brands } from "../controlers/brands";
export const router = express.Router();
const brandsClass = new Brands();

router.get("/brands", brandsClass.getBrands);

router.get("/brands/:id", brandsClass.getBrand);

router.post("/brands", brandsClass.createBrands);

router.delete("/brands/:id", brandsClass.deleteBrands);

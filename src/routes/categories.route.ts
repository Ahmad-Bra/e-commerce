import express from "express";
import { Category } from "../controlers/category";
export const router = express.Router();
const categoryClass = new Category();

router.get("/categories", categoryClass.getCategories);

router.get("/categories/:id", categoryClass.getCategory);

router.post("/categories", categoryClass.createCategory);

router.delete("/categories/:id", categoryClass.deleteCategory);

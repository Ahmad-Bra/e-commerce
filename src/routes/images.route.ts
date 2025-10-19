import { Router } from "express";
import { Request, Response } from "express";
import { upload } from "../utils/multer.config";
import express from "express";
import {
  uploadImages,
  deleteImage,
  getProductImages,
  setMainImage,
  wrapAsync,
} from "../controlers/images.controller";
const router = Router();

// Middleware to serve static files
router.use("/uploads", express.static("uploads"));

// Upload multiple images for a product
router.post(
  "/upload/:productId",
  upload.array("images", 5),
  wrapAsync(uploadImages)
);

// Delete an image
router.delete("/:imageId", wrapAsync(deleteImage));

// Get all images for a product
router.get("/product/:productId", wrapAsync(getProductImages));

// Set main image for a product
router.put("/main/:productId/:imageId", wrapAsync(setMainImage));

export { router };

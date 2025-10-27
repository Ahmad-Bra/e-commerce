// @ts-nocheck
import { Router } from "express";
import { Request, Response } from "express";
import { upload } from "../utils/multer.config";
import {
  uploadImages,
  deleteImage,
  getProductImages,
  setMainImage,
  wrapAsync,
} from "../controlers/images.controller";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
const router = Router();

// Upload multiple images for a product
router.post(
  "/upload/:productId",
  isUserAuthorized,
  upload.array("images", 5),
  wrapAsync(uploadImages)
);

// Delete an image
router.delete("/:imageId", isUserAuthorized, wrapAsync(deleteImage));

// Get all images for a product
router.get(
  "/product/:productId",
  [isUserAuthorized, redisCacheMiddleware.getCache],
  wrapAsync(getProductImages)
);

// Set main image for a product
router.put(
  "/main/:productId/:imageId",
  isUserAuthorized,
  wrapAsync(setMainImage)
);

export { router };

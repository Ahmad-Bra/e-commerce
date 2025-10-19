import { Request, Response, NextFunction } from "express";
import { ImageService } from "../services/image.service";

const imageService = new ImageService();

// Helper to wrap async handlers so they match Express expected return type
export const wrapAsync = (
  fn: (req: Request, res: Response, next?: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export const uploadImages = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No files uploaded" });
    }

    const savedImages = await Promise.all(
      files.map((file) => imageService.saveImage(file as any, productId))
    );

    res
      .status(200)
      .json({
        success: true,
        message: "Images uploaded successfully",
        images: savedImages,
      });
  } catch (error: any) {
    console.error("Error uploading images:", error);
    res
      .status(500)
      .json({
        success: false,
        message: error.message || "Error uploading images",
      });
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const { imageId } = req.params;
    await imageService.deleteImage(imageId);
    res
      .status(200)
      .json({ success: true, message: "Image deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting image:", error);
    res
      .status(500)
      .json({
        success: false,
        message: error.message || "Error deleting image",
      });
  }
};

export const getProductImages = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const images = await imageService.getProductImages(productId);
    res.status(200).json({ success: true, images });
  } catch (error: any) {
    console.error("Error fetching images:", error);
    res
      .status(500)
      .json({
        success: false,
        message: error.message || "Error fetching images",
      });
  }
};

export const setMainImage = async (req: Request, res: Response) => {
  try {
    const { productId, imageId } = req.params;
    const image = await imageService.updateProductMainImage(productId, imageId);
    res
      .status(200)
      .json({
        success: true,
        message: "Main image updated successfully",
        image,
      });
  } catch (error: any) {
    console.error("Error updating main image:", error);
    res
      .status(500)
      .json({
        success: false,
        message: error.message || "Error updating main image",
      });
  }
};

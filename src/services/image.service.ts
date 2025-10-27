import { PrismaClient } from "../../generated/prisma/index";
import fs from "fs";

const prisma = new PrismaClient();

// Define the shape of our file object
interface MulterFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export class ImageService {
  private baseUrl: string;

  constructor() {
    this.baseUrl =
      process.env.BASE_URL ?? process.env.LOCAL_URL ?? "http://localhost:3001";
  }

  async saveImage(file: MulterFile, productId: string) {
    try {
      // Create the image record in the database
      const image = await prisma.image.create({
        data: {
          filename: file.originalname,
          path: file.path,
          url: `${this.baseUrl}/uploads/products/${file.filename}`,
          mimetype: file.mimetype,
          size: file.size,
          productId: productId,
        },
      });

      return image;
    } catch (error) {
      // If there's an error, delete the uploaded file
      if (fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
      throw error;
    }
  }

  async deleteImage(imageId: string) {
    // Get the image record
    const image = await prisma.image.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      throw new Error("Image not found");
    }

    // Delete the file from disk if it exists
    if (fs.existsSync(image.path)) {
      try {
        fs.unlinkSync(image.path);
      } catch (error) {
        console.error("Error deleting image file:", error);
        // Continue with deletion from database even if file deletion fails
      }
    }

    // Delete the database record
    await prisma.image.delete({
      where: { id: imageId },
    });

    return true;
  }

  async getProductImages(productId: string) {
    return await prisma.image.findMany({
      where: { productId },
    });
  }

  async updateProductMainImage(productId: string, imageId: string) {
    const image = await prisma.image.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      throw new Error("Image not found");
    }

    // Update the product's main image URL
    await prisma.products.update({
      where: { id: productId },
      data: {
        mainImageUrl: image.url,
      },
    });

    return image;
  }
}

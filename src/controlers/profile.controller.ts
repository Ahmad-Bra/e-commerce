// profile uploading controller
import { NextFunction, Request, Response } from "express";
import { ImageService } from "../services/image.service";
import { PrismaClient } from "../../generated/prisma/index";
import ErrorsValidation from "../services/ErrorsValidation";

const imageService = new ImageService();
const prisma = new PrismaClient();

class ProfileController {
  // Helper to wrap async handlers so they match Express expected return type
  public async wrapAsync(
    fn: (req: Request, res: Response, next?: NextFunction) => Promise<any>
  ) {
    return (req: Request, res: Response, next: NextFunction) => {
      fn(req, res, next).catch(next);
    };
  }

  public async getProfileHandler(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const profile = await prisma.profile.findUnique({
        where: { userId },
        include: {
          profile_picture: true,
        },
      });

      if (!profile) {
        return res
          .status(404)
          .json({ success: false, message: "Profile not found" });
      }

      return res.status(200).json({
        success: true,
        message: "Profile retrieved successfully",
        profile,
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error });
    }
  }

  public async updateProfileHandler(req: Request, res: Response) {
    try {
      new ErrorsValidation(req, res).errorChecker();

      const { userId } = req.params;
      const data = req.body;

      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const updatedProfile = await prisma.profile.update({
        where: { userId },
        data: { ...data },
      });

      return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        profile: updatedProfile,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error });
    }
  }

  public async uploadProfilePictureHandler(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const file = req.file as Express.Multer.File;

      if (!file) {
        return res
          .status(400)
          .json({ success: false, message: "No file uploaded" });
      }

      console.log("File upload attempt:", {
        path: file.path,
        destination: file.destination,
        filename: file.filename,
      });

      const savedImage = await imageService.saveProfilePicture(
        file as any,
        userId
      );

      res.status(200).json({
        success: true,
        message: "Images uploaded successfully",
        images: savedImage,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: "Server Error", error });
    }
  }

  public async deleteProfileHandler(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const deletedProfile = await prisma.profile.delete({
        where: { userId },
      });

      if (!deletedProfile) {
        return res
          .status(404)
          .json({ success: false, message: "Profile not found" });
      }

      return res.status(204).send();
    } catch (error) {
      console.error("Error deleting profile:", error);
      return res
        .status(500)
        .json({ success: false, message: "Server Error", error });
    }
  }
  public async deleteProfilePictureHandler(req: Request, res: Response) {
    const { userId } = req.params;
    const { fileId, filePath } = req.body;

    try {
      const deletePic = await imageService.deleteProfilePricture(
        fileId,
        filePath,
        userId
      );
      console.log(deletePic);

      if (!deletePic)
        return res
          .status(400)
          .json({ success: false, message: "Profile picture deletion Failed" });

      return res.status(204).send();
    } catch (error) {
      console.log("Error when delete picture", error);

      return res.status(500).json({ message: (error as Error).message });
    }
  }
}

export const profileController = new ProfileController();
export default profileController;

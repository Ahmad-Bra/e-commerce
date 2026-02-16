// @ts-nocheck
import { Router } from "express";
import { Request, Response } from "express";
import { uploadProfilePicture } from "../utils/multer.config";
import { profileController } from "../controllers/profile.controller";
import { isUserAuthorized } from "../middleware/auth/authentication";
import { profileRules } from "../middleware/api/validation";
import { checkSchema } from "express-validator";
const router = Router();

router.post(
  "/profile/upload/:userId",
  isUserAuthorized,
  uploadProfilePicture.single("image"),
  profileController.uploadProfilePictureHandler
);

router.get(
  "/profile/:userId",
  isUserAuthorized,
  profileController.getProfileHandler
);

router.put(
  "/profile/:userId",
  checkSchema(profileRules),
  isUserAuthorized,
  profileController.updateProfileHandler
);

// delete profile
router.delete(
  "/profile/:userId",
  isUserAuthorized,
  profileController.deleteProfileHandler
);

// delete profile picture
router.delete(
  "/profile/picture/:userId",
  isUserAuthorized,
  profileController.deleteProfilePictureHandler
);

export { router };

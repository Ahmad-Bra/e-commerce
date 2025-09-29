import express from "express";

// @ts-ignore
import passport from "passport";
import { checkSchema } from "express-validator";

import "../../stratgies/google";
import "../../stratgies/auth/local.login";

import { User } from "../../controlers/auth/authentication";
import { userRules } from "../../middleware/api/validation";
const userClass = new User();
export const router = express.Router();

router.post("/auth/login", checkSchema(userRules), userClass.login);

router.post("/auth/register", checkSchema(userRules), userClass.signUp);

router.post("/auth/verify-email", userClass.verifyEmail);

router.post(
  "/auth/forgot-password",
  checkSchema(userRules),
  userClass.forgotPassword
);

router.post(
  "/auth/reset-password",
  checkSchema(userRules),
  userClass.resetPassword
);

router.post("/auth/logout", checkSchema(userRules), userClass.logout);

// Initiate Google OAuth
router.get(
  "/oauth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// OAuth callback
router.get(
  "/oauth/google/redirect",
  passport.authenticate("google", { failureRedirect: "/", session: true }),
  userClass.googleOAuth
);

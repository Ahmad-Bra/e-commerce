import express from "express";

// @ts-ignore
import passport from "passport";
import { checkSchema } from "express-validator";

import "../../stratgies/google";
import "../../stratgies/auth/local.login";

import { User } from "../../controlers/auth/authentication";
import { userRules } from "../../middleware/api/validation";
const app = express();
const userClass = new User();
export const router = express.Router();

router.post(
  "/auth/login",
  checkSchema(userRules),
  //  @ts-ignore
  userClass.login
);
//  @ts-ignore
router.post("/auth/register", checkSchema(userRules), userClass.signUp);

router.get(
  "/oauth/google/redirect",
  passport.authenticate("google"),
  userClass.googleOAuth
);

app.use(passport.initialize());
app.use(passport.session());

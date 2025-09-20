import express from "express";

// @ts-ignore
import passport from "passport";
import { checkSchema } from "express-validator";
import { userVlidation } from "../../utils/authValidation";

import "../../stratgies/google";
import "../../stratgies/auth/local.login";

import { User } from "../../controlers/auth/authentication";
const app = express();
const userClass = new User();
export const router = express.Router();

router.post(
  "/auth/login",
  checkSchema(userVlidation),
  //  @ts-ignore
  userClass.login
);
//  @ts-ignore
router.post("/auth/register", checkSchema(userVlidation), userClass.signUp);

router.get(
  "/oauth/google/redirect",
  passport.authenticate("google"),
  userClass.googleOAuth
);

app.use(passport.initialize());
app.use(passport.session());

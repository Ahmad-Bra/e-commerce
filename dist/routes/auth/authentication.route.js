"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
// @ts-ignore
const passport_1 = __importDefault(require("passport"));
const express_validator_1 = require("express-validator");
require("../../stratgies/google");
require("../../stratgies/auth/local.login");
const authentication_1 = require("../../controlers/auth/authentication");
const validation_1 = require("../../middleware/api/validation");
const userClass = new authentication_1.User();
exports.router = express_1.default.Router();
exports.router.post("/auth/login", (0, express_validator_1.checkSchema)(validation_1.userRules), userClass.login);
exports.router.post("/auth/register", (0, express_validator_1.checkSchema)(validation_1.userRules), userClass.signUp);
exports.router.post("/auth/verify-email", userClass.verifyEmail);
exports.router.post("/auth/forgot-password", (0, express_validator_1.checkSchema)(validation_1.userRules), userClass.forgotPassword);
exports.router.post("/auth/reset-password", (0, express_validator_1.checkSchema)(validation_1.userRules), userClass.resetPassword);
exports.router.post("/auth/logout", (0, express_validator_1.checkSchema)(validation_1.userRules), userClass.logout);
// Initiate Google OAuth
exports.router.get("/oauth/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
// OAuth callback
exports.router.get("/oauth/google/redirect", passport_1.default.authenticate("google", { failureRedirect: "/", session: true }), userClass.googleOAuth);

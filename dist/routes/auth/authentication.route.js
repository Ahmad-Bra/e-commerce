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
const authValidation_1 = require("../../utils/authValidation");
require("../../stratgies/google");
require("../../stratgies/auth/local.login");
const authentication_1 = require("../../controlers/auth/authentication");
const app = (0, express_1.default)();
const userClass = new authentication_1.User();
exports.router = express_1.default.Router();
exports.router.post("/auth/login", (0, express_validator_1.checkSchema)(authValidation_1.userVlidation), 
//  @ts-ignore
userClass.login);
//  @ts-ignore
exports.router.post("/auth/register", (0, express_validator_1.checkSchema)(authValidation_1.userVlidation), userClass.signUp);
exports.router.get("/oauth/google/redirect", passport_1.default.authenticate("google"), userClass.googleOAuth);
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());

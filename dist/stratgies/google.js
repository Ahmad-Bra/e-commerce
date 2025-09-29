"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_1 = __importDefault(require("passport"));
const index_js_1 = require("../../generated/prisma/index.js");
const prisma = new index_js_1.PrismaClient();
passport_1.default.serializeUser((user, done) => {
    // Store googleID in the session so deserialize can look it up consistently
    done(null, user.googleID);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield prisma.google.findUnique({
            where: { googleID: id },
        });
        findUser ? done(null, findUser) : done(null, null);
    }
    catch (error) {
        console.log(error);
        done(error, null);
    }
}));
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scope: ["email", "profile"],
    callbackURL: process.env.NODE_ENV == "development"
        ? process.env.LOCALECALLBACKURL
        : process.env.PRODCALLBACKURL,
}, (accessToken, refreshTokenm, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield prisma.google.findUnique({
            where: { googleID: profile.id },
        });
        if (findUser)
            return done(null, findUser);
        const newUser = yield prisma.google.create({
            data: {
                username: profile.displayName,
                googleID: profile.id,
            },
        });
        if (newUser)
            return done(null, newUser);
    }
    catch (error) {
        console.log(error);
        done(error, null);
    }
})));

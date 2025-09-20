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
const passport_1 = __importDefault(require("passport"));
// @ts-ignore
const passport_local_1 = require("passport-local");
const index_js_1 = require("../../../generated/prisma/index.js");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new index_js_1.PrismaClient();
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((userId, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield prisma.user.findUnique({
            where: { id: userId },
        });
        findUser ? done(null, findUser.id) : done(null, null);
    }
    catch (error) {
        done(error, null);
    }
}));
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: "email",
}, (email, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = yield prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!findUser)
            return done("Unauthorized", null);
        // compare user password if it is correct
        const isPasswordValid = bcryptjs_1.default.compareSync(password, findUser.password);
        if (isPasswordValid) {
            // @ts-ignore
            findUser.password = undefined;
            return done(null, findUser);
        }
        else {
            return done("Unauthorized", null);
        }
    }
    catch (error) {
        done(error, null);
    }
})));

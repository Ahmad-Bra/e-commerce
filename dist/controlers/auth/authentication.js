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
exports.User = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../../../generated/prisma/index");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const JwtServices_1 = require("../../utils/JwtServices");
const prisma = new index_1.PrismaClient();
class User {
    googleOAuth(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            // @ts-ignore
            const userId = (_a = request === null || request === void 0 ? void 0 : request.user) === null || _a === void 0 ? void 0 : _a.id;
            const token = new JwtServices_1.JwtService(userId).getToken();
            respones.status(201).json({
                success: true,
                message: "user logged in successfuly",
                token,
                // @ts-ignore
                user: request.user,
            });
            return;
        });
    }
    signUp(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (0, express_validator_1.validationResult)(request);
            if (!result.isEmpty()) {
                respones.status(400).json({ errors: result.array() });
                return;
            }
            const { password, email, name } = request.body;
            const hashedPass = bcryptjs_1.default.hashSync(password, 8);
            try {
                const result = yield prisma.user.create({
                    data: {
                        email,
                        password: hashedPass,
                        name,
                    },
                    include: { comments: true },
                });
                const token = new JwtServices_1.JwtService(result.id).getToken();
                // @ts-ignore
                result.password = undefined;
                respones.status(201).json({
                    success: true,
                    token,
                    message: "user created successfuly",
                    user: result,
                });
                return;
            }
            catch (error) {
                return respones.status(500).json({ message: error });
            }
        });
    }
    login(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = (0, express_validator_1.validationResult)(request);
            if (!result.isEmpty()) {
                respones.status(400).json({ errors: result.array() });
                return;
            }
            const { email } = request.body;
            const findUser = yield prisma.user.findUnique({
                where: {
                    email,
                },
                include: { comments: true },
            });
            // @ts-ignore
            const token = new JwtServices_1.JwtService(findUser.id).getToken();
            // @ts-ignore
            findUser.password = undefined;
            respones.status(200).json({
                success: true,
                token,
                message: "user created successfuly",
                user: findUser,
            });
            return;
        });
    }
}
exports.User = User;

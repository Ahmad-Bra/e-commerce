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
const mail_controller_1 = require("../mail.controller");
const mailController = new mail_controller_1.MailController();
const prisma = new index_1.PrismaClient();
class User {
    constructor() { }
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
            const verifyToken = Math.floor(100000 + Math.random() * 900000);
            try {
                const result = yield prisma.user.create({
                    data: {
                        email,
                        password: hashedPass,
                        name,
                        verify_token: verifyToken.toString(),
                        is_verified: false,
                        expiration_verify_token: new Date(Date.now() + 3600 * 1000), // 1 houre
                    },
                    include: { comments: true },
                });
                if (!result) {
                    respones
                        .status(400)
                        .json({ message: "User not created, please try again" });
                }
                yield mailController.sendEmail(request, respones, result.name, verifyToken);
                // @ts-ignore
                result.password = undefined;
                respones.status(201).json({
                    success: true,
                    message: "user created successfuly but need to verify email to get access with token",
                    is_verify: false,
                    user: result,
                });
                return;
            }
            catch (error) {
                return respones.status(500).json({ message: error });
            }
        });
    }
    verifyEmail(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, email } = request.body;
            try {
                const user = yield prisma.user.findUnique({
                    where: {
                        email,
                        is_verified: false,
                        verify_token: code,
                        expiration_verify_token: { gt: new Date() },
                    },
                });
                if (!user) {
                    respones.status(401).json({ message: "invalid verify code" });
                    return;
                }
                const updatedUser = yield prisma.user.update({
                    where: {
                        email,
                    },
                    data: {
                        is_verified: true,
                        verify_token: null,
                        expiration_verify_token: null,
                    },
                });
                const token = new JwtServices_1.JwtService(updatedUser.id).getToken();
                // @ts-ignore
                updatedUser.password = undefined;
                respones.status(200).json({
                    success: true,
                    token,
                    message: "user created successfuly",
                    user: Object.assign(Object.assign({}, updatedUser), { updated_at: new Date().toISOString() }),
                });
                return;
            }
            catch (error) {
                console.log("error while verify email", error.message);
            }
        });
    }
    forgotPassword(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = request.body;
            try {
                const user = yield prisma.user.findUnique({ where: { email } });
                if (!user)
                    return respones.status(400).json({ message: "user not found" });
                const verifyToken = Math.floor(100000 + Math.random() * 900000);
                const updatedUser = yield prisma.user.update({
                    where: { id: user.id },
                    data: {
                        verify_token: verifyToken.toString(),
                        expiration_verify_token: new Date(Date.now() + 3600 * 1000), // 1 hour
                    },
                });
                yield mailController.sendEmail(request, respones, updatedUser.name, verifyToken);
                respones.status(200).json({
                    success: true,
                    message: "Password reset code sent to your email",
                });
                return;
            }
            catch (error) {
                console.log("error while sending forgot password email", error.message);
                respones.status(500).json({
                    message: "Failed to send password reset code",
                    error: error.message,
                });
                return;
            }
        });
    }
    resetPassword(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, email, new_password } = request.body;
            try {
                const user = yield prisma.user.findUnique({
                    where: {
                        email,
                        verify_token: code,
                        expiration_verify_token: { gt: new Date() },
                    },
                });
                if (!user) {
                    return respones
                        .status(401)
                        .json({ message: "Invalid or expired reset code" });
                }
                const hashedPass = bcryptjs_1.default.hashSync(new_password, 8);
                yield prisma.user.update({
                    where: { email },
                    data: {
                        password: hashedPass,
                        verify_token: null,
                        expiration_verify_token: null,
                    },
                });
                respones.status(200).json({
                    success: true,
                    message: "Password has been reset successfully",
                });
                return;
            }
            catch (error) {
                console.log("error while resetting password", error.message);
                respones.status(500).json({
                    message: "Failed to reset password",
                    error: error.message,
                });
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
            const { email, password } = request.body;
            const findUser = yield prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (!findUser) {
                respones
                    .status(400)
                    .json({ message: "user not found, or invalid password" });
                return;
            }
            const isPasswordValid = bcryptjs_1.default.compareSync(password, findUser.password);
            if (!isPasswordValid)
                return respones.status(400).json({ message: "invalid password" });
            if (!findUser.is_verified)
                return respones.status(400).json({ message: "user not verified" });
            const token = new JwtServices_1.JwtService(findUser.id).getToken();
            // @ts-ignore
            findUser.password = undefined;
            respones.status(200).json({
                success: true,
                token,
                message: "user created successfuly",
                user: Object.assign(Object.assign({}, findUser), { updated_at: new Date().toISOString() }),
            });
            return;
        });
    }
    logout(request, respones) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                // Accept either authenticated user id (from middleware) or email in body
                // @ts-ignore
                const authUserId = (_a = request === null || request === void 0 ? void 0 : request.user) === null || _a === void 0 ? void 0 : _a.id;
                const { email } = request.body;
                // Resolve the user record
                let user;
                if (authUserId) {
                    user = yield prisma.user.findUnique({ where: { id: authUserId } });
                }
                else if (email) {
                    user = yield prisma.user.findUnique({ where: { email } });
                }
                if (!user) {
                    respones.status(400).json({ message: "User not found" });
                    return;
                }
                const userId = user.id;
                // Fetch cart and wishlist in parallel
                const [cart, wishlist] = yield Promise.all([
                    prisma.cart.findUnique({ where: { userId } }),
                    prisma.wishlist.findUnique({ where: { userId } }),
                ]);
                // Delete dependent items in parallel (comments, cart items, wishlist items)
                const deleteItemPromises = [];
                deleteItemPromises.push(prisma.comments.deleteMany({ where: { author_id: userId } }));
                if (cart) {
                    deleteItemPromises.push(prisma.cartItem.deleteMany({ where: { cartId: cart.id } }));
                }
                if (wishlist) {
                    deleteItemPromises.push(prisma.wishlistItem.deleteMany({ where: { wishlistId: wishlist.id } }));
                }
                yield Promise.all(deleteItemPromises);
                // Delete containers (cart, wishlist) and user in parallel
                const deleteContainers = [];
                if (cart) {
                    deleteContainers.push(prisma.cart.delete({ where: { id: cart.id } }));
                }
                if (wishlist) {
                    deleteContainers.push(prisma.wishlist.delete({ where: { id: wishlist.id } }));
                }
                // Finally delete the user
                deleteContainers.push(prisma.user.delete({ where: { id: userId } }));
                yield Promise.all(deleteContainers);
                respones
                    .status(200)
                    .json({ message: "user deleted successfully", success: true });
                return;
            }
            catch (error) {
                console.error("Failed to delete user:", error);
                respones.status(500).json({ message: "Failed to delete user", error });
                return;
            }
        });
    }
}
exports.User = User;

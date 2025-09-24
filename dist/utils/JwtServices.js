"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    constructor(id) {
        this.userId = id;
    }
    getToken() {
        const token = jsonwebtoken_1.default.sign({ id: this.userId }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        return token;
    }
}
exports.JwtService = JwtService;

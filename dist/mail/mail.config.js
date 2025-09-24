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
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailtrap_1 = require("mailtrap");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const TOKEN = process.env.MAILTRAP_TOKEN;
const transport = TOKEN
    ? nodemailer_1.default.createTransport((0, mailtrap_1.MailtrapTransport)({
        token: TOKEN,
    }))
    : null;
const sender = {
    address: "hello@demomailtrap.co", // "hello@e-commerce-vof2.onrender.com",
    name: "Mailtrap Test",
};
const sendEmail = (options, name, code) => __awaiter(void 0, void 0, void 0, function* () {
    if (!transport) {
        const errorMessage = "Mail transport is not configured. Make sure MAILTRAP_TOKEN is set in your .env file.";
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
    try {
        const info = yield transport.sendMail(Object.assign(Object.assign({ from: sender }, options), { templateUuid: "c312accd-3811-4a43-b6a0-0b44731e6c7b", templateVariables: {
                name,
                code,
            } }));
        console.log("Email sent successfully:", info);
        return info;
    }
    catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
});
exports.sendEmail = sendEmail;

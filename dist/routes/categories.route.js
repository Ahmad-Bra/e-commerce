"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const category_1 = require("../controlers/category");
exports.router = express_1.default.Router();
const categoryClass = new category_1.Category();
exports.router.get("/categories", categoryClass.getCategories);
exports.router.get("/categories/:id", categoryClass.getCategory);
exports.router.post("/categories", categoryClass.createCategory);
exports.router.delete("/categories/:id", categoryClass.deleteCategory);

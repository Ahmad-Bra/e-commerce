"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const brands_1 = require("../controlers/brands");
exports.router = express_1.default.Router();
const brandsClass = new brands_1.Brands();
exports.router.get("/brands", brandsClass.getBrands);
exports.router.get("/brands/:id", brandsClass.getBrand);
exports.router.post("/brands", brandsClass.createBrands);
exports.router.delete("/brands/:id", brandsClass.deleteBrands);

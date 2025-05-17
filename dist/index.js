"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const products_route_1 = require("./routes/products.route");
const categories_route_1 = require("./routes/categories.route");
const brands_route_1 = require("./routes/brands.route");
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", (request, respones) => {
    respones.status(200).send("hi");
    return;
});
// product API
app.use("/api", products_route_1.router);
// categories API
app.use("/api", categories_route_1.router);
// brands API
app.use("/api", brands_route_1.router);
app.listen(PORT, () => console.log(`listing in port ${PORT}`));

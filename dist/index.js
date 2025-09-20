"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const products_route_1 = require("./routes/products.route");
const categories_route_1 = require("./routes/categories.route");
const cart_route_1 = require("./routes/cart.route");
const brands_route_1 = require("./routes/brands.route");
const authentication_route_1 = require("./routes/auth/authentication.route");
const wishlist_route_1 = require("./routes/wishlist.route");
const app = (0, express_1.default)();
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === "production",
        expires: new Date(Date.now() + 1000 * 60 * 60),
    },
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.DATABASE_URL,
        collectionName: "sessions",
    }),
}));
app.use(express_1.default.json());
/* @ts-ignore */
app.get("/", (request, respones) => {
    respones.send("hi");
    return;
});
// authentication API
app.use("/api", authentication_route_1.router);
// categories API
app.use("/api", categories_route_1.router);
// brands API
app.use("/api", brands_route_1.router);
// product API
app.use("/api", products_route_1.router);
// cart API
app.use("/api", cart_route_1.router);
// wishlist API
app.use("/api", wishlist_route_1.router);
app.listen(PORT, () => console.log(`listing in port ${PORT}`));

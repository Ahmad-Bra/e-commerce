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
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisCacheMiddleware = exports.RedisCacheMiddleware = void 0;
const redis_1 = require("redis");
class RedisClient {
    constructor() {
        // single shared client instance
        this.client = null;
    }
    // build connection options from env
    getConnectionOptions() {
        const username = process.env.REDIS_USERNAME;
        const password = process.env.REDIS_PASSWORD;
        const host = process.env.REDIS_HOST;
        const port = process.env.REDIS_PORT;
        if (host && port)
            return {
                username,
                password,
                socket: { host, port: Number(port), connectTimeout: 30000 },
            };
        // default - localhost:6379
        return { socket: { host: "127.0.0.1", port: 6379 } };
    }
    getClient() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.client)
                return this.client;
            const options = this.getConnectionOptions();
            this.client = (0, redis_1.createClient)(options);
            this.client.on("error", (err) => console.error("Redis Client Error", err));
            yield this.client.connect();
            return this.client;
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.client)
                return;
            try {
                yield this.client.disconnect();
            }
            catch (err) {
                console.warn("Redis disconnect error:", err);
            }
            this.client = null;
        });
    }
}
class RedisCacheMiddleware extends RedisClient {
    constructor() {
        super();
        this.getCache = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const key = req.originalUrl;
            try {
                const client = yield this.getClient();
                const cachedData = yield client.get(key);
                if (cachedData) {
                    return res.status(200).json(JSON.parse(cachedData));
                }
            }
            catch (err) {
                console.error("Redis GET error:", err);
            }
            next();
        });
    }
    setCache(originalUrl, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = originalUrl;
            try {
                const client = yield this.getClient();
                yield client.set(key, JSON.stringify(data), { EX: 10 * 60 });
            }
            catch (err) {
                console.error("Redis SET error:", err);
            }
        });
    }
}
exports.RedisCacheMiddleware = RedisCacheMiddleware;
exports.redisCacheMiddleware = new RedisCacheMiddleware();

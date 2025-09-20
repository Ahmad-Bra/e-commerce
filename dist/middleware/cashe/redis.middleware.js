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
    constructor() { }
    createRedisClient() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = (0, redis_1.createClient)().on("error", (err) => console.log("Redis Client Error", err));
            yield client.connect(); // connect by defaul to port:  6379
            return client;
        });
    }
}
class RedisCacheMiddleware extends RedisClient {
    constructor() {
        super();
        this.getCache = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const key = req.originalUrl;
            try {
                const client = yield this.createRedisClient();
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
                const client = yield this.createRedisClient();
                yield client.set(key, JSON.stringify(data), {
                    EX: 5 * 60, // 1 min expiration
                });
            }
            catch (err) {
                console.error("Redis SET error:", err);
            }
        });
    }
}
exports.RedisCacheMiddleware = RedisCacheMiddleware;
exports.redisCacheMiddleware = new RedisCacheMiddleware();

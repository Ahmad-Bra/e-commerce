import { NextFunction, Request, Response } from "express";
import { createClient } from "redis";

class RedisClient {
  constructor() {}
  public async createRedisClient() {
    const client = createClient().on("error", (err) =>
      console.log("Redis Client Error", err)
    );
    await client.connect(); // connect by defaul to port:  6379
    return client;
  }
}

export class RedisCacheMiddleware extends RedisClient {
  constructor() {
    super();
  }

  public getCache = async (req: Request, res: Response, next: NextFunction) => {
    const key = req.originalUrl;
    try {
      const client = await this.createRedisClient();
      const cachedData = await client.get(key);
      if (cachedData) {
        return res.status(200).json(JSON.parse(cachedData));
      }
    } catch (err) {
      console.error("Redis GET error:", err);
    }
    next();
  };

  public async setCache(originalUrl: string, data: any) {
    const key = originalUrl;
    try {
      const client = await this.createRedisClient();
      await client.set(key, JSON.stringify(data), {
        EX: 5 * 60, // 1 min expiration
      });
    } catch (err) {
      console.error("Redis SET error:", err);
    }
  }
}

export const redisCacheMiddleware = new RedisCacheMiddleware();

import { NextFunction, Request, Response } from "express";
import { createClient, RedisClientType } from "redis";

class RedisClient {
  // single shared client instance
  private client: RedisClientType | null = null;

  // build connection options from env
  private getConnectionOptions() {
    const username = process.env.REDIS_USERNAME as string;
    const password = process.env.REDIS_PASSWORD as string;
    const host = process.env.REDIS_HOST;
    const port = process.env.REDIS_PORT;
    if (host && port)
      return {
        username,
        password,
        socket: { host, port: Number(port), connectTimeout: 10000 },
      };
    // default - localhost:6379
    return { socket: { host: "127.0.0.1", port: 6379 } };
  }

  public async getClient() {
    if (this.client) return this.client;
    const options = this.getConnectionOptions();
    this.client = createClient(options) as RedisClientType;
    this.client.on("error", (err) => console.error("Redis Client Error", err));
    await this.client.connect();
    return this.client;
  }
  public async disconnect() {
    if (!this.client) return;
    try {
      await this.client.disconnect();
    } catch (err) {
      console.warn("Redis disconnect error:", err);
    }
    this.client = null;
  }
}

export class RedisCacheMiddleware extends RedisClient {
  constructor() {
    super();
  }

  public getCache = async (req: Request, res: Response, next: NextFunction) => {
    const key = req.originalUrl;
    try {
      const client = await this.getClient();
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
      const client = await this.getClient();
      await client.set(key, JSON.stringify(data), { EX: 10 * 60 });
    } catch (err) {
      console.error("Redis SET error:", err);
    }
  }
}

export const redisCacheMiddleware = new RedisCacheMiddleware();

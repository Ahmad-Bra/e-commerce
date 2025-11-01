import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/index";
import { redisCacheMiddleware } from "../middleware/cashe/redis.middleware";
import ErrorsValidation from "../services/ErrorsValidation";

const prisma = new PrismaClient();

export class AddressController {
  /** Get all addresses for a user
   * @param request
   * @param response
   * @returns {Promise<Response>}
   */
  public async getUserAddresses(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { userId } = request.params;
    try {
      if (!userId) {
        return response.status(401).json({ message: "Unauthorized" });
      }

      const addresses = await prisma.address.findMany({
        where: { userId },
      });

      // set data to redis cache
      redisCacheMiddleware.setCache(request.originalUrl, addresses);

      return response.status(200).json(addresses);
    } catch (error) {
      const errors = (error as Error).message || "Internal Server Error";
      return response.status(500).json({ errors });
    }
  }
  public async createUserAddress(
    request: Request,
    response: Response
  ): Promise<Response> {
    // @ts-ignore
    const { userId } = request.params;
    const errorsValidation = new ErrorsValidation(request, response);
    const errorResponse = errorsValidation.errorChecker();
    if (errorResponse) return errorResponse;

    try {
      if (!userId) {
        return response.status(401).json({ message: "Unauthorized" });
      }

      const { street, city, state, zip_code, country, phone } = request.body;

      const address = await prisma.address.create({
        data: {
          userId,
          street,
          city,
          state,
          zip_code,
          phone,
          country,
        },
      });

      return response.status(201).json(address);
    } catch (error) {
      const errors = (error as Error).message || "Internal Server Error";
      return response.status(500).json({ errors });
    }
  }
  public async updateUserAddress(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { userId } = request.params;
    const { id } = request.params;
    const errorsValidation = new ErrorsValidation(request, response);
    const errorResponse = errorsValidation.errorChecker();
    if (errorResponse) return errorResponse;
    try {
      if (!userId) {
        return response.status(401).json({ message: "Unauthorized" });
      }
      const { street, city, state, zip_code, country } = request.body;
      const address = await prisma.address.update({
        where: {
          id,
          userId,
        },
        data: {
          street,
          city,
          state,
          zip_code,
          country,
        },
      });
      if (!address) {
        return response.status(404).json({ message: "Address not found" });
      }
      return response.status(200).json(address);
    } catch (error) {
      const errors = (error as Error).message || "Internal Server Error";
      return response.status(500).json({ errors });
    }
  }
  public async deleteUserAddress(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { userId } = request.params;
    const { id } = request.params;
    try {
      if (!userId) {
        return response.status(401).json({ message: "Unauthorized" });
      }

      const address = await prisma.address.deleteMany({
        where: {
          id,
          userId,
        },
      });

      if (!address) {
        return response.status(404).json({ message: "Address not found" });
      }

      return response.status(204).send();
    } catch (error) {
      const errors = (error as Error).message || "Internal Server Error";
      return response.status(500).json({ errors });
    }
  }
}
export const address = new AddressController();

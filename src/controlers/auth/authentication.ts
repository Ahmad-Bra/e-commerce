import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { PrismaClient } from "../../../generated/prisma/index";
import bcrypt from "bcryptjs";
import { JwtService } from "../../utils/JwtServices";
const prisma = new PrismaClient();

export class User {
  public async googleOAuth(request: Request, respones: Response) {
    // @ts-ignore
    const userId = request?.user?.id;
    const token = new JwtService(userId).getToken();
    respones.status(201).json({
      success: true,
      message: "user logged in successfuly",
      token,
      // @ts-ignore
      user: request.user,
    });
    return;
  }
  public async signUp(request: Request, respones: Response) {
    const result = validationResult(request);
    if (!result.isEmpty()) {
      respones.status(400).json({ errors: result.array() });
      return;
    }
    const { password, email, name } = request.body;

    const hashedPass = bcrypt.hashSync(password, 8);

    try {
      const result = await prisma.user.create({
        data: {
          email,
          password: hashedPass,
          name,
        },
        include: { comments: true },
      });

      const token = new JwtService(result.id).getToken();

      // @ts-ignore
      result.password = undefined;

      respones.status(201).json({
        success: true,
        token,
        message: "user created successfuly",
        user: result,
      });
      return;
    } catch (error) {
      return respones.status(500).json({ message: error });
    }
  }

  public async login(request: Request, respones: Response) {
    const result = validationResult(request);
    if (!result.isEmpty()) {
      respones.status(400).json({ errors: result.array() });
      return;
    }
    const { email } = request.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
      include: { comments: true },
    });

    // @ts-ignore
    const token = new JwtService(findUser.id).getToken();

    // @ts-ignore
    findUser.password = undefined;

    respones.status(200).json({
      success: true,
      token,
      message: "user created successfuly",
      user: findUser,
    });

    return;
  }
}

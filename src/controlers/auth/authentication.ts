import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { PrismaClient } from "../../../generated/prisma/index";
import bcrypt from "bcryptjs";
import { JwtService } from "../../utils/JwtServices";
import { MailController } from "../mail.controller";
const mailController = new MailController();
const prisma = new PrismaClient();

export class User {
  constructor() {}
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

  public async signUp(request: Request, respones: Response): Promise<any> {
    const result = validationResult(request);
    if (!result.isEmpty()) {
      respones.status(400).json({ errors: result.array() });
      return;
    }
    const { password, email, name } = request.body;

    const hashedPass = bcrypt.hashSync(password, 8);

    const verifyToken = Math.floor(100000 + Math.random() * 900000);

    try {
      const result = await prisma.user.create({
        data: {
          email,
          password: hashedPass,
          name,
          verify_token: verifyToken.toString(),
          is_verified: false,
          expiration_verify_token: new Date(Date.now() + 3600 * 1000), // 1 houre
        },
        include: { comments: true },
      });

      if (!result) {
        respones
          .status(400)
          .json({ message: "User not created, please try again" });
      }

      await mailController.sendEmail(
        request,
        respones,
        result.name,
        verifyToken
      );

      // @ts-ignore
      result.password = undefined;

      respones.status(201).json({
        success: true,
        message:
          "user created successfuly but need to verify email to get access with token",
        is_verify: false,
        user: result,
      });
      return;
    } catch (error) {
      return respones.status(500).json({ message: error });
    }
  }

  public async verifyEmail(
    request: Request,
    respones: Response
  ): Promise<void> {
    const { code, email } = request.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
          is_verified: false,
          verify_token: code,
          expiration_verify_token: { gt: new Date() },
        },
      });

      if (!user) {
        respones.status(401).json({ message: "invalid verify code" });
        return;
      }

      const updatedUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          is_verified: true,
          verify_token: null,
          expiration_verify_token: null,
        },
      });

      const token = new JwtService(updatedUser.id).getToken();

      // @ts-ignore
      updatedUser.password = undefined;

      respones.status(200).json({
        success: true,
        token,
        message: "user created successfuly",
        user: {
          ...updatedUser,
          updated_at: new Date().toISOString(),
        },
      });
      return;
    } catch (error) {
      console.log("error while verify email", (error as Error).message);
    }
  }

  public async forgotPassword(
    request: Request,
    respones: Response
  ): Promise<any> {
    const { email } = request.body;
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user)
        return respones.status(400).json({ message: "user not found" });

      const verifyToken = Math.floor(100000 + Math.random() * 900000);

      const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
          verify_token: verifyToken.toString(),
          expiration_verify_token: new Date(Date.now() + 3600 * 1000), // 1 hour
        },
      });

      await mailController.sendEmail(
        request,
        respones,
        updatedUser.name,
        verifyToken
      );

      respones.status(200).json({
        success: true,
        message: "Password reset code sent to your email",
      });
      return;
    } catch (error) {
      console.log(
        "error while sending forgot password email",
        (error as Error).message
      );
      respones.status(500).json({
        message: "Failed to send password reset code",
        error: (error as Error).message,
      });
      return;
    }
  }

  public async resetPassword(
    request: Request,
    respones: Response
  ): Promise<any> {
    const { code, email, new_password } = request.body;
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
          verify_token: code,
          expiration_verify_token: { gt: new Date() },
        },
      });

      if (!user) {
        return respones
          .status(401)
          .json({ message: "Invalid or expired reset code" });
      }

      const hashedPass = bcrypt.hashSync(new_password, 8);

      await prisma.user.update({
        where: { email },
        data: {
          password: hashedPass,
          verify_token: null,
          expiration_verify_token: null,
        },
      });

      respones.status(200).json({
        success: true,
        message: "Password has been reset successfully",
      });
      return;
    } catch (error) {
      console.log("error while resetting password", (error as Error).message);
      respones.status(500).json({
        message: "Failed to reset password",
        error: (error as Error).message,
      });
    }
  }

  public async login(request: Request, respones: Response): Promise<any> {
    const result = validationResult(request);
    if (!result.isEmpty()) {
      respones.status(400).json({ errors: result.array() });
      return;
    }
    const { email, password } = request.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!findUser) {
      respones
        .status(400)
        .json({ message: "user not found, or invalid password" });
      return;
    }

    const isPasswordValid = bcrypt.compareSync(password, findUser.password);

    if (!isPasswordValid)
      return respones.status(400).json({ message: "invalid password" });

    if (!findUser.is_verified)
      return respones.status(400).json({ message: "user not verified" });

    const token = new JwtService(findUser.id).getToken();

    // @ts-ignore
    findUser.password = undefined;

    respones.status(200).json({
      success: true,
      token,
      message: "user created successfuly",
      user: {
        ...findUser,
        updated_at: new Date().toISOString(),
      },
    });

    return;
  }

  public async logout(request: Request, respones: Response) {
    try {
      // Accept either authenticated user id (from middleware) or email in body
      // @ts-ignore
      const authUserId: string | undefined = request?.user?.id;
      const { email } = request.body;

      // Resolve the user record
      let user;
      if (authUserId) {
        user = await prisma.user.findUnique({ where: { id: authUserId } });
      } else if (email) {
        user = await prisma.user.findUnique({ where: { email } });
      }

      if (!user) {
        respones.status(400).json({ message: "User not found" });
        return;
      }

      const userId = user.id;

      // Fetch cart and wishlist in parallel
      const [cart, wishlist] = await Promise.all([
        prisma.cart.findUnique({ where: { userId } }),
        prisma.wishlist.findUnique({ where: { userId } }),
      ]);

      // Delete dependent items in parallel (comments, cart items, wishlist items)
      const deleteItemPromises: Promise<any>[] = [];
      deleteItemPromises.push(
        prisma.comments.deleteMany({ where: { author_id: userId } })
      );
      if (cart) {
        deleteItemPromises.push(
          prisma.cartItem.deleteMany({ where: { cartId: cart.id } })
        );
      }
      if (wishlist) {
        deleteItemPromises.push(
          prisma.wishlistItem.deleteMany({ where: { wishlistId: wishlist.id } })
        );
      }

      await Promise.all(deleteItemPromises);

      // Delete containers (cart, wishlist) and user in parallel
      const deleteContainers: Promise<any>[] = [];
      if (cart) {
        deleteContainers.push(prisma.cart.delete({ where: { id: cart.id } }));
      }
      if (wishlist) {
        deleteContainers.push(
          prisma.wishlist.delete({ where: { id: wishlist.id } })
        );
      }

      // Finally delete the user
      deleteContainers.push(prisma.user.delete({ where: { id: userId } }));

      await Promise.all(deleteContainers);

      respones
        .status(200)
        .json({ message: "user deleted successfully", success: true });
      return;
    } catch (error) {
      console.error("Failed to delete user:", error);
      respones.status(500).json({ message: "Failed to delete user", error });
      return;
    }
  }
}

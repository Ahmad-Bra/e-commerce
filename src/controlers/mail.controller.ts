import { Request, Response } from "express";
import { sendEmail } from "../mail/mail.config";

export class MailController {
  public async sendEmail(
    req: Request,
    res: Response,
    name: string,
    code: number | string
  ): Promise<void> {
    try {
      await sendEmail(
        {
          to: ["ahmadbrazy20@gmail.com"],
          subject: "You are awesome!",
          text: "Here is your verification code .",
          category: "Email verification",
        },
        name,
        code
      );
      console.log("email sent successfully");
    } catch (error) {
      res.status(500).json({
        message: "Failed to send verify code, please try again later",
        error: (error as Error).message,
      });
    }
  }
}

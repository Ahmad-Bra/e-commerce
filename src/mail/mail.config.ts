import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN as string;

const transport = TOKEN
  ? Nodemailer.createTransport(
      MailtrapTransport({
        token: TOKEN,
      })
    )
  : null;

const sender = {
  address: "hello@demomailtrap.co", // "hello@e-commerce-vof2.onrender.com",
  name: "Mailtrap Test",
};

interface MailOptions {
  to: string | string[];
  subject: string;
  text: string;
  html?: string;
  category?: string;
}

export const sendEmail = async (
  options: MailOptions,
  name: string,
  code: number | string
) => {
  if (!transport) {
    const errorMessage =
      "Mail transport is not configured. Make sure MAILTRAP_TOKEN is set in your .env file.";
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  try {
    const info = await transport.sendMail({
      from: sender,
      ...options,
      templateUuid: "c312accd-3811-4a43-b6a0-0b44731e6c7b",
      templateVariables: {
        name,
        code,
      },
    });
    console.log("Email sent successfully:", info);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

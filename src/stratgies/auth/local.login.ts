import passport from "passport";
// @ts-ignore
import { Strategy } from "passport-local";
import { PrismaClient } from "../../../generated/prisma/index.js";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId: any, done: any) => {
  try {
    const findUser = await prisma.user.findUnique({
      where: { id: userId },
    });
    findUser ? done(null, findUser.id) : done(null, null);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      usernameField: "email",
    },
    async (email: string, password: string, done: any) => {
      try {
        const findUser = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!findUser) return done("Unauthorized", null);

        // compare user password if it is correct
        const isPasswordValid = bcrypt.compareSync(password, findUser.password);

        if (isPasswordValid) {
          // @ts-ignore
          findUser.password = undefined;
          return done(null, findUser);
        } else {
          return done("Unauthorized", null);
        }
      } catch (error) {
        done(error, null);
      }
    }
  )
);

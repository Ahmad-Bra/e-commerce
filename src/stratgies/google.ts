// @ts-nocheck
import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await prisma.google.findUnique({
      where: { googleID: id },
    });
    findUser ? done(null, findUser as user) : done(null, null);
  } catch (error) {
    console.log(error);

    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      scope: ["email", "profile"],
      callbackURL:
        process.env.NODE_ENV == "development"
          ? process.env.LOCALECALLBACKURL
          : process.env.PRODCALLBACKURL,
    },
    async (accessToken, refreshTokenm, profile, done) => {
      try {
        const findUser = await prisma.google.findUnique({
          where: { googleID: profile.id },
        });

        if (findUser) return done(null, findUser);

        const newUser = await prisma.google.create({
          data: {
            username: profile.displayName,
            googleID: profile.id,
          },
        });
        if (newUser) return done(null, newUser);
      } catch (error) {
        console.log(error);
        done(error, null);
      }
    }
  )
);

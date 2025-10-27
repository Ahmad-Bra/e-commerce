import { Strategy } from "passport-google-oauth20";
import passport from "passport";
import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();
interface GoogleProfile {
  googleID: string;
}

passport.serializeUser((user: Partial<GoogleProfile>, done) => {
  // Store googleID in the session so deserialize can look it up consistently
  done(null, user.googleID);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await prisma.google.findUnique({
      where: { googleID: id as string },
    });
    findUser ? done(null, findUser) : done(null, null);
  } catch (error) {
    console.log(error);

    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      scope: ["email", "profile"],
      callbackURL:
        process.env.NODE_ENV == "development"
          ? (process.env.LOCALECALLBACKURL as string)
          : (process.env.PRODCALLBACKURL as string),
    },
    async (accessToken, refreshTokenm, profile, done) => {
      try {
        const findUser = await prisma.google.findUnique({
          where: { googleID: profile.id },
        });
        console.log(findUser);

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
        done(error, undefined);
      }
    }
  )
);

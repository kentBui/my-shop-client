import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import User from "../../../models/user.model";
import { dbConnect } from "../../../utils/dbConnect";

export default NextAuth({
  session: {
    jwt: true,
    // signingkey:
  },
  providers: [
    Providers.Credentials({
      name: "credentials",
      async authorize(credentials) {
        dbConnect();

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Please enter email or password!");
        }

        // find user in db
        const user = await User.findOne({ email });
        // console.log(user);

        if (!user) throw new Error("Invalid email or password!");

        // check password
        const isPassCorrect = await user.correctPassword(
          password,
          user.password
        );

        if (!isPassCorrect) throw new Error("Incorrect password");

        user.password = undefined;

        return Promise.resolve(user);
      },
    }),
  ],

  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      session.user = token.user;
      return Promise.resolve(session);
    },
  },
});

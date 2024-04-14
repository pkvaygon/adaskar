import GoogleProvider from 'next-auth/providers/google';
import clientPromise from './mongoDBPromise';
import { decode, encode } from 'next-auth/jwt';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
const mongoDBAdapter = MongoDBAdapter(clientPromise, { databaseName: "adaskar", collections: "users", accounts: null, })
export const authConfig = {
  // adapter: MongoDBAdapter(clientPromise, { databaseName: "adaskar", collections: "users" }),
  theme: {
    colorScheme: 'dark'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl: process.env.NEXTAUTH_URL + "/api/auth/callback/google",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signIn({ credentials, user, account, profile }) {
      try {
        // google
        const existingUser = await mongoDBAdapter.getUserByEmail(user.email);
        if (!existingUser) {
          const newUser = await mongoDBAdapter.createUser({
            id: user.id,
            provider: account.provider,
            email: profile.email,
            firstName: profile.given_name,
            lastName: profile.family_name,
            fullName: profile.name,
            avatar: profile.picture,
            subscription: false,
            ads: [],
            phoneNumber: null,
            username: profile.name,
            emailVerified: profile.email_verified || false,
          });
          console.log("New USER ADDED", newUser)
        }
      } catch (error) {
        console.error("Error during sign-in process:", error);
      }
      return user;
    },
    async session({ user, session, trigger }) {
      if (session) {
        try {
          const userFromDB = await mongoDBAdapter.getUserByEmail(session.user.email);
          if (userFromDB) {
            session.user = userFromDB
            session.expires = Math.floor(Date.now() / 1000) + (2 * 60);
          } else {
            session.user = {
              email: "koko"
            }
            session.expires = Math.floor(Date.now() / 1000) + (2 * 60);
          }
        } catch (error) {
          console.error("Error fetching user from MongoDB:", error);
        }
      }
      return session;
    },

  },
}

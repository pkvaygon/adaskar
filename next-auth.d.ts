import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface User {
    id: string;
    provider: string;
    email: string;
    name: string;
    avatar: string;
    subscription: boolean;
    ads: string[];
    phoneNumber: string | null;
    username: string;
    emailVerified: boolean;
  }
}

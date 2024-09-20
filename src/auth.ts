import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./lib/prisma"
import { Adapter } from "next-auth/adapters"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    }
  },
  providers: [Google],
})
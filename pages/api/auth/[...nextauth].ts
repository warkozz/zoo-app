// pages/api/auth/[...nextauth].ts

import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';
import { PrismaClient } from '@prisma/client';
import { verifyPassword } from '../../../src/lib/auth';
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: { email: string, password: string }) {
        // Vérifiez si l'utilisateur existe et le mot de passe correspond
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (user && await verifyPassword(credentials.password, user.password)) {
          return { id: user.id.toString(), email: user.email, role: user.role };
        }

        return null;
      },
    }),
    // Ajoutez d'autres providers si nécessaire
  ],
  callbacks: {
    async jwt(token: any, user: User) {
      if (user) {
        token.id = user.id.toString();
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session(session: any, token: any) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.role = token.role;
      return session;
    },
  },
});

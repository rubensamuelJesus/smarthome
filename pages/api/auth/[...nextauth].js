import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '/firebase/config';
import { getAdminStatus, getAdminStatusByEmail } from "./adminUtils";

export const authOptions = {
  pages: {
    signIn: '/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        return await signInWithEmailAndPassword(auth, (credentials).email || '', (credentials).password || '')
          .then(userCredential => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch(error => {
            console.log("error");
            console.log(error);
            console.log("error");
          })
          .catch((error) => {
            const errorCode = error.code;
          });
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = user.uid; // Adicione o UID do usuário ao token JWT
        // Verifique se o usuário é um administrador e adicione a flag isAdmin ao token JWT
        const isAdmin = await getAdminStatusByEmail(user.email);
        token.isAdmin = isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.uid = token.uid; // Adiciona o UID do usuário ao objeto de usuário
      session.user.isAdmin = token.isAdmin; // Adiciona a flag isAdmin ao objeto de usuário
      return session;
    }
  },
}

export default NextAuth(authOptions)

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '/firebase/config';

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
              console.log()
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
}
export default NextAuth(authOptions)
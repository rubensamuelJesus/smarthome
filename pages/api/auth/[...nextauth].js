import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '/app/firebase/config';

export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/signin'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        console.log("tytytytytytytytyty");
        console.log((credentials).email);
        console.log((credentials).password);
        console.log("tytytytytytytytyty");
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
    const errorMessage = error.message;
    console.log("error");
    console.log(error);
    console.log("error");
  });
      }
    })
  ],
}
export default NextAuth(authOptions)
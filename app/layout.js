import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Home from "./page";
import Signin from "./signin/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log("Session:", session);
  console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");

  return (
    <html lang='en'>
    <body className={inter.className}>
      <Provider session={session}>
      {!session ? (
          <Signin/>
        ): (
          <Home/>
        )}
      </Provider>
    </body>
  </html>
  );
}

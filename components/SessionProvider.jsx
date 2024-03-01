'use client';
import { createContext, useEffect, useContext, useState } from 'react';
import { SessionProvider, useSession } from "next-auth/react";

export const AuthContext = createContext(); // Exportando AuthContext

const Provider = ({ children}) => {
  const [isAdmin, setIsAdmin] = useState(false);

  //const { data: userSession, status } = useSession(); // Renomeando session para userSession
  //const session = await getServerSession(authOptions);
  return (
    <AuthContext.Provider value={{ isAdmin , setIsAdmin}}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </AuthContext.Provider>
  );
  
};

/*export default Provider;

export const UserAuth = () => {
  return useContext(AuthContext);
}
*/
export default Provider;

export const UserAuth = AuthContext.Consumer;
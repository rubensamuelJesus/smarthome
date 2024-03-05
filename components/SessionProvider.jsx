'use client';
import { createContext, useEffect, useContext, useState } from 'react';
import { SessionProvider, useSession } from "next-auth/react";

export const AuthContext = createContext();

const Provider = ({ children, session}) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if(session?.user?.isAdmin){
        setIsAdmin(true);
    }else{
      setIsAdmin(false);
    }
  }, [session]);

  return (
    
    <AuthContext.Provider value={{ isAdmin , setIsAdmin, user, setUser}}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </AuthContext.Provider>
  );
  
};

export default Provider;
export const UserAuth = AuthContext.Consumer;
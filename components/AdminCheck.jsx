"use client";
import React, { useEffect, useContext } from 'react';
import {useSession} from 'next-auth/react';
import { UserAuth } from '@/components/SessionProvider';
import { AuthContext } from '@/components/SessionProvider';

const AdminCheck = () => {
    const { isAdmin , setIsAdmin } = useContext(AuthContext);
    const session = useSession();

    useEffect(() => {
        if(session?.data?.user?.email == "assss@hotmail.com"){
            setIsAdmin(true);
        }
    }, [session]);
    

    return (
        <></>
    );
};

export default AdminCheck;
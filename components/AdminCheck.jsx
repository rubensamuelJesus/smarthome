"use client";
import React, { useEffect, useContext } from 'react';
import {useSession} from 'next-auth/react';
import { UserAuth } from '@/components/SessionProvider';
import { AuthContext } from '@/components/SessionProvider';

const AdminCheck = () => {
    const { isAdmin , setIsAdmin } = useContext(AuthContext);
    const session = useSession({
        required: true,
        /*onUnauthenticated(){
            router.push('/signin');
        }*/
    });

    useEffect(() => {
        if(session?.data?.user?.email == "assss@hotmail.com"){
            setIsAdmin(true);
        }
    }, [session]); // Este useEffect será executado toda vez que o valor de isAdmin mudar
    

    return (
        <></>
    );
};

export default AdminCheck;
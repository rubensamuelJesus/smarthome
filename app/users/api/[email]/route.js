import { NextRequest, NextResponse } from "next/server";
import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '/firebase/config';

export async function GET(request, params){
    try {
        const email = params.params.email;
        const userQuery = query(collection(db, 'users'), where('email', '==', email));
        const querySnapshot = await getDocs(userQuery);

        // Verifica se há algum usuário com o email fornecido
        if (!querySnapshot.empty) {

            const responseBody = querySnapshot.docs[0].data();

            // Retorna uma resposta JSON com os dados do usuário
            return new Response(JSON.stringify(responseBody), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
        } else {
            return new Response('Internal Error', {
                status: 500,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
        }
    } catch (error) {
        console.error('Erro durante o get:', error);
        return new Response('Internal Error', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });        
    }
}

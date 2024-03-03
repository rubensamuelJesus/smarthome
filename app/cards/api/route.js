import { NextResponse } from "next/server";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '/firebase/config';

export async function GET(request, params) {
    try {
        // Consulta todos os documentos na coleção 'users'
        const userQuerySnapshot = await getDocs(collection(db, 'users'));

        // Verifica se há algum documento na coleção
        if (!userQuerySnapshot.empty) {
            const usersData = [];

            // Itera sobre os documentos e adiciona os dados de cada usuário ao array
            userQuerySnapshot.forEach(doc => {
                usersData.push(doc.data());
            });

            // Retorna uma resposta JSON com os dados de todos os usuários
            return new Response(JSON.stringify(usersData), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            // Retorna uma resposta de erro se não houver usuários na coleção
            return new Response('No users found', {
                status: 404,
                headers: {
                    'Content-Type': 'text/plain'
                }
            });
        }
    } catch (error) {
        console.error('Erro durante a consulta:', error);
        // Retorna uma resposta de erro se ocorrer um erro durante a consulta
        return new Response('Internal Error', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
}

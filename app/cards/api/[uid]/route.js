import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '/firebase/config';

export async function GET(request, params) {
    try {
        const uid = params.params.uid;

        // Constrói a consulta para buscar os cartões do usuário com o UID fornecido
        const cardsQuery = query(collection(db, 'cartoes'), where('idUser', '==', uid));
        const querySnapshot = await getDocs(cardsQuery);

        // Verifica se há algum cartão associado ao UID fornecido
        if (!querySnapshot.empty) {
            // Monta a resposta com os dados dos cartões encontrados
            const responseBody = [];
            querySnapshot.forEach((doc) => {
                const cardData = doc.data();
                responseBody.push(cardData);
            });

            return new Response(JSON.stringify(responseBody), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            // Retorna um JSON vazio quando não há cartões encontrados
            return new Response(JSON.stringify([]), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    } catch (error) {
        console.error('Error during GET:', error);
        return new Response('Internal Error', {
            status: 500,
            headers: {
                'Content-Type': 'text/plain'
            }
        });
    }
}

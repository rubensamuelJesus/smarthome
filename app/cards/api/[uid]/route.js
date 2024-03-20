import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '/firebase/config';

export async function GET(request, params) {
    try {
        const uid = params.params.uid;
        const queryString = request.url.split('?')[1]; // Obtém a parte da string após o "?"
        const search = queryString ? new URLSearchParams(queryString) : new URLSearchParams(); // Verifica se há parâmetros de consulta

        // Constrói a consulta para buscar os cartões do usuário com o UID fornecido
        let cardsQuery = query(collection(db, 'cartoes'), where('idUser', '==', uid));

        // Recebe os filtros dinamicamente
        const field = search.get('field');
        const value = search.get('value');

        // Se os filtros foram recebidos, aplica-os à consulta
        if (field && value) {
            cardsQuery = query(cardsQuery, where(field, '==', value));
        }

        // Aplica o filtro para que os cartões com "type" igual a "weather" venham primeiro
        cardsQuery = query(cardsQuery, orderBy('type', 'desc'));

        const querySnapshot = await getDocs(cardsQuery);

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

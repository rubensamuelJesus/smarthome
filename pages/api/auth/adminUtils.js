// adminUtils.js

import { API_BASE_URL } from "@/config";

export async function getAdminStatusByEmail(email) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/api/${email}`);
        const data = await response.json();

        console.log("222222222hjhjhjhj");
        console.log(data);
        console.log("2222222hjhjhjhj");

        // Verifica se a resposta da API indica que o usuário é um administrador
        const isAdmin = data.isAdmin || false;
        
        return isAdmin;
    } catch (error) {
        console.error('Error getting admin status:', error);
        return false; // Em caso de erro, não é um administrador
    }
}

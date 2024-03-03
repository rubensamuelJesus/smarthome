// adminUtils.js

export async function getAdminStatusByEmail(email) {
    try {
        const response = await fetch(`/users/api/${email}`); // Rota da sua API que verifica o status de administrador com base no email
        const data = await response.json();

        console.log("hjhjhjhj");
        console.log(data);
        console.log("hjhjhjhj");

        // Verifica se a resposta da API indica que o usuário é um administrador
        const isAdmin = data.isAdmin || false;
        
        return isAdmin;
    } catch (error) {
        console.error('Error getting admin status:', error);
        return false; // Em caso de erro, não é um administrador
    }
}

"use client";
import { useState, useContext , useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import {useSession, signOut} from 'next-auth/react';
import { AuthContext } from '@/components/SessionProvider';
import Card from '@/components/Card';
import io from 'socket.io-client';
import axios from 'axios';

const Home = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [email, setEmail] = useState("assss@hotmail.com");
  const [password, setPassword] = useState("assss@hotmail.com");
  const { isAdmin , setIsAdmin } = useContext(AuthContext);



const [cards, setCards] = useState([]);
const [fetchedData, setFetchedData] = useState(false); // Flag para controlar se o fetchData já foi acionado

const session = useSession();
const [socket, setSocket] =  useState(undefined);

useEffect(() => {
  const fetchData = async () => {
    if (session.data) {
      const socketLo = setupSocket();
      setSocket(socketLo);
      fetchCards(socketLo);
      
      // Desconectar ao desmontar o componente
      return () => {
        socket.disconnect();
      };
    }
  };

  // Verificar se a sessão mudou antes de chamar fetchData novamente
  if (session.data && !fetchedData) { // Verifica se a flag fetchedData é falsa
    fetchData();
    setFetchedData(true); // Define a flag fetchedData como true após a primeira chamada do fetchData
  }

}, [session, fetchedData]); // Adicionando session e fetchedData como dependências



  // Função para configurar o socket
  const setupSocket = () => {
    // Conectar ao servidor Socket.IO
    const socket = io("http://192.168.1.90:5000");  
    return socket; // Retorna o objeto de socket
  };

  const fetchCards = async (socket) => {
    console.log("lkjkhhkjjhkhjhjk");
    console.log(socket == undefined);
    console.log("lkjkhhkjjhkhjhjk");
    if (session.data) {
      const uid = session.data.user.uid; // Obtém o UID do usuário da sessão
      try {
        // Defina o critério de ordenação desejado
        const order = {
          field: 'type', // Campo de ordenação (por exemplo, 'type' para tipo de cartão)
          direction: 'asc' // Direção da ordenação ('asc' para ascendente, 'desc' para descendente)
        };
    
        // Constrói a URL da API com o UID do usuário e o critério de ordenação
        const url = `/cards/api/${uid}?order=${JSON.stringify(order)}`;
    
        // Faz a chamada à API incluindo o UID do usuário e o critério de ordenação na URL
        const response = await fetch(url);
        
        if (response.ok) {
          const data = await response.json();
          await setCards(data);
          setupSocketListenersForCards(data, socket);
        } else {
            throw new Error('Erro ao obter dados da API');
        }
    } catch (error) {
        console.error('Erro:', error);
    }
    }
  };

  const setupSocketListenersForCards = (cardsData, socket) => {
    if (socket !== undefined) { // Verifica se socket está definido
      cardsData.forEach((card, index) => { // Adiciona o índice para referenciar o card específico
        const { type, channel } = card; // Extrai o tipo e o nome do canal do card
        if (type === "sensor" && channel) {
          // Configura o ouvinte de eventos Socket.IO para o canal
          socket.on(channel, (data) => {
            console.log(`Recebeu uma mensagem do canal ${channel}:`, data);
            // Cria uma cópia do array de cartões
            const updatedCards = [...cardsData];
            // Atualiza o valor no cartão com o valor recebido, arredondado para duas casas decimais
            updatedCards[index] = { ...card, value: parseFloat(data).toFixed(2) };
            // Atualiza o estado dos cartões
            setCards(updatedCards);
          });
        } else if(type === "weather"){
          getWeatherData(card.city);
        }
      });
    }
  };

  const getWeatherData = async (cityName) => {
    try {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityName}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': '6a5ca6bcc7msh254a5eccedf4b40p1f9b60jsn8d922cdd43c9',
            'Content-Type': 'application/json'
          }
      });

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
  
  

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="m-0 font-sans text-base antialiased font-normal text-left leading-default text-slate-500 dark:text-white">
    <Sidebar />

    <main className="relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl ps ps--active-y">
      {/* Navbar */}
      <nav className="bg-transparent text-gray-100 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Your Next.js App</h1>
        <div className="flex items-center">
          {/* Botão de login */}
          {/* Botão de configurações */}
          <button className="text-white flex items-center space-x-2" onClick={toggleSettings} style={{ paddingLeft: '10px' }}>
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>


      <div className="w-full p-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          // Determina qual tipo de card é com base no tipo do item
          switch (card.type) {
            case 'weather':
              return <Card key={card.id} type="weather" />;
            case 'actuator':
              return (
                <Card
                    key={card.id}
                    type="actuator"
                    name={card.nome}
                    onClick={() => {
                      const newValue = card.value ? false : true; // Calcula o valor oposto ao valor atual
                      console.log(`Emitted value for card ${card.id}: ${newValue}`);
                      // Emite o novo valor para o canal do cartão
                      socket.emit(card.channel, newValue);
                    }}
                  />


              );
            case 'sensor':
              return <Card key={card.id} type="sensor" value={card.value} name={card.nome}/>;
            default:
              return null; // Ou renderiza outro componente ou nada, dependendo da necessidade
          }
        })}


          {/* Settings sidebar */}
          <div className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${isSettingsOpen ? 'transform translate-x-0' : 'transform translate-x-full  w-0'}`}>
            <div className="h-screen w-80 bg-white fixed top-0 right-0 shadow-lg">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Settings</h2>
                {/* Add settings content here */}
                <button className="text-red-500" onClick={toggleSettings}>Close</button>
              </div>
            </div>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-0" onClick={toggleSettings}></div>
            
          </div>

        </div>
      </main>
    </div>
  );
};

Home.requireAuth = true
export default Home;

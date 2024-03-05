"use client";
import { useState, useContext , useEffect} from 'react';
import Sidebar from '../components/Sidebar';
import {useSession, signOut} from 'next-auth/react';
import { AuthContext } from '@/components/SessionProvider';
import Card from '@/components/Card';

const Home = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [email, setEmail] = useState("assss@hotmail.com");
  const [password, setPassword] = useState("assss@hotmail.com");
  const { isAdmin , setIsAdmin } = useContext(AuthContext);
  const [cards, setCards] = useState([]);

  const session = useSession();

  useEffect(() => {
    console.log("rtrtrtrtrtrttttt");
    if (session.data) {
      fetchCards();
    }
  }, [session]);

  const fetchCards = async () => {
    if (session.data) {
      const uid = session.data.user.uid; // Obtém o UID do usuário da sessão
      try {
        // Fazer a chamada à API aqui, incluindo o UID do usuário na URL
        const response = await fetch(`/cards/api/${uid}`);
        if (response.ok) {
          const data = await response.json();
          setCards(data); // Atualiza o estado com os dados dos cards obtidos da API
        } else {
          throw new Error('Erro ao obter dados da API');
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };
  
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await auth?.loginEmailPassword(email, password);
      if (user !== null) {
        console.log("Login bem-sucedido!");
        console.log(user);
        // Faça qualquer ação adicional com o usuário
      } else {
        console.log("Erro durante o login");
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <nav className="bg-transparent text-gray-100 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Your Next.js App</h1>
          <div className="flex items-center">
            { /*<button className="text-white flex items-center space-x-1" onClick={handleLogin} style={{ paddingRight: '10px' }}> */} 
            {session?.data?.user ? (
              <>
                <span>{session?.data?.user?.email}</span>
                <span>{session?.data?.user?.uid}</span>
                <button onClick={() => signOut()}>Logout</button>
              </>
            ) : (
              <>
                <span>Login</span>
                {/* Adicionei o SVG do login aqui */}
                <svg className="h-6 w-6 text-white-500" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <button onClick={() => {}}>Login</button>

              </>
            )}


            <button className="text-white flex items-center space-x-2" onClick={toggleSettings} style={{ paddingLeft: '10px' }}>
              <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
              </svg>

            </button>
          </div>
        </nav>




        {/* Main content */}
        <main className="flex-1 p-10 overflow-y-auto">
          <h1 className="text-3xl font-semibold mb-5">Welcome to Your Next.js App</h1>
          <p>This is your main content area.</p>
          <p>{cards.length}</p>
          
          {/* Renderizando os cards */}
          {cards.map((card, index) => (
            <Card key={index} type={card.type} data={card.data} />
          ))}
        </main>

      </div>

      {/* Settings sidebar */}
      <div className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${isSettingsOpen ? 'transform translate-x-0' : 'transform translate-x-full  w-0'}`}>
        <div className="h-screen w-80 bg-white fixed top-0 right-0 shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            {/* Add settings content here */}
            <button className="text-red-500" onClick={toggleSettings}>Close</button>
          </div>
        </div>
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-0"
          onClick={toggleSettings}
        ></div>
      </div>

      
    </div>
  );
};

Home.requireAuth = true
export default Home;

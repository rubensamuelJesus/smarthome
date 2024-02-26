"use client";
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import {signIn, useSession} from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';


const Home = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  //const auth = useAuth();
  const [email, setEmail] = useState("assss@hotmail.com");
  const [password, setPassword] = useState("assss@hotmail.com");
  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const session = useSession({
    required: true,
    onUnauthenticated(){
      router.push('/signin');
    }
  });

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
            <button className="text-white flex items-center space-x-1" onClick={() =>signIn( 'credentials',{email, password, redirect: false, callbackUrl: '/'})} style={{ paddingRight: '10px' }}>

              <svg class="h-6 w-6 text-white-500" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                <circle cx="12" cy="7" r="4" />  
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              {session?.user?.email ? (
                <span>{session.user.email}</span>
              ) : (
                <span>Login</span>
              )}
            </button>


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

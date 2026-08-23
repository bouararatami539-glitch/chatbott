import { useState } from 'react';
import Chatbot from './components/Chatbot';

export default function App() {
  const [logoUrl] = useState<string>(() => {
    return localStorage.getItem('university_logo') || 'https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png';
  });

  return (
    <div className="min-h-screen w-full bg-slate-100 flex flex-col font-sans text-slate-800 antialiased" id="app-root">
      <Chatbot logoUrl={logoUrl} />
    </div>
  );
}

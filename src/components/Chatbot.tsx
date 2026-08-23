import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Trash2, Sparkles, AlertCircle, Copy, Check, ExternalLink, RefreshCw } from 'lucide-react';
import Markdown from 'react-markdown';
import { Message } from '../types';

interface ChatbotProps {
  logoUrl?: string;
}

export default function Chatbot({ logoUrl = 'https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png' }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Bienvenue à la Faculté MIT de l'Université Dr Moulay Tahar de Saïda ! 🎓✨\n\nJe suis votre Assistant et Conseiller d'Orientation Académique. Je suis à votre service pour vous orienter, vous guider et vous faire découvrir notre faculté d'excellence :\n\n- 🏛️ **Visite & Photos des lieux** (Hall d'accueil, Amphi, Classes, Labos)\n- 📍 **Localisation des bureaux** (Doyen au 4e étage, Chefs de départements au 1er étage...)\n- 🎓 **Offres de formations** (Licences, Masters, Diplômes d'Ingénieur d'État en Informatique et en IA)\n- 📚 **Liens Moodle e-learning** des cours L2 et Master IA\n- ⏰ **Emploi du temps officiel** et salles de cours/TP de la Licence 2\n- 📰 **Dernières actualités** et classements du département\n\nComment puis-je vous aider aujourd'hui ?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const suggestions = [
    { text: "جديد اليوم في القسم ؟ 📰", query: "هل من جديد اليوم في قسم الاعلام الالي" },
    { text: "Visite des espaces 🏛️", query: "Je veux visiter la faculté et voir les différents espaces en photos" },
    { text: "Bureau du Doyen 📍", query: "Où se trouve le bureau du doyen de la faculté et comment y aller ?" },
    { text: "Chefs de départements 🏢", query: "Où se trouvent les bureaux des chefs de départements informatique, maths et télécoms ?" },
    { text: "Ingénieur Info & IA ⚙️", query: "Parlez-moi des diplômes d'ingénieur d'État en Informatique et en Intelligence Artificielle" },
    { text: "Cours Moodle L2/Master 📚", query: "Quels sont les liens e-learning Moodle des cours de Licence 2 et Master IA ?" },
    { text: "Emploi du temps L2 ⏰", query: "Quel est l'emploi du temps de la Licence 2 Informatique et où se trouvent les salles ?" },
    { text: "Orientation BAC 🎯", query: "Pouvez-vous me conseiller un parcours ? J'ai obtenu 14.50 au BAC et j'aime l'informatique." }
  ];

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    setErrorMsg(null);
    setInputValue('');

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, text: m.text }))
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Une erreur de communication est survenue.");
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Impossible de joindre le serveur. Veuillez vérifier votre connexion.");
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  const clearChat = () => {
    if (window.confirm("Voulez-vous réinitialiser la conversation ?")) {
      setMessages([
        {
          id: 'welcome',
          role: 'model',
          text: "Bienvenue à la Faculté MIT de l'Université Dr Moulay Tahar de Saïda ! ✨\n\nJe suis votre Assistant et Conseiller d'Orientation. Comment puis-je vous aider aujourd'hui ?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setErrorMsg(null);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderMessageContent = (text: string) => {
    if (!text) return null;
    
    // Regex to match <iframe ...></iframe> or <img ... /> tags
    const mediaRegex = /(<iframe[^>]*src="[^"]*"[^>]*><\/iframe>|<img[^>]*src=['"][^'"]*['"][^>]*\/?>)/gi;
    const parts = text.split(mediaRegex);

    return parts.map((part, index) => {
      if (/<iframe/i.test(part)) {
        const srcMatch = part.match(/src="([^"]+)"/i);
        const src = srcMatch ? srcMatch[1] : '';
        
        if (!src) return null;

        return (
          <div key={`iframe-${index}`} className="my-3 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-50">
            <iframe
              src={src}
              width="100%"
              height="380"
              allowFullScreen
              style={{ border: 'none' }}
              className="w-full h-[320px] sm:h-[380px]"
              title="Visite interactive"
            />
          </div>
        );
      } else if (/<img/i.test(part)) {
        const srcMatch = part.match(/src=['"]([^'"]+)['"]/i);
        const altMatch = part.match(/alt=['"]([^'"]+)['"]/i);
        const src = srcMatch ? srcMatch[1] : '';
        const alt = altMatch ? altMatch[1] : 'Espace de la faculté';

        if (!src) return null;

        return (
          <div 
            key={`img-${index}`} 
            className="my-3.5 w-full overflow-hidden rounded-2xl border border-slate-200/90 shadow-md bg-slate-900 group relative cursor-pointer"
            onClick={() => setSelectedImage({ src, alt })}
          >
            <img
              src={src}
              alt={alt}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[380px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200';
              }}
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white flex items-center justify-between">
              <span className="text-xs font-medium truncate drop-shadow">{alt}</span>
              <span className="text-[11px] bg-white/20 hover:bg-white/30 backdrop-blur-md px-2 py-0.5 rounded-full text-white flex items-center gap-1">
                <ExternalLink className="h-3 w-3" /> Agrandir
              </span>
            </div>
          </div>
        );
      } else {
        if (!part.trim()) return null;
        return (
          <div key={`text-${index}`} className="markdown-body text-slate-800 leading-relaxed font-sans">
            <Markdown>{part}</Markdown>
          </div>
        );
      }
    });
  };

  return (
    <div className="h-screen w-full flex flex-col bg-slate-100 antialiased text-slate-800" id="chatbot-app">
      
      {/* Top Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-indigo-850 to-slate-900 text-white shadow-md z-10 px-4 sm:px-6 py-3 flex-shrink-0" id="chatbot-header">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-white p-1.5 rounded-xl shadow-inner flex items-center justify-center h-11 w-11 flex-shrink-0">
              <img
                src={logoUrl}
                alt="Logo Université de Saïda"
                className="h-8 w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png';
                }}
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono tracking-wider text-emerald-300 uppercase font-semibold">Guidebot Officiel</span>
              </div>
              <h1 className="text-base sm:text-lg font-display font-bold leading-tight tracking-tight">
                Faculté MIT — Université Dr Moulay Tahar de Saïda
              </h1>
              <p className="text-[11px] sm:text-xs text-indigo-200/90 hidden sm:block">
                Mathématiques • Informatique • Télécommunications
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={clearChat}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-indigo-100 hover:text-white transition-colors text-xs font-medium flex items-center gap-1.5 border border-white/10"
              title="Nouvelle conversation"
              id="header-clear-btn"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Nouveau dialogue</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Chat Center Container */}
      <main className="flex-1 flex flex-col max-w-5xl w-full mx-auto sm:px-4 sm:py-3 overflow-hidden">
        <div className="flex-1 flex flex-col bg-white sm:rounded-2xl sm:border sm:border-slate-200/80 shadow-lg overflow-hidden relative">

          {/* Messages Scrollable Log */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50/50" id="chat-messages-container">
            {messages.map((msg) => {
              const isBot = msg.role === 'model';
              return (
                <div 
                  key={msg.id} 
                  className={`flex items-start space-x-3 max-w-[92%] sm:max-w-[85%] ${
                    isBot ? '' : 'ml-auto flex-row-reverse space-x-reverse'
                  }`}
                  id={`msg-${msg.id}`}
                >
                  {/* Avatar */}
                  <div className={`p-2 rounded-xl flex-shrink-0 text-white shadow-sm ${
                    isBot ? 'bg-gradient-to-tr from-indigo-700 to-indigo-600' : 'bg-gradient-to-tr from-emerald-600 to-teal-500'
                  }`}>
                    {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>

                  {/* Bubble */}
                  <div className="space-y-1 group">
                    <div className={`relative px-4 sm:px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      isBot 
                        ? 'bg-white text-slate-800 border border-slate-150 rounded-tl-none' 
                        : 'bg-indigo-600 text-white rounded-tr-none'
                    }`}>
                      
                      {/* Message Content */}
                      {isBot ? (
                        <div className="space-y-2">
                          {renderMessageContent(msg.text)}
                        </div>
                      ) : (
                        <p className="whitespace-pre-wrap font-sans text-white leading-relaxed">{msg.text}</p>
                      )}

                      {/* Copy Action */}
                      {isBot && (
                        <button
                          onClick={() => copyToClipboard(msg.text, msg.id)}
                          className="absolute top-2.5 right-2.5 p-1 rounded-md bg-slate-100/90 text-slate-500 hover:text-slate-800 hover:bg-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-150"
                          title="Copier le texte"
                        >
                          {copiedId === msg.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                      )}
                    </div>
                    
                    {/* Timestamp */}
                    <span className={`block text-[10px] font-mono text-slate-400 px-1 ${
                      isBot ? 'text-left' : 'text-right'
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-start space-x-3 max-w-[80%]" id="typing-indicator">
                <div className="p-2 rounded-xl flex-shrink-0 text-white bg-indigo-600 shadow-sm">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center space-x-1.5 h-10">
                  <span className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="h-2 w-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-xs flex items-start space-x-2.5 animate-fade-in" id="chat-error-message">
                <AlertCircle className="h-4 w-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Une erreur est survenue :</p>
                  <p className="mt-0.5 leading-relaxed">{errorMsg}</p>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions bar */}
          <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200/70 overflow-x-auto no-scrollbar" id="suggestions-bar">
            <div className="flex items-center gap-2 min-w-max">
              <span className="text-[11px] font-mono tracking-wider uppercase text-slate-400 font-bold flex items-center gap-1 mr-1">
                <Sparkles className="h-3 w-3 text-indigo-500" />
                Suggestions :
              </span>
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(s.query)}
                  disabled={isLoading}
                  className="text-xs bg-white text-indigo-900 hover:bg-indigo-50 hover:text-indigo-700 border border-indigo-100 hover:border-indigo-200 font-medium py-1.5 px-3 rounded-full shadow-xs whitespace-nowrap transition-all duration-150 active:scale-95 disabled:opacity-50"
                  id={`suggestion-btn-${idx}`}
                >
                  {s.text}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input Field */}
          <form onSubmit={handleFormSubmit} className="p-3 sm:p-4 bg-white border-t border-slate-200/80" id="chat-input-form">
            <div className="relative flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Posez votre question sur la faculté (français, arabe, anglais)..."
                disabled={isLoading}
                className="w-full pl-4 pr-14 py-3.5 rounded-2xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all disabled:bg-slate-50 disabled:text-slate-400 font-sans text-sm shadow-inner"
                id="chat-input-field"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white disabled:bg-slate-200 disabled:text-slate-400 shadow-sm transition-all duration-150 active:scale-95 flex items-center justify-center"
                id="chat-submit-button"
                title="Envoyer"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 text-center mt-2 hidden sm:block">
              Conseiller Virtuel d'Orientation • Faculté MIT (Université de Saïda) • Informations académiques officielles
            </p>
          </form>

        </div>
      </main>

      {/* Image Modal Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
          id="image-preview-modal"
        >
          <div 
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <span className="text-sm font-semibold truncate">{selectedImage.alt}</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium"
              >
                Fermer
              </button>
            </div>
            <div className="p-2 flex items-center justify-center bg-black">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

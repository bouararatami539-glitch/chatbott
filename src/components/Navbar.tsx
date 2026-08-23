import { useState, useRef } from 'react';
import { GraduationCap, Menu, X, Bot, Edit2, Upload, RotateCcw, Check, Image, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  setSection: (section: string) => void;
  onOpenChat: () => void;
  logoUrl: string;
  onUpdateLogo: (newUrl: string) => void;
}

export default function Navbar({ currentSection, setSection, onOpenChat, logoUrl, onUpdateLogo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);
  const [inputUrl, setInputUrl] = useState(logoUrl);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const menuItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'specialties', label: 'Spécialités' },
    { id: 'simulator', label: 'Simulateur BAC' },
    { id: 'guide', label: 'Guide Inscription' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setInputUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setInputUrl(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm" id="main-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          {/* Logo & University Name */}
          <div className="flex items-center space-x-3" id="navbar-logo-container">
            <div className="relative group/logo h-12 w-12 bg-slate-50 p-1.5 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center cursor-pointer">
              <img
                src={logoUrl}
                alt="Logo Université de Saïda"
                className="h-9 w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
                onClick={() => setSection('home')}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png';
                }}
              />
              {/* Edit logo hover badge */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setInputUrl(logoUrl);
                  setShowLogoModal(true);
                }}
                className="absolute -bottom-1 -right-1 bg-indigo-600 hover:bg-indigo-700 text-white p-1 rounded-full shadow-md scale-75 opacity-0 group-hover/logo:opacity-100 transition-opacity"
                title="Modifier le logo"
              >
                <Edit2 className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="cursor-pointer" onClick={() => setSection('home')}>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-mono tracking-widest text-emerald-600 uppercase font-semibold">Université de Saïda</span>
              </div>
              <h1 className="text-lg font-display font-bold text-slate-800 tracking-tight leading-none">
                Faculté <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">M.I.T.</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentSection === item.id
                    ? 'bg-indigo-50/80 text-indigo-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-6 w-px bg-slate-200 mx-3" />

            <button
              onClick={onOpenChat}
              className="flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 shadow-sm transition-all duration-200"
              id="nav-chat-btn"
            >
              <Bot className="h-4 w-4 animate-pulse" />
              <span>Assistant IA</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-inner">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSection(item.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                currentSection === item.id
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
              id={`mobile-nav-link-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                onOpenChat();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-4 py-3 rounded-xl text-sm font-semibold hover:opacity-90 shadow-sm"
              id="mobile-nav-chat-btn"
            >
              <Bot className="h-5 w-5" />
              <span>Discuter avec l'Assistant IA</span>
            </button>
          </div>
        </div>
      )}

      {/* Customize Logo Modal */}
      {showLogoModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative space-y-5">
            <button
              onClick={() => {
                setShowLogoModal(false);
                setInputUrl(logoUrl);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div>
              <h3 className="text-xl font-display font-extrabold text-slate-900 flex items-center gap-2">
                <Image className="h-5 w-5 text-indigo-600" />
                <span>Personnaliser le Logo</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Importez n'importe quel logo (fichier local ou lien web) pour personnaliser l'application en temps réel.
              </p>
            </div>

            {/* Preview Section */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/80 flex flex-col items-center justify-center space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase font-bold">Aperçu du Logo</span>
              <div className="h-20 w-36 bg-white rounded-xl shadow-inner border border-slate-200/60 flex items-center justify-center p-3">
                {inputUrl ? (
                  <img
                    src={inputUrl}
                    alt="Logo personnalisé"
                    className="h-14 w-auto max-w-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png';
                    }}
                  />
                ) : (
                  <GraduationCap className="h-10 w-10 text-slate-300" />
                )}
              </div>
            </div>

            {/* Selection Options */}
            <div className="space-y-4">
              {/* File Drop/Upload Area */}
              <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-5 text-center cursor-pointer transition-all duration-200 ${
                  dragActive 
                    ? 'border-indigo-500 bg-indigo-50/50' 
                    : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 hover:bg-slate-50'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Upload className="h-5 w-5 text-indigo-500 mx-auto mb-1.5" />
                <p className="text-xs font-bold text-slate-700">Sélectionnez ou glissez un fichier image</p>
                <p className="text-[10px] text-slate-400 mt-0.5">PNG, JPG, SVG ou WEBP</p>
              </div>

              {/* Direct Link Input */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Ou coller l'URL d'un logo</label>
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  placeholder="https://example.com/mon-logo.png"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              {/* Models/Presets */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Modèles rapides</label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setInputUrl('https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png')}
                    className="flex items-center space-x-2 p-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="h-6 w-6 bg-white flex items-center justify-center p-0.5 border border-slate-100 rounded-lg shrink-0">
                      <img src="https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png" className="h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-700 truncate">Saïda Officiel</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInputUrl('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=120')}
                    className="flex items-center space-x-2 p-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="h-6 w-6 bg-white flex items-center justify-center p-0.5 border border-slate-100 rounded-lg shrink-0">
                      <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=120" className="h-full object-cover rounded" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-700 truncate">Académique</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInputUrl('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=120')}
                    className="flex items-center space-x-2 p-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="h-6 w-6 bg-white flex items-center justify-center p-0.5 border border-slate-100 rounded-lg shrink-0">
                      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=120" className="h-full object-cover rounded" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-700 truncate">MIT Tech</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInputUrl('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120')}
                    className="flex items-center space-x-2 p-2 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="h-6 w-6 bg-white flex items-center justify-center p-0.5 border border-slate-100 rounded-lg shrink-0">
                      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=120" className="h-full object-cover rounded" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-700 truncate">Art Abstrait</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setInputUrl('https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png')}
                className="flex-1 flex items-center justify-center space-x-1 border border-slate-200 text-slate-600 hover:bg-slate-50 py-2 rounded-xl text-xs font-semibold transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Par défaut</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onUpdateLogo(inputUrl || 'https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png');
                  setShowLogoModal(false);
                }}
                className="flex-1 flex items-center justify-center space-x-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Confirmer</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}


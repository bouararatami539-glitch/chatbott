import { Bot, Compass, Calculator, Users, GraduationCap, MapPin, Sparkles, BookOpen, Radio } from 'lucide-react';

interface HeroProps {
  setSection: (section: string) => void;
  onOpenChat: () => void;
}

export default function Hero({ setSection, onOpenChat }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-24" id="hero-section">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-indigo-50/50 blur-3xl" />
      <div className="absolute top-[200px] right-10 -z-10 h-[300px] w-[300px] rounded-full bg-emerald-50/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Promo Badge */}
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full py-1.5 px-3.5 text-xs font-semibold text-indigo-700 animate-fade-in" id="hero-badge">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Portail Officiel d'Orientation — Bacheliers 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-none">
              Dessinez votre avenir à la Faculté{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                M.I.T. de Saïda
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Explorez le monde des <strong>Mathématiques</strong>, de l'<strong>Informatique</strong>, et des <strong>Télécommunications</strong>. 
              La Faculté de l'Université Dr. Moulay Tahar de Saïda vous offre un accompagnement personnalisé, des clubs scientifiques ultra-dynamiques et des diplômes d'excellence (LMD) très recherchés sur le marché de l'emploi.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOpenChat}
                className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-indigo-200 hover:translate-y-[-2px] transition-all duration-200"
                id="hero-chat-cta"
              >
                <Bot className="h-5 w-5 animate-pulse" />
                <span>Parler au Guidebot IA</span>
              </button>

              <button
                onClick={() => setSection('simulator')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-slate-800 border border-slate-200 font-semibold px-8 py-4 rounded-2xl hover:bg-slate-50 hover:translate-y-[-2px] transition-all duration-200"
                id="hero-simulator-cta"
              >
                <Calculator className="h-5 w-5 text-emerald-500" />
                <span>Simulateur d'Orientation BAC</span>
              </button>
            </div>

            {/* Location Badge */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-slate-500 text-sm">
              <MapPin className="h-4 w-4 text-rose-500" />
              <span>Campus de Saïda, Algérie — Université Dr. Moulay Tahar</span>
            </div>
          </div>

          {/* Hero Right Visuals / Quick Info Cards */}
          <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: Informatique */}
              <div 
                onClick={() => setSection('specialties')}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer group transition-all duration-300 hover:border-indigo-100"
                id="hero-card-info"
              >
                <div className="bg-indigo-50 p-3 rounded-2xl text-indigo-600 w-fit group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-slate-800 text-base">Informatique</h3>
                <p className="text-xs text-slate-500 mt-1">ISIL, Réseaux RSD, Génie Logiciel, IA & Science des données.</p>
              </div>

              {/* Card 2: Télécommunications */}
              <div 
                onClick={() => setSection('specialties')}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer group transition-all duration-300 hover:border-emerald-100 mt-4"
                id="hero-card-telecom"
              >
                <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600 w-fit group-hover:scale-110 transition-transform">
                  <Radio className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-slate-800 text-base">Télécommunications</h3>
                <p className="text-xs text-slate-500 mt-1">Propagation des signaux, ondes, électronique embarquée, IoT et réseaux mobiles.</p>
              </div>

              {/* Card 3: Mathématiques */}
              <div 
                onClick={() => setSection('specialties')}
                className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer group transition-all duration-300 hover:border-purple-100"
                id="hero-card-math"
              >
                <div className="bg-purple-50 p-3 rounded-2xl text-purple-600 w-fit group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-slate-800 text-base">Mathématiques</h3>
                <p className="text-xs text-slate-500 mt-1">Maths fondamentales, Probabilités, Statistiques et Recherche Opérationnelle.</p>
              </div>

              {/* Card 4: Clubs & Vie Étudiante */}
              <div 
                className="bg-gradient-to-tr from-indigo-900 to-slate-800 p-6 rounded-3xl text-white shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                id="hero-card-life"
              >
                <div className="bg-white/10 p-3 rounded-2xl text-emerald-400 w-fit">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display font-bold text-base">Vie Étudiante</h3>
                <p className="text-xs text-indigo-100 mt-1">Des clubs scientifiques dynamiques, coding clubs et hackathons locaux.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Campus Entrance Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl border border-slate-100 shadow-md group" id="hero-campus-banner">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/45 to-transparent z-10" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Entr%C3%A9e_de_l%27universit%C3%A9_de_Sa%C3%AFda.jpg"
            alt="Entrée principale de l'Université de Saïda"
            className="w-full h-64 md:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 text-white">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-2">Campus Dr. Moulay Tahar</span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight max-w-xl leading-tight text-white">
              Un campus moderne au cœur de l'excellence académique
            </h2>
            <p className="text-sm text-slate-200 max-w-lg mt-2 font-sans">
              Découvrez les infrastructures de pointe de la Faculté de l'Université de Saïda, de nos laboratoires de recherche à nos espaces étudiants inspirants.
            </p>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm" id="stats-banner">
          <div className="text-center md:border-r md:border-slate-100 last:border-0 p-2">
            <span className="block text-3xl sm:text-4xl font-display font-extrabold text-indigo-600">3</span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">Départements Clés</span>
          </div>
          <div className="text-center md:border-r md:border-slate-100 last:border-0 p-2">
            <span className="block text-3xl sm:text-4xl font-display font-extrabold text-emerald-500">12+</span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">Filières LMD</span>
          </div>
          <div className="text-center md:border-r md:border-slate-100 last:border-0 p-2">
            <span className="block text-3xl sm:text-4xl font-display font-extrabold text-purple-600">100%</span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">Accompagnement IA</span>
          </div>
          <div className="text-center p-2">
            <span className="block text-3xl sm:text-4xl font-display font-extrabold text-slate-800">40+</span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-1 block">Profs & Chercheurs</span>
          </div>
        </div>
      </div>
    </div>
  );
}

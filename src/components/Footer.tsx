import { GraduationCap, Mail, Phone, MapPin, Landmark, Facebook, Globe } from 'lucide-react';

interface FooterProps {
  setSection: (section: string) => void;
  logoUrl: string;
}

export default function Footer({ setSection, logoUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Col 1: Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setSection('home')} id="footer-logo-container">
              <div className="h-12 w-auto bg-slate-800 p-1.5 rounded-xl shadow-sm border border-slate-700 flex items-center justify-center">
                <img
                  src={logoUrl}
                  alt="Logo Université de Saïda"
                  className="h-9 w-auto max-w-full object-contain brightness-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://upload.wikimedia.org/wikipedia/ar/2/25/Logo-univ-saida.png';
                  }}
                />
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-bold leading-none">Université de Saïda</span>
                <span className="text-base font-display font-extrabold text-white">Faculté M.I.T.</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              La Faculté de Mathématiques, d'Informatique, et de Télécommunications de l'Université Dr. Moulay Tahar de Saïda est un pôle d'enseignement et de recherche d'excellence en Algérie.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://www.facebook.com/univsaida86/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors" title="Facebook officiel">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="http://www.univ-saida.dz/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors" title="Site web officiel">
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">Navigation rapide</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setSection('home')} className="hover:text-white transition-colors">
                  Accueil (Présentation)
                </button>
              </li>
              <li>
                <button onClick={() => setSection('specialties')} className="hover:text-white transition-colors">
                  Spécialités LMD (Maths, Info, Télécom)
                </button>
              </li>
              <li>
                <button onClick={() => setSection('simulator')} className="hover:text-white transition-colors">
                  Simulateur d'Orientation BAC
                </button>
              </li>
              <li>
                <button onClick={() => setSection('guide')} className="hover:text-white transition-colors">
                  Guide d'inscription PROGRES
                </button>
              </li>
              <li>
                <button onClick={() => setSection('faq')} className="hover:text-white transition-colors">
                  FAQ Bacheliers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">Contact & Localisation</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  B.P. 138 Cité EN-NASR, Saïda (20000), Algérie.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>+213 (0) 48 47 23 45</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>contact@univ-saida.dz</span>
              </li>
              <li className="flex items-center space-x-2">
                <Landmark className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Ministère de l'Enseignement Supérieur (MESRS)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {currentYear} Faculté MIT — Université Dr. Moulay Tahar de Saïda. Tous droits réservés.</p>
          <p className="font-mono">Développé pour la Faculté MIT — Université de Saïda</p>
        </div>

      </div>
    </footer>
  );
}

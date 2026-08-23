import { Calendar, CheckSquare, Clipboard, CreditCard, FileText, Globe, Landmark } from 'lucide-react';

export default function Guide() {
  const steps = [
    {
      number: '01',
      title: 'Obtention des accès',
      icon: FileText,
      description: 'Dès l\'annonce des résultats du BAC, récupérez vos accès personnels (Numéro d\'inscription et Code confidentiel) qui figurent en bas de votre relevé de notes officiel.',
      tip: 'Gardez ce code secret, il vous servira pour toutes les étapes sur le portail national.'
    },
    {
      number: '02',
      title: 'Saisie de la fiche de vœux',
      icon: Clipboard,
      description: 'Connectez-vous sur la plateforme nationale PROGRES (https://progres.mesrs.dz/webbac). Saisissez votre liste ordonnée de choix (entre 6 et 10 vœux), incluant MI (Maths/Info) ou ST (Technologie) de Saïda.',
      tip: 'Pensez à placer vos spécialités préférées en tête de liste pour maximiser vos chances !'
    },
    {
      number: '03',
      title: 'Confirmation & Traitement',
      icon: CheckSquare,
      description: 'Confirmez définitivement vos vœux en ligne. Le ministère procédera ensuite au traitement informatique de votre dossier selon la moyenne pondérée et le nombre de places.',
      tip: 'Pendant cette phase, vous pouvez également modifier votre liste de vœux une seule fois s\'il y a réorientation.'
    },
    {
      number: '04',
      title: 'Résultats d\'orientation',
      icon: Globe,
      description: 'Consultez les résultats de votre orientation sur PROGRES. Vous découvrirez dans quelle filière et quelle université vous avez été définitivement affecté.',
      tip: 'Si vous êtes orienté vers l\'Université de Saïda, préparez-vous pour l\'étape suivante !'
    },
    {
      number: '05',
      title: 'Inscription définitive & Paiement',
      icon: CreditCard,
      description: 'Payez les droits d\'inscription universitaires (200 DA) en ligne en utilisant votre carte Edahabia d\'Algérie Poste ou celle d\'un proche. Confirmez l\'inscription pour obtenir votre certificat de scolarité numérique.',
      tip: 'Le paiement s\'effectue entièrement à distance sur PROGRES, évitant ainsi les déplacements.'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-white" id="guide-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Le Guide des Étapes d'Inscription
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Suivez le calendrier national officiel pour votre entrée à l'Université. L'intégralité du processus d'inscription en Algérie s'effectue en ligne via la plateforme PROGRES.
          </p>
        </div>

        {/* Campus Gateway Welcome */}
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 p-6 rounded-3xl border border-slate-100" id="guide-campus-card">
          <div className="md:col-span-5 h-48 md:h-64 relative rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Entr%C3%A9e_de_l%27universit%C3%A9_de_Sa%C3%AFda.jpg"
              alt="Bâtiment et portail d'entrée de l'Université de Saïda"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 font-bold block">Votre Destination</span>
            <h3 className="text-xl font-display font-bold text-slate-900">
              Franchissez les portes de votre avenir à Saïda
            </h3>
            <p className="text-sm text-slate-600 font-sans leading-relaxed">
              En suivant les étapes clés du calendrier du ministère de l'Enseignement Supérieur, vous validez votre accès au département d'Informatique, de Mathématiques, ou de Télécommunications de Saïda. Le portail d'entrée majestueux de notre campus Dr. Moulay Tahar marque le début de votre parcours académique d'excellence !
            </p>
          </div>
        </div>

        {/* Timeline roadmap */}
        <div className="mt-16 relative max-w-4xl mx-auto" id="timeline-container">
          
          {/* Main vertical line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-emerald-400 to-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                  id={`guide-step-${index}`}
                >
                  
                  {/* Step node (circle) */}
                  <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-10 hidden md:flex items-center justify-center bg-white border-4 border-indigo-500 rounded-full h-12 w-12 shadow-sm font-mono font-bold text-sm text-indigo-700">
                    {step.number}
                  </div>

                  {/* Empty placeholder on opposite side */}
                  <div className="w-full md:w-[42%] hidden md:block" />

                  {/* Step Card */}
                  <div className="w-full md:w-[46%] bg-slate-50 border border-slate-100/70 p-6 sm:p-8 rounded-3xl relative hover:bg-white hover:border-slate-200 hover:shadow-xl transition-all duration-300">
                    {/* Circle badge for mobile */}
                    <div className="inline-flex md:hidden items-center justify-center bg-indigo-50 text-indigo-700 font-mono font-bold py-1 px-3 rounded-full text-xs mb-4">
                      Étape {step.number}
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-100 text-indigo-600 p-3 rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display font-bold text-slate-800 text-lg leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-600 mt-4 leading-relaxed font-sans">
                      {step.description}
                    </p>

                    {/* Helpful Tip */}
                    <div className="mt-4 p-3 bg-white border border-emerald-100 rounded-2xl flex items-start space-x-2 text-xs text-emerald-800">
                      <span className="font-bold text-emerald-600 uppercase flex-shrink-0">Astuce :</span>
                      <span className="font-medium">{step.tip}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Official Portal Link */}
        <div className="mt-16 bg-gradient-to-tr from-slate-900 to-indigo-950 text-white p-8 rounded-3xl max-w-4xl mx-auto shadow-md text-center space-y-6">
          <Landmark className="h-12 w-12 text-emerald-400 mx-auto" />
          <div className="space-y-2">
            <h4 className="font-display font-bold text-lg text-white">Accéder directement à la plateforme PROGRES</h4>
            <p className="text-sm text-indigo-100 max-w-md mx-auto">
              Retrouvez l'ensemble des services d'inscriptions, d'orientation, d'hébergement universitaire et d'obtention de bourses sur le site du MESRS.
            </p>
          </div>
          <a
            href="https://progres.mesrs.dz/webbac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all duration-200"
            id="progres-portal-link"
          >
            <span>Ouvrir PROGRES WebBac</span>
            <Globe className="h-4 w-4" />
          </a>
        </div>

      </div>
    </div>
  );
}

import { useState } from 'react';
import { Monitor, Calculator, Cpu, ChevronRight, Briefcase, BookOpen, Layers, Radio } from 'lucide-react';

export default function Specialties() {
  const [activeTab, setActiveTab] = useState<'info' | 'math' | 'tech'>('info');

  const infoSpecialties = [
    {
      name: 'ISIL (Ingénierie des Systèmes d\'Information et Logiciels)',
      level: 'Licence L2 & L3',
      description: 'Dédiée à la conception moderne de logiciels, à la gestion et au traitement des grandes bases de données d\'entreprises, et à la conduite de projets web et mobiles.',
      modules: ['Algorithmique & Structures de données', 'Bases de données relationnelles', 'Programmation Orientée Objet (Java/C++)', 'Génie Logiciel & UML'],
      careers: ['Développeur Full-Stack', 'Administrateur de bases de données', 'Analyste de systèmes d\'information', 'Chef de projet junior'],
      color: 'indigo'
    },
    {
      name: 'RSD (Réseaux et Systèmes Distribués)',
      level: 'Licence L2 & L3',
      description: 'Se concentre sur la conception de réseaux d\'entreprise, l\'administration de serveurs, les concepts de systèmes d\'exploitation modernes, le cloud et la cybersécurité.',
      modules: ['Architecture des réseaux (Cisco)', 'Systèmes d\'exploitation (Linux)', 'Protocoles de communication', 'Sécurité informatique & Cryptographie'],
      careers: ['Administrateur réseau & systèmes', 'Technicien sécurité/SOC', 'Ingénieur Cloud junior', 'Intégrateur réseau'],
      color: 'blue'
    },
    {
      name: 'GL (Génie Logiciel)',
      level: 'Licence L2 & L3',
      description: 'Met l\'accent sur les principes d\'ingénierie rigoureux requis pour développer de grands systèmes logiciels complexes, fiables et évolutifs.',
      modules: ['Modélisation de logiciels', 'Qualité logicielle & Tests', 'Méthodologies Agiles (Scrum)', 'Développement Mobile'],
      careers: ['Architecte logiciel junior', 'Ingénieur Qualité / QA', 'Développeur Mobile', 'Consultant Technique'],
      color: 'purple'
    },
    {
      name: 'Diplôme d\'Ingénieur d\'État en Informatique',
      level: 'Ingénieur (5 Ans / 10 Semestres)',
      description: 'Un cursus d\'excellence de 5 ans formant des cadres hautement qualifiés capables de concevoir, développer, et superviser des architectures logicielles complexes, des bases de données distribuées et des infrastructures Cloud modernes.',
      modules: ['Génie Logiciel Avancé', 'Architecture des Systèmes Informatiques', 'Réseaux & Cloud Computing', 'Algorithmique Avancée'],
      careers: ['Ingénieur Système / DevOps', 'Chef de Projet Technique', 'Architecte Logiciel', 'Ingénieur R&D'],
      color: 'violet'
    },
    {
      name: 'Diplôme d\'Ingénieur d\'État en Intelligence Artificielle',
      level: 'Ingénieur (5 Ans / 10 Semestres)',
      description: 'Une formation d\'élite de 5 ans axée sur les théories et applications de l\'intelligence artificielle, de l\'apprentissage profond (Deep Learning), des modèles de langage (LLM), du traitement du langage naturel (NLP) et de la vision par ordinateur.',
      modules: ['Deep Learning (TensorFlow/PyTorch)', 'Traitement de la Langue Naturelle (NLP)', 'Vision par Ordinateur & ViT', 'Systèmes Multi-Agents (SMA)'],
      careers: ['Ingénieur IA', 'ML Engineer / Data Scientist', 'Consultant en IA Générative', 'Chercheur en Intelligence Artificielle'],
      color: 'fuchsia'
    }
  ];

  const mathSpecialties = [
    {
      name: 'Mathématiques Fondamentales',
      level: 'Licence L2 & L3',
      description: 'Explore les concepts théoriques profonds des mathématiques modernes, idéale pour les amateurs de rigueur logique, de preuves et de recherche académique.',
      modules: ['Analyse réelle & complexe', 'Algèbre générale et linéaire', 'Topologie', 'Géométrie analytique'],
      careers: ['Enseignant en mathématiques', 'Chercheur universitaire', 'Analyste théorique', 'Poursuite en Master/Doctorat de pointe'],
      color: 'purple'
    },
    {
      name: 'Recherche Opérationnelle & Statistiques',
      level: 'Licence L2 & L3',
      description: 'L\'application pratique des mathématiques à l\'optimisation, la prise de décision, la théorie des graphes et le traitement des données massives (Data Science).',
      modules: ['Programmation linéaire & Optimisation', 'Théorie des graphes', 'Probabilités & Statistiques appliquées', 'Aide à la décision'],
      careers: ['Data Analyst / Data Scientist', 'Analyste de risques (Assurance / Banque)', 'Planificateur logistique', 'Actuaire'],
      color: 'pink'
    }
  ];

  const techSpecialties = [
    {
      name: 'Licence en Télécommunications',
      level: 'Licence L2 & L3',
      description: 'Concerne l\'étude de la transmission des signaux, de la propagation des ondes, des architectures de réseaux mobiles et de la sécurité des télécoms.',
      modules: ['Transmission de signaux', 'Propagation et Antennes', 'Réseaux mobiles (3G/4G/5G)', 'Téléphonie sur IP (VoIP)'],
      careers: ['Ingénieur Support Télécoms', 'Administrateur de Réseaux Mobiles', 'Technicien Fibre Optique', 'Chef de Projet Télécom'],
      color: 'emerald'
    },
    {
      name: 'Licence en Électronique (Systèmes Embarqués)',
      level: 'Licence L2 & L3',
      description: 'Se concentre sur l\'étude des systèmes automatisés, des circuits imprimés, des microcontrôleurs et du développement d\'objets connectés (IoT).',
      modules: ['Électronique analogique & numérique', 'Microprocesseurs & IoT', 'Automatique & Régulation', 'Traitement numérique du signal'],
      careers: ['Concepteur IoT', 'Technicien d\'essais électroniques', 'Intégrateur de systèmes automatisés', 'Technicien de maintenance avionique'],
      color: 'teal'
    },
    {
      name: 'Master en Systèmes des Télécommunications',
      level: 'Master M1 & M2',
      description: 'Spécialisation avancée dédiée à la recherche et au développement dans les télécoms de pointe, l\'optimisation des ondes de transmission et l\'Internet des Objets.',
      modules: ['Théorie de l\'information avancée', 'Communications sans fil & satellites', 'Réseaux de capteurs (IoT)', 'Antennes intelligentes & hyperfréquences'],
      careers: ['Ingénieur de Recherche & Développement', 'Architecte Réseaux Mobiles', 'Expert en plan de fréquences', 'Enseignant-Chercheur'],
      color: 'emerald'
    },
    {
      name: 'Master en Réseaux et Télécommunications',
      level: 'Master M1 & M2',
      description: 'Formation axée sur la convergence entre réseaux informatiques et systèmes télécoms, le routage à grande échelle, la cybersécurité des infrastructures et le Cloud Computing.',
      modules: ['Sécurité des réseaux & Cryptographie', 'Réseaux SDN (Software Defined)', 'Cloud Computing & virtualisation', 'Interconnexion de réseaux d\'entreprise'],
      careers: ['Architecte Réseaux & Télécoms', 'Consultant Cybersécurité', 'Ingénieur Réseaux d\'Entreprise', 'Responsable Infrastructure IT'],
      color: 'cyan'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-white" id="specialties-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Explorez Nos Départements & Formations LMD
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            La faculté MIT propose un parcours d'études structuré selon le système mondial LMD (Licence, Master, Doctorat). 
            La première année est un tronc commun d'orientation menant à de multiples spécialisations à haute valeur ajoutée.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mt-12">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200/50 shadow-inner w-full max-w-lg">
            <button
              onClick={() => setActiveTab('info')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'info'
                  ? 'bg-white text-indigo-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
              id="tab-info"
            >
              <Monitor className="h-4 w-4" />
              <span>Informatique</span>
            </button>
            <button
              onClick={() => setActiveTab('math')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'math'
                  ? 'bg-white text-purple-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
              id="tab-math"
            >
              <Calculator className="h-4 w-4" />
              <span>Mathématiques</span>
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === 'tech'
                  ? 'bg-white text-emerald-700 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
              id="tab-tech"
            >
              <Radio className="h-4 w-4" />
              <span>Télécommunications</span>
            </button>
          </div>
        </div>

        {/* Core First Year Banner */}
        <div className="mt-8 bg-gradient-to-r from-slate-50 to-indigo-50/20 border border-slate-100 p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
          <div className="bg-indigo-500 text-white p-4 rounded-2xl flex items-center justify-center">
            <Layers className="h-6 w-6" />
          </div>
          <div>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold uppercase tracking-wider py-1 px-2.5 rounded-full">
              Étape Obligatoire
            </span>
            <h4 className="font-display font-bold text-slate-800 text-base mt-2">
              {activeTab === 'tech' ? '1ère Année Télécommunications et Électronique - Socle Commun' : '1ère Année MI (Mathématiques et Informatique) - Tronc Commun'}
            </h4>
            <p className="text-sm text-slate-500 mt-1">
              {activeTab === 'tech' 
                ? 'Une première année commune qui vous initie à l\'analyse de signaux, à la physique moderne, aux ondes, à l\'électronique et à l\'algorithmique, jetant les bases solides pour les télécoms de pointe.'
                : 'Les deux premiers semestres sont communs. Vous y apprendrez l\'algorithmique pure, la programmation de base, l\'algèbre linéaire, l\'analyse et l\'électronique logique avant de faire votre choix d\'orientation.'}
            </p>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activeTab === 'info' && infoSpecialties.map((spec, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 hover:border-indigo-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`spec-info-${index}`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold font-mono uppercase bg-indigo-50 text-indigo-700 py-1 px-3 rounded-full border border-indigo-100/30">
                    {spec.level}
                  </span>
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-800 mt-4 tracking-tight leading-snug">
                  {spec.name}
                </h3>
                <p className="text-sm text-slate-600 mt-3 font-sans leading-relaxed">
                  {spec.description}
                </p>

                {/* Modules list */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
                    <span>Matières Clés étudiées</span>
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {spec.modules.map((mod, mIndex) => (
                      <li key={mIndex} className="text-xs text-slate-600 flex items-center space-x-1.5">
                        <ChevronRight className="h-3 w-3 text-indigo-500 flex-shrink-0" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Careers */}
              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Métiers & Débouchés</span>
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {spec.careers.map((career, cIndex) => (
                    <span key={cIndex} className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-100/40 py-1 px-2.5 rounded-lg font-medium">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {activeTab === 'math' && mathSpecialties.map((spec, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 hover:border-purple-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`spec-math-${index}`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold font-mono uppercase bg-purple-50 text-purple-700 py-1 px-3 rounded-full border border-purple-100/30">
                    {spec.level}
                  </span>
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-800 mt-4 tracking-tight leading-snug">
                  {spec.name}
                </h3>
                <p className="text-sm text-slate-600 mt-3 font-sans leading-relaxed">
                  {spec.description}
                </p>

                {/* Modules list */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-purple-500" />
                    <span>Matières Clés étudiées</span>
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {spec.modules.map((mod, mIndex) => (
                      <li key={mIndex} className="text-xs text-slate-600 flex items-center space-x-1.5">
                        <ChevronRight className="h-3 w-3 text-purple-500 flex-shrink-0" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Careers */}
              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Métiers & Débouchés</span>
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {spec.careers.map((career, cIndex) => (
                    <span key={cIndex} className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-100/40 py-1 px-2.5 rounded-lg font-medium">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {activeTab === 'tech' && techSpecialties.map((spec, index) => (
            <div 
              key={index}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100/80 hover:border-emerald-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`spec-tech-${index}`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-semibold font-mono uppercase bg-emerald-50 text-emerald-700 py-1 px-3 rounded-full border border-emerald-100/30">
                    {spec.level}
                  </span>
                </div>
                <h3 className="text-lg font-display font-extrabold text-slate-800 mt-4 tracking-tight leading-snug">
                  {spec.name}
                </h3>
                <p className="text-sm text-slate-600 mt-3 font-sans leading-relaxed">
                  {spec.description}
                </p>

                {/* Modules list */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Matières Clés étudiées</span>
                  </h4>
                  <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                    {spec.modules.map((mod, mIndex) => (
                      <li key={mIndex} className="text-xs text-slate-600 flex items-center space-x-1.5">
                        <ChevronRight className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                        <span>{mod}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Careers */}
              <div className="mt-8 pt-6 border-t border-slate-200/50">
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                  <Briefcase className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Métiers & Débouchés</span>
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {spec.careers.map((career, cIndex) => (
                    <span key={cIndex} className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-100/40 py-1 px-2.5 rounded-lg font-medium">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master details section */}
        <div className="mt-16 text-center" id="master-info-box">
          <p className="text-sm text-slate-500">
            * Tous les parcours de Licence permettent d'accéder, sur dossier et selon le classement, à des <strong>programmes de Master spécialisés</strong> de haut niveau à l'Université de Saïda.
          </p>
        </div>

      </div>
    </div>
  );
}

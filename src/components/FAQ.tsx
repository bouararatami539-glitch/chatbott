import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Quelle est la différence fondamentale entre les filières MI et Télécommunications ?",
      answer: "La filière MI (Mathématiques & Informatique) prépare spécifiquement aux métiers du numérique, du développement de logiciels, de la cybersécurité, de l'IA et de l'enseignement des mathématiques. Le département de Télécommunications se concentre sur les communications sans fil, l'électronique de pointe, la transmission de signaux, l'Internet des objets (IoT) et la gestion des réseaux mobiles."
    },
    {
      question: "Qu'est-ce que le système LMD (Licence, Master, Doctorat) ?",
      answer: "Le LMD est un système d'études supérieures structuré en trois grades : la Licence (3 ans d'études pour acquérir un socle académique solide), le Master (2 ans de spécialisation avancée et professionnelle) et le Doctorat (3 ans de recherche scientifique au sein de laboratoires d'excellence)."
    },
    {
      question: "Dans quelle langue sont dispensés les cours à la faculté de Saïda ?",
      answer: "Les cours de sciences exactes, d'informatique et de télécommunications en Algérie sont enseignés en Français. Pour aider les nouveaux bacheliers à faire la transition depuis le lycée, l'Université de Saïda propose un module d'accompagnement de terminologie et de langue française durant le premier semestre de la 1ère année."
    },
    {
      question: "Comment se passe l'orientation à l'issue de la première année MI ?",
      answer: "À la fin de la 1ère année MI (Tronc commun), vous formulez des vœux pour la Licence L2. Les places sont attribuées selon votre classement annuel (moyenne des examens des deux semestres). Vous pourrez choisir entre ISIL (Systèmes d'information), RSD (Réseaux), GL (Génie Logiciel) ou continuer en Mathématiques Fondamentales/Appliquées."
    },
    {
      question: "Existe-t-il des résidences universitaires pour les étudiants hors wilaya de Saïda ?",
      answer: "Oui ! L'Université de Saïda dispose de plusieurs résidences universitaires (pour filles et garçons) modernes, situées à proximité immédiate du campus universitaire. Elles proposent l'hébergement, la restauration, des salles d'étude et le transport universitaire gratuit vers la faculté."
    },
    {
      question: "Quels sont les clubs scientifiques et activités étudiantes disponibles ?",
      answer: "La vie estudiantine à Saïda est très riche. Nous disposons de clubs scientifiques spécialisés en programmation, développement de jeux vidéo, robotique et design. Ces clubs organisent régulièrement des hackathons locaux, des formations gratuites d'apprentissage du code et des événements culturels."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100" id="faq-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <HelpCircle className="h-8 w-8 text-indigo-600" />
            <span>Foire Aux Questions (FAQ)</span>
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Des réponses claires aux interrogations les plus fréquentes des nouveaux étudiants de l'Université de Saïda.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 space-y-4" id="faq-accordion-group">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-all duration-200 ${
                  isOpen ? 'border-indigo-200 shadow-sm' : 'border-slate-100/80 hover:border-slate-200 shadow-sm'
                }`}
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 rounded-2xl"
                  id={`faq-btn-${index}`}
                >
                  <span className="font-display font-bold text-slate-800 text-sm sm:text-base leading-tight">
                    {faq.question}
                  </span>
                  <div className="text-slate-400 flex-shrink-0">
                    {isOpen ? <ChevronUp className="h-5 w-5 text-indigo-600" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed font-sans border-t border-slate-50" id={`faq-answer-${index}`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

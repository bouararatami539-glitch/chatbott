import { useState } from 'react';
import { Calculator, Sparkles, AlertCircle, HelpCircle, ArrowRight, CheckCircle, HelpCircle as QuestionIcon } from 'lucide-react';
import { FiliereBac, SimulatorInput, OrientationResult } from '../types';

interface SimulatorProps {
  onAskBotWithData: (query: string) => void;
}

export default function Simulator({ onAskBotWithData }: SimulatorProps) {
  const [filiere, setFiliere] = useState<FiliereBac>('Sciences Expérimentales');
  const [moyenneGenerale, setMoyenneGenerale] = useState<string>('12.5');
  const [moyenneMath, setMoyenneMath] = useState<string>('13.0');
  const [moyennePhysique, setMoyennePhysique] = useState<string>('12.0');
  const [results, setResults] = useState<{ mi: OrientationResult; st: OrientationResult } | null>(null);

  const filieres: FiliereBac[] = [
    'Mathématiques',
    'Technique Mathématique',
    'Sciences Expérimentales',
    'Gestion et Économie',
    'Lettres et Philosophie',
    'Langues Étrangères'
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const gen = parseFloat(moyenneGenerale);
    const math = parseFloat(moyenneMath);
    const phys = parseFloat(moyennePhysique);

    if (isNaN(gen) || gen < 10 || gen > 20) return;
    if (isNaN(math) || math < 0 || math > 20) return;
    if (isNaN(phys) || phys < 0 || phys > 20) return;

    // Calculations based on official Algerian Ministry formulas
    // MI: (Moyenne Générale * 2 + Note Mathématiques) / 3
    const scoreMI = parseFloat(((gen * 2 + math) / 3).toFixed(2));
    
    // ST: (Moyenne Générale * 2 + max(Mathématiques, Physique)) / 3
    const bestScienceMark = Math.max(math, phys);
    const scoreST = parseFloat(((gen * 2 + bestScienceMark) / 3).toFixed(2));

    // Eligibility simulation logic based on Saïda University historical trends
    let miEligible: 'highly_likely' | 'possible' | 'unlikely' = 'unlikely';
    let miReason = '';
    let miPriority = '';

    let stEligible: 'highly_likely' | 'possible' | 'unlikely' = 'unlikely';
    let stReason = '';
    let stPriority = '';

    // Stream rules and priorities
    if (filiere === 'Mathématiques') {
      miPriority = 'Priorité 1 (La plus élevée)';
      stPriority = 'Priorité 1 (La plus élevée)';
      
      if (scoreMI >= 12.0) miEligible = 'highly_likely';
      else if (scoreMI >= 11.0) miEligible = 'possible';

      if (scoreST >= 10.5) stEligible = 'highly_likely';
      else stEligible = 'possible';
    } 
    else if (filiere === 'Technique Mathématique') {
      miPriority = 'Priorité 2 (Moyenne)';
      stPriority = 'Priorité 1 (La plus élevée)';

      if (scoreMI >= 12.5) miEligible = 'highly_likely';
      else if (scoreMI >= 11.5) miEligible = 'possible';

      if (scoreST >= 10.5) stEligible = 'highly_likely';
      else stEligible = 'possible';
    } 
    else if (filiere === 'Sciences Expérimentales') {
      miPriority = 'Priorité 3 (Faible)';
      stPriority = 'Priorité 2 (Moyenne)';

      if (scoreMI >= 13.5) miEligible = 'highly_likely';
      else if (scoreMI >= 12.0) miEligible = 'possible';

      if (scoreST >= 11.5) stEligible = 'highly_likely';
      else if (scoreST >= 10.0) stEligible = 'possible';
    } 
    else {
      // Literary/Gestions streams are usually not eligible for STEM
      miPriority = 'Non éligible d\'office';
      stPriority = 'Non éligible d\'office';
      miEligible = 'unlikely';
      stEligible = 'unlikely';
    }

    // Explanations
    if (miEligible === 'highly_likely') {
      miReason = `Félicitations ! Avec un score pondéré de ${scoreMI} et votre filière ${filiere} (${miPriority}), vos chances d'orientation vers Mathématiques & Informatique à Saïda sont extrêmement élevées.`;
    } else if (miEligible === 'possible') {
      miReason = `C'est envisageable ! Votre moyenne pondérée de ${scoreMI} est correcte. L'orientation est possible selon la demande nationale des autres candidats de Saïda.`;
    } else {
      miReason = filiere === 'Sciences Expérimentales' || filiere === 'Mathématiques' || filiere === 'Technique Mathématique'
        ? `Vos chances pour MI sont faibles. Le score pondéré estimé (${scoreMI}) est inférieur aux seuils historiques récents. Envisagez de placer la filière ST en premier choix.`
        : `Désolé. La filière d'origine de votre BAC (${filiere}) ne permet généralement pas l'accès au département MI de la faculté de Saïda.`;
    }

    if (stEligible === 'highly_likely') {
      stReason = `Excellent ! Votre score pondéré de ${scoreST} et votre filière (${stPriority}) vous rendent hautement éligible pour le département de Télécommunications (ST/Telecom) à l'Université de Saïda.`;
    } else if (stEligible === 'possible') {
      stReason = `Tout à fait jouable ! Avec un score de ${scoreST}, vous avez des chances raisonnables d'être admis en Télécommunications à Saïda.`;
    } else {
      stReason = filiere === 'Sciences Expérimentales' || filiere === 'Mathématiques' || filiere === 'Technique Mathématique'
        ? `C'est serré. Votre score pondéré de ${scoreST} est un peu juste pour les Télécommunications. Cependant, placez-le dans vos choix si c'est votre passion !`
        : `Désolé. La filière de votre BAC (${filiere}) n'est pas ouverte aux spécialités technologiques et télécoms.`;
    }

    setResults({
      mi: {
        id: 'mi',
        name: 'Mathématiques et Informatique (MI)',
        eligible: miEligible,
        scorePondere: scoreMI,
        minScoreEstimatif: filiere === 'Mathématiques' ? 11.5 : (filiere === 'Technique Mathématique' ? 12.0 : 13.0),
        description: 'Parcours d\'un an débouchant sur des licences en Informatique (ISIL, RSD, GL) ou en Mathématiques.',
        reason: miReason,
        conditions: `Formule de calcul : (Moyenne Générale × 2 + Note Mathématiques) / 3. Votre priorité : ${miPriority}.`
      },
      st: {
        id: 'st',
        name: 'Télécommunications (ST/Telecom)',
        eligible: stEligible,
        scorePondere: scoreST,
        minScoreEstimatif: 10.0,
        description: 'Parcours d\'un an ouvrant les portes vers les licences et masters en Télécommunications et Électronique.',
        reason: stReason,
        conditions: `Formule de calcul : (Moyenne Générale × 2 + Max[Math, Physique]) / 3. Votre priorité : ${stPriority}.`
      }
    });
  };

  const askBotAboutResults = () => {
    if (!results) return;
    const query = `Bonjour, je viens d'avoir mon BAC en série "${filiere}" avec une moyenne générale de ${moyenneGenerale}/20. J'ai eu ${moyenneMath}/20 en Mathématiques et ${moyennePhysique}/20 en Physique. 
Mes scores pondérés calculés sont :
- MI (Maths/Info) : ${results.mi.scorePondere}/20
- Télécommunications (ST/Telecom) : ${results.st.scorePondere}/20

Pouvez-vous analyser mes chances d'entrer à la Faculté MIT de Saïda et me conseiller sur l'ordre de mes vœux sur PROGRES ?`;
    onAskBotWithData(query);
  };

  return (
    <div className="py-16 bg-slate-50 border-y border-slate-100" id="simulator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-100/60 border border-emerald-200 rounded-full py-1 px-3 text-xs font-semibold text-emerald-800">
            <Calculator className="h-3.5 w-3.5 text-emerald-600" />
            <span>Formules officielles du Ministère de l'Enseignement Supérieur</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Simulateur d'Orientation BAC 2026
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Calculez instantanément vos moyennes pondérées d'accès aux départements d'Informatique/Maths (MI) et de Télécommunications (ST/Telecom) selon les critères appliqués à l'Université de Saïda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Simulator Form (Left 5 columns) */}
          <form onSubmit={handleCalculate} className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6" id="simulator-form">
            <h3 className="text-lg font-display font-bold text-slate-800 flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-indigo-500 animate-pulse" />
              <span>Saisir mes notes de BAC</span>
            </h3>

            {/* Filiere */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Série ou Filière du BAC
              </label>
              <select
                value={filiere}
                onChange={(e) => setFiliere(e.target.value as FiliereBac)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white transition-all"
                id="filiere-select"
              >
                {filieres.map((f, index) => (
                  <option key={index} value={f}>{f}</option>
                ))}
              </select>
            </div>

            {/* Moyenne Generale */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Moyenne Générale du BAC
                </label>
                <span className="text-xs font-mono text-slate-400">Entre 10.00 et 20.00</span>
              </div>
              <input
                type="number"
                step="0.01"
                min="10"
                max="20"
                value={moyenneGenerale}
                onChange={(e) => setMoyenneGenerale(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                id="moyenne-input"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Math mark */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Note Mathématiques
                </label>
                <input
                  type="number"
                  step="0.25"
                  min="0"
                  max="20"
                  value={moyenneMath}
                  onChange={(e) => setMoyenneMath(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                  id="math-input"
                />
              </div>

              {/* Physics mark */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Note Physique
                </label>
                <input
                  type="number"
                  step="0.25"
                  min="0"
                  max="20"
                  value={moyennePhysique}
                  onChange={(e) => setMoyennePhysique(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
                  id="physique-input"
                />
              </div>
            </div>

            {/* Warn user if stream is literary */}
            {(filiere === 'Lettres et Philosophie' || filiere === 'Langues Étrangères' || filiere === 'Gestion et Économie') && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex items-start space-x-2 text-amber-800 text-xs leading-relaxed animate-pulse">
                <AlertCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Attention : Les filières littéraires et économiques ne sont généralement pas autorisées pour les filières MI et ST. Les résultats sont donnés à titre indicatif.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-bold rounded-2xl shadow-md hover:opacity-90 transition-all duration-200 flex items-center justify-center space-x-2"
              id="calc-submit-btn"
            >
              <span>Calculer mes Moyennes Pondérées</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Results dashboard (Right 7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            {!results ? (
              <div className="bg-slate-100/50 border border-dashed border-slate-200 rounded-3xl p-12 text-center flex flex-col items-center justify-center h-full min-h-[350px]">
                <div className="bg-slate-200 p-4 rounded-full text-slate-400">
                  <Calculator className="h-10 w-10" />
                </div>
                <h4 className="font-display font-bold text-slate-700 text-lg mt-4">Aucun calcul effectué</h4>
                <p className="text-slate-500 text-sm max-w-sm mt-2">
                  Entrez votre filière de BAC et vos notes à gauche puis cliquez sur calculer pour afficher vos chances d'orientation.
                </p>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in" id="simulation-results">
                
                {/* MI Result Box */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className={`absolute top-0 right-0 h-1.5 left-0 ${
                    results.mi.eligible === 'highly_likely' ? 'bg-emerald-500' : (results.mi.eligible === 'possible' ? 'bg-indigo-500' : 'bg-red-500')
                  }`} />
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display font-extrabold text-slate-800 text-base">{results.mi.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{results.mi.conditions}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-mono font-extrabold text-indigo-600">{results.mi.scorePondere}</span>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">Moyenne Pondérée</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {results.mi.reason}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <QuestionIcon className="h-3.5 w-3.5" />
                      <span>Éligibilité estimée :</span>
                    </span>
                    <span className={`text-xs font-bold py-1 px-2.5 rounded-full ${
                      results.mi.eligible === 'highly_likely' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : (results.mi.eligible === 'possible' ? 'bg-indigo-100 text-indigo-800' : 'bg-rose-100 text-rose-800')
                    }`}>
                      {results.mi.eligible === 'highly_likely' 
                        ? 'Très Probable' 
                        : (results.mi.eligible === 'possible' ? 'Possible' : 'Peu probable')}
                    </span>
                  </div>
                </div>

                {/* ST Result Box */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
                  <div className={`absolute top-0 right-0 h-1.5 left-0 ${
                    results.st.eligible === 'highly_likely' ? 'bg-emerald-500' : (results.st.eligible === 'possible' ? 'bg-indigo-500' : 'bg-red-500')
                  }`} />
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-display font-extrabold text-slate-800 text-base">{results.st.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{results.st.conditions}</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl font-mono font-extrabold text-emerald-600">{results.st.scorePondere}</span>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider font-semibold">Moyenne Pondérée</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mt-4 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {results.st.reason}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <QuestionIcon className="h-3.5 w-3.5" />
                      <span>Éligibilité estimée :</span>
                    </span>
                    <span className={`text-xs font-bold py-1 px-2.5 rounded-full ${
                      results.st.eligible === 'highly_likely' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : (results.st.eligible === 'possible' ? 'bg-indigo-100 text-indigo-800' : 'bg-rose-100 text-rose-800')
                    }`}>
                      {results.st.eligible === 'highly_likely' 
                        ? 'Très Probable' 
                        : (results.st.eligible === 'possible' ? 'Possible' : 'Peu probable')}
                    </span>
                  </div>
                </div>

                {/* AI Call to Action */}
                <div className="bg-gradient-to-r from-indigo-900 to-slate-800 text-white p-6 rounded-3xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h5 className="font-display font-bold text-base text-white flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-400 animate-bounce" />
                      <span>Des doutes sur vos choix ?</span>
                    </h5>
                    <p className="text-xs text-indigo-100 max-w-md">
                      Envoyez directement ces calculs à notre Guidebot IA pour obtenir une analyse humaine et des conseils sur l'ordre de votre fiche de vœux !
                    </p>
                  </div>
                  <button
                    onClick={askBotAboutResults}
                    className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs py-3 px-5 rounded-xl flex items-center justify-center space-x-2 whitespace-nowrap shadow-sm transition-all duration-200"
                    id="ask-ia-results-btn"
                  >
                    <span>Analyser avec l'IA</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

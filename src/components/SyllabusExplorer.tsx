import { useState } from 'react';
import { programsSyllabus, SpecialtySyllabus, ModuleDetail } from '../data/programsSyllabus';
import { BookOpen, HelpCircle, ArrowRight, Award, Clock, GraduationCap, Server, Search, Star, ExternalLink } from 'lucide-react';

interface SyllabusExplorerProps {
  onAskBotWithData: (query: string) => void;
}

export default function SyllabusExplorer({ onAskBotWithData }: SyllabusExplorerProps) {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(programsSyllabus[0].id);
  const [selectedSemesterIndex, setSelectedSemesterIndex] = useState<number>(0);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const selectedProgram = programsSyllabus.find(p => p.id === selectedProgramId) || programsSyllabus[0];
  const selectedSemester = selectedProgram.semesters[selectedSemesterIndex] || selectedProgram.semesters[0];

  const handleProgramChange = (id: string) => {
    setSelectedProgramId(id);
    setSelectedSemesterIndex(0);
    setExpandedModule(null);
  };

  // Filter modules across the entire program if there is a search term
  const filteredModules = selectedSemester.modules.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.chapters.some(ch => ch.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getUeBadgeColor = (ue: string) => {
    if (ue.includes('Fondamentale')) return 'bg-rose-50 text-rose-700 border-rose-100';
    if (ue.includes('Méthodologique')) return 'bg-indigo-50 text-indigo-700 border-indigo-100';
    if (ue.includes('Découverte')) return 'bg-amber-50 text-amber-700 border-amber-100';
    return 'bg-slate-50 text-slate-700 border-slate-100';
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-slate-100" id="syllabus-explorer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full border border-indigo-100/40">
            Programmes & Syllabus Officiels
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
            Consultez les Canevas de Formations
          </h2>
          <p className="text-base text-slate-600 font-sans leading-relaxed">
            Découvrez l'organisation semestrielle, les crédits, coefficients et les programmes détaillés chapitre par chapitre de chaque Licence, Master ou diplôme d'Ingénieur de la Faculté MIT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Selector Sidebar (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Choisir un parcours</h3>
              
              <div className="space-y-2">
                {programsSyllabus.map(prog => (
                  <button
                    key={prog.id}
                    onClick={() => handleProgramChange(prog.id)}
                    className={`w-full text-left p-3.5 rounded-2xl border text-xs font-semibold transition-all duration-200 flex items-start space-x-3 ${
                      selectedProgramId === prog.id
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/10'
                        : 'bg-slate-50/50 hover:bg-slate-50 text-slate-700 border-slate-100'
                    }`}
                  >
                    <GraduationCap className={`h-5 w-5 shrink-0 mt-0.5 ${selectedProgramId === prog.id ? 'text-white' : 'text-slate-400'}`} />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className={`text-[10px] uppercase px-1.5 py-0.5 rounded font-bold ${
                          selectedProgramId === prog.id 
                            ? 'bg-white/20 text-white' 
                            : 'bg-indigo-50 text-indigo-700'
                        }`}>
                          {prog.level}
                        </span>
                        <span className={`text-[10px] font-bold ${selectedProgramId === prog.id ? 'text-indigo-200' : 'text-slate-400'}`}>
                          {prog.department}
                        </span>
                      </div>
                      <p className="mt-1 font-display font-extrabold leading-tight">{prog.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Program overview summary */}
            <div className="bg-indigo-900 text-white p-6 rounded-3xl border border-slate-100 shadow-lg relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-4 translate-y-4">
                <Server className="h-44 w-44" />
              </div>
              <h4 className="font-display font-bold text-base mb-2">À propos de ce cursus</h4>
              <p className="text-xs text-indigo-200 leading-relaxed font-sans">{selectedProgram.description}</p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold border-t border-white/10 pt-4">
                <div className="flex items-center space-x-1.5">
                  <Award className="h-4 w-4 text-emerald-400" />
                  <span>Diplôme d'État</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="h-4 w-4 text-indigo-300" />
                  <span>{selectedProgram.level === 'Ingénieur' ? '5 Ans' : '2 Ans (Master)'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Semesters & Modules list (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Semester Tabs Selector */}
            <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-1">
              {selectedProgram.semesters.map((sem, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedSemesterIndex(index);
                    setExpandedModule(null);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 shrink-0 ${
                    selectedSemesterIndex === index
                      ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {sem.semesterName}
                </button>
              ))}
            </div>

            {/* Filter Search input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher une matière ou un mot-clé du programme (ex: Cryptographie, ANOVA)..."
                className="w-full pl-9 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm"
              />
            </div>

            {/* Modules Cards list */}
            <div className="space-y-4">
              {filteredModules.length > 0 ? (
                filteredModules.map((mod, index) => {
                  const isExpanded = expandedModule === mod.name;
                  return (
                    <div 
                      key={index} 
                      className={`bg-white rounded-3xl border transition-all duration-200 ${
                        isExpanded 
                          ? 'border-indigo-500 shadow-md shadow-indigo-500/5' 
                          : 'border-slate-100 hover:border-slate-200 shadow-sm'
                      }`}
                    >
                      {/* Card Header clickable to expand */}
                      <div 
                        onClick={() => setExpandedModule(isExpanded ? null : mod.name)}
                        className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getUeBadgeColor(mod.ue)}`}>
                              {mod.ue}
                            </span>
                            {mod.vhs && (
                              <span className="text-[10px] font-mono text-slate-400 font-bold bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{mod.vhs}</span>
                              </span>
                            )}
                          </div>
                          <h4 className="font-display font-extrabold text-slate-800 text-sm sm:text-base tracking-tight leading-snug">
                            {mod.name}
                          </h4>
                        </div>

                        {/* Credits & Coeff info */}
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-4">
                            <div className="text-center bg-slate-50/80 border border-slate-100 px-3 py-1.5 rounded-xl">
                              <span className="block text-[10px] font-bold text-slate-400 uppercase leading-none">Crédits</span>
                              <span className="text-xs font-display font-extrabold text-indigo-600 leading-tight block mt-1">{mod.credits}</span>
                            </div>
                            <div className="text-center bg-slate-50/80 border border-slate-100 px-3 py-1.5 rounded-xl">
                              <span className="block text-[10px] font-bold text-slate-400 uppercase leading-none">Coeff</span>
                              <span className="text-xs font-display font-extrabold text-slate-700 leading-tight block mt-1">{mod.coeff}</span>
                            </div>
                          </div>
                          <div className="text-slate-400 font-bold text-xs select-none">
                            {isExpanded ? 'Masquer' : 'Détails'}
                          </div>
                        </div>
                      </div>

                      {/* Card Content (Visible when expanded) */}
                      {isExpanded && (
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 border-t border-slate-100 bg-slate-50/40 rounded-b-3xl space-y-4 animate-slide-up">
                          {mod.objectifs && (
                            <div className="space-y-1 pt-4">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Objectifs d'enseignement</span>
                              <p className="text-xs text-slate-600 leading-relaxed font-sans">{mod.objectifs}</p>
                            </div>
                          )}

                          <div className="space-y-2 pt-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Contenu & Chapitres Clés</span>
                            <div className="bg-white rounded-2xl border border-slate-200/50 p-4 space-y-2">
                              {mod.chapters.map((chap, cIdx) => (
                                <div key={cIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                                  <span className="text-indigo-500 font-mono font-bold shrink-0 mt-0.5">•</span>
                                  <span className="font-sans leading-relaxed">{chap}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* CTA Bot button */}
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 border-t border-slate-100">
                            <span className="text-[10px] text-slate-400 font-semibold italic">
                              * Programme conforme au canevas ministériel d'harmonisation.
                            </span>
                            <button
                              onClick={() => onAskBotWithData(`Quels sont les détails du module "${mod.name}" de la spécialité "${selectedProgram.title}" et quels sont les meilleurs conseils de préparation ?`)}
                              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold px-4 py-2 rounded-xl flex items-center space-x-1.5 transition-colors border border-indigo-100/30 shadow-sm"
                            >
                              <HelpCircle className="h-3.5 w-3.5" />
                              <span>Interroger l'IA sur cette matière</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="bg-white p-12 text-center rounded-3xl border border-slate-100 shadow-sm space-y-3">
                  <div className="text-slate-300 text-4xl">🔍</div>
                  <h4 className="font-display font-bold text-slate-700 text-base">Aucun module correspondant</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Ajustez votre recherche ou choisissez un autre semestre pour voir les matières disponibles.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

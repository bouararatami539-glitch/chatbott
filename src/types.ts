export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export type FiliereBac = 'Mathématiques' | 'Technique Mathématique' | 'Sciences Expérimentales' | 'Gestion et Économie' | 'Lettres et Philosophie' | 'Langues Étrangères';

export interface SimulatorInput {
  moyenneGenerale: number;
  moyenneMath: number;
  moyennePhysique: number;
  filiere: FiliereBac;
}

export interface OrientationResult {
  id: string;
  name: string;
  eligible: 'highly_likely' | 'possible' | 'unlikely';
  scorePondere: number;
  minScoreEstimatif: number;
  description: string;
  reason: string;
  conditions: string;
}

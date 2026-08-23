export interface ModuleDetail {
  name: string;
  ue: 'Fondamentale (UEF)' | 'Méthodologique (UEM)' | 'Découverte (UED)' | 'Transversale (UET)';
  vhs: string;
  credits: number;
  coeff: number;
  objectifs?: string;
  chapters: string[];
}

export interface SemesterSyllabus {
  semesterName: string;
  modules: ModuleDetail[];
}

export interface SpecialtySyllabus {
  id: string;
  title: string;
  level: 'Licence' | 'Master' | 'Ingénieur';
  department: 'Informatique' | 'Mathématiques' | 'Télécommunications';
  description: string;
  semesters: SemesterSyllabus[];
}

export const programsSyllabus: SpecialtySyllabus[] = [
  {
    id: 'licence-si',
    title: 'Licence Systèmes Informatiques (SI)',
    level: 'Licence',
    department: 'Informatique',
    description: 'Une formation de base d\'excellence formant des spécialistes en conception de logiciels, administration système, gestion de bases de données, réseaux et initiation aux technologies de l\'intelligence artificielle.',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          { name: 'Analyse 1', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, objectifs: 'Maîtriser les bases de l\'analyse réelle, des suites et des fonctions d\'une variable.', chapters: ['Chapitre 1 : Le Corps des Réels', 'Chapitre 2 : Le Corps des Nombres Complexes', 'Chapitre 3 : Suites de Nombres réels', 'Chapitre 4 : Fonctions réelles d\'une variable réelle', 'Chapitre 5 : Fonctions dérivables', 'Chapitre 6 : Fonctions Élémentaires'] },
          { name: 'Algèbre 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Comprendre les structures algébriques fondamentales et l\'arithmétique des polynômes.', chapters: ['Chapitre 1 : Notions de logiques', 'Chapitre 2 : Ensembles et applications', 'Chapitre 3 : Relations binaires sur un ensemble', 'Chapitre 4 : Structures algébriques (Groupes, Anneaux, Corps)', 'Chapitre 5 : Anneaux de polynômes'] },
          { name: 'Algorithmique et structure de données 1', ue: 'Fondamentale (UEF)', vhs: '105h', credits: 7, coeff: 5, objectifs: 'Concevoir des algorithmes séquentiels et les implémenter en langage C.', chapters: ['Chapitre 1 : Introduction générale', 'Chapitre 2 : Algorithme séquentiel simple', 'Chapitre 3 : Les structures conditionnelles en C', 'Chapitre 4 : Les structures répétitives / boucles', 'Chapitre 5 : Les tableaux (1D/2D) et les chaînes de caractères', 'Chapitre 6 : Les types personnalisés (struct, enum)'] },
          { name: 'Structure machine 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, objectifs: 'Comprendre les systèmes de numération, le codage de l\'information et l\'algèbre de Boole.', chapters: ['Chapitre 1 : Introduction générale', 'Chapitre 2 : Les systèmes de numération et conversions', 'Chapitre 3 : La représentation de l\'information (nombres et caractères)', 'Chapitre 4 : L\'algèbre de Boole binaire (circuits NAND/NOR, tableaux de Karnaugh)'] },
          { name: 'Logiciels libres (Open source)', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 2, coeff: 1, objectifs: 'Se familiariser avec l\'environnement de développement Linux et la bureautique collaborative.', chapters: ['Chapitre 1 : Technologies de l\'information (Hardware, Logiciels, EDI)', 'Chapitre 2 : Outils Open source (Linux, LibreOffice, collaboration, open source project)'] },
          { name: 'Langue Étrangère (Anglais)', ue: 'Transversale (UET)', vhs: '21h', credits: 2, coeff: 1, objectifs: 'Améliorer les compétences linguistiques et acquérir du vocabulaire technique informatique.', chapters: ['Chapitre 1 : Rappels sur les bases de la grammaire anglaise', 'Chapitre 2 : Vocabulaire, expressions et construction de textes techniques'] },
          { name: 'Electricité générale', ue: 'Découverte (UED)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Comprendre les lois fondamentales de l\'électrostatique et de l\'électrocinétique.', chapters: ['Chapitre 1 : Electrostatique (forces, champs, potentiels)', 'Chapitre 2 : Les conducteurs (capacités, résistances, loi d\'ohm)', 'Chapitre 3 : Electrocinétique (lois de Kirchoff, Thévenin, Norton)', 'Chapitre 4 : Magnétostatique (champs, forces, Biot-Savart)'] }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          { name: 'Analyse 2', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, objectifs: 'Maîtriser le calcul intégral et la résolution des équations différentielles ordinaires.', chapters: ['Chapitre 1 : Développements limités (D.L) et applications', 'Chapitre 2 : Intégrales indéfinies et méthodes d\'intégration', 'Chapitre 3 : Intégrales définies (Riemann, Darboux)', 'Chapitre 4 : Équations différentielles du premier ordre', 'Chapitre 5 : Équations différentielles du second ordre à coefficients constants', 'Chapitre 6 : Fonctions de plusieurs variables (dérivées partielles)'] },
          { name: 'Algèbre 2', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Assimiler les bases du calcul matriciel et de l\'algèbre linéaire en dimension finie.', chapters: ['Chapitre 1 : Espaces vectoriels (génératrices, bases, dimension)', 'Chapitre 2 : Applications linéaires (image, noyau, théorème du rang)', 'Chapitre 3 : Matrices et déterminants (matrice de passage, inverse de Gauss)', 'Chapitre 4 : Résolution de systèmes d\'équations linéaires (Cramer)'] },
          { name: 'Algorithmique et structure de données 2', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 7, coeff: 5, objectifs: 'Comprendre l\'organisation de structures de données dynamiques (pointeurs, listes, piles, files).', chapters: ['Chapitre 1 : Les sous-programmes (Fonctions, Procédures, Récursivité)', 'Chapitre 2 : Les fichiers et manipulation', 'Chapitre 3 : Les listes chaînées (pointeurs, listes simples et doubles, piles, files)'] },
          { name: 'Structure machine 2', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, objectifs: 'Maîtriser la synthèse des circuits combinatoires et séquentiels d\'un ordinateur.', chapters: ['Chapitre 1 : Introduction', 'Chapitre 2 : La logique combinatoire (additionneurs, décodeurs, multiplexeurs)', 'Chapitre 3 : La logique séquentielle (bascules RS, JK, D, registres, mémoires, Moore/Mealy)', 'Chapitre 4 : Les circuits intégrés (circuits simples, portes logiques)'] },
          { name: 'Logique Mathématique', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 2, coeff: 1, objectifs: 'Formaliser et résoudre des problèmes à l\'aide de la logique des propositions et des prédicats.', chapters: ['Chapitre 1 : Introduction (syntaxe, sémantique)', 'Chapitre 2 : Logique des propositions (tables de vérité, tautologies, résolution)', 'Chapitre 3 : Logique des prédicats (termes, quantificateurs, sémantique)'] },
          { name: 'Introduction à l\'intelligence artificielle', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 2, coeff: 1, objectifs: 'Démystifier l\'IA, ses outils documentaires et ses applications académiques quotidiennes.', chapters: ['Chapitre 1 : Définitions de l\'IA, historique et domaines d\'application', 'Chapitre 2 : Avantages et risques de l\'IA', 'Chapitre 3 : IA pour la recherche documentaire (Elicit, Scopus AI)', 'Chapitre 4 : IA pour la gestion du temps et des tâches', 'Chapitre 5 : IA pour la rédaction scientifique et réécriture', 'Chapitre 6 : IA et créativité académique (brainstorming, posters)'] },
          { name: 'Electronique fondamentale', ue: 'Découverte (UED)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Découvrir le fonctionnement des diodes, transistors et technologies de portes logiques.', chapters: ['Chapitre 1 : Diodes à Semi-conducteur (jonction PN, diode Zener)', 'Chapitre 2 : Le transistor bipolaire (NPN/PNP, montages EC, CC, BC)', 'Chapitre 3 : Transistors à effet de champ (JFET, MOSFET)', 'Chapitre 4 : Technologies des portes logiques (DTL, TTL, ECL, CMOS)'] }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          { name: 'Architecture des ordinateurs', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 3, objectifs: 'Comprendre l\'organisation de l\'unité centrale et l\'architecture interne des processeurs.', chapters: ['Chapitre 1 : Organisation générale de l\'unité centrale (Von Neumann, bus, mémoire)', 'Chapitre 2 : Architecture interne des processeurs (UAL, registres, jeu d\'instructions, pipeline)', 'Chapitre 3 : Étude de cas : processeur Intel 8086 (registres, modes d\'adressage)', 'Chapitre 4 : Étude de cas : Processeurs 32 et 64 bits', 'Chapitre 5 : Architectures des processeurs récents (multi-coeurs)'] },
          { name: 'Algorithmique et structure de données 3', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, objectifs: 'Calculer la complexité d\'algorithmes complexes et manipuler les arbres et graphes.', chapters: ['Chapitre 1 : Complexité algorithmique asymptotique', 'Chapitre 2 : Algorithmes de tri (tri à bulles, sélection, insertion, fusion, rapide)', 'Chapitre 3 : Les arbres (arbres binaires de recherche, parcours préfixé/infixé/postfixé)', 'Chapitre 4 : Les graphes (représentations, parcours de graphes)'] },
          { name: 'Systèmes d\'information', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Concevoir des bases d\'information en utilisant la méthodologie MERISE.', chapters: ['Chapitre 1 : Généralités on l\'entreprise et l\'approche systémique', 'Chapitre 2 : Les techniques de représentation de l\'information', 'Chapitre 3 : Saisie et contrôle de l\'information', 'Chapitre 4 : Méthodologie de développement d\'un SI : MERISE (MCD, MCT)'] },
          { name: 'Programmation orientée objet 1', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 4, objectifs: 'Comprendre les concepts de base du paradigme orienté objet et l\'implémenter en Java.', chapters: ['Chapitre 1 : Introduction à la POO et évolution des paradigmes', 'Chapitre 2 : Concepts de base de la POO (classes, attributs, méthodes, constructeurs, encapsulation, objets, instanciation)', 'Chapitre 3 : Héritage et polymorphisme (héritage simple, late/early binding)', 'Chapitre 4 : Classe Object en Java et méthodes par défaut'] },
          { name: 'Méthodes Numériques', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Savoir résoudre numériquement des systèmes d\'équations linéaires.', chapters: ['Chapitre 1 : Généralités sur l\'analyse numérique et calcul scientifique', 'Chapitre 2 : Méthodes directes de résolution (Gauss, factorisation LU)', 'Chapitre 3 : Méthodes itératives de résolution (Jacobi, Gauss-Seidel)', 'Chapitre 4 : Calcul de valeurs et de vecteurs propres', 'Chapitre 5 : Analyse matricielle'] },
          { name: 'Probabilités et statistique 1', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Maîtriser les bases du calcul probabiliste et l\'analyse statistique descriptive.', chapters: ['Chapitre 1 : Notions de base et vocabulaire statistique (tableaux, histogrammes)', 'Chapitre 2 : Représentation numérique des données (médiane, moyenne, écart-type)', 'Chapitre 3 : Calcul des probabilités (combinatoire, espace probabilisé, Bayes)'] }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          { name: 'Système d\'exploitation 1', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 5, coeff: 4, objectifs: 'Comprendre la gestion du processeur et de la mémoire par un système d\'exploitation.', chapters: ['Chapitre 1 : Introduction aux SE, rôles et fonctions', 'Chapitre 2 : La gestion du processeur (processus, threads, ordonnancement, Round Robin, SJF, SRT)', 'Chapitre 3 : Gestion de la mémoire (partitions contiguës, pagination, segmentation, mémoire virtuelle, FIFO, LRU, LFU)'] },
          { name: 'Théorie des langages', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, objectifs: 'Maîtriser la hiérarchie de Chomsky, les expressions régulières et les automates.', chapters: ['Chapitre 1 : Introduction (alphabets, mots, langages)', 'Chapitre 2 : Grammaires et hiérarchie de Chomsky', 'Chapitre 3 : Automates d\'états finis (AEF déterministes et non déterministes, minimisation)', 'Chapitre 4 : Expressions Régulières et théorème de Kleene', 'Chapitre 5 : Langages Algébriques, Automates à Piles et introduction à la Machine de Turing'] },
          { name: 'Bases de données', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 3, objectifs: 'Maîtriser le modèle relationnel, l\'algèbre relationnelle et le langage SQL.', chapters: ['Chapitre 1 : Présentation des bases de données', 'Chapitre 2 : Modèle relationnel et normalisation (1FN, 2FN, 3FN, BCNF, SQL DDL/DML)', 'Chapitre 3 : Algèbre relationnelle (opérations, sélections, projections, jointures)'] },
          { name: 'Programmation orientée objet 2', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 4, objectifs: 'Maîtriser les structures avancées de la POO, la gestion des fichiers et les interfaces graphiques.', chapters: ['Chapitre 1 : Structures avancées et modularité (classes abstraites, interfaces, packages)', 'Chapitre 2 : Gestion des exceptions (bloc try-catch, exceptions multiples)', 'Chapitre 3 : Flux d\'entrées/sorties (File, Scanner, flux binaires)', 'Chapitre 4 : Programmation événementielle et Interfaces graphiques (AWT, Swing, JavaFX)'] },
          { name: 'Programmation Linéaire', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Savoir modéliser et résoudre un programme linéaire d\'optimisation.', chapters: ['Chapitre 1 : Introduction générale et modélisation de problèmes pratiques', 'Chapitre 2 : Géométrie de la programmation linéaire (polyèdre, simplexe, points extrêmes)', 'Chapitre 3 : Méthode primale de résolution d\'un programme linéaire (algorithme du simplexe)', 'Chapitre 4 : Méthodes duales en programmation linéaire'] },
          { name: 'Probabilités et Statistique 2', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Comprendre les variables aléatoires continues, les théorèmes limites et l\'estimation statistique.', chapters: ['Chapitre 1 : Espaces probabilisés, variables aléatoires discrètes et continues', 'Chapitre 2 : Fonctions caractéristiques et théorèmes limites', 'Chapitre 3 : Vecteurs gaussiens et simulation', 'Chapitre 4 : Estimateurs, intervalles de confiance et tests statistiques'] }
        ]
      },
      {
        semesterName: 'Semestre 5',
        modules: [
          { name: 'Réseaux', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 3, objectifs: 'Comprendre les couches physiques, de liaison, de routage, de transport et d\'application du modèle Internet.', chapters: ['Chapitre 1 : Introduction aux Réseaux, topologies, modèles OSI et TCP/IP', 'Chapitre 2 : Couche Physique (signaux, supports, multiplexeurs)', 'Chapitre 3 : Couche Liaison de Données (adressage, contrôle de flux, Ethernet, multiple access)', 'Chapitre 4 : Couche Réseaux (adressage IP, protocoles IPv4/IPv6, routage statique/dynamique)', 'Chapitre 5 : Couche Transport (UDP et TCP, QoS, congestion)', 'Chapitre 6 : Couche Application (SMTP, HTTP, FTP, DHCP, DNS)'] },
          { name: 'Compilation', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 3, objectifs: 'Comprendre l\'architecture et les étapes d\'un compilateur.', chapters: ['Chapitre 1 : Introduction et structure générale d\'un compilateur', 'Chapitre 2 : Analyse lexicale', 'Chapitre 3 : Analyse Syntaxique (dérivations, arbres)', 'Chapitre 4 : Analyse descendante (LL(1)) et ascendante (LR)', 'Chapitre 5 : Traduction dirigée par la syntaxe, contrôle de type et génération de code'] },
          { name: 'Génie Logiciel', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, objectifs: 'Maîtriser la modélisation objet avec le langage universel UML et les processus de développement.', chapters: ['Chapitre 1 : Introduction, principes et cycle de vie d\'un logiciel', 'Chapitre 2 : Modélisation avec UML (elements généraux, packages)', 'Chapitre 3 : Diagramme de cas d\'utilisation (vue fonctionnelle)', 'Chapitre 4 : Diagrammes de classes et d\'objets (vue statique)', 'Chapitre 5 : Diagrammes UML dynamiques (séquence, activités, états/transitions)', 'Chapitre 6 : Méthodes de développement (RUP, XP) et rétro-ingénierie'] },
          { name: 'Développement d\'Applications Web', ue: 'Fondamentale (UEF)', vhs: '63.33h', credits: 5, coeff: 3, objectifs: 'Concevoir et implémenter des applications web complètes (HTML/CSS, JS, PHP, sessions).', chapters: ['Chapitre 1 : Introduction au web, architecture client/serveur, protocole HTTP', 'Chapitre 2 : Langages de programmation web (HTML5, CSS3, JavaScript)', 'Chapitre 3 : Langage de programmation côté serveur PHP (syntaxe, classes, sessions, connexions BD)', 'Chapitre 4 : Services Web (notions de base, SOAP, WSDL, UDDI)'] },
          { name: 'Outils de programmation scientifique', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Utiliser Matlab, Scilab et Python pour le calcul scientifique.', chapters: ['Chapitre 1 : Langages de programmation scientifique (Python, R)', 'Chapitre 2 : Maîtrise de logiciels scientifiques (Scilab, Matlab)', 'Chapitre 3 : Exemples d\'applications et techniques de résolution'] },
          { name: 'Théorie des graphes', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, objectifs: 'Appliquer les algorithmes de chemins, flots, arbres et coloration de graphes.', chapters: ['Chapitre 1 : Définitions fondamentales, matrices d\'adjacence, connexité', 'Chapitre 2 : Cycles et cocycles, planarité, arbres, forêts, arborescences', 'Chapitre 3 : Flots (flot maximum, Ford-Fulkerson)', 'Chapitre 4 : Problèmes de cheminement (Dijkstra, Kruskal)', 'Chapitre 5 : Problèmes Hamiltoniens et Eulériens, coloration de sommets'] }
        ]
      },
      {
        semesterName: 'Semestre 6',
        modules: [
          { name: 'Système d\'exploitation 2', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 3, objectifs: 'Maîtriser la programmation système Unix en C (threads, sémaphores, communication IPC).', chapters: ['Chapitre 1 : Rappels, programmation des threads et exclusions mutuelles en C sous Unix', 'Chapitre 2 : Synchronisation de processus (verrous, sémaphores, moniteurs, régions critiques)', 'Chapitre 3 : La communication interprocessus (producteur/consommateur, échange de messages)', 'Chapitre 4 : L\'interblocage (modèles, prévention, évitement, détection, guérison)'] },
          { name: 'Sécurité Informatique', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, objectifs: 'Comprendre les concepts de sécurité, menaces, signatures, pare-feux et cryptographie.', chapters: ['Chapitre 1 : Introduction à la sécurité (vulnérabilités, menaces, objectifs)', 'Chapitre 2 : Les menaces informatiques (attaques, virus, chevaux de troie, logiciels espions)', 'Chapitre 3 : Initiation à la cryptographie (César, Vigenère, cryptographie symétrique DES/AES et asymétrique RSA)', 'Chapitre 4 : Fonctions de Hachage (MD5, SHA-1), signatures électroniques, PKI, pare-feux, VPN'] },
          { name: 'Recherche d\'information', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, objectifs: 'Concevoir et évaluer des moteurs de recherche et des architectures d\'indexation.', chapters: ['Chapitre 1 : Introduction et principes de base de la recherche d\'information', 'Chapitre 2 : Éléments clés en recherche d\'information et types d\'indexation', 'Chapitre 3 : Modèles de RI (Modèle Booléen, Vectoriel, Probabiliste)', 'Chapitre 4 : Systèmes de recherche d\'information (SRI) et RI sur le Web'] },
          { name: 'Fondements de l\'Intelligence Artificielle', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, objectifs: 'Comprendre la représentation des connaissances, le raisonnement et l\'apprentissage automatique.', chapters: ['Chapitre 1 : Introduction générale à l\'IA (faible vs forte, symbolique vs connexionniste)', 'Chapitre 2 : Représentation des connaissances (logique propositionnelle, logique du premier ordre)', 'Chapitre 3 : Raisonnement incertain et réseaux bayésiens', 'Chapitre 4 : Présentation du Machine Learning (supervisé: régression, k-NN, arbres de décision; non-supervisé: k-means, DBSCAN)'] },
          { name: 'Projet', ue: 'Méthodologique (UEM)', vhs: '10h', credits: 6, coeff: 4, objectifs: 'Concevoir et soutenir une solution logicielle innovante face à un jury académique.', chapters: ['Travail d\'analyse, conception, et implémentation d\'une application informatique sous la supervision d\'un enseignant, rédaction d\'un manuscrit de soutenance (mémoire de 30 pages maximum) et soutenance orale.'] },
          { name: 'Intelligence métier (BI)', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 2, coeff: 1, objectifs: 'Comprendre l\'architecture BI, les modèles d\'entrepôts de données, ETL et dashboards.', chapters: ['Chapitre 1 : Business Intelligence vs ERP, architectures classiques', 'Chapitre 2 : Modèles multidimensionnels, OLAP, Data Warehouse modeling', 'Chapitre 3 : ETL, KPI, dashboards et dashboards en temps réel'] },
          { name: 'Déontologie de l\'informatique', ue: 'Transversale (UET)', vhs: '21h', credits: 2, coeff: 1, objectifs: 'Connaître les théories éthiques, les codes de conduite informatiques et la lutte contre le plagiat.', chapters: ['Chapitre 1 : Éthique, morale, préjudices, déontologie et valeurs', 'Chapitre 2 : Théories de l\'éthique (intuitionnistes, déontologiques)', 'Chapitre 3 : Déontologie et éthique informatique (les 10 commandements de l\'éthique)', 'Chapitre 4 : Éthique en recherche et développement (plagiat, falsification, corruption)'] }
        ]
      }
    ]
  },
  {
    id: 'licence-math-app',
    title: 'Licence Mathématiques Appliquées',
    level: 'Licence',
    department: 'Mathématiques',
    description: 'Une formation d\'excellence axée sur la modélisation mathématique, le calcul scientifique, l\'optimisation, les statistiques et le codage d\'algorithmes scientifiques sous Python.',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          { name: 'Analyse 1', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Le corps des réels, suites réelles, fonctions d\'une variable réelle, limites, dérivation, théorèmes de Rolle et Taylor'] },
          { name: 'Algèbre 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Logique, ensembles, relations binaires, structures algébriques fondamentales (Groupes, Anneaux, Corps, polynômes)'] },
          { name: 'Algorithmique et structure de données 1', ue: 'Fondamentale (UEF)', vhs: '105h', credits: 6, coeff: 4, chapters: ['Conception d\'algorithmes, types simples, conditionnelles, boucles, tableaux 1D/2D, chaînes de caractères, implémentation C'] },
          { name: 'Structure machine 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Systèmes de numération, conversions, algèbre de Boole, simplification des fonctions logiques, circuits combinatoires'] },
          { name: 'Logiciels libres (Open Source)', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 4, coeff: 2, chapters: ['Familiarisation avec l\'ordinateur, Internet, Linux, bureautique LibreOffice, collaboration stockage et partage'] },
          { name: 'Physique 1 (mécanique du point)', ue: 'Découverte (UED)', vhs: '42h', credits: 2, coeff: 1, chapters: ['Cinématique du point, dynamique du point, lois de Newton, travail, puissance, énergie cinétique et potentielle'] },
          { name: 'Langue étrangère (Anglais)', ue: 'Transversale (UET)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Reading comprehension, technical vocabulary in mathematics and computer science, writing scientific sentences'] }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          { name: 'Analyse 2', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Calcul intégral, intégrale de Riemann, primitives, équations différentielles ordinaires (EDO), fonctions de plusieurs variables'] },
          { name: 'Algèbre 2', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Espaces vectoriels, applications linéaires, matrices, déterminants, systèmes linéaires d\'équations (Gauss, Cramer)'] },
          { name: 'Algorithmique et structure de données 2', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 4, coeff: 3, chapters: ['Types personnalisés, pointeurs, récursivité, fichiers, listes chaînées simples, doubles, piles et files'] },
          { name: 'Introduction aux probabilités et statistique descriptive', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Vocabulaire statistique, tableaux, représentations graphiques, caractéristiques de position et de dispersion, probabilités de base'] },
          { name: 'Introduction à l\'intelligence artificielle', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 4, coeff: 2, chapters: ['Démystification de l\'IA, avantages/risques, recherche documentaire scientifique avec IA, gestion du temps, rédaction assistée'] },
          { name: 'Fondements de programmation et calcul scientifique avec Python', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Syntaxe de base, listes/dictionnaires, NumPy (ndarray), Matplotlib (courbes), applications d\'algèbre linéaire numérique'] },
          { name: 'Physique 2 (électricité générale)', ue: 'Transversale (UET)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Electrostatique, conducteurs, loi d\'ohm, électrocinétique (Kirchoff, Thévenin, Norton), magnétostatique'] }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          { name: 'Algèbre 3', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Espaces vectoriels, réduction des endomorphismes (valeurs/vecteurs propres, Cayley-Hamilton, diagonalisation, formes de Jordan)'] },
          { name: 'Analyse 3', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 7, coeff: 4, chapters: ['Séries numériques, suites et séries de fonctions, séries entières (Taylor, Fourier), intégrales impropres, fonctions définies par une intégrale'] },
          { name: 'Introduction à la Topologie', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Espaces topologiques, ouverts, intérieur, adhérence, suites convergentes, espaces compacts, complets, connexes'] },
          { name: 'Analyse numérique 1', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 4, coeff: 3, chapters: ['Notions d\'erreurs, résolution d\'équations non linéaires (dichotomie, point fixe, Newton-Raphson), interpolation de Lagrange, intégration numérique'] },
          { name: 'Logique mathématique', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Logique des propositions, tables de vérité, tautologies, calcul des prédicats, quantificateurs, preuves mathématiques'] },
          { name: 'Calcul Scientifique Avancé avec Python', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Utilisation de SciPy (scipy.linalg), calcul symbolique SymPy, intégration, optimisation symbolique, Pandas (DataFrames)'] },
          { name: 'Introduction à Latex', ue: 'Découverte (UED)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Structure d\'un document Tex, packages, environnements, formules mathématiques complexes, tableaux, images, bibliographie, Overleaf'] }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          { name: 'Analyse 4', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 7, coeff: 4, chapters: ['Topologie de R^n, fonctions de plusieurs variables, différentiabilité, gradient, hessien, extrémums, intégrales multiples (doubles/triples, Fubini)'] },
          { name: 'Algèbre 4', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Formes linéaires, dualité, formes bilinéaires, orthogonalisation de Gauss, matrices symétriques réelles, espaces hermitiens'] },
          { name: 'Analyse complexe', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 3, chapters: ['Topologie du plan complexe, fonctions holomorphes (Cauchy-Riemann), fonctions élémentaires, intégrales complexes, résidus'] },
          { name: 'Analyse Numérique 2', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Résolution numérique des systèmes linéaires, calcul des valeurs propres, résolution numérique des EDO (Euler, Runge-Kutta)'] },
          { name: 'Probabilités', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Variables aléatoires réelles, fonctions de répartition, lois de probabilités usuelles, inégalités probabilistes, approximations de lois'] },
          { name: 'Géométrie', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Géométrie affine, barycentre, hyperplans, espace euclidien, Gram-Schmidt, paramétrisation de courbes et de surfaces'] },
          { name: 'Entrepreneuriat', ue: 'Découverte (UED)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Startup creation, Business Model Canvas, marketing, aspects juridiques et financiers, mini-startup project'] }
        ]
      },
      {
        semesterName: 'Semestre 5',
        modules: [
          { name: 'Probabilités avancées', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, chapters: ['Mesure et intégration, tribus, probabilités sur les boréliens, variables aléatoires, espérance conditionnelle, théorèmes de convergence'] },
          { name: 'Statistique paramétrique', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, chapters: ['Estimation ponctuelle, propriétés des estimateurs (biais, consistance, efficacité), maximum de vraisemblance, intervalles de confiance, tests paramétriques'] },
          { name: 'Analyse numérique matricielle / Mesure et intégration', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, chapters: ['Analyse matricielle, conditionnement, décompositions, intégrale de Lebesgue, convergences monotones et dominées, Fubini'] },
          { name: 'Systèmes d\'informations et bases de données', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 4, coeff: 2, chapters: ['Modélisation conceptuelle (ER), modèle relationnel, formes normales, langage SQL DDL/DML, sécurité'] },
          { name: 'Analyse exploratoire de données', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 6, coeff: 3, chapters: ['ACP (Analyse en Composantes Principales), AFC, classifications qualitatives, statistiques descriptives multidimensionnelles'] },
          { name: 'Initiation à la didactique des Mathématiques', ue: 'Découverte (UED)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Concepts et enjeux de la didactique des mathématiques, transposition didactique, rôles dans l\'apprentissage, pratiques mathématiques'] }
        ]
      },
      {
        semesterName: 'Semestre 6',
        modules: [
          { name: 'Théorie des graphes', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Graphes simples, connexité, cycles et cocycles, arbres, algorithme de Kruskal, chemins (Bellman, Dijkstra), flots (Ford-Fulkerson)'] },
          { name: 'Séries chronologiques', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, chapters: ['Analyse descriptive temporelle, processus ARMA, stationnarité, prédiction, tests d\'hypothèses, hétéroscédasticité GARCH'] },
          { name: 'Optimisation non linéaire', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Optimisation unidimensionnelle, dichotomie, multidimensionnelle sans contraintes (gradient, Newton), sous contraintes (Kuhn-Tucker)'] },
          { name: 'Simulation et pratique de logiciels / Cryptographie', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 4, coeff: 2, chapters: ['Générateurs pseudo-aléatoires, méthodes d\'inversion, de rejet, Monte-Carlo, MCMC, cryptographie classique (César, substitution) et moderne (RSA, AES)'] },
          { name: 'Mini projet', ue: 'Méthodologique (UEM)', vhs: '10h', credits: 5, coeff: 3, chapters: ['Projet de licence portant sur une thématique de mathématiques appliquées, rédaction d\'un rapport et soutenance sous forme d\'exposé ou de poster'] },
          { name: 'Éthique et histoire des Mathématiques modernes', ue: 'Transversale (UET)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Évolution de la Renaissance au 20ème siècle, figures historiques (Banach, Gödel, von Neumann, Nash), intégrité scientifique, lutte contre le plagiat'] }
        ]
      }
    ]
  },
  {
    id: 'licence-math',
    title: 'Licence Mathématiques (Fondamentales)',
    level: 'Licence',
    department: 'Mathématiques',
    description: 'Une solide formation académique générale en mathématiques fondamentales (analyse réelle et complexe, algèbre générale, géométrie différentielle, probabilités avancées et calcul scientifique).',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          { name: 'Analyse 1', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Le corps des réels, suites réelles, fonctions d\'une variable réelle, limites, dérivation, théorèmes de Rolle et Taylor'] },
          { name: 'Algèbre 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Logique, ensembles, relations binaires, structures algébriques fondamentales (Groupes, Anneaux, Corps, polynômes)'] },
          { name: 'Algorithmique et structure de données 1', ue: 'Fondamentale (UEF)', vhs: '105h', credits: 6, coeff: 4, chapters: ['Conception d\'algorithmes, types simples, conditionnelles, boucles, tableaux 1D/2D, chaînes de caractères, implémentation C'] },
          { name: 'Structure machine 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Systèmes de numération, conversions, algèbre de Boole, simplification des fonctions logiques, circuits combinatoires'] },
          { name: 'Logiciels libres (Open Source)', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 4, coeff: 2, chapters: ['Familiarisation avec l\'ordinateur, Internet, Linux, bureautique LibreOffice, collaboration stockage et partage'] },
          { name: 'Physique 1 (mécanique du point)', ue: 'Découverte (UED)', vhs: '42h', credits: 2, coeff: 1, chapters: ['Cinématique du point, dynamique du point, lois de Newton, travail, puissance, énergie cinétique et potentielle'] },
          { name: 'Langue étrangère (Anglais)', ue: 'Transversale (UET)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Reading comprehension, technical vocabulary in mathematics and computer science, writing scientific sentences'] }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          { name: 'Analyse 2', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Calcul intégral, intégrale de Riemann, primitives, équations différentielles ordinaires (EDO), fonctions de plusieurs variables'] },
          { name: 'Algèbre 2', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Espaces vectoriels, applications linéaires, matrices, déterminants, systèmes linéaires d\'équations (Gauss, Cramer)'] },
          { name: 'Algorithmique et structure de données 2', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 4, coeff: 3, chapters: ['Types personnalisés, pointeurs, récursivité, fichiers, listes chaînées simples, doubles, piles et files'] },
          { name: 'Introduction aux probabilités et statistique descriptive', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Vocabulaire statistique, tableaux, représentations graphiques, caractéristiques de position et de dispersion, probabilités de base'] },
          { name: 'Introduction à l\'intelligence artificielle', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 4, coeff: 2, chapters: ['Démystification de l\'IA, avantages/risques, recherche documentaire scientifique avec IA, gestion du temps, rédaction assistée'] },
          { name: 'Fondements de programmation et calcul scientifique avec Python', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 1, coeff: 2, chapters: ['Syntaxe de base, listes/dictionnaires, NumPy (ndarray), Matplotlib (courbes), applications d\'algèbre linéaire numérique'] },
          { name: 'Physique 2 (électricité générale)', ue: 'Transversale (UET)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Electrostatique, conducteurs, loi d\'ohm, électrocinétique (Kirchoff, Thévenin, Norton), magnétostatique'] }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          { name: 'Algèbre 3', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Espaces vectoriels, réduction des endomorphismes (valeurs/vecteurs propres, Cayley-Hamilton, diagonalisation, formes de Jordan)'] },
          { name: 'Analyse 3', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 7, coeff: 4, chapters: ['Séries numériques, suites et séries de fonctions, séries entières (Taylor, Fourier), intégrales impropres, fonctions définies par une intégrale'] },
          { name: 'Introduction à la Topologie', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Espaces topologiques, ouverts, intérieur, adhérence, suites convergentes, espaces compacts, complets, connexes'] },
          { name: 'Analyse numérique 1', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 4, coeff: 3, chapters: ['Notions d\'erreurs, résolution d\'équations non linéaires (dichotomie, point fixe, Newton-Raphson), interpolation de Lagrange, intégration numérique'] },
          { name: 'Logique mathématique', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Logique des propositions, tables de vérité, tautologies, calcul des prédicats, quantificateurs, preuves mathématiques'] },
          { name: 'Calcul Scientifique Avancé avec Python', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Utilisation de SciPy (scipy.linalg), calcul symbolique SymPy, intégration, optimisation symbolique, Pandas (DataFrames)'] },
          { name: 'Introduction à Latex', ue: 'Découverte (UED)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Structure d\'un document Tex, packages, environnements, formules mathématiques complexes, tableaux, images, bibliographie, Overleaf'] }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          { name: 'Analyse 4', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 7, coeff: 4, chapters: ['Topologie de R^n, fonctions de plusieurs variables, différentiabilité, gradient, hessien, extrémums, intégrales multiples (doubles/triples, Fubini)'] },
          { name: 'Algèbre 4', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Formes linéaires, dualité, formes bilinéaires, orthogonalisation de Gauss, matrices symétriques réelles, espaces hermitiens'] },
          { name: 'Analyse complexe', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 3, chapters: ['Topologie du plan complexe, fonctions holomorphes (Cauchy-Riemann), fonctions élémentaires, intégrales complexes, résidus'] },
          { name: 'Analyse Numérique 2', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Résolution numérique des systèmes linéaires, calcul des valeurs propres, résolution numérique des EDO (Euler, Runge-Kutta)'] },
          { name: 'Probabilités', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Variables aléatoires réelles, fonctions de répartition, lois de probabilités usuelles, inégalités probabilistes, approximations de lois'] },
          { name: 'Géométrie', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Géométrie affine, barycentre, hyperplans, espace euclidien, Gram-Schmidt, paramétrisation de courbes et de surfaces'] },
          { name: 'Entrepreneuriat', ue: 'Découverte (UED)', vhs: '21h', credits: 2, coeff: 1, chapters: ['Startup creation, Business Model Canvas, marketing, aspects juridiques et financiers, mini-startup project'] }
        ]
      },
      {
        semesterName: 'Semestre 5',
        modules: [
          { name: 'Mesure et Intégration', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Mesures positives et mesures de probabilité, intégration de Lebesgue, convergences monotone/dominée, produit d\'espaces mesurés, théorème de Fubini'] },
          { name: 'Espaces Vectoriels normés', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Espace de Banach (normes, complétude, dualité), espace de Hilbert (produit scalaire, Riesz, systèmes orthonormés)'] },
          { name: 'Équations différentielles', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, chapters: ['EDO de 1er ordre, existence et unicité de Cauchy-Lipschitz, équations d\'ordre supérieur, systèmes linéaires (résolvante), stabilité'] },
          { name: 'Equation de la physique mathématique', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 2, chapters: ['EDP d\'ordre 1, caractéristiques, EDP d\'ordre 2, Laplace (noyau de Poisson), équations des ondes, équation de la chaleur'] },
          { name: 'Optimisation sans contraintes', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 5, coeff: 2, chapters: ['Calcul différentiel dans R^n, convexité, minimisation, algorithmes (gradient, gradient conjugué, Newton, relaxation)'] },
          { name: 'Initiation à la didactique des mathématiques', ue: 'Découverte (UED)', vhs: '21h', credits: 3, coeff: 1, chapters: ['Enjeux de la didactique, transposition didactique, processus de pensée mathématique, rôles dans l\'apprentissage, didactique en classe'] }
        ]
      },
      {
        semesterName: 'Semestre 6',
        modules: [
          { name: 'Introduction à la théorie des groupes', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 8, coeff: 5, chapters: ['Groupes, sous-groupes, Lagrange, morphismes, distingués, quotients, action d\'un groupe (orbite, Burnside), groupes abéliens finis'] },
          { name: 'Théorie des corps', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 8, coeff: 5, chapters: ['Anneaux, idéaux, quotients, divisibilité, corps (caractéristique, finis, polynômes irréductibles, applications codes/cryptographie)'] },
          { name: 'Transformations intégrales les espaces Lp', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 5, coeff: 2, chapters: ['Espaces Lp, dualité, convolution, transformation de Fourier, transformation de Laplace, applications EDO/EDP'] },
          { name: 'Géométrie différentielle', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 5, coeff: 2, chapters: ['Théorème d\'inversion locale, théorème du rang, sous-variétés, formes différentielles, intégration, formule de Stokes'] },
          { name: 'Éthique et histoire des Mathématiques modernes', ue: 'Transversale (UET)', vhs: '21h', credits: 2, coeff: 2, chapters: ['Histoire de la Renaissance au 20e siècle (Hilbert, Banach, Gödel, von Neumann, Nash, Bourbaki), intégrité scientifique, plagiat'] },
          { name: 'Theoretical Foundations of Machine Learning', ue: 'Découverte (UED)', vhs: '42h', credits: 2, coeff: 2, chapters: ['Modèles linéaires, optimisation (SGD), PAC learning model, dimension VC, SVM, réseaux de neurones'] }
        ]
      }
    ]
  },
  {
    id: 'master-psa',
    title: 'Master Probabilités, Statistique et Applications (PSA)',
    level: 'Master',
    department: 'Mathématiques',
    description: 'Une formation académique d\'excellence axée sur la modélisation aléatoire, l\'analyse de données massives (Data Science), les processus stochastiques et l\'apprentissage automatique (Machine Learning/Deep Learning).',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          {
            name: 'Probabilités Avancées',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 5,
            coeff: 3,
            objectifs: 'Présenter en détail les grandes notions et méthodes du calcul de probabilité (variables aléatoires, lois gaussiennes, conditionnement, théorèmes limites).',
            chapters: [
              'Chapitre 1 : Rappels fondamentaux sur les variables aléatoires (lois de probabilité, espérance, variance)',
              'Chapitre 2 : Fonctions caractéristiques et génératrices des moments (lois discrètes et continues)',
              'Chapitre 3 : Modes de convergence (convergence presque sûre, en probabilité, en loi)',
              'Chapitre 4 : Théorèmes limites (Loi Faible des Grands Nombres, Théorème Central Limite)',
              'Chapitre 5 : Vecteurs aléatoires (matrice de covariance, loi normale multidimensionnelle, espérance conditionnelle)'
            ]
          },
          {
            name: 'Compléments de la Théorie de la Mesure',
            ue: 'Fondamentale (UEF)',
            vhs: '42h',
            credits: 4,
            coeff: 2,
            objectifs: 'Maîtriser le formalisme des probabilités modernes et de l\'intégration de Lebesgue.',
            chapters: [
              'Chapitre 1 : Rappels et approfondissement sur la mesure (Tribus, mesures de Lebesgue, mesure produit, théorème de Fubini)',
              'Chapitre 2 : Les espaces L^p (Théorèmes limites, espace de Hilbert, intégrabilité uniforme)',
              'Chapitre 3 : Décomposition des mesures (Théorème de Radon-Nikodym, mesure de Lebesgue-Stieltjes, convergences)'
            ]
          },
          {
            name: 'Statistique Inférentielle 1',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 5,
            coeff: 3,
            objectifs: 'Savoir construire des estimateurs ponctuels et par intervalle de confiance, étudier leurs performances et les comparer.',
            chapters: [
              'Chapitre 1 : Échantillonnage et distributions associées, plans d\'expériences (Théorème central limite)',
              'Chapitre 2 : Estimation ponctuelle (Propriétés: biais, variance, consistance, méthode du maximum de vraisemblance, borne de Cramer-Rao)',
              'Chapitre 3 : Estimation par Intervalle de Confiance (IC pour la moyenne, la variance et une proportion)',
              'Chapitre 4 : Introduction aux Tests Statistiques (Neyman-Pearson, régions critiques, erreurs de type I et II, tests paramétriques)'
            ]
          },
          {
            name: 'Analyse de Données',
            ue: 'Fondamentale (UEF)',
            vhs: '42h',
            credits: 4,
            coeff: 2,
            objectifs: 'Fournir les bases de l\'analyse statistique multidimensionnelle avec mise en œuvre pratique sur logiciel.',
            chapters: [
              'Chapitre 1 : Analyse en Composantes Principales (ACP)',
              'Chapitre 2 : Analyse Factorielle des Correspondances (AFC)',
              'Chapitre 3 : Classification Hiérarchique Ascendante (CAH)',
              'Chapitre 4 : Centres mobiles et nuées dynamiques'
            ]
          },
          {
            name: 'Programmation sous logiciels R / Python',
            ue: 'Méthodologique (UEM)',
            vhs: '42h',
            credits: 4,
            coeff: 2,
            objectifs: 'Préparer l\'étudiant à la programmation libre destinée aux statistiques et à la science de données.',
            chapters: [
              'Chapitre 1 : Initiation au logiciel R & Python (installation, commandes de base, types de données)',
              'Chapitre 2 : Structures de données sous R/Python (vecteurs, listes, matrices, data frames)',
              'Chapitre 3 : Structures conditionnelles, boucles et création de fonctions personnalisées',
              'Chapitre 4 : Traitement statistique des données et visualisation graphique'
            ]
          },
          {
            name: 'Modélisation Mathématique',
            ue: 'Découverte (UED)',
            vhs: '42h',
            credits: 2,
            coeff: 2,
            objectifs: 'Apprendre à traduire un phénomène observé en équations, les résoudre puis interpréter les résultats.',
            chapters: [
              'Chapitre 1 : Principes de la modélisation (simplifications, étapes, hypothèses)',
              'Chapitre 2 : Modèles discrets (suites) et modèles continus (équations différentielles ordinaires)',
              'Chapitre 3 : Études de cas concrets (dynamique des populations de Lotka-Volterra, épidémiologie SIR, pendule physique)',
              'Chapitre 4 : Analyse du modèle (points d\'équilibre et étude de stabilité)'
            ]
          },
          {
            name: 'Entrepreneuriat ou Éthique de l\'IA',
            ue: 'Transversale (UET)',
            vhs: '21h',
            credits: 1,
            coeff: 1,
            objectifs: 'Développer des compétences transversales entrepreneuriales ou un regard éthique sur l\'intelligence artificielle.',
            chapters: [
              'Option Entrepreneuriat : De l\'idée au projet, Business Model Canvas, étude de marché, le pitch',
              'Option Éthique de l\'IA : Biais et Équité (Fairness), Transparence et Explicabilité (XAI), Responsabilité légale'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          {
            name: 'Processus Stochastiques',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Maîtriser les différents types de processus stochastiques et leurs applications pratiques aux files d\'attente.',
            chapters: [
              'Chapitre 1 : Rappels et généralités sur les processus stochastiques',
              'Chapitre 2 : Chaînes de Markov à temps discret (graphe de transition, classification des états, comportement asymptotique)',
              'Chapitre 3 : Processus de Poisson (processus aléatoires à temps continu, loi exponentielle)',
              'Chapitre 4 : Processus de renouvellement (description et propriétés asymptotiques)',
              'Chapitre 5 : Processus de naissance et de mort, files d\'attente markoviennes et non markoviennes (M/M/1, M/G/1)'
            ]
          },
          {
            name: 'Statistique Inférentielle 2',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Savoir construire et utiliser des modèles de tests complexes, modélisation bayésienne et détection d\'anomalies.',
            chapters: [
              'Chapitre 1 : Tests non paramétriques (Khi-deux, Kolmogorov-Smirnov, Wilcoxon, Friedman, tests d\'indépendance et d\'association)',
              'Chapitre 2 : Statistique d\'ordre (X(1) <= X(2) ... <= X(n), quantiles, détection d\'observations aberrantes/outliers)',
              'Chapitre 3 : Statistique Bayesienne (lois a priori et a posteriori, estimateur bayésien, comparaison avec l\'approche fréquentiste)',
              'Chapitre 4 : Applications de la statistique inférentielle en médecine, finance et économie'
            ]
          },
          {
            name: 'Théorie des Martingales',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Fournir une rigueur mathématique pour modéliser l\'incertitude évoluant dans le temps et préparer au calcul stochastique.',
            chapters: [
              'Chapitre 1 : Espérance conditionnelle par rapport à une tribu (rappels et propriétés)',
              'Chapitre 2 : Martingales discrètes (filtrations, sous-martingales, sur-martingales, temps d\'arrêt)',
              'Chapitre 3 : Martingales continues et temps d\'arrêt',
              'Chapitre 4 : Théorèmes de convergence et théorèmes d\'arrêt'
            ]
          },
          {
            name: 'Simulation et Méthodes de Monte Carlo',
            ue: 'Méthodologique (UEM)',
            vhs: '63h',
            credits: 5,
            coeff: 3,
            objectifs: 'Maîtriser les approximations par simulation numérique lorsque les problèmes analytiques n\'ont pas de solution directe.',
            chapters: [
              'Chapitre 1 : Génération d\'échantillons de variables aléatoires (Inversion, Rejet, Composition, méthode de Box-Muller)',
              'Chapitre 2 : Simulation de Monte Carlo classique (principes de réduction de variance, calcul d\'intégrales)',
              'Chapitre 3 : Méthodes de Monte Carlo par Chaîne de Markov (MCMC) (algorithme de Gibbs, algorithme de Hastings-Metropolis)'
            ]
          },
          {
            name: 'Modèles Linéaires',
            ue: 'Méthodologique (UEM)',
            vhs: '42h',
            credits: 4,
            coeff: 3,
            objectifs: 'Présenter les principaux modèles de régression linéaire, tests fondamentaux et analyse de la variance (ANOVA).',
            chapters: [
              'Chapitre 1 : Régression linéaire simple et multiple (conditions d\'application, moindres carrés)',
              'Chapitre 2 : Analyse de la variance (ANOVA) à un ou plusieurs facteurs',
              'Chapitre 3 : Critères de sélection de modèles prédictifs (AIC, BIC)',
              'Chapitre 4 : Analyse de la covariance (ANCOVA) et contrôle graphique'
            ]
          },
          {
            name: 'Calcul Scientifique (R & Matlab)',
            ue: 'Transversale (UET)',
            vhs: '42h',
            credits: 2,
            coeff: 2,
            objectifs: 'Maîtriser la programmation sous Matlab et R pour la résolution numérique de problèmes statistiques.',
            chapters: [
              'Chapitre 1 : Environnement Matlab et R, manipulation avancée de structures de données',
              'Chapitre 2 : Algèbre linéaire numérique (résolution de systèmes linéaires, décomposition matricielle)',
              'Chapitre 3 : Modélisation et implémentation de simulations réelles industrielles ou financières'
            ]
          },
          {
            name: 'Réseaux de Neurones Artificiels',
            ue: 'Découverte (UED)',
            vhs: '42h',
            credits: 2,
            coeff: 2,
            objectifs: 'S\'initier aux concepts fondamentaux de l\'apprentissage profond et des réseaux neuronaux artificiels.',
            chapters: [
              'Chapitre 1 : Introduction à l\'apprentissage automatique et historique de l\'IA',
              'Chapitre 2 : Le neurone artificiel et le Perceptron (fonctions d\'activation, classification binaire)',
              'Chapitre 3 : Réseaux multicouches (propagation avant, rétropropagation de l\'erreur)',
              'Chapitre 4 : Apprentissage et optimisation (descente de gradient, régularisation, sur-apprentissage)',
              'Chapitre 5 : Applications pratiques de classification et régression'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          {
            name: 'Statistique Non Paramétrique',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Maîtriser les outils de l\'estimation fonctionnelle non paramétrique et de tests libres de loi.',
            chapters: [
              'Chapitre 1 : Introduction et limitations des méthodes paramétriques',
              'Chapitre 2 : Estimation non paramétrique à noyaux (Estimateur de Parzen-Rosenblatt pour la densité, Nadaraya-Watson pour la régression)',
              'Chapitre 3 : Tests non paramétriques (Wilcoxon, Kolmogorov-Smirnov, test de symétrie de Friedman)',
              'Chapitre 4 : Tests d\'association (coefficients de Kendall et de Spearman, concordance)'
            ]
          },
          {
            name: 'Séries Chronologiques (Time Series)',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Acquérir les connaissances opérationnelles pour analyser l\'évolution temporelle d\'un phénomène et prévoir son futur.',
            chapters: [
              'Chapitre 1 : Décomposition de séries temporelles (Tendance, Saisonnalité, Cycle, Résidu, méthodes de lissage exponentiel Holt-Winters)',
              'Chapitre 2 : Processus stationnaires et modèles ARMA (stationnarité, inversibilité, bruit blanc, fonction d\'autocorrélation ACF/PACF)',
              'Chapitre 3 : Modélisation ARIMA, méthodologie de Box-Jenkins (identification, estimation, validation)',
              'Chapitre 4 : Extensions hétéroscédastiques (modèles de volatilité ARCH et GARCH pour la finance)'
            ]
          },
          {
            name: 'Calcul Stochastique',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Modéliser des processus aléatoires à temps continu appliqués à la finance quantitative.',
            chapters: [
              'Chapitre 1 : Rappels sur les vecteurs et processus gaussiens',
              'Chapitre 2 : Le mouvement brownien (définition, propriétés géométriques)',
              'Chapitre 3 : L\'intégrale stochastique d\'Itô',
              'Chapitre 4 : Formule d\'Itô et applications, Théorème de Girsanov',
              'Chapitre 5 : Équations différentielles stochastiques d\'Itô (EDS)'
            ]
          },
          {
            name: 'Analyse de Données de Survie',
            ue: 'Fondamentale (UEF)',
            vhs: '42h',
            credits: 4,
            coeff: 2,
            objectifs: 'Maîtriser les méthodes statistiques pour l\'analyse de données censurées en médecine ou fiabilité.',
            chapters: [
              'Chapitre 1 : Préliminaires (Fonction de survie, censure à droite, troncature)',
              'Chapitre 2 : Estimation non paramétrique (estimateur de Kaplan-Meier, estimateur de Nelson-Aalen du risque cumulé)',
              'Chapitre 3 : Modèles semi-paramétriques (Modèle à risques proportionnels de Cox, vérification des résidus)',
              'Chapitre 4 : Comparaison de courbes de survie (Log-rank test)'
            ]
          },
          {
            name: 'Machine Learning',
            ue: 'Découverte (UED)',
            vhs: '42h',
            credits: 2,
            coeff: 2,
            objectifs: 'Introduire les concepts fondamentaux de l\'apprentissage automatique.',
            chapters: [
              'Chapitre 1 : Introduction et cycle de projet Machine Learning',
              'Chapitre 2 : Préparation des données (normalisation, encodage, gestion des valeurs manquantes)',
              'Chapitre 3 : Algorithmes de classification (k-PPN, arbres de décision, régression logistique)',
              'Chapitre 4 : Régression et évaluation des performances (validation croisée, métriques)',
              'Chapitre 5 : Outils logiciels (Scikit-Learn sous Python)'
            ]
          },
          {
            name: 'Deep Learning',
            ue: 'Découverte (UED)',
            vhs: '42h',
            credits: 2,
            coeff: 2,
            objectifs: 'S\'initier aux réseaux neuronaux profonds de pointe.',
            chapters: [
              'Chapitre 1 : Du Perceptron au Deep Learning',
              'Chapitre 2 : Architectures profondes (couches cachées, rétropropagation, optimiseurs Adam/SGD)',
              'Chapitre 3 : Réseaux de neurones convolutifs (CNN) pour l\'image',
              'Chapitre 4 : Réseaux récurrents (RNN, LSTM) pour le texte',
              'Chapitre 5 : Enjeux d\'éthique de l\'IA et explicabilité'
            ]
          },
          {
            name: 'Méthodologie de Rédaction Scientifique',
            ue: 'Transversale (UET)',
            vhs: '21h',
            credits: 1,
            coeff: 1,
            objectifs: 'Acquérir les compétences de rédaction d\'un mémoire de master et présentation orale.',
            chapters: [
              'Chapitre 1 : Recherche bibliographique (arXiv, MathSciNet)',
              'Chapitre 2 : Structure d\'un article scientifique et d\'un rapport',
              'Chapitre 3 : Maîtrise des logiciels LaTeX, BibTeX pour les formules mathématiques',
              'Chapitre 4 : Éthique scientifique (lutte contre le plagiat)'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          {
            name: 'Projet de Fin d\'Études (PFE) & Mémoire',
            ue: 'Fondamentale (UEF)',
            vhs: '750h',
            credits: 30,
            coeff: 17,
            objectifs: 'Réalisation d\'un travail de recherche original théorique ou appliqué en entreprise/laboratoire, donnant lieu à la rédaction d\'un mémoire écrit et à une soutenance orale devant un jury d\'experts.',
            chapters: [
              'Étape 1 : Définition du sujet et recherche bibliographique',
              'Étape 2 : Développement théorique, modélisation ou simulation numérique',
              'Étape 3 : Rédaction du mémoire en LaTeX',
              'Étape 4 : Soutenance publique de fin d\'études'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'master-ama',
    title: 'Master Analyse Mathématique et Applications (AMA)',
    level: 'Master',
    department: 'Mathématiques',
    description: 'Une formation mathématique pure et appliquée de haut niveau centrée sur l\'analyse fonctionnelle globale, l\'étude d\'équations aux dérivées partielles (EDP), la théorie du contrôle et l\'optimisation convexe.',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          {
            name: 'Analyse Fonctionnelle 1',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Introduire les structures infinies des espaces de Banach et de Hilbert et maîtriser les grands théorèmes.',
            chapters: [
              'Chapitre 1 : Espaces de Banach (espaces vectoriels normés, complétude, exemples l^p, C(K), opérateurs linéaires continus, lemme de Baire)',
              'Chapitre 2 : Espaces de Hilbert (produit scalaire, projection sur un convexe fermé, bases hilbertiennes, théorème de représentation de Riesz)',
              'Chapitre 3 : Les trois théorèmes fondamentaux (Hahn-Banach, Banach-Steinhaus, graphe fermé/application ouverte)'
            ]
          },
          {
            name: 'Distributions et Analyse de Fourier 1',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Généraliser la notion de fonction et de dérivation, maîtriser la transformée de Fourier pour la résolution d\'EDP.',
            chapters: [
              'Chapitre 1 : Théorie des Distributions (Motivation, solutions faibles, espaces de fonctions-test D, dérivation, produit, convolution)',
              'Chapitre 2 : Espace de Schwartz et Distributions Tempérées (L\'espace S et son dual S\')',
              'Chapitre 3 : Transformation de Fourier (définition sur S et S\', application aux équations différentielles et à l\'équation de Poisson)'
            ]
          },
          {
            name: 'Calcul Différentiel',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Étendre les outils du calcul différentiel aux espaces de dimension infinie.',
            chapters: [
              'Chapitre 1 : Différentiabilité dans les espaces de Banach (différentielle de Gâteaux, différentielle de Fréchet, règle de la chaîne, accroissements finis)',
              'Chapitre 2 : Différentielles d\'ordre supérieur (applications multilinéaires, théorème de Schwarz, formule de Taylor)',
              'Chapitre 3 : Grands théorèmes d\'analyse non linéaire (théorème d\'inversion locale, théorème des fonctions implicites)'
            ]
          },
          {
            name: 'Analyse Convexe',
            ue: 'Méthodologique (UEM)',
            vhs: '63h',
            credits: 5,
            coeff: 3,
            objectifs: 'Comprendre les propriétés géométriques et topologiques des ensembles et fonctions convexes pour l\'optimisation.',
            chapters: [
              'Chapitre 1 : Géométrie des ensembles convexes (enveloppe convexe, intérieur algébrique, théorèmes de séparation de Hahn-Banach)',
              'Chapitre 2 : Fonctions convexes (épigraphe, semi-continuité inférieure, propriétés de continuité)',
              'Chapitre 3 : Sous-différentiel et Dualité (sous-différentiel, règle de Fermat pour l\'optimalité, conjugaison de Fenchel-Moreau)'
            ]
          },
          {
            name: 'Optionnel X : Analyse Matricielle',
            ue: 'Méthodologique (UEM)',
            vhs: '42h',
            credits: 4,
            coeff: 2,
            objectifs: 'Maîtriser les concepts avancés d\'algèbre linéaire numérique.',
            chapters: [
              'Chapitre 1 : Normes vectorielles et matricielles, conditionnement de matrices',
              'Chapitre 2 : Décompositions matricielles (LU, Cholesky, QR, décomposition en valeurs singulières SVD)',
              'Chapitre 3 : Localisation des valeurs propres (Disques de Gerschgorin, Théorème de Perron-Frobenius)'
            ]
          },
          {
            name: 'Modélisation Mathématique',
            ue: 'Découverte (UED)',
            vhs: '42h',
            credits: 2,
            coeff: 2,
            chapters: [
              'Chapitre 1 : Éapes de modélisation',
              'Chapitre 2 : Systèmes dynamiques (discrets et continus)',
              'Chapitre 3 : Modèles épidémiologiques (SIR) et écologiques (Lotka-Volterra)'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          {
            name: 'Analyse Fonctionnelle 2',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Approfondir la théorie des espaces de Banach en introduisant la dualité topologique et les topologies faibles.',
            chapters: [
              'Chapitre 1 : Dualité Topologique (Espace dual E\', bidual E\'\', injection canonique, opérateur adjoint)',
              'Chapitre 2 : Topologies Faibles (topologie faible o(E, E\') et faible-* o(E\', E), convergences)',
              'Chapitre 3 : Compacité Faible (Théorème de Banach-Alaoglu, espaces réflexifs, théorème de Kakutani)'
            ]
          },
          {
            name: 'Distributions et Analyse de Fourier 2 (Espaces de Sobolev)',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Appliquer la théorie des distributions à la construction des espaces de Sobolev, cadre naturel pour l\'étude d\'EDP.',
            chapters: [
              'Chapitre 1 : Construction des Espaces de Sobolev W^{k,p} et H^s',
              'Chapitre 2 : Propriétés de Densité et d\'Extension',
              'Chapitre 3 : Théorèmes d\'Injection de Sobolev et de compacité de Rellich-Kondrachov',
              'Chapitre 4 : Théorème de Trace pour les conditions aux limites'
            ]
          },
          {
            name: 'Analyse Complexe Avancée',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            objectifs: 'Maîtriser la théorie des résidus, le prolongement analytique et les transformations conformes.',
            chapters: [
              'Chapitre 1 : Théorie des Résidus (points singuliers isolés, théorème des résidus, calcul d\'intégrales réelles)',
              'Chapitre 2 : Principe de l\'argument et Théorème de Rouché',
              'Chapitre 3 : Applications Conformes (transformations de Möbius, lemme de Schwarz, théorème de Riemann)',
              'Chapitre 4 : Prolongement analytique et Fonctions Spéciales'
            ]
          },
          {
            name: 'Optimisation Convexe',
            ue: 'Méthodologique (UEM)',
            vhs: '63h',
            credits: 5,
            coeff: 3,
            objectifs: 'Étudier les algorithmes de résolution de problèmes d\'optimisation convexe avec et sans contraintes.',
            chapters: [
              'Chapitre 1 : Conditions d\'optimalité de Karush-Kuhn-Tucker (KKT)',
              'Chapitre 2 : Algorithmes sans contraintes (Descente de gradient, méthode de Newton)',
              'Chapitre 3 : Algorithmes avec contraintes (gradient projeté, fonctions de pénalité et barrière)',
              'Chapitre 4 : Méthodes de points intérieurs'
            ]
          },
          {
            name: 'Optionnel Y : Méthode des Éléments Finis (MEF)',
            ue: 'Méthodologique (UEM)',
            vhs: '42h',
            credits: 4,
            coeff: 2,
            objectifs: 'Établir les fondements mathématiques rigoureux et les aspects d\'implémentation de la MEF.',
            chapters: [
              'Chapitre 1 : Formulation variationnelle des problèmes elliptiques (Lax-Milgram)',
              'Chapitre 2 : Approximation de Galerkin et construction des éléments finis de Lagrange',
              'Chapitre 3 : Analyse de l\'erreur (Lemme de Céa et estimations d\'erreur a priori)'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          {
            name: 'Équations Intégrales',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Équations de Volterra et de Fredholm',
              'Chapitre 2 : Théorie de Fredholm (noyaux séparables, alternative de Fredholm)',
              'Chapitre 3 : Lien avec la théorie des opérateurs compacts'
            ]
          },
          {
            name: 'Théorie Spectrale',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Spectre des opérateurs bornés (spectre ponctuel, continu, résiduel)',
              'Chapitre 2 : Opérateurs compacts et auto-adjoints (théorème spectral)',
              'Chapitre 3 : Opérateurs non bornés (graphe, adjoint, opérateurs symétriques)'
            ]
          },
          {
            name: 'Théorie des Semi-Groupes',
            ue: 'Fondamentale (UEF)',
            vhs: '63h',
            credits: 6,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Problème de Cauchy abstrait et C0-semigroupes',
              'Chapitre 2 : Théorèmes de Hille-Yosida et Lumer-Phillips',
              'Chapitre 3 : Applications aux équations d\'évolution (paraboliques, hyperboliques)'
            ]
          },
          {
            name: 'Introduction aux EDP Non Linéaires',
            ue: 'Méthodologique (UEM)',
            vhs: '63h',
            credits: 5,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Méthodes Topologiques (point fixe de Schauder, degré topologique)',
              'Chapitre 2 : Méthodes Variationnelles (minimisation directe, théorème du col de montagne)',
              'Chapitre 3 : Méthodes de Monotonie (théorème de Minty-Browder)'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          {
            name: 'Mémoire de Master (PFE)',
            ue: 'Fondamentale (UEF)',
            vhs: '750h',
            credits: 30,
            coeff: 17,
            chapters: [
              'Étape 1 : Conception du sujet et étude de l\'état de l\'art',
              'Étape 2 : Résolution d\'une problématique d\'analyse complexe ou d\'EDP',
              'Étape 3 : Rédaction et soutenance de fin d\'études'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'master-si',
    title: 'Master Sécurité Informatique (SI)',
    level: 'Master',
    department: 'Informatique',
    description: 'Une formation de pointe en cybersécurité couvrant la cryptographie avancée, la sécurité des réseaux et des systèmes, la criminalistique numérique (forensics), le DevOps/DevSecOps et la protection de l\'IoT.',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          {
            name: 'Algorithmique Avancée et Complexité',
            ue: 'Fondamentale (UEF)',
            vhs: '126h',
            credits: 5,
            coeff: 3,
            objectifs: 'Maîtriser les structures de données avancées, l\'analyse de complexité algorithmique et les preuves de correction.',
            chapters: [
              'Chapitre 1 : Introduction à la complexité algorithmique (temporelle et spatiale, notation grand O)',
              'Chapitre 2 : Structures de données avancées (arbres AVL, Rouge-Noir, tables de hachage, tas)',
              'Chapitre 3 : Techniques d\'analyse (diviser pour régner, programmation dynamique, algorithmes gloutons)',
              'Chapitre 4 : Complexité et preuve de correction (notions de P, NP, NP-complets, induction, contradiction)'
            ]
          },
          {
            name: 'Bases de Données Avancées',
            ue: 'Fondamentale (UEF)',
            vhs: '126h',
            credits: 5,
            coeff: 3,
            objectifs: 'Étudier les architectures modernes de bases de données, la sécurité et l\'optimisation SQL.',
            chapters: [
              'Chapitre 1 : Rappels relationnels, transactions, concurrence, distribution d\'architectures SGBD',
              'Chapitre 2 : Programmation SQL avancée (procédures stockées, déclencheurs/triggers, NoSQL JSONiq/Cypher)',
              'Chapitre 3 : Le modèle Objet-Relationnel (RO) et interrogation SQL3',
              'Chapitre 4 : Bases de données NoSQL (clés-valeurs, documents MongoDB, graphes Neo4j, colonnes Cassandra)',
              'Chapitre 5 : Bases de données distribuées et sécurité Cloud (IaaS, PaaS, SaaS, chiffrement, audit)'
            ]
          },
          {
            name: 'Outils Mathématiques pour la Cryptographie',
            ue: 'Fondamentale (UEF)',
            vhs: '105h',
            credits: 4,
            coeff: 3,
            objectifs: 'Assimiler les concepts algébriques de la théorie des groupes, anneaux et des corps finis requis pour la cryptographie.',
            chapters: [
              'Partie 1 : Théorie des groupes (sous-groupes quotients, groupes cycliques, permutation, cryptographie)',
              'Partie 2 : Corps finis (cardinalité, relation de Frobenius, sous-corps, polynômes irréductibles, indicatrice d\'Euler)'
            ]
          },
          {
            name: 'Intelligence Artificielle pour la Cybersécurité',
            ue: 'Fondamentale (UEF)',
            vhs: '105h',
            credits: 4,
            coeff: 3,
            objectifs: 'Utiliser les techniques d\'apprentissage automatique pour détecter et contrer les cybermenaces.',
            chapters: [
              'Chapitre 1 : Introduction à l\'apprentissage automatique et profond supervisé et non supervisé',
              'Chapitre 2 : Pipeline d\'apprentissage automatique en Python',
              'Chapitre 3 : Applications pratiques (sécurité des réseaux pilotés par les données, filtrage anti-spam, intrusion)'
            ]
          },
          {
            name: 'Introduction à la Sécurité Informatique',
            ue: 'Méthodologique (UEM)',
            vhs: '84h',
            credits: 5,
            coeff: 2,
            chapters: [
              'Chapitre 1 : Prise d\'informations à distance (reconnaissance active, OSINT, énumération des services actifs)',
              'Chapitre 2 : Attaques à distance (exploitation des vulnérabilités, troyens, authentification par force brute)',
              'Chapitre 3 : Attaques systèmes locales (Bios, craquage de mot de passe, élévation de privilèges)',
              'Chapitre 4 : Se sécuriser (outils de base, pare-feu, détection d\'anomalies, anonymat)'
            ]
          },
          {
            name: 'Piratage Éthique et Défense des Systèmes',
            ue: 'Méthodologique (UEM)',
            vhs: '84h',
            credits: 4,
            coeff: 2,
            objectifs: 'Assimiler la méthodologie d\'audit de sécurité offensive (Pentesting) dans un cadre éthique et légal.',
            chapters: [
              'Chapitre 1 : Introduction et éthique, engagements et rapports de tests d\'intrusion',
              'Chapitre 2 : Reconnaissance (OSINT, balayage réseau avec Nmap, analyse des ports)',
              'Chapitre 3 : Doxing Google et piratage par ingénierie sociale',
              'Chapitre 4 : Exploitation de failles logicielles (buffer overflow, cadres d\'exploitation Metasploit)'
            ]
          },
          {
            name: 'DevOps & CI/CD',
            ue: 'Transversale (UET)',
            vhs: '42h',
            credits: 2,
            coeff: 1,
            chapters: [
              'Chapitre 1 : Intégration et Déploiement Continus (pipelines CI/CD, Jenkins, GitHub Actions)',
              'Chapitre 2 : Infrastructure as Code (IaC) et Conteneurisation (Docker, Kubernetes, Terraform, Ansible)'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          {
            name: 'Cryptographie et Sécurité',
            ue: 'Fondamentale (UEF)',
            vhs: '105h',
            credits: 5,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Chiffrement symétrique (Structures de Feistel, DES, AES, modes d\'opération)',
              'Chapitre 2 : Chiffrement de flux (registres LFSR, RC4, chiffrements par flots)',
              'Chapitre 3 : Cryptographie asymétrique (RSA, ElGamal, courbes elliptiques ECC, Merkle-Hellman)',
              'Chapitre 4 : Signature électronique et protocoles de gestion/échange de clés (Diffie-Hellman)'
            ]
          },
          {
            name: 'Sécurité Criminalistique des Bases de Données',
            ue: 'Fondamentale (UEF)',
            vhs: '105h',
            credits: 4,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Authentification et contrôle d\'accès des bases de données',
              'Chapitre 2 : Interrogation et requêtes sur données chiffrées',
              'Chapitre 3 : Audit de sécurité, détection d\'intrusions SQL, et analyse forensique des journaux SGBD'
            ]
          },
          {
            name: 'Réseaux Avancés et Sécurité',
            ue: 'Fondamentale (UEF)',
            vhs: '126h',
            credits: 5,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Paradigmes de communication (couches réseau, routage dynamique OSPF, BGP, IPv6)',
              'Chapitre 2 : Réseaux définis par logiciel (SDN, OpenFlow) et virtualisation des fonctions réseau (NFV)',
              'Chapitre 3 : Infrastructures de sécurité réseau (VLAN, VPN, WAF, pare-feu, IDPS, Zone Démilitarisée DMZ)',
              'Chapitre 4 : Politiques Zero Trust, solutions SIEM, gestion des vulnérabilités, et audits de conformité'
            ]
          },
          {
            name: 'Cybercriminalité',
            ue: 'Fondamentale (UEF)',
            vhs: '126h',
            credits: 4,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Fondements de la cybercriminalité (infractions d\'accès non autorisé dans le cyberespace)',
              'Chapitre 2 : Défis pour la justice pénale, juridictions transnationales, identification et suivi des preuves',
              'Chapitre 3 : Législation et lutte contre la cybercriminalité en Algérie et conventions internationales'
            ]
          },
          {
            name: 'Forensiques Multimédia et Sécurité',
            ue: 'Méthodologique (UEM)',
            vhs: '84h',
            credits: 4,
            coeff: 2,
            chapters: [
              'Chapitre 1 : Stéganographie et stéganalyse multimédia (dissimulation d\'informations)',
              'Chapitre 2 : Techniques de tatouage numérique (Watermarking) pour la protection des droits d\'auteur',
              'Chapitre 3 : Détection de modifications et falsifications dans les images, audios et séquences vidéos'
            ]
          },
          {
            name: 'Sécurité de l\'Internet des Objets (IoT)',
            ue: 'Méthodologique (UEM)',
            vhs: '84h',
            credits: 5,
            coeff: 2,
            chapters: [
              'Chapitre 1 : Contexte et protocoles de l\'IoT (architecture à couches)',
              'Chapitre 2 : Vulnérabilités et menaces sur les couches de perception et réseau de l\'IoT',
              'Chapitre 3 : Protocoles de sécurité légers et mécanismes d\'authentification IoT'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          {
            name: 'Sécurité des Systèmes d\'Exploitation',
            ue: 'Fondamentale (UEF)',
            vhs: '126h',
            credits: 4,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Sécurité logique des OS de bureau et mobiles (Linux, Windows, Android)',
              'Chapitre 2 : Administration et contrôle d\'accès (base de confiance UNIX, sous-système de sécurité Windows)',
              'Chapitre 3 : Mécanismes de protection de la mémoire, audit de sécurité et antivirus',
              'Chapitre 4 : Méthodes d\'évaluation de la sécurité, reprise après panne et plans de récupération'
            ]
          },
          {
            name: 'Virtualisation, Cloud Computing et Sécurité',
            ue: 'Fondamentale (UEF)',
            vhs: '126h',
            credits: 5,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Virtualisation (hyperviseurs, machines virtuelles, conteneurs, réseaux virtuels)',
              'Chapitre 2 : Modèles de services Cloud (IaaS, PaaS, SaaS) et architectures (Cloud privé, public, hybride)',
              'Chapitre 3 : Sécurité et confidentialité des données dans le Cloud (menaces, bonnes pratiques de chiffrement)'
            ]
          },
          {
            name: 'Authentification et Contrôle d\'Accès',
            ue: 'Fondamentale (UEF)',
            vhs: '126h',
            credits: 5,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Modèles d\'authentification et autorisation',
              'Chapitre 2 : Politiques de gestion des accès (DAC, MAC, RBAC basée sur les rôles, ORBAC basée sur l\'organisation)',
              'Chapitre 3 : Architectures de paiement électronique sécurisé (SET, 3D-Secure)'
            ]
          },
          {
            name: 'Sécurité des Applications Web et Mobiles',
            ue: 'Fondamentale (UEF)',
            vhs: '105h',
            credits: 4,
            coeff: 3,
            chapters: [
              'Chapitre 1 : Vulnérabilités et méthodes d\'attaque Web (OWASP Top 10, injections, XSS, CSRF)',
              'Chapitre 2 : Modèles de sécurité des navigateurs, protocole HTTPS, certificats SSL/TLS et politique CSP',
              'Chapitre 3 : Cookies, intégrité de session, sécurité XML, AJAX et sécurité des OS mobiles'
            ]
          },
          {
            name: 'Criminalistique Numérique (Digital Forensics)',
            ue: 'Méthodologique (UEM)',
            vhs: '105h',
            credits: 4,
            coeff: 2,
            chapters: [
              'Chapitre 1 : Forensique morte et forensique vivante (acquisition d\'images disques)',
              'Chapitre 2 : Analyse de la mémoire RAM (récupération de clés Wi-Fi, mots de passe, clés AES, processus)',
              'Chapitre 3 : Utilisation des outils logiciels de forensics (Autopsy, EnCase, Volatility)'
            ]
          },
          {
            name: 'Programmation et Sûreté des Systèmes Répartis',
            ue: 'Méthodologique (UEM)',
            vhs: '105h',
            credits: 5,
            coeff: 2,
            chapters: [
              'Chapitre 1 : Agents et systèmes multi-agents (SMA, standards FIPA)',
              'Chapitre 2 : Agents mobiles et contrôle des ressources (sécurité PGP)',
              'Chapitre 3 : Détection d\'intrusion distribuée et programmation parallèle (modèles PRAM, BSP, MPI)'
            ]
          }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          {
            name: 'Projet de Fin d\'Études (Mémoire & Stage)',
            ue: 'Fondamentale (UEF)',
            vhs: '750h',
            credits: 30,
            coeff: 18,
            chapters: [
              'Travail Pratique : Stage de 4 à 6 mois en entreprise ou en laboratoire de recherche, suivi de la rédaction d\'un mémoire de fin d\'études et d\'une soutenance orale devant un jury.'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ing-data-science',
    title: 'Diplôme d\'Ingénieur d\'État en Statistique et Ingénierie des Données (Data Science)',
    level: 'Ingénieur',
    department: 'Mathématiques',
    description: 'Un cursus d\'ingénieur d\'état d\'élite sur 5 ans (10 semestres) formant des experts de haut niveau en intelligence artificielle, science des données, actuariat, mathématiques financières et ingénierie de la donnée.',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          { name: 'Analyse (Suites, Intégration)', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : étude de fonctions, limites, intégration de Riemann, primitives'] },
          { name: 'Algèbre Linéaire et Matricielle', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 3, chapters: ['Syllabus d\'ingénieur : espaces vectoriels, matrices, déterminants, systèmes linéaires'] },
          { name: 'Statistique Descriptive 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 3, chapters: ['Syllabus d\'ingénieur : tableaux, graphiques, paramètres de position et de dispersion'] },
          { name: 'Calcul des Probabilités 1', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 3, chapters: ['Syllabus d\'ingénieur : axiomatique, variables aléatoires discrètes, lois usuelles'] },
          { name: 'Algorithmique et Python / R', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : bases du code informatique, structures conditionnelles, boucles, types de variables'] },
          { name: 'Bureautique et Outils de Données', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : initiation aux tableurs, outils de traitement et nettoyage'] }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          { name: 'Mathématiques 2 (Analyse & Algèbre)', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : séries numériques, espaces euclidiens, diagonalisation de matrices'] },
          { name: 'Probabilités 2 (Variables à densité)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Syllabus d\'ingénieur : variables aléatoires continues, couples aléatoires, théorèmes limites'] },
          { name: 'Statistique Descriptive 2', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 3, chapters: ['Syllabus d\'ingénieur : statistique bivariée, tableaux de contingence, corrélation et régression simple'] },
          { name: 'Informatique 2 (Python avancé)', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : structures de données avancées, introduction à NumPy et Pandas'] },
          { name: 'Logiciel Statistique (R)', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 2, coeff: 2, chapters: ['Syllabus d\'ingénieur : packages de visualisation de données, ggplot2'] }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          { name: 'Statistique Inférentielle 1', ue: 'Fondamentale (UEF)', vhs: '84h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : échantillonnage, estimation ponctuelle et par intervalles de confiance'] },
          { name: 'Modèle Linéaire Simple & ANOVA', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 3, chapters: ['Syllabus d\'ingénieur : régression linéaire simple, moindres carrés, analyse de la variance'] },
          { name: 'Probabilités 3 (Vecteurs Aléatoires)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : vecteurs aléatoires multidimensionnels, loi normale multivariée'] },
          { name: 'Optimisation Numérique', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : optimisation sans et avec contraintes, conditions de Karush-Kuhn-Tucker'] },
          { name: 'Analyse de Données Exploratoire (ACP)', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 5, coeff: 2, chapters: ['Syllabus d\'ingénieur : analyse en composantes principales, interprétation graphique (FactoMineR/Scikit-learn)'] },
          { name: 'Bases de Données Relationnelles (SQL)', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : conception de SGBD, requêtes SQL complexes, jointures et indexation'] }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          { name: 'Statistique Inférentielle 2 (Tests)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 3, chapters: ['Syllabus d\'ingénieur : théorie de Neyman-Pearson, tests paramétriques et non paramétriques'] },
          { name: 'Modèle Linéaire Multiple', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 3, chapters: ['Syllabus d\'ingénieur : moindres carrés ordinaires multidimensionnels, sélection de variables (AIC, BIC)'] },
          { name: 'Économétrie des Séries Temporelles', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Syllabus d\'ingénieur : stationnarité, fonction d\'autocorrélation, modèles ARIMA et SARIMA'] },
          { name: 'Recherche Opérationnelle', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Syllabus d\'ingénieur : programmation linéaire, méthode du Simplexe, théorie des graphes, PERT'] },
          { name: 'Analyse de Données 2 (Classification)', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 5, coeff: 3, chapters: ['Syllabus d\'ingénieur : analyse factorielle des correspondances (AFC, AFCM), classification hiérarchique'] }
        ]
      },
      {
        semesterName: 'Semestre 5',
        modules: [
          { name: 'Apprentissage Statistique (Machine Learning 1)', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 3, chapters: ['Syllabus d\'ingénieur : compromis biais-variance, validation croisée, k-NN, Naive Bayes, CART, Random Forests, Boosting'] },
          { name: 'Modèles Linéaires Généralisés (GLM)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Syllabus d\'ingénieur : famille exponentielle de lois, régression logistique, régression de Poisson'] },
          { name: 'Économétrie des Données de Panel', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Syllabus d\'ingénieur : dimension individuelle et temporelle, modèle à effets fixes et aléatoires'] },
          { name: 'Analyse de Survie', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : données censurées, estimateur de Kaplan-Meier, modèle à risques proportionnels de Cox'] },
          { name: 'Big Data & NoSQL', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 2, coeff: 2, chapters: ['Syllabus d\'ingénieur : écosystème Hadoop, MapReduce, Apache Spark (PySpark), bases NoSQL'] },
          { name: 'Deep Learning (Initiation)', ue: 'Méthodologique (UEM)', vhs: '21h', credits: 2, coeff: 2, chapters: ['Syllabus d\'ingénieur : réseaux multicouches, rétropropagation, construction de classifieurs sous Keras'] }
        ]
      },
      {
        semesterName: 'Semestre 6',
        modules: [
          { name: 'Stage d\'Insertion Professionnelle', ue: 'Fondamentale (UEF)', vhs: '4 à 6 mois', credits: 30, coeff: 20, chapters: ['Mise en pratique professionnelle de 4 à 6 mois en entreprise ou administration d\'analyse de données réelle'] }
        ]
      },
      {
        semesterName: 'Semestre 7',
        modules: [
          { name: 'Statistique Mathématique Avancée', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 5, coeff: 3, chapters: ['Syllabus d\'ingénieur : théorie de l\'information de Fisher, exhaustivité, théorème de Rao-Blackwell, minimax'] },
          { name: 'Processus Stochastiques', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Syllabus d\'ingénieur : chaînes de Markov, distribution stationnaire, processus de Poisson, martingales'] },
          { name: 'Analyse de Données Multidimensionnelle 2', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Syllabus d\'ingénieur : AFCM qualitative, analyse discriminante (ADL/ADQ), analyse canonique'] },
          { name: 'Optimisation Stochastique (Monte-Carlo)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 2, chapters: ['Syllabus d\'ingénieur : simulation par inversion, rejet, MCMC (Metropolis-Hastings, échantillonneur de Gibbs)'] },
          { name: 'Apprentissage Statistique 2 (Advanced ML)', ue: 'Méthodologique (UEM)', vhs: '42h', credits: 3, coeff: 2, chapters: ['Syllabus d\'ingénieur : Support Vector Machines (SVM), gradient boosting, stacking, deep learning avancée'] }
        ]
      },
      {
        semesterName: 'Semestre 8',
        modules: [
          { name: 'Économétrie des Variables Qualitatives', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 5, coeff: 5, chapters: ['Syllabus d\'ingénieur : modèles Logit et Probit binaires et multinomiaux, modèles de sélection de Heckman'] },
          { name: 'Calcul Stochastique & Finance', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : intégrale d\'Itô, modèle Black-Scholes pour l\'évaluation des options, hedging'] },
          { name: 'Apprentissage Profond (Deep Learning)', ue: 'Fondamentale (UEF)', vhs: '63h', credits: 6, coeff: 3, chapters: ['Syllabus d\'ingénieur : Perceptron multicouche, CNN, RNN (LSTM, GRU), mécanismes d\'Attention (Transformers)'] },
          { name: 'Séries Temporelles Non-Linéaires', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 4, coeff: 3, chapters: ['Syllabus d\'ingénieur : hétéroscédasticité conditionnelle (ARCH, GARCH, EGARCH), modèles à changement de régime'] },
          { name: 'Big Data (Spark et NoSQL avancés)', ue: 'Méthodologique (UEM)', vhs: '63h', credits: 5, coeff: 2, chapters: ['Syllabus d\'ingénieur : calcul distribué Spark SQL, Driver et Workers, intégration de pipelines'] }
        ]
      },
      {
        semesterName: 'Semestre 9 (Options)',
        modules: [
          { name: 'Analyse de Survie Avancée (Option A)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : modèle de Cox, résidus de Schoenfeld, modèles de fragilité'] },
          { name: 'Essais Cliniques (Option A)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : phases cliniques, randomisation, plans cross-over, intention de traiter'] },
          { name: 'Deep Learning & NLP (Option B)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : embeddings de mots, architectures BERT, modèles LLM/GPT, PyTorch/TensorFlow'] },
          { name: 'Architectures Big Data Spark (Option B)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : Spark MLlib, Spark Structured Streaming, stockage cloud (S3/Azure)'] },
          { name: 'Mathématiques Financières (Option C)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : valorisation de produits dérivés (forwards, futures, swaps), arbitrage AOA'] },
          { name: 'Gestion des Risques VaR (Option C)', ue: 'Fondamentale (UEF)', vhs: '42h', credits: 6, coeff: 4, chapters: ['Syllabus d\'ingénieur : Value-at-Risk, Expected Shortfall, simulation historique et Monte-Carlo'] }
        ]
      },
      {
        semesterName: 'Semestre 10',
        modules: [
          { name: 'Projet de Fin d\'Études de l\'Ingénieur (PFE)', ue: 'Fondamentale (UEF)', vhs: '420h', credits: 30, coeff: 20, chapters: ['Sujet de recherche appliquée de 6 mois sanctionné par la rédaction d\'un mémoire de fin d\'études d\'ingénieur et d\'une soutenance orale devant un jury composé d\'enseignants et de tuteurs professionnels.'] }
        ]
      }
    ]
  },
  {
    id: 'master-rsd',
    title: 'Master Réseaux et Systèmes Distribués (RSD)',
    level: 'Master',
    department: 'Informatique',
    description: 'Une formation académique avancée de référence formant des concepteurs et administrateurs d\'architectures réseaux, experts en virtualisation, cloud computing et interconnexion de systèmes complexes.',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          { name: 'Algorithmique Avancée et Complexité', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus RSD : complexité asymptotique, arbres AVL, Rouge-Noir, programmation dynamique, NP-complétude'] },
          { name: 'Bases de Données Avancées', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus RSD : architecture SGBD, SQL avancé, NoSQL (MongoDB, Cassandra), SGBD répartis'] },
          { name: 'Réseaux Avancés 1', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus RSD : protocoles applicatifs (HTTP, DNS, MQTT), multiplexage, protocoles de transport TCP/UDP/SCTP, routage IP'] },
          { name: 'Systèmes Distribués 1', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus RSD : middleware et abstraction, architectures client-serveur, P2P, microservices (Docker/Kubernetes), RPC, RMI'] },
          { name: 'Analyse de Données', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 4, coeff: 2, chapters: ['Syllabus RSD : exploration de données, ACP, ANOVA, classification supervisée et non supervisée'] },
          { name: 'Modélisation et Simulation des Réseaux', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus RSD : modélisation de performances, files d\'attente, réseaux de Petri, simulateurs NS2, OMNET++'] },
          { name: 'Introduction à l\'Internet des Objets (IoT)', ue: 'Transversale (UET)', vhs: '42h', credits: 2, coeff: 1, chapters: ['Syllabus RSD : capteurs et actionneurs, architectures IoT, protocoles IoT, Arduino, Raspberry Pi, Python'] }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          { name: 'Réseaux Avancés 2', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus RSD : protocoles IPv6 et ICMPv6, mobilité IP, Named Data Networking (NDN), réseaux locaux virtuels VLAN, routage inter-VLAN'] },
          { name: 'Réseaux Mobiles', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus RSD : réseaux de 2G à 5G, ondes et propagation, antennes, réseaux de capteurs sans fil, standard 6G'] },
          { name: 'Systèmes Distribués 2', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus RSD : algorithmes d\'élection, tolérance aux fautes (Paxos, Raft), cohérence et réplication, consensus, pub-sub'] },
          { name: 'Spécification et Vérification des Protocoles', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus RSD : méthode de spécification formelle, automates, réseaux de Petri, algèbres de processus LOTOS, model-checking'] },
          { name: 'Qualité des Services dans les Réseaux', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus RSD : critères de QoS (gigue, débit), scheduling, policing, congestion avoidance, DiffServ, IntServ, MPLS'] },
          { name: 'Machine Learning', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus RSD : pipeline d\'apprentissage en Python, régression logistique, SVM, arbres de décision, clustering, K-means'] }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          { name: 'Virtualisation, Cloud Computing et Sécurité', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus RSD : hyperviseurs, machines virtuelles, virtualisation de stockage et réseau, modèles IaaS/PaaS/SaaS, sécurité Cloud'] },
          { name: 'Développement d\'Applications Distribuées', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus RSD : programmation multithread, sockets TCP/UDP, middleware, RPC, Java RMI, CORBA, services Web (SOAP, REST)'] },
          { name: 'Cryptographie et Sécurité', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus RSD : chiffrement symétrique et asymétrique (AES, RSA), signatures électroniques, pare-feu, IDS/IPS, VPN, Zero Trust'] },
          { name: 'Administration des Systèmes et des Réseaux', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus RSD : administration Unix (Apache, NGINX, DNS, DHCP), conteneurisation Docker, Active Directory Windows, sécurité'] },
          { name: 'Méthodologies de Recherche', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus RSD : éthique scientifique, recherche bibliographique, LaTeX, structure d\'un rapport, soutenance'] },
          { name: 'Psychologie Cognitive', ue: 'Découverte (UED)', vhs: '42h', credits: 2, coeff: 1, chapters: ['Syllabus RSD : facteurs humains, interfaces homme-machine (IHM), expérience utilisateur, modélisation de l\'attention'] }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          { name: 'Projet de Fin d\'Études (Mémoire & Stage)', ue: 'Fondamentale (UEF)', vhs: '750h', credits: 30, coeff: 18, chapters: ['Stage en entreprise ou laboratoire de recherche, rédaction d\'un mémoire de master en LaTeX et soutenance orale.'] }
        ]
      }
    ]
  },
  {
    id: 'master-ia',
    title: 'Master Intelligence Artificielle (IA)',
    level: 'Master',
    department: 'Informatique',
    description: 'Une formation d\'excellence formant des spécialistes en intelligence artificielle générative, deep learning, traitement de la langue naturelle, vision artificielle, et systèmes multi-agents.',
    semesters: [
      {
        semesterName: 'Semestre 1',
        modules: [
          { name: 'Algorithmique Avancée et Complexité', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus IA : complexité asymptotique, structures avancées, diviser pour régner, programmation dynamique, NP-complétude'] },
          { name: 'Bases de Données Avancées', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus IA : transactions, indexation SQL, NoSQL, MongoDB, Neo4j, bases distribuées'] },
          { name: 'Représentation des Connaissances et Raisonnement', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus IA : logique des propositions et du premier ordre, réseaux sémantiques, ontologies, RDF, RDFS, OWL, raisonneurs'] },
          { name: 'Analyse de Données', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus IA : analyse exploratoire, ACP, AFC, AFCM, classification ascendante hiérarchique, séries chronologiques'] },
          { name: 'Méthodes d\'Optimisation', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 4, coeff: 2, chapters: ['Syllabus IA : optimisation continue, descente de gradient, Kuhn-Tucker, programmation linéaire, gradient stochastique (SGD)'] },
          { name: 'Réseaux Avancés', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus IA : protocoles TCP/IP, routage dynamique, VPN, sécurité réseau, pare-feu, QoS'] }
        ]
      },
      {
        semesterName: 'Semestre 2',
        modules: [
          { name: 'Deep Learning', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 6, coeff: 3, chapters: ['Syllabus IA : réseaux de neurones (ANN, CNN, RNN), rétropropagation, optimiseurs, frameworks Keras & TensorFlow'] },
          { name: 'Systèmes Multi-Agents', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus IA : agents réactifs et cognitifs, communication, coordination, Agentic AI, LLM-based MAS, standards FIPA'] },
          { name: 'Vision par Ordinateur', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus IA : traitement d\'image (filtres, contours), CNN avancés (ResNet, YOLO), transfert learning, Transformers (ViT)'] },
          { name: 'Gestion de l\'Incertain en IA', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus IA : inférence bayésienne, réseaux bayésiens, logique floue, théorie de Dempster-Shafer, incertitude'] },
          { name: 'Modélisation et Simulation', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus IA : modélisation de systèmes dynamiques, files d\'attente, simulateurs (SimPy, NetLogo, AnyLogic), Monte-Carlo'] },
          { name: 'Virtualisation et Cloud Computing', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 3, coeff: 2, chapters: ['Syllabus IA : hyperviseurs, machines virtuelles, conteneurs, IaaS/PaaS/SaaS, Docker, Kubernetes, sécurité Cloud'] }
        ]
      },
      {
        semesterName: 'Semestre 3',
        modules: [
          { name: 'Intelligence Artificielle Générative', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 6, coeff: 3, chapters: ['Syllabus IA : modèles génératifs (GAN, VAE), modèles de diffusion (StableDiffusion), LLM (GPT, LLaMA), fine-tuning'] },
          { name: 'Méta-Heuristiques et Algorithmes Évolutionnaires', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus IA : algorithmes génétiques, stratégies d\'évolution, recuit simulé, optimisation par essaim (PSO, ACO), PyGAD'] },
          { name: 'Apprentissage par Renforcement', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 5, coeff: 3, chapters: ['Syllabus IA : processus de décision de Markov (MDP), Q-Learning, Deep RL (DQN), DDPG, SAC, OpenAI Gym'] },
          { name: 'Reconnaissance des Formes', ue: 'Fondamentale (UEF)', vhs: '126h', credits: 4, coeff: 3, chapters: ['Syllabus IA : pipeline de reconnaissance, extraction de caractéristiques, classifieurs, Deep Learning, explicabilité SHAP/LIME'] },
          { name: 'Natural Language Processing (NLP)', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus IA : traitement du texte, embeddings, parsers, RNN, Transformers (BERT, GPT), fine-tuning, traduction, résumé'] },
          { name: 'Programmation par Contraintes', ue: 'Méthodologique (UEM)', vhs: '84h', credits: 5, coeff: 2, chapters: ['Syllabus IA : modélisation CSP, graphes de contraintes, solveurs (OR-Tools, MiniZinc), heuristiques de recherche'] }
        ]
      },
      {
        semesterName: 'Semestre 4',
        modules: [
          { name: 'Projet de Fin d\'Études (Mémoire & Stage)', ue: 'Fondamentale (UEF)', vhs: '750h', credits: 30, coeff: 18, chapters: ['PFE d\'analyse, conception et implémentation d\'une solution avancée d\'intelligence artificielle, rédaction d\'un mémoire LaTeX et soutenance.'] }
        ]
      }
    ]
  }
];


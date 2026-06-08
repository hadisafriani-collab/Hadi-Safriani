/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuranVerse {
  surah: string;
  verse: string;
  arabic: string;
  translation: string;
  tafsir: string;
}

export interface SubMateri {
  id: string;
  title: string;
  scientificExplanation: string;
  quranVerse: QuranVerse;
  scientificQuranConnection: string;
  facts: string[];
  suggestedIllustration: string;
  reflectionQuestion: string;
  infographicPoints: { title: string; desc: string }[];
}

export interface PBLAnswer {
  tahap1: string;
  tahap2Group: string;
  tahap2Analysis: string;
  tahap3Observation: string;
  tahap3Literature: string;
  tahap4SolutionType: "poster" | "infografis" | "kampanye" | "";
  tahap4Description: string;
  tahap5Reflection: string;
  completedStages: boolean[];
}

export interface HOTSQuestion {
  id: number;
  type: "analisis" | "evaluasi" | "kreasi";
  question: string;
  context: string;
  rubric: string;
  userAnswer?: string;
  modelAnswer: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  verseConnection?: string;
}

export interface PracticalJournal {
  lightIntensity: number; // 1 to 5 (Low to Ultra High)
  sodiumBicarb: number; // 0 to 5 g/L (CO2 concentration)
  temp: number; // 15 to 40 Celsius
  observations: {
    time: number; // seconds
    bubbles: number;
  }[];
  conclusions: string;
  submitted: boolean;
}

export interface GamificationState {
  points: number;
  unlockedBadges: string[]; // "Green_Pioneer", "Quran_Scholar", "Problem_Solver", "Biologist_Elite"
  dailyChallengeDays: boolean[]; // 7 days boolean
  schoolGreeningMissions: {
    id: string;
    title: string;
    desc: string;
    completed: boolean;
    points: number;
  }[];
}

export interface AssessmentState {
  pretestScore: number | null;
  pretestAnswers: number[];
  posttestScore: number | null;
  posttestAnswers: number[];
}

export interface RefleksiState {
  cognitive: number;
  affective: number;
  spiritual: number;
  environmental: number;
  notes: string;
  submitted: boolean;
}

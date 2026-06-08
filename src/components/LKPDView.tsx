/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { HOTS_QUESTIONS } from "../data/assessmentData";
import { ClipboardList, Filter, HelpCircle, FileCheck, Award, ThumbsUp } from "lucide-react";

interface LKPDViewProps {
  addPoints: (amount: number, badgeId?: string) => void;
  unlockedBadges: string[];
}

export default function LKPDView({ addPoints, unlockedBadges }: LKPDViewProps) {
  const [filterType, setFilterType] = useState<"all" | "analisis" | "evaluasi" | "kreasi">("all");
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [revealedAnswers, setRevealedAnswers] = useState<{ [key: number]: boolean }>({});
  const [selfScores, setSelfScores] = useState<{ [key: number]: number }>({});
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  const filtered = HOTS_QUESTIONS.filter((q) => {
    if (filterType === "all") return true;
    return q.type === filterType;
  });

  const handleAnswerChange = (qId: number, text: string) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const handleReveal = (qId: number) => {
    if (!userAnswers[qId]?.trim()) {
      alert("Harap ketik rancangan jawaban Anda terlebih dahulu sebelum melihat pembanding kelayakan.");
      return;
    }
    setRevealedAnswers((prev) => ({ ...prev, [qId]: true }));
  };

  const handleSelfGrade = (qId: number, score: number) => {
    setSelfScores((prev) => ({ ...prev, [qId]: score }));
    if (!completedQuestions.includes(qId)) {
      setCompletedQuestions((prev) => [...prev, qId]);
      addPoints(30); // Reward 30 XP for self-assessment of each HOTS question

      // Check if they graded 10 questions to unlock Biologist_Elite
      const updatedList = [...completedQuestions, qId];
      if (updatedList.length >= 10 && !unlockedBadges.includes("Biologist_Elite")) {
        addPoints(0, "Biologist_Elite");
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Topic Header banner */}
      <div className="p-6 rounded-2xl bg-linear-to-r from-emerald-950 to-teal-980 border border-emerald-500/10 space-y-2">
        <h2 className="font-sans font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
          <ClipboardList className="w-6 h-6 text-emerald-400" />
          LKPD Interaktif Berbasis HOTS (High Order Thinking Skills)
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-305 leading-relaxed text-left">
          Lembar Kerja Peserta Didik (LKPD) ini disusun searah dengan tuntutan Kurikulum Merdeka untuk melatih ketangkasan kognitif tingkat tinggi: 
          <span className="text-emerald-350 font-bold"> menganalisis fakta mendalam (C4), mengevaluasi kritis argumentasi (C5), serta mengkreasikan ide terpadu (C6)</span>.
        </p>
      </div>

      {/* Filter Tabs & Counters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-2 text-xs font-sans text-slate-400 font-bold">
          <Filter className="w-4 h-4 text-emerald-400" />
          <span>FOKUS KATEGORI:</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[
            { value: "all", label: "Semua (20)" },
            { value: "analisis", label: "Analisis - C4 (10)" },
            { value: "evaluasi", label: "Evaluasi - C5 (5)" },
            { value: "kreasi", label: "Kreasi - C6 (5)" }
          ].map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilterType(btn.value as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold cursor-pointer transition-all ${
                filterType === btn.value
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-900 text-slate-400 border border-slate-850 hover:bg-slate-800"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-emerald-400/80">
          Progres: <strong className="text-white font-bold">{completedQuestions.length}</strong> / 20 Soal Selesai
        </div>
      </div>

      {/* Question Card Scroll Area */}
      <div className="space-y-6">
        {filtered.map((q, idx) => {
          const isRevealed = revealedAnswers[q.id];
          const hasAnswered = (userAnswers[q.id] || "").trim().length > 10;
          const assignedScore = selfScores[q.id];

          return (
            <div
              key={q.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all space-y-4 ${
                assignedScore !== undefined
                  ? "bg-emerald-950/5 border-emerald-500/20"
                  : "bg-slate-900/45 border-slate-800"
              }`}
            >
              {/* Card Title Header */}
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-slate-850 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                    Soal {q.id}
                  </span>
                  <span className={`text-[10px] font-extrabold uppercase font-sans px-2.5 py-0.5 rounded-full ${
                    q.type === "analisis"
                      ? "bg-sky-500/10 text-sky-400 border border-sky-450/20"
                      : q.type === "evaluasi"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-450/20"
                      : "bg-pink-500/10 text-pink-400 border border-pink-450/20"
                  }`}>
                    {q.type}
                  </span>
                </div>

                {assignedScore !== undefined && (
                  <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <ThumbsUp className="w-3 h-3" />
                    <span>Nilai Anda: {assignedScore}</span>
                  </div>
                )}
              </div>

              {/* Context / Scenario Case */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-850 space-y-1">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold">Studi Kasus/Fenomena:</span>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed text-justify italic">
                  "{q.context}"
                </p>
              </div>

              {/* Core Question Prompts */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-wider block font-bold">Pertanyaan HOTS:</span>
                <p className="font-sans font-bold text-sm sm:text-base text-white leading-relaxed text-left">
                  {q.question}
                </p>
              </div>

              {/* Answer writing area */}
              <div className="space-y-2">
                <label className="font-sans text-xs text-slate-400 font-bold block">Tuliskan Argumentasi Analitis Anda:</label>
                <textarea
                  id={`lkpd-ans-${q.id}`}
                  disabled={isRevealed}
                  value={userAnswers[q.id] || ""}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  placeholder="Ketik uraian jawaban ilmiah terstruktur Anda di sini (minimal 10 karakter)..."
                  rows={4}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500 disabled:opacity-50"
                />
              </div>

              {/* Reveal control */}
              {!isRevealed ? (
                <button
                  id={`lkpd-reveal-${q.id}`}
                  onClick={() => handleReveal(q.id)}
                  className={`py-2 px-5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    hasAnswered
                      ? "bg-teal-500 hover:bg-teal-400 text-white"
                      : "bg-slate-950 text-slate-500 border border-slate-850 cursor-not-allowed"
                  }`}
                >
                  Bandingkan Jawaban Model & Rubrik Penilaian
                </button>
              ) : (
                <div className="space-y-4 animate-fade-in border-t border-slate-800 pt-4">
                  
                  {/* Model Answer Box */}
                  <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/20 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-teal-350 block font-mono">Contoh Jawaban Model Acuan (Sempurna):</span>
                    <p className="font-sans text-xs sm:text-sm text-slate-200 leading-relaxed text-justify">
                      {q.modelAnswer}
                    </p>
                  </div>

                  {/* Rubric guidelines */}
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-850 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Panduan Rubrik Penilaian Khusus:</span>
                    <pre className="font-sans text-xs text-slate-350 leading-relaxed whitespace-pre-wrap">
                      {q.rubric}
                    </pre>

                    {/* Self grading controls */}
                    <div className="border-t border-slate-900 pt-3 mt-1.5">
                      <span className="text-xs text-slate-300 font-bold block mb-2">Nilai Kejujuran Diri Anda (Self-Grading):</span>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { score: 100, label: "Skor Sempurna (100) — Jawaban mirip sempurna sesuai rincian rubrik" },
                          { score: 70, label: "Skor Sebagian (70) — Menjelaskan inti biologi tapi kurang integrasi ayat" },
                          { score: 40, label: "Skor Kerangka (40) — Hanya menulis teori dasar tanpa hubungan ilmiah" }
                        ].map((choice) => (
                          <button
                            key={choice.score}
                            onClick={() => handleSelfGrade(q.id, choice.score)}
                            className={`px-3 py-2 rounded-lg text-left text-xs font-sans transition-all cursor-pointer border ${
                              assignedScore === choice.score
                                ? "bg-emerald-500 border-emerald-400 text-white font-bold"
                                : "bg-slate-950 border-slate-850 text-slate-405 hover:bg-slate-900"
                            }`}
                          >
                            {choice.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

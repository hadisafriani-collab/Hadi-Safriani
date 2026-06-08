/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PRETEST_QUESTIONS, POSTTEST_QUESTIONS } from "../data/assessmentData";
import { Award, CheckCircle, AlertCircle, FileText, RefreshCw, Trophy, ShieldCheck } from "lucide-react";

interface AsesmenViewProps {
  pretestScore: number | null;
  posttestScore: number | null;
  onUpdateScores: (pre: number | null, post: number | null) => void;
  addPoints: (amount: number, badgeId?: string) => void;
  unlockedBadges: string[];
}

export default function AsesmenView({
  pretestScore,
  posttestScore,
  onUpdateScores,
  addPoints,
  unlockedBadges
}: AsesmenViewProps) {
  const [testType, setTestType] = useState<"pretest" | "posttest" | null>(null);
  const [currentQIdx, setCurrentQIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  
  // Student identifier for certificate
  const [studentName, setStudentName] = useState<string>("");
  const [showCert, setShowCert] = useState<boolean>(false);

  const questions = testType === "pretest" ? PRETEST_QUESTIONS : POSTTEST_QUESTIONS;

  const handleSelectOption = (optIdx: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQIdx]: optIdx
    }));
  };

  const handleNext = () => {
    if (selectedAnswers[currentQIdx] === undefined) {
      alert("Harap pilih salah satu jawaban terlebih dahulu sebelum melanjutkan!");
      return;
    }
    if (currentQIdx < questions.length - 1) {
      setCurrentQIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQIdx > 0) {
      setCurrentQIdx((prev) => prev - 1);
    }
  };

  const handleSubmitTest = () => {
    if (selectedAnswers[currentQIdx] === undefined) {
      alert("Harap pilih jawaban untuk pertanyaan terakhir!");
      return;
    }

    // Double check full coverage
    const unanswered = questions.filter((_, idx) => selectedAnswers[idx] === undefined);
    if (unanswered.length > 0) {
      alert(`Anda belum menjawab semua soal! Harap periksa kembali.`);
      return;
    }

    // Grade
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const finalPercentValue = Math.round((correctCount / questions.length) * 100);
    setCurrentScore(finalPercentValue);
    setIsSubmitted(true);

    if (testType === "pretest") {
      onUpdateScores(finalPercentValue, posttestScore);
      addPoints(100); // Reward 100 XP for completing Pretest
    } else {
      onUpdateScores(pretestScore, finalPercentValue);
      addPoints(150); // Reward 150 XP for completing Posttest
      
      // Special gift for scoring high on posttest
      if (finalPercentValue >= 80) {
        addPoints(150); // Additional +150 XP!
      }
    }
  };

  const resetTest = () => {
    setSelectedAnswers({});
    setCurrentQIdx(0);
    setIsSubmitted(false);
    setCurrentScore(null);
    setTestType(null);
    setShowCert(false);
  };

  return (
    <div className="space-y-8">
      {/* Selector mode */}
      {testType === null ? (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-linear-to-r from-emerald-950 via-teal-980 to-slate-950 border border-emerald-500/15 text-center space-y-4">
            <h2 className="font-sans font-black text-2xl text-white">Evaluasi & Asesmen Terintegrasi</h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Asesmen ini mengukur pemahaman saintifik Biologi Plantae dan korelasi hikmah Al-Qur'an. Terdiri dari <strong>Pretest</strong> (sebelum studi) dan <strong>Posttest</strong> (sesudah studi) berisi 20 Soal Pilihan Ganda berbobot analisis tinggi.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-4">
              {/* Pretest container */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-left flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-sans font-bold text-slate-250 text-sm">Pretest Mandiri</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Ukur kemampuan awal sebelum mendalami 8 submateri integratif.</p>
                </div>
                {pretestScore !== null ? (
                  <div className="text-xs text-emerald-450 font-mono font-bold bg-emerald-500/10 px-2 py-1 rounded">
                    Selesai: Nilai {pretestScore}
                  </div>
                ) : (
                  <button
                    id="btn-start-pretest"
                    onClick={() => { setTestType("pretest"); setCurrentQIdx(0); }}
                    className="w-full py-2 bg-slate-950 hover:bg-slate-800 text-xs text-emerald-400 border border-emerald-500/20 rounded font-bold cursor-pointer"
                  >
                    Mulai Pretest
                  </button>
                )}
              </div>

              {/* Posttest container */}
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 text-left flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-sans font-bold text-slate-250 text-sm">Posttest Komprehensif</h4>
                  <p className="text-[11px] text-slate-400 mt-1">Evaluasi hasil belajar pascapembelajaran komplit.</p>
                </div>
                {posttestScore !== null ? (
                  <div className="space-y-2">
                    <div className="text-xs text-emerald-450 font-mono font-bold bg-emerald-500/10 px-2 py-1 rounded text-center">
                      Selesai: Nilai {posttestScore}
                    </div>
                    {posttestScore >= 80 && (
                      <button
                        id="btn-show-cert"
                        onClick={() => { setTestType("posttest"); setIsSubmitted(true); setCurrentScore(posttestScore); setShowCert(true); }}
                        className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-xs text-white rounded font-bold cursor-pointer"
                      >
                        Lihat Sertifikat ✓
                      </button>
                    )}
                  </div>
                ) : (
                  <button
                    id="btn-start-posttest"
                    onClick={() => { setTestType("posttest"); setCurrentQIdx(0); }}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-xs text-white rounded font-bold cursor-pointer"
                  >
                    Mulai Posttest
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : isSubmitted ? (
        // SHOW PERFORMANCE RESULTS & OPTIONAL CERTIFICATE
        <div className="space-y-6">
          {showCert ? (
            // CERTIFICATE CARD
            <div id="certificate-panel" className="p-8 sm:p-12 text-center border-8 border-double border-emerald-500/30 rounded-3xl bg-slate-950 max-w-2xl mx-auto space-y-6 relative shadow-2xl">
              {/* Seal decor */}
              <div className="absolute top-4 right-4 text-emerald-500 opacity-20 text-6xl">🕌</div>
              
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest text-emerald-400 block p-0.5 border-b border-emerald-500/20 max-w-xs mx-auto">
                  SERtIFIKAT KEHORtAN AKADEMIK
                </span>
                <h1 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight pt-3">E-Modul Sains & Al-Qur'an</h1>
              </div>

              <div className="py-6 space-y-4">
                <span className="text-xs font-sans text-slate-400 italic block">Sertifikat kelulusan ini sah dianugerahkan kepada:</span>
                
                {/* Editable name */}
                {studentName === "" ? (
                  <div className="max-w-xs mx-auto space-y-2">
                    <input
                      id="input-cert-name"
                      type="text"
                      placeholder="Masukkan nama lengkap Anda..."
                      onBlur={(e) => setStudentName(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") setStudentName(e.currentTarget.value); }}
                      className="w-full p-2 rounded bg-slate-900 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-emerald-500 text-center"
                    />
                    <span className="text-[9px] text-slate-500 font-mono block">Ketik nama lalu klik simpan untuk mengunci sertifikat</span>
                  </div>
                ) : (
                  <h2 className="text-2xl font-serif font-bold text-emerald-400 border-b border-dashed border-emerald-500/20 pb-2 max-w-sm mx-auto">
                    {studentName}
                  </h2>
                )}

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
                  Mampu melampaui seluruh indikator kognitif, kompetensi berpikir kritis, dan kepedulian lingkungan bertema <strong className="text-white">"Dunia Tumbuhan (Plantae) Berbasis Al-Qur'an"</strong> dengan perolehan hasil Posttest bernilai:
                </p>

                <div className="w-20 h-20 rounded-full border-4 border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center mx-auto shadow-inner">
                  <span className="font-mono text-2xl font-black text-emerald-400">{currentScore}%</span>
                </div>
              </div>

              <div className="flex justify-between items-end text-left pt-6 border-t border-slate-900 text-[10px] font-mono text-slate-400">
                <div>
                  <span className="block font-bold">Tim Pakar Sains Al-Qur'an</span>
                  <span className="block text-slate-500">Kekhalifahan Ekologi Akademik</span>
                </div>
                <div className="text-right">
                  <span className="block">ID: CERT-PLA-{Math.floor(1000 + Math.random() * 9000)}</span>
                  <span className="block text-slate-550">Tgl: {new Date().toLocaleDateString("id-ID")}</span>
                </div>
              </div>

              <div className="pt-4 flex gap-2">
                <button
                  id="btn-cert-back"
                  onClick={() => setShowCert(false)}
                  className="flex-1 py-2 text-xs font-bold rounded bg-slate-900 hover:bg-slate-800 text-slate-350 border border-slate-850 cursor-pointer"
                >
                  Lihat Rincian Jawaban
                </button>
                <button
                  id="btn-cert-print"
                  onClick={() => window.print()}
                  className="flex-1 py-2 text-xs font-bold rounded bg-emerald-500 hover:bg-emerald-400 text-white cursor-pointer"
                >
                  Cetak / Simpan PDF 🖨️
                </button>
              </div>
            </div>
          ) : (
            // SCORE SUMMARY SCREEN
            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-6">
              <div className="text-center space-y-2">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto animate-bounce" />
                <h3 className="font-sans font-extrabold text-xl text-white">Evaluasi Selesai Dirilis</h3>
                <p className="font-sans text-xs text-slate-400">
                  Uji komprehensif Anda berhasil dinilai secara otomatis oleh motor silabus akademik.
                </p>

                <div className="p-4 bg-slate-950 max-w-xs mx-auto rounded-xl border border-slate-850 font-mono">
                  <span className="text-[10px] text-slate-400 block font-bold">NILAI AKHIR ANDA:</span>
                  <span className="text-4xl font-black text-emerald-405">{currentScore}%</span>
                  <span className="text-[9px] text-slate-500 block mt-1">E-Modul Plantae (Target: 75% KKM)</span>
                </div>
              </div>

              {/* Conditionally show Cert button for high scores in Posttest */}
              {testType === "posttest" && currentScore !== null && currentScore >= 80 && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 max-w-md mx-auto space-y-2.5 text-center">
                  <p className="text-xs text-slate-200">
                    Selamat, Nilai Anda melampaui ketentuan KKM 80%! Klaim sertifikat tanda kehormatan akademik Anda sekarang:
                  </p>
                  <button
                    id="btn-claim-cert"
                    onClick={() => setShowCert(true)}
                    className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold rounded cursor-pointer"
                  >
                    Klaim & Isi Sertifikat Kelulusan
                  </button>
                </div>
              )}

              {/* Explanatory Review Sheet of incorrect answers */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider block">Kunci Penjelasan Saintifik Terbuka</span>
                <div className="space-y-3.5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar text-justify">
                  {questions.map((q, idx) => {
                    const ansSelected = selectedAnswers[idx];
                    const isCorrect = ansSelected === q.correctAnswer;
                    return (
                      <div key={q.id} className={`p-4 rounded-xl border text-xs font-sans space-y-2 ${
                        isCorrect ? "bg-slate-950/20 border-slate-900" : "bg-red-950/15 border-red-500/15"
                      }`}>
                        <div className="flex gap-2 items-center font-bold">
                          {isCorrect ? (
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                          )}
                          <span className="text-white">Soal {q.id}: {q.question.substring(0, 75)}...</span>
                        </div>
                        <p className="text-slate-300">
                          <strong>Pilihan Anda:</strong> {q.options[ansSelected]} 
                          {!isCorrect && <span className="text-red-400 ml-1.5">(Salah • Acuan Benar: {q.options[q.correctAnswer]})</span>}
                        </p>
                        <p className="text-slate-400 text-[11px] leading-relaxed italic">
                          <strong>Penjelasan Biologi-Qur'an:</strong> {q.explanation}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex gap-3 text-xs justify-center">
                <button
                  id="btn-reset-quiz"
                  onClick={resetTest}
                  className="px-4 py-2 bg-slate-950 border border-slate-850 rounded text-slate-300 font-bold hover:bg-slate-900 cursor-pointer"
                >
                  Halaman Depan Asesmen
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        // SHOW CAROUSEL QUESTION CARDS
        <div className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest font-mono">
              Running Stage: {testType === "pretest" ? "Pretest Mandiri" : "Posttest Komprehensif"} 
            </span>
            <span className="text-xs font-mono text-slate-400">
              Pertanyaan <strong className="text-white font-bold">{currentQIdx + 1}</strong> dari 20
            </span>
          </div>

          {/* Core Card of Question */}
          <div className="space-y-4">
            <span className="w-5 h-5 rounded bg-slate-950 text-slate-300 font-mono text-xs flex items-center justify-center font-bold">
              ?
            </span>
            <p className="font-sans font-bold text-base sm:text-lg text-white leading-relaxed text-left">
              {questions[currentQIdx].question}
            </p>
          </div>

          {/* Multiple options radios */}
          <div className="space-y-2.5">
            {questions[currentQIdx].options.map((opt, idx) => {
              const alphabet = ["A", "B", "C", "D"];
              const isSelected = selectedAnswers[currentQIdx] === idx;
              return (
                <button
                  key={idx}
                  id={`q-${currentQIdx}-opt-${idx}`}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-sans transition-all flex gap-3 cursor-pointer border ${
                    isSelected
                      ? "bg-emerald-500 text-white border-emerald-400 shadow-md font-semibold"
                      : "bg-slate-950 border-slate-850 hover:bg-slate-900 text-slate-205"
                  }`}
                >
                  <span className={`w-5 h-5 shrink-0 rounded-full font-bold text-[10px] flex items-center justify-center border ${
                    isSelected ? "bg-white text-emerald-600 border-white" : "bg-slate-900 text-slate-400 border-slate-850"
                  }`}>
                    {alphabet[idx]}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {/* Carousel footer buttons */}
          <div className="flex justify-between items-center border-t border-slate-800 pt-5">
            <button
              id="quiz-prev"
              onClick={handlePrev}
              disabled={currentQIdx === 0}
              className="px-4 py-2 rounded bg-slate-950 border border-slate-850 text-slate-355 text-xs font-bold hover:bg-slate-900 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Pengujian Sebelumnya
            </button>
            <div className="flex gap-2">
              <button
                id="quiz-leave"
                onClick={() => setTestType(null)}
                className="px-4 py-2 rounded bg-slate-950 border border-red-500/15 text-red-405 text-xs font-bold hover:bg-slate-900 cursor-pointer"
              >
                Tunda Uji
              </button>
              {currentQIdx < questions.length - 1 ? (
                <button
                  id="quiz-next"
                  onClick={handleNext}
                  className="px-5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold cursor-pointer"
                >
                  Pertanyaan Berikutnya →
                </button>
              ) : (
                <button
                  id="quiz-finish"
                  onClick={handleSubmitTest}
                  className="px-6 py-2 rounded bg-linear-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white text-xs font-bold cursor-pointer"
                >
                  Kirim Jawaban Asesmen
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

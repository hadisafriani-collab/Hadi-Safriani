/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { GamificationState } from "../types";
import { Award, CheckCircle2, Flame, Sprout, Calendar, TreePine, Leaf } from "lucide-react";

interface GamifikasiViewProps {
  state: GamificationState;
  onUpdateState: (updated: Partial<GamificationState>) => void;
  addPoints: (amount: number, badgeId?: string) => void;
}

export default function GamifikasiView({
  state,
  onUpdateState,
  addPoints
}: GamifikasiViewProps) {
  const [activeSubTab, setActiveSubTab] = useState<"badges" | "challenge" | "missions">("badges");

  // 7-day challenge titles
  const challengesDays = [
    { day: 1, title: "Hemat Konsumsi Air Berkah", desc: "Matikan keran air wastafel sekolah segera seusai wudhu demi kelestarian groundwater." },
    { day: 2, title: "Asimilasi Penyiraman Tumbuhan", desc: "Siram tanaman pot atau kebun depan kelas menggunakan sisa air minum murni Anda." },
    { day: 3, title: "Lantunan Ayat Khadhiran", desc: "Renungkan kembali firman Allah QS. Al-An'am ayat 99 tentang struktur molekul hijau kloroplas." },
    { day: 4, title: "Biopori Mini Pot Flora", desc: "Gemburkan atau tusuk tanah pot rumah/sekolah agar pori tanah mampu menyerap oksigen lateral." },
    { day: 5, title: "Diet Plastik Kantin Kolektif", desc: "Gunakan tumbler atau kotak bekal guna meminimalkan timbunan polusi tanah yang mematikan cacing hara." },
    { day: 6, title: "Diskusi Sains Integratif", desc: "Ceritakan pada teman sebangku atau orang tua tentang kesamaan struktur darah manusia dengan zat klorofil tanaman." },
    { day: 7, title: "Bibit Penghijauan Mandiri", desc: "Beli dan tanam satu bibit tumbuhan (cabai, tomat, atau sansiviera) di pekarangan Anda." }
  ];

  const handleChallengeCheck = (dayIdx: number) => {
    if (state.dailyChallengeDays[dayIdx]) return; // Already done

    const updatedChallengeVec = [...state.dailyChallengeDays];
    updatedChallengeVec[dayIdx] = true;

    onUpdateState({ dailyChallengeDays: updatedChallengeVec });
    addPoints(40); // Reward +40 XP for completing a daily challenge!
  };

  const handleMissionComplete = (missionId: string, pointsGift: number) => {
    const updatedMissions = state.schoolGreeningMissions.map((m) => {
      if (m.id === missionId) return { ...m, completed: true };
      return m;
    });

    onUpdateState({ schoolGreeningMissions: updatedMissions });
    addPoints(pointsGift); // Reward points!
  };

  const badgesMap = [
    {
      id: "Quran_Scholar",
      title: "Cendekiawan Tafsir",
      desc: "Diberikan setelah menuliskan refleksi spiritual-sains pada modul pembelajaran.",
      icon: "📖",
      color: "from-blue-600 to-indigo-500",
      req: "Tulis & kirim satu draf refleksi sains Al-Qur'an."
    },
    {
      id: "Green_Pioneer",
      title: "Pelopor Penghijauan",
      desc: "Diraih setelah merampungkan simulasi laboratorium Ingenhousz & mengirimkan draf jurnal.",
      icon: "🌱",
      color: "from-emerald-600 to-teal-500",
      req: "Selesaikan uji lab fotosintesis & kesimpulan."
    },
    {
      id: "Problem_Solver",
      title: "Pemecah Masalah",
      desc: "Diberikan setelah melengkapi kelima bab sintaks Problem Based Learning.",
      icon: "🧩",
      color: "from-amber-600 to-orange-500",
      req: "Isi dan kunci seluruh 5 bab draf kerja PBL."
    },
    {
      id: "Biologist_Elite",
      title: "Ilmuwan Biologi",
      desc: "Diraih setelah menyelesaikan dan menilai mandiri seluruh 20 pertanyaan HOTS di LKPD.",
      icon: "🔬",
      color: "from-violet-600 to-purple-500",
      req: "Grading mandiri 10+ soal analisis LKPD."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Topic header banner */}
      <div className="p-6 rounded-2xl bg-linear-to-r from-emerald-950 to-teal-980 border border-emerald-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="font-sans font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-400 animate-bounce" />
            Pusat Gamifikasi & Misi Ekologis
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed text-left">
            Belajar sains tidak harus tegang! Kejar XP setinggi mungkin, Claim Badge prestasi akademik, selesaikan <strong>Tantangan Hijau 7 Hari</strong>, dan pimpin <strong>Misi Penghijauan Sekolah</strong> Anda.
          </p>
        </div>

        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-center shrink-0 min-w-[140px]">
          <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Tabungan Skor</span>
          <span className="text-2xl font-black text-emerald-400 font-mono block animate-pulse">{state.points} XP</span>
          <span className="text-[9px] text-slate-500">Makin Tinggi, Makin Mulia</span>
        </div>
      </div>

      {/* Selector Controls */}
      <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-850 gap-2">
        <button
          onClick={() => setActiveSubTab("badges")}
          className={`flex-1 py-1.5 text-xs font-sans font-bold rounded-lg transition-all cursor-pointer ${
            activeSubTab === "badges" ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-slate-300"
          }`}
        >
          Lencana Penghargaan
        </button>
        <button
          onClick={() => setActiveSubTab("challenge")}
          className={`flex-1 py-1.5 text-xs font-sans font-bold rounded-lg transition-all cursor-pointer ${
            activeSubTab === "challenge" ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-slate-300"
          }`}
        >
          Daily Challenge (7 Hari)
        </button>
        <button
          onClick={() => setActiveSubTab("missions")}
          className={`flex-1 py-1.5 text-xs font-sans font-bold rounded-lg transition-all cursor-pointer ${
            activeSubTab === "missions" ? "bg-emerald-500 text-white" : "text-slate-400 hover:text-slate-300"
          }`}
        >
          Misi Penghidupan Sekolah
        </button>
      </div>

      {/* Render Sub Panels */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
        
        {/* TAB 1: BADGES */}
        {activeSubTab === "badges" && (
          <div className="space-y-6">
            <h3 className="font-sans font-extrabold text-base sm:text-lg text-white border-b border-slate-850 pb-2">
              Lencana & Sertifikasi Kemampuan Siswa
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {badgesMap.map((badge) => {
                const isUnlocked = state.unlockedBadges.includes(badge.id);
                return (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-xl border transition-all flex gap-4 pr-6 relative ${
                      isUnlocked
                        ? "bg-slate-950 border-emerald-500/20 shadow-md"
                        : "bg-slate-950/40 border-slate-900 opacity-60"
                    }`}
                  >
                    {/* Badge Icon */}
                    <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-3xl shadow-inner bg-linear-to-br ${
                      isUnlocked ? badge.color : "from-slate-800 to-slate-900"
                    }`}>
                      {badge.icon}
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-sans font-bold text-white text-sm sm:text-base leading-tight">
                          {badge.title}
                        </h4>
                        {isUnlocked ? (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            Terbuka
                          </span>
                        ) : (
                          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                            Terkunci
                          </span>
                        )}
                      </div>
                      
                      <p className="font-sans text-xs text-slate-300 leading-relaxed">
                        {badge.desc}
                      </p>

                      <div className="text-[10px] text-slate-501 font-mono">
                        Syarat: <span className="text-teal-400 italic">{badge.req}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: DAILY CHALLENGE */}
        {activeSubTab === "challenge" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-850 pb-2">
              <h3 className="font-sans font-extrabold text-base sm:text-lg text-white">
                Tantangan Karakter Ramah Lingkungan (7-Day Green Challenge)
              </h3>
              <div className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Calendar className="w-4 h-4 text-emerald-450" />
                <span>Format: Agenda Pembiasaan</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              Profil Pelajar Pancasila mengamanatkan kepedulian lingkungan nyata. Klik tombol <strong>"Konfirmasi Selesai"</strong> setelah Anda jujur merampungkan aktivitas ramah lingkungan di bawah ini pada hari terkait untuk meraih tambahan <span className="text-emerald-400 font-bold">+40 XP</span> per hari:
            </p>

            <div className="space-y-3.5 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
              {challengesDays.map((c, idx) => {
                const isCompleted = state.dailyChallengeDays[idx];
                return (
                  <div
                    key={c.day}
                    className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isCompleted ? "bg-emerald-950/10 border-emerald-500/25" : "bg-slate-950/40 border-slate-850"
                    }`}
                  >
                    <div className="flex gap-3 items-start">
                      <div className={`w-8 h-8 shrink-0 rounded-full font-mono font-bold text-xs flex items-center justify-center ${
                        isCompleted ? "bg-emerald-500 text-white" : "bg-slate-900 text-slate-400 border border-slate-800"
                      }`}>
                        H{c.day}
                      </div>

                      <div className="space-y-0.5">
                        <h4 className="font-sans font-bold text-white text-xs sm:text-sm leading-tight">
                          {c.title}
                        </h4>
                        <p className="font-sans text-xs text-slate-300 leading-relaxed max-w-xl">
                          {c.desc}
                        </p>
                      </div>
                    </div>

                    <button
                      id={`btn-challenge-day${c.day}`}
                      onClick={() => handleChallengeCheck(idx)}
                      disabled={isCompleted}
                      className={`px-4 py-2 rounded-lg text-xs font-sans font-bold transition-all cursor-pointer ${
                        isCompleted
                          ? "bg-emerald-500/15 text-emerald-405 border border-emerald-500/30 font-semibold cursor-not-allowed"
                          : "bg-emerald-500 hover:bg-emerald-400 text-white"
                      }`}
                    >
                      {isCompleted ? "Selesai ✓" : "Saya Sudah Melakukan"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: GREENING MISSIONS */}
        {activeSubTab === "missions" && (
          <div className="space-y-6">
            <h3 className="font-sans font-extrabold text-base sm:text-lg text-white border-b border-slate-850 pb-2">
              Papan Misi Penyelamatan & Penghijauan Sekolah
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed">
              Misi ini dilakukan bersama rekan kelompok satu kelas Anda. Klik selesaikan ketika guru atau ketua kelompok mengesahkan aksi kolektif sekolah berikut:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {state.schoolGreeningMissions.map((m) => (
                <div
                  key={m.id}
                  className={`p-4 rounded-xl border flex flex-col justify-between gap-4 ${
                    m.completed
                      ? "bg-emerald-990/5 border-emerald-500/15 opacity-80"
                      : "bg-slate-950 border-slate-850"
                  }`}
                >
                  <div className="space-y-1.5 flex gap-3">
                    <TreePine className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-white text-xs sm:text-sm leading-tight">{m.title}</h4>
                      <p className="font-sans text-xs text-slate-300 leading-relaxed mt-0.5">{m.desc}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-900 pt-3 mt-1 text-xs">
                    <span className="font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/15">
                      +{m.points} XP
                    </span>

                    <button
                      id={`btn-mission-${m.id}`}
                      onClick={() => handleMissionComplete(m.id, m.points)}
                      disabled={m.completed}
                      className={`px-3 py-1.5 text-[10px] sm:text-xs font-sans font-bold rounded-md transition-all cursor-pointer ${
                        m.completed
                          ? "bg-slate-900 text-slate-500 cursor-not-allowed border border-slate-850"
                          : "bg-emerald-500 hover:bg-emerald-400 text-white"
                      }`}
                    >
                      {m.completed ? "Sukses Dirilis ✓" : "Sahkan Penyelesaian"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  BookOpen,
  ChevronRight,
  Menu,
  X,
  Star,
  Award,
  Bookmark,
  HelpCircle,
  FileCheck2,
  TreeDeciduous,
  BookMarked
} from "lucide-react";

// Components
import Cover from "./components/Cover";
import {
  KataPengantar,
  PetunjukPenggunaan,
  CapaianTujuan,
  PetaKonsep,
  Glosarium,
  DaftarPustaka
} from "./components/OtherPages";
import MateriView from "./components/MateriView";
import PBLWorkbook from "./components/PBLWorkbook";
import LKPDView from "./components/LKPDView";
import PraktikumView from "./components/PraktikumView";
import GamifikasiView from "./components/GamifikasiView";
import RefleksiView from "./components/RefleksiView";
import AsesmenView from "./components/AsesmenView";

// Types
import { PBLAnswer, PracticalJournal, GamificationState, RefleksiState } from "./types";

export default function App() {
  const [showCover, setShowCover] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("kata-pengantar");
  const [materiIdx, setMateriIdx] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // --- STATE PERSISTENCE IN LOCAL STORAGE ---
  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem("plantae_xp_points");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(() => {
    const saved = localStorage.getItem("plantae_badges");
    return saved ? JSON.parse(saved) : [];
  });

  const [dailyChallenges, setDailyChallenges] = useState<boolean[]>(() => {
    const saved = localStorage.getItem("plantae_days_vector");
    return saved ? JSON.parse(saved) : Array(7).fill(false);
  });

  const [missions, setMissions] = useState<any[]>(() => {
    const saved = localStorage.getItem("plantae_missions");
    return saved
      ? JSON.parse(saved)
      : [
          { id: "mission-1", title: "Kampanye Shadaqah Hijau", desc: "Ajak 10 siswa kelas lain menanam biji dalam botol mineral bekas.", completed: false, points: 100 },
          { id: "mission-2", title: "Katalog Keanekaragaman", desc: "Identifikasi & beri label binomial nama latin 15 pohon sekolah.", completed: false, points: 120 },
          { id: "mission-3", title: "Pahlawan Sampah Organik", desc: "Suplai dedaunan kering sapuan lapangan langsung ke lubang biopori sekolah.", completed: false, points: 80 },
          { id: "mission-4", title: "Audit Sumber Air Hidrolis", desc: "Laporkan ke guru jika melihat pipa air bocor di area sanitasi sekolah.", completed: false, points: 60 }
        ];
  });

  const [pblAnswers, setPblAnswers] = useState<PBLAnswer>(() => {
    const saved = localStorage.getItem("plantae_pbl_workbook");
    return saved
      ? JSON.parse(saved)
      : {
          tahap1: "",
          tahap2Group: "",
          tahap2Analysis: "",
          tahap3Observation: "",
          tahap3Literature: "",
          tahap4SolutionType: "",
          tahap4Description: "",
          tahap5Reflection: "",
          completedStages: Array(5).fill(false)
        };
  });

  const [journal, setJournal] = useState<PracticalJournal>(() => {
    const saved = localStorage.getItem("plantae_practical_journal");
    return saved
      ? JSON.parse(saved)
      : {
          lightIntensity: 3,
          sodiumBicarb: 2,
          temp: 25,
          observations: [],
          conclusions: "",
          submitted: false
        };
  });

  const [pretestScore, setPretestScore] = useState<number | null>(() => {
    const saved = localStorage.getItem("plantae_pretest_score");
    return saved ? (saved === "null" ? null : parseInt(saved, 10)) : null;
  });

  const [posttestScore, setPosttestScore] = useState<number | null>(() => {
    const saved = localStorage.getItem("plantae_posttest_score");
    return saved ? (saved === "null" ? null : parseInt(saved, 10)) : null;
  });

  const [reflection, setReflection] = useState<RefleksiState>(() => {
    const saved = localStorage.getItem("plantae_reflection");
    return saved
      ? JSON.parse(saved)
      : {
          cognitive: 3,
          affective: 3,
          spiritual: 3,
          environmental: 3,
          notes: "",
          submitted: false
        };
  });

  // Effect syncers
  useEffect(() => {
    localStorage.setItem("plantae_xp_points", points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem("plantae_badges", JSON.stringify(unlockedBadges));
  }, [unlockedBadges]);

  useEffect(() => {
    localStorage.setItem("plantae_days_vector", JSON.stringify(dailyChallenges));
  }, [dailyChallenges]);

  useEffect(() => {
    localStorage.setItem("plantae_missions", JSON.stringify(missions));
  }, [missions]);

  useEffect(() => {
    localStorage.setItem("plantae_pbl_workbook", JSON.stringify(pblAnswers));
  }, [pblAnswers]);

  useEffect(() => {
    localStorage.setItem("plantae_practical_journal", JSON.stringify(journal));
  }, [journal]);

  useEffect(() => {
    localStorage.setItem("plantae_pretest_score", String(pretestScore));
  }, [pretestScore]);

  useEffect(() => {
    localStorage.setItem("plantae_posttest_score", String(posttestScore));
  }, [posttestScore]);

  useEffect(() => {
    localStorage.setItem("plantae_reflection", JSON.stringify(reflection));
  }, [reflection]);

  // Points incrementer and dynamic badge unlcoker API
  const addPoints = (amount: number, badgeId?: string) => {
    if (amount > 0) {
      setPoints((prev) => prev + amount);
    }
    if (badgeId && !unlockedBadges.includes(badgeId)) {
      setUnlockedBadges((p) => [...p, badgeId]);
      setPoints((prev) => prev + 200); // Massive bonus of +200 XP for unlocking a legendary badge!
      alert(`🎉 LENCANA TERKLAIM: Anda mendapatkan badge "${badgeId.replace("_", " ")}" & bonus +200 XP!`);
    }
  };

  const handleUpdateMissions = (updatedMissions: any) => {
    setMissions(updatedMissions);
  };

  const handleUpdatePbl = (updated: Partial<PBLAnswer>) => {
    setPblAnswers((prev) => ({ ...prev, ...updated }));
  };

  const handleUpdateReflection = (updated: RefleksiState) => {
    setReflection(updated);
  };

  // --- RENDERING ROUTER PANEL ---
  const renderPanelContent = () => {
    switch (activeTab) {
      case "kata-pengantar":
        return <KataPengantar />;
      case "petunjuk":
        return <PetunjukPenggunaan />;
      case "capaian-tujuan":
        return <CapaianTujuan />;
      case "peta-konsep":
        return <PetaKonsep />;
      case "materi":
        return (
          <MateriView
            currentMateriIdx={materiIdx}
            onNext={() => {
              if (materiIdx < 7) {
                setMateriIdx((p) => p + 1);
              } else {
                setActiveTab("pbl");
              }
            }}
            onPrev={() => {
              if (materiIdx > 0) setMateriIdx((p) => p - 1);
            }}
            addPoints={addPoints}
            unlockedBadges={unlockedBadges}
          />
        );
      case "pbl":
        return (
          <PBLWorkbook
            answers={pblAnswers}
            onUpdateAnswers={handleUpdatePbl}
            addPoints={addPoints}
            unlockedBadges={unlockedBadges}
          />
        );
      case "lkpd":
        return <LKPDView addPoints={addPoints} unlockedBadges={unlockedBadges} />;
      case "praktikum":
        return (
          <PraktikumView
            onUpdateJournal={setJournal}
            journal={journal}
            addPoints={addPoints}
          />
        );
      case "gamifikasi":
        return (
          <GamifikasiView
            state={{
              points,
              unlockedBadges,
              dailyChallengeDays: dailyChallenges,
              schoolGreeningMissions: missions
            }}
            onUpdateState={(updated: any) => {
              if (updated.dailyChallengeDays) setDailyChallenges(updated.dailyChallengeDays);
              if (updated.schoolGreeningMissions) setMissions(updated.schoolGreeningMissions);
            }}
            addPoints={addPoints}
          />
        );
      case "asesmen":
        return (
          <AsesmenView
            pretestScore={pretestScore}
            posttestScore={posttestScore}
            onUpdateScores={(pre, post) => {
              setPretestScore(pre);
              setPosttestScore(post);
            }}
            addPoints={addPoints}
            unlockedBadges={unlockedBadges}
          />
        );
      case "refleksi":
        return (
          <RefleksiView
            onUpdateReflection={handleUpdateReflection}
            reflection={reflection}
            addPoints={addPoints}
          />
        );
      case "pengayaan-remedial":
        return <PengayaanRemedialPanel posttestScore={posttestScore} />;
      case "glosarium":
        return <Glosarium />;
      case "daftar-pustaka":
        return <DaftarPustaka />;
      default:
        return <KataPengantar />;
    }
  };

  return (
    <div className="absolute inset-0 bg-slate-950 text-slate-100 overflow-y-auto custom-scrollbar font-sans selection:bg-emerald-500 selection:text-white">
      {/* 1. COVER SCREEN OVERLAY WRITER */}
      {showCover ? (
        <div className="max-w-6xl mx-auto p-4 sm:p-8">
          <Cover onStart={() => setShowCover(false)} points={points} />
        </div>
      ) : (
        // 2. PRIMARY MASTER SIDEBAR DASHBOARD LAYOUT
        <div className="min-h-screen flex flex-col md:flex-row">
          
          {/* Sidenavigation Bar Panel */}
          <aside className="w-full md:w-80 shrink-0 border-r border-slate-900 bg-slate-950 flex flex-col justify-between">
            <div>
              {/* Header inside Sidebar */}
              <div className="p-4 border-b border-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🕌</span>
                  <div>
                    <h1 className="font-sans font-black text-xs text-emerald-400 leading-tight">E-Modul Sains Al-Qur'an</h1>
                    <span className="font-sans text-[10px] text-slate-500 uppercase tracking-widest block font-bold">AL-QUR'AN & SAINS</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Small XP badge */}
                  <div className="flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded text-emerald-400 text-xs font-mono">
                    <Star className="w-3 h-3 fill-emerald-500" />
                    <span>{points} XP</span>
                  </div>
                  
                  {/* Cover home trigger */}
                  <button
                    onClick={() => setShowCover(true)}
                    className="p-1 rounded text-slate-500 hover:text-white hover:bg-slate-900"
                    title="Buka Cover Awal"
                  >
                    <span>🏠</span>
                  </button>
                </div>
              </div>

              {/* Sidebar Tab Options */}
              <nav className="p-3 space-y-1 overflow-y-auto max-h-[80vh] custom-sidebar-scroll">
                
                {/* Section A: Prologue Pages */}
                <div className="px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold block">
                  Pendahuluan Silabus
                </div>
                
                {[
                  { id: "kata-pengantar", label: "Kata Pengantar", icon: BookOpen },
                  { id: "petunjuk", label: "Petunjuk Penggunaan", icon: Bookmark },
                  { id: "capaian-tujuan", label: "Capaian & Tujuan CP/TP", icon: Award },
                  { id: "peta-konsep", label: "Peta Konsep Materi", icon: Bookmark }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                        activeTab === item.id 
                          ? "bg-emerald-500 text-white font-bold" 
                          : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                {/* Section B: Chapters Lessons */}
                <div className="pt-4 pb-1 px-3 text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold block">
                  8 Submateri Tumbuhan
                </div>
                
                <button
                  onClick={() => { setActiveTab("materi"); setMobileMenuOpen(false); }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    activeTab === "materi" 
                      ? "bg-emerald-500 text-white font-bold" 
                      : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookMarked className="w-4 h-4 shrink-0" />
                    <span>Lembah Pembelajaran</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-slate-900 text-slate-400">
                    Bab {materiIdx + 1}
                  </span>
                </button>

                {/* Section C: Syntaxes Evaluatives */}
                <div className="pt-4 pb-1 px-3 text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold block">
                  Uji, Praktik & Problem
                </div>

                {[
                  { id: "pbl", label: "1. Problem Worksheets (PBL)", icon: helpIcon },
                  { id: "lkpd", label: "2. LKPD HOTS (C4 - C6)", icon: FileCheck2 },
                  { id: "praktikum", label: "3. Praktikum Ingenhousz", icon: TreeDeciduous },
                  { id: "gamifikasi", label: "4. Daily Green & Missions", icon: TreeDeciduous },
                  { id: "asesmen", label: "5. Pretest & Posttest", icon: Award },
                  { id: "refleksi", label: "6. Lembar Refleksi Diri", icon: Bookmark },
                  { id: "pengayaan-remedial", label: "7. Pengayaan & Remedial", icon: Bookmark }
                ].map((item) => {
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                        activeTab === item.id 
                          ? "bg-emerald-500 text-white font-bold" 
                          : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                      }`}
                    >
                      <span>⚜️</span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                {/* Section D: References */}
                <div className="pt-4 pb-1 px-3 text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold block">
                  Akhir Buku / Daftar
                </div>

                {[
                  { id: "glosarium", label: "Glosarium Istilah", icon: Bookmark },
                  { id: "daftar-pustaka", label: "Daftar Pustaka", icon: Bookmark }
                ].map((item) => {
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                        activeTab === item.id 
                          ? "bg-emerald-500 text-white font-bold" 
                          : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                      }`}
                    >
                      <span>📜</span>
                      <span>{item.label}</span>
                    </button>
                  );
                })}

              </nav>
            </div>

            {/* Bottom Credit line inside Sidebar */}
            <div className="p-4 border-t border-slate-900 text-[9px] font-mono text-slate-501 space-y-1 leading-relaxed">
              <span className="block font-bold text-slate-300">PROGRAM STUDI MAGISTER PENDIDIKAN IPA</span>
              <span className="block text-slate-400">SEKOLAH PASCASARJANA</span>
              <span className="block text-emerald-500/80">UNIVERSITAS SYIAH KUALA</span>
              <span className="block text-slate-500">DARUSSALAM – BANDA ACEH</span>
            </div>

          </aside>

          {/* 3. CENTER / MAIN RENDER PANEL FOR TOPICS */}
          <main className="flex-1 p-6 sm:p-10 max-w-5xl mx-auto self-start">
            {renderPanelContent()}
          </main>

        </div>
      )}
    </div>
  );
}

// Unused placeholder icons resolved gracefully
const helpIcon = HelpCircle;

/**
 * PENGAYAAN DAN REMEDIAL CONTAINER COMPONENT PANEL
 */
function PengayaanRemedialPanel({ posttestScore }: { posttestScore: number | null }) {
  const [remedialAnswers, setRemedialAnswers] = useState<{ [key: number]: number }>({});
  const [enrichmentDraft, setEnrichmentDraft] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Small remedial revision flash questions
  const remedialRevisionQuestions = [
    {
      id: 1,
      q: "Apakah atom metal penyeimbang yang berposisi di tengah struktur kimia klorofil (Zat Hijau Daun)?",
      opts: ["Besi (Fe)", "Magnesium (Mg)", "Heliium (He)", "Kalsium (Ca)"],
      correct: 1,
      exp: "Klorofil berporos pada Magnesium (Mg), sedangkan Hemoglobin pada Besi (Fe) sejalan QS. Al-An'am: 99."
    },
    {
      id: 2,
      q: "Apakah fungsi utama Sodium Bicarbonate (NaHCO3) dalam praktikum fotosintesis air Ingenhousz?",
      opts: ["Mendinginkan air solusi", "Menyuplai ketersediaan gas Karbon Dioksida (CO2)", "Melarutkan zat daun pembusuk", "Mencegah air merembes osmosis"],
      correct: 1,
      exp: "NaHCO3 terlarat dalam air bereaksi memicu CO2 melimpah bagi siklus Calvin."
    }
  ];

  const handleRemAnswer = (qId: number, idx: number) => {
    setRemedialAnswers((p) => ({ ...p, [qId]: idx }));
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl space-y-8 text-left">
      
      {/* Title */}
      <div className="border-b border-slate-850 pb-4">
        <h2 className="font-sans font-bold text-xl sm:text-2xl text-white">Program Pengayaan & Remedial</h2>
        <p className="font-sans text-xs text-slate-400 mt-1">
          Disesuaikan dengan asesmen formatif Kurikulum Merdeka bagi keunikan daya serap kognitif siswa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* PROGRAM PENGAYAAN: Aksi Konservasi Air Hujan */}
        <div className="p-5 rounded-xl bg-teal-950/10 border border-teal-500/15 space-y-4">
          <div className="flex items-center gap-2 text-teal-300 font-bold border-b border-teal-500/10 pb-1.5">
            <span>🚀</span>
            <h3 className="font-sans text-sm sm:text-base">Misi Pengayaan (Komitmen Ekologis)</h3>
          </div>
          <p className="font-sans text-xs text-slate-300 leading-relaxed text-justify">
            Bagi siswa yang telah memperoleh nilai <strong>Posttest KKM ≥ 75</strong>, rancanglah proposal rancangan <strong>"Lubang Infiltrasi Swadiri (Bioswales)"</strong> guna menyalurkan air berkah hujan (QS. Qaf: 9) masuk ke tanah reservoir (QS. Az-Zumar: 21).
          </p>

          <div className="space-y-2">
            <label className="font-sans text-xs text-slate-300 font-bold">Draf Rencana Infiltrasi Lapangan:</label>
            <textarea
              id="enrichment-draft-text"
              value={enrichmentDraft}
              onChange={(e) => setEnrichmentDraft(e.target.value)}
              placeholder="Contoh: Menggali parit berdimensi 20x50cm di dekat pipa pengeluaran air atap kelas, diisi batu koral silika kasar dan ditanami rumput akar wangi..."
              rows={4}
              className="w-full p-3 rounded bg-slate-950 border border-slate-850 text-white text-xs text-justify font-sans focus:outline-none focus:border-teal-500"
            />
          </div>

          <button
            id="btn-submit-enrichment"
            onClick={() => { if (!enrichmentDraft.trim()) return; setIsSubmitted(true); alert("🎉 Terverifikasi! Proposal Aksi Infiltrasi dikunci."); }}
            className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white text-xs font-bold rounded cursor-pointer"
          >
            Kirim Rencana Konservasi
          </button>
        </div>

        {/* PROGRAM REMEDIAL */}
        <div className="p-5 rounded-xl bg-amber-950/10 border border-amber-500/15 space-y-4">
          <div className="flex items-center gap-2 text-amber-300 font-bold border-b border-amber-500/10 pb-1.5">
            <span>🛡️</span>
            <h3 className="font-sans text-sm sm:text-base">Misi Remedial (Penguatan Ulang)</h3>
          </div>
          <p className="font-sans text-xs text-slate-300 leading-relaxed text-justify">
            Bagi yang mendapat nilai <strong>di bawah KKM (75)</strong>, silakan tinjau kembali pelajaran 3 & 5, lalu jawab 2 latihan evaluative cepat di bawah ini demi mengesahkan penguasaan materi:
          </p>

          <div className="space-y-4">
            {remedialRevisionQuestions.map((q) => {
              const selectedIdx = remedialAnswers[q.id];
              return (
                <div key={q.id} className="space-y-1.5 text-xs">
                  <p className="font-semibold text-slate-200">{q.id}. {q.q}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {q.opts.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleRemAnswer(q.id, idx)}
                        className={`p-2 rounded text-left transition-all cursor-pointer ${
                          selectedIdx === idx
                            ? "bg-amber-500 text-white font-bold"
                            : "bg-slate-950 text-slate-400 hover:bg-slate-900"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {selectedIdx !== undefined && (
                    <div className="p-2 bg-slate-950/80 rounded border border-slate-850 text-[10px] text-slate-400 italic">
                      {selectedIdx === q.correct ? "Betul ✓" : "Kurang Tepat ✗"} — {q.exp}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

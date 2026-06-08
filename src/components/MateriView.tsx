/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MATERI_LIST } from "../data/materiData";
import { Award, Zap, Heart, CheckCircle2, RefreshCw } from "lucide-react";

interface MateriViewProps {
  currentMateriIdx: number;
  onNext: () => void;
  onPrev: () => void;
  addPoints: (amount: number, badgeId?: string) => void;
  unlockedBadges: string[];
}

export default function MateriView({
  currentMateriIdx,
  onNext,
  onPrev,
  addPoints,
  unlockedBadges
}: MateriViewProps) {
  const materi = MATERI_LIST[currentMateriIdx];
  const [reflectionInput, setReflectionInput] = useState("");
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false);
  const [animationState, setAnimationState] = useState<any>({});

  // Triggering the specific simulation interaction for each lesson
  const runSimulation = (action: string) => {
    setAnimationState((prev: any) => ({
      ...prev,
      [materi.id]: action
    }));
  };

  const handleReflectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reflectionInput.trim()) return;
    setReflectionSubmitted(true);
    addPoints(50); // Give 50 XP for spiritual-academic reflection
    
    // Check if we unlock "Quran_Scholar" after writing a reflective response
    if (!unlockedBadges.includes("Quran_Scholar")) {
      addPoints(0, "Quran_Scholar");
    }
  };

  // Reset states when changing chapter
  React.useEffect(() => {
    setReflectionInput("");
    setReflectionSubmitted(false);
  }, [currentMateriIdx]);

  return (
    <div className="space-y-8">
      {/* Tab Navigation header of current chapter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-linear-to-r from-teal-980 to-emerald-990 border border-emerald-500/20 shadow-md">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold">Submateri {currentMateriIdx + 1} dari 8</span>
          <h2 className="font-sans font-bold text-xl sm:text-2xl text-white">{materi.title}</h2>
        </div>
        <div className="flex bg-slate-950/60 p-1.5 rounded-xl border border-slate-800 gap-1 text-xs">
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 font-mono">
            {materi.quranVerse.surah}:{materi.quranVerse.verse}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (8 units): Detailed Academic Material Content */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Section 1: Scientific Explanation */}
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-3">
            <h3 className="font-sans font-extrabold text-emerald-400 text-sm sm:text-base tracking-tight uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Kajian Ilmiah Biologi (Sains)
            </h3>
            <p className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed text-justify">
              {materi.scientificExplanation}
            </p>
          </div>

          {/* Section 2: Qur'anic Integration Box */}
          <div className="p-6 bg-emerald-950/20 border border-emerald-500/20 rounded-xl space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <span className="font-sans text-xs font-bold text-emerald-300 uppercase tracking-wide">
                Integrasi Al-Qur'an & Tafsir
              </span>
              <span className="font-mono text-xs text-emerald-400 font-semibold">{materi.quranVerse.surah} Ayat {materi.quranVerse.verse}</span>
            </div>

            {/* Arabic Typography */}
            <div className="text-right py-4 font-serif text-2xl sm:text-3xl text-emerald-100 leading-loose tracking-wide select-all" dir="rtl">
              {materi.quranVerse.arabic}
            </div>

            {/* Indonesian translation */}
            <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/10">
              <span className="font-sans text-xs text-emerald-400/80 font-bold block mb-1">Terjemahan:</span>
              <p className="font-sans text-xs sm:text-sm text-emerald-200/90 leading-relaxed italic">
                "{materi.quranVerse.translation}"
              </p>
            </div>

            {/* Tafsir Singkat */}
            <div className="space-y-1">
              <span className="font-sans text-xs text-emerald-400/80 font-bold block">Tafsir Singkat (Al-Misbah / Al-Maraghi):</span>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {materi.quranVerse.tafsir}
              </p>
            </div>
          </div>

          {/* Section 3: Scientific Qur'anic Synthesis */}
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-3">
            <h3 className="font-sans font-bold text-teal-300 text-sm sm:text-base tracking-wide uppercase">
              Keterkaitan Fisiologi dan Isyarat Al-Qur'an
            </h3>
            <p className="font-sans text-sm text-slate-200 leading-relaxed text-justify">
              {materi.scientificQuranConnection}
            </p>
          </div>

          {/* Section 4: Latest Plant Biology Facts */}
          <div className="p-6 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3">
            <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest block">Fakta Ilmiah Terkini (Plant Science)</span>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-slate-300">
              {materi.facts.map((fact, idx) => (
                <li key={idx} className="flex gap-2 items-start bg-slate-900/60 p-3 rounded-lg border border-slate-850">
                  <span className="text-emerald-400 shrink-0">❖</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column (5 units): Interactive Simulated Graphics & Spiritual Reflection */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Section A: HIGH-FIDELITY INTERACTIVE SVG ILLUSTRATION / SIMULATION */}
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4 shadow-lg flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2">
              <span className="font-sans font-bold text-xs text-emerald-400 uppercase tracking-wider">
                Simulasi Interaktif Visual
              </span>
              <span className="font-mono text-[9px] text-slate-500 uppercase">Interactive Widget</span>
            </div>

            {/* Rendering dedicated beautiful simulation based on the material ID */}
            <div className="relative w-full h-64 bg-slate-900/40 border border-emerald-500/5 rounded-lg flex flex-col items-center justify-center overflow-hidden p-2">
              
              {/* Material 1: Kebesaran Allah (Imbibition & Germination) */}
              {materi.id === "kebesaran-allah" && (
                <div id="sim-kebesaran-allah" className="relative w-full h-full flex flex-col items-center justify-center text-center">
                  <svg className="w-32 h-32" viewBox="0 0 100 100">
                    {/* Water Ground */}
                    <rect x="0" y="70" width="100" height="30" fill="#3e2723" rx="2" />
                    {animationState["kebesaran-allah"] === "active" ? (
                      <>
                        {/* Roots growing */}
                        <path d="M50 60 Q48 75 45 85 Q49 90 52 95" stroke="#a1887f" strokeWidth="2.5" fill="none" className="animate-pulse" />
                        <path d="M50 65 Q58 75 62 82" stroke="#d7ccc8" strokeWidth="1.5" fill="none" />
                        <path d="M50 70 Q38 80 32 85" stroke="#d7ccc8" strokeWidth="1.5" fill="none" />
                        {/* Stem growing */}
                        <path d="M50 60 Q51 45 53 30" stroke="#4caf50" strokeWidth="3" fill="none" />
                        {/* Leaves */}
                        <path d="M53 30 C45 25 40 35 53 30" fill="#81c784" />
                        <path d="M53 30 C61 25 66 35 53 30" fill="#81c784" />
                        {/* Water droplets dropping */}
                        <circle cx="50" cy="15" r="2" fill="#00e5ff" className="animate-bounce" />
                        <circle cx="35" cy="20" r="2" fill="#00e5ff" className="animate-bounce" />
                      </>
                    ) : (
                      <>
                        {/* Dry Seed resting */}
                        <circle cx="50" cy="65" r="7" fill="#6d4c41" />
                        <text x="50" y="68" fill="#d7ccc8" fontSize="6px" textAnchor="middle" fontWeight="bold">BENIH</text>
                      </>
                    )}
                  </svg>
                  <p className="font-mono text-[10px] text-emerald-300 mt-2">
                    {animationState["kebesaran-allah"] === "active" 
                      ? "Imbibisi Air Mengaktifkan Enzim Terlarut & Mengakhiri Dormansi Benih" 
                      : "Benih Kering Dorman Menunggu Percikan Hidrologi"}
                  </p>
                  <button
                    id="btn-stim-imbibisi"
                    onClick={() => runSimulation("active")}
                    className="mt-3 px-3 py-1 text-[10px] sm:text-xs rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  >
                    Simulasikan "Beri Air Hujan"
                  </button>
                </div>
              )}

              {/* Material 2: Organ Akar (Osmosis) */}
              {materi.id === "organ-akar" && (
                <div id="sim-organ-akar" className="relative w-full h-full flex flex-col items-center justify-center">
                  <div className="flex gap-4 items-center justify-center w-full">
                    {/* Soil side */}
                    <div className="text-center p-2 rounded bg-amber-950/20 border border-amber-900/30">
                      <span className="font-mono text-[9px] text-amber-400 block border-b border-amber-900/20 pb-0.5 mb-1">DILUAR (TANAH)</span>
                      <div className="flex gap-1 justify-center py-2">
                        <span className={`w-3 h-3 rounded-full bg-blue-400 block ${animationState["organ-akar"] === "active" ? "animate-ping" : "animate-pulse"}`}></span>
                        <span className="w-3 h-3 rounded-full bg-blue-400 block"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-700 block"></span>
                      </div>
                      <span className="text-[10px] font-sans text-slate-300">Potensial Air Tinggi</span>
                    </div>

                    <div className="text-xl text-emerald-400 font-bold">➔</div>

                    {/* Root hair cell */}
                    <div className="text-center p-2 rounded bg-emerald-950/20 border border-emerald-500/20">
                      <span className="font-mono text-[9px] text-emerald-400 block border-b border-emerald-500/20 pb-0.5 mb-1">DIDALAM SEL AKAR</span>
                      <div className="flex gap-1 justify-center py-2">
                        <span className="w-3 h-3 rounded-full bg-emerald-400 block"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-400 block"></span>
                        {animationState["organ-akar"] === "active" && (
                          <span className="w-3 h-3 rounded-full bg-blue-400 block animate-bounce"></span>
                        )}
                      </div>
                      <span className="text-[10px] font-sans text-slate-300">Potensial Rendah</span>
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-emerald-300 mt-4 text-center">
                    {animationState["organ-akar"] === "active"
                      ? "Air Mengalir melepasi membran semipermeabel ditarik Osmosis Tinggi"
                      : "Tekan Mulai untuk menyimulasikan Difusi Osmosis Air"}
                  </p>
                  <button
                    id="btn-stim-osmosis"
                    onClick={() => runSimulation("active")}
                    className="mt-3 px-3 py-1 text-[10px] sm:text-xs rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  >
                    Simulasikan Osmosis Akar
                  </button>
                </div>
              )}

              {/* Material 3: Fotosintesis & Respirasi */}
              {materi.id === "fotosintesis-respirasi" && (
                <div id="sim-fotosintesis" className="relative w-full h-full flex flex-col items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-center w-full max-w-xs mb-3">
                    <div className="p-1.5 rounded bg-emerald-950/20 border border-emerald-500/20">
                      <span className="text-emerald-400 font-bold block">Input Reaktan:</span>
                      H2O (Air) + CO2 (Udara)
                    </div>
                    <div className="p-1.5 rounded bg-teal-950/20 border border-teal-500/20">
                      <span className="text-teal-300 font-bold block">Output Produk:</span>
                      C6H12O6 (Gula) + O2 (Gas Udara Bersih)
                    </div>
                  </div>
                  
                  {animationState["fotosintesis-respirasi"] === "active" ? (
                    <div className="flex gap-2 items-center text-teal-300 font-mono text-xs animate-bounce bg-teal-950/30 px-3 py-1.5 rounded-full border border-teal-500/30">
                      <span>🌞 Foton Diserap! Air terpecah (Fotolisis) ➔ O2 Dilepaskan</span>
                    </div>
                  ) : (
                    <div className="text-slate-400 font-sans text-xs">Simulasi Kloroplas menangkap Cahaya Surya</div>
                  )}

                  <button
                    id="btn-stim-fotosintesis"
                    onClick={() => runSimulation("active")}
                    className="mt-4 px-3 py-1 text-[10px] sm:text-xs rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  >
                    Sinar Sinar Matahari ke Daun
                  </button>
                </div>
              )}

              {/* Material 4: Adaptasi Tumbuhan */}
              {materi.id === "adaptasi-tumbuhan" && (
                <div id="sim-adaptasi" className="relative w-full h-full flex flex-col items-center justify-center gap-3">
                  <div className="flex gap-2">
                    {["Xerofit", "Hidrofit", "Halofit"].map((type) => (
                      <button
                        key={type}
                        onClick={() => runSimulation(type)}
                        className={`px-2 py-1 text-[9px] font-mono rounded ${
                          animationState["adaptasi-tumbuhan"] === type 
                            ? "bg-emerald-500 text-white" 
                            : "bg-slate-900 text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <div className="p-3 bg-slate-950/40 rounded-lg text-center text-xs font-sans max-w-xs border border-slate-800">
                    {animationState["adaptasi-tumbuhan"] === "Xerofit" && (
                      <span className="text-amber-400 font-bold block">🏜️ Kaktus: Daun jadi duri tajam, kutikula lilin masif menstop evaporasi gurun.</span>
                    )}
                    {animationState["adaptasi-tumbuhan"] === "Hidrofit" && (
                      <span className="text-blue-400 font-bold block">🪷 Teratai: Stomata menganga banyak di atas daun lebar untuk evaporasi melimpah.</span>
                    )}
                    {animationState["adaptasi-tumbuhan"] === "Halofit" && (
                      <span className="text-teal-400 font-bold block">🌊 Bakau Murni: Akar penunjang mencuat tinggi memblok garam laut ekstrim.</span>
                    )}
                    {!animationState["adaptasi-tumbuhan"] && (
                      <span className="text-slate-450 block">Pilih kategori tanaman adaptasi di atas untuk detail anatomis.</span>
                    )}
                  </div>
                </div>
              )}

              {/* Material 5: Klorofil Leaf */}
              {materi.id === "klorofil-daun" && (
                <div id="sim-klorofil" className="relative w-full h-full flex flex-col items-center justify-center">
                  <div className="flex justify-around items-center gap-4 w-full">
                    {/* Hemoglobin */}
                    <div className="p-2 border border-rose-500/20 rounded bg-rose-955/10 text-center">
                      <span className="font-mono text-[9px] text-rose-400 block">Hemoglobin Darah</span>
                      <div className="w-10 h-10 rounded-full border border-rose-400 mx-auto my-2 flex items-center justify-center text-rose-400 font-bold text-xs">
                        Fe
                      </div>
                      <span className="text-[9px] text-slate-300">Zat Besi Pusat</span>
                    </div>

                    <div className="font-semibold text-white text-xs">Sangat Identik!</div>

                    {/* Klorofil */}
                    <div className="p-2 border border-emerald-500/20 rounded bg-emerald-955/10 text-center">
                      <span className="font-mono text-[9px] text-emerald-400 block">Klorofil Daun</span>
                      <div className="w-10 h-10 rounded-full border border-emerald-400 mx-auto my-2 flex items-center justify-center text-emerald-400 font-bold text-xs">
                        Mg
                      </div>
                      <span className="text-[9px] text-slate-300">Magnesium Pusat</span>
                    </div>
                  </div>
                  <p className="font-mono text-[10px] text-emerald-300 mt-4 text-center">
                    Cincin Porphyrin menyatukan kedua bentuk vital kehidupan flora-fauna ini
                  </p>
                </div>
              )}

              {/* Material 6: Keanekaragaman (Habitus) */}
              {materi.id === "keanekaragaman-klasifikasi" && (
                <div id="sim-keanekaragaman" className="relative w-full h-full flex flex-col items-center justify-center gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => runSimulation("ma'rusyat")}
                      className={`px-2 py-0.5 text-[9px] font-mono rounded ${animationState["keanekaragaman-klasifikasi"] === "ma'rusyat" ? "bg-emerald-500 text-white" : "bg-slate-900 border border-slate-800 text-emerald-300"}`}
                    >
                      Ma'rusyat (Merambat)
                    </button>
                    <button
                      onClick={() => runSimulation("ghaira")}
                      className={`px-2 py-0.5 text-[9px] font-mono rounded ${animationState["keanekaragaman-klasifikasi"] === "ghaira" ? "bg-emerald-500 text-white" : "bg-slate-900 border border-slate-800 text-emerald-300"}`}
                    >
                      Ghaira Ma'rusyat (Tegak)
                    </button>
                  </div>

                  <div className="w-32 h-20 bg-slate-950/40 rounded flex items-center justify-center mt-2 border border-slate-850">
                    {animationState["keanekaragaman-klasifikasi"] === "ma'rusyat" ? (
                      <svg className="w-16 h-16" viewBox="0 0 50 50">
                        {/* Climbing Vine coil */}
                        <path d="M 10 45 Q 15 30 25 35 Q 35 40 38 20 Q 40 10 45 5" stroke="#4caf50" strokeWidth="2.5" fill="none" />
                        <path d="M 25 35 Q 20 20 30 15" stroke="#81c784" strokeWidth="1" fill="none" />
                        <circle cx="38" cy="20" r="3" fill="#ffeb3b" />
                      </svg>
                    ) : animationState["keanekaragaman-klasifikasi"] === "ghaira" ? (
                      <svg className="w-16 h-16" viewBox="0 0 50 50">
                        {/* Rigid Vertical Tree */}
                        <rect x="22" y="10" width="6" height="35" fill="#8d6e63" />
                        <circle cx="25" cy="15" r="12" fill="#2e7d32" />
                      </svg>
                    ) : (
                      <span className="font-sans text-[10px] text-slate-450 p-2 text-center">Tekan tombol di atas untuk visualisasi Habit</span>
                    )}
                  </div>
                </div>
              )}

              {/* Material 7: Reproduksi (Polinasi) */}
              {materi.id === "reproduksi-tumbuhan" && (
                <div id="sim-reproduksi" className="relative w-full h-full flex flex-col items-center justify-center">
                  <svg className="w-24 h-24" viewBox="0 0 50 50">
                    <line x1="25" y1="45" x2="25" y2="25" stroke="#4caf50" strokeWidth="3" />
                    {/* Flower Petals */}
                    <circle cx="25" cy="25" r="10" fill="#f48fb1" />
                    <circle cx="15" cy="25" r="8" fill="#f4afc4" />
                    <circle cx="35" cy="25" r="8" fill="#f4afc4" />
                    <circle cx="25" cy="15" r="8" fill="#f4afc4" />
                    {/* Stigma Betina */}
                    <rect x="23" y="15" width="4" height="10" fill="#81c784" />
                    <circle cx="25" cy="13" r="3.5" fill="#4caf50" />
                    {/* Polen Anther Jantan */}
                    <circle cx="16" cy="18" r="1.5" fill="#ffd54f" />
                    <circle cx="34" cy="18" r="1.5" fill="#ffd54f" />

                    {animationState["reproduksi-tumbuhan"] === "active" && (
                      <path d="M 16 18 Q 25 10 25 13" stroke="#ffd54f" strokeDasharray="2" fill="none" className="animate-pulse" />
                    )}
                  </svg>
                  <p className="font-mono text-[10px] text-emerald-300 mt-2 text-center">
                    {animationState["reproduksi-tumbuhan"] === "active"
                      ? "Polen Jantan Jatuh ke Kepala Putik: Polinasi Sukses!"
                      : "Sistem Reproduksi Berpasangan: Organ Jantan & Betina"}
                  </p>
                  <button
                    id="btn-stim-penyerbukan"
                    onClick={() => runSimulation("active")}
                    className="mt-3 px-3 py-1 text-[10px] sm:text-xs rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  >
                    Simulasikan Penyerbukan Sentuh
                  </button>
                </div>
              )}

              {/* Material 8: Manfaat Lingkungan (Infiltrasi) */}
              {materi.id === "manfaat-lingkungan" && (
                <div id="sim-manfaat-lingkungan" className="relative w-full h-full flex flex-col items-center justify-center">
                  <div className="grid grid-cols-2 gap-2 w-full text-[10px] font-sans">
                    {/* Forest side */}
                    <div className="p-2 border border-emerald-500/10 rounded bg-emerald-990/5 text-center flex flex-col items-center justify-center">
                      <span className="font-bold text-emerald-400 block mb-1">Lereng Hutan Rimbun</span>
                      <svg className="w-12 h-12" viewBox="0 0 30 30">
                        <polygon points="15,2 25,18 5,18" fill="#4caf50" />
                        <rect x="13" y="18" width="4" height="4" fill="#795548" />
                        <line x1="0" y1="22" x2="30" y2="22" stroke="#3e2723" strokeWidth="2.5" />
                        {animationState["manfaat-lingkungan"] === "active" && (
                          <line x1="15" y1="22" x2="15" y2="29" stroke="#29b6f6" strokeWidth="2" strokeDasharray="2" />
                        )}
                      </svg>
                      <span className="text-[9px] text-slate-300">Air Menetes Meresap (Infiltrasi)</span>
                    </div>

                    {/* Barren Deforested Side */}
                    <div className="p-2 border border-red-500/10 rounded bg-red-990/5 text-center flex flex-col items-center justify-center">
                      <span className="font-bold text-red-400 block mb-1">Lereng Gundul</span>
                      <svg className="w-12 h-12" viewBox="0 0 30 30">
                        <rect x="13" y="10" width="4" height="6" fill="#cfd8dc" />
                        <line x1="0" y1="18" x2="30" y2="25" stroke="#795548" strokeWidth="3" />
                        {animationState["manfaat-lingkungan"] === "active" && (
                          <path d="M 0 18 Q 15 22 30 25" stroke="#ff5722" strokeWidth="3.5" fill="none" className="animate-bounce" />
                        )}
                      </svg>
                      <span className="text-[9px] text-slate-350">Air Menggelosor (Tanah Longsor!)</span>
                    </div>
                  </div>

                  <button
                    id="btn-stim-hujan"
                    onClick={() => runSimulation("active")}
                    className="mt-3 px-3 py-1 text-[10px] sm:text-xs rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  >
                    Simulasikan Guyuran Air Hujan
                  </button>
                </div>
              )}
            </div>

            <div className="text-[11px] text-slate-400 leading-relaxed italic border-t border-slate-900 pt-2 text-justify">
              <strong>Saran Ilustrasi Praktis:</strong> {materi.suggestedIllustration}
            </div>
          </div>

          {/* Section B: INFOGRAPHIC FOCUS POINTS */}
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-teal-300" />
              <span className="font-sans font-extrabold text-white text-xs sm:text-sm uppercase tracking-wider">Materi Infografis Mandiri</span>
            </div>
            <div className="space-y-3">
              {materi.infographicPoints.map((point, index) => (
                <div key={index} className="p-3 bg-slate-950/40 rounded-lg border border-slate-850">
                  <h5 className="font-sans font-bold text-emerald-400 text-xs sm:text-sm">{point.title}</h5>
                  <p className="font-sans text-xs text-slate-300 mt-1">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: SPIRITUAL-ACADEMIC REFLECTION */}
          <div className="p-6 bg-teal-950/10 border border-emerald-500/10 rounded-xl space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-400 animate-pulse" />
              <span className="font-sans font-bold text-white text-xs sm:text-sm uppercase tracking-wide">Aktivitas Refleksi Deep Learning</span>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed italic">
              <strong>Refleksi Kalbu:</strong> "{materi.reflectionQuestion}"
            </p>

            {reflectionSubmitted ? (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex gap-3 items-start animate-fade-in">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <div>
                  <span className="font-bold block mb-0.5">Refleksi Disertifikasi!</span>
                  <span className="text-slate-200">Terima kasih telah menganalisis materi secara emosional-spiritual. Anda meraih <strong>+50 XP</strong> hasil pemikiran kritis ini!</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReflectionSubmit} className="space-y-2.5">
                <textarea
                  id="textarea-refleksi"
                  value={reflectionInput}
                  onChange={(e) => setReflectionInput(e.target.value)}
                  placeholder="Ketik rincian refleksi kognitif, emosional, dan spiritual Anda terkait materi di sini..."
                  rows={4}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-emerald-500 font-sans"
                  required
                />
                <button
                  id="btn-submit-refleksi"
                  type="submit"
                  className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
                >
                  Kirim Refleksi & Klaim XP
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Navigasi Control Buttons */}
      <div className="flex justify-between items-center border-t border-slate-800 pt-6">
        <button
          id="btn-prev-materi"
          onClick={onPrev}
          disabled={currentMateriIdx === 0}
          className="px-5 py-2.5 rounded-lg border border-slate-800 text-slate-300 text-xs font-sans font-bold hover:bg-slate-900 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← Kembali Ke Sebelumnya
        </button>
        <button
          id="btn-next-materi"
          onClick={onNext}
          className="px-6 py-2.5 rounded-lg bg-emerald-500 text-white text-xs font-sans font-bold hover:bg-emerald-400 transition-all cursor-pointer"
        >
          {currentMateriIdx === 7 ? "Lanjut Ke PBL Workbook" : "Submateri Selanjutnya →"}
        </button>
      </div>
    </div>
  );
}

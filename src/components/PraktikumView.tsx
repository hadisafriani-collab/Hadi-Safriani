/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { PracticalJournal } from "../types";
import { FlaskConical, Play, Save, CheckCircle, RefreshCw } from "lucide-react";

interface PraktikumViewProps {
  onUpdateJournal: (journal: PracticalJournal) => void;
  journal: PracticalJournal;
  addPoints: (amount: number, badgeId?: string) => void;
}

export default function PraktikumView({
  onUpdateJournal,
  journal,
  addPoints
}: PraktikumViewProps) {
  // Simulator Controls
  const [intensity, setIntensity] = useState<number>(3); // 1-5
  const [naHCO3, setNaHCO3] = useState<number>(2.0); // g/L CO2
  const [temp, setTemp] = useState<number>(25); // Celsius

  // Timer & Animating Bubbles
  const [isMeasuring, setIsMeasuring] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [bubbleCounter, setBubbleCounter] = useState<number>(0);
  const [bubblesList, setBubblesList] = useState<{ id: number; left: number; delay: number }[]>([]);

  // Log Table
  const [loggedTrials, setLoggedTrials] = useState<{
    id: number;
    intensityText: string;
    co2Level: number;
    tempLevel: number;
    bubbleCount: number;
  }[]>([]);

  // Conclusion Write-up
  const [conclusionText, setConclusionText] = useState(journal.conclusions);

  // Peak photosynthesis formula for Ingenhousz experiment
  const calculateBubbleFrecuency = () => {
    // Intensity factor (1 to 5)
    const intFac = intensity;
    // CO2 concentration factor
    const co2Fac = naHCO3 + 0.5;
    // Enzyme temperature bell curve factor (peaks at 30C, drops at 10C and 45C)
    const tempDiff = Math.abs(temp - 30);
    const tempFac = Math.max(0.1, 1 - tempDiff * 0.04);
    
    // Bubble rate representing oxygen generation
    return Math.round(intFac * 8 * co2Fac * tempFac);
  };

  const bubbleRate = calculateBubbleFrecuency();

  // Handle active countdown and bubble generations
  useEffect(() => {
    let intervalId: any;
    if (isMeasuring && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        
        // Accumulate bubbles seen based on rate
        const bubblesPerSec = Math.max(1, Math.round(bubbleRate / 10));
        setBubbleCounter((prev) => prev + bubblesPerSec);

        // Emit visual SVG floating bubble dots
        const newBubbles = Array.from({ length: bubblesPerSec }).map(() => ({
          id: Math.random(),
          left: 35 + Math.random() * 30, // Random width alignment in the tube
          delay: Math.random() * 0.8
        }));
        setBubblesList((prev) => [...prev, ...newBubbles].slice(-25)); // Keep last 25

      }, 1000);
    } else if (timeLeft === 0 && isMeasuring) {
      setIsMeasuring(false);
    }

    return () => clearInterval(intervalId);
  }, [isMeasuring, timeLeft, bubbleRate]);

  const startMeasurement = () => {
    setIsMeasuring(true);
    setTimeLeft(10); // Run a simulated fast-forward 10 seconds experiment representing 60 seconds
    setBubbleCounter(0);
    setBubblesList([]);
  };

  const saveTrial = () => {
    if (isMeasuring) return;
    if (bubbleCounter === 0 && loggedTrials.length === 0 && timeLeft === 0) {
      alert("Harap jalankan simulasi pengukuran terlebih dahulu!");
      return;
    }

    const intensityTextMap = ["Sangat Gelap", "Cukup Mendung", "Cerah Berawan", "Terang Benderang", "Sinar Ultra Ekstrim"];
    const newTrial = {
      id: loggedTrials.length + 1,
      intensityText: intensityTextMap[intensity - 1],
      co2Level: naHCO3,
      tempLevel: temp,
      bubbleCount: bubbleCounter * 6 // scaled to represent full 60 seconds bubble count
    };

    setLoggedTrials((prev) => [...prev, newTrial]);
    addPoints(20); // reward +20 XP for lodging a successful scientific trial!
  };

  const clearTrials = () => {
    setLoggedTrials([]);
  };

  const submitJournal = (e: React.FormEvent) => {
    e.preventDefault();
    if (loggedTrials.length < 2) {
      alert("Harap lakukan minimal 2 percobaan dengan variabilitas parameter berbeda agar data siap dianalisis secara saintifik!");
      return;
    }
    if (!conclusionText.trim()) {
      alert("Harap tulis kesimpulan analisis praktikum Anda!");
      return;
    }

    onUpdateJournal({
      lightIntensity: intensity,
      sodiumBicarb: naHCO3,
      temp,
      observations: loggedTrials.map((t) => ({ time: 60, bubbles: t.bubbleCount })),
      conclusions: conclusionText,
      submitted: true
    });

    addPoints(150, "Green_Pioneer"); // Reward 150 XP and Green Pioneer badge!
  };

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="p-6 rounded-2xl bg-linear-to-r from-teal-950 to-emerald-990 border border-emerald-500/10 space-y-2">
        <h2 className="font-sans font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
          <FlaskConical className="w-6 h-6 text-emerald-450" />
          Laboratorium Penelitian Ingenhousz Virtual
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-330 leading-relaxed text-justify">
          Apakah laju fotosintesis dipengaruhi oleh faktor eksternal? Melalui praktikum virtual Ingenhousz ini, Anda akan meneliti variabel <strong>Intensitas Sinar Surya (Foton)</strong>, <strong>Kadar CO2 Melalui NaHCO3</strong>, dan <strong>Suhu Solusi Cairan</strong> terhadap laju gelembung O2 pada tanaman air <em>Hydrilla verticillata</em>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (5 units): Real-time SVG Emitter Flask Animation */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block font-mono">Reaktor Fotosintesis Ingenhousz</span>
          
          {/* Reaction Vessel Visual */}
          <div className="relative w-full h-80 bg-slate-900 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center">
            
            {/* Sinar Sunlight rays */}
            <div className={`absolute top-0 left-0 right-0 h-10 transition-all ${
              intensity >= 4 ? "bg-amber-300/20 shadow-md animate-pulse" : intensity === 3 ? "bg-amber-200/10" : "bg-transparent"
            }`} />

            <svg className="w-48 h-72" viewBox="0 0 100 150">
              {/* Glass Beaker back */}
              <path d="M 15 140 L 15 30 Q 15 25 18 25 L 82 25 Q 85 25 85 30 L 85 140 Q 85 145 80 145 L 20 145 Q 15 145 15 140 Z" fill="rgba(40, 116, 166, 0.15)" stroke="white" strokeWidth="1.5" />
              
              {/* Water Level */}
              <rect x="16" y="45" width="68" height="98" fill="rgba(0, 172, 193, 0.2)" />
              <line x1="16" y1="45" x2="84" y2="45" stroke="#4fc3f7" strokeWidth="1" strokeDasharray="3,3" />

              {/* Inverted Funnel (Corong Terbalik) */}
              <polygon points="25,130 75,130 54,80 46,80" fill="rgba(255,255,255,0.25)" stroke="#e0e0e0" strokeWidth="1" />
              {/* Inverted Test Tube (Tabung Reaksi Terbalik) */}
              <rect x="44" y="20" width="12" height="70" rx="3" fill="rgba(255,255,255,0.2)" stroke="#e0e0e0" strokeWidth="1" />

              {/* Hydrilla verticillata Plant sprigs in funnel */}
              <path d="M 50 135 L 50 90 M 40 120 Q 50 110 50 95 M 60 115 Q 50 105 50 90" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" />
              {/* Little leaf whorls */}
              <circle cx="50" cy="115" r="2.5" fill="#4caf50" />
              <circle cx="43" cy="118" r="2" fill="#81c784" />
              <circle cx="57" cy="112" r="2" fill="#81c784" />
              <circle cx="50" cy="98" r="2.5" fill="#4caf50" />

              {/* Floating Oxygen Bubbles inside test tube */}
              {bubblesList.map((bubble) => (
                <circle
                  key={bubble.id}
                  cx={bubble.left}
                  cy="90"
                  r="1.5"
                  fill="#ffffff"
                  className="bubble"
                  style={{
                    animation: `floatUp 2.5s infinite linear`,
                    animationDelay: `${bubble.delay}s`
                  }}
                />
              ))}
            </svg>

            {/* Float Bubbles CSS Animation injector */}
            <style>{`
              @keyframes floatUp {
                0% { transform: translateY(0) scale(1); opacity: 0.8; }
                50% { opacity: 1; }
                100% { transform: translateY(-70px) scale(1.3); opacity: 0; }
              }
            `}</style>

            {/* Glowing Temp Gauge */}
            <div className="absolute bottom-3 right-3 bg-slate-950/80 border border-slate-800 px-2 py-1 rounded text-[10px] font-mono text-slate-300">
              Suhu: <span className={temp >= 38 ? "text-red-400" : temp <= 18 ? "text-cyan-400" : "text-emerald-400"}>{temp}°C</span>
            </div>
            
            {/* Co2 status badge */}
            <div className="absolute top-3 right-3 bg-slate-950/80 border border-slate-800 px-2 py-1 rounded text-[10px] font-mono text-slate-300">
              NaHCO3: <span className="text-teal-400">{naHCO3} g/L</span>
            </div>
          </div>

          {/* Measuring state readout */}
          <div className="flex items-center justify-between bg-slate-900 p-3 rounded-lg border border-slate-850">
            <span className="text-xs font-mono text-slate-400">
              {isMeasuring ? `Siklus Berjalan: ${timeLeft}s dtk` : "Kondisi Siap Uji"}
            </span>
            <span className="text-sm font-mono text-white font-bold">
              {bubbleCounter} Gelembung Terkumpul
            </span>
          </div>

          <div className="flex gap-2">
            <button
              id="praktikum-start"
              onClick={startMeasurement}
              disabled={isMeasuring}
              className="flex-1 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold font-sans flex items-center justify-center gap-2 cursor-pointer disabled:opacity-40"
            >
              <Play className="w-3.5 h-3.5" />
              Mulai Pengamatan
            </button>
            <button
              id="praktikum-save"
              onClick={saveTrial}
              disabled={isMeasuring}
              className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/20 text-xs font-bold font-sans flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40"
            >
              <Save className="w-3.5 h-3.5" />
              Catat Uji
            </button>
          </div>
        </div>

        {/* Right Column (7 units): Sliders, Trial logs, and scientific conclusions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-5">
            <span className="text-xs font-bold text-white uppercase tracking-wider block border-b border-slate-800 pb-2">Konfigurator Variabel Bebas</span>
            
            {/* Variable 1: Sunlight */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-bold block">1. Intensitas Sinar Matahari (Foton):</span>
                <span className="font-mono text-emerald-450 font-bold">
                  {["Sangat Gelap", "Mendung Kurang", "Berawan Sedang", "Terang Maksimal", "Sangat Kuat (Ultra)"][intensity - 1]}
                </span>
              </div>
              <input
                id="praktikum-intensity"
                type="range"
                min="1"
                max="5"
                step="1"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Variable 2: CO2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-bold block">2. Polutan CO2 (Konsentrasi NaHCO3):</span>
                <span className="font-mono text-emerald-450 font-bold">{naHCO3.toFixed(1)} g/Liter air</span>
              </div>
              <input
                id="praktikum-nahco3"
                type="range"
                min="0.0"
                max="5.0"
                step="0.5"
                value={naHCO3}
                onChange={(e) => setNaHCO3(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Variable 3: Temperature */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-300 font-bold block">3. Suhu Air Solusi:</span>
                <span className="font-mono text-emerald-450 font-bold">{temp} °C</span>
              </div>
              <input
                id="praktikum-temp"
                type="range"
                min="10"
                max="45"
                step="1"
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Results logging table */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5">
            <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-4">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">Tabel Hasil Pengujian Terintegrasi</span>
              {loggedTrials.length > 0 && (
                <button
                  id="praktikum-clear"
                  onClick={clearTrials}
                  className="text-[10px] text-red-400 font-mono flex items-center gap-1 hover:underline"
                >
                  <RefreshCw className="w-2.5 h-2.5" /> Reset Hasil
                </button>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950/80 text-emerald-400 border-b border-slate-850">
                    <th className="p-2.5 font-semibold">Uji #</th>
                    <th className="p-2.5 font-semibold">Intensitas Sinar</th>
                    <th className="p-2.5 font-semibold">NaHCO3 (g/L)</th>
                    <th className="p-2.5 font-semibold">Suhu (°C)</th>
                    <th className="p-2.5 font-semibold">Gelembung/Menit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {loggedTrials.map((trial) => (
                    <tr key={trial.id} className="hover:bg-slate-950/20 text-slate-300">
                      <td className="p-2.5 font-mono">{trial.id}</td>
                      <td className="p-2.5">{trial.intensityText}</td>
                      <td className="p-2.5 font-mono">{trial.co2Level} g/L</td>
                      <td className="p-2.5 font-mono">{trial.tempLevel}°C</td>
                      <td className="p-2.5 font-mono font-bold text-emerald-400">{trial.bubbleCount} Gelembung</td>
                    </tr>
                  ))}
                  {loggedTrials.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-6 text-center text-[10px] text-slate-500 font-mono">
                        Belum ada uji yang dicatat. Klik 'Mulai Pengamatan' lalu 'Catat Uji' setelah gelembung naik.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Journal writeup and submission form */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
        <h3 className="font-sans font-bold text-base text-white border-b border-slate-850 pb-2">Jurnal Laporan Praktikum</h3>
        
        {journal.submitted ? (
          <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-305 text-sm flex gap-4 items-start">
            <CheckCircle className="w-6 h-6 text-emerald-405 shrink-0" />
            <div className="space-y-1">
              <span className="font-bold block text-emerald-400 text-base">Laporan Praktikum Ingenhousz Terverifikasi!</span>
              <p className="text-slate-200 text-xs">
                Dokumen analisis praktikum pengaruh kloroplas telah sukses diposting ke database harian pengajar. Anda dihadiahi lencana <strong>"Green Pioneer"</strong> serta tambahan skor <strong>+150 XP</strong> atas keuletan saintifik yang luar biasa.
              </p>
              <div className="mt-3 p-3 bg-slate-950/50 rounded-lg border border-slate-850 border-emerald-500/10">
                <span className="text-[10px] font-mono text-emerald-400 block font-bold mb-0.5">Kesimpulan Terarsip Anda:</span>
                <p className="font-sans text-slate-300 text-xs text-justify italic">{conclusionText}</p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={submitJournal} className="space-y-4">
            <div className="space-y-2">
              <label className="font-sans text-xs font-bold text-slate-200">
                Analisis & Kesimpulan Praktikum (Hubungan Intensitas, CO2, Suhu dengan fotosintesis, serta korelasi klorofil):
              </label>
              <textarea
                id="praktikum-conclusion"
                value={conclusionText}
                onChange={(e) => setConclusionText(e.target.value)}
                placeholder="Bagaimanakah pengaruh cahaya, suhu, dan kadar bikarbonat (CO2) terhadap jumlah gelembung? Tafsirkan kesimpulan ilmiah Anda disandingkan dengan fungsi luhur klorofil..."
                rows={5}
                className="w-full p-4 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
                required
              />
              <span className="text-[10px] text-slate-505 block">
                *Minimal lakukan 2 pengujian bervariasi dengan 'Catat Uji' sebelum memposting jurnal.
              </span>
            </div>

            <button
              id="btn-sub-praktikum"
              type="submit"
              className="py-3 px-8 rounded-xl bg-linear-to-r from-emerald-500 to-teal-400 text-white font-bold text-xs hover:from-emerald-400 hover:to-teal-300 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
            >
              Kirim Jurnal Praktikum & Klaim Lencana "Green Pioneer"
            </button>
          </form>
        )}
      </div>

    </div>
  );
}

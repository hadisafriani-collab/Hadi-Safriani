/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { RefleksiState } from "../types";
import { Sparkles, Heart, HeartHandshake, Eye, CheckCircle2 } from "lucide-react";

interface RefleksiViewProps {
  onUpdateReflection: (updated: RefleksiState) => void;
  reflection: RefleksiState;
  addPoints: (amount: number) => void;
}

export default function RefleksiView({
  onUpdateReflection,
  reflection,
  addPoints
}: RefleksiViewProps) {
  const [cognitive, setCognitive] = useState<number>(reflection.cognitive);
  const [affective, setAffective] = useState<number>(reflection.affective);
  const [spiritual, setSpiritual] = useState<number>(reflection.spiritual);
  const [environmental, setEnvironmental] = useState<number>(reflection.environmental);
  const [notes, setNotes] = useState<string>(reflection.notes);
  const [submitted, setSubmitted] = useState<boolean>(reflection.submitted);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notes.trim()) {
      alert("Harap tuliskan draf tindakan nyata pelestarian alam Anda terlebih dahulu!");
      return;
    }

    onUpdateReflection({
      cognitive,
      affective,
      spiritual,
      environmental,
      notes,
      submitted: true
    });
    setSubmitted(true);
    addPoints(100); // Reward +100 XP for submitting the comprehensive reflection
  };

  const slidersDef = [
    {
      state: cognitive,
      setState: setCognitive,
      icon: Eye,
      title: "1. Pemahaman Kognitif (Intelektual)",
      desc: "Seberapa jauh pemahaman ilmiah Anda meningkat tentang sel tumbuhan, klorofil, fotosintesis, dan pembelahan akar?",
      lowLabel: "Ragu-ragu",
      highLabel: "Paham Menyeluruh"
    },
    {
      state: affective,
      setState: setAffective,
      icon: Heart,
      title: "2. Respon Afektif (Emosional)",
      desc: "Seberapa takjub dan nyaman perasaan Anda mempelajari biologi yang dipadukan dengan mutiara ayat-ayat Al-Qur'an?",
      lowLabel: "Biasa Saja",
      highLabel: "Sangat Bersemangat"
    },
    {
      state: spiritual,
      setState: setSpiritual,
      icon: Sparkles,
      title: "3. Kesadaran Spiritual (Keimanan)",
      desc: "Seberapa dalam rasa keimanan dan keagungan kepada Allah SWT muncul atas keserasian rancang bangun sel-sel flora?",
      lowLabel: "Belum Sadar",
      highLabel: "Bertambah Iman"
    },
    {
      state: environmental,
      setState: setEnvironmental,
      icon: HeartHandshake,
      title: "4. Komitmen Lingkungan (Aksi Nyata)",
      desc: "Seberapa kuat tekad Anda menjaga dan melindungi kelestarian pepohonan di sekitar sesuai amanat Al-Qur'an?",
      lowLabel: "Kurang Peduli",
      highLabel: "Siap Beraksi"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Intro header */}
      <div className="p-6 rounded-2xl bg-linear-to-r from-teal-950 to-emerald-990 border border-emerald-500/10 space-y-2">
        <h2 className="font-sans font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-400" />
          Lembar Refleksi Diri (Deep Learning)
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed text-justify">
          Deep Learning menyaratkan integrasi utuh antara pikiran kognitif, kepekaan kalbu emosional, hidayah keimanan, dan ikhtiar fisik kelestarian bumi. Isilah lembar evaluasi refleksi komprehensif ini untuk mengukur kemajuan jati diri Anda:
        </p>
      </div>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 text-emerald-305 space-y-4">
          <div className="flex gap-4 items-start border-b border-slate-800 pb-4">
            <CheckCircle2 className="w-8 h-8 text-emerald-405 shrink-0" />
            <div className="space-y-1 text-left">
              <span className="font-bold block text-emerald-400 text-lg">Lembar Refleksi Tersegel Abadi!</span>
              <p className="text-slate-200 text-xs">
                Refleksi batin Anda telah diunggah dengan aman. Anda dianugerahi skor <strong>+100 XP</strong> atas keagungan kejujuran ini.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-850">
              <span className="text-[10px] text-slate-400 block font-bold">Kognitif</span>
              <span className="text-xl font-black text-emerald-400 font-mono">{cognitive} / 5</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-850">
              <span className="text-[10px] text-slate-400 block font-bold">Afektif</span>
              <span className="text-xl font-black text-emerald-400 font-mono">{affective} / 5</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-850">
              <span className="text-[10px] text-slate-400 block font-bold">Spiritual</span>
              <span className="text-xl font-black text-emerald-400 font-mono">{spiritual} / 5</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-850">
              <span className="text-[10px] text-slate-400 block font-bold">Lingkungan</span>
              <span className="text-xl font-black text-emerald-400 font-mono">{environmental} / 5</span>
            </div>
          </div>

          <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-850 text-left">
            <span className="text-[10px] font-mono text-emerald-400 block font-bold mb-1">Rencana Tindakan Hijau Anda:</span>
            <p className="font-sans text-slate-300 text-xs leading-relaxed italic text-justify">
              "{notes}"
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slidersDef.map((sld, idx) => {
              const Icon = sld.icon;
              return (
                <div key={idx} className="p-5 rounded-xl bg-slate-905 border border-slate-800 space-y-3">
                  <div className="flex gap-2.5 items-start">
                    <Icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-sans font-bold text-slate-205 text-xs sm:text-sm leading-tight">{sld.title}</h4>
                      <p className="font-sans text-slate-440 text-[11px] leading-relaxed mt-0.5">{sld.desc}</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between text-[10px] font-semibold text-slate-500 font-mono mb-1">
                      <span>{sld.lowLabel}</span>
                      <span className="text-emerald-400 text-sm font-black">{sld.state} / 5</span>
                      <span>{sld.highLabel}</span>
                    </div>
                    
                    <input
                      id={`ref-slider-${idx}`}
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={sld.state}
                      onChange={(e) => sld.setState(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action notes writeup */}
          <div className="p-5 rounded-xl bg-slate-905 border border-slate-800 space-y-2">
            <label className="font-sans text-xs font-bold text-slate-200">
              Rancang Rencana Tindakan Nyata (Stewardship Plan) Anda untuk menyelamatkan ekologi tumbuhan harian sekolah/rumah:
            </label>
            <textarea
              id="notes-refleksi-tindakan"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: Saya bertekad menanam 3 pot Lidah Mertua di kelas, bergiliran menyiram bersama piket kelas, dan tidak akan memotong dahan secara sembarangan..."
              rows={4}
              className="w-full p-4 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          <button
            id="btn-sub-refleksi-final"
            type="submit"
            className="w-full py-3 bg-linear-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-md"
          >
            Kunci Lembar Refleksi Diri & Klaim +100 XP
          </button>
        </form>
      )}
    </div>
  );
}

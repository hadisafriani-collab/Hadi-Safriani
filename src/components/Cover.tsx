/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BookOpen, Sprout, ShieldAlert, Award, Star } from "lucide-react";

interface CoverProps {
  onStart: () => void;
  points: number;
}

export default function Cover({ onStart, points }: CoverProps) {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-between p-6 sm:p-12 text-center rounded-3xl overflow-hidden bg-radial from-emerald-950 via-teal-980 to-slate-950 border border-emerald-500/20 shadow-2xl">
      {/* Decorative absolute SVGs to represent plants, roots, and holy lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="root-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 C 45 20, 35 40, 40 80 M40 40 C 60 50, 70 30, 80 40 M40 30 C 20 20, 10 50, 0 30" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="1.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#root-pattern)" />
        </svg>
      </div>
      
      {/* Visual Glowing Orb */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Metadata */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-emerald-500/20 pb-6">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider">
          <span className="font-bold border border-emerald-500/40 px-2 py-0.5 rounded uppercase">Kurikulum Merdeka</span>
          <span>•</span>
          <span>Kelas X / Fase E</span>
        </div>
        {points > 0 && (
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-mono">
            <Star className="w-3.5 h-3.5 fill-emerald-400 animate-pulse" />
            <span>Skor Anda: <strong className="font-bold">{points} XP</strong></span>
          </div>
        )}
      </div>

      {/* Main Branding & Headers */}
      <div className="relative z-10 my-auto max-w-3xl flex flex-col items-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium text-xs sm:text-sm mb-6 animate-pulse">
          <Sprout className="w-4 h-4 text-emerald-400" />
          <span>Integrasi Biologi Seluler & Isyarat Ayat Suci Al-Qur'an</span>
        </div>

        <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-none mb-6 select-none space-y-2">
          <span className="block text-3d-rich-main text-2xl sm:text-3xl lg:text-4xl uppercase tracking-widest text-[#0f172a] drop-shadow-sm">
            E-Modul
          </span>
          <span className="block text-3d-rich-brand text-4xl sm:text-6xl lg:text-7xl">
            Interaktif Sains
          </span>
          <span className="block text-3d-rich-quran text-3xl sm:text-5xl lg:text-6xl pt-1">
            Dalam Al-Qur'an
          </span>
        </h1>
        
        <p className="font-sans font-medium text-emerald-200/90 text-sm sm:text-base lg:text-lg tracking-wide mb-3 max-w-2xl">
          Pembelajaran Berbasis <span className="text-teal-300 font-bold">Problem Based Learning (PBL)</span> dalam Memahami Dunia Tumbuhan Berdasarkan Perspektif Al-Qur'an
        </p>

        <div className="h-0.5 w-32 bg-linear-to-r from-transparent via-emerald-400 to-transparent my-4"></div>

        <p className="font-mono text-xs text-emerald-400/80 max-w-xl line-clamp-2">
          "Maka Kami keluarkan dari tumbuh-tumbuhan itu materi yang hijau (Khadhiran), yang Kami keluarkan darinya butir-butir yang banyak (biji-bijian)..." — QS. Al-An'am: 99
        </p>
      </div>

      {/* Decorative Graphics: Root and Photosynthesis Concept */}
      <div className="relative z-10 w-full max-w-lg mx-auto bg-emerald-950/20 border border-emerald-500/10 rounded-2xl p-4 flex justify-around items-center gap-4 bg-teal-950/30 backdrop-blur-md mb-8">
        <div className="flex flex-col items-center p-2 text-emerald-300">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 mb-2 shadow">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-sans text-xs font-semibold">Energi Matahari</span>
        </div>
        
        <div className="text-emerald-500 text-xl font-bold">→</div>

        <div className="flex flex-col items-center p-2 text-emerald-300">
          <div className="w-12 h-12 rounded-full bg-emerald-400/30 flex items-center justify-center border border-emerald-300/40 mb-2 relative">
            <BookOpen className="w-6 h-6 text-emerald-200" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-400"></span>
            </span>
          </div>
          <span className="font-sans text-xs font-bold text-white">Al-Qur'an & Sains</span>
        </div>

        <div className="text-emerald-500 text-xl font-bold">←</div>

        <div className="flex flex-col items-center p-2 text-emerald-300">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 mb-2 shadow">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className="font-sans text-xs font-semibold">Fisiologi Sel</span>
        </div>
      </div>

      {/* Footer / Launch Button */}
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-4">
        <button
          id="btn-buka-modul"
          onClick={onStart}
          className="w-full py-4 px-8 rounded-xl bg-linear-to-r from-emerald-500 to-teal-400 text-white font-bold text-lg shadow-lg hover:from-emerald-400 hover:to-teal-300 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Mulai Belajar Interaktif
        </button>
        
        <div className="text-emerald-400/60 font-sans text-[10px] sm:text-xs tracking-wide">
          Disusun oleh Kelompok Pakar Pendidikan Biologi Islam & Kurikulum Merdeka
        </div>
      </div>
    </div>
  );
}

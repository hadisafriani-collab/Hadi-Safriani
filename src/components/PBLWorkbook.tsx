/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { PBLAnswer } from "../types";
import { AlertTriangle, Users, Search, Lightbulb, CheckSquare, Award } from "lucide-react";

interface PBLWorkbookProps {
  answers: PBLAnswer;
  onUpdateAnswers: (updated: Partial<PBLAnswer>) => void;
  addPoints: (amount: number, badgeId?: string) => void;
  unlockedBadges: string[];
}

export default function PBLWorkbook({
  answers,
  onUpdateAnswers,
  addPoints,
  unlockedBadges
}: PBLWorkbookProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Form local states to edit
  const [tahap1Answers, setTahap1Answers] = useState(answers.tahap1);
  const [tahap2Group, setTahap2Group] = useState(answers.tahap2Group);
  const [tahap2Analysis, setTahap2Analysis] = useState(answers.tahap2Analysis);
  const [tahap3Observation, setTahap3Observation] = useState(answers.tahap3Observation);
  const [tahap3Literature, setTahap3Literature] = useState(answers.tahap3Literature);
  const [tahap4SolutionType, setTahap4SolutionType] = useState<any>(answers.tahap4SolutionType);
  const [tahap4Description, setTahap4Description] = useState(answers.tahap4Description);
  const [tahap5Reflection, setTahap5Reflection] = useState(answers.tahap5Reflection);

  const saveStage = (stageIdx: number) => {
    const updatedCompleted = [...answers.completedStages];
    updatedCompleted[stageIdx] = true;

    let updateObj: Partial<PBLAnswer> = { completedStages: updatedCompleted };
    
    // Save state accordingly
    if (stageIdx === 0) updateObj.tahap1 = tahap1Answers;
    if (stageIdx === 1) {
      updateObj.tahap2Group = tahap2Group;
      updateObj.tahap2Analysis = tahap2Analysis;
    }
    if (stageIdx === 2) {
      updateObj.tahap3Observation = tahap3Observation;
      updateObj.tahap3Literature = tahap3Literature;
    }
    if (stageIdx === 3) {
      updateObj.tahap4SolutionType = tahap4SolutionType;
      updateObj.tahap4Description = tahap4Description;
    }
    if (stageIdx === 4) {
      updateObj.tahap5Reflection = tahap5Reflection;
    }

    onUpdateAnswers(updateObj);
    addPoints(100); // Give 100 XP for completing a PBL stage!

    // Check if we unlock "Problem_Solver" after all stages are saved
    const allDone = updatedCompleted.every((s) => s === true);
    if (allDone && !unlockedBadges.includes("Problem_Solver")) {
      addPoints(0, "Problem_Solver");
    }

    // Move to next tab automatically if not yet the last
    if (stageIdx < 4) {
      setActiveTab(stageIdx + 1);
    }
  };

  const stagesDef = [
    { label: "Tahap 1: Orientasi", icon: AlertTriangle },
    { label: "Tahap 2: Organisasi", icon: Users },
    { label: "Tahap 3: Investigasi", icon: Search },
    { label: "Tahap 4: Solusi", icon: Lightbulb },
    { label: "Tahap 5: Evaluasi", icon: CheckSquare }
  ];

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="p-6 rounded-2xl bg-linear-to-r from-red-950/40 to-slate-900 border border-red-500/10 space-y-2">
        <h2 className="font-sans font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
          Problem Based Learning (PBL) Workbook
        </h2>
        <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed text-justify">
          Model PBL menuntut Anda berperan aktif sebagai saintis lingkungan hidup muslim. Kasus nyata: 
          <strong className="text-red-305"> "Kerusakan hutan akibat eksploitasi gila-gilaan memicu banjir bandang, erosi masif, dan tanah longsor mematikan di berbagai kawasan lereng Indonesia."</strong> 
          Selesaikan 5 modul tahapan di bawah ini untuk merumuskan aksi penyelamatan bumi berdasarkan petunjuk QS. Al-A'raf: 56.
        </p>
      </div>

      {/* Syntax Tab Controls */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-2">
        {stagesDef.map((s, idx) => {
          const Icon = s.icon;
          const isDone = answers.completedStages[idx];
          return (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-sans font-bold rounded-lg transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-emerald-500 text-white shadow"
                  : "bg-slate-950 hover:bg-slate-900 text-slate-400 border border-slate-850"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{s.label}</span>
              {isDone && <span className="text-emerald-400 font-mono text-[9px] font-bold">✓</span>}
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8">
        
        {/* TAHAP 1: ORIENTASI MASALAH */}
        {activeTab === 0 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">Tahap 1: Orientasi Siswa pada Masalah</span>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white">Refleksi Kritis Isu Kebencanaan Alam</h3>
            </div>
            
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 text-xs sm:text-sm text-slate-330 space-y-3 leading-relaxed text-left">
              <p>
                <strong>Konteks Isu:</strong> Kerusakan ekosistem hutan basah mengganggu siklus hidrologi bumi. Hutan bertindak sebagai wadah absorpsi air limpasan permukaan. Ketika digunduli, air menggelosor bebas mengikis lapisan atas tanah tersubur (topsoil) memicu longsor. Al-Qur'an secara tegas memperingatkan dalam QS. Al-A'raf: 56: <em>"Dan janganlah kamu berbuat kerusakan di bumi setelah diperbaikinya..."</em>.
              </p>
              <p className="font-semibold text-emerald-400">Pertanyaan Analitikal:</p>
              <p>Bagaimana ketiadaan sel-sel penambat akar tumbuhan mengganggu struktur mekanik tanah lereng dari ancaman jenuh air hujan pembawa bencana?</p>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-xs font-bold text-slate-200">Jawaban Hipotesis Anda (Tinjauan Mekanika Akar):</label>
              <textarea
                id="pbl-tahap1"
                value={tahap1Answers}
                onChange={(e) => setTahap1Answers(e.target.value)}
                placeholder="Tuliskan analisis hipotesis logis Anda di sini terkait mengapa lereng gundul rapuh..."
                rows={5}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              id="pbl-save1"
              onClick={() => saveStage(0)}
              className="py-2.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold font-sans cursor-pointer"
            >
              Simpan Hipotesis & Lanjut ke Organisasi
            </button>
          </div>
        )}

        {/* TAHAP 2: MENGORGANISASIKAN PESERTA DIDIK */}
        {activeTab === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">Tahap 2: Mengorganisasikan Siswa untuk Belajar</span>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white">Pembagian Peran & Identifikasi Tugas</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-205">Susunan Kelompok / Nama Anggota:</label>
                <input
                  id="pbl-tahap2-group"
                  type="text"
                  value={tahap2Group}
                  onChange={(e) => setTahap2Group(e.target.value)}
                  placeholder="Contoh: Ahmad, Sarah, Fatimah (Kelompok 3)"
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-850 font-sans text-xs text-slate-350 space-y-1.5 leading-relaxed">
                <p className="font-bold text-emerald-400 mb-1">Rekomendasi Pembagian Peran Kerja:</p>
                <p>• <strong>Moderator / Ketua:</strong> Memimpin jalannya diskusi pemecahan masalah.</p>
                <p>• <strong>Peneliti (Researcher):</strong> Mencari data di internet / perpustakaan sekolah.</p>
                <p>• <strong>Desainer Poster:</strong> Mengonstruksi ilustrasi pendorong penanaman.</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-xs font-bold text-slate-200">Identifikasi Masalah (Masalah apa saja yang terdeteksi dari kasus deforestasi?):</label>
              <textarea
                id="pbl-tahap2-analysis"
                value={tahap2Analysis}
                onChange={(e) => setTahap2Analysis(e.target.value)}
                placeholder="Rincilah daftar masalah spesifik seperti: banjir bandang merusak pemukiman, kekeringan sumur hara, hilangnya oksigen regional..."
                rows={4}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              id="pbl-save2"
              onClick={() => saveStage(1)}
              className="py-2.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold font-sans cursor-pointer"
            >
              Kunci Rencana & Mulai Investigasi
            </button>
          </div>
        )}

        {/* TAHAP 3: MEMBIMBING PENYELIDIKAN */}
        {activeTab === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">Tahap 3: Membimbing Penyelidikan Individu/Kelompok</span>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white">Lembar Observasi & Studi Literatur</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-200">Laporan Observasi Lapangan / Taman Sekolah:</label>
                <textarea
                  id="pbl-tahap3-obs"
                  value={tahap3Observation}
                  onChange={(e) => setTahap3Observation(e.target.value)}
                  placeholder="Catat kondisi tanaman di taman sekolah Anda. Apakah tanah subur, gembur, memiliki resapan biopori atau keras mengering?"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-200">Studi Literatur (Data Ilmiah Dari Jurnal):</label>
                <textarea
                  id="pbl-tahap3-lit"
                  value={tahap3Literature}
                  onChange={(e) => setTahap3Literature(e.target.value)}
                  placeholder="Tuliskan data penguat dari Jurnal Plant Science misalnya: 'Tegakan akar pohon hutan menstabilkan tebing curam hingga 80% dibanding lereng gundul...'"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <button
              id="pbl-save3"
              onClick={() => saveStage(2)}
              className="py-2.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold font-sans cursor-pointer"
            >
              Simpan Hasil Investigasi & Susun Karya Solutif
            </button>
          </div>
        )}

        {/* TAHAP 4: MENGEMBANGKAN KARYA SOLUSI */}
        {activeTab === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">Tahap 4: Mengembangkan dan Menyajikan Hasil Karya</span>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white">Desain Poster & Strategi Kampanye Pelestarian</h3>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-200">Jenis Karya Solutif Yang Dipilih:</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "poster", label: "Poster Fisik/Digital" },
                    { value: "infografis", label: "Infografis Keanekaragaman" },
                    { value: "kampanye", label: "Kampanye Hijau Media Sosial" }
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setTahap4SolutionType(opt.value as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-sans font-bold cursor-pointer transition-all ${
                        tahap4SolutionType === opt.value
                          ? "bg-teal-500 text-white"
                          : "bg-slate-950 text-slate-400 border border-slate-850 hover:bg-slate-900"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-200">Rancangan Detail Konten / Konsep Kampanye Anda:</label>
                <textarea
                  id="pbl-tahap4-desc"
                  value={tahap4Description}
                  onChange={(e) => setTahap4Description(e.target.value)}
                  placeholder="Uraikan konsep visual, slogan dakwah lingkungan hidup (Eco-Islam), draf teks seruan, serta usulan solusi hijau sekolah..."
                  rows={5}
                  className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <button
              id="pbl-save4"
              onClick={() => saveStage(3)}
              className="py-2.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold font-sans cursor-pointer"
            >
              Simpan Konsep Karya & Masuk Ke Evaluasi
            </button>
          </div>
        )}

        {/* TAHAP 5: ANALISIS DAN EVALUASI */}
        {activeTab === 4 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">Tahap 5: Menganalisis dan Mengevaluasi Proses Pemecahan Masalah</span>
              <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white">Presentasi Masukan & Refleksi Akhir</h3>
            </div>

            <div className="bg-slate-950/40 p-5 rounded-xl border border-slate-850 text-xs sm:text-sm text-slate-350 space-y-3 leading-relaxed text-justify">
              <p>
                <strong>Proses Presentasi:</strong> Hubungi Guru Pengampu IPA sekolah untuk menjadwalkan presentasi kelompok terkait strategi kampanye. Catat kritik, masukan konstruk dari kelompok penanya, dan saran biologi hara.
              </p>
              <p className="font-bold text-emerald-450 uppercase tracking-wide">Rubrik Rubrik Asesmen Diri (Presentasi):</p>
              <ul className="list-disc pl-4 space-y-1 text-xs">
                <li>Aspek Kejelasan Penyampaian (skor 1-100)</li>
                <li>Aspek Integrasi Dalil Al-Qur'an (skor 1-100)</li>
                <li>Aspek Validitas Data Biologi Tumbuhan (skor 1-100)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-xs font-bold text-slate-200">Catatan Refleksi & Pertanyaan Kelompok Penanya:</label>
              <textarea
                id="pbl-tahap5-ref"
                value={tahap5Reflection}
                onChange={(e) => setTahap5Reflection(e.target.value)}
                placeholder="Tuliskan di sini masukan krusial dari audiens kelas Anda serta hasil refleksi kognitif Anda pascapresentasi..."
                rows={5}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs text-justify font-sans focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              id="pbl-save5"
              onClick={() => saveStage(4)}
              className="py-2.5 px-6 rounded-lg bg-linear-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-white text-xs font-bold font-sans cursor-pointer shadow-md"
            >
              Kunci & Selesaikan Seluruh Siklus PBL
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

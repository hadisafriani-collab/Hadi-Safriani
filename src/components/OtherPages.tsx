/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Book, Compass, FileText, List, ArrowRight, Sparkles, BookOpen, Search } from "lucide-react";

/* KATA PENGANTAR PAGE */
export function KataPengantar() {
  return (
    <div className="bg-slate-900/60 border border-emerald-500/10 p-6 sm:p-10 rounded-2xl shadow-xl space-y-6">
      <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
        <BookOpen className="w-8 h-8 text-emerald-400" />
        <h2 className="font-sans font-bold text-2xl text-white">Kata Pengantar</h2>
      </div>
      <div className="font-sans text-sm sm:text-base text-slate-200 leading-relaxed space-y-4">
        <p className="italic font-semibold text-emerald-300">"Bismillahirahmanirrahim..."</p>
        <p>
          Segala puji bagi Allah SWT, Tuhan semesta alam yang telah menganugerahkan akal, ilmu, dan hidayah kepada hamba-Nya. Shalawat serta salam senantiasa tercurahkan kepada junjungan kita, Nabi Agung Muhammad SAW, pembawa ajaran kebenaran dan pelopor tradisi ilmiah teragung di dunia.
        </p>
        <p>
          Alhamdulillah, atas taufiq-Nya, kami mempersembahkan <strong>E-Modul Interaktif Sains Dalam Al-Qur'an Berbasis Problem Based Learning (PBL)</strong>. Modul digital ini dirancang khusus untuk peserta didik SMA/MA Kelas X (Fase E) dengan menerapkan nilai-nilai <strong>Kurikulum Merdeka</strong> yang progresif, dipadukan konsep <strong>Deep Learning (Mindful, Meaningful, & Joyful Learning)</strong>.
        </p>
        <p>
          Keunikan utama dari modul ini terletak pada harmonisasi integrasi antara fakta-fakta biologi tumbuhan dengan khazanah ayat-ayat suci Al-Qur'an. Kami membedah 8 submateri utama secara objektif ilmiah sekaligus merenungkan rahasia penciptaan Allah SWT guna menumbuhkan kecerdasan intelektual, kepedulian lingkungan, serta keluhuran spiritual peserta didik.
        </p>
        <p>
          Melalui model pembelajaran <strong>Problem Based Learning (PBL)</strong>, peserta didik tidak hanya menghafal nama spesies, melainkan ditantang memikirkan solusi dari kerusakan hutan riil Indonesia. Kami berharap modul ini mampu menjadi oase pembelajaran biologi yang kaya makna serta berbobot karakter Profil Pelajar Pancasila.
        </p>
        <div className="pt-6 border-t border-emerald-500/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-emerald-400/80">
          <span>Penyusun E-Modul Interaktif</span>
          <span>Sleman, Yogyakarta, Juni 2026</span>
        </div>
      </div>
    </div>
  );
}

/* PETUNJUK PENGGUNAAN PAGE */
export function PetunjukPenggunaan() {
  const steps = [
    { title: "Mulai dari Cover & Cover Materi", desc: "Klik tombol mulai belajar untuk mengakses materi pembelajaran sesuai urutan." },
    { title: "Pelajari Submateri Integrasi", desc: "Tiap bab menyajikan penjelasan ilmiah biologi, ayat Al-Qur'an lengkap teks arab + terjemahan, tafsir Al-Misbah / Al-Maraghi, serta fakta ilmiah terupdate." },
    { title: "Ikuti Sintaks PBL", desc: "Selesaikan 5 Tahap Problem Based Learning untuk menganalisis kerusakan hutan dan merancang poster solusi pelestarian." },
    { title: "Kerjakan LKPD Berbasis HOTS", desc: "Latih kemampuan berpikir kritis tingkat tinggi melalui soal-soal Analisis, Evaluasi, dan Kreasi mandiri." },
    { title: "Lakukan Praktikum Virtual", desc: "Atur intensitas cahaya dan karbon dioksida di lab simulasi fotosintesis, lalu catat datanya ke dalam lembar jurnal digital." },
    { title: "Gamifikasi & Asesmen", desc: "Kejar XP setinggi mungkin, klaim 4 Badge prestasi, selesaikan 7-Day Challenges, lalu ukur pemahaman Anda di Pretest dan Posttest." }
  ];

  return (
    <div className="bg-slate-900/60 border border-emerald-500/10 p-6 sm:p-10 rounded-2xl shadow-xl space-y-6">
      <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
        <Compass className="w-8 h-8 text-emerald-400" />
        <h2 className="font-sans font-bold text-2xl text-white">Petunjuk Penggunaan E-Modul</h2>
      </div>
      <p className="font-sans text-sm text-slate-300">
        Untuk mendapatkan hasil belajar yang optimal dan mendalam (Deep Learning), disarankan mengikuti alur navigasi interaktif e-modul di bawah ini:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4 p-4 rounded-xl bg-teal-980/20 border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
            <div className="w-8 h-8 shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 font-mono font-bold text-sm">
              {index + 1}
            </div>
            <div className="space-y-1">
              <h4 className="font-sans font-semibold text-white text-sm sm:text-base">{step.title}</h4>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* CAPAIAN DAN TUJUAN PEMBELAJARAN (COVERS PHASE E & PROFIL PANCASILA) */
export function CapaianTujuan() {
  return (
    <div className="bg-slate-900/60 border border-emerald-500/10 p-6 sm:p-10 rounded-2xl shadow-xl space-y-8">
      {/* Capaian Pembelajaran */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-3">
          <FileText className="w-7 h-7 text-emerald-400" />
          <h2 className="font-sans font-bold text-xl text-white">Capaian Pembelajaran (CP) - Fase E (Kelas X)</h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed bg-teal-990/35 p-4 rounded-xl border border-teal-500/10">
          "Peserta didik memiliki kemampuan menciptakan solusi atas permasalahan-permasalahan berdasarkan pemahaman konsep keanekaragaman makhluk hidup beserta peranannya secara khusus di materi Plantae (Tumbuhan), dengan mengidentifikasi hubungan timbal balik antara organisme dengan lingkungan hidup secara seimbang dan berkelanjutan."
        </p>
      </div>

      {/* Tujuan Pembelajaran */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-3">
          <Sparkles className="w-7 h-7 text-emerald-400" />
          <h2 className="font-sans font-bold text-xl text-white">Tujuan Pembelajaran (TP)</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs sm:text-sm text-slate-200 list-none">
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Menganalisis hubungan antara air hujan dengan metabolisme respirasi dan perkecambahan biji tumbuhan berdasarkan QS. Qaf: 9.</span>
          </li>
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Menjelaskan proses transportasi xilem penyerob air tanah di akar sesuai isyarat QS. Az-Zumar: 21.</span>
          </li>
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Memetakan reaksi fotosintesis (terang-gelap) dan dekomposisi H2O melalui fotolisis sejalan QS. An-Nahl: 10-11.</span>
          </li>
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Menganalisis jenis adaptasi tumbuhan xerofit, halofit, dan hidrofit di sekeliling air tanah berdasarkan QS. Ar-Ra'd: 4.</span>
          </li>
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Membedakan struktur klorofil pigmentasi ('Khadhiran') dalam translokasi glukosa buah gandum sesuai QS. Al-An'am: 99.</span>
          </li>
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Mengklasifikasikan keanekaragaman flora berdasarkan habitus merambat (ma'rusyat) dan tidak merambat seturut QS. Al-An'am: 141.</span>
          </li>
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Menganalisis hukum 'berpasang-pasangan' seksual (al-azwaj) pada polinasi gamet tumbuhan seturut QS. Yasin: 36.</span>
          </li>
          <li className="flex gap-2.5 items-start bg-slate-900/40 p-3 rounded-lg border border-slate-800">
            <span className="text-emerald-400 font-bold shrink-0">✓</span>
            <span>Merumuskan aksi nyata pencegahan bencana deforestasi hutan sesuai larangan fasad QS. Al-A'raf: 56.</span>
          </li>
        </ul>
      </div>

      {/* Profil Pelajar Pancasila & 4C */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-emerald-500/10">
        <div className="p-4 bg-emerald-950/20 border border-emerald-500/15 rounded-xl">
          <h4 className="font-sans font-bold text-emerald-300 text-sm mb-3">Profil Pelajar Pancasila (P3)</h4>
          <ul className="space-y-2 text-xs font-sans text-slate-300">
            <li><strong>• Beriman, Bertakwa kepada Tuhan YME:</strong> Menyadari keajaiban penciptaan flora lewat ayat-ayat-Nya.</li>
            <li><strong>• Bernalar Kritis:</strong> Menganalisis kerusakan hutan, menginvestigasi data, dan merumuskan argumen logis.</li>
            <li><strong>• Mandiri & Gotong Royong:</strong> Berkolaborasi dalam memecahkan masalah ekosistem di kelompok PBL.</li>
            <li><strong>• Kreatif:</strong> Mendesain produk solutif pelestarian alam berupa infografis rimbun.</li>
          </ul>
        </div>

        <div className="p-4 bg-teal-950/20 border border-teal-500/15 rounded-xl">
          <h4 className="font-sans font-bold text-teal-300 text-sm mb-3">Integrasi 4C Keterampilan Abad-21</h4>
          <ul className="space-y-2 text-xs font-sans text-slate-300">
            <li><strong>• Critical Thinking:</strong> Mengidentifikasi bias klaim reboisasi serta mengevaluasi isu deforestasi.</li>
            <li><strong>• Creativity:</strong> Mengembangkan rancangan agroforestri fungsional tebing curam.</li>
            <li><strong>• Collaboration:</strong> Membagi tugas investigasi literatur di lab sains dan perpustakaan digital.</li>
            <li><strong>• Communication:</strong> Mempresentasikan hasil poster dan memberi sanggahan ilmiah di forum diskusi.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* PETA KONSEP MATERI (INTERACTIVE GRAPHICS) */
export function PetaKonsep() {
  const nodes = [
    { label: "Sains Al-Qur'an", type: "root", x: "center", y: "top", desc: "Integrasi QS. Al-An'am, Qaf, Az-Zumar dll." },
    { label: "Non-Vaskular (Bryophyta)", type: "branch-left", x: "left", y: "mid", desc: "Lumut Daun/Lumut Hati, Tanpa Xilem-Floem" },
    { label: "Vaskular (Tracheophyta)", type: "branch-right", x: "right", y: "mid", desc: "Memiliki jaringan ikat pengangkut teratur" },
    { label: "Akar & Fotosintesis", type: "sub-root", x: "center", y: "bottom", desc: "Osmosis sel rambut akar & fotolisis H2O kloro-porfirin" },
    { label: "Paku (Pteridophyta)", type: "leaf-left", x: "left-low", y: "low", desc: "Metagenesis berspora dominan generasi sporofit" },
    { label: "Biji (Spermatophyta)", type: "leaf-right", x: "right-low", y: "low", desc: "Angiospermae (Monokotil & Dikotil) & Gymnospermae" },
  ];

  return (
    <div className="bg-slate-900/60 border border-emerald-500/10 p-6 sm:p-10 rounded-2xl shadow-xl space-y-6">
      <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
        <List className="w-8 h-8 text-emerald-400" />
        <h2 className="font-sans font-bold text-2xl text-white">Peta Konsep Pembelajaran</h2>
      </div>
      <p className="font-sans text-xs sm:text-sm text-slate-300">
        Berikut bagan terintegrasi klasifikasi dan jalur fisiologis dunia tumbuhan (Kingdom Plantae) yang diuraikan penuh dalam e-modul ini:
      </p>

      {/* Visual interactive representation of Concept Map */}
      <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-xl flex flex-col gap-6 items-center">
        {/* Level 1 */}
        <div className="w-full max-w-sm text-center">
          <div className="p-3 bg-emerald-500/20 border border-emerald-400/50 rounded-xl shadow-md">
            <span className="font-sans font-bold text-white text-xs sm:text-sm">Kingdom Plantae (Tumbuhan) & Al-Qur'an</span>
            <p className="font-mono text-[10px] text-emerald-300 mt-1">Interaksi Holistik Fitologi dan Aspek Keagamaan</p>
          </div>
        </div>

        <div className="h-4 w-0.5 bg-emerald-500/30"></div>

        {/* Level 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div className="p-4 bg-teal-950/40 border border-teal-500/20 rounded-xl relative">
            <span className="absolute top-2 right-2 text-[9px] text-teal-400 font-mono">Atracheophyta</span>
            <h4 className="font-sans font-bold text-emerald-400 text-xs sm:text-sm mb-1">Tumbuhan Berpembuluh</h4>
            <p className="font-sans text-xs text-slate-300">Memiliki jaringan Xilem (pengedar air hara) & Floem (pengedar asimilasi pangan).</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-slate-900 text-teal-350 text-[10px] rounded border border-slate-850">Pteridophyta (Paku)</span>
              <span className="px-2 py-0.5 bg-slate-900 text-teal-350 text-[10px] rounded border border-slate-850">Spermatophyta (Biji)</span>
            </div>
          </div>

          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl relative">
            <span className="absolute top-2 right-2 text-[9px] text-slate-500 font-mono">Tracheophyta</span>
            <h4 className="font-sans font-bold text-slate-300 text-xs sm:text-sm mb-1">Tumbuhan Tak Berpembuluh</h4>
            <p className="font-sans text-xs text-slate-400">Penyaluran air tanah terjadi perlahan secara difusi osmosis langsung antarsel tetangga.</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 bg-slate-900 text-slate-455 text-[10px] rounded border border-slate-850">Bryophyta (Lumut)</span>
            </div>
          </div>
        </div>

        <div className="h-4 w-0.5 bg-emerald-500/30"></div>

        {/* Level 3 */}
        <div className="w-full">
          <div className="p-4 bg-emerald-990/20 border border-emerald-500/10 rounded-xl text-center">
            <h4 className="font-sans font-bold text-emerald-300 text-xs sm:text-sm mb-2">Interaksi Metabolisme & Adaptasi Organ (Fase Fisiologis)</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-sans">
              <div className="p-2 bg-slate-900 rounded border border-slate-800">Radix (Penyerapan Akar)</div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">Khadhiran & Kloroplas</div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">Fotosintesis H2O fotolisis</div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800">Adaptasi & Reproduksi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SEARCHABLE GLOSARIUM */
export function Glosarium() {
  const [searchTerm, setSearchTerm] = useState("");
  const glossaryData = [
    { term: "Aerenkim", def: "Jaringan parenkim khusus dengan ruang sel antar-udara besar pada tanaman hidrofit, memungkinkan pertukaran gas oksigen tinggi serta membantu terapung." },
    { term: "Angiospermae", def: "Subdivisi tumbuhan berbiji di mana bakal bijinya dilindungi oleh dinding bakal buah (biji tertutup), mencakup monokotil dan dikotil." },
    { term: "Apoplas", def: "Rute transportasi air dan mineral melintasi dinding sel luar tumbuhan tanpa menembus membran sel semipermeabel." },
    { term: "Bryophyta", def: "Kelompok tumbuhan darat bertubuh kecil, belum memiliki pembuluh angkut pengikat air sejati (xilem-floem), berupa lumut daun, hati dan tanduk." },
    { term: "Fiksasi Karbon", def: "Tahap asimilasi awal di mana molekul zat karbon dioksida gas diikat ke senyawa kimia penangkap glukosa (RuBP) di stroma kloroplas." },
    { term: "Fotolisis", def: "Proses pemecahan air (H2O) oleh molekul kloroplas reaksi terang dibantu energi cahaya bebas, menghasilkan gas oksigen O2, proton H, dan elektron bebas." },
    { term: "Gymnospermae", def: "Tumbuhan berbiji terbuka di mana biji tidak ditutupi daun buah, contohnya pinus, melinjo, dan pakis haji." },
    { term: "Halofit", def: "Jenis adaptasi fisiologi tumbuhan yang hidup di habitat berkomposisi keasinan/salinitas pekat tinggi seperti garis pantai lumpur payau." },
    { term: "Imbibisi", def: "Penyerapan kandungan air secara pasif masuk ke dalam embrio benih kering sebagai inisiasi awal enzim respirasi melahirkan kloroplas." },
    { term: "Khadhiran", def: "Bahasa Arab literal Al-Qur'an (QS. Al-An'am: 99) merujuk materi hijau pembentuk biomasa gandum padi; yang direpresentasikan sains sebagai zat hijau daun klorofil." },
    { term: "Kloroplas", def: "Organel seluler berbentuk lensa dengan membran ganda pada sel eukariotik tumbuhan yang melakukan reaksi asimilasi pangan fotosintesis." },
    { term: "Metagenesis", def: "Pergiliran tahapan keturunan hidup makhluk hidup secara runut berkala antara fase generatif beraura gametofit dan fase vegetatif penyimpan spora." },
    { term: "Osmosis", def: "Perpindahan cairan pelarut (seperti air murni) melintasi sekat selaput semipermeabel tipis dari titik konsentrasi hara encer ke hara pekat." },
    { term: "Plantae", def: "Kingdom makhluk hidup multiseluler, bersifat eukariotik, memiliki dinding selulosa kokoh, serta mengandung klorofil untuk melangsungkan fotosintesis mandiri." },
    { term: "Radix", def: "Istilah latin organ akar tumbuhan yang berfungsi menambatkan tubuh tumbuhan ke tanah dan menghisap air mineral." },
    { term: "Tigmotropisme", def: "Gerak melengkung tumbuh tanaman akibat mendeteksi adanya stimulus gesekan/sentuhan mekanis dengan permukaan benda kokoh terdekat." },
    { term: "Xilem", def: "Berkas jaringan pipa kapiler searah mengangkut pasokan bahan air bersih dan garam-garaman mineral dari akar meluncur naik ke daun asimilasi." }
  ];

  const filtered = glossaryData.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-900/60 border border-emerald-500/10 p-6 sm:p-10 rounded-2xl shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-3">
          <Book className="w-8 h-8 text-emerald-400" />
          <h2 className="font-sans font-bold text-2xl text-white">Glosarium Istilah</h2>
        </div>
        
        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-emerald-400/60" />
          <input
            type="text"
            placeholder="Cari istilah biologi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <div key={index} className="p-4 bg-slate-950/40 rounded-xl border border-slate-850 hover:border-emerald-500/20 transition-all">
              <strong className="font-sans text-emerald-405 text-sm sm:text-base">{item.term}</strong>
              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">{item.def}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-xs text-slate-505 font-mono">
            Istilah "{searchTerm}" tidak ditemukan dalam bank data glosarium.
          </div>
        )}
      </div>
    </div>
  );
}

/* DAFTAR PUSTAKA */
export function DaftarPustaka() {
  const references = [
    "Campbell, N. A., Reece, J. B., Lisa, A. U., Michael, L. C., Steven, A. W., Peter, V. M., & Robert, B. J. (2020). *Campbell Biology (12th Edition)*. New York: Pearson Education.",
    "Irnaningtyas, & Sagita, D. (2022). *Ilmu Pengetahuan Alam: Biologi untuk SMA/MA Kelas X*. Jakarta: Erlangga.",
    "Shihab, M. Q. (2017). *Tafsir Al-Misbah: Pesan, Kesan, dan Keserasian Al-Qur'an (Edisi Baru)*. Jakarta: Lentera Hati.",
    "Al-Maraghi, A. M. (1993). *Tafsir Al-Maraghi*. Kairo: Dar Al-Fikr.",
    "Taiz, L., Zeiger, E., Møller, I. M., & Murphy, A. (2018). *Plant Physiology and Development (6th Edition)*. Sunderland: Sinauer Associates Inc.",
    "Baird, A. S., et al. (2022). 'The evolution of plant xylem and mechanical cells: A review'. *American Journal of Botany*, 109(5), pp. 780-798.",
    "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia. (2022). *Kurikulum Merdeka Pembelajaran IPA Fase E Kelas X*. Jakarta: Puskurjar.",
    "Zuhaili, W. (2015). *Tafsir Al-Munir: Aqidah, Syari'ah, dan Manhaj*. Damaskus: Darul Fikr."
  ];

  return (
    <div className="bg-slate-900/60 border border-emerald-500/10 p-6 sm:p-10 rounded-2xl shadow-xl space-y-6">
      <div className="flex items-center gap-3 border-b border-emerald-500/20 pb-4">
        <BookOpen className="w-8 h-8 text-emerald-400" />
        <h2 className="font-sans font-bold text-2xl text-white">Daftar Pustaka</h2>
      </div>
      <p className="font-sans text-xs sm:text-sm text-slate-300">
        Acuan kepustakaan ilmiah dan rujukan tafsir teologis yang dipakai dalam mendasari materi E-Modul Interaktif:
      </p>

      <ul className="space-y-4 text-xs sm:text-sm font-sans text-slate-350 list-none">
        {references.map((ref, idx) => (
          <li key={idx} className="flex gap-3 items-start bg-slate-950/20 p-3.5 rounded-lg border border-slate-850">
            <span className="w-5 h-5 shrink-0 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-mono text-[10px] font-bold">
              {idx + 1}
            </span>
            <span className="leading-relaxed hover:text-white transition-all text-slate-300">
              {/* Replace markdown italic with native look */}
              {ref.split("*").map((part, index) => 
                index % 2 === 1 ? <em key={index} className="text-emerald-300 font-medium not-italic">{part}</em> : part
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { QuizQuestion, HOTSQuestion } from "../types";

export const PRETEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Manakah peran utama tumbuh-tumbuhan (Plantae) dalam menjaga keseimbangan energi termodinamika biosfer bumi?",
    options: [
      "Mengurangi radiasi matahari secara langsung tanpa reaksi kimia",
      "Mengubah energi surya (kinetik foton) menjadi energi kimia organik melalui asimilasi",
      "Menyebarkan gas karbon dioksida secara global melalui respirasi",
      "Memperbesar laju erosi tanah untuk meremajakan mineral"
    ],
    correctAnswer: 1,
    explanation: "Tumbuhan bertindak sebagai produsen primer yang melangsungkan konversi energi surya menjadi energi kimia melalui fotosintesis, menjadikannya penopang utama biosfer bumi."
  },
  {
    id: 2,
    question: "Ayat Al-Qur'an yang secara spesifik mengisyaratkan peran air hujan sebagai inisiasi pembentukan kebun-kebun dan biji-biji tanaman adalah...",
    options: [
      "QS. Qaf ayat 9",
      "QS. Al-A'raf ayat 56",
      "QS. Yasin ayat 80",
      "QS. Ar-Ra'd ayat 4"
    ],
    correctAnswer: 0,
    explanation: "QS. Qaf ayat 9 menonjolkan bagaimana Allah menurunkan air yang berkah untuk menumbuhkan kebun-kebun ('jannatin') dan biji-bijian ('habbal hashid')."
  },
  {
    id: 3,
    question: "Proses masuknya air tanah melintasi rambut akar ke pembuluh xilem terjadi melalui prinsip...",
    options: [
      "Transpor aktif dengan energi tinggi",
      "Osmosis di mana air bergerak dari potensial air tinggi ke potensial air rendah",
      "Pompa Natrium-Kalium",
      "Difusi gas kovalen"
    ],
    correctAnswer: 1,
    explanation: "Osmosis menarik molekul air dari tanah (konsentrasi zat terlarut rendah/potensial tinggi) menuju sel rambut akar (konsentrasi zat terlarut tinggi/potensial rendah)."
  },
  {
    id: 4,
    question: "Isyarat penyimpanan air tanah dalam tanah dalam jangka panjang diungkap dalam QS. Az-Zumar ayat 21 melalui frasa...",
    options: [
      "Khadhiran nukhriju",
      "Fasalakahu yanabi'a fil ardhi",
      "Nakhilun sinwan",
      "Mutsabihan wa ghaira mutasyabihin"
    ],
    correctAnswer: 1,
    explanation: "'Fasalakahu yanabi'a fil ardhi' merujuk pada aktivitas mengatur aliran air menjadi sumber-sumber air di dalam bumi, yang diserap rambut akar."
  },
  {
    id: 5,
    question: "Dalam reaksi fotosintesis, gelembung gas oksigen (O2) dikeluarkan pada reaksi terang sebagai akibat langsung dari...",
    options: [
      "Fotolisis air (pemecahan molekul H2O oleh energi cahaya)",
      "Reduksi fiksasi gas CO2 pada siklus Calvin",
      "Penggabungan glukosa menjadi amilum",
      "Kerusakan membran kloroplas luar"
    ],
    correctAnswer: 0,
    explanation: "Gas oksigen dibentuk pada Reaksi Terang di membran tilakoid ketika air didekomposisi (fotolisis) untuk mensuplai elektron ke Fotosistem II."
  },
  {
    id: 6,
    question: "Tumbuhan yang beradaptasi di habitat yang tergenang air dengan memiliki kelenjar garam dan banir penunjang akar seperti Bakau disebut...",
    options: [
      "Tumbuhan Xerofit",
      "Tumbuhan Halofit/Hidrofit",
      "Tumbuhan Saprofit",
      "Tumbuhan Parasitoid"
    ],
    correctAnswer: 1,
    explanation: "Bakau adalah tumbuhan halofit (toleran salinitas tinggi) sekaligus berkarakter hidrofit yang beradaptasi dari pasang surut air laut."
  },
  {
    id: 7,
    question: "Frasa 'Khadhiran' (khadhir) yang tercantum dalam QS. Al-An'am ayat 99 merujuk pada materi hijau yang menumbuhkan buah/biji berdampingan. Dalam ilmu biologi modern, zat ini adalah...",
    options: [
      "Karotenoid jingga",
      "Klorofil (zat hijau daun)",
      "Sitokrom pernapasan",
      "Fikosianin biru"
    ],
    correctAnswer: 1,
    explanation: "Khadhiran bermakna zat hijau/materi penghijau daun, yang merupakan representasi klorofil pada tilakoid."
  },
  {
    id: 8,
    question: "Persamaan struktural yang mengejutkan antara klorofil tumbuhan dan hemoglobin darah manusia adalah keduanya memiliki cincin porfirin, namun pembedanya adalah...",
    options: [
      "Klorofil mengikat atom Magnesium (Mg), sedangkan hemoglobin mengikat zat Besi (Fe)",
      "Klorofil mengikat Helium, sedangkan hemoglobin mengikat Silikon",
      "Klorofil berbentuk rantai lurus, sedangkan hemoglobin berupa bola padat",
      "Klorofil tidak mengandung protein penyangga"
    ],
    correctAnswer: 0,
    explanation: "Kedua pigmen vital ini memiliki rumus bangun mirip porfirin, di mana intinya adalah Magnesium (Mg) pada klorofil dan Besi (Fe) pada hemoglobin."
  },
  {
    id: 9,
    question: "Klasifikasi tumbuhan berdasarkan habitus merayap/menjalar dan tidak merayap diisyaratkan dalam Al-Qur'an (QS. Al-An'am: 141) melalui istilah...",
    options: [
      "Sinwan wa ghaira sinwan",
      "Ma'rusyat wa ghaira ma'rusyat",
      "Yanabi'a fil ardhi",
      "Jannatin wa habba"
    ],
    correctAnswer: 1,
    explanation: "'Ma'rusyat' berarti kebun-kebun merambat/menjalar (seperti anggur/timun), sedangkan 'ghaira ma'rusyat' merujuk pada tanaman tegak tanpa sulur penarik."
  },
  {
    id: 10,
    question: "Tumbuhan lumut (Bryophyta) dikelompokkan ke dalam tumbuhan tidak berpembuluh karena...",
    options: [
      "Tidak memiliki klorofil fotosintetik",
      "Tidak memiliki pembuluh angkut xilem dan floem sejati",
      "Hanya dapat bereproduksi secara aseksual",
      "Tidak memerlukan air dalam kehidupannya"
    ],
    correctAnswer: 1,
    explanation: "Lumut termasuk Atracheophyta karena transportasi air dan zat hara dilakukan secara difusi antarsel, bukan lewat jalur berkas pengangkut xilem/floem sejati."
  },
  {
    id: 11,
    question: "Siklus pergiliran keturunan antara fase gametofit (menghasilkan gamet haploid) dan sporofit (menghasilkan spora diploid) disebut...",
    options: [
      "Partenogenesis konjugatif",
      "Metagenesis",
      "Kloning vegetatif",
      "Apoplas transisional"
    ],
    correctAnswer: 1,
    explanation: "Metagenesis secara biologis mendefinisikan pergiliran keturunan fase generatif (gametofit) dan fase vegetatif (sporofit) pada Plantae seperti lumut dan paku."
  },
  {
    id: 12,
    question: "Konsep terciptanya keanekaragaman flora secara berpasang-pasangan ('al-azwaj') tertulis pada...",
    options: [
      "QS. Yasin ayat 36",
      "QS. Al-A'raf ayat 56",
      "QS. Qaf ayat 9",
      "QS. Az-Zumar ayat 21"
    ],
    correctAnswer: 0,
    explanation: "QS. Yasin ayat 36 mengagungkan kebesaran Allah yang menciptakan berpasang-pasangan ('al-azwaj'), termasuk dari tumbuhan yang dikeluarkan oleh bumi."
  },
  {
    id: 13,
    question: "Struktur fungsional xilem pada tumbuhan berperan penting dalam...",
    options: [
      "Mengedarkan hasil fotosintesis (glukosa) dari daun ke organ penyimpanan",
      "Mengangkut air dan garam mineral terlarut dari akar naik ke seluruh tubuh hingga daun",
      "Menyimpan cadangan udara untuk respirasi",
      "Melakukan pembelahan sel lateral"
    ],
    correctAnswer: 1,
    explanation: "Xilem adalah pembuluh kayu yang mengangkut material air murni dan unsur mineral dari tanah ke atas, sementara Floem mengangkut zat makanan hasil berasimilasi."
  },
  {
    id: 14,
    question: "Mengapa pembabatan hutan liar dikategorikan sebagai kerusakan bumi (fasad) yang dilarang dalam QS. Al-A'raf ayat 56?",
    options: [
      "Sebab laju fotosintesis global akan terdorong melampaui ambang batas",
      "Sebab akan merusak mekanisme infiltrasi air tanah, memicu tanah longsor, dan mengacaukan penyerapan CO2 biosfer",
      "Sebab melanggar hukum perkawinan tumbuhan",
      "Sebab menyebabkan tanah memproduksi air terlalu berlebih"
    ],
    correctAnswer: 1,
    explanation: "Penebangan hutan menghancurkan struktur tanah, menyetop infiltrasi air limpasan hujan, memicu banjir bandang, serta meningkatkan gas rumah kaca akibat lenyapnya wastafel karbon alami."
  },
  {
    id: 15,
    question: "Tumbuhan berbiji tertutup (Angiospermae) dikelompokkan menjadi dua kelas utama berdasarkan jumlah keping bijinya, yaitu...",
    options: [
      "Gymnospermae dan Pteridophyta",
      "Monokotil dan Dikotil",
      "Bryophyta dan Lichenes",
      "Tracheophyta dan Spermatophyta"
    ],
    correctAnswer: 1,
    explanation: "Jumlah kotiledon memisahkan Angiospermae menjadi Monokotil (satu keping biji) dan Dikotil (dua keping biji) yang berbeda juga struktur akar dan batangnya."
  },
  {
    id: 16,
    question: "Aktivitas pembelahan sel tumbuhan yang berkontribusi pada pertumbuhan tinggi tanaman (perpanjangan ujung akar dan ujung batang) dikendalikan oleh...",
    options: [
      "Meristem apikal",
      "Kambium pembuluh",
      "Jaringan sklerenkim",
      "Periderm pelindung"
    ],
    correctAnswer: 0,
    explanation: "Meristem apikal berada di ujung akar dan pucuk batang, melangsungkan pembelahan mitosis primer untuk memperpanjang sumbu aksial tubuh tumbuhan."
  },
  {
    id: 17,
    question: "Proses pembuahan ganda pada Angiospermae menghasilkan dua bentukan fungsional, yaitu...",
    options: [
      "Dua buah spora diploid steril",
      "Embrio (2n) dan Endosperma (3n)",
      "Zigospora dan Karpel biji",
      "Oksigen dan Glukosa glikolitik"
    ],
    correctAnswer: 1,
    explanation: "Pembuahan ganda melibatkan penyerbukan spermatozoid I dengan sel telur menghasilkan zigot (2n), dan spermatozoid II dengan inti kandung lembaga sekunder menghasilkan endosperma (3n)."
  },
  {
    id: 18,
    question: "Reaksi gelap fotosintesis (Siklus Calvin) terjadi di bagian kloroplas yang bernama...",
    options: [
      "Membran luar saja",
      "Stroma",
      "Tilakoid",
      "Grana"
    ],
    correctAnswer: 1,
    explanation: "Reaksi terang berlangsung di tilakoid/grana yang memiliki klorofil, sedangkan fiksasi CO2 reaksi gelap melandasi siklus Calvin di cairan stroma."
  },
  {
    id: 19,
    question: "Fenomena tanaman memanjat seperti sirih yang membelit tiang penyangganya karena mendeteksi sentuhan fisik dinamakan adaptasi gerak...",
    options: [
      "Tigmotropisme",
      "Fotonasti",
      "Kemotaksis",
      "Termotropisme"
    ],
    correctAnswer: 0,
    explanation: "Tigmotropisme adalah gerak tumbuh tanaman yang merespon adanya stimulasi fisik berupa sentuhan dari sisi penyangga batangnya."
  },
  {
    id: 20,
    question: "Tumbuhan memiliki peran 'infiltrasi' dalam ekosistem tanah. Makna ilmiah infiltrasi adalah...",
    options: [
      "Penguapan kelebihan air melalui kutikula daun",
      "Laju air mengalir bebas di atas aspal jalan raya",
      "Kemampuan tanah menyerap air permukaan ke dalam matriks pori-porinya dibantu rambatan akar",
      "Proses fotosintesis menghasilkan polusi"
    ],
    correctAnswer: 2,
    explanation: "Infiltrasi merupakan laju peresapan air permukaan merembes masuk ke tanah. Rambut akar menjaga fleksibilitas dan porositas tanah, mempertinggi daya tampung tanah menyimpan air bersih."
  }
];

export const POSTTEST_QUESTIONS: QuizQuestion[] = PRETEST_QUESTIONS.map((q, idx) => {
  // Let's make posttest slightly varied or deeply aligned to pretest
  if (idx === 0) {
    return {
      ...q,
      question: "Apakah peran termodinamika terpenting dari Plantae di bumi yang diisyaratkan oleh sains dan Al-Qur'an?",
      options: [
        "Sebagai wastafel panas murni bumi",
        "Sebagai pengonversi primer energi surya tak-teratur menjadi energi kimia tersimpan berkelanjutan",
        "Sebagai produsen debu kalsium bumi",
        "Sebagai pemecah batuan vulkanik utama"
      ],
      correctAnswer: 1
    };
  }
  if (idx === 4) {
    return {
      ...q,
      question: "Fotolisis air terjadi di kloroplas dalam reaksi fotosintesis. Oksigen yang dibebaskan merupakan hasil dari pembongkaran molekul...",
      options: [
        "Gas karbon dioksida berbahaya (CO2)",
        "Molekul Air murni (H2O) yang disediakan Allah dari siklus hidrologi",
        "Polutan hidrokarbon lingkungan",
        "Enzim klorofil Magnesium"
      ],
      correctAnswer: 1
    };
  }
  return q;
});

export const HOTS_QUESTIONS: HOTSQuestion[] = [
  // ANALISIS (10)
  {
    id: 1,
    type: "analisis",
    context: "QS. Al-An'am ayat 99 berbicara tentang 'Khadhiran' (pigmen hijau) yang mengeluarkan bijian padat bertumpuk. Di sisi lain, sebuah riset biologi menunjukkan tanaman yang diisolasi di bawah cahaya lampu hijau murni tidak mampu tumbuh dan akhirnya layu.",
    question: "Analisislah hubungan antara penyerapan spektrum energi cahaya oleh klorofil (Khadhiran) dengan alasan mengapa tumbuhan justru layu ketika disinari lampu berwarna hijau murni!",
    rubric: "Skor Maksimal 100:\n- 40 poin: Menjelaskan sifat fisik klorofil yang memantulkan cahaya hijau (tidak diserap) dan menyerap warna merah/biru.\n- 40 poin: Menghubungkan kegagalan reaksi terang fotosintesis akibat ketiadaan foton terserap pada panjang gelombang hijau.\n- 20 poin: Mengaitkan dengan ketidakmampuan menghasilkan bahan makanan 'habba mutarakiba'.",
    modelAnswer: "Klorofil ('Khadhiran') tampak berwarna hijau bagi mata manusia karena pigmen ini memantulkan (refleksikan) cahaya hijau dari spektrum tampak dan menyerap energi paling efektif pada daerah spektrum merah dan biru. Jika tanaman disinari dengan cahaya hijau murni, molekul klorofil di tilakoid tidak dapat menyerap foton tersebut untuk mengeksitasi elektron pada Fotosistem. Akibatnya, reaksi terang fotosintesis (fotolisis air dan sintesis ATP/NADPH) terhenti. Tanpa energi reaksi terang, siklus Calvin (reaksi gelap) pun gagal menyusun glukosa, menyebabkan tumbuhan mengalami defisit energi metabolisme sistemik dan akhirnya layu/mati. Pola akumulasi biomasa 'biji padat bertumpuk' (habba mutarakiba) tidak akan pernah terwujud."
  },
  {
    id: 2,
    type: "analisis",
    context: "QS. Az-Zumar ayat 21 menguraikan bagaiman air dialirkan menjadi sumber air di dalam tanah ('yanabi'a fil ardhi'). Beberapa area pertanian mengalami 'soil compaction' (pemadatan tanah) parah akibat penggunaan alat berat dan kehilangan bahan organik.",
    question: "Analisislah bagaimana pemadatan tanah menurunkan kapasitas rambut akar dalam menyerap air tanah dan membatasi transportasi tumbuhan!",
    rubric: "Skor Maksimal 100: Menjelaskan bahwa pemadatan merusak pori-pori mikro tanah, mengurangi ruang oksigen untuk respirasi sel akar (transpor aktif), serta menghalangi difusi air.",
    modelAnswer: "Pemadatan tanah menghilangkan struktur pori makro dan mikro tanah. Hal ini berakibat pada dua hal: Pertama, hilangnya ketersediaan air tanah karena tertutupnya saluran infiltrasi ('yanabi'a'). Kedua, ruang udara tanah menyusut tajam sehingga pasokan oksigen bagi sel-sel akar turun drastis. Sel akar memerlukan oksigen untuk respirasi aerob guna menghasilkan energi ATP yang menggerakkan transpor aktif mineral. Ketika asupan air dan ATP menurun, tekanan osmosis sel rambut akar rusak, menghambat penyerapan air, dan membatasi transportasi air naik menuju xilem daun."
  },
  {
    id: 3,
    type: "analisis",
    context: "Pada ekosistem bakau (mangrove), akar napas (pneumatofor) mencuat ke atas permukaan tanah berlumpur yang miskin oksigen.",
    question: "Analisislah keuntungan fisiologis dari adaptasi akar napas tersebut dalam menjamin kelangsungan hidup tumbuhan di daerah payau berlumpur!",
    rubric: "Skor Maksimal 100: Menghubungkan struktur lentisel akar napas dengan difusi O2 langsung dari udara bebas ke sel-sel akar dalam lumpur anaerob.",
    modelAnswer: "Tanah berlumpur daerah payau bersifat anaerob (sangat miskin oksigen). Akar napas memiliki pori mikro khusus yang disebut lentisel pada bagian yang menyembul ke atmosfer. Adaptasi morfologis ini memungkinkan akar menyerap gas oksigen dari udara bebas secara langsung untuk memenuhi kebutuhan respirasi seluler akar di kedalaman lumpur tak beroksigen, mencegah pembusukan akar akibat respirasi anaerob yang beracun."
  },
  {
    id: 4,
    type: "analisis",
    context: "Beberapa jenis tanaman anggur memiliki sulur yang melingkar erat di batang penyangga di dekatnya (QS. Al-An'am: 141 - ma'rusyat).",
    question: "Bagaimanakah distribusi hormon auksin pada sel-sel sulur yang mengalami kontak fisik memicu perilaku membelit tersebut?",
    rubric: "Skor Maksimal 100: Mengaitkan gerakan tigmotropisme dengan migrasi auksin ke sisi berlawanan dari sentuhan, yang memicu pemanjangan sel asimetris.",
    modelAnswer: "Fenomena pembelitan sulur disebabkan oleh gerak tigmotropisme. Ketika sel-sel sulur pada satu sisi bersentuhan dengan penyangga, hormon auksin akan berimigrasi (pindah) ke sisi luar yang bebas (tidak tersentuh). Konsentrasi auksin yang lebih tinggi di sisi luar merangsang pemanjangan sel secara lebih cepat dibandingkan sisi dalam yang bersentuhan. Perbedaan laju pertumbuhan asimetris ini menyebabkan sulur membengkok ke arah dalam dan melilit tiang penyangga secara erat."
  },
  {
    id: 5,
    type: "analisis",
    context: "Kutikula di permukaan daun tanaman xerofit sangat tebal dan dilapisi lapisan lilin (waxy cuticle).",
    question: "Analisislah hubungan antara struktur kutikula lilin lilin tersebut dengan laju transpirasi pada tanaman xerofit di bawah panas terik matahari!",
    rubric: "Skor Maksimal 100: Menjelaskan sifat hidrofobik lilin menghentikan penguapan air secara non-stomatik kutikular.",
    modelAnswer: "Lapisan lilin bersifat hidrofobik (menolak air). Di daerah xerik yang sangat kering dan berkat radiasi matahari tinggi, penguapan air tidak hanya terjadi melalui stomata, tapi bisa lolos lewat dinding epidermis daun (evaporasi kutikular). Kutikula lilin yang tebal bertindak sebagai insulator kedap air yang menghambat difusi molekul air melewati lapisan epidermis, mereduksi transpirasi kutikular secara ekstrem hingga 95%."
  },
  {
    id: 6,
    type: "analisis",
    context: "Arsitektur kurma ('nakhil sinwan') memiliki percabangan batang majemuk dari satu pangkal, sementara kurma lain tumbuh soliter (QS. Ar-Ra'd: 4).",
    question: "Bagaimanakah dominansi apikal pada pucuk tumbuhan mengontrol modifikasi arsitektur pembelahan batang bercabang versus tidak bercabang?",
    rubric: "Skor Maksimal 100: Menghubungkan pelepasan hormon auksin dari meristem apikal dengan penghambatan kuncup lateral, serta suplai sitokinin tanaman.",
    modelAnswer: "Arsitektur tumbuhan diatur oleh keseimbangan hormon auksin dan sitokinin. Dominansi apikal yang kuat dipicu auksin yang turun dari kuncup terminal (pucuk) menekan perkembangan kuncup lateral (samping), menghasilkan tumbuhan tegak tunggal tak bercabang (ghaira sinwan). Jika dominansi apikal menurun atau terdapat suplai sitokinin tinggi dari akar, kuncup lateral aktif tumbuh, melahirkan habitus bercabang majemuk dari pangkal akar yang sama (sinwan)."
  },
  {
    id: 7,
    type: "analisis",
    context: "Tanaman zaitun tumbuh lambat namun memiliki masa hidup ribuan tahun karena kayunya tersusun sangat rapat dan keras.",
    question: "Analisislah peran kambium pembuluh dan proses lignifikasi sel xilem sklerenkim dalam menyokong umur panjang tanaman zaitun!",
    rubric: "Skor Maksimal 100: Mengaitkan pembelahan kambium sekunder membentuk xilem sekunder kokoh yang mengalami deposisi zat kayu (lignin) anti-mikroba.",
    modelAnswer: "Tanaman zaitun memiliki kambium vaskular aktif yang sangat terlatih melakukan pembelahan sekunder lambat namun kontinu. Sel-sel xilem sekunder dan sklerenkim yang terbentuk mengalami deposisi dinding sel sekunder yang kaya akan lignin (lignifikasi) dan senyawa polifenol fenolik. Struktur kayu terlignifikasi ini memblokir tekanan fisik lingkungan dan mencegah invasi jamur pelapuk kayu, menjadikannya awet ribuan tahun."
  },
  {
    id: 8,
    type: "analisis",
    context: "QS. Yasin ayat 36 mengisyaratkan bahwa segala tumbuhan diciptakan berpasangan. Beberapa tanaman berkelamin satu (dioecious), seperti kurma.",
    question: "Bila perkebunan kurma hanya menanam pohon kurma betina saja, analisislah konsekuensinya terhadap pembentukan buah kurma menurut logika biologi reproduksi!",
    rubric: "Skor Maksimal 100: Menjelaskan kegagalan penyerbukan silang antar individu jantan dan betina yang menghalangi fertigasi biji buah.",
    modelAnswer: "Tanaman dioecious (berumah dua) memisahkan organ jantan dan betina pada individu pohon yang berlainan. Jika perkebunan hanya berisi pohon betina tanpa pohon jantan sama sekali, penyerbukan silang (cross-pollination) menggunakan agen angin atau serangga tidak dapat berlangsung. Tanpa polen jantan untuk membuahi ovul kurma betina, pembuahan tidak akan terjadi, menyebabkan bunga gugur tanpa membentuk biji buah matang."
  },
  {
    id: 9,
    type: "analisis",
    context: "Suhu atmosfer global yang meningkat dapat melampaui batas optimum enzim kloroplas Rubisco.",
    question: "Analisislah dampak kenaikan suhu ekstrim di atas 45 C terhadap produktivitas siklus Calvin fotosintesis tanaman C3!",
    rubric: "Skor Maksimal 100: Menghubungkan denaturasi termal enzim Rubisco dan peningkatan laju fotorespirasi yang merusak efisiensi fiksasi karbon.",
    modelAnswer: "Suhu ekstrim di atas 45 C memicu denaturasi struktur tersier protein enzim Rubisco di dalam stroma sehingga aktivitas katalisnya hancur. Selain itu, suhu tinggi memperbesar rasio kelarutan gas O2 dibanding CO2 dalam air sel. Akibatnya Rubisco mengikat O2 alih-alih CO2 (proses fotorespirasi). Fotorespirasi memboroskan karbon dan energi ATP, menurunkan total fiksasi karbon bersih secara ekstrem."
  },
  {
    id: 10,
    type: "analisis",
    context: "Hujan asam akibat emisi sulfur oksida industri menurunkan pH tanah secara drastis menjadi di bawah 4.5.",
    question: "Analisislah bagaimana penurunan pH ekstrim tanah memicu plasmolisis sel rambut akar tumbuhan!",
    rubric: "Skor Maksimal 100: Menjelaskan hilangnya integritas protein membran akar, pelepasan ion beracun Al3+, dan perubahan gradien osmosis larutan tanah.",
    modelAnswer: "Keasaman ekstrim (pH < 4.5) menghancurkan integritas membran plasma sel rambut akar. Kondisi asam juga melarutkan ion aluminium (Al3+) beracun ke dalam larutan tanah, yang secara agresif merusak protein pengangkut air di akar. Solusi tanah yang penuh ion bebas meningkatkan konsentrasi kation luar sehingga potensial air tanah turun, menarik air keluar dari vakuola sel rambut akar ke tanah secara osmosis (plasmolisis)."
  },

  // EVALUASI (5)
  {
    id: 11,
    type: "evaluasi",
    context: "Pemerintah berencana mereklamasi bekas tambang dengan menanam kelapa sawit secara monokultur dalam skala luas, mengklaim bahwa ini adalah reboisasi fungsional karena sawit menyerap karbon.",
    question: "Evaluasilah efektivitas ekologis penanaman monokultur kelapa sawit sebagai upaya restorasi lahan jika dikaitkan dengan pelarangan kerusakan bumi (QS. Al-A'raf: 56)!",
    rubric: "Skor Maksimal 100:\n- 30 poin: Membandingkan kapasitas penyerapan air & keanekaragaman hutan hujan dengan sawit monokultur.\n- 40 poin: Menyoroti resiko degradasi keanekaragaman hayati (Plantae lain) dan kepunahan mikroorganisme tanah.\n- 30 poin: Memberikan argumentasi kritis bahwa restorasi sejati menuntut biodiversitas multi strata.",
    modelAnswer: "Klaim monokultur kelapa sawit setara restorasi ekologis hutan adalah kekeliruan fatal dari kacamata biologi konservasi dan etika lingkungan Islam (QS. Al-A'raf: 56). Hutan tropis alami yang seimbang ('ishlahiha') ditopang oleh biodiversitas tinggi dengan struktur tajuk berlapis (multi-strata) yang melindungi tanah dari air hujan langsung serta menyimpan air tanah secara efektif melalui sistem perakaran dalam. Sebaliknya, monokultur kelapa sawit memiliki tajuk homogen tunggal yang kurang efektif mereduksi pukulan air hujan langsung, berakar serabut dangkal yang menyerap air tanah secara masif dan boros namun lamban dalam menjaga cadangan air bawah tanah. Selain itu, monokultur merusak jaring-jaring makanan karena memusnahkan ratusan spesies tumbuhan sekunder, lumut, tanaman bawah, dan fauna endemik. Hal ini mendatangkan degradasi ekologis radikal (kerusakan bumi) dibanding perbaikan ekosistem sejati."
  },
  {
    id: 12,
    type: "evaluasi",
    context: "Penggunaan pupuk kimia sintetik (Urea, NPK) jangka panjang yang tidak terkontrol sering memicu pencemaran air lingkungan tanah dalam bentuk eutrofikasi di danau sekitar.",
    question: "Evaluasilah dampak merusak dari limpasan akumulasi hara NPK pupuk kimia terhadap keseimbangan ekologi perairan tanaman air!",
    rubric: "Skor Maksimal 100: Menyoroti ledakan populasi alga (blooming alga) yang menghalangi transmisi cahaya ke tanaman fototropik bawah air, mengakibatkan anoksia.",
    modelAnswer: "Limpasan pupuk kimia kaya Nitrogen dan Fosfor ke ekosistem perairan memicu eutrofikasi—ledakan populasi alga hijau mikroskopis dan eceng gondok secara tidak terkendali di permukaan air. Kondisi ini menutupi penetrasi pancaran cahaya matahari masuk ke kedalaman air, sehingga tanaman air fototropik di dasar danau tidak dapat melakukan fotosintesis menghasilkan oksigen terlarut (dissolved oxygen/DO). Alga permukaan yang mati didekomposisi oleh bakteri aerob dengan memboroskan sisa DO perairan. Kondisi anoksia (tanpa oksigen) memicu kematian massal fauna air dan menghancurkan keseimbangan ekosistem danau."
  },
  {
    id: 13,
    type: "evaluasi",
    context: "Seringkali pembukaan lahan kelapa sawit menggunakan metode pembakaran (slash and burn) karena biaya murah dan dianggap menyuburkan tanah dengan abu pasca bakar.",
    question: "Evaluasilah dampak jangka panjang pembakaran hutan tersebut terhadap mikroflora tanah dan kapasitas retensi air tanah!",
    rubric: "Skor Maksimal 100: Menimbang kerugian hilangnya bahan humus organik tanah, matinya simbiosis fungi mikoriza akar, dan rusaknya koloid tanah.",
    modelAnswer: "Meskipun abu sisa pembakaran menyediakan asupan ion mineral (K, Ca, Mg) instan bagi tanah, pembakaran menyapu bersih mikrob tanah, bakteri nitrifikasi, dan fungi mikoriza akar (seperti mikoriza vesikular-arbuskular) yang sangat penting membantu penyerapan hara oleh tanaman baru. Panas ekstrim menghancurkan kandungan humus (bahan organik) pembentuk koloid tanah. Akibatnya, kapasitas memegang air (water-holding capacity) tanah merosot tajam, meninggalkan tanah kering, kompak, rapuh, serta rentan terhadap erosi hebat pada musim hujan pasca-pembakaran."
  },
  {
    id: 14,
    type: "evaluasi",
    context: "Metode hidroponik komersial menerapkan nutrisi mineral terlarut tanpa menggunakan media tanah (soil-less culture).",
    question: "Evaluasilah batasan ekologis serta ketergantungan energi metode hidroponik dibanding media tanah alami dalam mewujudkan pertanian berkelanjutan!",
    rubric: "Skor Maksimal 100: Menilai kelebihan kontrol nutrisi presisi dibanding kelemahan konsumsi energi pompa aerasi intensif dan hilangnya struktur mineral alami.",
    modelAnswer: "Hidroponik unggul dalam kontrol nutrisi presisi, efisiensi air sirkulasi, dan mengabaikan patogen dari tanah. Namun, dari segi keberlanjutan ekologis jangka panjang, ia memiliki kelemahan kritis: ketergantungan energi yang sangat tinggi (membutuhkan aliran listrik stabil 24 jam untuk pompa air, oksigenasi aerasi, dan pencahayaan buatan opsional). Selain itu, hidroponik tidak memiliki stabilitas biologis penyangga alami. Gagal pompa selama beberapa jam dapat merusak seluruh tanaman akibat dehidrasi akar mendadak, berbeda dari tanah alami yang memiliki sirkulasi hara lambat namun mandiri tanpa energi listrik eksternal."
  },
  {
    id: 15,
    type: "evaluasi",
    context: "Rekayasa genetik tanaman transgenik (GMO) disisipkan gen anti-hama (seperti bakteri Bacillus thuringiensis/gen Bt) guna meminimalkan penggunaan pestisida.",
    question: "Evaluasilah potensi bahaya ekologis tanaman GMO transgenik anti-hama terhadap resistensi serangga nontarget dan keanekaragaman varietas lokal!",
    rubric: "Skor Maksimal 100: Mengevaluasi dampak transfer gen horizontal lewat serbuk sari (cross-pollination) ke gulma/tanaman lokal dan matinya predator alami.",
    modelAnswer: "Secara fungsional, tanaman transgenik Bt mereduksi penyemprotan bahan kimia sintetik. Namun, potensi bahaya ekologisnya sangat nyata: Pertama, racun Bt dikeluarkan secara berkala melintasi nektar dan polen yang dapat dikonsumsi serangga nontarget bermanfaat (seperi lebah penyari atau kupu-kupu penyerbuk). Kedua, aliran gen (gene-flow) secara tidak terkendali melalui penyerbukan silang liar ke kerabat tumbuhan lokal melahirkan gulma super (superweeds) yang kebal hama. Hal ini mendiskreditkan keanekaragaman flora lokal asli demi kapitalisasi monokultur korporasi benih."
  },

  // KREASI (5)
  {
    id: 16,
    type: "kreasi",
    context: "Kerusakan lereng bukit curam akibat alih fungsi lahan menjadi ladang komoditas sayur pendek meningkatkan risiko longsor ekstrem di musim penghujan.",
    question: "Rancanglah sebuah pola vegetasi terpadu (Sistem Agroforestri Multi-strata) yang memadukan jenis akar serabut pelindung erosi dan akar tunggang penopang lereng guna memulihkan stabilitas lereng bukit tersebut!",
    rubric: "Skor Maksimal 100:\n- 40 poin: Merancang stratifikasi pohon (tinggi, sedang, semak pelindung, rumput pengikat).\n- 30 poin: Memilih jenis tanaman berakar dalam (misal vetiver grass dengan akar sedalam 5m + pohon alpukat/bambu berakar jangkar).\n- 30 poin: Mengintegrasikan nilai ekonomi lokal hortikultura berkelanjutan.",
    modelAnswer: "Saya merancang Agroforestri Multi-strata bernama 'Sinergi Hijau Lereng Menjalar':\n1. Rumput Pengikat (Ground Cover): Menanam Rumput Vetiver (Chrysopogon zizanioides) pada terasering lereng. Rumput vetiver bukan rumput biasa; akarnya adalah jenis serabut raksasa yang menembus tanah vertikal sedalam 3-5 meter, bertindak sebagai jangkar biologis penyemen partikel tanah.\n2. Strata Rendah (Perdu Berakar Rapat): Disebarkan tanaman jahe-jahean dan tanaman perdu pembatas air limpasan.\n3. Strata Tengah (Buah Ekonomis Berakar Kuat): Menanam alpukat (Persea americana) dan kopi arabika yang memiliki struktur akar tunggang bercabang lateral untuk memegang blok tanah lapisan tengah.\n4. Strata Atas (Pohon Pelindung & Pengikat Air): Bambu Petung dan tanaman Beringin (Ficus benjamina) di titik-titik limpasan kritis. Akar bambu sangat rapat mengikat air bawah tanah sedangkan beringin mengunci kestabilan formasi tebing bukit secara geologis. Desain ini menjaga kelestarian bukit (QS. Al-A'raf: 56) sekaligus memberi pemasukan buah, kopi, dan bambu bagi ekonomi warga."
  },
  {
    id: 17,
    type: "kreasi",
    context: "Masyarakat perkotaan yang padat mengalami penurunan kualitas udara akibat gas buang karbon monoksida dan keterbatasan ruang penanaman pohon besar.",
    question: "Kreasikan sebuah konsep arsitektur tata hijau kota cerdas (Vertical Garden Air-Purification) menggunakan tanaman epifit dan dinding penyerap gas polutan!",
    rubric: "Skor Maksimal 100: Mendesain taman vertikal bertingkat terintegrasi sistem irigasi otomatis tetes, menggunakan seleksi jenis tumbuhan pensintesis hara efektif (sansevieria, lili perdamaian).",
    modelAnswer: "Saya mengkreasikan 'Green Shield urban Wall': Sistem dinding tanaman vertikal modular cerdas. Menggunakan papan modular daur ulang berlapis serat sabut kelapa (cocopeat) sebagai media tanam bebas tanah. Rangkaian tanaman dipilih dengan basis kemampuan bio-filtrasi tinggi: Lidah Mertua (Sansevieria trifasciata) pengekstraksi racun benzena dan timbal udara, Seruni (Chrysanthemum) penyerap gas buang mobil, dan Krisan. Sirkulasi air menggunakan pompa berenergi panel surya dengan konsep irigasi tetes (drip irrigation) bersiklus tertutup (closed loop) hemat hidrologis. Sensor pH dan kelembaban tanah diletakkan pada tiap modul untuk mendikte pompa menyiram secara minimal dan presisi."
  },
  {
    id: 18,
    type: "kreasi",
    context: "Sekolah Anda menghadapi tumpukan sampah sisa kantin padat hidrokarbon kompleks dan minim daerah resapan air hujan di lapangan utama konblok.",
    question: "Rancanglah aksi nyata 'Green School Bioswale Kampus Hijau' yang memadukan lubang biopori multifungsi dengan vegetasi tanaman pemakan zat pencemar tanah (Fitoremediasi)!",
    rubric: "Skor Maksimal 100: Mendesain sistem biopori organik terisi sampah daun kering dikelilingi pagar tanaman pembersih polutan (akar wangi, melati air) sebagai wastafel infiltrasi.",
    modelAnswer: "Saya merancang aksi 'Eco-Biopore Sump-Swale': Sepanjang pinggir lapangan bola sekolah digali parit dangkal (bioswale) berlapis kerikil alami, pasir silika kasar, dan ditanami rumput akar wangi serta kembang cokelat (Zephyranthes candida). Di dasar bioswale, digorok lubang-lubang biopori sedalam 1 meter berdiameter 10 cm, diisi sampah organik kantin untuk mengundang cacing tanah membuat porositas mikro alami. Daun dari kebun sekolah disapu masuk biopori. Rumput akar wangi menyaring residu polutan detergent limbah kantin secara fitoremediasi, sementara biopori mempercepat laju infiltrasi air hujan mencegah genangan lapangan sekolah."
  },
  {
    id: 19,
    type: "kreasi",
    context: "Kurangnya lebah penyerbuk di daerah urban menghambat hasil panen buah-buahan lokal kebun komunitas.",
    question: "Kreasikan skema taman mikroskopis perkotaan (Polinator Haven Garden) dengan mengombinasikan warna-warna bunga dan tipe nektar tumbuhan spesifik guna memikat serangga penyerbuk!",
    rubric: "Skor Maksimal 100: Mendesain taman bunga bertipe nektar tinggi dengan warna yang disukai lebah (kuning, biru, ultraviolet reflektif) sepanjang tahun.",
    modelAnswer: "Rancangan 'Polinator Haven Garden' melibatkan pemetaan zona taman warna-warni kontras tinggi. Lebah penyerbuk menyukai bunga berwarna kuning cerah, biru, ungu, dan putih yang memiliki petunjuk arah madu ('nectar guides') yang bersinar di bawah spektrum ultraviolet. Kita menanam Calendula (kuning), Lavender (ungu wangi), dan bunga matahari (Helianthus annuus). Untuk menjamin kehadiran serangga sepanjang tahun, tanaman berbunga dipilih dari spesies yang mekar bergantian sepanjang semester (suksesi perbungaan)."
  },
  {
    id: 20,
    type: "kreasi",
    context: "Di gurun tandus berpasir kering, tanaman seringkali gagal hidup karena air langsung menguap mengering di permukaan pasir halus.",
    question: "Ciptakan inovasi wadah pelindung tanah mikroskopis (Micro-Hydrogel Seed Coating Capsule) berbasis polimer selulosa kulit jeruk tanaman dikombinasikan dengan benih kaktus/kurma untuk meningkatkan peluang kelulushidupan tumbuh di gurun gersang!",
    rubric: "Skor Maksimal 100: Mendesain kapsul pelindung berbasis biodegradasi yang mengembang mengikat air hujan sesedikit apa pun di daerah gurun pasir.",
    modelAnswer: "Disain inovasi 'Oasis-Capsule': Kapsul benih berlapis hydrogel alami yang diproduksi dari ekstraksi pektin kulit jeruk (albedo) dicampur selulosa jerami gandum. Kapsul biodegradable ini melingkupi benih kurma. Ketika kelembaban gurun malam hari terkondensasi atau tetes hujan menetes, hidrogel pektin bio-selulosa mengembang menyerap air hingga 100 kali berat keringnya, menciptakan kantung air jel basah mini stabil mengelilingi benih. Di dalam gel dilarutkan spora spora fungi endomikoriza pendamping akar kurma untuk meningkatkan pertahanan adaptasi kekeringan awal kecambah hingga sanggup menyentuh air bawah tanah."
  }
];

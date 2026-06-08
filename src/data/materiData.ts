/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SubMateri } from "../types";

export const MATERI_LIST: SubMateri[] = [
  {
    id: "kebesaran-allah",
    title: "1. Kebesaran Allah SWT pada Tumbuhan",
    scientificExplanation: "Tumbuhan (Plantae) bertindak sebagai pondasi utama seluruh jaringan kehidupan di planet Bumi (produsen primer). Tanpa kehadiran tumbuhan, konversi energi surya menjadi energi kimia (karbohidrat) tidak akan terjadi, yang berarti kehidupan hewan dan manusia mustahil berlangsung. Secara termodinamika, tumbuhan adalah sistem terbuka yang secara teratur menyerap entropi negatif dari matahari untuk menjaga keseimbangan biosfer.",
    quranVerse: {
      surah: "QS. Qaf",
      verse: "9",
      arabic: "وَنَزَّلْنَا مِنَ السَّمَاءِ مَاءً مُبَارَكًا فَأَنْبَتْنَا بِهِ جَنَّاتٍ وَحَبَّ الْحَصِيدِ",
      translation: "Dan Kami turunkan dari langit air yang berkah (banyak manfaatnya) lalu Kami tumbuhkan dengan air itu kebun-kebun dan biji-biji tanaman yang dituai.",
      tafsir: "Tafsir Al-Misbah menjelaskan bahwa air diturunkan sebagai berkah dari langit. Setiap tetes air membawa instruksi biologis untuk membangunkan benih-benih dorman di dalam tanah. Allah SWT menekankan keterkaitan erat antara siklus hidrologi, aktivitas tanah, dan multiplikasi vegetasi yang menghasilkan bahan makanan pokok bagi makhluk hidup."
    },
    scientificQuranConnection: "Air bertindak sebagai pelarut universal (universal solvent) dalam biologi sel tumbuhan. Molekul air mengaktifkan enzim-enzim dalam embrio benih yang dorman (proses imbibisi). Kehadiran 'kebun-kebun dan biji-biji' mengekspresikan dinamika pertumbuhan tanaman tingkat tinggi (Spermatophyta) yang bermula dari air hujan sebagai pemicu utama fisiologis tumbuhan.",
    facts: [
      "Lebih dari 90% komponen sel tumbuhan segar tersusun atas air yang diserap dari tanah.",
      "Benih kering dapat bertahan puluhan tahun dalam fase dorman (tidak aktif) hingga datangnya air untuk memulai imbibisi."
    ],
    suggestedIllustration: "Animasi siklus hidrologi dan proses imbibisi benih dari kering menjadi berkecambah.",
    reflectionQuestion: "Bagaimana air hujan yang memiliki unsur kimia sederhana (H2O) dapat memicu pertumbuhan miliaran struktur selular tumbuhan yang kompleks?",
    infographicPoints: [
      { title: "Siklus Hidrologi", desc: "Air hujan sebagai inisiator kehidupan termodinamika tumbuhan." },
      { title: "Aktivasi Embrio", desc: "Proses imbibisi air yang memicu respirasi awal benih kering." },
      { title: "Biosfer Penyeimbang", desc: "Peran transpirasi tumbuhan dalam menciptakan kelembaban udara regional." }
    ]
  },
  {
    id: "organ-akar",
    title: "2. Struktur & Fungsi Organ Akar",
    scientificExplanation: "Akar (Radix) merupakan organ penambat tumbuhan di tanah sekaligus penyerap air dan zat hara melalui rambut akar secara osmosi. Transportasi air dari akar ke daun ditarik dengan bantuan kapilaritas pembuluh xilem, adhesi-kohesi molekul air, dan daya hisap daun (transpirasi). Secara mikroskopis, sel-sel epidermis akar terspesialisasi membentuk tonjolan rambut akar yang memperluas bidang penyerapan.",
    quranVerse: {
      surah: "QS. Az-Zumar",
      verse: "21",
      arabic: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَسَلَكَهُ يَنَابِيعَ فِي الْأَرْضِ ثُمَّ يُخْرِجُ بِهِ زَرْعًا مُخْتَلِفًا أَلْوَانُهُ",
      translation: "Apakah engkau tidak memperhatikan, bahwa Allah menurunkan air dari langit, lalu diatur-Nya menjadi sumber-sumber air di dalam bumi, kemudian dengan air itu ditumbuhkan-Nya tanaman yang bermacam-macam warnanya...",
      tafsir: "Menurut Tafsir Al-Maraghi, ungkapan 'fasalakahu yanabi'a fil ardhi' bermakna air hujan dialirkan dan disimpan dalam reservoir tanah di bawah permukaan. Ini menunjukkan ketersediaan air tanah (groundwater) yang konstan yang dapat diakses oleh akar tumbuhan demi kelangsungan metabolisme tumbuhan sepanjang waktu."
    },
    scientificQuranConnection: "Akar tumbuhan mengeksploitasi cadangan air bawah tanah ini menggunakan gradien potensial air. Rambut akar memiliki konsentrasi zat terlarut lebih tinggi dari larutan tanah, sehingga air merembes masuk secara osmosis melewati membran semipermeabel dari luar ke dalam xilem (proses transportasi simplas dan apoplas).",
    facts: [
      "Luas total rambut akar satu tanaman gandum tunggal dapat mencapai ratusan meter persegi.",
      "Akar memiliki sensor gravitasi bernama amiloplas di dalam tudung akar (kaliptra) yang menuntun pertumbuhan ke bawah (geotropisme positif)."
    ],
    suggestedIllustration: "Diagram interaktif melintang akar, memperlihatkan rambut akar menyerap air (H2O) dan mineral tanah secara osmosis menuju pembuluh xilem.",
    reflectionQuestion: "Bagaimana sel rambut akar mikroskopis mengetahui arah gravitasi untuk menembus tanah yang keras demi mencari sumber air yang Allah sediakan?",
    infographicPoints: [
      { title: "Fisiologi Osmosis", desc: "Tekanan osmosis menarik air masuk sel rambut akar tanpa energi ATP (transpor pasif)." },
      { title: "Kaliptra & Geotropisme", desc: "Butiran amiloplas yang mendeteksi gravitasi bumi." },
      { title: "Koneksi Reservoir", desc: "Akar sebagai penghubung tumbuhan dengan air bawah tanah alami ('yanabi'a')." }
    ]
  },
  {
    id: "fotosintesis-respirasi",
    title: "3. Reaksi Fotosintesis dan Respirasi",
    scientificExplanation: "Fotosintesis adalah reaksi anabolisme yang menuntut cahaya untuk menyatukan karbon dioksida (CO2) dan air (H2O) menjadi zat gula (C6H12O6) dan melepaskan oksigen (O2). Kloroplas menyerap foton cahaya matahari pada reaksi terang, lalu fiksasi karbon dilakukan pada siklus Calvin (reaksi gelap). Sebaliknya, respirasi memecah zat gula tersebut menjadi energi ATP guna kelangsungan metabolisme seluler.",
    quranVerse: {
      surah: "QS. An-Nahl",
      verse: "10-11",
      arabic: "هُوَ الَّذِي أَنْزَلَ مِنَ السَّمَاءِ مَاءً ۖ لَكُمْ مِنْهُ شَرَابٌ وَمِنْهُ شَجَرٌ فِيهِ تُسِيمُونَ * يُنْبِتُ لَكُمْ بِهِ الزَّرْعَ وَالزَّيْتُونَ وَالنَّخِيلَ وَالْأَعْنَابَ...",
      translation: "Dialah yang telah menurunkan air hujan dari langit untuk kamu, sebagiannya menjadi minuman dan sebagiannya (menyuburkan) tumbuh-tumbuhan, yang pada (tempat tumbuhnya) kamu menggembalakan ternakmu. Dia menumbuhkan bagi kamu dengan air hujan itu tanam-tanaman; zaitun, kurma, anggur...",
      tafsir: "Dalam Tafsir Al-Misbah, Allah menghubungkan air, tumbuhan, dan nutrisi makanan. Tumbuhan ('syajar') diartikan sebagai produsen utama padang rumput yang memberi makan hewan ternak, yang kemudian dikonsumsi manusia. Ini membentuk siklus jaring-jaring makanan yang berporos pada konversi kimia tumbuhan via fotosintesis."
    },
    scientificQuranConnection: "Tumbuhan memanfaatkan air tidak sekedar sebagai pelarut, melainkan sebagai donor elektron (fotolisis air: H2O dipecah menjadi 2H+, 2e-, dan O2) pada reaksi terang fotosintesis. Oksigen yang kita hirup setiap hari adalah produk pemecahan molekul air hujan oleh tumbuhan melalui bantuan cahaya matahari.",
    facts: [
      "Hampir seluruh molekul oksigen di atmosfer bumi bersumber dari proses pemecahan air (fotolisis) di dalam fotosistem II tumbuhan.",
      "Tumbuhan juga bernapas (respirasi) menggunakan oksigen 24 jam sehari untuk merombak glukosa, namun laju fotosintesis di siang hari jauh melampaui laju respirasinya."
    ],
    suggestedIllustration: "Simulasi interaktif kloroplas menerima sinar matahari, CO2, air dan menghasilkan glukosa serta melepaskan balon gas Oksigen secara real-time.",
    reflectionQuestion: "Bayangkan jika tumbuhan di muka bumi mogok melakukan fotosintesis selama satu hari saja, apa yang akan terjadi pada pasokan oksigen global?",
    infographicPoints: [
      { title: "Fotolisis Air", desc: "Pemecahan air menjadi oksigen bebas menggunakan energi foton cahaya." },
      { title: "Siklus Energi", desc: "Alur transfer energi surya menjadi bahan pangan organik berenergi tinggi." },
      { title: "Reaksi Gelap & Terang", desc: "Sinergi kloroplas mentransfer elektron menghasilkan karbohidrat kompleks." }
    ]
  },
  {
    id: "adaptasi-tumbuhan",
    title: "4. Mekanisme Adaptasi Tumbuhan",
    scientificExplanation: "Tumbuhan bertahan hidup di berbagai biome ekstrem melalui adaptasi morfologi, fisiologi, dan tingkah laku. Tumbuhan xerofit (seperti kaktus) meminimalkan transpirasi dengan daun berbentuk duri, kutikula tebal, dan stomata yang menutup pada siang hari. Tumbuhan hidrofit (seperti teratai) memiliki rongga udara (aerenkim) agar terapung dan membuang kelebihan air via transpirasi tinggi.",
    quranVerse: {
      surah: "QS. Ar-Ra'd",
      verse: "4",
      arabic: "وَفِي الْأَرْضِ قِطَعٌ مُتَجَاوِرَاتٌ وَجَنَّاتٌ مِنْ أَعْنَابٍ وَزَرْعٌ وَنَخِيلٌ صِنْوَانٌ وَغَيْرُ صِنْوَانٍ يُسْقَىٰ بِـمَاءٍ وَاحِدٍ وَنُفَضِّلُ بَعْضَهَا عَلَىٰ بَعْضٍ فِي الْأُكُلِ...",
      translation: "Dan di bumi terdapat bagian-bagian yang berdampingan, kebun-kebun anggur, tanaman-tanaman, dan pohon kurma yang bercabang dan yang tidak bercabang, disirami dengan air yang sama, tetapi Kami lebihkan rasan sebagian atas sebagian yang lain pada makanan...",
      tafsir: "Tafsir Al-Maraghi menggarisbawahi keajaiban tanah-tanah yang bertetangga (berdampingan) dan disirami sumber air yang identik, namun menghasilkan variasi metabolit sekunder yang kontras. Perbedaan genetik dan fisiologis ini memaksa setiap jenis tanaman mengekspresikan karakter, nutrisi, rasa, dan adaptasi penyerapan kimia yang unik."
    },
    scientificQuranConnection: "Diferensiasi 'rasa' dan karakter morfologis tumbuhan menunjukkan keunikan jalur metabolisme (primer maupun sekunder) yang telah diadaptasikan terhadap lingkungan hidup masing-masing. Air yang diserap sama, namun ekspresi genetik (DNA) melahirkan molekul penentu rasa yang berbeda (alkaloid, flavonoid, volatil).",
    facts: [
      "Tanaman kurma ('nakhil sinwan') memiliki akar serabut yang sangat kuat dan dalam, memungkinkannya bertahan di badai pasir gurun serta menyerap air puluhan meter ke bawah tanah.",
      "Tumbuhan bakau (mangrove) memilik kelenjar garam khusus di daunnya untuk menyaring dan mengeluarkan kelebihan garam dari air laut (adaptasi fisiologis)."
    ],
    suggestedIllustration: "Komparasi tumbuhan Gurun (Xerofit) dibanding Teratai (Hidrofit) dan Mangrove (Halofit).",
    reflectionQuestion: "Bagaimana sebidang tanah kecil yang disuplai air yang sama bisa memproduksi cabai yang pedas dan tebu yang sangat manis sekaligus?",
    infographicPoints: [
      { title: "Xerofit (Gurun)", desc: "Stomata tersembunyi, kutikula lilin tebal untuk mereduksi hilangnya air." },
      { title: "Halofit (Asin)", desc: "Kelenjar garam aktif mengekskresikan natrium klorida berlebih." },
      { title: "Ekspresi Genetik", desc: "Variasi 'rasa' buah akibat biosintesis sekunder yang spesifik ('nufaddhilu ba'daha')." }
    ]
  },
  {
    id: "klorofil-daun",
    title: "5. Klorofil dan Zat Hijau Daun",
    scientificExplanation: "Klorofil adalah pigmen fotosintetik utama pada tumbuhan yang terletak di membran tilakoid kloroplas. Molekul klorofil memiliki cincin porfirin dengan atom Magnesium (Mg) di pusatnya, mirip dengan struktur hemoglobin darah manusia yang berpusat pada zat Besi (Fe). Klorofil menyerap cahaya gelombang merah dan biru, lalu memantulkan gelombang hijau sehingga daun tampak hijau secara visual.",
    quranVerse: {
      surah: "QS. Al-An'am",
      verse: "99",
      arabic: "وَهُوَ الَّذِي أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ فَأَخْرَجْنَا مِنْهُ خَضِرًا نُخْرِجُ مِنْهُ حَبًّا مُتَرَاكِبًا...",
      translation: "Dan Dialah yang menurunkan air dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan, maka Kami keluarkan dari tumbuh-tumbuhan itu materi yang hijau (Khadhiran), yang Kami keluarkan darinya butir-butir yang padat (biji-bijian)...",
      tafsir: "Kata 'Khadhiran' secara literal berarti 'yang hijau' atau pigmen hijau. Tafsir Al-Misbah mencatat bahwa penekanan zat hijau ini sebagai cikal bakal pembentukan buah dan biji ('habba mutarakiba'). Ini sesuai sains modern bahwa tanpa pigmen hijau (klorofil), akumulasi fotosintat yang membentuk materi kering biji mustahil terjadi."
    },
    scientificQuranConnection: "Khadhiran (materi hijau) merujuk langsung pada klorofil. Klorofil menangkap foton surya untuk melangsungkan sintesis karbohidrat. Karbohidrat cadangan inilah yang nantinya dialirkan menuju buah dan biji tumbuhan melalui jaringan floem (proses translokasi) sehingga terbentuklah bulir gandum atau padi yang bertumpuk-tumpuk.",
    facts: [
      "Secara struktural, molekul klorofil hampir identik dengan hemoglobin darah kita. Satu-satunya perbedaan utama adalah atom pusatnya: Magnesium (Mg) untuk klorofil, dan Besi (Fe) untuk hemoglobin.",
      "Daun yang gugur berganti warna menjadi kuning atau merah kering karena klorofil didegradasi terlebih dahulu, membiarkan pigmen karotenoid dan antosianin terlihat."
    ],
    suggestedIllustration: "Model 3D interaktif yang membandingkan stuktur kimia molekul Hemoglobin (Fe) berdampingan dengan Klorofil (Mg).",
    reflectionQuestion: "Mengapa kemiripan struktural klorofil ('darah tumbuhan') dan hemoglobin ('darah manusia') begitu erat? Apakah ini isyarat kesatuan penciptaan dari Sang Khaliq?",
    infographicPoints: [
      { title: "Zat Khadhiran", desc: "Isyarat langsung kata Al-Qur'an terkait zat hijau daun (klorofil)." },
      { title: "Cincin Porfirin", desc: "Persamaan luar biasa struktur kimia klorofil (Mg) dengan darah manusia (Fe)." },
      { title: "Translokasi Floem", desc: "Proses penyaluran hasil fotosintesis menumpuk menjadi biji padi dan gandum." }
    ]
  },
  {
    id: "keanekaragaman-klasifikasi",
    title: "6. Keanekaragaman dan Klasifikasi Tumbuhan",
    scientificExplanation: "Kingdom Plantae diklasifikasikan secara taksonomi menjadi kelompok tumbuhan tidak berpembuluh (Atracheophyta atau Bryophyta/lumut) dan tumbuhan berpembuluh (Tracheophyta). Tumbuhan berpembuluh dibagi kembali menjadi tumbuhan paku (Pteridophyta) dan tumbuhan berbiji (Spermatophyta). Spermatophyta mencakup Angiospermae (biji tertutup: monokotil dan dikotil) serta Gymnospermae (biji terbuka).",
    quranVerse: {
      surah: "QS. Al-An'am",
      verse: "141",
      arabic: "وَهُوَ الَّذِي أَنْشَأَ جَنَّاتٍ مَعْرُوشَاتٍ وَغَيْرَ مَعْرُوشَاتٍ وَالنَّخْلَ وَالزَّرْعَ مُخْتَلِفًا أُكُلُهُ وَالزَّيْتُونَ وَالرُّمَّانَ مُتَشَابِهًا وَغَيْرَ مُتَشَابِهٍ...",
      translation: "Dan Dialah yang menjadikan kebun-kebun yang menjalar (ma'rusyat) dan yang tidak menjalar (ghaira ma'rusyat), pohon kurma, tanaman-tanaman yang beraneka ragam buahnya, zaitun dan delima yang serupa (bentuk dan daunnya) dan tidak serupa (rasanya)...",
      tafsir: "Tafsir Al-Misbah membagi vegetasi menjadi dua kategori arsitektural utama: 'ma'rusyat' (tumbuhan merambat atau menjalar seperti anggur, melon) dan 'ghaira ma'rusyat' (tumbuhan tegak dengan batang kuat seperti kurma, zaitun). Al-Qur'an juga memperkenalkan konsep keanekaragaman fenotipe ('dan tidak serupa rasanya' meskipun morfologi sekilas mirip)."
    },
    scientificQuranConnection: "Pengelompokkan 'ma'rusyat' dan 'ghaira ma'rusyat' adalah klasifikasi berdasarkan habitus tumbuh (growth habit), yang diwariskan melalui adaptasi mekanis batang (misalnya perkembangan jaringan kolenkim, sklerenkim, Lignin pada tanaman berbatang kayu, versus sulur penarik pada tanaman memanjat). Ini selaras dengan keanekaragaman biodiversitas.",
    facts: [
      "Saat ini diidentifikasi lebih dari 390.000 spesies tumbuhan di bumi, menjadikannya salah satu kingdom dengan keanekaragaman morfologi terbesar.",
      "Studi DNA modern mengonfirmasi bahwa tumbuhan yang secara fisik tampak identik ('mutasyabiha') dapat memiliki komposisi bahan aktif kimia yang sangat berbeda ('ghaira mutasyabihin') akibat adaptasi mikro-evolutif."
    ],
    suggestedIllustration: "Pohon filogeni interaktif yang memetakan evolusi dari Thallophyta, Bryophyta, Pteridophyta, Gymnospermae, hingga Angiospermae.",
    reflectionQuestion: "Bagaimana ketepatan Al-Qur'an menggolongkan struktur fisik tumbuhan merambat (ma'rusyat) 14 abad sebelum ilmu taksonomi modern berkembang pesat?",
    infographicPoints: [
      { title: "Habitus Tumbuh", desc: "Klasifikasi tanaman berdasar habitus: menjalar ('ma'rusyat') vs tegak ('ghaira ma'rusyat')." },
      { title: "Filogeni Plantae", desc: "Urutan evolusi adaptasi jaringan pembuluh vaskular xilem dan floem." },
      { title: "Keanekaragaman Kimia", desc: "Kemiripan morfologi luar biasa namun kontras dalam kandungan gizi dan rasa." }
    ]
  },
  {
    id: "reproduksi-tumbuhan",
    title: "7. Perkembangbiakan (Reproduksi) Tumbuhan",
    scientificExplanation: "Tumbuhan bereproduksi melalui siklus metagenesis (pergiliran keturunan antara fase haploid gametofit dan fase diploid sporofit). Pada Angiospermae, pembentukan biji diawali proses penyerbukan (polinasi) di mana serbuk sari (gametofit jantan) jatuh di kepala putik (organ betina). Proses ini kemudian dilanjutkan dengan pembuahan ganda (double fertilization) menghasilkan zigot dan endosperma penyuplai cadangan makanan.",
    quranVerse: {
      surah: "QS. Yasin",
      verse: "36",
      arabic: "سُبْحَانَ الَّذِي خَلَقَ الْأَزْوَاجَ كُلَّهَا مِمَّا تُنْبِتُ الْأَرْضُ وَمِنْ أَنْفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ",
      translation: "Maha Suci Allah yang telah menciptakan berpasang-pasangan semuanya, baik dari apa yang ditumbuhkan oleh bumi dan dari diri mereka maupun dari apa yang tidak mereka ketahui.",
      tafsir: "Menurut Tafsir Al-Misbah, konsep 'berpasang-pasangan' ('al-azwaj') pada apa yang ditumbuhkan bumi merujuk langsung pada polaritas jantan dan betina. Di masa lampau, orang hanya memahami pembuahan pada beberapa tanaman saja. Namun, ayat ini menegaskan bahwa segala bentuk flora di bumi memiliki organ penentu generasi jantan dan betina, bahkan pada tingkat mikroskopis selular."
    },
    scientificQuranConnection: "Hukum berpasang-pasangan ini mewakili reproduksi seksual pada tumbuhan yang menuntut keterlibatan gamet jantan (serbuk sari/mikrospora) dan betina (sel telur/megaspora). Penemuan alat kelamin tanaman oleh Rudolf Jakob Camerarius pada 1694 memvalidasi kebenaran mutlak isyarat ilmiah Al-Qur'an ini.",
    facts: [
      "Bunga kembang sepatu memiliki organ jantan (benang sari) dan betina (putik) pada satu bunga yang sama (hermafrodit/biseksual).",
      "Serbuk sari dapat melayang sejauh ratusan kilometer terbawa angin untuk membuahi tumbuhan betina pasangannya di tempat yang sangat jauh."
    ],
    suggestedIllustration: "Simulasi penyerbukan interaktif di mana polen jatuh di putik dan membuat tabung polen turun menuju ovul sel telur.",
    reflectionQuestion: "Bagaimana sebutir serbuk sari mikroskopis tak bermata dapat membuat tabung presisi menembus dasar tangkai putik menuju sel telur target?",
    infographicPoints: [
      { title: "Konsep Berpasang-Pasangan", desc: "Isyarat spiritual polaritas biner jantan-betina ('al-azwaj') pada ekologi flora." },
      { title: "Metagenesis", desc: "Siklus pergiliran fase spora (aseksual) dan gamet (seksual) pada tanaman." },
      { title: "Pembuahan Ganda", desc: "Karakteristik unik Angiospermae menghasilkan embrio sekaligus cadangan makanan benih." }
    ]
  },
  {
    id: "manfaat-lingkungan",
    title: "8. Manfaat Tumbuhan bagi Ekosistem",
    scientificExplanation: "Tumbuhan menyangga keberlangsungan kehidupan bumi dengan mencegah erosi tanah (akar memperkokoh struktur partikel tanah), menahan laju air permukaan (mengurangi banjir bandang run-off), memurnikan polutan udara (menyerap CO2 berbahaya), dan mempertahankan siklus karbon biotik global. Kehilangan vegetasi hutan tropis memicu bencana berantai yang tidak dapat dipulihkan secara ekologis.",
    quranVerse: {
      surah: "QS. Al-A'raf",
      verse: "56",
      arabic: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا وَادْعُوهُ خَوْفًا وَطَمَعًا ۚ إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِنَ الْمُحْسِنِينَ",
      translation: "Dan janganlah kamu membuat kerusakan di muka bumi, sesudah (Allah) memperbaikinya, dan berdoalah kepada-Nya dengan rasa takut (tidak akan diterima) dan harapan (akan dikabulkan). Sesungguhnya rahmat Allah amat dekat kepada orang-orang yang berbuat baik.",
      tafsir: "Tafsir Al-Misbah melarang keras segala tindakan destruktif yang merusak homeostasis alam. Hutan, tanah, dan vegetasi diciptakan Allah dalam kondisi seimbang ('ishlahiha'). Penebangan liar, konversi lahan hutan yang sembarangan, serta pembakaran flora adalah bentuk nyata fasad (kerusakan) lingkungan yang melanggar ketentuan syariat ini."
    },
    scientificQuranConnection: "Larangan merusak bumi menuntut kelestarian tutupan vegetasi hutan. Akar tanaman melilit partikel tanah dalam jaringan serat yang stabil, menciptakan pori-pori makro dalam tanah (fungsi infiltrasi). Tanpa tumbuhan, air hujan tidak berasimilasi ke dalam tanah, melainkan melonjak bebas di permukaan sebagai aliran lumpur pembawa banjir bandang dan tanah longsor.",
    facts: [
      "Satu pohon rindang dewasa dapat menyerap hingga 22 kg gas CO2 per tahun dan melepaskan oksigen yang cukup untuk bernapas dua orang manusia.",
      "Akar pohon hutan bertindak sebagai filter geologis raksasa yang menyuplai air tanah murni ke sumur-sumur penduduk di lembah bawahnya."
    ],
    suggestedIllustration: "Skema interaktif lereng gunung berpohon (kokoh, air menyerap) versus lereng gundul pasca-deforestasi (longsor, air menggelontor membawa lumpur).",
    reflectionQuestion: "Bila Allah melarang kita merusak alam setelah diperbaiki-Nya, apakah mengabaikan penebangan hutan secara liar di sekitar kita merupakan bentuk kemaksiatan ekologis?",
    infographicPoints: [
      { title: "Homeostasis Ekosistem", desc: "Keseimbangan alam ('ishlahiha') yang ditopang oleh keberadaan hutan vegetatif." },
      { title: "Filtrasi Tanah", desc: "Kemampuan akar menyerap air permukaan masuk ke kantong air tanah dalam." },
      { title: "Penyerap Karbon", desc: "Peran vital pohon menurunkan efek rumah kaca penyebab krisis iklim." }
    ]
  }
];

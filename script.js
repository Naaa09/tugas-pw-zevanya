/*
  CHATBOT SMK NEGERI 9 MEDAN
  - Database 100 pertanyaan disimpan langsung di file ini.
  - Tidak perlu fetch() atau file chatbot-data.json.
  - Cocok dengan elemen ID pada index.html website RPL SMKN 9 Medan.
*/

const knowledge = [
  {
    "id": 1,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Apa itu SMK Negeri 9 Medan?",
    "jawaban": "SMK Negeri 9 Medan adalah salah satu Sekolah Menengah Kejuruan Negeri yang berada di Kota Medan, Sumatera Utara. Sekolah ini menyelenggarakan pendidikan kejuruan untuk membekali siswa dengan pengetahuan dan keterampilan."
  },
  {
    "id": 2,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Dimana lokasi SMK Negeri 9 Medan?",  
    "jawaban": "SMK Negeri 9 Medan berlokasi di jl. Patriot No. 20 A Kota Medan, Provinsi Sumatera Utara."
  },
  {
    "id": 3,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Apa visi SMK Negeri 9 Medan?",
    "jawaban": "Visi sekolah dapat dilihat melalui halaman profil sekolah. Silakan kunjungi menu Profil untuk mengetahui visi resmi SMK Negeri 9 Medan."
  },
  {
    "id": 4,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Apa misi sekolah?",
    "jawaban": "Misi sekolah merupakan langkah untuk mewujudkan visi pendidikan dan membentuk lulusan yang kompeten, berkarakter, serta siap menghadapi dunia kerja. Untuk rumusan resmi, silakan lihat halaman profil sekolah."
  },
  {
    "id": 5,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Apakah SMK Negeri 9 Medan sekolah negeri?",
    "jawaban": "Ya, SMK Negeri 9 Medan merupakan sekolah menengah kejuruan berstatus negeri."
  },
  {
    "id": 6,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Kapan SMK Negeri 9 Medan didirikan?",
    "jawaban": "Informasi tahun pendirian dapat dilihat pada bagian sejarah sekolah atau profil resmi SMK Negeri 9 Medan."
  },
  {
    "id": 7,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Siapa kepala sekolah SMK Negeri 9 Medan?",
    "jawaban": "Untuk mengetahui nama kepala sekolah yang menjabat saat ini, silakan melihat informasi terbaru pada profil resmi sekolah."
  },
  {
    "id": 8,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Apa akreditasi sekolah?",
    "jawaban": "Sekolah SMKN 9 Berakreditas A."
  },
  {
    "id": 9,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Bagaimana cara menghubungi sekolah?",
    "jawaban": "Anda dapat menghubungi pihak sekolah melalui kontak resmi email SMKN 9 @admin@smkn9medan.sch.id dan melalui Telepon (061) 8454350."
  },
  {
    "id": 10,
    "kategori": "Profil dan informasi umum sekolah",
    "pertanyaan": "Apa jam operasional sekolah?",
    "jawaban": "Jam operasional mengikuti jadwal kegiatan sekolah. Untuk informasi jam pelayanan administrasi, silakan menghubungi tata usaha sekolah."
  },
  {
    "id": 11,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apa saja jurusan di SMK Negeri 9 Medan?",
    "jawaban": `SMK Negeri 9 Medan memiliki beberapa program keahlian:

1. Perawatan Sosial (PS)
2. Teknik Komputer Jaringan (TKJ)
3. Rekayasa Perangkat Lunak (RPL)
4. Multimedia (MM)
5. Animasi (AN)
6. Desain Komunikasi Visual (DKV)`
},
  {
    "id": 12,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apa itu jurusan di SMK?",
    "jawaban": "Jurusan merupakan bidang keahlian yang dipelajari siswa selama menempuh pendidikan di SMK sesuai minat dan kompetensi yang ingin dikuasai."
  },
  {
    "id": 13,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Bagaimana cara memilih jurusan?",
    "jawaban": "Pilihlah jurusan sesuai minat, bakat, dan cita-cita Anda. Sebaiknya pelajari terlebih dahulu materi serta peluang kerja dari masing-masing jurusan."
  },
  {
    "id": 14,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apakah setiap jurusan memiliki praktik?",
    "jawaban": "Ya, pendidikan SMK menggabungkan pembelajaran teori dan praktik untuk meningkatkan keterampilan siswa sesuai bidang keahliannya."
  },
  {
    "id": 15,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apakah ada kegiatan praktik kerja lapangan?",
    "jawaban": "Praktik Kerja Lapangan (PKL) merupakan bagian dari pembelajaran pendidikan kejuruan. Pelaksanaannya mengikuti ketentuan program keahlian dan sekolah."
  },
  {
    "id": 16,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apa manfaat masuk SMK?",
    "jawaban": "Siswa memperoleh pengetahuan dan keterampilan sesuai bidang keahlian sehingga dapat mempersiapkan diri untuk bekerja maupun melanjutkan pendidikan."
  },
  {
    "id": 17,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apakah lulusan SMK bisa kuliah?",
    "jawaban": "Tentu saja. Lulusan SMK dapat melanjutkan pendidikan ke perguruan tinggi sesuai persyaratan program studi yang dipilih."
  },
  {
    "id": 18,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apakah lulusan SMK bisa langsung bekerja?",
    "jawaban": "Bisa. Lulusan SMK dibekali kompetensi kejuruan sebagai salah satu bekal untuk memasuki dunia kerja."
  },
  {
    "id": 19,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Apakah jurusan menentukan pekerjaan?",
    "jawaban": "Jurusan membantu membentuk kompetensi awal siswa, tetapi pilihan pekerjaan tetap bergantung pada keterampilan, pengalaman, dan kesempatan kerja."
  },
  {
    "id": 20,
    "kategori": "Jurusan dan program keahlian",
    "pertanyaan": "Bagaimana mengetahui keunggulan jurusan?",
    "jawaban": "Anda dapat membaca deskripsi setiap program keahlian atau berkonsultasi dengan guru dan pihak sekolah."
  },
  {
    "id": 21,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Bagaimana cara masuk SMK Negeri 9 Medan?",
    "jawaban": "Calon siswa dapat mengikuti proses Seleksi Penerimaan Murid Baru (SPMB) sesuai jadwal dan ketentuan yang ditetapkan pemerintah daerah."
  },
  {
    "id": 22,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Kapan pendaftaran siswa baru dibuka?",
    "jawaban": "Jadwal pendaftaran berubah setiap tahun. Silakan pantau pengumuman resmi SMK Negeri 9 Medan dan Dinas Pendidikan Sumatera Utara."
  },
  {
    "id": 23,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Apa saja persyaratan masuk SMK Negeri 9 Medan?",
    "jawaban": "Persyaratan umumnya meliputi ijazah atau surat keterangan lulus, kartu keluarga, akta kelahiran, dan dokumen lain sesuai ketentuan SPMB tahun berjalan."
  },
  {
    "id": 24,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Apakah pendaftaran dilakukan secara online?",
    "jawaban": "Mekanisme pendaftaran mengikuti kebijakan SPMB yang berlaku. Informasi mengenai pendaftaran online dapat diperoleh melalui pengumuman resmi."
  },
  {
    "id": 25,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Apakah lulusan SMP bisa mendaftar?",
    "jawaban": "Ya, lulusan SMP atau sederajat dapat mendaftar selama memenuhi persyaratan yang ditentukan."
  },
  {
    "id": 26,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Apakah siswa dari luar Medan boleh mendaftar?",
    "jawaban": "Calon siswa dari luar Kota Medan dapat mengikuti seleksi selama memenuhi ketentuan domisili dan jalur penerimaan yang berlaku."
  },
  {
    "id": 27,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Apakah ada tes masuk?",
    "jawaban": "Seleksi dapat mencakup persyaratan dan tahapan tertentu sesuai kebijakan SPMB tahun berjalan. Silakan periksa petunjuk teknis penerimaan."
  },
  {
    "id": 28,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Bagaimana cara mengetahui hasil seleksi?",
    "jawaban": "Hasil seleksi dapat diperiksa melalui portal resmi SPMB atau media pengumuman yang diinformasikan oleh sekolah."
  },
  {
    "id": 29,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Apakah bisa memilih lebih dari satu jurusan?",
    "jawaban": "Pilihan program keahlian mengikuti ketentuan pendaftaran tahun berjalan. Silakan periksa petunjuk pemilihan jurusan saat pendaftaran."
  },
  {
    "id": 30,
    "kategori": "Pendaftaran peserta didik baru (SPMB)",
    "pertanyaan": "Apakah siswa yang tidak lolos bisa mendaftar kembali?",
    "jawaban": "Kesempatan mengikuti seleksi berikutnya bergantung pada jadwal, kuota, dan ketentuan resmi SPMB."
  },
  {
    "id": 31,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Apakah SMK Negeri 9 Medan gratis?",
    "jawaban": "Sebagai sekolah negeri, pembiayaan pendidikan mengikuti kebijakan pemerintah. Untuk informasi mengenai kebutuhan biaya lainnya, silakan menghubungi pihak sekolah."
  },
  {
    "id": 32,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Apakah ada biaya pendaftaran?",
    "jawaban": "Ketentuan biaya pendaftaran mengikuti aturan resmi SPMB tahun berjalan. Silakan periksa pengumuman penerimaan siswa baru."
  },
  {
    "id": 33,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Apakah siswa harus membeli seragam?",
    "jawaban": "Siswa perlu memenuhi ketentuan seragam sekolah. Informasi jenis dan kebutuhan seragam dapat ditanyakan kepada pihak sekolah."
  },
  {
    "id": 34,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Apakah tersedia beasiswa?",
    "jawaban": "Informasi beasiswa mengikuti program bantuan pendidikan yang tersedia dan persyaratan dari masing-masing program."
  },
  {
    "id": 35,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Apakah siswa bisa mendapatkan bantuan PIP?",
    "jawaban": "Siswa yang memenuhi persyaratan dapat berkesempatan memperoleh Program Indonesia Pintar (PIP) sesuai ketentuan pemerintah."
  },
  {
    "id": 36,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Bagaimana cara mendapatkan KIP?",
    "jawaban": "Silakan mengikuti prosedur dan persyaratan program Kartu Indonesia Pintar melalui instansi terkait atau pihak sekolah."
  },
  {
    "id": 37,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Apakah ada biaya praktik?",
    "jawaban": "Ketentuan pembiayaan kegiatan praktik mengikuti kebijakan sekolah dan peraturan yang berlaku. Silakan konfirmasi kepada pihak sekolah."
  },
  {
    "id": 38,
    "kategori": "Biaya pendidikan dan beasiswa",
    "pertanyaan": "Apakah ada bantuan untuk siswa kurang mampu?",
    "jawaban": "Terdapat program bantuan pendidikan pemerintah bagi siswa yang memenuhi kriteria. Informasi lebih lanjut dapat diperoleh melalui bagian kesiswaan."
  },
  {
    "id": 39,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apa saja fasilitas SMK Negeri 9 Medan?",
    "jawaban": "Fasilitas sekolah mendukung kegiatan pembelajaran teori dan praktik. Untuk daftar fasilitas lengkap, silakan lihat halaman Fasilitas Sekolah."
  },
  {
    "id": 40,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apakah tersedia perpustakaan?",
    "jawaban": "Informasi mengenai fasilitas perpustakaan dan jam pelayanannya dapat diperoleh melalui pihak sekolah."
  },
  {
    "id": 41,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apakah tersedia laboratorium komputer?",
    "jawaban": "Silakan melihat informasi fasilitas sekolah untuk mengetahui ketersediaan dan penggunaan laboratorium komputer."
  },
  {
    "id": 42,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apakah sekolah memiliki ruang praktik?",
    "jawaban": "Pendidikan SMK memerlukan sarana praktik sesuai bidang keahlian. Informasi ruang praktik dapat dilihat pada halaman program keahlian."
  },
  {
    "id": 43,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apakah terdapat lapangan olahraga?",
    "jawaban": "Untuk mengetahui fasilitas olahraga yang tersedia, silakan periksa halaman fasilitas sekolah."
  },
  {
    "id": 44,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apakah sekolah memiliki kantin?",
    "jawaban": "Informasi mengenai fasilitas kantin dapat ditanyakan kepada pihak sekolah."
  },
  {
    "id": 45,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apakah tersedia Wi-Fi?",
    "jawaban": "Ketersediaan akses internet untuk kegiatan pembelajaran dapat dikonfirmasi kepada pihak sekolah."
  },
  {
    "id": 46,
    "kategori": "Fasilitas sekolah",
    "pertanyaan": "Apakah fasilitas sekolah boleh digunakan siswa?",
    "jawaban": "Fasilitas sekolah dapat digunakan sesuai aturan, jadwal, dan izin dari pihak yang bertanggung jawab."
  },
  {
    "id": 47,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Bagaimana sistem pembelajaran di SMK Negeri 9 Medan?",
    "jawaban": "Pembelajaran dilaksanakan melalui kegiatan teori dan praktik sesuai kurikulum serta program keahlian masing-masing."
  },
  {
    "id": 48,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Kurikulum apa yang digunakan?",
    "jawaban": "Kurikulum yang digunakan mengikuti kebijakan kurikulum pendidikan nasional dan ketentuan yang berlaku di sekolah."
  },
  {
    "id": 49,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Apa saja ekstrakurikuler yang tersedia?",
    "jawaban": "Kegiatan ekstrakurikuler dapat membantu mengembangkan minat, bakat, dan kreativitas siswa. Daftar kegiatan dapat ditanyakan kepada bagian kesiswaan."
  },
  {
    "id": 50,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Apakah ada kegiatan OSIS?",
    "jawaban": "OSIS merupakan organisasi siswa yang menjadi wadah pengembangan kepemimpinan dan partisipasi siswa. Informasi kepengurusan dapat diperoleh melalui bagian kesiswaan."
  },
  {
    "id": 51,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Apakah sekolah mengikuti perlombaan?",
    "jawaban": "Siswa dapat mengikuti berbagai perlombaan sesuai bidang dan kesempatan yang tersedia, baik akademik maupun nonakademik."
  },
  {
    "id": 52,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Apakah ada kegiatan upacara bendera?",
    "jawaban": "Kegiatan upacara dilaksanakan sesuai jadwal dan ketentuan sekolah."
  },
  {
    "id": 53,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Apakah sekolah mengadakan kegiatan peringatan hari besar?",
    "jawaban": "Sekolah dapat menyelenggarakan kegiatan untuk memperingati hari besar nasional maupun kegiatan pendidikan lainnya sesuai agenda sekolah."
  },
  {
    "id": 54,
    "kategori": "Kegiatan akademik dan ekstrakurikuler",
    "pertanyaan": "Bagaimana cara bergabung dengan ekstrakurikuler?",
    "jawaban": "Silakan menghubungi pembina ekstrakurikuler atau bagian kesiswaan untuk mengetahui jadwal dan prosedur pendaftaran."
  },
  {
    "id": 55,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apa itu PKL?",
    "jawaban": "PKL atau Praktik Kerja Lapangan merupakan kegiatan pembelajaran yang memberikan pengalaman langsung kepada siswa di lingkungan dunia kerja."
  },
  {
    "id": 56,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Kapan siswa melaksanakan PKL?",
    "jawaban": "Jadwal PKL ditentukan oleh sekolah berdasarkan program keahlian dan kalender akademik."
  },
  {
    "id": 57,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apakah sekolah mencarikan tempat PKL?",
    "jawaban": "Penempatan PKL mengikuti mekanisme yang ditetapkan sekolah dan kerja sama dengan mitra industri."
  },
  {
    "id": 58,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apakah PKL wajib diikuti?",
    "jawaban": "PKL merupakan bagian dari pembelajaran pendidikan kejuruan sesuai struktur kurikulum dan ketentuan sekolah."
  },
  {
    "id": 59,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apakah siswa mendapatkan nilai dari PKL?",
    "jawaban": "Ya, kegiatan PKL dapat menjadi bagian dari penilaian kompetensi siswa berdasarkan ketentuan sekolah dan pembimbing."
  },
  {
    "id": 60,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apakah lulusan SMK Negeri 9 Medan bisa bekerja di perusahaan?",
    "jawaban": "Lulusan memiliki bekal kompetensi kejuruan yang dapat digunakan untuk melamar pekerjaan sesuai kualifikasi perusahaan."
  },
  {
    "id": 61,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apakah tersedia bursa kerja khusus (BKK)?",
    "jawaban": "Untuk mengetahui ketersediaan layanan BKK dan informasi lowongan kerja, silakan menghubungi bagian hubungan industri atau pihak sekolah."
  },
  {
    "id": 62,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apakah sekolah memiliki kerja sama dengan industri?",
    "jawaban": "Kerja sama industri dapat mendukung kegiatan PKL, pembelajaran, dan pengembangan kompetensi siswa. Informasi mitra resmi dapat ditanyakan kepada sekolah."
  },
  {
    "id": 63,
    "kategori": "PKL, dunia kerja, dan alumni",
    "pertanyaan": "Apakah alumni bisa mendapatkan informasi pekerjaan?",
    "jawaban": "Alumni dapat menanyakan informasi lowongan dan kegiatan alumni melalui saluran komunikasi resmi sekolah jika tersedia."
  },
  {
    "id": 64,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Siapa saja guru di SMK Negeri 9 Medan?",
    "jawaban": `Berikut daftar nama guru SMK Negeri 9 Medan:

1. Sulastri Silalahi, S.Pd - Bahasa Indonesia
2. Annisah Nur Panggabean, S.Pd - Bahasa Inggris
3. Nudriqah Fadhilah Siregar, S.Pd - Matematika
4. Nukhayuddin Hasibuan, S.Pd - Agama Islam
5. Ursula Eka Oktoria Purba, S.Ag - Agama Katolik
6. Herbet Helvi Roberto Bakkara, S.Kom - MP, PKK
7. Novelman Manurung, S.T - MK
8. M. Sofa Ananda, S.Sos, M.Pd - PP
9. Kharisma Dani, S.Pd - Bahasa Indonesia
10. Defi Halimi S. Hrp, S.Pd - Bahasa Inggris
11. Fakhrur Rozi Siregar, S.Pd - Matematika
12. Eva P. Manurung, S.Pak - Agama Protestan
13. Shinta Hastia Putri, S.Pd - MP
14. Ardiansyah, S.T - MK, PKK
15. Hafizah Ladyana Lubis, S.Pd - Bahasa Indonesia
16. Salmon Sitanggang, S.Pd - Bahasa Inggris
17. Indrawati Tumanggor, S.Ag, MA - Agama
18. Annisah Husni Daulay, M.Kom / M.Pd - MK, PKK
19. Sortika Tamba, S.Pd - PP
20. Syukriyah, S.Pd - Bahasa Inggris
21. Khairani, S.Pd.I - Agama
22. Pirmando Gultom, M.Kom - MP
23. Roy Hendro Siburian, S.Kom - PKK, MK`
  },
  {
    "id": 65,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara menghubungi wali kelas?",
    "jawaban": "Silakan menghubungi wali kelas melalui saluran komunikasi yang telah disediakan oleh sekolah."
  },
  {
    "id": 66,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara menghubungi tata usaha?",
    "jawaban": "Anda dapat menghubungi bagian tata usaha melalui kontak resmi sekolah untuk mendapatkan pelayanan administrasi."
  },
  {
    "id": 67,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara meminta surat keterangan aktif sekolah?",
    "jawaban": "Siswa dapat mengajukan permohonan kepada bagian tata usaha dengan membawa atau melengkapi persyaratan administrasi yang dibutuhkan."
  },
  {
    "id": 68,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara mengurus surat pindah sekolah?",
    "jawaban": "Silakan datang ke bagian tata usaha atau bagian kesiswaan untuk memperoleh informasi prosedur dan persyaratan pindah sekolah."
  },
  {
    "id": 69,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara legalisasi ijazah?",
    "jawaban": "Alumni dapat mengajukan permohonan legalisasi ijazah kepada bagian tata usaha dengan membawa dokumen yang diperlukan."
  },
  {
    "id": 70,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara mendapatkan ijazah?",
    "jawaban": "Pengambilan ijazah dilakukan sesuai prosedur dan jadwal yang ditetapkan sekolah. Silakan menghubungi bagian tata usaha."
  },
  {
    "id": 71,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara melaporkan siswa yang sakit?",
    "jawaban": "Siswa atau orang tua dapat menyampaikan informasi kepada wali kelas atau pihak sekolah sesuai prosedur izin yang berlaku."
  },
  {
    "id": 72,
    "kategori": "Guru, administrasi, dan pelayanan sekolah",
    "pertanyaan": "Bagaimana cara menyampaikan keluhan?",
    "jawaban": "Anda dapat menyampaikan keluhan secara sopan melalui pihak sekolah, wali kelas, bagian kesiswaan, atau kontak resmi sekolah."
  },
  {
    "id": 73,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Apakah siswa wajib memakai seragam?",
    "jawaban": "Ya, siswa wajib mengenakan seragam sesuai ketentuan dan jadwal yang ditetapkan sekolah."
  },
  {
    "id": 74,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Apakah siswa harus datang tepat waktu?",
    "jawaban": "Ya, seluruh siswa diharapkan datang tepat waktu agar kegiatan pembelajaran berjalan dengan tertib."
  },
  {
    "id": 75,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Bagaimana aturan rambut siswa?",
    "jawaban": "Siswa wajib menjaga kerapian dan penampilan sesuai tata tertib yang berlaku di sekolah."
  },
  {
    "id": 76,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Apakah siswa boleh membawa HP?",
    "jawaban": "Penggunaan HP mengikuti aturan sekolah. Siswa diharapkan menggunakan perangkat tersebut secara bijak dan hanya sesuai izin atau kebutuhan pembelajaran."
  },
  {
    "id": 77,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Apa yang harus dilakukan jika terlambat?",
    "jawaban": "Siswa yang terlambat harus mengikuti prosedur penanganan keterlambatan sesuai tata tertib sekolah."
  },
  {
    "id": 78,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Bagaimana cara meminta izin tidak masuk sekolah?",
    "jawaban": "Siswa atau orang tua perlu menyampaikan surat izin atau pemberitahuan kepada wali kelas sesuai prosedur sekolah."
  },
  {
    "id": 79,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Apa yang harus dilakukan jika kehilangan barang?",
    "jawaban": "Segera laporkan kehilangan kepada guru piket, wali kelas, atau bagian kesiswaan agar dapat ditindaklanjuti."
  },
  {
    "id": 80,
    "kategori": "Tata tertib dan kehidupan siswa",
    "pertanyaan": "Bagaimana cara menjaga kebersihan sekolah?",
    "jawaban": "Buang sampah pada tempatnya, menjaga kebersihan kelas, merawat fasilitas, dan mengikuti kegiatan kebersihan lingkungan sekolah."
  },
  {
    "id": 81,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Apakah SMK Negeri 9 Medan menerima siswa pindahan?",
    "jawaban": "Penerimaan siswa pindahan mengikuti ketentuan, ketersediaan kuota, dan kesesuaian program keahlian. Silakan menghubungi bagian kesiswaan."
  },
  {
    "id": 82,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Apakah orang tua boleh berkunjung ke sekolah?",
    "jawaban": "Orang tua dapat berkunjung untuk keperluan tertentu dengan mengikuti prosedur penerimaan tamu yang berlaku di sekolah."
  },
  {
    "id": 83,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Apakah sekolah memiliki media sosial?",
    "jawaban": "Informasi media sosial resmi dapat ditemukan melalui website atau halaman kontak sekolah. Pastikan mengikuti akun resmi sekolah."
  },
  {
    "id": 84,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Apakah sekolah menerima kunjungan dari sekolah lain?",
    "jawaban": "Kunjungan dapat diajukan melalui pihak sekolah dan perlu mendapatkan persetujuan serta mengikuti prosedur yang berlaku."
  },
  {
    "id": 85,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Bagaimana cara mengetahui pengumuman sekolah?",
    "jawaban": "Pantau informasi melalui website, media sosial resmi, papan pengumuman, atau pemberitahuan dari pihak sekolah."
  },
  {
    "id": 86,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Apakah sekolah memiliki kegiatan alumni?",
    "jawaban": "Informasi kegiatan alumni dapat ditanyakan kepada pihak sekolah atau komunitas alumni jika tersedia."
  },
  {
    "id": 87,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Bagaimana cara memberikan kritik dan saran?",
    "jawaban": "Anda dapat memberikan kritik dan saran secara sopan melalui kontak resmi sekolah sebagai bentuk kontribusi untuk meningkatkan kualitas pelayanan pendidikan."
  },
  {
    "id": 88,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Apakah sekolah menyediakan informasi prestasi siswa?",
    "jawaban": "Informasi prestasi siswa dapat diperoleh melalui halaman berita, prestasi, atau publikasi resmi sekolah."
  },
  {
    "id": 89,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Apakah sekolah menyediakan informasi lowongan kerja?",
    "jawaban": "Informasi lowongan kerja dapat ditanyakan melalui pihak sekolah atau layanan hubungan industri apabila tersedia."
  },
  {
    "id": 90,
    "kategori": "Pertanyaan umum lainnya",
    "pertanyaan": "Bagaimana cara mengetahui informasi terbaru sekolah?",
    "jawaban": "Silakan mengunjungi website dan media sosial resmi SMK Negeri 9 Medan untuk mendapatkan informasi terbaru."
  },
  {
    "id": 91,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Halo",
    "jawaban": "Halo! Selamat datang di layanan chatbot SMK Negeri 9 Medan. Ada yang bisa saya bantu?"
  },
  {
    "id": 92,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Selamat pagi",
    "jawaban": "Selamat pagi! Selamat datang di SMK Negeri 9 Medan. Silakan tanyakan informasi yang ingin Anda ketahui."
  },
  {
    "id": 93,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Terima kasih",
    "jawaban": "Sama-sama! Senang bisa membantu Anda. Jangan ragu untuk bertanya kembali jika membutuhkan informasi lainnya."
  },
  {
    "id": 94,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": " kamu?",
    "jawaban": "Saya adalah asisten virtual SMK Negeri 9 Medan yang siap membantu memberikan informasi seputar sekolah."
  },
  {
    "id": 95,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Apa yang bisa kamu bantu?",
    "jawaban": "Saya dapat membantu memberikan informasi mengenai profil sekolah, jurusan, pendaftaran, fasilitas, kegiatan siswa, PKL, dan informasi lainnya."
  },
  {
    "id": 96,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Saya ingin bertanya",
    "jawaban": "Tentu! Silakan tuliskan pertanyaan Anda. Saya akan berusaha membantu memberikan informasi yang dibutuhkan."
  },
  {
    "id": 97,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Saya tidak mengerti",
    "jawaban": "Tidak masalah! Silakan tuliskan kembali pertanyaan Anda dengan lebih jelas agar saya dapat membantu."
  },
  {
    "id": 98,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Informasi yang saya cari tidak ada",
    "jawaban": "Mohon maaf, informasi tersebut belum tersedia dalam database saya. Silakan hubungi pihak sekolah untuk mendapatkan informasi lebih lanjut."
  },
  {
    "id": 99,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Apakah kamu manusia?",
    "jawaban": "Saya bukan manusia, melainkan asisten virtual yang dirancang untuk membantu menjawab pertanyaan seputar SMK Negeri 9 Medan."
  },
  {
    "id": 100,
    "kategori": "Pertanyaan khusus untuk chatbot",
    "pertanyaan": "Sampai jumpa",
    "jawaban": "Terima kasih telah menggunakan layanan chatbot SMK Negeri 9 Medan. Sampai jumpa dan semoga harimu menyenangkan!"
  },
  {
  "id": 101,
  "kategori": "Daftar Guru",
  "pertanyaan": "Siapa saja nama guru di SMK Negeri 9 Medan?",
  "jawaban": "Berikut daftar 14 guru SMK Negeri 9 Medan beserta mata pelajarannya:\n\n1. Sulastri Silalahi, S.Pd - Bahasa Indonesia\n2. Annisah Nur Panggabean, S.Pd - Bahasa Inggris\n3. Nudriqah Fadhilah Siregar, S.Pd - Matematika\n4. Nukhayuddin Hasibuan, S.Pd - Agama Islam\n5. Ursula Eka Oktoria Purba, S.Ag - Agama Katolik\n6. Herbet Helvi Roberto Bakkara, S.Kom - MP, PKK\n7. Novelman Manurung, S.T - MK\n8. M. Sofa Ananda, S.Sos, M.Pd - PP\n9. Kharisma Dani, S.Pd - Bahasa Indonesia\n10. Defi Halimi S. Hrp, S.Pd - Bahasa Inggris\n11. Fakhrur Rozi Siregar, S.Pd - Matematika\n12. Eva P. Manurung, S.Pak - Agama Protestan\n13. Shinta Hastia Putri, S.Pd - MP\n14. Ardiansyah, S.T - MK, PKK"
},
{
"id": 102,
  "kategori": "Guru",
  "pertanyaan": "Siapa saja nama guru di SMK Negeri 9 Medan?",
  "jawaban": "Berikut daftar 14 guru SMK Negeri 9 Medan beserta mata pelajarannya:\n\n1. Sulastri Silalahi, S.Pd - Bahasa Indonesia\n2. Annisah Nur Panggabean, S.Pd - Bahasa Inggris\n3. Nudriqah Fadhilah Siregar, S.Pd - Matematika\n4. Nukhayuddin Hasibuan, S.Pd - Agama Islam\n5. Ursula Eka Oktoria Purba, S.Ag - Agama Katolik\n6. Herbet Helvi Roberto Bakkara, S.Kom - MP, PKK\n7. Novelman Manurung, S.T - MK\n8. M. Sofa Ananda, S.Sos, M.Pd - PP\n9. Kharisma Dani, S.Pd - Bahasa Indonesia\n10. Defi Halimi S. Hrp, S.Pd - Bahasa Inggris\n11. Fakhrur Rozi Siregar, S.Pd - Matematika\n12. Eva P. Manurung, S.Pak - Agama Protestan\n13. Shinta Hastia Putri, S.Pd - MP\n14. Ardiansyah, S.T - MK, PKK"
},
{
  "id": 103,
  "kategori": "Guru",
  "pertanyaan": "Siapa nama guru di SMK 9?",
  "jawaban": "Berikut daftar 14 guru SMK Negeri 9 Medan beserta mata pelajarannya:\n\n1. Sulastri Silalahi, S.Pd - Bahasa Indonesia\n2. Annisah Nur Panggabean, S.Pd - Bahasa Inggris\n3. Nudriqah Fadhilah Siregar, S.Pd - Matematika\n4. Nukhayuddin Hasibuan, S.Pd - Agama Islam\n5. Ursula Eka Oktoria Purba, S.Ag - Agama Katolik\n6. Herbet Helvi Roberto Bakkara, S.Kom - MP, PKK\n7. Novelman Manurung, S.T - MK\n8. M. Sofa Ananda, S.Sos, M.Pd - PP\n9. Kharisma Dani, S.Pd - Bahasa Indonesia\n10. Defi Halimi S. Hrp, S.Pd - Bahasa Inggris\n11. Fakhrur Rozi Siregar, S.Pd - Matematika\n12. Eva P. Manurung, S.Pak - Agama Protestan\n13. Shinta Hastia Putri, S.Pd - MP\n14. Ardiansyah, S.T - MK, PKK"
},
{
  "id": 104,
  "kategori": "Guru",
  "pertanyaan": "Siapa gurunya?",
  "jawaban": "Berikut daftar 14 guru SMK Negeri 9 Medan beserta mata pelajarannya:\n\n1. Sulastri Silalahi, S.Pd - Bahasa Indonesia\n2. Annisah Nur Panggabean, S.Pd - Bahasa Inggris\n3. Nudriqah Fadhilah Siregar, S.Pd - Matematika\n4. Nukhayuddin Hasibuan, S.Pd - Agama Islam\n5. Ursula Eka Oktoria Purba, S.Ag - Agama Katolik\n6. Herbet Helvi Roberto Bakkara, S.Kom - MP, PKK\n7. Novelman Manurung, S.T - MK\n8. M. Sofa Ananda, S.Sos, M.Pd - PP\n9. Kharisma Dani, S.Pd - Bahasa Indonesia\n10. Defi Halimi S. Hrp, S.Pd - Bahasa Inggris\n11. Fakhrur Rozi Siregar, S.Pd - Matematika\n12. Eva P. Manurung, S.Pak - Agama Protestan\n13. Shinta Hastia Putri, S.Pd - MP\n14. Ardiansyah, S.T - MK, PKK"
},
{
  "id": 105,
  "kategori": "Guru",
  "pertanyaan": "Nama guru",
  "jawaban": "Berikut daftar 14 guru SMK Negeri 9 Medan beserta mata pelajarannya:\n\n1. Sulastri Silalahi, S.Pd - Bahasa Indonesia\n2. Annisah Nur Panggabean, S.Pd - Bahasa Inggris\n3. Nudriqah Fadhilah Siregar, S.Pd - Matematika\n4. Nukhayuddin Hasibuan, S.Pd - Agama Islam\n5. Ursula Eka Oktoria Purba, S.Ag - Agama Katolik\n6. Herbet Helvi Roberto Bakkara, S.Kom - MP, PKK\n7. Novelman Manurung, S.T - MK\n8. M. Sofa Ananda, S.Sos, M.Pd - PP\n9. Kharisma Dani, S.Pd - Bahasa Indonesia\n10. Defi Halimi S. Hrp, S.Pd - Bahasa Inggris\n11. Fakhrur Rozi Siregar, S.Pd - Matematika\n12. Eva P. Manurung, S.Pak - Agama Protestan\n13. Shinta Hastia Putri, S.Pd - MP\n14. Ardiansyah, S.T - MK, PKK"
},
{
  "id": 106,
  "kategori": "Pertanyaan Khusus Bot",
  "pertanyaan": "Oke, Terimakasih",
  "jawaban": "Senang dapat membantu kamu!"
},
{
  "id": 107,
  "kategori": "Pertanyaan Khusus Bot",
  "pertanyaan": "Terimakasih",
  "jawaban": "Sama-sama, Senang dapat membantu kamu!"
},
{
  "id": 107,
  "kategori": "Pertanyaan Khusus Bot",
  "pertanyaan": "makasi",
  "jawaban": "Sama-sama, Senang dapat membantu kamu!"
}
];

// Ambil elemen HTML. Semua event dipasang setelah halaman siap.
// ==========================================
// CHATBOT SMK NEGERI 9 MEDAN
// Versi perbaikan: pencocokan + konteks
// ==========================================

function initChatbot() {
  const chatWindow = document.getElementById("chatWindow");
  const chatLauncher = document.getElementById("chatLauncher");
  const chatMessages = document.getElementById("chatMessages");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const closeChat = document.getElementById("closeChat");
  const openChatFromAside = document.getElementById("openChatFromAside");

  if (!chatWindow || !chatMessages || !chatForm || !chatInput) {
    console.error("Elemen chatbot tidak ditemukan.");
    return;
  }

  let lastTopicId = null;

  function toggleChat(force) {
    const shouldOpen = typeof force === "boolean"
      ? force
      : !chatWindow.classList.contains("open");

    chatWindow.classList.toggle("open", shouldOpen);
    chatWindow.setAttribute("aria-hidden", String(!shouldOpen));

    if (shouldOpen) {
      setTimeout(() => chatInput.focus(), 100);
    }
  }

  if (chatLauncher) {
    chatLauncher.addEventListener("click", () => toggleChat());
  }

  if (closeChat) {
    closeChat.addEventListener("click", () => toggleChat(false));
  }

  if (openChatFromAside) {
    openChatFromAside.addEventListener("click", () => toggleChat(true));
  }

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const shown = navLinks.classList.toggle("show");
      menuToggle.setAttribute("aria-expanded", String(shown));
    });
  }

  function addMessage(message, sender) {
    const bubble = document.createElement("div");
    bubble.className = `message ${sender}-message`;
    bubble.textContent = message;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\bsmk\s+negeri\s*9\b/g, "smk9")
      .replace(/\bsmkn\s*9\b/g, "smk9")
      .replace(/\bsmk\s*9\b/g, "smk9")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function answerById(id) {
    const item = knowledge.find(row => Number(row.id) === Number(id));
    return item ? item.jawaban : null;
  }

  // Kata yang tidak terlalu berpengaruh pada maksud pertanyaan.
  const ignoredWords = new Set([
    "apa", "apakah", "bagaimana", "gimana", "dimana",
    "di", "mana", "ke", "yang", "dan", "untuk",
    "dengan", "dari", "itu", "ini", "saya", "aku",
    "sekolah", "bisa", "ada", "cara", "nya",
    "tolong", "dong", "kak", "kah", "saja",
    "aja", "mohon", "ingin", "mau", "info",
    "informasi", "ya", "ga", "gak", "nggak",
    "enggak", "tidak", "smk9", "negeri", "medan"
  ]);

  function getTokens(text) {
    return normalize(text)
      .split(" ")
      .filter(word =>
        word.length > 1 && !ignoredWords.has(word)
      );
  }

  // Aturan berdasarkan maksud pertanyaan.
  const topicRules = [
    [2, /\b(alamat|lokasi|letak|dimana|mana)\b/],
    [64, /\b(daftar guru|siapa saja guru|nama guru|guru guru)\b/],
    [11, /\b(jurusan|program keahlian|kompetensi keahlian)\b/],
    [3, /\bvisi\b/],
    [4, /\bmisi\b/],
    [7, /\b(kepala sekolah|kepsek)\b/],
    [8, /\bakreditasi\b/],
    [9, /\b(kontak sekolah|hubungi sekolah|nomor sekolah)\b/],
    [10, /\b(jam operasional|jam pelayanan|jam buka sekolah)\b/],
    [1, /\b(profil sekolah|tentang smk9|apa itu smk9)\b/],
    [5, /\b(sekolah negeri|status negeri)\b/],
    [6, /\b(tahun berdiri|didirikan|sejarah sekolah)\b/],
    [21, /\b(cara daftar|mendaftar|pendaftaran|spmb)\b/],
    [22, /\b(kapan pendaftaran|jadwal daftar)\b/],
    [23, /\b(syarat masuk|persyaratan daftar)\b/],
    [24, /\b(daftar online|pendaftaran online)\b/],
    [31, /\b(gratis|biaya sekolah|uang sekolah)\b/],
    [34, /\bbeasiswa\b/],
    [35, /\bpip\b/],
    [36, /\bkip\b/],
    [39, /\b(fasilitas sekolah|sarana prasarana)\b/],
    [40, /\bperpustakaan\b/],
    [41, /\b(laboratorium komputer|lab komputer)\b/],
    [44, /\bkantin\b/],
    [45, /\b(wifi|internet sekolah)\b/],
    [47, /\b(sistem pembelajaran|cara belajar)\b/],
    [48, /\bkurikulum\b/],
    [49, /\b(ekskul|ekstrakurikuler)\b/],
    [50, /\bosis\b/],
    [55, /\b(apa itu pkl|pengertian pkl)\b/],
    [56, /\b(jadwal pkl|kapan pkl)\b/],
    [61, /\b(bkk|bursa kerja khusus)\b/],
    [65, /\bwali kelas\b/],
    [66, /\btata usaha\b/],
    [67, /\bsurat keterangan aktif\b/],
    [68, /\bsurat pindah\b/],
    [69, /\b(legalisasi ijazah|legalisir ijazah)\b/],
    [70, /\b(ambil ijazah|pengambilan ijazah)\b/],
    [71, /\b(siswa sakit|lapor.*sakit)\b/],
    [72, /\b(keluhan|komplain|pengaduan)\b/],
    [73, /\b(wajib.*seragam|memakai seragam)\b/],
    [74, /\b(tepat waktu|datang.*waktu)\b/],
    [75, /\b(aturan rambut|rambut siswa)\b/],
    [76, /\b(membawa hp|bawa hp|handphone)\b/],
    [77, /\b(terlambat|telat)\b/],
    [78, /\b(izin tidak masuk|tidak masuk sekolah)\b/],
    [79, /\b(kehilangan barang|barang hilang)\b/],
    [80, /\b(kebersihan sekolah|menjaga kebersihan)\b/],
    [81, /\b(siswa pindahan|pindah sekolah)\b/],
    [82, /\b(orang tua.*berkunjung|kunjungan orang tua)\b/],
    [83, /\b(media sosial|instagram sekolah)\b/],
    [85, /\b(pengumuman sekolah|informasi terbaru)\b/],
    [87, /\b(kritik dan saran|memberikan saran)\b/],
    [88, /\b(prestasi siswa)\b/],
    [89, /\blowongan kerja\b/]
  ];

  function findAnswer(question) {
    const q = normalize(question);

    if (!q) {
      return "Silakan tuliskan pertanyaan terlebih dahulu.";
    }

    // Sapaan.
    if (/^(halo|hai|hello|hi)$/.test(q)) {
      lastTopicId = 91;
      return answerById(91);
    }

    if (/^selamat (pagi|siang|sore|malam)$/.test(q)) {
      lastTopicId = 92;
      return answerById(92);
    }

    if (/^(terima kasih|makasih|thanks|thank you)$/.test(q)) {
      lastTopicId = 93;
      return answerById(93);
    }

    if (/^(sampai jumpa|dadah|bye)$/.test(q)) {
      lastTopicId = 100;
      return answerById(100);
    }

    if (/siapa kamu|kamu manusia/.test(q)) {
      lastTopicId = 99;
      return answerById(99);
    }

    // Mengenali pertanyaan lanjutan.
    if (/^(di mana|dimana|di mana itu|dimana itu|lokasinya|alamatnya)$/.test(q)) {
      if (lastTopicId === 2 || lastTopicId === 1) {
        lastTopicId = 2;
        return answerById(2);
      }

      return "Maksudnya kamu ingin mengetahui lokasi apa? Sebutkan nama tempatnya, ya.";
    }

    // Pertanyaan lokasi sekolah.
    if (
      /\b(sm k9|smk9)\b/.test(q) &&
      /\b(di mana|dimana|alamat|lokasi|letak)\b/.test(q)
    ) {
      lastTopicId = 2;
      return answerById(2);
    }

    // Menangani nama sekolah tanpa kata lokasi.
    if (
      /\b(sm k9|smk9)\b/.test(q) &&
      /\b(di mana|dimana|alamat|lokasi|letak|mana)\b/.test(q)
    ) {
      lastTopicId = 2;
      return answerById(2);
    }

    // Pertanyaan database yang sama persis.
    const exactMatch = knowledge.find(
      item => normalize(item.pertanyaan) === q
    );

    if (exactMatch) {
      lastTopicId = Number(exactMatch.id);
      return exactMatch.jawaban;
    }

    // Cocokkan berdasarkan aturan topik.
    for (const [id, pattern] of topicRules) {
      if (pattern.test(q)) {
        lastTopicId = id;
        return answerById(id);
      }
    }

    // Pencocokan berdasarkan kata penting.
    const queryTokens = getTokens(q);

    if (queryTokens.length === 0) {
      return "Tentu! Silakan tanyakan informasi seputar SMK Negeri 9 Medan.";
    }

    const ranked = knowledge.map(item => {
      const candidateTokens = getTokens(item.pertanyaan);
      const overlap = queryTokens.filter(word =>
        candidateTokens.includes(word)
      ).length;

      const score = overlap / Math.max(queryTokens.length, candidateTokens.length);

      return { item, score };
    }).sort((a, b) => b.score - a.score);

    const best = ranked[0];

    if (!best || best.score < 0.30) {
      return "Maaf, aku belum menemukan jawaban yang cocok. Coba gunakan kata kunci yang lebih jelas, ya.";
    }

    lastTopicId = Number(best.item.id);
    return best.item.jawaban;
  }

  function sendQuestion(question) {
    const text = String(question || "").trim();

    if (!text) return;

    addMessage(text, "user");
    chatInput.value = "";

    const answer = findAnswer(text);

    setTimeout(() => {
      addMessage(answer, "bot");
    }, 300);
  }

  chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendQuestion(chatInput.value);
  });

  console.log("Chatbot SMK Negeri 9 Medan berhasil dijalankan.");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChatbot);
} else {
  initChatbot();
}

// AKTIFKAN TOMBOL PERTANYAAN CEPAT
document.querySelectorAll(".quick-questions button[data-question]").forEach(button => {
  button.addEventListener("click", function () {
    const input = document.getElementById("chatInput");
    const form = document.getElementById("chatForm");

    if (!input || !form) return;

    input.value = this.dataset.question;
    form.requestSubmit();
  });
});
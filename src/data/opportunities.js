// ================================================================
// MOCK / PROTOTYPE DATA — Not official Mahreen program information
// ================================================================

export const CATEGORIES = [
  {
    id: "creative",
    label: "Creative",
    icon: "✦",
    description:
      "Ekspresikan dirimu lewat desain, tulisan, film, fotografi, seni, dan konten kreatif.",
    accent: "#C9A84C",
  },
  {
    id: "digital-technology",
    label: "Digital Technology",
    icon: "◈",
    description:
      "Bangun solusi masa depan lewat kode, data, dan inovasi teknologi digital.",
    accent: "#38BDF8",
  },
  {
    id: "talent-development",
    label: "Talent Development",
    icon: "◉",
    description:
      "Kembangkan potensimu lewat mentorship, pelatihan, dan program pengembangan diri.",
    accent: "#A78BFA",
  },
  {
    id: "business",
    label: "Business",
    icon: "◆",
    description:
      "Ubah ide menjadi peluang nyata lewat kewirausahaan dan strategi bisnis.",
    accent: "#34D399",
  },
  {
    id: "community",
    label: "Community",
    icon: "⬡",
    description:
      "Bangun koneksi, berkolaborasi, dan tumbuh bersama komunitas yang saling mendukung.",
    accent: "#FB923C",
  },
  {
    id: "social-impact",
    label: "Social Impact",
    icon: "◎",
    description:
      "Ciptakan perubahan nyata yang bermanfaat bagi masyarakat dan lingkungan sekitar.",
    accent: "#F472B6",
  },
];

// ================================================================
// PROTOTYPE OPPORTUNITIES — Demo content only
// ================================================================
export const OPPORTUNITIES = [
  {
    id: 1,
    category: "creative",
    categoryLabel: "Creative",
    title: "Visual Storytelling Lab",
    description:
      "Ruang eksplorasi narasi visual dari fotografi editorial hingga desain kampanye kreatif.",
    tags: ["Desain", "Fotografi", "Storytelling"],
    learn:
      "Prinsip desain editorial, komposisi visual, dan narasi berbasis gambar.",
    contribute:
      "Buat portofolio visual, kontribusi pada kampanye kreatif ekosistem.",
  },
  {
    id: 2,
    category: "creative",
    categoryLabel: "Creative",
    title: "Content Creator Circle",
    description:
      "Kembangkan suaramu sebagai kreator konten yang punya dampak nyata.",
    tags: ["Video", "Copywriting", "Konten Digital"],
    learn: "Strategi konten, script writing, produksi video sederhana.",
    contribute: "Produksi konten untuk platform digital ekosistem Mahreen.",
  },
  {
    id: 3,
    category: "digital-technology",
    categoryLabel: "Digital Technology",
    title: "Dev & Build Studio",
    description:
      "Bangun produk digital nyata web app, mobile, dan solusi teknologi.",
    tags: ["Web Dev", "Mobile", "UI/UX"],
    learn: "Pengembangan produk digital, prototyping, deployment dasar.",
    contribute: "Kontribusi nyata pada proyek teknologi di dalam ekosistem.",
  },
  {
    id: 4,
    category: "digital-technology",
    categoryLabel: "Digital Technology",
    title: "Data & Insight Track",
    description:
      "Jadikan data sebagai alat untuk mengambil keputusan yang lebih cerdas.",
    tags: ["Data Analysis", "Visualisasi", "Research"],
    learn: "Dasar analisis data, storytelling dengan data, tools visualisasi.",
    contribute:
      "Hasilkan insight dari data yang mendukung pengembangan ekosistem.",
  },
  {
    id: 5,
    category: "talent-development",
    categoryLabel: "Talent Development",
    title: "Growth Mentorship Program",
    description:
      "Dipandu mentor berpengalaman untuk mempercepat pertumbuhan pribadi dan profesional.",
    tags: ["Mentoring", "Self-development", "Karir"],
    learn: "Goal setting, personal branding, navigasi karir awal.",
    contribute:
      "Ikut sesi mentoring dan bagikan perjalananmu untuk menginspirasi sesama.",
  },
  {
    id: 6,
    category: "business",
    categoryLabel: "Business",
    title: "Startup Launchpad",
    description:
      "Dari ide ke validasi eksplorasi cara membangun dan menguji model bisnis sederhana.",
    tags: ["Entrepreneurship", "Validasi", "Pitch"],
    learn: "Lean startup, business model canvas, pitching dasar.",
    contribute:
      "Kembangkan ide bisnis dan presentasikan ke komunitas ekosistem.",
  },
  {
    id: 7,
    category: "community",
    categoryLabel: "Community",
    title: "Community Builder Network",
    description:
      "Jadi jembatan antar orang untuk bangun komunitas yang inklusif dan berkelanjutan.",
    tags: ["Networking", "Event", "Kolaborasi"],
    learn: "Community management, organizing events, komunikasi inklusif.",
    contribute:
      "Inisiasi dan jalankan program komunitas kecil di lingkunganmu.",
  },
  {
    id: 8,
    category: "social-impact",
    categoryLabel: "Social Impact",
    title: "Impact Initiative Lab",
    description:
      "Rancang inisiatif sederhana yang memberi manfaat nyata bagi masyarakat.",
    tags: ["Social Project", "Problem Solving", "Dampak"],
    learn: "Design thinking untuk masalah sosial, pengukuran dampak sederhana.",
    contribute: "Buat dan jalankan proyek sosial mikro yang berdampak nyata.",
  },
];

// Quiz data
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Apa yang paling ingin kamu lakukan?",
    options: [
      { label: "Membuat karya visual atau konten kreatif", value: "creative" },
      {
        label: "Membangun produk atau solusi teknologi",
        value: "digital-technology",
      },
      {
        label: "Belajar dan mengembangkan diri secara personal",
        value: "talent-development",
      },
      { label: "Membangun sesuatu yang bernilai bisnis", value: "business" },
      {
        label: "Terhubung dan berkolaborasi dengan banyak orang",
        value: "community",
      },
      {
        label: "Memberi manfaat nyata bagi masyarakat",
        value: "social-impact",
      },
    ],
  },
  {
    id: 2,
    question: "Cara kerjamu yang paling nyaman adalah…",
    options: [
      {
        label: "Bereksperimen dan mencoba hal baru secara kreatif",
        value: "creative",
      },
      {
        label: "Memecahkan masalah dengan logika dan teknologi",
        value: "digital-technology",
      },
      {
        label: "Refleksi diri dan belajar dari mentor yang berpengalaman",
        value: "talent-development",
      },
      {
        label: "Menganalisis peluang dan merancang strategi",
        value: "business",
      },
      {
        label: "Bekerja bersama tim dan membangun hubungan",
        value: "community",
      },
      {
        label: "Langsung turun tangan membantu orang lain",
        value: "social-impact",
      },
    ],
  },
  {
    id: 3,
    question: "Dampak seperti apa yang ingin kamu hasilkan?",
    options: [
      {
        label: "Karya yang menginspirasi dan memperindah dunia",
        value: "creative",
      },
      {
        label: "Teknologi yang memudahkan kehidupan sehari-hari",
        value: "digital-technology",
      },
      {
        label: "Generasi yang lebih siap dan percaya diri",
        value: "talent-development",
      },
      {
        label: "Bisnis yang berkelanjutan dan membuka peluang kerja",
        value: "business",
      },
      {
        label: "Komunitas yang saling dukung dan inklusif",
        value: "community",
      },
      {
        label: "Perubahan sosial yang terasa nyata di masyarakat",
        value: "social-impact",
      },
    ],
  },
  {
    id: 4,
    question: "Jika punya satu hari bebas untuk berkarya, kamu akan…",
    options: [
      {
        label: "Membuat foto, video, desain, atau tulisan baru",
        value: "creative",
      },
      {
        label: "Coding, belajar tools baru, atau eksplorasi AI",
        value: "digital-technology",
      },
      {
        label: "Ikut workshop, baca buku, atau cari mentor",
        value: "talent-development",
      },
      {
        label: "Riset ide bisnis atau bikin business plan sederhana",
        value: "business",
      },
      {
        label: "Kumpul bareng komunitas atau organize event kecil",
        value: "community",
      },
      {
        label: "Ikut aksi sosial atau riset isu masyarakat",
        value: "social-impact",
      },
    ],
  },
];

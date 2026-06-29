// ============================================================
//  CV DATA — Hafizul Hanif
//  Source: CV_Hafizul_Hanif_v4.docx
// ============================================================

import type { Lang } from "./translations";

export interface Profile {
  name: string;
  title: { en: string; id: string };
  tagline: { en: string; id: string };
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  portfolio: string;
  about: { en: string; id: string };
  gpa: string;
}

export const profile: Profile = {
  name: "Hafizul Hanif",
  title: {
    en: "Laravel Developer & Business Strategist",
    id: "Laravel Developer & Strateg Bisnis",
  },
  tagline: {
    en: "Crafting Digital Solutions, Winning Global Competitions",
    id: "Menciptakan Solusi Digital, Memenangkan Kompetisi Global",
  },
  location: "Padang, Sumatera Barat",
  phone: "+62 821-7173-0304",
  email: "Hafizulhanifr@gmail.com",
  linkedin: "https://www.linkedin.com/in/hafizul-hanif-0a51b1289/",
  github: "https://github.com/HafizzN",
  portfolio: "https://github.com/HafizzN",
  about: {
    en: "I am an International Digital Business student passionate about transforming business challenges into digital solutions. My experience spans software development, business strategy, and competitive business simulations, where I have earned multiple national and international championships. I enjoy bridging technology and business by developing scalable applications, analyzing data-driven decisions, and creating products that improve operational efficiency.\n\nBeyond coding, I am passionate about product strategy, entrepreneurship, and building impactful digital solutions that create long-term value for businesses.",
    id: "Saya adalah mahasiswa Bisnis Digital Internasional yang berdedikasi tinggi dalam mengubah tantangan bisnis menjadi solusi digital praktis. Pengalaman saya mencakup pengembangan perangkat lunak, strategi bisnis, dan kompetisi simulasi bisnis, di mana saya berhasil memenangkan berbagai kejuaraan tingkat nasional dan internasional. Saya senang menjembatani kesenjangan antara teknologi dan bisnis dengan mengembangkan aplikasi yang skalabel, menganalisis keputusan berbasis data, dan menciptakan produk digital guna meningkatkan efisiensi operasional.\n\nDi luar pemrograman, saya memiliki ketertarikan mendalam pada strategi produk, kewirausahaan, serta pembangunan solusi digital berdampak tinggi yang menciptakan nilai jangka panjang bagi dunia bisnis.",
  },
  gpa: "3.68 / 4.00",
};

// Helper to access localized profile fields
export function getProfile(lang: Lang) {
  return {
    ...profile,
    title: profile.title[lang],
    tagline: profile.tagline[lang],
    about: profile.about[lang],
  };
}

// ------------------------------------------------------------
//  EDUCATION
// ------------------------------------------------------------
export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
}

export const education: Education[] = [
  {
    institution: "Universitas Negeri Padang",
    degree: "S-1 Bisnis Digital, Fakultas Ekonomi dan Bisnis",
    location: "Padang, Sumatera Barat",
    period: "Agustus 2023 – Sekarang",
    gpa: "3.68 / 4.00",
  },
];

// ------------------------------------------------------------
//  AWARDS  (11 National & International Championships)
// ------------------------------------------------------------
export interface Award {
  title: string;
  organizer: string;
  rank: string;
  year: string;
  level: "Nasional" | "Internasional" | "Universitas";
  category: string;
  bullets: string[];
}

export const awards: Award[] = [
  {
    title: "MonsoonSIM Competition",
    organizer: "Universitas Negeri Padang",
    rank: "Juara 3",
    year: "2024",
    level: "Universitas",
    category: "Business Simulation",
    bullets: [
      "Berkompetisi dalam simulasi bisnis terpadu mencakup manajemen keuangan, produksi, dan pemasaran.",
      "Menganalisis data kinerja perusahaan virtual untuk mengoptimalkan keputusan bisnis.",
      "Meraih posisi ketiga di antara seluruh peserta kompetisi tingkat universitas.",
    ],
  },
  {
    title: "2nd MonsoonSIM Competition – Retail Category",
    organizer: "Universitas Negeri Padang",
    rank: "Juara 1 Nasional",
    year: "2024",
    level: "Nasional",
    category: "Retail Strategy",
    bullets: [
      "Merancang dan mengeksekusi strategi retail untuk memaksimalkan penjualan perusahaan virtual.",
      "Mengelola manajemen inventori dan penetapan harga secara optimal sepanjang simulasi.",
      "Meraih posisi pertama pada kategori Retail dalam kompetisi tingkat nasional.",
    ],
  },
  {
    title: "Business.Sim Nation-Wide Competition – Accounting Category",
    organizer: "Business.Sim",
    rank: "Juara 2 Nasional",
    year: "2024",
    level: "Nasional",
    category: "Accounting",
    bullets: [
      "Menyusun laporan keuangan dan melakukan analisis akuntansi dalam kompetisi simulasi bisnis skala nasional.",
      "Menginterpretasikan data finansial perusahaan virtual untuk mendukung pengambilan keputusan strategis.",
      "Meraih posisi kedua pada kategori Akuntansi di antara peserta dari seluruh Indonesia.",
    ],
  },
  {
    title: "TREASURE 2025 – International Production Category",
    organizer: "Politeknik Negeri Malang",
    rank: "Juara 3 Internasional",
    year: "Juni 2025",
    level: "Internasional",
    category: "Production Management",
    bullets: [
      "Mengoptimalkan manajemen produksi dan efisiensi operasional dalam simulasi bisnis kompetitif.",
      "Mengelola kapasitas produksi dan biaya operasional untuk menghasilkan margin terbaik.",
      "Meraih posisi ketiga pada kategori Production dalam turnamen bisnis internasional.",
    ],
  },
  {
    title: "TREASURE 2025 – International Human Capital Category",
    organizer: "Politeknik Negeri Malang",
    rank: "Juara 3 Internasional",
    year: "Juni 2025",
    level: "Internasional",
    category: "Human Capital",
    bullets: [
      "Merancang strategi pengelolaan sumber daya manusia dalam simulasi bisnis kompetitif.",
      "Mengoptimalkan alokasi tenaga kerja dan kebijakan HR untuk mendukung kinerja perusahaan virtual.",
      "Meraih posisi ketiga pada kategori Human Capital dalam turnamen bisnis internasional.",
    ],
  },
  {
    title: "TREASURE 2025 – International",
    organizer: "Politeknik Negeri Malang",
    rank: "Juara 1 Internasional",
    year: "Juni 2025",
    level: "Internasional",
    category: "Business Management",
    bullets: [
      "Menyusun strategi bisnis komprehensif berbasis analisis keuangan dan operasional secara terintegrasi.",
      "Berkolaborasi dalam pengambilan keputusan lintas fungsi untuk mencapai performa bisnis terbaik.",
      "Meraih posisi pertama di antara seluruh peserta internasional dalam kompetisi manajemen bisnis.",
    ],
  },
  {
    title: "1st ENTRIX International Competition – High Revenue Category",
    organizer: "ENTRIX",
    rank: "Juara 1 Internasional",
    year: "2025",
    level: "Internasional",
    category: "High Revenue",
    bullets: [
      "Meraih pendapatan tertinggi di antara seluruh peserta dalam kompetisi simulasi bisnis internasional.",
      "Mengoptimalkan strategi penjualan dan penetapan harga untuk memaksimalkan revenue perusahaan virtual.",
      "Meraih posisi pertama pada kategori High Revenue dalam kompetisi internasional perdana ENTRIX.",
    ],
  },
  {
    title: "MonsoonSIM High Revenue Category",
    organizer: "MonsoonSIM",
    rank: "Juara 1",
    year: "2025",
    level: "Nasional",
    category: "High Revenue",
    bullets: [
      "Meraih pendapatan tertinggi di antara seluruh peserta dalam kompetisi berbasis MonsoonSIM.",
      "Menerapkan strategi penetapan harga dan ekspansi pasar yang agresif namun terukur.",
      "Mencapai target revenue tertinggi melalui pengelolaan siklus penjualan secara efisien.",
    ],
  },
  {
    title: "3rd MonsoonSIM Competition",
    organizer: "Universitas Negeri Padang",
    rank: "Juara 1 Nasional",
    year: "November 2025",
    level: "Nasional",
    category: "Business Simulation",
    bullets: [
      "Mengelola perusahaan virtual secara menyeluruh mencakup produksi, keuangan, dan strategi pasar.",
      "Mengambil keputusan bisnis berbasis data untuk mengoptimalkan kinerja di setiap putaran simulasi.",
      "Meraih performa bisnis terbaik dan posisi pertama pada kompetisi tingkat nasional.",
    ],
  },
  {
    title: "UBAYA MonsoonSIM International Championship 2026 – Retail Open Category",
    organizer: "Universitas Surabaya",
    rank: "Juara 1 Internasional",
    year: "Mei 2026",
    level: "Internasional",
    category: "Retail Open",
    bullets: [
      "Mengoptimalkan strategi penjualan, manajemen inventori, dan profitabilitas perusahaan virtual.",
      "Mengelola siklus retail secara end-to-end mulai dari pengadaan hingga distribusi produk.",
      "Mencapai performa terbaik pada kategori Retail Open di antara peserta internasional.",
    ],
  },
  {
    title: "UBAYA MonsoonSIM International Championship 2026 – IPO Open Category",
    organizer: "Universitas Surabaya",
    rank: "Juara 1 Internasional",
    year: "Mei 2026",
    level: "Internasional",
    category: "IPO Open",
    bullets: [
      "Berkompetisi dengan peserta tingkat nasional dan internasional dalam simulasi bisnis berbasis MonsoonSIM.",
      "Mengelola strategi keuangan, pemasaran, dan operasional perusahaan virtual secara terintegrasi.",
      "Meraih peringkat pertama pada kategori IPO Open di antara peserta internasional.",
    ],
  },
];

// ------------------------------------------------------------
//  TECHNICAL PROJECTS
// ------------------------------------------------------------
export interface Project {
  name: string;
  tech: string[];
  bullets: string[];
  liveDemo?: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    name: "VALRYSE – Smart HR Portal & Attendance Management System",
    tech: ["Laravel", "Flutter", "REST API", "MySQL", "Laravel Sanctum"],
    bullets: [
      "Merancang dan mengembangkan HRIS untuk manajemen karyawan secara menyeluruh.",
      "Mengimplementasikan modul attendance, leave, overtime, payroll, dan approval workflows.",
      "Mengembangkan REST API yang dikonsumsi oleh aplikasi mobile Flutter dengan role-based access control.",
    ],
    highlight: true,
  },
  {
    name: "Enterprise Resource Planning (ERP) System",
    tech: ["Laravel", "PHP", "MySQL"],
    bullets: [
      "Membangun aplikasi ERP untuk mendukung operasional bisnis terintegrasi.",
      "Mengembangkan modul autentikasi, inventori, dan manajemen proses bisnis.",
      "Men-deploy aplikasi ke Laravel Cloud.",
    ],
    liveDemo: "https://enterpriseresourceplanningsystem-main-ezht0c.laravel.cloud",
    highlight: true,
  },
  {
    name: "ContentAnalyzer AI",
    tech: ["Laravel", "Gemini AI", "REST API", "MySQL"],
    bullets: [
      "Mengembangkan platform analisis konten berbasis AI untuk kreator media sosial.",
      "Mengintegrasikan Generative AI untuk menghasilkan strategi konten dan kalender editorial.",
      "Membangun dashboard untuk analisis akun, audience insights, dan rekomendasi konten viral.",
    ],
    highlight: true,
  },
  {
    name: "VisitSolok – Tourism Information Platform",
    tech: ["Laravel", "Blade", "MySQL"],
    bullets: [
      "Mengembangkan website pariwisata yang menyediakan informasi destinasi dan rekomendasi perjalanan.",
      "Membangun antarmuka responsif menggunakan Blade Template dan mengoptimalkan performa website.",
      "Mengimplementasikan fitur manajemen konten untuk pengelolaan informasi destinasi.",
    ],
    liveDemo: "https://visitsolok-main-lr3hgb.laravel.cloud",
  },
  {
    name: "HijabPin House – E-Commerce Website",
    tech: ["Laravel", "Blade", "MySQL"],
    bullets: [
      "Mengembangkan platform e-commerce dengan fitur manajemen katalog produk.",
      "Mengimplementasikan alur belanja dan antarmuka pengguna yang responsif.",
      "Mengintegrasikan manajemen produk dengan basis data relasional.",
    ],
    liveDemo: "https://hijab-pin-main-b3undw.laravel.cloud",
  },
  {
    name: "Social Media Content Management Dashboard",
    tech: ["Laravel", "PHP", "MySQL"],
    bullets: [
      "Mengembangkan dashboard untuk perencanaan, penjadwalan, dan pengelolaan konten media sosial.",
      "Membangun halaman analitik untuk melacak performa konten.",
      "Mengimplementasikan manajemen konten berbasis kalender dan fitur pelaporan.",
    ],
  },
  {
    name: "Business Analytics Dashboard",
    tech: ["Laravel", "JavaScript", "Chart.js", "MySQL"],
    bullets: [
      "Mengembangkan dashboard interaktif untuk pemantauan performa bisnis.",
      "Memvisualisasikan KPI menggunakan chart dan ringkasan data.",
      "Mengimplementasikan komponen filtering, pelaporan, dan dashboard real-time.",
    ],
  },
  {
    name: "REST API Development",
    tech: ["Laravel API", "Sanctum", "JSON"],
    bullets: [
      "Merancang RESTful API yang aman untuk autentikasi dan operasi CRUD.",
      "Mengimplementasikan autentikasi berbasis token menggunakan Laravel Sanctum.",
      "Mengoptimalkan performa API dan menstandarisasi respons JSON untuk integrasi frontend.",
    ],
  },
];

// ------------------------------------------------------------
//  INTERNSHIP
// ------------------------------------------------------------
export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  bullets: string[];
}

export const internships: Experience[] = [
  {
    role: "Peserta Magang (2 Bulan)",
    organization: "Dinas Koperasi dan UMKM Provinsi Sumatera Barat – PLUT UMKM",
    location: "Padang, Sumatera Barat",
    period: "Juli – Agustus 2024",
    bullets: [
      "Mendampingi pelaku UMKM dalam pengembangan usaha dan strategi pemasaran.",
      "Membantu analisis strategi penjualan dan branding produk UMKM.",
      "Terlibat dalam kegiatan pembinaan, konsultasi bisnis, dan pembuatan konten digital untuk UMKM.",
    ],
  },
];

// ------------------------------------------------------------
//  ORGANIZATION
// ------------------------------------------------------------
export const organizations: Experience[] = [
  {
    role: "Ketua Komisi A",
    organization: "BPM FEB – Universitas Negeri Padang",
    location: "Padang, Sumatera Barat",
    period: "Juni 2025 – Juni 2026",
    bullets: [
      "Memimpin komisi dan mengkoordinasikan kegiatan legislatif fakultas.",
      "Bertanggung jawab atas pengelolaan media sosial dan konten @BPMFEBKMUNP.",
      "Mendokumentasikan seluruh kegiatan dan program kerja fakultas.",
    ],
  },
  {
    role: "Anggota Muda",
    organization: "BEM KM – Universitas Negeri Padang",
    location: "Padang, Sumatera Barat",
    period: "September – Desember 2024",
    bullets: [
      "Mendukung koordinasi antar divisi dalam program kerja kemahasiswaan.",
      "Mengembangkan keterampilan kepemimpinan, manajemen waktu, dan kerjasama tim.",
    ],
  },
];

// ------------------------------------------------------------
//  COMMITTEE
// ------------------------------------------------------------
export interface Committee {
  event: string;
  role: string;
  year: string;
  bullets: string[];
}

export const committees: Committee[] = [
  {
    event: "1st ENTRIX UNP Competition 2025",
    role: "Divisi Media dan Design",
    year: "2025",
    bullets: [
      "Mendesain seluruh pamflet, poster, dan materi pemberitahuan resmi kompetisi.",
      "Mengelola konten media sosial kompetisi mulai dari perencanaan hingga publikasi.",
      "Menjaga konsistensi identitas visual kompetisi pada seluruh materi publikasi.",
    ],
  },
  {
    event: "Pelantikan BPM FEB KM UNP 2025",
    role: "Divisi Media dan Dokumentasi",
    year: "2025",
    bullets: [
      "Mendesain pamflet promosi dan materi visual untuk publikasi kegiatan.",
      "Membuat konten live report serta mendokumentasikan jalannya acara secara real-time.",
      "Menjaga keseluruhan pelaksanaan terdokumentasi dengan baik dan profesional.",
    ],
  },
  {
    event: "Diklat dan Upgrading BPM FEB KM UNP 2025",
    role: "Divisi Dokumentasi",
    year: "2025",
    bullets: [
      "Mengambil dan mengedit foto serta video seluruh rangkaian kegiatan secara profesional.",
      "Menyusun berita acara kegiatan sebagai laporan resmi dokumentasi pelaksanaan acara.",
      "Berkoordinasi dengan divisi lain untuk memastikan seluruh momen penting terdokumentasi.",
    ],
  },
  {
    event: "PKKMB Fakultas Ekonomi dan Bisnis UNP 2025",
    role: "Divisi Perlengkapan",
    year: "2025",
    bullets: [
      "Menyiapkan dan memastikan kelelengkapan sarana serta prasarana selama kegiatan PKKMB.",
      "Berkoordinasi dengan divisi lain untuk distribusi perlengkapan secara tepat waktu.",
      "Bertanggung jawab atas pemeliharaan dan pengembalian perlengkapan pasca kegiatan.",
    ],
  },
  {
    event: "Arus Serasi Lensa 4.5",
    role: "Kameramen",
    year: "2025",
    bullets: [
      "Mendokumentasikan setiap kegiatan dan merekam video untuk project Lensa 4.5.",
      "Berkoordinasi dengan seluruh divisi untuk pengambilan foto dan video acara.",
      "Berperan aktif dalam penentuan tema dan tempat pengambilan konten visual.",
    ],
  },
];

// ------------------------------------------------------------
//  CERTIFICATIONS
// ------------------------------------------------------------
export interface Certification {
  title: string;
  issuer: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    title: "Certified MonsoonSIM Facilitator",
    issuer: "MonsoonSIM – Platform Simulasi Bisnis Internasional",
    description:
      "Bersertifikat resmi sebagai fasilitator simulasi bisnis MonsoonSIM. Berkompetensi melatih dan membimbing peserta dalam platform simulasi bisnis internasional.",
  },
  {
    title: "SAP01 ERP Fundamental Training",
    issuer: "SAP",
    description:
      "SAP Fundamental ERP Concepts, Business Process Integration & Enterprise Systems.",
  },
];

// ------------------------------------------------------------
//  SKILLS
// ------------------------------------------------------------
export interface SkillItem {
  name: { en: string; id: string } | string;
  badge?: { en: string; id: string } | string;
  description?: { en: string; id: string };
}

export interface SkillGroup {
  category: { en: string; id: string };
  icon: string;
  skills: SkillItem[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: {
      en: "Software Engineering",
      id: "Rekayasa Perangkat Lunak",
    },
    icon: "code",
    skills: [
      { name: "Laravel", badge: { en: "Advanced", id: "Mahir" } },
      { name: "PHP", badge: { en: "Advanced", id: "Mahir" } },
      { name: "MySQL", badge: { en: "Advanced", id: "Mahir" } },
      { name: "JavaScript", badge: { en: "Intermediate", id: "Menengah" } },
      { name: "TypeScript", badge: { en: "Intermediate", id: "Menengah" } },
      { name: "HTML & CSS", badge: { en: "Advanced", id: "Mahir" } },
      { name: "Flutter", badge: { en: "Intermediate", id: "Menengah" } },
      { name: "Git", badge: { en: "Advanced", id: "Mahir" } },
      { name: "GitHub", badge: { en: "Advanced", id: "Mahir" } },
      { name: "REST API", badge: { en: "Advanced", id: "Mahir" } },
      { name: "Postman", badge: { en: "Advanced", id: "Mahir" } },
    ],
  },
  {
    category: {
      en: "Business & Analytics",
      id: "Bisnis & Analitik",
    },
    icon: "chart",
    skills: [
      { name: { en: "Business Process Analysis", id: "Analisis Proses Bisnis" } },
      { name: { en: "KPI & Performance Analysis", id: "Analisis KPI & Kinerja" } },
      { name: { en: "ERP Systems", id: "Sistem ERP" } },
      { name: { en: "Market Research", id: "Riset Pasar" } },
      { name: { en: "Strategic Planning", id: "Perencanaan Strategis" } },
      { name: { en: "Digital Marketing", id: "Pemasaran Digital" } },
      { name: { en: "Data Analysis", id: "Analisis Data" } },
    ],
  },
  {
    category: {
      en: "Product Development",
      id: "Pengembangan Produk",
    },
    icon: "rocket",
    skills: [
      { name: "UI/UX Design" },
      { name: "Figma" },
      { name: "Canva" },
      { name: { en: "Product Thinking", id: "Product Thinking" } },
      { name: { en: "System Design", id: "Desain Sistem" } },
      { name: { en: "Agile Workflow", id: "Alur Kerja Agile" } },
      { name: { en: "Responsive Design", id: "Desain Responsif" } },
      { name: { en: "Wireframing & Prototyping", id: "Wireframing & Prototipe" } },
    ],
  },
  {
    category: {
      en: "AI & Automation",
      id: "AI & Otomasi",
    },
    icon: "sparkles",
    skills: [
      { name: "ChatGPT" },
      { name: "Google Gemini" },
      { name: "AI Prompt Engineering" },
      { name: { en: "AI Content Strategy", id: "Strategi Konten AI" } },
      { name: { en: "Workflow Automation", id: "Otomasi Alur Kerja" } },
    ],
  },
  {
    category: {
      en: "Competitive Excellence",
      id: "Keunggulan Kompetitif",
    },
    icon: "trophy",
    skills: [
      {
        name: "MonsoonSIM",
        badge: {
          en: "🏆 10× National & International Champion",
          id: "🏆 10× Juara Nasional & Internasional",
        },
      },
      {
        name: { en: "Retail Strategy", id: "Strategi Ritel" },
        badge: { en: "🏆 Champion", id: "🏆 Juara 1" },
      },
      {
        name: { en: "Human Capital", id: "Modal Manusia" },
        badge: { en: "🏆 Champion", id: "🏆 Juara 1" },
      },
      {
        name: { en: "Production Management", id: "Manajemen Produksi" },
        badge: { en: "🏆 Champion", id: "🏆 Juara 1" },
      },
      {
        name: { en: "Financial Decision Making", id: "Keputusan Keuangan" },
        badge: { en: "🏆 Champion", id: "🏆 Juara 1" },
      },
      {
        name: { en: "Business Presentation", id: "Presentasi Bisnis" },
        badge: { en: "🏆 Champion", id: "🏆 Juara 1" },
      },
    ],
  },
  {
    category: {
      en: "Professional Skills",
      id: "Kemampuan Profesional",
    },
    icon: "users",
    skills: [
      {
        name: { en: "Leadership", id: "Kepemimpinan" },
        description: {
          en: "Led multidisciplinary teams during business simulation competitions.",
          id: "Memimpin tim multidisiplin selama kompetisi simulasi bisnis.",
        },
      },
      {
        name: { en: "Problem Solving", id: "Pemecahan Masalah" },
        description: {
          en: "Built ERP and HRIS systems from scratch.",
          id: "Membangun sistem ERP dan HRIS dari awal.",
        },
      },
      {
        name: { en: "Communication", id: "Komunikasi" },
        description: {
          en: "Presented business strategies in international competitions.",
          id: "Mempresentasikan strategi bisnis dalam kompetisi internasional.",
        },
      },
      { name: { en: "Strategic Thinking", id: "Berpikir Strategis" } },
      { name: { en: "Collaboration", id: "Kolaborasi" } },
      { name: { en: "Adaptability", id: "Adaptabilitas" } },
    ],
  },
];

export const languages = [
  { name: "Indonesian", level: "Native", value: 100 },
  { name: "English", level: "Intermediate", value: 70 },
];

// ------------------------------------------------------------
//  STATS / HIGHLIGHTS
// ------------------------------------------------------------
export const stats = [
  { label: "Championships", value: 11, suffix: "" },
  { label: "Technical Projects", value: 8, suffix: "" },
  { label: "GPA", value: 3.68, suffix: "" },
  { label: "International Wins", value: 6, suffix: "" },
];

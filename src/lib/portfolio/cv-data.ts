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
  linkedin: "LinkedIn",
  github: "GitHub",
  portfolio: "Portofolio",
  about: {
    en: "International Digital Business student at Universitas Negeri Padang with a track record of national and international business simulation championship achievements. Possesses technical skills as a Laravel Developer with experience building ERP systems, e-commerce platforms, and tourism websites that have been hosted live. Experienced in data-driven strategic decision-making, business analysis, and cross-functional team leadership.",
    id: "Mahasiswa Bisnis Digital Internasional di Universitas Negeri Padang dengan rekam jejak prestasi kompetisi simulasi bisnis tingkat nasional dan internasional. Memiliki kemampuan teknis sebagai Laravel Developer dengan pengalaman membangun sistem ERP, platform e-commerce, dan website pariwisata yang telah di-hosting secara live. Berpengalaman dalam pengambilan keputusan strategis berbasis data, analisis bisnis, dan kepemimpinan tim lintas fungsi.",
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
export interface SkillGroup {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    icon: "code",
    skills: [
      { name: "Laravel", level: 92 },
      { name: "PHP", level: 90 },
      { name: "MySQL", level: 88 },
      { name: "JavaScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Blade Template", level: 88 },
    ],
  },
  {
    category: "Deployment & Version Control",
    icon: "rocket",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 90 },
      { name: "Laravel Cloud", level: 85 },
      { name: "Netlify", level: 78 },
      { name: "WordPress", level: 75 },
    ],
  },
  {
    category: "Design & Productivity",
    icon: "palette",
    skills: [
      { name: "Figma", level: 82 },
      { name: "Canva", level: 90 },
      { name: "Microsoft Office", level: 92 },
      { name: "Google Workspace", level: 90 },
    ],
  },
  {
    category: "Business & Analysis",
    icon: "chart",
    skills: [
      { name: "ERP", level: 88 },
      { name: "KPI Analysis", level: 90 },
      { name: "Business Process Analysis", level: 88 },
      { name: "Production Management", level: 85 },
      { name: "HRM", level: 82 },
      { name: "Digital Marketing", level: 80 },
    ],
  },
  {
    category: "Business Simulation",
    icon: "trophy",
    skills: [
      { name: "MonsoonSIM", level: 98 },
      { name: "Retail Strategy", level: 95 },
      { name: "Production Strategy", level: 92 },
      { name: "Financial Strategy", level: 90 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "sparkles",
    skills: [
      { name: "Leadership", level: 92 },
      { name: "Strategic Thinking", level: 90 },
      { name: "Problem Solving", level: 88 },
      { name: "Communication", level: 87 },
      { name: "Teamwork", level: 92 },
      { name: "Adaptability", level: 90 },
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

// ============================================================
//  UI TRANSLATIONS — English & Indonesian
// ============================================================

export type Lang = "en" | "id";

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      awards: "Awards",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      portfolio: "Portfolio",
    },
    // Sword Intro
    intro: {
      forgingLegacy: "Forging Legacy",
      title: "HAFIZUL HANIF",
      subtitle: "Laravel Developer · Business Strategist",
      cta: "Enter Portfolio",
      skip: "Skip Intro →",
      greetingsHint: "Greetings from around the world",
    },
    // Hero
    hero: {
      available: "Available for opportunities",
      greeting: "Hi, I'm",
      title: "Laravel Developer & Business Strategist",
      tagline:
        "Crafting Digital Solutions, Winning Global Competitions",
      viewProjects: "View Projects",
      seeAchievements: "See Achievements",
      scroll: "Scroll",
      championBadge: "11× Champion",
      downloadCV: "Download CV",
    },
    // About
    about: {
      eyebrow: "Profile",
      title1: "About",
      title2: "Me",
      subtitle:
        "Business Strategist turned Laravel Craftsman — bridging data-driven decision making with full-stack engineering.",
      whoIam: "Who I Am",
      visionTitle: "My Vision",
      visionText:
        "To become a versatile digital leader who builds scalable software products while driving strategic business decisions — combining the precision of an engineer with the mindset of a CEO.",
      strategy: "Strategy",
      engineering: "Engineering",
      leadership: "Leadership",
      education: "Education",
      gpa: "GPA",
      visionSkills: [
        "Business Strategy",
        "Product Development",
        "Data Analytics",
        "Digital Marketing",
        "Software Engineering"
      ],
    },
    // Awards
    awards: {
      eyebrow: "Hall of Fame",
      title1: "11×",
      title2: "Championships",
      subtitle:
        "A consistent record of national & international business simulation victories — proof of strategic thinking under pressure.",
      all: "All",
      international: "International",
      national: "National",
      university: "University",
      achievement: "Achievement",
      bottomStats: {
        intlWins: "International Wins",
        natWins: "National Wins",
        total: "Total Championships",
        years: "Years Active",
      },
    },
    // Projects
    projects: {
      eyebrow: "Engineering Work",
      title1: "Technical",
      title2: "Projects",
      subtitle:
        "Production-ready Laravel applications — from ERP systems to AI-powered content platforms, all built and deployed live.",
      featured: "Featured",
      liveDemo: "Live Demo",
      showAll: "Show All Projects",
      showLess: "Show Less",
    },
    // Experience
    experience: {
      eyebrow: "Journey",
      title1: "Beyond the",
      title2: "Code",
      subtitle:
        "Internship, organizational leadership, and committee roles that shaped my professional character.",
      internship: "Internship",
      internshipSub: "Hands-on business mentoring",
      organization: "Organization",
      organizationSub: "Leadership roles",
      committee: "Committee",
      committeeSub: "5 event productions",
    },
    // Skills
    skills: {
      eyebrow: "Capabilities",
      title1: "Skills &",
      title2: "Expertise",
      subtitle:
        "A diverse toolkit spanning full-stack engineering, business strategy, design, and leadership.",
      languages: "Languages",
      certifications: "Certifications",
      skillsCount: "skills",
    },
    // Contact
    contact: {
      eyebrow: "Get In Touch",
      title1: "Let's",
      title2: "Connect",
      subtitle:
        "Have a project, opportunity, or just want to chat about business simulations or Laravel architecture? My inbox is always open.",
      contactInfo: "Contact Information",
      contactInfoSub:
        "Reach out through any of these channels — I usually respond within 24 hours.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      findOnline: "Find Me Online",
      sendMessage: "Send a Message",
      sendMessageSub:
        "Fill in the form and I'll get back to you as soon as possible.",
      yourName: "Your Name",
      yourEmail: "Your Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      placeholderName: "John Doe",
      placeholderEmail: "john@example.com",
      placeholderMessage:
        "Tell me about your project or opportunity...",
      toastSuccess: "Message sent! I'll get back to you soon. 🚀",
      toastDesc: (name: string, email: string) =>
        `Thanks ${name || "there"}, I'll reply to ${email}.`,
    },
    // Footer
    footer: {
      quickLinks: "Quick Links",
      madeWith: "Made with",
      caffeine: "& lots of caffeine",
      backToTop: "Back to Top",
    },
    // Language menu
    language: {
      label: "Language",
      english: "English",
      indonesian: "Indonesian",
    },
  },

  id: {
    // Navbar
    nav: {
      home: "Beranda",
      about: "Tentang",
      awards: "Penghargaan",
      projects: "Proyek",
      experience: "Pengalaman",
      skills: "Keahlian",
      contact: "Kontak",
      portfolio: "Portofolio",
    },
    // Sword Intro
    intro: {
      forgingLegacy: "Menempa Warisan",
      title: "HAFIZUL HANIF",
      subtitle: "Laravel Developer · Strateg Bisnis",
      cta: "Buka Portofolio",
      skip: "Lewati Intro →",
      greetingsHint: "Salam dari berbagai penjuru dunia",
    },
    // Hero
    hero: {
      available: "Terbuka untuk peluang",
      greeting: "Halo, saya",
      title: "Laravel Developer & Strateg Bisnis",
      tagline:
        "Menciptakan Solusi Digital, Memenangkan Kompetisi Global",
      viewProjects: "Lihat Proyek",
      seeAchievements: "Lihat Prestasi",
      scroll: "Gulir",
      championBadge: "11× Juara",
      downloadCV: "Unduh CV",
    },
    // About
    about: {
      eyebrow: "Profil",
      title1: "Tentang",
      title2: "Saya",
      subtitle:
        "Strateg Bisnis yang menjadi Laravel Craftsman — menjembatani pengambilan keputusan berbasis data dengan rekayasa full-stack.",
      whoIam: "Siapa Saya",
      visionTitle: "Visi Saya",
      visionText:
        "Menjadi pemimpin digital serbaguna yang membangun produk perangkat lunak skalabel sambil mendorong keputusan bisnis strategis — menggabungkan ketelitian seorang engineer dengan pola pikir seorang CEO.",
      strategy: "Strategi",
      engineering: "Rekayasa",
      leadership: "Kepemimpinan",
      education: "Pendidikan",
      gpa: "IPK",
      visionSkills: [
        "Strategi Bisnis",
        "Pengembangan Produk",
        "Analisis Data",
        "Pemasaran Digital",
        "Rekayasa Perangkat Lunak"
      ],
    },
    // Awards
    awards: {
      eyebrow: "Hall of Fame",
      title1: "11×",
      title2: "Kejuaraan",
      subtitle:
        "Rekam jejak konsisten kemenangan simulasi bisnis nasional & internasional — bukti pemikiran strategis di bawah tekanan.",
      all: "Semua",
      international: "Internasional",
      national: "Nasional",
      university: "Universitas",
      achievement: "Pencapaian",
      bottomStats: {
        intlWins: "Menang Internasional",
        natWins: "Menang Nasional",
        total: "Total Kejuaraan",
        years: "Tahun Aktif",
      },
    },
    // Projects
    projects: {
      eyebrow: "Karya Engineering",
      title1: "Proyek",
      title2: "Teknis",
      subtitle:
        "Aplikasi Laravel siap produksi — dari sistem ERP hingga platform berbasis AI, semuanya dibangun dan deployed live.",
      featured: "Unggulan",
      liveDemo: "Demo Live",
      showAll: "Tampilkan Semua Proyek",
      showLess: "Tampilkan Lebih Sedikit",
    },
    // Experience
    experience: {
      eyebrow: "Perjalanan",
      title1: "Di Luar",
      title2: "Kode",
      subtitle:
        "Magang, kepemimpinan organisasi, dan peran kepanitiaan yang membentuk karakter profesional saya.",
      internship: "Magang",
      internshipSub: "Pendampingan bisnis langsung",
      organization: "Organisasi",
      organizationSub: "Peran kepemimpinan",
      committee: "Kepanitiaan",
      committeeSub: "5 produksi acara",
    },
    // Skills
    skills: {
      eyebrow: "Kapabilitas",
      title1: "Keahlian &",
      title2: "Expertise",
      subtitle:
        "Toolkit beragam yang mencakup rekayasa full-stack, strategi bisnis, desain, dan kepemimpinan.",
      languages: "Bahasa",
      certifications: "Sertifikasi",
      skillsCount: "keahlian",
    },
    // Contact
    contact: {
      eyebrow: "Hubungi Saya",
      title1: "Mari",
      title2: "Terhubung",
      subtitle:
        "Punya proyek, peluang, atau hanya ingin mengobrol tentang simulasi bisnis atau arsitektur Laravel? Inbox saya selalu terbuka.",
      contactInfo: "Informasi Kontak",
      contactInfoSub:
        "Hubungi melalui salah satu kanal ini — biasanya saya membalas dalam 24 jam.",
      email: "Email",
      phone: "Telepon",
      location: "Lokasi",
      findOnline: "Temukan Saya Online",
      sendMessage: "Kirim Pesan",
      sendMessageSub:
        "Isi formulir dan saya akan menghubungi Anda secepat mungkin.",
      yourName: "Nama Anda",
      yourEmail: "Email Anda",
      message: "Pesan",
      send: "Kirim Pesan",
      sending: "Mengirim...",
      placeholderName: "Budi Santoso",
      placeholderEmail: "budi@contoh.com",
      placeholderMessage:
        "Ceritakan tentang proyek atau peluang Anda...",
      toastSuccess: "Pesan terkirim! Saya akan segera membalas. 🚀",
      toastDesc: (name: string, email: string) =>
        `Terima kasih ${name || "semuanya"}, saya akan membalas ke ${email}.`,
    },
    // Footer
    footer: {
      quickLinks: "Tautan Cepat",
      madeWith: "Dibuat dengan",
      caffeine: "& banyak kafein",
      backToTop: "Kembali ke Atas",
    },
    // Language menu
    language: {
      label: "Bahasa",
      english: "Inggris",
      indonesian: "Indonesia",
    },
  },
} as const;

export type TranslationKeys = typeof translations.en;

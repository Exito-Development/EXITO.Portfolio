// ─────────────────────────────────────────────────────────
// Exito Development — content model
// Edytuj tutaj, zmiany trafiają automatycznie do wszystkich sekcji
// ─────────────────────────────────────────────────────────

export const brand = {
  name: "Exito Development",
  tagline: "Modern Digital Systems",
  email: "hello@exito.dev",
  location: "Warsaw, Poland",
  calLink: "https://cal.com",
} as const;

export const stats = [
  { value: 32, suffix: "+", label: "Projektów" },
  { value: 7,  suffix: "",  label: "Lat exp." },
  { value: 18, suffix: "+", label: "Klientów" },
] as const;

export const services = [
  {
    number: "01",
    title: "Platformy sprzedażowe B2B",
    description:
      "Zaawansowane systemy e-commerce i marketplace z logiką cenową, zarządzaniem kontrahentami, integracją ERP i panelami analitycznymi w czasie rzeczywistym.",
    tags: ["Next.js", "Java", "PostgreSQL", "SAP ERP"],
    icon: "monitor",
  },
  {
    number: "02",
    title: "Konfiguratory produktów",
    description:
      "Interaktywne konfiguratory z logiką reguł biznesowych, wizualizacją, wyceną w locie i eksportem ofert. Zintegrowane z systemami CRM i ERP klienta.",
    tags: ["Next.js", "Three.js", "TypeScript", "CRM"],
    icon: "tag",
  },
  {
    number: "03",
    title: "Aplikacje mobilne",
    description:
      "Natywne aplikacje iOS i Android w React Native. Od onboardingu po zaawansowane funkcje offline-first — z pełnym CI/CD i automatycznym release pipeline.",
    tags: ["React Native", "iOS", "Android"],
    icon: "smartphone",
  },
  {
    number: "04",
    title: "API & Backend systemowy",
    description:
      "Skalowalne API REST i GraphQL, event-driven architecture. Projektujemy z myślą o setkach tysięcy requestów dziennie i pełnej obserwowalności.",
    tags: ["Java", "Spring Boot", "GraphQL", "Kafka"],
    icon: "bar-chart",
  },
  {
    number: "05",
    title: "Infrastruktura & DevOps",
    description:
      "Architektura cloud-native, serwery on-premise, pipeline CI/CD, monitoring i alerting, konteneryzacja Docker. Zero downtime deployment jako standard, nie wyjątek.",
    tags: ["Docker", "AWS", "GitHub Actions", "Jenkins"],
    icon: "shield",
  },
  {
    number: "06",
    title: "Projekty długoterminowe",
    description:
      "Współpraca jako zewnętrzny CTO lub dedicated team. Planowanie roadmapy, zarządzanie architekturą i mentoring wewnętrznych zespołów przez cały cykl życia produktu.",
    tags: ["CTO as a Service", "Team Lead", "Roadmapa"],
    icon: "clock",
  },
] as const;

export const stack = [
  { name: "React.js",     role: "Frontend",      icon: "layers" },
  { name: "Next.js",      role: "Fullstack",     icon: "package" },
  { name: "TypeScript",   role: "Language",      icon: "code" },
  { name: "Node.js",      role: "Backend",       icon: "globe" },
  { name: "Java Spring",  role: "Enterprise",    icon: "grid" },
  { name: "PostgreSQL",   role: "Database",      icon: "database" },
  { name: "Kubernetes",   role: "Orchestration", icon: "box" },
  { name: "React Native", role: "Mobile",        icon: "smartphone" },
] as const;

export const processSteps = [
  {
    num: "01",
    title: "Discovery & Architektura",
    desc: "Analizujemy wymagania, mapujemy procesy biznesowe, proponujemy architekturę. Decyzje poparte analizą.",
  },
  {
    num: "02",
    title: "Iteracyjne wdrożenie",
    desc: "Sprinty dwutygodniowe, continuous delivery, demo po każdym etapie. Klient widzi postęp od pierwszego tygodnia.",
  },
  {
    num: "03",
    title: "QA & Performance",
    desc: "Automatyczne testy, load testing, security audit przed każdym release. Nie dostarczamy czegoś, czego sami byśmy nie użyli.",
  },
  {
    num: "04",
    title: "Stabilizacja & Przekazanie",
    desc: "Dokumentacja, szkolenie zespołu, monitoring od dnia 1 produkcji. Pełna obsługa trakcie utrzymania produktu.",
  },
] as const;

export const navLinks = [
  { label: "Oferta",     href: "#oferta" },
  { label: "Stack",      href: "#stack" },
  { label: "Podejście",  href: "#podejscie" },
  { label: "Kontakt",    href: "#kontakt" },
] as const;

export const footerOferta = [
  "Platformy sprzedażowe",
  "Kreatory i konfiguratory",
  "Web i mobile",
];

export const footerTech = [
  "Java / Spring",
  "React / Next.js",
  "PostgreSQL / CI/CD",
];

export const tickerItems = [
  "Java", "Spring Boot", "React.js", "Next.js", "PostgreSQL",
  "Kubernetes", "React Native", "TypeScript", "Node.js", "AWS",
  "GraphQL", "CI/CD", "Terraform", "Kafka",
];

export const panelActivity = [
  {
    title: "Platforma sprzedażowa B2B — sprint #8 zakończony",
    meta: "2 godz. temu · React, Node.js, PostgreSQL",
    badge: "Deployed",
    icon: "file-text",
  },
  {
    title: "Konfigurator produktów — code review",
    meta: "5 godz. temu · Next.js, Zustand, TypeScript",
    badge: "Review",
    icon: "clock",
  },
  {
    title: "Aplikacja mobilna iOS — beta release",
    meta: "wczoraj · React Native, Expo, Supabase",
    badge: "Beta",
    icon: "trending-up",
  },
];

export const sparklineData = [38, 42, 36, 55, 48, 52, 61, 58, 66, 72, 69, 78];

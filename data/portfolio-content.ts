// ─────────────────────────────────────────────────────────
// Exito Development — content model
// Edytuj tutaj, zmiany trafiają automatycznie do wszystkich sekcji.
// Wartości w [NAWIASACH] to miejsca do uzupełnienia przed publikacją.
// ─────────────────────────────────────────────────────────

export const brand = {
  name: "Exito Development",
  descriptor: "Software engineering studio",
  email: "b.l@exito-development.pl",
  location: "Warszawa, Polska",
  nip: "[NUMER]",
  url: "https://exito-development.pl",
} as const;

export const navLinks = [
  { label: "Usługi", id: "uslugi" },
  { label: "Realizacje", id: "realizacje" },
  { label: "Współpraca", id: "wspolpraca" },
  { label: "Proces", id: "proces" },
  { label: "Kontakt", id: "kontakt" },
] as const;

export const hero = {
  title: "Oprogramowanie dla firm, które planują rosnąć.",
  lead: "Projektujemy, budujemy i utrzymujemy platformy B2B, aplikacje mobilne i infrastrukturę cloud dla firm, które potrzebują jakości klasy enterprise.",
  cta: "Rozpocznij projekt",
  facts: ["Warszawa, Polska", "Enterprise · B2B", "Java · Next.js · Mobile", "Cloud & DevOps"],
  // Pole punktów 3D: "background" — tło za tekstem hero, "slot" — osobny blok pod hero (jak w designie).
  visual: "background" as "background" | "slot",
} as const;

export const clients = {
  label: "Zaufali nam",
  // `logo`: PNG z przezroczystym tłem w /public/clients — wyświetlany jednokolorowo (kolor muted).
  // Siatka dopasowuje się do liczby pozycji (do 4 w rzędzie), więc nowego klienta dodajesz jedną linią.
  items: [
    { name: "CEDC International", logo: "/clients/cedc.png" },
    { name: "Grupa Maspex", logo: "/clients/maspex.png" },
  ] as { name: string; logo?: string }[],
};

export const services = {
  label: "(01) Usługi",
  title: "Od architektury po utrzymanie produkcji. Jeden partner za cały cykl życia produktu.",
  items: [
    {
      number: "01",
      title: "Platformy sprzedażowe B2B",
      description: "Logika cenowa, kontrahenci, integracja z ERP, analityka w czasie rzeczywistym.",
      tags: "Next.js · Java · SAP",
    },
    {
      number: "02",
      title: "Konfiguratory produktów",
      description: "Reguły biznesowe, wizualizacja, wycena w locie i eksport ofert do CRM.",
      tags: "Next.js · 3D",
    },
    {
      number: "03",
      title: "Aplikacje mobilne",
      description: "iOS i Android, offline-first, z automatycznym procesem wydań.",
      tags: "React Native",
    },
    {
      number: "04",
      title: "API i systemy backendowe",
      description: "REST, GraphQL, architektura zdarzeniowa. Skalowalność i obserwowalność.",
      tags: "Java · Kafka",
    },
    {
      number: "05",
      title: "Infrastruktura i DevOps",
      description: "Cloud-native lub on-premise, CI/CD, monitoring, wdrożenia bez przestojów.",
      tags: "AWS · K8s",
    },
  ],
} as const;

export type Project = {
  title: string;
  caption: string;
  media: string;
  /** Slug strony case study w /realizacje/[slug]. */
  slug?: string;
  /** Zrzut ekranu w /public, zastępuje placeholder. */
  image?: string;
};

export const work = {
  label: "(02) Realizacje",
  title: "Wybrane projekty.",
  cursor: "Zobacz",
  items: [
    {
      title: "Platforma zamówień B2B",
      caption: "Dystrybucja · HoReCa · 2025",
      media: "[ ZRZUT EKRANU ]",
      slug: "platforma-b2b",
    },
    {
      title: "Kreator Kart Menu",
      caption: "Gastronomia · 2025",
      media: "[ ZRZUT EKRANU ]",
      image: "/work/kreator-kart-menu.webp",
    },
    { title: "Aplikacja mobilna B2B", caption: "W realizacji", media: "[ MOCKUP MOBILE ]" },
    { title: "Monitoring stada — IoT i AI", caption: "AgriTech · MVP 2026", media: "[ DASHBOARD / ZDJĘCIE ]" },
  ] as Project[],
};

export const cooperation = {
  label: "(03) Współpraca",
  title: "Trzy modele. Dopasowane do etapu, na którym jest Twoja firma.",
  items: [
    {
      title: "Projekt",
      description: "Zdefiniowany zakres, harmonogram i budżet. Od discovery do wdrożenia na produkcję.",
    },
    {
      title: "Zespół dedykowany",
      description: "Inżynierowie pracujący w Twoim rytmie, rozliczani miesięcznie, skalowani wraz z potrzebą.",
    },
    {
      title: "CTO as a Service",
      description: "Roadmapa, decyzje architektoniczne i mentoring wewnętrznego zespołu.",
    },
  ],
} as const;

export const workProcess = {
  label: "(04) Proces",
  title: "Przewidywalnie, iteracyjnie, transparentnie.",
  steps: [
    { number: "01", title: "Discovery", description: "Procesy, wymagania i architektura, zanim powstanie linia kodu." },
    { number: "02", title: "Iteracje", description: "Dwutygodniowe sprinty i demo po każdym etapie." },
    { number: "03", title: "Jakość", description: "Testy automatyczne, load testing, audyt bezpieczeństwa." },
    { number: "04", title: "Utrzymanie", description: "Monitoring, dokumentacja i rozwój po starcie." },
  ],
} as const;

export const faq = {
  label: "(05) FAQ",
  title: "Najczęstsze pytania.",
  items: [
    {
      question: "Ile kosztuje realizacja projektu?",
      answer:
        "Każdy projekt wyceniamy indywidualnie. Po krótkiej rozmowie discovery przygotowujemy estymację w widełkach i harmonogram etapów. Orientacyjnie: MVP od [KWOTA] PLN netto.",
    },
    {
      question: "Jak długo trwa stworzenie platformy lub aplikacji?",
      answer:
        "Pierwsza działająca wersja (MVP) powstaje zwykle w [X–Y] tygodni. Postęp widzisz od pierwszego sprintu — demo co dwa tygodnie.",
    },
    {
      question: "Kto jest właścicielem kodu?",
      answer:
        "Ty. Po odbiorze i rozliczeniu przenosimy na klienta pełne autorskie prawa majątkowe do kodu oraz dostęp do repozytorium i infrastruktury.",
    },
    {
      question: "Czy podpisujecie NDA?",
      answer: "Tak. Umowę o poufności podpisujemy przed rozmową o szczegółach projektu.",
    },
    {
      question: "Czy przejmujecie istniejące systemy?",
      answer:
        "Tak. Zaczynamy od audytu kodu i architektury, potem modernizujemy etapami — bez przestojów. Integrujemy się z istniejącymi systemami, w tym z SAP ERP.",
    },
    {
      question: "Co dzieje się po wdrożeniu?",
      answer:
        "Oferujemy utrzymanie i dalszy rozwój: monitoring, aktualizacje bezpieczeństwa i wsparcie w ramach ustalonego SLA.",
    },
  ],
} as const;

export const contact = {
  label: "(06) Kontakt",
  title: "Porozmawiajmy o Twoim projekcie.",
  note: "Odpowiadamy w ciągu jednego dnia roboczego.",
  form: {
    name: "Imię i firma",
    email: "E-mail",
    message: "O projekcie",
    submit: "Wyślij zapytanie",
    sent: "Otwieramy Twój program pocztowy z gotową wiadomością.",
    subject: "Zapytanie ze strony",
  },
} as const;

export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  meta: { label: string; value: string }[];
  cover: string;
  results: { value: string; label: string }[];
  story: { label: string; lead: string; body: string }[];
  gallery: { media: string; wide: boolean }[];
  quote: { label: string; text: string; author: string };
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "platforma-b2b",
    index: "01",
    title: "Platforma zamówień B2B zintegrowana z SAP.",
    summary:
      "Platforma webowa i aplikacja mobilna, w których kontrahent widzi swoje ceny, składa zamówienie i śledzi jego status.",
    meta: [
      { label: "Klient", value: "[NAZWA KLIENTA]" },
      { label: "Branża", value: "Dystrybucja · HoReCa" },
      { label: "Zakres", value: "Architektura, backend, web, mobile, integracja ERP" },
      { label: "Status", value: "Na produkcji, w rozwoju" },
    ],
    cover: "[ GŁÓWNY ZRZUT EKRANU PLATFORMY ]",
    results: [
      { value: "[X%]", label: "[zamówień składanych online]" },
      { value: "[X min]", label: "[średni czas złożenia zamówienia]" },
      { value: "[X]", label: "[aktywnych kontrahentów]" },
    ],
    story: [
      {
        label: "(01) Wyzwanie",
        lead: "Klienci biznesowi zamawiali telefonicznie i mailowo, a każde zamówienie trzeba było ręcznie przenosić do SAP.",
        body: "[Opisz skalę problemu: liczbę zamówień, błędy przy przepisywaniu, czas pracy handlowców, brak wglądu klienta w ceny i dostępność.]",
      },
      {
        label: "(02) Rozwiązanie",
        lead: "Platforma webowa i aplikacja mobilna, w których kontrahent widzi swoje ceny, składa zamówienie i śledzi jego status.",
        body: "Backend w Java i Spring Boot synchronizuje ceny, stany i zamówienia z SAP ERP. [Dopisz kluczowe decyzje architektoniczne i funkcje, np. cenniki indywidualne, pakiety produktowe.]",
      },
    ],
    gallery: [
      { media: "[ ZRZUT — PANEL ZAMÓWIEŃ ]", wide: true },
      { media: "[ MOCKUP — APLIKACJA MOBILNA ]", wide: false },
    ],
    quote: {
      label: "(03) Efekt",
      text: "„[Cytat klienta o efekcie współpracy — jedno, dwa zdania.]”",
      author: "[Imię Nazwisko], [Stanowisko], [Firma]",
    },
    stack: ["Java", "Spring Boot", "Next.js", "React Native", "PostgreSQL", "SAP ERP"],
  },
];

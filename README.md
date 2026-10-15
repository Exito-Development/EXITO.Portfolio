# Exito Development — Modern Digital Systems

Oficjalne portfolio firmy **Exito Development**, specjalizującej się w budowaniu zaawansowanych systemów cyfrowych, platform B2B oraz dedykowanych rozwiązań enterprise.

## 🚀 O projekcie

Strona portfolio została zbudowana w oparciu o **Next.js**, prezentując ofertę, stos technologiczny oraz podejście procesowe firmy. Projekt kładzie nacisk na nowoczesny design, wydajność oraz przejrzystą prezentację usług.

## 🛠 Nasze Usługi

- **Platformy sprzedażowe B2B** — Zaawansowane systemy e-commerce z integracją ERP.
- **Konfiguratory produktów** — Interaktywne narzędzia z logiką biznesową i wyceną w czasie rzeczywistym.
- **Aplikacje mobilne** — Natywne rozwiązania iOS i Android (React Native).
- **API & Backend systemowy** — Skalowalne architektury REST i GraphQL.
- **Infrastruktura & DevOps** — Cloud-native, CI/CD, konteneryzacja (Docker/Kubernetes).
- **Projekty długoterminowe** — Wsparcie jako zewnętrzny CTO i mentoring zespołów.

## 💻 Stack Technologiczny

Projekt i realizacje firmy opierają się na sprawdzonych technologiach:
- **Frontend/Fullstack:** Next.js, React.js, TypeScript, Tailwind CSS
- **Backend:** Java Spring Boot, Node.js
- **Bazy danych:** PostgreSQL
- **Mobile:** React Native
- **Infrastruktura:** AWS, Docker, Kubernetes, GitHub Actions

## ⚙️ Rozpoczęcie pracy (Development)

Projekt jest aplikacją [Next.js](https://nextjs.org) stworzoną przy użyciu `create-next-app`.

### Wymagania
- Node.js (najnowsza wersja stabilna)
- npm / yarn / pnpm

### Instalacja

1. Sklonuj repozytorium:
```bash
git clone [adres-repozytorium]
```

2. Zainstaluj zależności:
```bash
npm install
# lub
yarn install
```

3. Uruchom serwer deweloperski:
```bash
npm run dev
# lub
yarn dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce, aby zobaczyć efekt.

## 📝 Konfiguracja treści

Główna treść strony (usługi, realizacje, współpraca, proces, FAQ, case studies) znajduje się w pliku:
`data/portfolio-content.ts`

Wszelkie zmiany w tym pliku są automatycznie odzwierciedlane w odpowiednich sekcjach strony.
Wartości w `[NAWIASACH]` (logotypy klientów, NIP, wyniki i cytat w case study, kwoty w FAQ) to miejsca do uzupełnienia przed publikacją. Zrzuty ekranu podpina się polem `image` (ścieżka w `/public`).

## 🎨 Design i ruch

Wygląd opiera się na design systemie **Exito** (monochrom, DM Sans + JetBrains Mono, siatka 12 kolumn). Tokeny są zmiennymi CSS w `app/globals.css`, z wariantem ciemnym wg `prefers-color-scheme`.

- Smooth scroll: Lenis (`components/SmoothScroll.tsx`)
- Wejścia sekcji: GSAP ScrollTrigger + SplitText, deklarowane atrybutami `data-reveal="lines" | "fade"` i `data-media` (`components/ScrollReveals.tsx`)
- Key visual: pole punktów w three.js / React Three Fiber (`components/PointField.tsx`)
- Przejścia stron: React `<ViewTransition>` (`experimental.viewTransition` w `next.config.ts`)

Wszystkie animacje respektują `prefers-reduced-motion`.

## 📬 Kontakt

- **WWW:** [exito-development.pl](https://exito-development.pl)
- **Email:** b.l@exito-development.pl
- **Lokalizacja:** Warszawa, Polska

---
© 2026 Exito Development

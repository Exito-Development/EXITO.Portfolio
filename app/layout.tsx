import type { Metadata, Viewport } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { ViewTransition } from "react";
import "./globals.css";
import Header from "@/components/Header";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollReveals from "@/components/ScrollReveals";
import CaseCursor from "@/components/CaseCursor";
import { brand, hero } from "@/data/portfolio-content";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-jetbrains-mono",
});

const title = `${brand.name} — ${hero.title.replace(/\.$/, "").toLowerCase()}`;

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: { default: title, template: `%s · ${brand.name}` },
  description: hero.lead,
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: brand.name,
    title,
    description: hero.lead,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Przejdź do treści</a>
        <SmoothScroll />
        <Header />
        <ViewTransition default="page">{children}</ViewTransition>
        <ScrollReveals />
        <CaseCursor />
      </body>
    </html>
  );
}

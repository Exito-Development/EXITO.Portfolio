import type { Metadata } from "next";
import "./globals.css";
import OrbBackground from "@/components/OrbBackground";

export const metadata: Metadata = {
  title: "Exito Development — Modern Digital Systems",
  description: "Platformy sprzedażowe, konfiguratory produktów, aplikacje mobilne i infrastruktura cloud-native.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <div className="grid-overlay" aria-hidden="true" />
        <OrbBackground />
        <div
          style={{
            position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
            background: "radial-gradient(circle at 50% 8%, rgba(255,255,255,0.055) 0%, transparent 28%)",
          }}
          aria-hidden="true"
        />
        <div className="page-wrap">{children}</div>
      </body>
    </html>
  );
}

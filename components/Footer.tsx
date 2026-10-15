import Link from "next/link";
import { brand } from "@/data/portfolio-content";

interface Props {
  /** "home" closes the contact band; "page" sits under case studies and legal pages. */
  variant?: "home" | "page";
}

export default function Footer({ variant = "page" }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className={`band site-footer site-footer--${variant}`}>
      <div className="wrap footer-grid">
        <span className="dim">© {year} {brand.name}</span>
        {variant === "home" ? (
          <>
            <span className="dim">{brand.location}</span>
            <span className="dim">NIP {brand.nip}</span>
            <a href="#top" className="link-draw">Do góry ↑</a>
          </>
        ) : (
          <>
            <a href={`mailto:${brand.email}`} className="footer-wide link-draw">{brand.email}</a>
            <Link href="/" className="link-draw">Strona główna ↑</Link>
          </>
        )}
      </div>
    </footer>
  );
}

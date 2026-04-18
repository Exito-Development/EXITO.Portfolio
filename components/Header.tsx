import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { navLinks, brand } from "@/data/portfolio-content";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <BrandLogo size={44} />
          <div>
            <div className="brand-name">{brand.name}</div>
            <div className="brand-sub">{brand.tagline}</div>
          </div>
        </Link>

        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#kontakt" className="btn-pill-white">
          Kontakt
        </Link>
      </div>
    </header>
  );
}

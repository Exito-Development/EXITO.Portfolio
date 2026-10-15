"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import MobileMenu from "./MobileMenu";
import NavAnchor from "./NavAnchor";
import { ArrowUpRight } from "./Icons";
import { brand, navLinks } from "@/data/portfolio-content";

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const inWork = pathname.startsWith("/realizacje");

  const brandContent = (
    <>
      <BrandLogo className="brand-mark" />
      <span className="brand-word">{brand.name}</span>
    </>
  );

  return (
    <header className="site-header">
      <div className="wrap">
        {onHome ? (
          <a href="#top" className="brand">{brandContent}</a>
        ) : (
          <Link href="/" className="brand">{brandContent}</Link>
        )}

        <nav className="site-nav" aria-label="Nawigacja główna">
          {navLinks.map((link) => (
            <NavAnchor
              key={link.id}
              section={link.id}
              className="link-draw"
              aria-current={inWork && link.id === "realizacje" ? "true" : undefined}
            >
              {link.label}
              {link.id === "kontakt" && <ArrowUpRight size={14} />}
            </NavAnchor>
          ))}
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}

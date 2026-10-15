"use client";

import { useEffect, useRef } from "react";
import BrandLogo from "./BrandLogo";
import NavAnchor from "./NavAnchor";
import { CloseIcon, MenuIcon } from "./Icons";
import { brand, navLinks } from "@/data/portfolio-content";

export default function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = () => dialogRef.current?.close();

  // The menu exists only below the desktop breakpoint; close it if the viewport grows.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => desktop.matches && dialogRef.current?.close();
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        type="button"
        className="menu-button"
        aria-label="Otwórz menu"
        aria-haspopup="dialog"
        onClick={() => dialogRef.current?.showModal()}
      >
        <MenuIcon size={22} />
      </button>

      <dialog ref={dialogRef} className="menu-dialog" aria-label="Menu" data-lenis-prevent>
        <div className="wrap menu-top">
          <span className="brand">
            <BrandLogo className="brand-mark" />
            <span className="brand-word">{brand.name}</span>
          </span>
          <button type="button" className="menu-button" aria-label="Zamknij menu" onClick={close}>
            <CloseIcon size={22} />
          </button>
        </div>

        <nav className="wrap menu-nav" aria-label="Nawigacja główna">
          <ul className="menu-list">
            {navLinks.map((link, i) => (
              <li key={link.id}>
                <NavAnchor section={link.id} onClick={close}>
                  <span className="t-label">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </NavAnchor>
              </li>
            ))}
          </ul>
        </nav>

        <div className="wrap menu-foot">
          <a href={`mailto:${brand.email}`} className="link-draw">{brand.email}</a>
          <span className="t-label">{brand.location}</span>
        </div>
      </dialog>
    </>
  );
}

"use client";

import { useEffect, useId, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { brand } from "@/data/portfolio-content";

interface BrandLogoProps {
  className?: string;
}

// Exito mark (public/logo.svg): a circle with the square and two corner wedges cut out.
// The cut-outs live in a mask, so the mark is transparent where they are and takes
// currentColor everywhere else.
//
// Motion: on mount the mark spins into place, the square opens and the wedges bite the
// corners (CSS, see globals.css). Hovering the surrounding .brand turns it half a turn —
// the mark is symmetric under 180°, so it always lands on itself.
export default function BrandLogo({ className = "" }: BrandLogoProps) {
  const maskId = `exito-mark-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const spinRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const spin = spinRef.current;
    const trigger = spin?.closest<HTMLElement>(".brand");
    if (!spin || !trigger) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onEnter = () => {
      if (reduced.matches || gsap.isTweening(spin)) return;
      gsap.to(spin, { rotation: "+=180", svgOrigin: "200 200", duration: 0.9, ease: "power3.inOut" });
    };

    trigger.addEventListener("pointerenter", onEnter);
    return () => {
      trigger.removeEventListener("pointerenter", onEnter);
      gsap.killTweensOf(spin);
    };
  }, []);

  return (
    <svg viewBox="120 120 160 160" className={`exito-mark ${className}`} aria-hidden="true" focusable="false">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="120" y="120" width="160" height="160">
          <rect x="120" y="120" width="160" height="160" fill="#fff" />
          <rect className="mark-square" x="164" y="164" width="72" height="72" fill="#000" />
          <path className="mark-wedge mark-wedge--tl" d="M164 164L164 120A80 80 0 0 0 120 164Z" fill="#000" />
          <path className="mark-wedge mark-wedge--br" d="M236 236L236 280A80 80 0 0 0 280 236Z" fill="#000" />
        </mask>
      </defs>
      <g ref={spinRef}>
        <g className="mark-body">
          <circle cx="200" cy="200" r="80" fill="currentColor" mask={`url(#${maskId})`} />
        </g>
      </g>
    </svg>
  );
}

// "EXITO DEVELOPMENT" — letters rise in one after another as the mark settles.
export function Wordmark() {
  return (
    <span className="brand-word">
      <span className="sr-only">{brand.name}</span>
      <span aria-hidden="true">
        {[...brand.name].map((char, i) => (
          <span key={i} className="brand-letter" style={{ "--i": i } as React.CSSProperties}>
            {char === " " ? " " : char}
          </span>
        ))}
      </span>
    </span>
  );
}

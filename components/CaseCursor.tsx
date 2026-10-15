"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import { work } from "@/data/portfolio-content";

// Small square label that trails the pointer over elements marked with data-cursor.
// Fine pointers only; touch devices never see it.
export default function CaseCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useRef(false);
  const pathname = usePathname();

  // A click on a case card navigates away while the pointer is still: hide until it moves again.
  useEffect(() => {
    active.current = false;
    ref.current?.classList.remove("is-active");
  }, [pathname]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduced ? 0 : 0.45;
    gsap.set(el, { xPercent: -50, yPercent: -50 });
    const xTo = gsap.quickTo(el, "x", { duration, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration, ease: "power3" });

    const setActive = (value: boolean) => {
      active.current = value;
      el.classList.toggle("is-active", value);
    };

    const onMove = (event: PointerEvent) => {
      const over = !!(event.target as Element | null)?.closest?.("[data-cursor]");
      if (over && !active.current) {
        // Jump into place before showing, so it doesn't fly in from the last position.
        gsap.set(el, { x: event.clientX, y: event.clientY });
      }
      xTo(event.clientX);
      yTo(event.clientY);
      if (over !== active.current) setActive(over);
    };
    const onLeave = () => setActive(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="case-cursor" aria-hidden="true">
      <span className="t-label">{work.cursor}</span>
    </div>
  );
}

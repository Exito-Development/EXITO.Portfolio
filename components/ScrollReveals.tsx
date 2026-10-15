"use client";

import { usePathname } from "next/navigation";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

const START = "top 85%";

// Scroll-driven entrances for the current page, declared in markup:
//   data-reveal="lines" — headline revealed line by line from a mask
//   data-reveal="fade"  — fade + 24px rise
//   data-media          — media well: inner image scales 1.08 → 1, then parallax
export default function ScrollReveals() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-reveal='lines']").forEach((el) => {
          SplitText.create(el, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit(self) {
              el.classList.add("is-split");
              gsap.set(el, { visibility: "visible" });
              return gsap.from(self.lines, {
                yPercent: 120,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: { trigger: el, start: START, once: true },
              });
            },
            onRevert() {
              el.classList.remove("is-split");
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal='fade']").forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: START, once: true },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-media]").forEach((well) => {
          const inner = well.querySelector<HTMLElement>(".media-inner");
          if (!inner) return;
          gsap.fromTo(
            inner,
            { scale: 1.08 },
            { scale: 1, duration: 1.4, ease: "power3.out", scrollTrigger: { trigger: well, start: START, once: true } },
          );
          gsap.fromTo(
            inner,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: { trigger: well, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterStatProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function CounterStat({ value, suffix = "", label }: CounterStatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const step = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setDisplayed(Math.round(ease * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="px-4 py-[14px] border border-white/10 rounded-2xl bg-white/[.03] backdrop-blur-[10px]"
    >
      <div className="text-[1.7rem] font-bold tracking-[-0.04em] leading-none text-white">
        {displayed}
        {suffix}
      </div>
      <div
        className="mt-1.5 text-[10px] tracking-[0.16em] uppercase"
        style={{ color: "var(--text-faint)" }}
      >
        {label}
      </div>
    </div>
  );
}

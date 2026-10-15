"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PointField = dynamic(() => import("./PointField"), { ssr: false });

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

interface Props {
  /** "slot" — surface well under the hero; "background" — full-bleed field behind the hero copy. */
  variant?: "slot" | "background";
}

// Lazily mounts the 3D point field after first paint.
export default function KeyVisual({ variant = "slot" }: Props) {
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!supportsWebGL()) return;
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setMounted(true), { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(id);
  }, []);

  const className = variant === "background" ? "hero-field" : "key-visual";

  return (
    <div className={`${className}${ready ? " is-ready" : ""}`} aria-hidden="true">
      {mounted && <PointField variant={variant} onReady={() => setReady(true)} />}
    </div>
  );
}

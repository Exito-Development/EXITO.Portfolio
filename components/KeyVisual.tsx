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

// Key visual slot: a surface well that lazily mounts the 3D point field after first paint.
export default function KeyVisual() {
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

  return (
    <div className={`key-visual${ready ? " is-ready" : ""}`} aria-hidden="true">
      {mounted && <PointField onReady={() => setReady(true)} />}
    </div>
  );
}

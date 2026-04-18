"use client";

import { useEffect, useRef } from "react";

export default function OrbBackground() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${-x * 0.7}px, ${-y * 0.5}px)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Orb 1 — top center */}
      <div
        ref={orb1Ref}
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orbFloat1 18s ease-in-out infinite",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
      {/* Orb 2 — bottom right */}
      <div
        ref={orb2Ref}
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          right: -80,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orbFloat2 22s ease-in-out infinite",
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </div>
  );
}

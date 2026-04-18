import React from "react";

interface BrandLogoProps {
  size?: number;
  className?: string;
}

export default function BrandLogo({ size = 48, className = "" }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      aria-label="Exito Development logo"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="200" cy="200" r="80" fill="white" />
      <path d="M 164,164 L 164,120 A 80,80 0 0,0 120,164 Z" fill="black" />
      <path d="M 236,236 L 236,280 A 80,80 0 0,0 280,236 Z" fill="black" />
      <rect x="164" y="164" width="72" height="72" fill="black" />
    </svg>
  );
}

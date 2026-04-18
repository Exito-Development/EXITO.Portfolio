import React from "react";

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

interface IconProps {
  size?: number;
  className?: string;
}

export function IconMonitor({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

export function IconTag({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2z" />
      <path d="M7 7h.01" />
    </svg>
  );
}

export function IconSmartphone({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function IconBarChart({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  );
}

export function IconShield({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function IconClock({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function IconLayers({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" y1="22" x2="12" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
    </svg>
  );
}

export function IconPackage({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}

export function IconCode({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function IconGlobe({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function IconGrid({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

export function IconDatabase({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

export function IconBox({ size = 20, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

export function IconArrowRight({ size = 16, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} {...strokeProps} strokeWidth={1.8}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function IconSend({ size = 16, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} {...strokeProps} strokeWidth={1.8}>
      <path d="m2 2 12 6-12 6V9l8-1-8-1z" />
    </svg>
  );
}

export function IconFileText({ size = 14, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

export function IconTrendingUp({ size = 14, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

export function IconMail({ size = 16, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function IconChevronUp({ size = 11, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" className={className} {...strokeProps} strokeWidth={1.5}>
      <path d="M4 10l4-4 4 4" />
    </svg>
  );
}

// Map icon string → component
export function getIcon(name: string, size = 18) {
  const map: Record<string, React.ReactNode> = {
    monitor:      <IconMonitor size={size} />,
    tag:          <IconTag size={size} />,
    smartphone:   <IconSmartphone size={size} />,
    "bar-chart":  <IconBarChart size={size} />,
    shield:       <IconShield size={size} />,
    clock:        <IconClock size={size} />,
    layers:       <IconLayers size={size} />,
    package:      <IconPackage size={size} />,
    code:         <IconCode size={size} />,
    globe:        <IconGlobe size={size} />,
    grid:         <IconGrid size={size} />,
    database:     <IconDatabase size={size} />,
    box:          <IconBox size={size} />,
    "file-text":  <IconFileText size={size} />,
    "trending-up":<IconTrendingUp size={size} />,
  };
  return map[name] ?? null;
}

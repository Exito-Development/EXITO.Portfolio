// Inline stroke icons, sized by the surrounding text.

interface IconProps {
  size?: number;
  className?: string;
}

function Icon({
  size = 16,
  className,
  strokeWidth = 1.75,
  children,
}: IconProps & { strokeWidth?: number; children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return <Icon {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
}

export function ArrowUpRight(props: IconProps) {
  return <Icon {...props}><path d="M7 17L17 7M8 7h9v9" /></Icon>;
}

export function MenuIcon(props: IconProps) {
  return <Icon strokeWidth={1.5} {...props}><path d="M3 9h18M3 15h18" /></Icon>;
}

export function CloseIcon(props: IconProps) {
  return <Icon {...props}><path d="M5 5l14 14M19 5L5 19" /></Icon>;
}

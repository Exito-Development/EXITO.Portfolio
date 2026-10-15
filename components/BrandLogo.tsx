interface BrandLogoProps {
  className?: string;
}

// Exito mark: a circle with the square and two corner wedges cut out (even-odd),
// filled with currentColor so it reads dark on the ground and light on the ink band.
export default function BrandLogo({ className = "" }: BrandLogoProps) {
  return (
    <svg viewBox="120 120 160 160" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M120 200a80 80 0 1 0 160 0a80 80 0 1 0-160 0Z M164 164H236V236H164Z M164 164L164 120A80 80 0 0 0 120 164Z M236 236L236 280A80 80 0 0 0 280 236Z"
      />
    </svg>
  );
}

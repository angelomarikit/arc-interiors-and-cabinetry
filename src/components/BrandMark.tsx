interface BrandMarkProps {
  className?: string;
}

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg
      className={`brand-mark ${className}`}
      viewBox="0 0 92 76"
      aria-hidden="true"
      fill="none"
    >
      <rect x="3" y="3" width="38" height="70" />
      <path d="M14 7v58l23-10V13L14 7Z" />
      <rect x="49" y="3" width="40" height="31" />
      <rect x="49" y="42" width="40" height="31" />
      <path d="M69 8v21M69 47v21" />
      <path className="brand-mark-handle" d="M73 18h4M73 57h4" />
    </svg>
  );
}

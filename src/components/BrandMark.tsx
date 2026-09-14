interface BrandMarkProps {
  className?: string;
}

/**
 * The mark is painted as a CSS mask of the brand artwork so it inherits the
 * surrounding text colour: white over the hero, dark once the header is solid.
 */
export function BrandMark({ className = "" }: BrandMarkProps) {
  return <span className={`brand-mark ${className}`.trim()} aria-hidden="true" />;
}

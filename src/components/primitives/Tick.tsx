type TickProps = {
  size?: number;
  className?: string;
};

/** Inline brand check mark. Decorative — hidden from assistive tech. */
export function Tick({ size = 20, className }: TickProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M4 10.5l3.6 3.6L16 5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

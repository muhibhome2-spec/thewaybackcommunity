import { type ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../lib/cn";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms — used for grids of revealing cards. */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts its children when they scroll into view. Respects
 * prefers-reduced-motion via the hook (which immediately reveals).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

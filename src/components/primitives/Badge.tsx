import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

/** Small floating tag — used to mark the recommended pricing plan. */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-pill bg-clay text-clay-ink font-mono uppercase",
        "text-[10px] tracking-[0.14em] px-3 py-[6px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

type KickerProps = {
  children: ReactNode;
  className?: string;
  /** Render as a span instead of a div (useful inline). */
  as?: "div" | "span" | "p";
};

/**
 * The mono uppercase section eyebrow. Used to signal section boundaries
 * without leaning on a heading and consume excessive visual weight.
 */
export function Kicker({ children, className, as: Tag = "div" }: KickerProps) {
  return (
    <Tag
      className={cn(
        "font-mono text-kicker uppercase text-clay",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

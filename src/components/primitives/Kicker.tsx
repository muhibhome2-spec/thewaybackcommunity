import { type ReactNode } from "react";
import { cn } from "../../lib/cn";

type KickerProps = {
  children: ReactNode;
  className?: string;
  /** Render as a span instead of a div (useful inline). */
  as?: "div" | "span" | "p";
  /** Optional id, e.g. to pair with Section's aria-labelledby. */
  id?: string;
};

/**
 * The mono uppercase section eyebrow. Used to signal section boundaries
 * without leaning on a heading and consume excessive visual weight.
 */
export function Kicker({ children, className, as: Tag = "div", id }: KickerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-mono text-xs uppercase text-primary",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

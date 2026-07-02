import { type ReactNode, type ElementType } from "react";
import { cn } from "../../lib/cn";

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingSize = "h1" | "h2" | "h2-feed" | "h2-final" | "h3" | "display";

type HeadingProps = {
  children: ReactNode;
  level?: HeadingLevel;
  size?: HeadingSize;
  id?: string;
  className?: string;
};

/**
 * Size names describe *role* (h1, h2-feed…), not the literal token —
 * they map onto the shared type scale in tailwind.config.ts so every
 * heading on the page draws from the same ratio-derived steps.
 */
const sizes: Record<HeadingSize, string> = {
  h1: "text-4xl font-normal",
  h2: "text-2xl font-normal",
  "h2-feed": "text-xl font-normal",
  "h2-final": "text-3xl font-normal",
  h3: "text-lg font-medium",
  display: "text-5xl font-medium",
};

/**
 * Semantic heading. Decoupling level from size lets us preserve a clean
 * document outline even when visual scale needs to be different (eg. an
 * h2 rendered at display size for the Behind the Screen flagship).
 */
export function Heading({
  children,
  level = 2,
  size = "h2",
  id,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;
  return (
    <Tag id={id} className={cn(sizes[size], className)}>
      {children}
    </Tag>
  );
}

/** Inline brand emphasis. Renders as semantic <em> with clay colour. */
export function Em({ children }: { children: ReactNode }) {
  return <em className="em-brand">{children}</em>;
}

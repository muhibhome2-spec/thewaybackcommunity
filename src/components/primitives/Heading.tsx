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

const sizes: Record<HeadingSize, string> = {
  h1: "text-h1 font-light",
  h2: "text-h2 font-light",
  "h2-feed": "text-h2-feed font-light",
  "h2-final": "text-h2-final font-light",
  h3: "text-h3 font-normal",
  display: "text-display font-normal",
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

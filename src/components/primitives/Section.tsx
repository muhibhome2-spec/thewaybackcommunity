import { type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "./Container";

export type SectionTone = "paper" | "tint" | "soft" | "clay";

const tones: Record<SectionTone, string> = {
  paper: "bg-paper",
  tint: "bg-tint",
  soft: "bg-soft",
  clay: "bg-claybg",
};

type SectionProps = {
  children: ReactNode;
  /** Background tone — alternates the page's vertical rhythm. */
  tone?: SectionTone;
  /** Optional in-page anchor id. */
  id?: string;
  /** Optional id of the h2 inside, used for aria-labelledby. */
  labelledBy?: string;
  /** Optional override of the standard band padding. */
  className?: string;
  /** Container width override. */
  innerClassName?: string;
};

/**
 * A full-width band with consistent vertical rhythm. Composes Container
 * inside so every section shares the same horizontal gutter.
 */
export function Section({
  children,
  tone = "paper",
  id,
  labelledBy,
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("w-full", tones[tone], className)}
    >
      <Container
        className={cn(
          "py-[clamp(62px,9vw,110px)]",
          innerClassName,
        )}
      >
        {children}
      </Container>
    </section>
  );
}

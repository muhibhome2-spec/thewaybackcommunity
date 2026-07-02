import { type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { Container } from "./Container";

export type SectionTone = "paper" | "tint" | "soft" | "clay" | "none";
export type SectionVariant = "band" | "feed";

const tones: Record<SectionTone, string> = {
  paper: "bg-background",
  tint: "bg-tint",
  soft: "bg-soft",
  clay: "bg-claybg",
  none: "",
};

type SectionProps = {
  children: ReactNode;
  /** Background tone. */
  tone?: SectionTone;
  /**
   * `band` = full-width alternating band with generous vertical padding
   * (used for top-of-page hero + bottom CTA).
   * `feed` = compact block sitting inside a two-column column (no bg,
   * tighter vertical padding).
   */
  variant?: SectionVariant;
  /** Optional in-page anchor id. */
  id?: string;
  /** Optional id of the h2 inside, used for aria-labelledby. */
  labelledBy?: string;
  className?: string;
  innerClassName?: string;
};

export function Section({
  children,
  tone = "paper",
  variant = "band",
  id,
  labelledBy,
  className,
  innerClassName,
}: SectionProps) {
  if (variant === "feed") {
    return (
      <section
        id={id}
        aria-labelledby={labelledBy}
        className={cn("py-10 md:py-14 first:pt-0", className)}
      >
        {children}
      </section>
    );
  }

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("w-full", tones[tone], className)}
    >
      <Container
        className={cn("py-[clamp(64px,42.2px+5.45vw,112px)]", innerClassName)}
      >
        {children}
      </Container>
    </section>
  );
}

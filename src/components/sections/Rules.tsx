import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { whyItWorks } from "../../data/content";

/**
 * Why this works when a book doesn't — five short, scannable reasons.
 * Kept as bullets (not paragraphs): benefit-style bullets scan faster
 * and lift engagement over prose blocks of the same information.
 */
export function Rules() {
  return (
    <Section variant="feed" labelledBy="rules-title">
      <Reveal>
        <Kicker className="mb-4">Why this works</Kicker>
        <Heading id="rules-title" level={2} size="h2-feed">
          A book leaves you <Em>alone with it.</Em>
        </Heading>
      </Reveal>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2 list-none p-0">
        {whyItWorks.map((w, i) => (
          <Reveal key={w.title} delay={i * 50}>
            <div className="flex gap-3">
              <div className="flex-none w-8 h-8 rounded-full bg-clay-tint text-primary font-mono text-[12px] flex items-center justify-center leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-[17px] font-normal text-foreground tracking-[-0.01em]">
                  {w.title}
                </h3>
                <p className="mt-0.5 text-[14px] font-light text-muted-foreground leading-snug">
                  {w.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

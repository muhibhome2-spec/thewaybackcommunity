import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { method } from "../../data/content";

/**
 * Compressed into one divided strip instead of four boxed cards.
 * Same four steps, same words — but one flat panel reads as a single
 * quick scan instead of four separate things to process, which is the
 * effect we want after several proof-heavy sections above it.
 */
export function Method() {
  return (
    <Section variant="feed" labelledBy="method-title">
      <Reveal>
        <Kicker className="mb-4">A method, not random advice</Kicker>
        <Heading id="method-title" level={2} size="h2-feed">
          The Way Back <Em>Method.</Em>
        </Heading>
      </Reveal>

      <ol className="mt-6 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border rounded-card-lg border border-border bg-soft overflow-hidden list-none p-0">
        {method.map((step, i) => (
          <li key={step.title} className="p-5">
            <Reveal delay={i * 50}>
              <span className="font-mono text-[11px] tracking-[0.1em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-1.5 text-[16px] font-normal text-foreground">
                {step.title}
              </div>
              <p className="mt-1 text-[13px] font-light text-muted-foreground leading-snug">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

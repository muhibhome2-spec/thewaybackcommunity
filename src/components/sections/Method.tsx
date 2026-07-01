import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { method, whyItWorks } from "../../data/content";

/**
 * How it works + why it works, combined into one section under one
 * heading. These two were previously separate sections (Method, Rules)
 * that opened with an identical Kicker+Heading template back to back —
 * merging them removes one repeat of that pattern from the feed and
 * keeps "why it works" visually subordinate to "how it works" instead
 * of reading as a second, equally-weighted section.
 */
export function Method() {
  return (
    <Section variant="feed" labelledBy="method-title">
      <Reveal>
        <Kicker className="mb-4">How it works</Kicker>
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

      <div className="mt-10">
        <h3 className="font-mono text-[13px] uppercase tracking-[0.16em] text-primary mb-4">
          Why it works
        </h3>
        <ol className="grid gap-4 sm:grid-cols-2 list-none p-0">
          {whyItWorks.map((w, i) => (
            <Reveal key={w.title} delay={i * 50}>
              <div className="flex gap-3">
                <div className="flex-none w-8 h-8 rounded-full bg-clay-tint text-primary font-mono text-[12px] flex items-center justify-center leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[17px] font-normal text-foreground tracking-[-0.01em]">
                    {w.title}
                  </div>
                  <p className="mt-0.5 text-[14px] font-light text-muted-foreground leading-snug">
                    {w.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

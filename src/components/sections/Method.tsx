import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Card } from "../primitives/Card";
import { method } from "../../data/content";

export function Method() {
  return (
    <Section labelledBy="method-title">
      <Reveal>
        <Kicker className="mb-[22px]">A method, not random advice</Kicker>
        <Heading id="method-title" level={2} size="h2">
          The Way Back <Em>Method.</Em>
        </Heading>
      </Reveal>
      <ol className="mt-12 grid gap-[18px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
        {method.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 90}>
              <Card tone="soft" className="h-full p-7">
                <div className="font-mono text-kicker tracking-[0.1em] text-clay">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-[14px] text-h3-sm font-normal">
                  {step.title}
                </div>
                <p className="mt-[10px] text-[16px] font-light text-sub leading-snug">
                  {step.description}
                </p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

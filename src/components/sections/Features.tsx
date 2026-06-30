import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Card } from "../primitives/Card";
import { features } from "../../data/content";
import { site } from "../../config/site";

export function Features() {
  return (
    <Section
      tone="soft"
      id={site.anchors.included}
      labelledBy="features-title"
    >
      <Reveal>
        <Kicker className="mb-[22px]">What you get</Kicker>
        <Heading id="features-title" level={2} size="h2">
          Everything you need, <Em>in one place.</Em>
        </Heading>
      </Reveal>
      <div className="mt-12 grid gap-[18px] grid-cols-1 md:grid-cols-2">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 80}>
            <Card interactive className="h-full">
              <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-clay">
                {f.cadence}
              </div>
              <h3 className="mt-4 text-h3 font-normal">{f.title}</h3>
              <p className="mt-3 text-[18px] font-light text-sub leading-relaxed">
                {f.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
              <Card
                interactive
                className="h-full bg-soft"
              >
                <CardHeader className="gap-3">
                  <span className="font-mono text-kicker tracking-[0.1em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="text-h3-sm">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[16px] font-light text-muted-foreground leading-snug">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}

import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { method } from "../../data/content";

export function Method() {
  return (
    <Section variant="feed" labelledBy="method-title">
      <Reveal>
        <Kicker className="mb-4">A method, not random advice</Kicker>
        <Heading id="method-title" level={2} size="h2-feed">
          The Way Back <Em>Method.</Em>
        </Heading>
      </Reveal>
      <ol className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 list-none p-0">
        {method.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 70}>
              <Card interactive className="h-full bg-soft">
                <CardHeader className="gap-3">
                  <span className="font-mono text-kicker tracking-[0.1em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="text-h3-sm">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[15px] font-light text-muted-foreground leading-snug">
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

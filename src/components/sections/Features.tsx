import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { features } from "../../data/content";
import { site } from "../../config/site";

export function Features() {
  return (
    <Section tone="soft" id={site.anchors.included} labelledBy="features-title">
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
              <CardHeader className="gap-2">
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-primary">
                  {f.cadence}
                </p>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{f.description}</CardDescription>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

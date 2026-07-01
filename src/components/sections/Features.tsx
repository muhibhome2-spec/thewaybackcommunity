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
    <Section variant="feed" id={site.anchors.included} labelledBy="features-title">
      <Reveal>
        <Kicker className="mb-4">What you get</Kicker>
        <Heading id="features-title" level={2} size="h2-feed">
          Everything you need, <Em>in one place.</Em>
        </Heading>
      </Reveal>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 60}>
            <Card interactive className="h-full">
              <CardHeader className="gap-2">
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-primary">
                  {f.cadence}
                </p>
                <CardTitle className="text-h3-sm">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[15px]">{f.description}</CardDescription>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "../primitives/Section";
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

export function Features() {
  return (
    <Section variant="feed" labelledBy="features-title">
      <Kicker className="mb-4">What you get</Kicker>
      <Heading id="features-title" level={2} size="h2-feed">
        Everything you need, <Em>in one place.</Em>
      </Heading>
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {features.map((f) => (
          <Card key={f.title} interactive className="h-full">
            <CardHeader className="gap-2">
              <p className="font-mono text-xs uppercase text-primary">
                {f.cadence}
              </p>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm">{f.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

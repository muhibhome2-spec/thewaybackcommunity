import { Section } from "../primitives/Section";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Stars } from "../primitives/Stars";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/cn";
import { stats, testimonials } from "../../data/content";

export function SocialProof() {
  return (
    <Section variant="feed" labelledBy="proof-title">
      <Kicker className="mb-4">From parents at the first seminar</Kicker>
      <Heading id="proof-title" level={2} size="h2-feed">
        Parents are already <Em>finding their way back.</Em>
      </Heading>

      <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-card-lg border border-border bg-soft p-4 text-center"
          >
            <dd className="text-xl font-normal text-primary leading-none">
              {s.value}
            </dd>
            <dt className="mt-2 font-mono text-2xs uppercase text-meta leading-snug">
              {s.label}
            </dt>
          </div>
        ))}
      </dl>

      {/* Six testimonials on ≥sm; the strongest three on phones, where a
          1,600px proof wall this early pushes the offer too far down. */}
      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Card
            key={t.author}
            interactive
            className={cn("h-full bg-soft", i > 2 && "hidden sm:block")}
          >
            <CardContent className="flex flex-col gap-3 min-h-44 p-5">
              <Stars rating={t.rating} />
              <blockquote className="text-base font-normal leading-snug text-foreground">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-auto font-mono text-2xs uppercase text-primary">
                {t.author}
              </figcaption>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Stars } from "../primitives/Stars";
import { Card, CardContent } from "../ui/card";
import { stats, testimonials } from "../../data/content";

export function SocialProof() {
  return (
    <Section labelledBy="proof-title">
      <Reveal>
        <Kicker className="mb-[22px]">From parents at the first seminar</Kicker>
        <Heading id="proof-title" level={2} size="h2">
          Parents are already <Em>finding their way back.</Em>
        </Heading>
      </Reveal>

      <dl className="mt-11 grid grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {stats.map((s) => (
          <div key={s.label} className="text-center px-3 py-6">
            <dt className="sr-only">{s.label}</dt>
            <dd className="text-stat font-light text-primary">{s.value}</dd>
            <dd className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-meta">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-9 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 60}>
            <Card interactive className="h-full bg-soft">
              <CardContent className="flex flex-col gap-4 min-h-[200px] p-7">
                <Stars rating={t.rating} />
                <blockquote className="text-[18px] font-light leading-snug tracking-[-0.01em] text-foreground">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-auto font-mono text-[12px] uppercase tracking-[0.1em] text-primary">
                  {t.author}
                </figcaption>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Users, Gift, Wallet } from "lucide-react";
import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";

const POINTS = [
  {
    icon: Users,
    label: "What it is",
    body: "A paid membership for parents — live coaching and a private community, so you're never guessing alone.",
  },
  {
    icon: Gift,
    label: "What you get",
    body: "Coaching every two weeks, a private WhatsApp group, a monthly masterclass, and a free 4-week course.",
  },
  {
    icon: Wallet,
    label: "What it costs",
    body: "From £10.99 a month. Cancel any time — no contract.",
  },
] as const;

/**
 * A three-line, literal definition of the product, first thing in the
 * feed. Everywhere else on the page makes the emotional or persuasive
 * case; this is the one place that just states the facts — what it
 * is, what's included, what it costs — so a visitor never has to
 * piece that together from scattered sections.
 */
export function WhatThisIs() {
  return (
    <Section variant="feed" labelledBy="what-this-is-title">
      <h2 id="what-this-is-title" className="sr-only">
        What this is
      </h2>
      <Reveal>
        <dl className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border rounded-card-lg border border-border bg-soft overflow-hidden">
          {POINTS.map(({ icon: Icon, label, body }) => (
            <div key={label} className="p-5 flex flex-col gap-2">
              <dt className="flex items-center gap-2 font-mono text-xs uppercase text-primary">
                <Icon aria-hidden="true" className="size-4" />
                {label}
              </dt>
              <dd className="text-sm font-normal text-foreground leading-snug">
                {body}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

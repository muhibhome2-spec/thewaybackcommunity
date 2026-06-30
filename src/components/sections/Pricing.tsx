import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Button } from "../primitives/Button";
import { Badge } from "../primitives/Badge";
import { Tick } from "../primitives/Tick";
import { included } from "../../data/content";
import { site } from "../../config/site";

export function Pricing() {
  return (
    <Section
      tone="tint"
      id={site.anchors.join}
      labelledBy="pricing-title"
    >
      <Reveal>
        <Kicker className="mb-[22px]">Join the community</Kicker>
        <Heading id="pricing-title" level={2} size="h2">
          One community. <Em>Two ways</Em> to join.
        </Heading>
      </Reveal>

      <div className="mx-auto mt-11 max-w-[560px] grid gap-3.5">
        <div className="font-mono text-[13px] uppercase tracking-[0.16em] text-ink mb-1.5">
          Everything included
        </div>
        {included.map((line) => (
          <div key={line} className="flex items-start gap-3.5 text-[19px] font-light text-ink">
            <span aria-hidden="true" className="mt-0.5 flex-none text-clay">
              <Tick />
            </span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-9 max-w-[720px] text-center bg-clay-tint border border-clay-line rounded-card px-7 py-5 text-found font-light">
        <strong className="font-semibold text-clay">Founding offer.</strong>{" "}
        The first 100 members lock in today&rsquo;s price for as long as they
        stay. After 100, the price goes up.
      </p>

      <div className="mx-auto mt-9 max-w-pricing grid gap-[18px] md:grid-cols-2">
        <PriceCard
          plan="Monthly"
          amount="£10.99"
          period="/ month"
          terms="Cancel any time. No contracts. Attend live, or watch the recording later."
          cta={
            <Button variant="ghost" href={site.joinUrl} block>
              Join monthly
            </Button>
          }
        />
        <PriceCard
          plan="Yearly"
          amount="£109"
          period="/ year"
          terms="Two months free, and the founding price locked for as long as you stay."
          featured
          cta={
            <Button variant="primary" href={site.joinUrl} block>
              Become a founding member
            </Button>
          }
        />
      </div>
    </Section>
  );
}

type PriceCardProps = {
  plan: string;
  amount: string;
  period: string;
  terms: string;
  featured?: boolean;
  cta: React.ReactNode;
};

function PriceCard({
  plan,
  amount,
  period,
  terms,
  featured = false,
  cta,
}: PriceCardProps) {
  return (
    <div
      className={
        "relative flex flex-col rounded-card-xl px-9 py-10 bg-paper " +
        (featured
          ? "border-[1.5px] border-clay shadow-feat"
          : "border border-hairline")
      }
    >
      {featured && (
        <Badge className="absolute -top-3 left-7">Best value</Badge>
      )}
      <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted">
        {plan}
      </div>
      <div className="mt-3.5 mb-0.5 flex items-baseline gap-2 leading-none tracking-[-0.04em] font-light">
        <span className="text-price">{amount}</span>
        <span className="text-[19px] text-muted">{period}</span>
      </div>
      <p className="mt-3.5 mb-6 text-[17px] font-light text-sub leading-relaxed">
        {terms}
      </p>
      <div className="mt-auto">{cta}</div>
    </div>
  );
}

import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Tick } from "../primitives/Tick";
import { included } from "../../data/content";
import { site } from "../../config/site";

/**
 * Full pricing panel — sits below the two-column landing as the
 * comprehensive "everything included + both plans" section. The
 * right-rail JoinCard covers monthly-only; this shows yearly too.
 */
export function Pricing() {
  return (
    <Section tone="tint" id="pricing" labelledBy="pricing-title">
      <Reveal>
        <Kicker className="mb-[22px]">Membership</Kicker>
        <Heading id="pricing-title" level={2} size="h2">
          One community. <Em>Two ways</Em> to join.
        </Heading>
      </Reveal>

      <div className="mx-auto mt-11 max-w-[560px] grid gap-3.5">
        <div className="font-mono text-[13px] uppercase tracking-[0.16em] text-foreground mb-1.5">
          Everything included
        </div>
        {included.map((line) => (
          <div
            key={line}
            className="flex items-start gap-3.5 text-[19px] font-light text-foreground"
          >
            <span aria-hidden="true" className="mt-0.5 flex-none text-primary">
              <Tick />
            </span>
            <span>{line}</span>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-9 max-w-[720px] text-center bg-clay-tint border border-clay-line rounded-card px-7 py-5 text-found font-light">
        <strong className="font-semibold text-primary">Founding offer.</strong>{" "}
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
            <Button asChild variant="outline" className="w-full">
              <a href={site.joinUrl} target="_blank" rel="noopener noreferrer">
                Join monthly
              </a>
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
            <Button asChild className="w-full">
              <a href={site.joinUrl} target="_blank" rel="noopener noreferrer">
                Become a founding member
              </a>
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
    <Card
      className={
        "relative rounded-card-xl flex flex-col " +
        (featured ? "border-[1.5px] border-primary shadow-feat" : "")
      }
    >
      {featured && (
        <Badge className="absolute -top-3 left-7">Best value</Badge>
      )}
      <CardHeader className="pb-0">
        <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-meta">
          {plan}
        </div>
        <div className="flex items-baseline gap-2 leading-none tracking-[-0.04em] font-light">
          <span className="text-price text-foreground">{amount}</span>
          <span className="text-[19px] text-meta">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-3">
        <p className="text-[17px] font-light text-muted-foreground leading-relaxed">
          {terms}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">{cta}</CardFooter>
    </Card>
  );
}

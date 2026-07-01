import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";

export function Cost() {
  return (
    <Section tone="tint" labelledBy="cost-title">
      <Reveal>
        <Kicker className="mb-[22px]">The cost of guessing</Kicker>
        <Heading id="cost-title" level={2} size="h2">
          When we are not sure, <Em>we guess.</Em>
        </Heading>
        <div className="mt-[26px] grid gap-[26px] sm:grid-cols-2 max-w-prose">
          <p className="text-prose font-light text-muted-foreground">
            And guessing has a price. We push when we should wait. We take
            silence personally. We reach for the phone as a punishment, and the
            wall gets higher.
          </p>
          <p className="text-prose font-light text-muted-foreground">
            The distance grows. They pull further away. Modern parenting moves
            too fast to face on intuition alone, in a world we never grew up in.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

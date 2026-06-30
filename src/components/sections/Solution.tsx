import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em } from "../primitives/Heading";

export function Solution() {
  return (
    <Section tone="tint">
      <Reveal>
        <Kicker className="mb-[22px]">Why we exist</Kicker>
        <div className="max-w-[840px]">
          <p className="text-why font-light text-ink">
            No parent should have to work this out by trial and error, on their
            own child.
          </p>
          <p className="my-6 text-why-big text-clay font-light">
            <Em>So we built the place we wished every parent had.</Em>
          </p>
          <p className="text-why font-light text-ink">
            The Way Back Community brings together the understanding, the tools,
            and the people who get it, so that no parent ever has to fight for
            their teenager alone again.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";

/**
 * Feed-column About block. Combines the Problem, Cost, and Solution
 * narrative into a single flowing prose section — replaces three
 * standalone bands with one continuous read.
 */
export function AboutBlock() {
  return (
    <Section variant="feed" labelledBy="about-title">
      <Reveal>
        <Kicker className="mb-4">About the community</Kicker>
        <Heading id="about-title" level={2} size="h2">
          You know the feeling. The door that <Em>closed.</Em>
        </Heading>

        <div className="mt-8 grid gap-5 max-w-prose text-prose font-light text-muted-foreground">
          <p>
            One word answers. A bedroom door that stays shut. A child you love,
            and do not quite recognise any more.
          </p>
          <p>
            And that thought, late at night, that you would never say out loud.
            What happened to my beautiful child? You are not the only one. Far
            from it.
          </p>
          <p>
            When we are not sure, we guess. And guessing has a price. We push
            when we should wait. We take silence personally. We reach for the
            phone as a punishment, and the wall gets higher.
          </p>
          <p>
            The distance grows. They pull further away. Modern parenting moves
            too fast to face on intuition alone, in a world we never grew up in.
          </p>
        </div>

        <p className="mt-10 max-w-[840px] text-why text-primary font-light">
          <Em>So we built the place we wished every parent had.</Em>
        </p>
        <p className="mt-4 max-w-[840px] text-why font-light text-foreground">
          The Way Back Community brings together the understanding, the tools,
          and the people who get it, so that no parent ever has to fight for
          their teenager alone again.
        </p>
      </Reveal>
    </Section>
  );
}

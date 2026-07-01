import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";

/**
 * Feed-column About block, cut to two short paragraphs.
 *
 * Eye-tracking research shows people read at most ~20-28% of the words
 * on a page and scan before deciding whether to read on (NN/g). This
 * keeps only the two strongest original lines from the problem/cost
 * narrative instead of the original six paragraphs, so the point lands
 * before attention drops off.
 */
export function AboutBlock() {
  return (
    <Section variant="feed" labelledBy="about-title">
      <Reveal>
        <Kicker className="mb-4">About the community</Kicker>
        <Heading id="about-title" level={2} size="h2-feed">
          You know the feeling. The door that <Em>closed.</Em>
        </Heading>

        <div className="mt-5 max-w-prose text-[17px] font-light text-muted-foreground leading-relaxed">
          <p>
            One word answers. A bedroom door that stays shut. When we are not
            sure, we guess &mdash; and guessing has a price. The distance
            grows, and they pull further away.
          </p>
        </div>

        <p className="mt-6 max-w-[720px] text-[clamp(20px,2.6vw,26px)] text-primary font-light leading-snug">
          <Em>So we built the place we wished every parent had.</Em>
        </p>
        <p className="mt-3 max-w-[720px] text-[17px] font-light text-foreground leading-relaxed">
          The Way Back Community brings together the understanding, the tools,
          and the people who get it, so that no parent ever has to fight for
          their teenager alone again.
        </p>
      </Reveal>
    </Section>
  );
}

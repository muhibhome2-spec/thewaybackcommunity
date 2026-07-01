import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { ScrollButton } from "../primitives/ScrollButton";
import { CheckList } from "../primitives/CheckList";
import { futureOutcomes } from "../../data/content";
import { site } from "../../config/site";

export function Future() {
  return (
    <Section labelledBy="future-title">
      <Reveal>
        <Kicker className="mb-[22px]">Now picture the other path</Kicker>
        <Heading id="future-title" level={2} size="h2">
          Imagine six months <Em>from now.</Em>
        </Heading>
        <CheckList className="mt-9 max-w-proseSm" items={futureOutcomes} />
        <p className="mt-[30px] font-mono text-kicker uppercase tracking-[0.1em] text-primary">
          All of it included, from £10.99 a month.
        </p>
        <div className="mt-9 flex">
          <ScrollButton to={site.anchors.included}>
            See what&rsquo;s included
          </ScrollButton>
        </div>
      </Reveal>
    </Section>
  );
}

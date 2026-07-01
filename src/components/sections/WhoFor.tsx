import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { CheckList } from "../primitives/CheckList";
import { forYou } from "../../data/content";

export function WhoFor() {
  return (
    <Section tone="soft" labelledBy="whofor-title">
      <Reveal>
        <Kicker className="mb-[22px]">Is this for you?</Kicker>
        <Heading id="whofor-title" level={2} size="h2">
          This community is <Em>for you if&hellip;</Em>
        </Heading>
        <CheckList className="mt-9 max-w-proseSm" items={forYou} />
        <p className="mt-[22px] max-w-[680px] text-lead font-light text-muted-foreground">
          If you saw yourself in even one of those, you belong here.
        </p>
      </Reveal>
    </Section>
  );
}

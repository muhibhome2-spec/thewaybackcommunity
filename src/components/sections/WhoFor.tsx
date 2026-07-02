import { Section } from "../primitives/Section";
import { Kicker } from "../primitives/Kicker";
import { Heading } from "../primitives/Heading";
import { forYou } from "../../data/content";

/**
 * Fast self-qualification checklist. Placed early in the feed — right
 * after proof — so visitors can confirm "this is for me" in a few
 * seconds rather than reading the full narrative first.
 */
export function WhoFor() {
  return (
    <Section variant="feed" labelledBy="whofor-title">
      <div className="rounded-card-lg border border-border bg-soft p-5 md:p-7">
        <Kicker className="mb-2">Quick check</Kicker>
        <Heading id="whofor-title" level={2} size="h3">
          This is for you if&hellip;
        </Heading>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 list-none p-0">
          {forYou.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm font-normal text-foreground leading-snug"
            >
              <span
                aria-hidden="true"
                className="mt-2 flex-none w-1.5 h-1.5 rounded-full bg-primary"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

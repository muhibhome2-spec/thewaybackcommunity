import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { forYou } from "../../data/content";

/**
 * Fast self-qualification checklist. Placed early in the feed — right
 * after proof — so visitors can confirm "this is for me" in a few
 * seconds rather than reading the full narrative first.
 */
export function WhoFor() {
  return (
    <Section variant="feed" labelledBy="whofor-title">
      <Reveal>
        <div className="rounded-card-lg border border-border bg-soft p-5 md:p-7">
          <Kicker id="whofor-title" as="span" className="mb-3">
            This is for you if&hellip;
          </Kicker>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 list-none p-0">
            {forYou.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 text-[15px] font-light text-foreground leading-snug"
              >
                <span
                  aria-hidden="true"
                  className="mt-[7px] flex-none w-1.5 h-1.5 rounded-full bg-primary"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}

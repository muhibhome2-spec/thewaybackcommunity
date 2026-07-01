import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { whyItWorks, forYou } from "../../data/content";

/**
 * Numbered "what to expect" block. Uses the WhyItWorks items as
 * community expectations and the ForYou list as the "is this for you"
 * strip below. Feed-column variant.
 */
export function Rules() {
  return (
    <Section variant="feed" labelledBy="rules-title">
      <Reveal>
        <Kicker className="mb-4">What to expect inside</Kicker>
        <Heading id="rules-title" level={2} size="h2">
          A book leaves you <Em>alone with it.</Em>
        </Heading>
        <p className="mt-5 max-w-[680px] text-lead font-light text-muted-foreground">
          Information is easy to find. Actually changing things at home is not.
          That is the difference here.
        </p>
      </Reveal>

      <ol className="mt-10 grid gap-6 md:grid-cols-2 list-none p-0">
        {whyItWorks.map((w, i) => (
          <Reveal key={w.title} delay={i * 60}>
            <div className="flex gap-4">
              <div className="flex-none w-10 h-10 rounded-full bg-clay-tint text-primary font-mono text-[13px] flex items-center justify-center leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-[clamp(19px,2.2vw,22px)] font-normal text-foreground tracking-[-0.01em]">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-[16px] font-light text-muted-foreground leading-relaxed">
                  {w.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <div className="mt-14 rounded-card-lg border border-border bg-soft p-6 md:p-8">
        <Kicker className="mb-3">This community is for you if&hellip;</Kicker>
        <ul className="mt-4 grid gap-2.5 list-none p-0">
          {forYou.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-[17px] font-light text-foreground leading-snug"
            >
              <span
                aria-hidden="true"
                className="mt-2 flex-none w-1.5 h-1.5 rounded-full bg-primary"
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[15px] font-light text-muted-foreground">
          If you saw yourself in even one of those, you belong here.
        </p>
      </div>
    </Section>
  );
}

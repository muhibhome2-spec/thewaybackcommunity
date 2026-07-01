import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Em, Heading } from "../primitives/Heading";
import { whyItWorks } from "../../data/content";

export function WhyItWorks() {
  return (
    <Section labelledBy="why-works-title">
      <Reveal>
        <Kicker className="mb-[22px]">Why this works when books don&rsquo;t</Kicker>
        <Heading id="why-works-title" level={2} size="h2">
          A book leaves you <Em>alone with it.</Em>
        </Heading>
        <p className="mt-[22px] max-w-[680px] text-lead font-light text-muted-foreground">
          Information is easy to find. Actually changing things at home is not.
          That is the difference here.
        </p>
      </Reveal>

      <dl className="mt-10 max-w-[860px] border-t border-border">
        {whyItWorks.map((w, i) => (
          <Reveal key={w.title} delay={i * 70}>
            <div className="grid gap-6 md:grid-cols-[230px_1fr] py-[22px] border-b border-border">
              <dt className="text-[clamp(20px,2.4vw,25px)] font-normal tracking-[-0.01em] text-foreground">
                {w.title}
              </dt>
              <dd className="text-[clamp(16px,2vw,19px)] font-light text-muted-foreground leading-relaxed">
                {w.description}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}

import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Heading } from "../primitives/Heading";
import { Button } from "../primitives/Button";
import { weeks } from "../../data/content";
import { site } from "../../config/site";

export function BehindTheScreen() {
  return (
    <Section tone="clay" labelledBy="bts-title">
      <Reveal>
        <Kicker className="mb-[22px]">A complete course, included free</Kicker>
        <Heading id="bts-title" level={2} size="display">
          Behind
          <br />
          the Screen
        </Heading>
        <p className="mt-6 max-w-[760px] text-course-sub font-light text-sub">
          A four-week masterclass in the world your teenager actually lives in.
          The phone, the culture, the language, all of it, finally made clear.
          A course parents would gladly pay for, yours at no extra cost.
        </p>
      </Reveal>

      <ol className="mt-12 max-w-prose list-none p-0">
        {weeks.map((w, i) => (
          <li
            key={w.label}
            className={
              "flex gap-[30px] items-baseline border-t border-[rgba(22,20,15,0.12)] py-6 " +
              (i === weeks.length - 1
                ? "border-b border-[rgba(22,20,15,0.12)]"
                : "")
            }
          >
            <Reveal delay={i * 70} className="contents">
              <span className="font-mono text-kicker tracking-[0.14em] uppercase text-clay min-w-[78px] flex-none">
                {w.label}
              </span>
              <div>
                <div className="text-h3-lg font-normal">{w.title}</div>
                <p className="mt-1.5 text-[clamp(16px,2vw,19px)] font-light text-sub leading-snug max-w-[640px]">
                  {w.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex">
        <Button variant="primary" to={site.anchors.join}>
          Unlock the masterclass
        </Button>
      </div>
    </Section>
  );
}

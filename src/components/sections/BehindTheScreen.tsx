import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { ScrollButton } from "../primitives/ScrollButton";
import { Badge } from "../ui/badge";
import { weeks } from "../../data/content";
import { site } from "../../config/site";

/**
 * Flagship-course highlight box. Feed-column: renders as a distinct
 * clay-tinted card within the reading flow, giving Behind the Screen
 * visible weight without stealing the width of the whole page.
 */
export function BehindTheScreen() {
  return (
    <Section variant="feed" labelledBy="bts-title">
      <div className="rounded-card-xl border border-clay-line/70 bg-claybg p-6 md:p-10">
        <Reveal>
          <div className="flex items-center gap-3 flex-wrap">
            <Kicker as="span">Included, free</Kicker>
            <Badge variant="soft" size="sm">4-week masterclass</Badge>
          </div>
          <h2
            id="bts-title"
            className="mt-3 text-2xl font-medium text-foreground"
          >
            Behind the Screen
          </h2>
          <p className="mt-4 max-w-measureSm text-base font-normal text-muted-foreground">
            A four-week masterclass in the world your teenager actually lives
            in. The phone, the culture, the language, all of it, finally made
            clear. A course parents would gladly pay for, yours at no extra
            cost.
          </p>
        </Reveal>

        <ol className="mt-8 grid gap-0 list-none p-0">
          {weeks.map((w, i) => (
            <li
              key={w.label}
              className={
                "grid gap-4 md:grid-cols-[96px_1fr] items-baseline py-4 " +
                (i === 0
                  ? "border-t border-foreground/15"
                  : "border-t border-foreground/10")
              }
            >
              <Reveal delay={i * 60} className="contents">
                <span className="font-mono text-xs uppercase text-primary">
                  {w.label}
                </span>
                <div>
                  <div className="text-lg font-medium text-foreground">
                    {w.title}
                  </div>
                  <p className="mt-1 text-sm font-normal text-muted-foreground max-w-measureSm">
                    {w.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex">
          <ScrollButton to={site.anchors.join}>Unlock the masterclass</ScrollButton>
        </div>
      </div>
    </Section>
  );
}

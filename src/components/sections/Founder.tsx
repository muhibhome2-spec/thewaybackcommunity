import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { Card, CardContent } from "../ui/card";
import { site } from "../../config/site";

/**
 * Host / founder card. Community pages typically anchor a bio to a
 * distinct card so visitors can see who is behind the group at a
 * glance while reading the main content.
 */
export function Founder() {
  return (
    <Section variant="feed" labelledBy="founder-title">
      <Reveal>
        <Kicker className="mb-4">Hosted by</Kicker>
        <Card className="bg-tint">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-none w-28 h-28 rounded-full overflow-hidden border border-border bg-primary flex items-center justify-center">
                {site.avatarUrl ? (
                  <img
                    src={site.avatarUrl}
                    alt="Portrait of Muhib Idris"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="text-[40px] font-medium tracking-wide text-primary-foreground"
                  >
                    MI
                  </span>
                )}
              </div>

              <div className="max-w-measureSm">
                <h2
                  id="founder-title"
                  className="text-lg font-medium text-foreground"
                >
                  Muhib Idris
                </h2>
                <p className="mt-2 font-mono text-xs uppercase text-primary">
                  Writer · Educator · Publisher
                </p>

                <p className="mt-4 text-base font-normal text-muted-foreground">
                  Fifteen years as a writer and educator, studying and teaching
                  across four continents &mdash; and one pattern he kept
                  meeting: bright, deeply loved teenagers quietly struggling,
                  and parents who did not know how to reach them. He had known
                  that distance from the inside. He knew it did not have to
                  stay shut.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </Section>
  );
}

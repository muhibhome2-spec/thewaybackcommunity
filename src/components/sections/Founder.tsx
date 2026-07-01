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
              <div className="flex-none w-[112px] h-[112px] rounded-full overflow-hidden border border-border bg-primary flex items-center justify-center">
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
                    className="text-[40px] font-normal tracking-wide text-primary-foreground"
                  >
                    MI
                  </span>
                )}
              </div>

              <div className="max-w-[560px]">
                <h2
                  id="founder-title"
                  className="text-[clamp(24px,3vw,32px)] font-normal text-foreground tracking-[-0.02em]"
                >
                  Muhib Idris
                </h2>
                <p className="mt-2 font-mono text-[12px] tracking-[0.1em] uppercase text-primary">
                  Writer · Educator · Publisher
                </p>

                <p className="mt-4 text-[16px] font-light text-muted-foreground leading-[1.6]">
                  Muhib has spent fifteen years as a writer and educator,
                  teaching, working with communities, and studying with scholars
                  of the Islamic tradition across four continents. He advises
                  charities and public figures, and leads retreats and seminars
                  around the world.
                </p>
                <p className="mt-3 text-[16px] font-light text-muted-foreground leading-[1.6]">
                  He built this community because he kept meeting the same
                  thing: bright, deeply loved teenagers quietly struggling, and
                  parents who would do anything for them but did not know how to
                  reach them. He had known that distance from the inside. And he
                  knew it did not have to stay shut.
                </p>

                <a
                  href={site.founderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 font-mono text-[12px] tracking-[0.08em] uppercase text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-tint rounded-sm"
                >
                  More about Muhib →
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </Section>
  );
}

import { Section } from "../primitives/Section";
import { Reveal } from "../primitives/Reveal";
import { Kicker } from "../primitives/Kicker";
import { site } from "../../config/site";

export function Founder() {
  return (
    <Section tone="tint" labelledBy="founder-title">
      <Reveal>
        <Kicker className="mb-[22px]">Why Muhib built this</Kicker>
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-[46px] items-start max-w-founder">
          <div className="flex-none w-[158px] h-[158px] rounded-full overflow-hidden border border-hairline bg-clay flex items-center justify-center">
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
                className="text-[52px] font-normal tracking-wide text-clay-ink"
              >
                MI
              </span>
            )}
          </div>

          <div className="max-w-[640px]">
            <h2 id="founder-title" className="text-h3-xl font-normal">
              Muhib Idris
            </h2>
            <p className="mt-2.5 font-mono text-kicker tracking-[0.1em] uppercase text-clay">
              Writer · Educator · Publisher
            </p>

            <p className="mt-5 text-[clamp(17px,2.1vw,20px)] font-light text-sub leading-[1.62]">
              Muhib has spent fifteen years as a writer and educator, teaching,
              working with communities, and studying with scholars of the
              Islamic tradition across four continents. He has advised charities
              and public figures, and leads retreats and seminars around the
              world.
            </p>
            <p className="mt-4 text-[clamp(17px,2.1vw,20px)] font-light text-sub leading-[1.62]">
              But the work that became The Way Back started somewhere quieter.
              Working with young people, he kept meeting the same thing: bright,
              deeply loved teenagers quietly struggling, and parents who would
              do anything for them but did not know how to reach them. He had
              known that distance from the inside, as a young person who once
              shut the door himself. And he knew it did not have to stay shut.
            </p>
            <p className="mt-4 text-[clamp(17px,2.1vw,20px)] font-light text-sub leading-[1.62]">
              So he built the thing he wished those families had. A place to
              understand, and a community so that no one ever faces it alone.
            </p>

            <a
              href={site.founderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 font-mono text-kicker tracking-[0.08em] uppercase text-clay hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-tint rounded-sm"
            >
              More about Muhib →
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

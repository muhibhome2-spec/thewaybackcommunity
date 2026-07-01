import { Container } from "../primitives/Container";
import { ScrollButton } from "../primitives/ScrollButton";
import { Kicker } from "../primitives/Kicker";
import { Em } from "../primitives/Heading";
import { heroCredentials } from "../../data/content";
import { site } from "../../config/site";

/**
 * Above-the-fold pitch. Single primary CTA with risk-reversal microcopy
 * directly under it; credentials sit below as a quiet authority strip.
 */
export function Hero() {
  return (
    <header
      id="top"
      className="text-center pt-[clamp(56px,9vw,108px)] pb-[clamp(50px,7vw,84px)]"
    >
      <Container>
        <div className="animate-rise [animation-delay:20ms]">
          <Kicker>The Way Back Community</Kicker>
        </div>
        <h1 className="animate-rise [animation-delay:100ms] mt-[22px] text-h1 font-light text-foreground">
          Nobody fights for their
          <br />
          teenager <Em>alone.</Em>
        </h1>
        <p className="animate-rise [animation-delay:180ms] mx-auto mt-[26px] max-w-narrow text-sub font-light text-muted-foreground">
          A membership for parents who want to understand the digital world,
          reconnect with their teenager, and never navigate modern parenting on
          their own.
        </p>
        <div className="animate-rise [animation-delay:260ms] mt-9 flex flex-wrap justify-center gap-3.5">
          <ScrollButton to={site.anchors.join} size="lg">
            Join the community
          </ScrollButton>
        </div>
        <p className="animate-rise [animation-delay:300ms] mt-3 font-mono text-[12px] uppercase tracking-[0.1em] text-meta">
          From £10.99 / month · cancel any time
        </p>
        <ul className="animate-rise [animation-delay:340ms] mt-[34px] flex flex-wrap justify-center gap-x-[26px] gap-y-2.5">
          {heroCredentials.map((c, i) => (
            <li
              key={c}
              className={
                "relative font-mono text-[12px] tracking-[0.1em] uppercase text-meta " +
                (i < heroCredentials.length - 1
                  ? "after:content-[''] after:absolute after:right-[-14px] after:top-1/2 after:w-[3px] after:h-[3px] after:-translate-y-1/2 after:rounded-full after:bg-meta/60"
                  : "")
              }
            >
              {c}
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}

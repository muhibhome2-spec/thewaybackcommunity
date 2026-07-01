import { Container } from "../primitives/Container";
import { Kicker } from "../primitives/Kicker";
import { Em } from "../primitives/Heading";
import { Badge } from "../ui/badge";

/**
 * Compact top-of-page banner. Type-driven — no cover image — so the
 * brand palette does the talking. Sits above the two-column layout.
 */
export function CommunityBanner() {
  return (
    <header id="top" className="bg-claybg border-b border-border">
      <Container className="pt-[clamp(48px,7vw,80px)] pb-[clamp(40px,5vw,64px)]">
        <div className="animate-rise [animation-delay:20ms] flex flex-wrap items-center gap-2">
          <Kicker as="span">The Way Back Community</Kicker>
          <span aria-hidden="true" className="text-meta">·</span>
          <Badge variant="outline" size="sm" className="border-foreground/25 text-meta">
            Private group
          </Badge>
          <Badge variant="soft" size="sm">Founding members</Badge>
        </div>

        <h1 className="animate-rise [animation-delay:100ms] mt-6 max-w-[820px] text-[clamp(38px,6.4vw,72px)] font-light tracking-[-0.03em] leading-[1.05] text-foreground">
          Nobody fights for their teenager <Em>alone.</Em>
        </h1>

        <p className="animate-rise [animation-delay:180ms] mt-5 max-w-[640px] text-lead font-light text-muted-foreground">
          A membership for parents who want to understand the digital world,
          reconnect with their teenager, and never navigate modern parenting on
          their own.
        </p>

        <ul className="animate-rise [animation-delay:260ms] mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {[
            "Live coaching every two weeks",
            "Private WhatsApp community",
            "90-min masterclass monthly",
            "Behind the Screen course included",
          ].map((c, i, arr) => (
            <li
              key={c}
              className={
                "relative font-mono text-[12px] tracking-[0.1em] uppercase text-meta " +
                (i < arr.length - 1
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

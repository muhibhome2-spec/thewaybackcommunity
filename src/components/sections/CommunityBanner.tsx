import { CalendarClock, MessageCircle, Video, BookOpen } from "lucide-react";
import { Container } from "../primitives/Container";
import { Kicker } from "../primitives/Kicker";
import { Em } from "../primitives/Heading";
import { Badge } from "../ui/badge";

const HIGHLIGHTS = [
  { icon: CalendarClock, label: "Live coaching every two weeks" },
  { icon: MessageCircle, label: "Private WhatsApp community" },
  { icon: Video, label: "90-min masterclass monthly" },
  { icon: BookOpen, label: "Behind the Screen course included" },
] as const;

/**
 * Compact top-of-page banner. Type-driven — no cover image — so the
 * brand palette does the talking. Sits above the two-column layout.
 */
export function CommunityBanner() {
  return (
    <header id="top" className="bg-claybg border-b border-border">
      <Container className="pt-[clamp(56px,45.1px+2.73vw,80px)] pb-[clamp(40px,29.1px+2.73vw,64px)]">
        <div className="animate-rise [animation-delay:20ms] flex flex-wrap items-center gap-2">
          <Kicker as="span" className="mr-1">The Way Back Community</Kicker>
          <Badge variant="outline" size="sm" className="border-foreground/25 text-meta">
            Private group
          </Badge>
          <Badge variant="soft" size="sm">Founding members</Badge>
        </div>

        <h1 className="animate-rise [animation-delay:100ms] mt-6 max-w-measureLg text-3xl font-normal text-foreground">
          Nobody fights for their teenager <Em>alone.</Em>
        </h1>

        <p className="animate-rise [animation-delay:180ms] mt-5 max-w-measureSm text-md font-normal text-muted-foreground">
          A membership for parents who want to understand the digital world,
          reconnect with their teenager, and never navigate modern parenting on
          their own.
        </p>

        <ul className="animate-rise [animation-delay:260ms] mt-8 flex flex-wrap gap-2 list-none p-0">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Badge
                variant="outline"
                className="gap-1.5 border-foreground/12 bg-background/70 px-3.5 py-2 font-sans text-xs font-medium normal-case tracking-normal text-foreground"
              >
                <Icon aria-hidden="true" className="size-3.5 text-primary" />
                {label}
              </Badge>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
}

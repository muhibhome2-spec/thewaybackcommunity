import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tick } from "../primitives/Tick";
import { included } from "../../data/content";
import { site } from "../../config/site";

/**
 * Sticky right-rail membership card. Anchor of the community-landing
 * pattern: price, badges, benefits, primary CTA — always visible while
 * the visitor reads the left column.
 */
export function JoinCard() {
  return (
    <aside
      aria-label="Join the community"
      id={site.anchors.join}
      className="lg:sticky lg:top-24 h-fit"
    >
      <Card className="rounded-card-xl border border-border shadow-card">
        <CardHeader className="gap-4">
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-mono text-[13px] tracking-wide"
            >
              MI
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-meta">
                Membership
              </div>
              <div className="text-[16px] font-normal text-foreground truncate">
                The Way Back Community
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            <Badge variant="outline" size="sm" className="border-foreground/20 text-meta">
              Private
            </Badge>
            <Badge variant="outline" size="sm" className="border-foreground/20 text-meta">
              Monthly
            </Badge>
            <Badge variant="soft" size="sm">
              First 100
            </Badge>
          </div>

          <div>
            <div className="flex items-baseline gap-2 font-light leading-none tracking-[-0.03em]">
              <span className="text-[44px] text-foreground">£10.99</span>
              <span className="text-[15px] text-meta">/ month</span>
            </div>
            <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">
              Cancel any time. Yearly £109 &mdash; two months free.
            </p>
          </div>
        </CardHeader>

        <CardContent className="pt-4">
          <Button asChild size="lg" className="w-full">
            <a href={site.joinUrl} target="_blank" rel="noopener noreferrer">
              Join the community
            </a>
          </Button>
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-meta">
            Founding price for the first 100
          </p>
        </CardContent>

        <CardFooter className="flex-col items-stretch gap-3 pt-2 border-t border-border/70 mt-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground pt-3">
            What&rsquo;s included
          </p>
          <ul className="grid gap-2.5 list-none p-0">
            {included.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2.5 text-[14px] font-light text-foreground leading-snug"
              >
                <span aria-hidden="true" className="mt-[3px] flex-none text-primary">
                  <Tick size={16} />
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </CardFooter>
      </Card>
    </aside>
  );
}

import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { StickyMobileCTA } from "./components/layout/StickyMobileCTA";
import { Container } from "./components/primitives/Container";

import { CommunityBanner } from "./components/sections/CommunityBanner";
import { JoinCard } from "./components/sections/JoinCard";
import { WhatThisIs } from "./components/sections/WhatThisIs";
import { AboutBlock } from "./components/sections/AboutBlock";
import { Method } from "./components/sections/Method";
import { BehindTheScreen } from "./components/sections/BehindTheScreen";
import { Features } from "./components/sections/Features";
import { SocialProof } from "./components/sections/SocialProof";
import { WhoFor } from "./components/sections/WhoFor";
import { Founder } from "./components/sections/Founder";
import { FAQ } from "./components/sections/FAQ";
import { Pricing } from "./components/sections/Pricing";
import { FinalCTA } from "./components/sections/FinalCTA";

/**
 * Community-membership landing composition.
 *
 * 1. Compact banner at the top (private / paid / meta chips).
 * 2. Two-column body: prose feed on the left, sticky join card on the
 *    right. On mobile the join card renders directly under the banner
 *    so the price and CTA land before the reading flow.
 *
 * Feed order is front-loaded toward clarity and what converts: a
 * literal one-glance definition (what it is / what you get / what it
 * costs) comes first, then proof, then the concrete offer in detail,
 * narrative and trust content follow, objections are handled last.
 * Most visitors only scan the top of a page, so the highest-value
 * content sits there.
 *
 * 3. Full pricing panel and final CTA sit as bands underneath.
 */
export function App() {
  return (
    <div className="bg-background text-foreground pb-24 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-pill"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <CommunityBanner />

        <Container className="py-10 md:py-16">
          <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="order-2 lg:order-1 divide-y divide-border/80">
              <WhatThisIs />
              <SocialProof />
              <WhoFor />
              <Features />
              <BehindTheScreen />
              <AboutBlock />
              <Method />
              <Founder />
              <FAQ />
            </div>
            <div className="order-1 lg:order-2">
              <JoinCard />
            </div>
          </div>
        </Container>

        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

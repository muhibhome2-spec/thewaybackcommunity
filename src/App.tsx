import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { StickyMobileCTA } from "./components/layout/StickyMobileCTA";

import { Hero } from "./components/sections/Hero";
import { Problem } from "./components/sections/Problem";
import { Cost } from "./components/sections/Cost";
import { Future } from "./components/sections/Future";
import { Solution } from "./components/sections/Solution";
import { Method } from "./components/sections/Method";
import { Features } from "./components/sections/Features";
import { BehindTheScreen } from "./components/sections/BehindTheScreen";
import { WhyItWorks } from "./components/sections/WhyItWorks";
import { Founder } from "./components/sections/Founder";
import { SocialProof } from "./components/sections/SocialProof";
import { WhoFor } from "./components/sections/WhoFor";
import { FAQ } from "./components/sections/FAQ";
import { Pricing } from "./components/sections/Pricing";
import { FinalCTA } from "./components/sections/FinalCTA";

/**
 * Page composition. Section order is the conversion narrative:
 * pain → cost → future → solution → method → what you get → flagship
 * course → why it works → founder → social proof → fit → objections
 * → offer → final ask.
 */
export function App() {
  return (
    <div className="bg-paper text-ink pb-[84px] md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-pill"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Problem />
        <Cost />
        <Future />
        <Solution />
        <Method />
        <Features />
        <BehindTheScreen />
        <WhyItWorks />
        <Founder />
        <SocialProof />
        <WhoFor />
        <FAQ />
        <Pricing />
        <FinalCTA />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

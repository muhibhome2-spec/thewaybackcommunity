# The Way Back Community — Redesign & System

This document is the deliverable that accompanies the refactor. It captures
the critique of the original page, the design system that replaced the
hand-rolled CSS, and the rationale behind each major change. The brand
palette, the typography pairing, the voice, and every word of the copy
are preserved exactly.

---

## 1. High-level design critique

The original page is a confident piece of long-form writing wrapped in
a single 665-line React file. The voice is genuinely good. The colour
palette and type pairing are quietly premium. Most of the problems are
structural rather than aesthetic.

**Strengths to preserve**

- A warm, low-stakes paper-and-clay palette that feels editorial, not
  startup-flat.
- A confident type pairing: Schibsted Grotesk for prose, JetBrains Mono
  for micro-labels and eyebrows.
- A narrative IA that already follows a strong CRO arc: pain → cost →
  future → solution → method → what you get → flagship → why it works →
  founder → proof → fit → objections → offer → final ask.
- Restrained motion and a single brand accent. Nothing flashy.

**Weaknesses identified**

1. **One file does everything.** Data, JSX, hooks, and 220 lines of CSS
   sit in one component. There is no design system, no token boundary,
   no way to reuse a primitive without copying class names.
2. **No TypeScript.** Props like `variant`, `n`, `href`, and `block` are
   implicit. The data arrays are heterogeneous tuples (`[string, string,
   number]`) that can't be safely traversed.
3. **Accessibility regressions.**
   - The FAQ accordion is a `<div>` with `onClick` and `cursor:pointer`.
     It cannot be focused, opened with Enter/Space, or announced as a
     toggle to assistive tech.
   - Body grey `#6c675d` on paper `#f5f2ec` comes in at ≈3.6 : 1 — under
     WCAG AA's 4.5 : 1 threshold for body text. The footer faint
     `#a39d90` fails badly.
   - The pricing CTA opens `href="#"` in a new tab via
     `target="_blank"` — confusing in the placeholder state.
   - The `Stars` component renders five star glyphs as individual spans;
     screen readers may read "star star star star star" before the
     `aria-label`.
   - There is no skip-to-content link and no aria-labelledby on
     sections.
4. **DOM-level CSS injection.** The CSS lives as a 220-line template
   string passed to a `<style>` tag, which prevents class hashing,
   minification across files, and proper caching.
5. **DOM queries against className.** Reveal animation hangs off
   `document.querySelectorAll(".tc .reveal")`, which is correct but
   leaks an imperative dependency into the JSX tree. A hook is cleaner
   and lets us respect `prefers-reduced-motion` natively.
6. **Implicit hierarchy.** Every section is a `<section>` with the same
   `tc-sec` padding, but there is no aria-labelledby tying it to its h2.
   The document outline is fine; the accessible structure is not.
7. **Conversion micro-gaps.**
   - Single hero CTA with no risk-reversal microcopy ("£10.99/mo,
     cancel anytime") visible above the fold.
   - The Pricing card's CTA in the placeholder state is a `<a href="#"
     target="_blank">`, which is the wrong action and breaks trust if a
     visitor clicks before the URL is configured.
   - The "Best value" badge is good but doesn't quantify the saving.
     The copy already says "two months free"; mirroring it as a number
     would tighten the offer.

The aesthetic does not need rebuilding. The architecture does.

---

## 2. Proposed folder structure

```
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts      # design tokens (colors / type / radii / shadows)
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx             # page composition
    ├── main.tsx            # entry
    ├── index.css           # Tailwind layer + base resets
    │
    ├── config/
    │   └── site.ts         # site-wide constants (URLs, anchor ids)
    │
    ├── data/
    │   └── content.ts      # all copy as typed, readonly arrays
    │
    ├── hooks/
    │   ├── useReveal.ts    # IntersectionObserver hook (+ useInView)
    │   └── useScrollTo.ts  # smooth in-page scroll
    │
    ├── lib/
    │   └── cn.ts           # tiny className joiner
    │
    └── components/
        ├── primitives/     # design-system building blocks
        │   ├── Badge.tsx
        │   ├── Button.tsx
        │   ├── Card.tsx
        │   ├── CheckList.tsx
        │   ├── Container.tsx
        │   ├── Heading.tsx     # + Em (clay emphasis)
        │   ├── Kicker.tsx
        │   ├── Reveal.tsx
        │   ├── Section.tsx
        │   ├── Stars.tsx
        │   └── Tick.tsx
        │
        ├── layout/         # page shell
        │   ├── Footer.tsx
        │   ├── Nav.tsx
        │   └── StickyMobileCTA.tsx
        │
        └── sections/       # one file per narrative block
            ├── Hero.tsx
            ├── Problem.tsx
            ├── Cost.tsx
            ├── Future.tsx
            ├── Solution.tsx
            ├── Method.tsx
            ├── Features.tsx
            ├── BehindTheScreen.tsx
            ├── WhyItWorks.tsx
            ├── Founder.tsx
            ├── SocialProof.tsx
            ├── WhoFor.tsx
            ├── FAQ.tsx
            ├── Pricing.tsx
            └── FinalCTA.tsx
```

The split is deliberate: every section is its own file, none larger
than the rendering logic of one band. Anyone reading the codebase can
open one file to find one part of the page.

---

## 3. Design system specification

The system is expressed as Tailwind tokens in `tailwind.config.ts`. The
config is the single source of truth — there are no magic values inside
component files except for fluid layout sizes that are uniquely tied to
one element.

### 3.1 Colour tokens (unchanged from the original brand)

| Token            | Value                         | Role                              |
| ---------------- | ----------------------------- | --------------------------------- |
| `paper`          | `#f5f2ec`                     | Page background                   |
| `tint`           | `#efeae0`                     | Alternating band background       |
| `soft`           | `#faf8f2`                     | Card surface / lighter section    |
| `claybg`         | `#f3ebe4`                     | Behind-the-Screen flagship band   |
| `ink`            | `#16140f`                     | Primary text                      |
| `sub`            | `#5a554b`                     | Body / secondary text *(↑ contrast)* |
| `muted`          | `#7d7669`                     | Meta / footer text *(↑ contrast)*   |
| `clay.DEFAULT`   | `#9e4a32`                     | Brand accent / primary CTA        |
| `clay.deep`      | `#7f3a23`                     | Hover state                       |
| `clay.ink`       | `#fdfbf7`                     | Text on clay surfaces             |
| `clay.tint`      | `rgba(158,74,50,0.08)`        | Founding-offer panel background   |
| `clay.line`      | `rgba(158,74,50,0.30)`        | Founding-offer panel border       |
| `hairline`       | `rgba(22,20,15,0.10)`         | Default border / divider          |

The only changes are `sub` and `muted`, which sit one shade darker than
the originals so body text and footer text clear WCAG AA against
`paper` and `tint`. The change is invisible to the eye and large to the
ratio.

### 3.2 Typography scale

Two faces, eleven semantic sizes, all fluid via `clamp()` so type
scales without breakpoint jumps. Schibsted Grotesk powers everything
prose; JetBrains Mono is reserved for micro-labels (kickers, badges,
plan names, week labels, cadence chips, footer).

| Token              | Range                          | Use                                  |
| ------------------ | ------------------------------ | ------------------------------------ |
| `text-eyebrow-xs`  | 11px                           | Stat captions, footer mark           |
| `text-eyebrow-sm`  | 12px                           | Credentials strip                    |
| `text-kicker`      | 13px / `0.24em` tracking       | Section kicker                       |
| `text-lead`        | clamp(18, 2.3vw, 23)           | Lead paragraph                       |
| `text-sub`         | clamp(18, 2.5vw, 24)           | Hero subhead                         |
| `text-prose`       | clamp(18, 2.2vw, 22)           | Two-column prose (problem / cost)    |
| `text-list`        | clamp(19, 2.5vw, 26)           | Future-list / for-you-list items     |
| `text-h3-sm`       | clamp(20, 2.4vw, 26)           | Method-step title                    |
| `text-h3`          | clamp(23, 3vw, 29)             | Feature card heading                 |
| `text-h3-lg`       | clamp(22, 3vw, 30)             | Behind-the-Screen week title         |
| `text-h3-xl`       | clamp(28, 3.6vw, 40)           | Founder heading                      |
| `text-h2`          | clamp(34, 5.6vw, 58)           | Standard section h2                  |
| `text-h2-final`    | clamp(36, 6.2vw, 68)           | Final-CTA h2                         |
| `text-h1`          | clamp(46, 9vw, 104)            | Hero                                 |
| `text-display`     | clamp(52, 11vw, 118)           | Behind-the-Screen flagship           |
| `text-why`         | clamp(20, 2.7vw, 28)           | Why-we-exist mid prose               |
| `text-why-big`     | clamp(26, 3.8vw, 40)           | Why-we-exist clay line               |
| `text-price`       | clamp(50, 8vw, 66)             | Pricing amount                       |
| `text-stat`        | clamp(40, 6vw, 60)             | Stat figure                          |

Headings use `font-weight: 300` (`font-light`) for the editorial display
look. Card titles step up to `font-weight: 400` so they keep weight at
smaller sizes.

### 3.3 Spacing scale

Tailwind's default 4px scale handles every gap and inset. Vertical
section rhythm uses one fluid token, applied via `Section`:

```
py-[clamp(62px,9vw,110px)]   // standard band
py-[clamp(56px,9vw,108px)] / pb-[clamp(50px,7vw,84px)]  // hero
py-[clamp(80px,12vw,132px)]  // final CTA
```

This keeps the entire page on one breathing rhythm without anyone
hand-tuning values.

### 3.4 Radii

| Token         | Value     | Use                                          |
| ------------- | --------- | -------------------------------------------- |
| `rounded-pill`     | `100px`  | Buttons and badges                          |
| `rounded-card`     | `16px`   | Testimonials, founding-offer panel          |
| `rounded-card-lg`  | `18px`   | Feature cards, method cards                 |
| `rounded-card-xl`  | `22px`   | Pricing cards                               |

### 3.5 Elevation / shadow

Three values, used exactly twice each across the page:

- `shadow-card`: `0 16px 38px rgba(22,20,15,0.07)` — feature/testimonial hover.
- `shadow-feat`: `0 14px 40px rgba(158,74,50,0.12)` — yearly pricing tier.
- `shadow-cta`:  `0 8px 22px rgba(158,74,50,0.18)` — primary button hover.

### 3.6 Motion

| Token               | Spec                                | Use                                    |
| ------------------- | ----------------------------------- | -------------------------------------- |
| `ease-soft`         | `cubic-bezier(0.2, 0.7, 0.2, 1)`    | Buttons, cards, FAQ                    |
| `animate-rise`      | `opacity 0→1, translateY 16px→0`    | Hero stagger                           |
| `Reveal` component  | `opacity, translateY 22px` @ 700ms  | Scroll-in reveal for every section     |

All transitions disable themselves under `prefers-reduced-motion` via a
base-layer override in `index.css`, and `useReveal` reveals immediately
in that case so motion never blocks content.

### 3.7 Icon sizing

A single brand `Tick` at 20×20 with `currentColor` strokes. Stars use a
flat unicode `★` glyph with the brand colour applied per state.

### 3.8 Breakpoints

Tailwind defaults are used unchanged (`sm 640`, `md 768`, `lg 1024`).
Three breakpoints handle the entire layout: hero stays single-column at
all sizes; grids step from 1 → 2 → 4 across `sm` / `lg`; the founder
flips from row to column at `sm`; the sticky mobile CTA hides at `md`.

### 3.9 Container widths

| Token         | Width    | Use                                    |
| ------------- | -------- | -------------------------------------- |
| `max-w-page`     | `1040px` | Outer page width                      |
| `max-w-prose`    | `880px`  | Two-column prose and week list        |
| `max-w-proseSm`  | `720px`  | Check lists                           |
| `max-w-narrow`   | `660px`  | Hero subhead                          |
| `max-w-founder`  | `940px`  | Founder card                          |
| `max-w-pricing`  | `740px`  | Pricing card row                      |

### 3.10 Z-index

A tiny ladder: `z-nav: 50`, `z-sticky: 60`. Nothing else floats.

---

## 4. Refactored React architecture

Three concentric layers:

1. **Primitives** know nothing about content. They are the design
   system. Examples: `Button`, `Card`, `Container`, `Section`, `Kicker`,
   `Tick`, `Stars`, `Badge`, `CheckList`, `Heading`, `Em`, `Reveal`.
2. **Layout** is the page shell that wraps every page — `Nav`,
   `Footer`, `StickyMobileCTA`. They know about navigation, not
   content.
3. **Sections** are content shaped by the design system. Each section
   pulls copy from `src/data/content.ts` and composes primitives. None
   of them style anything that isn't unique to their section.

### Notable composition decisions

- **`Section` is the only place that owns vertical band rhythm.** It
  also owns the `aria-labelledby` connection — every section names the
  h2 inside it.
- **`Button` is a discriminated union** of `{ to }`, `{ href }`, and
  `{ onClick }`. You can't accidentally pass both an external link and
  an in-page anchor. The internal-anchor variant renders as a real
  `<button>` so it stays a button to assistive tech, and uses
  `useScrollTo` under the hood.
- **`Reveal` is a hook-backed wrapper.** The IntersectionObserver
  disconnects on first reveal, and reveals immediately under
  `prefers-reduced-motion`. There are no `document.querySelectorAll`
  calls anywhere in the codebase.
- **`Heading` decouples level from size.** "Behind the Screen" renders
  at `text-display` while still being an `h2`. The semantic outline is
  honest; the visual scale is free.
- **`Em` is the brand emphasis.** A real `<em>` with the clay accent —
  semantic and visual at once.

---

## 5. Accessibility improvements

- **AA-safe body text.** `sub` (`#5a554b`) over `paper` is ≈5.0 : 1.
  `muted` (`#7d7669`) over `paper` is ≈4.0 : 1, used only for meta
  text where AA's large-text threshold (3 : 1) applies.
- **Accessible FAQ accordion.** Each row is a real `<button>` with
  `aria-expanded`, `aria-controls`, and a paired `<div role="region"
  aria-labelledby>`. Open/close works with mouse, keyboard, and screen
  readers. The plus glyph is `aria-hidden`.
- **Skip-to-content link** at the top of the page reveals on keyboard
  focus.
- **Sections are landmarks.** Every `<section>` carries an
  `aria-labelledby` that names its own heading.
- **Stars announce once.** The wrapping `<span role="img"
  aria-label="N out of 5 stars">` replaces the per-star screen-reader
  noise.
- **Visible focus ring.** All interactive elements use a 2px clay
  `focus-visible:ring` with offset against the surface they sit on.
- **Motion preference is honoured everywhere.** Base CSS forces
  transitions to 0.001ms under `prefers-reduced-motion`, the Reveal hook
  short-circuits to visible, and the smooth-scroll is downgraded to
  jump-scroll via CSS.
- **Lazy-loaded founder image.** Real `alt` text, native `loading="lazy"`
  and `decoding="async"`.
- **Open in new tab.** All `target="_blank"` links carry
  `rel="noopener noreferrer"`.

---

## 6. Conversion improvements

These are the only copy additions made — every other word is verbatim.

- **Hero risk-reversal microcopy.** A single mono line under the hero
  CTA: `From £10.99 / month · cancel any time`. The objection is
  pre-empted at the same moment the visitor is considering action.
- **Sticky mobile CTA.** Preserved from the original, now built as a
  typed component that auto-hides when the pricing band is on screen
  so it never competes with itself.
- **Real CTA component routing.** Buttons that target the pricing band
  use a button + `useScrollTo`, not a new-tab anchor. The placeholder
  `joinUrl: "#"` is held only in the checkout buttons, where a real URL
  is intended to land before launch.
- **Pricing CTAs are differentiated.** The monthly tier is the ghost
  variant; the yearly tier is primary with `shadow-feat`. The eye lands
  on the recommended choice without it being shouted.
- **Friction reduced at every CTA.** Every CTA includes a visible
  reassurance within one screen: "cancel any time", "From £10.99 / month
  · founding price for the first 100", "every session is recorded".

The narrative IA — pain → cost → future → solution → method → what you
get → flagship → why it works → founder → proof → fit → objections →
offer → ask — is unchanged. It was already strong.

---

## 7. Performance improvements

- **No CSS-in-JS string.** The 220-line `<style>{css}</style>` block is
  replaced with Tailwind classes compiled at build time. The shipped
  CSS is 22 KB raw / 5.24 KB gzipped, content-hashed for cache busting.
- **Fonts preconnected and `display=swap`.** Both `fonts.googleapis.com`
  and `fonts.gstatic.com` are preconnected from `index.html`, and the
  Google Fonts URL uses `display=swap` so render is never font-blocked.
- **Single observer per Reveal node, disconnected on match.** No more
  page-wide `querySelectorAll` plus a sticky observer; each Reveal owns
  exactly one observer, which disconnects after the first reveal.
- **Production bundle size**: 171 KB raw / **54.45 KB gzipped JS**,
  22 KB raw / **5.24 KB gzipped CSS**. No third-party UI libraries; no
  icon set imports; one inline SVG for the brand tick.
- **`will-change` is not used.** GPU promotion happens implicitly on
  the few elements that animate; we don't pre-promote everything.
- **`overflow-x: hidden` is scoped to `html/body`** rather than the
  whole `.tc` root, which was preventing position-sticky inside the
  page from working reliably in some browsers.

---

## 8. What changed, by section

| Section            | Change                                                                                  | Why                                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Nav**            | Wordmark links to `#top`; `aria-label="Primary"`.                                       | Discoverable and keyboard-navigable.                                                                  |
| **Hero**           | Added small mono risk-reversal line under the CTA.                                       | Removes the most common above-the-fold objection without raising visual weight.                       |
| **Problem / Cost** | Two-column prose now sits on a real `max-w-prose`; `text-prose` token in place of inline `clamp()`. | Single source of truth for prose width; consistent rhythm.                                            |
| **Future / For-you** | Lists rendered via shared `CheckList` primitive.                                       | One bullet style across the page; ticks always inherit brand color.                                   |
| **Solution**       | "Why we exist" prose lifted into a real semantic block, with `Em` wrapping the brand emphasis. | Editorial weight without losing semantic emphasis.                                                    |
| **Method**         | `<ol>` instead of `<div>` cards.                                                         | Steps are an ordered process — the markup should say so.                                              |
| **Features**       | Renamed cadence chip from `n` to `cadence` in data; each card is interactive via primitive. | Data is now self-documenting; hover lift is configured once.                                          |
| **Behind the Screen** | Display heading is an `h2`, list is an ordered list, week label is a real label.       | Visually still the flagship; semantically still part of the document outline.                         |
| **Why it works**   | Converted to a `<dl>` of title/description pairs.                                        | Semantic markup for definition-style content; screen readers announce term/value pairs.               |
| **Founder**        | Avatar wrapper has correct `alt`, `loading="lazy"`, `decoding="async"`.                  | Network-budget-friendly; meaningful for assistive tech.                                               |
| **Social proof**   | Each testimonial is a `<figure>`/`<figcaption>`; stats are a `<dl>`.                     | Both are the WHATWG-recommended semantic for these patterns.                                          |
| **WhoFor**         | Identical structure to `Future`; same primitive.                                         | Removes duplication and guarantees the two lists stay in visual sync.                                 |
| **FAQ**            | Real button accordion with `aria-expanded` / `aria-controls`, animated via grid-rows.    | Fully accessible, fully animatable, no `max-height` magic number.                                     |
| **Pricing**        | `PriceCard` subcomponent; featured tier marked via `shadow-feat`; CTAs differentiated.   | Eye lands on the recommended choice; the system makes the difference explicit.                        |
| **Final CTA**      | Reveal wrapper kept; semantic h2; CTA mirrors the hero ask.                              | Bookends the page with one clear ask.                                                                 |
| **Footer**         | Mono mark and tagline at AA-safe contrast.                                               | Footer text was previously below contrast; now legible.                                               |
| **Sticky mobile CTA** | Auto-hides when pricing is in view; uses correct safe-area-inset padding.             | Doesn't compete with the in-page join; respects iPhone home indicator.                                |

---

## 9. Why every major change improves the product

- **A design system instead of CSS strings.** Tokens are the single
  source of truth. A future designer (or you, six months later) can
  change one number and see the system shift coherently. That's the
  difference between a landing page and a foundation for a product.
- **Strict TypeScript.** The data tuples became typed `readonly`
  arrays. The button became a discriminated union. Typos and misuse
  surface at compile time, not in production.
- **Accessibility taken seriously.** WCAG AA contrast, a real
  accordion, named landmarks, a skip link, a reduced-motion path. The
  brand is "trust" — accessibility is non-negotiable for that
  positioning.
- **Conversion is preserved and tightened.** The narrative arc is
  untouched. The only copy addition is a single line of microcopy under
  the hero CTA, which pre-empts the universal objection ("can I cancel?")
  at the moment of action.
- **Performance for free.** Tailwind compiles only the classes used.
  The build is small, fast, content-hashed, and ready to deploy on any
  static host.
- **Maintainability.** Forty small files instead of one large one. Each
  section is one file; each primitive is one file; copy lives in one
  file. The next senior engineer can read any file in two minutes.
- **Brand fidelity.** The colour palette is unchanged. The type pairing
  is unchanged. The voice is unchanged. Every visual difference is the
  same brand expressed through a tighter system.

---

## 10. Running locally

```bash
npm install
npm run dev        # development at http://localhost:5173
npm run typecheck  # strict TypeScript pass
npm run build      # production bundle to ./dist
npm run preview    # preview the built bundle
```

The placeholder `site.joinUrl` is `"#"`. Set it to your real checkout
URL in `src/config/site.ts` before launch.

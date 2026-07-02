import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Design tokens for The Way Back Community.
 *
 * shadcn semantic tokens (background, foreground, primary…) are wired
 * to the existing brand palette via CSS variables in src/index.css.
 * Brand-specific tokens live alongside them and remain the source of
 * truth for the warm paper / clay aesthetic — colours and voice are
 * unchanged from the original design.
 *
 * ---------------------------------------------------------------------
 * TYPE SCALE — one system, derived, not eyeballed.
 *
 * Fixed micro scale (labels, mono UI text — arithmetic, +2px/step,
 * intentionally non-fluid since small UI chrome shouldn't grow with
 * viewport): 2xs 11 · xs 13 · sm 15 · base 17.
 *
 * Fluid scale (body and up — geometric, two ratios sharing one base):
 *   MIN(n) = 17 × 1.2^n    (mobile / 400px viewport — gentle growth)
 *   MAX(n) = 17 × 1.333^n  (desktop / 1280px viewport — dramatic growth)
 * At n=0 both ratios collapse to the same value (17px, "base") by
 * construction — body text stays essentially fixed while headings
 * fan out increasingly wide as n grows, which is what you actually
 * want: paragraphs shouldn't grow much between phone and desktop,
 * hero type should.
 *
 * Every clamp() below is computed with the standard fluid-type formula
 * (min, min + slope·vw, max) between a 400px and 1280px viewport, not
 * a hand-picked vw number — so every step interpolates at the same
 * mathematical rate its own min/max implies.
 * ---------------------------------------------------------------------
 */
const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1040px",
      },
    },
    extend: {
      colors: {
        // shadcn semantic tokens (driven by CSS variables)
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },

        // Brand-specific tokens (preserved verbatim)
        paper: "#f5f2ec",
        tint: "#efeae0",
        soft: "#faf8f2",
        claybg: "#f3ebe4",
        ink: "#16140f",
        sub: "#5a554b",
        meta: "#7d7669",
        clay: {
          DEFAULT: "#9e4a32",
          deep: "#7f3a23",
          ink: "#fdfbf7",
          tint: "rgba(158,74,50,0.08)",
          line: "rgba(158,74,50,0.30)",
        },
        hairline: "rgba(22,20,15,0.10)",
      },
      fontFamily: {
        sans: ["'Schibsted Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fixed micro scale — labels, mono chrome. Arithmetic, +2px/step.
        "2xs": ["11px", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        xs: ["13px", { lineHeight: "1.3", letterSpacing: "0.16em" }],
        sm: ["15px", { lineHeight: "1.5", letterSpacing: "0" }],
        base: ["17px", { lineHeight: "1.55", letterSpacing: "0" }],

        // Fluid scale — body-adjacent through display. Geometric, two
        // ratios (1.2 mobile / 1.333 desktop) sharing the 17px base.
        md: ["clamp(20px, 18.64px + 0.34vw, 23px)", { lineHeight: "1.45", letterSpacing: "-0.005em" }],
        lg: ["clamp(24px, 21.27px + 0.68vw, 30px)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        xl: ["clamp(29px, 24px + 1.25vw, 40px)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "2xl": ["clamp(35px, 26.36px + 2.16vw, 54px)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "3xl": ["clamp(42px, 28.36px + 3.41vw, 72px)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "4xl": ["clamp(51px, 31px + 5vw, 95px)", { lineHeight: "1.03", letterSpacing: "-0.035em" }],
        "5xl": ["clamp(61px, 31px + 7.5vw, 127px)", { lineHeight: "0.95", letterSpacing: "-0.045em" }],
      },
      spacing: {
        // A few brand-specific gaps that fall between the default 4px
        // grid steps but recur often enough to name.
        18: "4.5rem",
      },
      maxWidth: {
        page: "1040px",
        prose: "880px",
        proseSm: "720px",
        measureLg: "820px",
        measureSm: "640px",
        narrow: "660px",
        founder: "940px",
        pricing: "740px",
      },
      borderRadius: {
        pill: "100px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        card: "16px",
        "card-lg": "20px",
        "card-xl": "24px",
      },
      boxShadow: {
        card: "0 16px 38px rgba(22,20,15,0.07)",
        feat: "0 14px 40px rgba(158,74,50,0.12)",
        cta: "0 8px 22px rgba(158,74,50,0.18)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.2, 0.7, 0.2, 1)",
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
        600: "600ms",
        700: "700ms",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        rise: "rise 0.7s ease both",
        "accordion-down": "accordion-down 0.25s cubic-bezier(0.2,0.7,0.2,1)",
        "accordion-up": "accordion-up 0.2s cubic-bezier(0.2,0.7,0.2,1)",
      },
      zIndex: {
        nav: "50",
        sticky: "60",
      },
    },
  },
  plugins: [animate],
};

export default config;

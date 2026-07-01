import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

/**
 * Design tokens for The Way Back Community.
 *
 * shadcn semantic tokens (background, foreground, primary…) are wired
 * to the existing brand palette via CSS variables in src/index.css.
 * Brand-specific tokens live alongside them and remain the source of
 * truth for the warm paper / clay aesthetic — colours, type, and
 * spacing match the original design 1:1.
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
        "eyebrow-xs": ["11px", { letterSpacing: "0.10em", lineHeight: "1" }],
        "eyebrow-sm": ["12px", { letterSpacing: "0.10em", lineHeight: "1" }],
        kicker: ["13px", { letterSpacing: "0.24em", lineHeight: "1" }],
        lead: ["clamp(18px,2.3vw,23px)", { lineHeight: "1.6" }],
        sub: ["clamp(18px,2.5vw,24px)", { lineHeight: "1.55" }],
        prose: ["clamp(18px,2.2vw,22px)", { lineHeight: "1.55" }],
        list: ["clamp(19px,2.5vw,26px)", { lineHeight: "1.35", letterSpacing: "-0.01em" }],
        "course-sub": ["clamp(19px,2.7vw,27px)", { lineHeight: "1.45" }],
        "h3-sm": ["clamp(20px,2.4vw,26px)", { letterSpacing: "-0.02em", lineHeight: "1.2" }],
        h3: ["clamp(23px,3vw,29px)", { letterSpacing: "-0.02em", lineHeight: "1.2" }],
        "h3-lg": ["clamp(22px,3vw,30px)", { letterSpacing: "-0.02em", lineHeight: "1.15" }],
        "h3-xl": ["clamp(28px,3.6vw,40px)", { letterSpacing: "-0.025em", lineHeight: "1.1" }],
        h2: ["clamp(34px,5.6vw,58px)", { letterSpacing: "-0.03em", lineHeight: "1.05" }],
        "h2-final": ["clamp(36px,6.2vw,68px)", { letterSpacing: "-0.03em", lineHeight: "1.05" }],
        h1: ["clamp(46px,9vw,104px)", { letterSpacing: "-0.035em", lineHeight: "1" }],
        display: ["clamp(52px,11vw,118px)", { letterSpacing: "-0.045em", lineHeight: "0.92" }],
        why: ["clamp(20px,2.7vw,28px)", { letterSpacing: "-0.015em", lineHeight: "1.42" }],
        "why-big": ["clamp(26px,3.8vw,40px)", { lineHeight: "1.2" }],
        price: ["clamp(50px,8vw,66px)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        stat: ["clamp(40px,6vw,60px)", { lineHeight: "1", letterSpacing: "-0.04em" }],
        found: ["clamp(17px,2.3vw,22px)", { lineHeight: "1.45", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        page: "1040px",
        prose: "880px",
        proseSm: "720px",
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
        "card-lg": "18px",
        "card-xl": "22px",
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

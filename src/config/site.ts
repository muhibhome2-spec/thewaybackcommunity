/**
 * Site-wide constants. Set these once before launch.
 */
export const site = {
  /** Checkout / payment link. Use a real URL before launch. */
  joinUrl: "#" as const,
  /** Founder portrait. Leave empty to fall back to the MI monogram. */
  avatarUrl: "" as const,
  /** External founder profile. */
  founderUrl: "https://muhibidris.vercel.app" as const,
  /** DOM ids used for in-page anchors. */
  anchors: {
    join: "join",
    included: "included",
  },
} as const;

export type SiteConfig = typeof site;

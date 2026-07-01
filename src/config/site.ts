/**
 * Site-wide constants. Set these once before launch.
 */
export const site = {
  /** Checkout / payment link. Use a real URL before launch. */
  joinUrl: "#" as const,
  /** Founder portrait. Leave empty to fall back to the MI monogram. */
  avatarUrl: "" as const,
  /** Legal / support links for the footer. Set real URLs before launch. */
  termsUrl: "#" as const,
  privacyUrl: "#" as const,
  supportEmail: "" as const,
  /**
   * Founding-member scarcity counter. Leave `claimed` at null until you're
   * actually tracking signups — an unverifiable number is worse than none.
   * Set it to a real count once you have one and the progress bar appears
   * on its own in JoinCard and Pricing.
   */
  founding: {
    total: 100,
    claimed: null as number | null,
  },
  /** DOM ids used for in-page anchors. */
  anchors: {
    join: "join",
  },
} as const;

export type SiteConfig = typeof site;

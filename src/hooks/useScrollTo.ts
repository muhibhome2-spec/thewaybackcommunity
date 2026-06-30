import { useCallback } from "react";

/**
 * Smooth scroll to an in-page anchor by element id. Honours the
 * prefers-reduced-motion preference at the CSS level via :root rules.
 */
export function useScrollTo(): (id: string) => void {
  return useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
}

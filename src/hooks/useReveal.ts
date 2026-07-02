import { useEffect, useState } from "react";

/**
 * Track whether a target element is currently intersecting the viewport.
 * Used by the sticky mobile CTA to hide itself when the join card is
 * on screen.
 */
export function useInView(targetId: string, threshold = 0.18): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = document.getElementById(targetId);
    if (!node || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(Boolean(entry?.isIntersecting)),
      { threshold },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [targetId, threshold]);

  return inView;
}

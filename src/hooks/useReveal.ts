import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll. Returns a ref to attach to the observed node and a
 * boolean that flips true once the node enters the viewport. The observer
 * disconnects on the first match, so reveal happens once per page load.
 *
 * Falls back to visible immediately when IntersectionObserver is absent
 * or the user prefers reduced motion.
 */
export function useReveal<T extends Element>(threshold = 0.12): {
  ref: React.RefObject<T>;
  revealed: boolean;
} {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, revealed };
}

/**
 * Track whether a target element is currently intersecting the viewport.
 * Used by the sticky mobile CTA to hide itself when the pricing section
 * is on screen.
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

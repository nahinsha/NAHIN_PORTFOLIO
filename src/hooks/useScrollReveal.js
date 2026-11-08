import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` to the returned ref's element the first time it scrolls
 * into view. Pairs with the `.reveal` class in index.css (reduced-motion is
 * handled in CSS).
 */
export default function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}

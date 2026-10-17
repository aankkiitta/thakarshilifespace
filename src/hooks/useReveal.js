import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, revealed]. `revealed` becomes true once the element
 * enters the viewport (one-shot IntersectionObserver).
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, revealed];
}


import { useReveal } from "../hooks/useReveal";
import "./Reveal.css";

/**
 * Wraps children in a fade-up-on-scroll animation.
 * delay — number (seconds) for stagger
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, revealed] = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? "is-revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
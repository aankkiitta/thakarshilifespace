import { useReveal } from "../hooks/useReveal";

/**
 * The site-wide signature: an uppercase eyebrow label paired with a
 * thin gold hairline that draws in from the left as it enters view.
 */
export default function SectionLabel({ children, align = "left", dark = false }) {
  const [ref, revealed] = useReveal();
  const isCenter = align === "center";

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 mb-6 ${isCenter ? "justify-center" : "justify-start"}`}
    >
      {!isCenter && (
        <span
          className={`hairline-draw h-px w-10 ${dark ? "bg-bronze-light" : "bg-bronze"} transition-transform duration-700 ease-out`}
          style={{ transform: revealed ? "scaleX(1)" : "scaleX(0)" }}
        />
      )}
      <span className={`eyebrow ${dark ? "text-bronze-light" : "text-bronze-dim"}`}>
        {children}
      </span>
      {isCenter && (
        <span
          className={`hairline-draw h-px w-10 ${dark ? "bg-bronze-light" : "bg-bronze"} transition-transform duration-700 ease-out`}
          style={{ transform: revealed ? "scaleX(1)" : "scaleX(0)" }}
        />
      )}
    </div>
  );
}

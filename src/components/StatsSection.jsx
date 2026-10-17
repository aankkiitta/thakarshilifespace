import { useCounter } from "../hooks/useCounter";
import "./StatsSection.css";

const STATS = [
  { value: 13, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "", label: "Ongoing Projects" },
  { value: 700, suffix: "+", label: "Happy Families" },
  { value: 2012, suffix: "", label: "Business Experience Since" },
];
function Stat({ value, suffix, label }) {
  const [ref, count] = useCounter(value);
  return (
    <div ref={ref} className="stats__item">
      <p className="stats__value">
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="stats__label">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats">
      <div className="stats__grid">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
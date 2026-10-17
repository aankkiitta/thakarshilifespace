import { Compass, Gem, HeartHandshake, Leaf } from "lucide-react";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import "./PhilosophySection.css";

const PILLARS = [
  {
    icon: Compass,
    title: "Design",
    copy: "Every plan begins with how light, air and people will move through it.",
  },
  {
    icon: Gem,
    title: "Quality",
    copy: "We specify materials for how they age, not just how they look on day one.",
  },
  {
    icon: HeartHandshake,
    title: "Experience",
    copy: "A single relationship manager sees a homeowner from booking to first year.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    copy: "Every masterplan reserves space for water recycling and native landscaping.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="philosophy">
      <div className="philosophy__inner">
        <Reveal>
          <SectionLabel align="center">Our Philosophy</SectionLabel>
          <h2 className="philosophy__title">
            Four Principles Behind Every Address We Build
          </h2>
        </Reveal>

        <div className="philosophy__grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="philosophy__card">
              <p.icon className="philosophy__icon" size={30} strokeWidth={1.25} />
              <h3 className="philosophy__card-title">{p.title}</h3>
              <p className="philosophy__card-copy">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
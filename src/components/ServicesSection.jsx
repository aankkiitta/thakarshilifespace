import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import "./ServicesSection.css";

const SERVICES = [
  {
    title: "Concierge Services",
    copy: "A dedicated point of contact for every resident, from move-in logistics to everyday requests.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
  },
  {
    title: "Property Management",
    copy: "End-to-end upkeep of common areas, amenities and building systems, handled quietly and well.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    title: "Customer Experience",
    copy: "A transparent journey from booking to handover, with regular updates at every milestone.",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
  },
  {
    title: "Lifestyle Services",
    copy: "Curated partnerships spanning wellness, education and mobility for the way residents actually live.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services__inner">
        <Reveal>
          <SectionLabel>Signature Services</SectionLabel>
          <h2 className="services__title">Elevating The Everyday</h2>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="services__card">
              <div className="services__image-wrap">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="services__image"
                />
                <div className="services__image-overlay" />
              </div>

              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-copy">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
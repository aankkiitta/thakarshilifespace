import ContactForm from "./ContactForm";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import "./LeadSection.css";

export default function LeadSection() {
  return (
    <section className="lead" id="lead">  
      <div className="lead__inner">
        <Reveal className="lead__head">
          <SectionLabel align="center" dark>Get In Touch</SectionLabel>
          <h2 className="lead__title">
            Let&rsquo;s Find Your
            <br />
            Perfect Address
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm dark />
        </Reveal>
      </div>
    </section>
  );
}
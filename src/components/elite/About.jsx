import './About.css';
import aboutImg from './img/image.png';

export default function About() {
  return (
    <section className="elite-about" id="overview">
      <div className="elite-about-inner">
        <div className="elite-about-text">
          <p className="elite-about-eyebrow" data-reveal="right">About Elite Residences</p>

          <h2 className="elite-about-title" data-reveal="right">
            The Next Big Thing In<br />Luxury Living Is Here
          </h2>

          <p className="elite-about-para" data-reveal="up">
            Presenting Elite Residences — a premium residential project crafted for
            those who value space, comfort, and modern design. Spacious 1 &amp; 2 BHK
            homes with thoughtfully designed layouts and top-tier fittings.
          </p>

          <p className="elite-about-para" data-reveal="up">
            Elite Residences, being the project of Kapleshwara Group — a trusted name
            in the world of real estate — guarantees superior quality of construction.
            Strategically located in Dombivli (E), it's well-connected to every
            essential of daily life.
          </p>
        </div>

        <div className="elite-about-image" data-reveal="left">
          <img src={aboutImg} alt="Elite Residences" />
        </div>
      </div>
    </section>
  );
}
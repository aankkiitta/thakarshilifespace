import './Hero.css';
import heroImg from './img/hero.webp';

const OFFER_ITEMS = [
  '1 & 2 BHK RESIDENCES',
  'JODI FLATS AVAILABLE',
  'SPACIOUS HOMES WITH THOUGHTFUL LAYOUTS',
  'APPROX. 1,00,000 SQ. FT. GREEN PODIUM',
  'LARGE OPEN GREEN SPACES',
  'WORLD-CLASS LIFESTYLE AMENITIES',
  'INTEGRATED HIGH-STREET RETAIL',
  'EXCELLENT RAIL, ROAD & METRO CONNECTIVITY',
  'LOCATED NEAR ARYA GURUKUL SCHOOL',
];

export default function Hero() {
  const doubled = [...OFFER_ITEMS, ...OFFER_ITEMS];

  return (
    <section className="jmh-hero" id="top">
      <div className="jmh-hero__bg" style={{ backgroundImage: `url(${heroImg})` }}></div>
      <div className="jmh-hero__overlay"></div>

      <div className="jmh-hero__content">
        <p className="jmh-hero__eyebrow">New Launch</p>
        <h1 className="jmh-hero__title">JAI MARI HOME</h1>
        <p className="jmh-hero__sub">Luxury Residences</p>
      </div>

      <div className="jmh-offer">
        <div className="jmh-offer__scallop" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 L0,20 Q30,0 60,20 Q90,0 120,20 Q150,0 180,20 Q210,0 240,20 Q270,0 300,20 Q330,0 360,20 Q390,0 420,20 Q450,0 480,20 Q510,0 540,20 Q570,0 600,20 Q630,0 660,20 Q690,0 720,20 Q750,0 780,20 Q810,0 840,20 Q870,0 900,20 Q930,0 960,20 Q990,0 1020,20 Q1050,0 1080,20 Q1110,0 1140,20 Q1170,0 1200,20 Q1230,0 1260,20 Q1290,0 1320,20 Q1350,0 1380,20 Q1410,0 1440,20 L1440,40 Z" fill="#7a1f1f"/>
          </svg>
        </div>

        <div className="jmh-offer__strip">
          <div className="jmh-offer__track">
            {doubled.map((item, i) => (
              <span key={i} className="jmh-offer__item">◆ {item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
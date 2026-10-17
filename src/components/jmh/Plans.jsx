import './Plans.css';
import floor1 from './img/ground-fllor_horizontal_transparent.png';
import floor2 from './img/1stfloor_horizontal_transparent.png';
import floor3 from './img/lastfloor_horizontal_transparent.png';

const PLANS = [
  {
    id: '1bhk',
    bhk: '1 BHK',
    tagline: 'Smartly planned for comfortable living',
    lead: 'Thoughtfully designed homes for everyday comfort.',
    desc: 'Discover a thoughtfully planned 1 BHK residence at Jari Mari Homes. Designed to offer practical spaces, modern comfort and a peaceful residential lifestyle in a well-connected location of Kalyan East.',
    area: '420 – 446 Sq. Ft.*',
    config: '1 BHK Residence',
    img: floor1,
    reverse: false,
  },
  {
    id: '2bhk',
    bhk: '2 BHK',
    tagline: 'More space for the life you love',
    lead: 'Spacious residences designed for modern families.',
    desc: 'Step into a well-planned 2 BHK residence at Jari Mari Homes. With thoughtfully designed living spaces and everyday conveniences close by, these homes are created for a comfortable and connected lifestyle.',
    area: '580 – 623 Sq. Ft.*',
    config: '2 BHK Residence',
    img: floor2,
    reverse: true,
  },
  {
    id: 'jodi',
    bhk: 'JODI FLATS',
    tagline: 'Bigger spaces for a bigger lifestyle',
    lead: 'Generously planned spaces for growing families.',
    desc: 'Experience the added space of Jodi Flats at Jari Mari Homes. Designed for those looking for a more expansive home, this configuration brings together spacious living areas and the comfort of a thoughtfully planned residential community.',
    area: '850 Sq. Ft.*',
    config: 'Jodi Flats',
    img: floor3,
    reverse: false,
  },
];

export default function Plans({ onEnquire }) {
  return (
    <section className="jmh-plans" id="plans">
      <div className="jmh-plans__head">
        <p className="jmh-plans__eyebrow">CONFIGURATION</p>
        <h2 className="jmh-plans__title">FLOOR PLANS</h2>
        <span className="jmh-plans__divider"></span>
      </div>

      {PLANS.map((plan) => (
        <div key={plan.id} className={`jmh-plan__row ${plan.reverse ? 'jmh-plan__row--reverse' : ''}`}>
          <div className="jmh-plan__content">
            <h3 className="jmh-plan__bhk">{plan.bhk}</h3>
            <p className="jmh-plan__tagline">{plan.tagline}</p>
            <h2 className="jmh-plan__lead">{plan.lead}</h2>
            <p className="jmh-plan__desc">{plan.desc}</p>

            <ul className="jmh-plan__specs">
              <li>
                <span className="jmh-plan__label">Carpet area:</span>
                <span className="jmh-plan__value">{plan.area}</span>
              </li>
              <li>
                <span className="jmh-plan__label">Configuration:</span>
                <span className="jmh-plan__value">{plan.config}</span>
              </li>
            </ul>

            <button className="jmh-plan__btn" onClick={onEnquire} type="button">
              ENQUIRE NOW
            </button>
          </div>

          <div className="jmh-plan__media">
            <img src={plan.img} alt={`${plan.bhk} Floor Plan`} loading="lazy" />
          </div>
        </div>
      ))}
    </section>
  );
}
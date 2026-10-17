import './Marquee.css';
const ITEMS = [
  'DISCOVER PALM GALAXY — YOUR NEW ADDRESS IN KALYAN EAST',
  'LIFESTYLE AMENITIES FOR EVERYDAY LIVING',
  'SEAMLESS CONNECTIVITY VIA KALYAN–SHILPHATA ROAD',
  'RAILWAY CONNECTIVITY FROM KALYAN JUNCTION',
  'HOSPITALS, SCHOOLS & DAILY ESSENTIALS CLOSE BY',
  'SPACES DESIGNED FOR COMFORT & CONVENIENCE',
  'YOUR DREAM HOME AWAITS AT PALM GALAXY',
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <section className="palm-marquee">
      <div className="palm-marquee__track">
        {doubled.map((item, i) => (
          <span key={i} className="palm-marquee__item">◆ {item}</span>
        ))}
      </div>
    </section>
  );
}
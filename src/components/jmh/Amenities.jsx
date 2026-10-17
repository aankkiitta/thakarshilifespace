import './Amenities.css';

const AMENITIES = [
  {
    label: 'Landscape Garden',
    icon: (
      <>
        <path d="M32 56 L32 32"/>
        <path d="M32 32 C20 32 12 24 12 14 C24 14 32 22 32 32 Z"/>
        <path d="M32 32 C44 32 52 24 52 14 C40 14 32 22 32 32 Z"/>
        <path d="M20 56 L44 56"/>
        <path d="M24 48 L40 48"/>
      </>
    ),
  },
  {
    label: 'Indoor Games',
    icon: (
      <>
        <rect x="8" y="12" width="48" height="40" rx="3"/>
        <path d="M8 22 L56 22"/>
        <circle cx="18" cy="17" r="1.2"/>
        <circle cx="24" cy="17" r="1.2"/>
        <path d="M20 34 L28 34 L28 42 L20 42 Z"/>
        <circle cx="40" cy="38" r="5"/>
        <circle cx="44" cy="42" r="5"/>
      </>
    ),
  },
  {
    label: 'Jogging Track',
    icon: (
      <>
        <path d="M6 44 Q16 30 26 44 T46 44 T58 44"/>
        <circle cx="24" cy="16" r="3"/>
        <path d="M24 22 L22 32 L18 38"/>
        <path d="M22 32 L30 34 L34 44"/>
        <path d="M18 38 L12 46"/>
        <path d="M30 34 L40 28 L44 36"/>
      </>
    ),
  },
  {
    label: 'Yoga Pavilion',
    icon: (
      <>
        <circle cx="32" cy="14" r="4"/>
        <path d="M32 18 L32 34"/>
        <path d="M22 24 L42 24"/>
        <path d="M24 46 L32 34 L40 46"/>
        <path d="M18 46 L46 46"/>
      </>
    ),
  },
  {
    label: 'Pergola',
    icon: (
      <>
        <path d="M8 22 L32 10 L56 22"/>
        <path d="M12 22 L12 56"/>
        <path d="M52 22 L52 56"/>
        <path d="M22 22 L22 56"/>
        <path d="M42 22 L42 56"/>
        <path d="M8 32 L56 32"/>
        <path d="M8 42 L56 42"/>
        <path d="M8 52 L56 52"/>
      </>
    ),
  },
  {
    label: 'Senior Citizen Area',
    icon: (
      <>
        <circle cx="26" cy="14" r="4"/>
        <path d="M26 18 L26 34"/>
        <path d="M20 24 L32 24"/>
        <path d="M26 34 L22 44 L22 54"/>
        <path d="M26 34 L30 44 L30 54"/>
        <path d="M40 24 L40 52"/>
        <path d="M38 52 L42 52"/>
      </>
    ),
  },
];

export default function Amenities() {
  return (
    <section className="jmh-amenities" id="amenities">
      <div className="jmh-amenities__inner">
        <div className="jmh-amenities__head">
          <p className="jmh-amenities__eyebrow">AMENITIES</p>
          <h2 className="jmh-amenities__title">DISCOVER THE FINER SIDE OF LIFE</h2>
          <span className="jmh-amenities__divider"></span>
        </div>

        <div className="jmh-amenities__grid">
          {AMENITIES.map((a) => (
            <div key={a.label} className="jmh-amenities__item">
              <span className="jmh-amenities__icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  {a.icon}
                </svg>
              </span>
              <p className="jmh-amenities__label">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
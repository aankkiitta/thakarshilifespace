import React from 'react';
import './Amenities.css';

export default function Amenities() {
  const amenities = [
    { name: "Jacuzzi", icon: <path d="M8 32 L56 32 L56 42 C56 47 52 51 47 51 L17 51 C12 51 8 47 8 42 Z M20 51 L20 56 M32 51 L32 56 M44 51 L44 56 M24 32 L24 22 C24 19 26 17 29 17 L31 17 C34 17 36 19 36 22 M40 22 C41 24 41 26 40 28 M45 22 C46 24 46 26 45 28" /> },
    { name: "Indoor Games Room", icon: <><rect x="12" y="18" width="24" height="24" rx="2"/><circle cx="20" cy="26" r="1.5"/><circle cx="28" cy="34" r="1.5"/><circle cx="20" cy="34" r="1.5"/><circle cx="28" cy="26" r="1.5"/><circle cx="46" cy="36" r="6"/><path d="M46 30 L46 22 M40 50 L40 54 M52 50 L52 54"/></> },
    { name: "Plaza Area", icon: <><path d="M32 14 L32 30 M32 14 C28 14 26 18 28 22 C30 26 34 26 36 22 C38 18 36 14 32 14 Z M22 34 L22 26 M42 34 L42 26"/><circle cx="22" cy="24" r="3"/><circle cx="42" cy="24" r="3"/><path d="M14 40 L50 40 M32 34 L32 40 M24 40 L24 46 M40 40 L40 46 M12 46 L52 46"/></> },
    { name: "Lap Pool", icon: <><rect x="10" y="22" width="44" height="16" rx="2"/><path d="M10 30 L54 30 M10 44 C14 42 18 42 22 44 C26 46 30 46 34 44 C38 42 42 42 46 44 C50 46 54 46 54 44 M16 22 L16 18 M24 22 L24 18 M32 22 L32 18 M40 22 L40 18 M48 22 L48 18"/></> },
    { name: "Swimming Pool", icon: <><path d="M8 28 L12 28 L16 40 L48 40 L52 28 L56 28 M8 48 C14 44 18 44 24 48 C30 52 34 52 40 48 C46 44 50 44 56 48"/><circle cx="44" cy="16" r="4"/><path d="M40 20 L36 28 M20 16 L20 24"/></> },
    { name: "Gymnasium", icon: <><rect x="8" y="26" width="8" height="12" rx="1"/><rect x="48" y="26" width="8" height="12" rx="1"/><path d="M16 32 L48 32"/><rect x="24" y="22" width="4" height="20" rx="1"/><rect x="36" y="22" width="4" height="20" rx="1"/></> },
    { name: "Yoga Deck", icon: <><circle cx="32" cy="14" r="5"/><path d="M32 20 L32 36 M22 26 L42 26 M24 48 L32 36 L40 48 M18 48 L46 48"/></> },
    { name: "Jogging Track", icon: <><circle cx="42" cy="12" r="4"/><path d="M42 16 L34 26 L22 28 M34 26 L38 38 L46 44 M22 28 L14 42 M38 38 L30 48 M46 44 L54 42"/></> },
    { name: "Kids Play Area", icon: <><path d="M16 52 L16 20 L48 20 L48 52 M16 20 L48 20 L32 6 Z"/><rect x="26" y="34" width="12" height="18" rx="1"/><circle cx="32" cy="42" r="1"/></> },
    { name: "Club House", icon: <><path d="M10 30 L32 12 L54 30 M14 30 L14 52 L50 52 L50 30 M26 52 L26 38 L38 38 L38 52"/><circle cx="32" cy="26" r="2"/></> }
  ];

  const duplicatedAmenities = [...amenities, ...amenities];

  return (
    <section className="prd-amenities" id="amenities">
      <div className="prd-amenities__inner">
        <div className="prd-amenities__head">
          <h2 className="prd-amenities__title">Amenities</h2>
          <span className="prd-amenities__divider"></span>
        </div>
        <div className="prd-amenities__slider">
          <div className="prd-amenities__track" id="prdAmenitiesTrack">
            {duplicatedAmenities.map((item, index) => (
              <div className="prd-amenities__item" key={index}>
                <span className="prd-amenities__icon">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </span>
                <span className="prd-amenities__text">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="prd-amenities__nav">
          <button className="prd-amenities__arrow prd-amenities__arrow--prev" aria-label="Previous" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="prd-amenities__arrow prd-amenities__arrow--next" aria-label="Next" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
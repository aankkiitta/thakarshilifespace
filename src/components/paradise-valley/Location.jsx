import React, { useState } from 'react';
import './Location.css';
import locationImg from './img/location.png';

export default function Location() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "Transportation",
      items: [
        "<strong>Khardi Railway Station</strong> — Approx. 3.5 km",
        "<strong>Mumbai–Nashik Highway</strong> — Approx. 4 km",
        "<strong>Samruddhi Mahamarg</strong> — Approx. 2.5 km"
      ]
    },
    {
      title: "Connectivity",
      items: [
        "<strong>Mumbai</strong> — Approx. 2 hrs",
        "<strong>Thane</strong> — Approx. 1 hr",
        "<strong>Nashik</strong> — Approx. 1.5 hrs",
        "<strong>Kalyan</strong> — Approx. 40 mins"
      ]
    },
    {
      title: "Schools & Healthcare",
      items: [
        "KVES Khardi School & College",
        "Government Hospital, Khardi",
        "Local clinics and educational facilities"
      ]
    },
    {
      title: "Nearby Amenities & Nature",
      items: [
        "Khardi Market and daily essentials",
        "Bhatsa River region",
        "Green surroundings, hills and nearby weekend destinations"
      ]
    }
  ];

  return (
    <>
      <section className="prd-location" id="location">
        <div className="prd-location__inner">
          <div className="prd-location__head">
            <h2 className="prd-location__title">Paradise Valley</h2>
            <p className="prd-location__subtitle">
              Khardi–Shahapur, Maharashtra — where scenic hills, lush greenery and convenient connectivity come together to create a peaceful weekend-home destination near Mumbai.
            </p>
          </div>
          <div className="prd-location__body">
            <div className="prd-location__media">
              <div className="prd-location__map-wrap">
                <button type="button" className="prd-location__map-link" onClick={() => setIsLightboxOpen(true)} aria-label="Open location map">
                  <img src={locationImg} alt="location-map" loading="lazy" />
                </button>
                <a href="https://www.google.com/maps/place/Paradise+Valley+By+Thakarshi/@19.5858875,73.4209029,15z" target="_blank" rel="noopener noreferrer" className="prd-location__map-cta">
                  VIEW IN MAP
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
            <div className="prd-location__accordion" id="prdLocationAcc">
              {accordionData.map((item, index) => (
                <div key={index} className={`prd-location__acc-item ${openAccordion === index ? 'is-open' : ''}`}>
                  <button className="prd-location__acc-head" type="button" onClick={() => toggleAccordion(index)}>
                    <span className="prd-location__acc-title">{item.title}</span>
                    <span className="prd-location__acc-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line className="acc-line-h" x1="5" y1="12" x2="19" y2="12"/>
                        <line className="acc-line-v" x1="12" y1="5" x2="12" y2="19"/>
                      </svg>
                    </span>
                  </button>
                  <div className="prd-location__acc-body">
                    <ul className="prd-location__acc-list">
                      {item.items.map((listItem, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: listItem }} />
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Lightbox */}
      <div className={`prd-map-lightbox ${isLightboxOpen ? 'is-open' : ''}`} id="prdMapLightbox" aria-hidden={!isLightboxOpen}>
        <div className="prd-map-lightbox__overlay" onClick={() => setIsLightboxOpen(false)}></div>
        <button className="prd-map-lightbox__close" onClick={() => setIsLightboxOpen(false)} aria-label="Close" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        <div className="prd-map-lightbox__content">
          <img src={locationImg} alt="Location Map — Full View" />
        </div>
      </div>
    </>
  );
}
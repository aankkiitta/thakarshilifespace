import React, { useState } from 'react';
import './Config.css';
import frontvillaImg from './img/frontvilla.jpeg';
import frontvilla2Img from './img/frontvilla2.jpeg';
import frontvilla3Img from './img/frontvilla3.jpeg';

export default function Config({ openModal }) {
  const [flippedCard, setFlippedCard] = useState(null);

  const toggleFlip = (index) => {
    if (window.innerWidth <= 640) {
      setFlippedCard(flippedCard === index ? null : index);
    }
  };

  const cards = [
    { title: "The Amalfi", area: "3,450 Sq. Ft.", tag: "3 Car Park", desc: "Private courtyard, ground floor guest suite, and panoramic rooftop terrace.", backImg: frontvillaImg, colored: false },
    { title: "Portofino Grande", area: "4,250 Sq. Ft.", tag: "Media Room", desc: "Private wine cellar, spa-inspired bathrooms, and landscaped garden.", backImg: frontvilla2Img, colored: true },
    { title: "Bellagio Estate", area: "5,200 Sq. Ft.", tag: "Private Spa", desc: "Dedicated home gym, elevator shaft, and expansive terrace with jacuzzi.", backImg: frontvilla3Img, colored: true },
    { title: "Villa Sereno", area: "3,850 Sq. Ft.", tag: "Infinity Pool", desc: "Private plunge pool, double-height living room, and landscaped wrap-around deck.", backImg: frontvilla3Img, colored: false }
  ];

  return (
    <section className="prd-config" id="config">
      <div className="prd-config__inner">
        <div className="prd-config__head">
          <p className="prd-config__eyebrow">Villas</p>
          <h2 className="prd-config__title">Choose Your Residence</h2>
          <span className="prd-config__divider"></span>
        </div>
        <p className="prd-config__mobile-hint">* Tap on card to see image</p>
        <div className="prd-config__grid">
          {cards.map((card, index) => (
            <div key={index} className={`prd-config__card ${card.colored ? 'prd-config__card--colored' : ''} ${flippedCard === index ? 'is-flipped' : ''}`} onClick={() => toggleFlip(index)}>
              <div className="prd-config__card-inner">
                <div className="prd-config__front">
                  <h3 className="prd-config__card-title">{card.title}</h3>
                  <p className="prd-config__card-area">{card.area}<sup>*</sup></p>
                  <p className="prd-config__card-tag">{card.tag}</p>
                  <p className="prd-config__card-desc">{card.desc}</p>
                  <div className="prd-config__footer">
                    <span className="prd-config__icon">
                      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 4 L26 14 L36 14 L28 22 L32 32 L20 26 L8 32 L12 22 L4 14 L14 14 Z"/></svg>
                    </span>
                    <button className="prd-config__enquire-link" onClick={(e) => { e.stopPropagation(); openModal(); }}>Enquire Now</button>
                  </div>
                </div>
                <div className="prd-config__back">
                  <img src={card.backImg} alt={card.title} loading="lazy" />
                  <div className="prd-config__back-overlay"></div>
                  <div className="prd-config__back-content">
                    <p className="prd-config__back-title">{card.title}</p>
                    <p className="prd-config__back-area">{card.area} · {card.tag}</p>
                    <button className="prd-config__back-enquire" onClick={(e) => { e.stopPropagation(); openModal(); }}>
                      Enquire Now
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="prd-config__global-hint">* Click to see image</p>
      </div>
    </section>
  );
}
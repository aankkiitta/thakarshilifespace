import React from 'react';
import './Hero.css';
import qrImg from './img/qr.png';

export default function Hero() {
  return (
    <section className="prd-hero" id="top">
      <div className="prd-hero__bg"></div>
      <div className="prd-hero__overlay"></div>

      <div className="prd-hero__content">
        <p className="prd-hero__eyebrow">New Launch</p>
        <h1 className="prd-hero__title">PARADISE</h1>
        <p className="prd-hero__sub">Luxury Residences</p>
        <p className="prd-hero__location">Kolshet Road, Thane (W)</p>
      </div>

      <div className="prd-qr-card">
        <p className="prd-qr-card__title">RERA detail</p>
        <div className="prd-qr-card__qr">
          <img src={qrImg} alt="Scan QR" />
        </div>
        <p className="prd-qr-card__reg">Reg. No: P51700020175</p>
        <a href="#overview" className="prd-qr-card__cta">
          <span>Click Here For More</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>

      <div className="prd-offer">
        <div className="prd-offer__scallop" aria-hidden="true">
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 L0,20 Q30,0 60,20 Q90,0 120,20 Q150,0 180,20 Q210,0 240,20 Q270,0 300,20 Q330,0 360,20 Q390,0 420,20 Q450,0 480,20 Q510,0 540,20 Q570,0 600,20 Q630,0 660,20 Q690,0 720,20 Q750,0 780,20 Q810,0 840,20 Q870,0 900,20 Q930,0 960,20 Q990,0 1020,20 Q1050,0 1080,20 Q1110,0 1140,20 Q1170,0 1200,20 Q1230,0 1260,20 Q1290,0 1320,20 Q1350,0 1380,20 Q1410,0 1440,20 L1440,40 Z" fill="#0f4c5c"/>
          </svg>
        </div>
        <div className="prd-offer__strip">
          <div className="prd-offer__track">
            {/* Duplicated list for seamless marquee */}
            {[1, 2].map((group) => (
              <React.Fragment key={group}>
                <span className="prd-offer__item">◆ 2 &amp; 3 BHK RESIDENCES</span>
                <span className="prd-offer__item">◆ JODI FLATS AVAILABLE</span>
                <span className="prd-offer__item">◆ WELL-CONNECTED LOCATION IN THANE (W)</span>
                <span className="prd-offer__item">◆ NEAR KOLSHET ROAD</span>
                <span className="prd-offer__item">◆ WORLD-CLASS AMENITIES</span>
                <span className="prd-offer__item">◆ EXCELLENT RAIL, ROAD &amp; METRO CONNECTIVITY</span>
                <span className="prd-offer__item">◆ SCHOOLS &amp; HOSPITALS NEARBY</span>
                <span className="prd-offer__item">◆ RERA APPROVED PROJECT</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
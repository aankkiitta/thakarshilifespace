import React from 'react';
import './Developer.css';
import logoImg from './img/logo.png';

export default function Developer() {
  return (
    <section className="prd-developer" id="developer">
      <div className="prd-developer__inner">
        <div className="prd-developer__head">
          <p className="prd-developer__eyebrow">About Developer</p>
          <h2 className="prd-developer__title">Building Excellence Since 35 Years</h2>
          <span className="prd-developer__divider"></span>
        </div>
        <div className="prd-developer__logo">
          <img src={logoImg} alt="Thakarshi Lifespaces Logo" loading="lazy" />
        </div>
        <p className="prd-developer__desc">
          With over 35 years of experience in the construction industry, Thakarshi Lifespaces has been a prominent name since its establishment. We have made significant strides in various sectors, including residential, industrial, commercial, and hospitality. Our reputation for excellence is reflected in our successful projects across Dombivli, Ambernath, Murbad, Navi Mumbai, and Pune.
        </p>
        <div className="prd-developer__stats">
          <div className="prd-developer__stat">
            <p className="prd-developer__stat-value">35<span>+</span></p>
            <p className="prd-developer__stat-label">Years of Legacy</p>
          </div>
          <div className="prd-developer__stat">
            <p className="prd-developer__stat-value">50<span>+</span></p>
            <p className="prd-developer__stat-label">Projects Delivered</p>
          </div>
          <div className="prd-developer__stat">
            <p className="prd-developer__stat-value">5000<span>+</span></p>
            <p className="prd-developer__stat-label">Happy Families</p>
          </div>
        </div>
        <a href="https://www.thakarshilifespaces.com/" target="_blank" rel="noopener noreferrer" className="prd-developer__link">
          <span>www.thakarshilifespaces.com</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  );
}
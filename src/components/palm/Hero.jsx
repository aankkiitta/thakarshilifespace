import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg"></div>
      <div className="hero__overlay-text">
        <p className="hero__overlay-eyebrow">New Launch</p>
        <h1 className="hero__overlay-title">PIRAMAL VAIKUNTH</h1>
        <p className="hero__overlay-sub">By Piramal Realty</p>
        <p className="hero__overlay-location">at Balkum, Thane</p>
      </div>
    </section>
  );
}
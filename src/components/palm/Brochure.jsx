import './Brochure.css';

export default function Brochure() {
  return (
    <a href="/img/brochure.pdf" className="palm-brochure-side" download>
      <span className="palm-brochure-side__text">DOWNLOAD BROCHURE</span>
      <span className="palm-brochure-side__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
      </span>
    </a>
  );
}
import { useEffect, useRef } from 'react';
import './Header.css';
import logoImg from './img/logo.png';

const NAV_LINKS = [
  { href: '#overview',  label: 'Overview' },
  { href: '#config',    label: 'Configuration' },
  { href: '#plans',     label: 'Plans' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#location',  label: 'Location' },
  { href: '#developer', label: 'Developer' },
];

export default function Header({ onBurgerClick, onEnquire }) {
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('is-scrolled', window.scrollY > 40);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header ref={headerRef} className="jmh-header">
      <div className="jmh-header__inner">
        <a href="#top" className="jmh-logo">
          <img src={logoImg} alt="Jai Mari Home" className="jmh-logo__img" />
        </a>

        <nav className="jmh-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="jmh-nav__link">{l.label}</a>
          ))}
        </nav>

        <div className="jmh-header__actions">
          <button type="button" className="jmh-header__cta" onClick={onEnquire}>
            Enquire Now
          </button>

          <button
            type="button"
            className="jmh-burger"
            onClick={onBurgerClick}
            aria-label="Open menu"
          >
            <span className="jmh-burger__line"></span>
            <span className="jmh-burger__line"></span>
            <span className="jmh-burger__line"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
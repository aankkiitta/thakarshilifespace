import { useEffect, useRef } from 'react';
import './Header.css';
import logoImg from './img/logo.png';

const NAV_LINKS = [
  { href: '#overview',  label: 'Overview' },
  { href: '#config',    label: 'Configuration' },
  { href: '#plans',     label: 'Plans' },
  { href: '#videos',    label: 'Video' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#advantage', label: 'Advantage' },
  { href: '#showflat',  label: 'Show Flat' },
  { href: '#developer', label: 'About Developer' },
];

export default function Header({ onMenuOpen }) {
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
    <header ref={headerRef} className="palm-header">
      <div className="palm-header-inner">
        <a href="#top" className="palm-logo">
          <img src={logoImg} alt="Thakarshi" className="palm-logo-img" />
        </a>

        <nav className="palm-nav">
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="palm-nav-item">
              <a href={link.href} className="palm-nav-link">{link.label}</a>
              {i < NAV_LINKS.length - 1 && <span className="palm-nav-sep">|</span>}
            </span>
          ))}
        </nav>

        <button className="palm-burger" onClick={onMenuOpen} aria-label="Open menu" type="button">☰</button>
      </div>
    </header>
  );
}
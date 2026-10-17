import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImg from './img/logo.png';

export default function Header({ openModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Configuration', href: '#config' },
    { name: 'Plans', href: '#plans' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Developer', href: '#developer' },
  ];

  return (
    <>
      <header className={`prd-header ${isScrolled ? 'is-scrolled' : ''}`} id="prdHeader">
        <div className="prd-header__inner">
          <a href="#top" className="prd-logo">
            <img src={logoImg} alt="Paradise" className="prd-logo__img" />
          </a>
          <nav className="prd-nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="prd-nav__link">{link.name}</a>
            ))}
          </nav>
          <div className="prd-header__actions">
            <button className="prd-header__cta" onClick={openModal}>Enquire Now</button>
            <button className="prd-burger" onClick={toggleDrawer} aria-label="Open menu" type="button">
              <span className="prd-burger__line"></span>
              <span className="prd-burger__line"></span>
              <span className="prd-burger__line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Side Drawer */}
      <div className={`prd-drawer ${isDrawerOpen ? 'is-open' : ''}`} id="prdDrawer">
        <div className="prd-drawer__overlay" onClick={toggleDrawer}></div>
        <aside className="prd-drawer__panel">
          <div className="prd-drawer__head">
            <a href="#top" className="prd-logo prd-logo--drawer">
              <img src={logoImg} alt="Paradise" className="prd-logo__img" />
            </a>
            <button className="prd-drawer__close" onClick={toggleDrawer} aria-label="Close menu" type="button">✕</button>
          </div>
          <nav className="prd-drawer__nav">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="prd-drawer__link" onClick={toggleDrawer}>{link.name}</a>
            ))}
          </nav>
          <div className="prd-drawer__footer">
            <button className="prd-drawer__cta" onClick={() => { toggleDrawer(); openModal(); }}>Enquire Now</button>
          </div>
        </aside>
      </div>
    </>
  );
}
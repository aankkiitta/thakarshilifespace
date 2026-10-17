import { useState, useEffect } from 'react';

import Header from './Header';
import MobileMenu from './MobileMenu';
import Hero from './Hero';
import About from './About';
import Config from './Config';
import Plans from './Plans';
import Video from './Video';
import Amenities from './Amenities';
import WhyBuy from './WhyBuy';
import Showcase from './Showcase';
import Developer from './Developer';
import Modal from './Modal';
import Footer from './Footer';

import './elite-global.css';

export default function ElitePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = (menuOpen || modalOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, modalOpen]);

  // 🔥 SCROLL REVEAL — IntersectionObserver
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onBurgerClick={() => setMenuOpen(true)} onEnquire={openModal} />

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onEnquire={openModal}
      />

      <main>
        <Hero />
        <About />
        <Config onEnquire={openModal} />
        <Plans />
        <Video />
        <Amenities />
        <WhyBuy />
        <Showcase />
        <Developer />
      </main>

      <Footer />

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
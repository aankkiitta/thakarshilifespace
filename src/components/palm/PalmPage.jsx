import { useState, useEffect, useRef } from 'react';

import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import Brochure from './Brochure';
import Modal from './Modal';
import Lightbox from './Lightbox';
import Hero from './Hero';
import Marquee from './Marquee';
import ProjectCard from './ProjectCard';
import Overview from './Overview';
import Config from './Config';
import Plans from './Plans';
import Video from './Video';
import Amenities from './Amenities';
import Location from './Location';
import Gallery from './Gallery';
import Developer from './Developer';

import './palm-global.css';

export default function PalmPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = (menuOpen || modalOpen || lightboxSrc) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, modalOpen, lightboxSrc]);

  // ✅ Universal scroll reveal — re-scans DOM on mount & mutations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('[data-reveal]:not(.revealed)').forEach((el) => {
        observerRef.current.observe(el);
      });
    };

    observeAll();

    // Watch for new elements (dynamic content like carousel items)
    const mutationObs = new MutationObserver(() => observeAll());
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observerRef.current?.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Brochure />
      <Header onMenuOpen={() => setMenuOpen(true)} />

      <main>
        <Hero />
        <Marquee />
        <ProjectCard onEnquire={openModal} />
        <Overview onEnquire={openModal} />
        <Config onEnquire={openModal} onLightbox={setLightboxSrc} />
        <Plans onEnquire={openModal} onLightbox={setLightboxSrc} />
        <Video onEnquire={openModal} />
        <Amenities />
        <Location />
        <Gallery />
        <Developer />
      </main>

      <Footer />

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Modal isOpen={modalOpen} onClose={closeModal} />
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}
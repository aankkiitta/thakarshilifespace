import { useState, useEffect } from 'react';

import Header from './Header';
import Drawer from './Drawer';
import Hero from './Hero';
import Overview from './Overview';
import Config from './Config';
import Plans from './Plans';
import Amenities from './Amenities';
import Gallery from './Gallery';
import Location from './Location';
import AboutDeveloper from './AboutDeveloper';
import Modal from './Modal';

import './jmh-global.css';
import Footer from './Footer';

export default function JmhPage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = (drawerOpen || modalOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen, modalOpen]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header
        onBurgerClick={() => setDrawerOpen(true)}
        onEnquire={openModal}
      />

      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onEnquire={openModal}
      />

      <main>
        <Hero />
        <Overview onEnquire={openModal} />
        <Config onEnquire={openModal} />
        <Plans onEnquire={openModal} />
        <Amenities />
        <Gallery />
        <Location />
        <AboutDeveloper />
         <Footer />
      </main>

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
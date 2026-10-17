import React, { useState } from 'react';
import './ParadisePage.css';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Config from './Config';
import Plans from './Plans';
import Amenities from './Amenities';
import Gallery from './Gallery';
import Location from './Location';
import Developer from './Developer';
import EnquiryModal from './EnquiryModal';
import Footer from './Footer';

export default function ParadisePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="paradise-page">
      <Header openModal={openModal} />
      <main>
        <Hero />
        <About />
        <Config openModal={openModal} />
        <Plans openModal={openModal} />
        <Amenities />
        <Gallery />
        <Location />
        <Developer />
        <Footer />
      </main>
      <EnquiryModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
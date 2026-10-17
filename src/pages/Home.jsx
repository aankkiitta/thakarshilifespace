import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase1";
import CompletedShowcase from "../components/CompletedShowcase1";
import About from "../pages/About"; 
import StatsSection from "../components/StatsSection";
import PhilosophySection from "../components/PhilosophySection";
import LuxuryScroll from "../components/LuxuryScroll";
import ServicesSection from "../components/ServicesSection";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import LocationsSection from "../components/LocationsSection";
import LeadSection from "../components/LeadSection";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ✅ showHeading={true} add karo */}
      <ProjectShowcase 
        limit={6} 
        showHeading={true} 
        showViewAll={true}
        headingEyebrow="Featured Projects."
        headingTitle="Where happiness lives"
      />

      {/* ✅ showHeading={true} add karo */}
      <CompletedShowcase 
        limit={3} 
        showHeading={true} 
        showViewAll={true}
        headingEyebrow="Completed Projects."
        headingTitle="Where memories live"
      />

      <About/>
      <StatsSection />
      <Gallery />
      <Testimonials />
      <LeadSection />
    </>
  );
}
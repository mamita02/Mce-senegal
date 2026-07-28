import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SolutionsDigitales from './pages/SolutionsDigitales';
import SaaSLogiciels from './pages/SaaSLogiciels';
import SitesPlateformes from './pages/SitesPlateformes';
import HebergementSecurite from './pages/HebergementSecurite';
import TalentsRH from './pages/TalentsRH';
import MCEPartenaires from './pages/MCEPartenaires';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import AccompagnementStrategique from './pages/AccompagnementStrategique';
import NetworkingEvenements from './pages/NetworkingEvenements';
import Evenementiel from './pages/Evenementiel';
import EventsImpactOverview from './pages/EventsImpactOverview';
import Academy from './pages/Academy';
import RecrutementRH from './pages/RecrutementRH';
import AccompagnementRH from './pages/AccompagnementRH';
import { Toaster } from './components/ui/toaster';

function ScrollToTop() {
  const { pathname } = require('react-router-dom').useLocation();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function ScrollReveal() {
  const { pathname } = require('react-router-dom').useLocation();

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const sections = document.querySelectorAll('section:not(.landing-offer-section)');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('section-visible', entry.isIntersecting);
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -5% 0px' });

      sections.forEach((section) => {
        section.classList.add('section-reveal');
        observer.observe(section);
      });

      window.__mceSectionObserver = observer;
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (window.__mceSectionObserver) window.__mceSectionObserver.disconnect();
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <ScrollReveal />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions-digitales" element={<SolutionsDigitales />} />
          <Route path="/solutions-digitales/saas-logiciels" element={<SaaSLogiciels />} />
          <Route path="/solutions-digitales/sites-plateformes" element={<SitesPlateformes />} />
          <Route path="/solutions-digitales/hebergement-securite" element={<HebergementSecurite />} />
          <Route path="/accompagnement-strategique" element={<Navigate to="/accompagnement-evenements/accompagnement" replace />} />
          <Route path="/talents-rh" element={<TalentsRH />} />
          <Route path="/talents-rh/academy" element={<Academy />} />
          <Route path="/talents-rh/recrutement" element={<RecrutementRH />} />
          <Route path="/talents-rh/accompagnement-rh" element={<AccompagnementRH />} />
          <Route path="/accompagnement-evenements" element={<EventsImpactOverview />} />
          <Route path="/accompagnement-evenements/accompagnement" element={<AccompagnementStrategique />} />
          <Route path="/accompagnement-evenements/networking" element={<NetworkingEvenements />} />
          <Route path="/accompagnement-evenements/evenementiel" element={<Evenementiel />} />
          <Route path="/mce-partenaires" element={<MCEPartenaires />} />
          <Route path="/mce-partenaires/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

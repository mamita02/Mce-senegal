import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SolutionsDigitales from './pages/SolutionsDigitales';
import SaaSLogiciels from './pages/SaaSLogiciels';
import SitesPlateformes from './pages/SitesPlateformes';
import HebergementSecurite from './pages/HebergementSecurite';
import TalentsRH from './pages/TalentsRH';
import AccompagnementEvenements from './pages/AccompagnementEvenements';
import MCEPartenaires from './pages/MCEPartenaires';
import Contact from './pages/Contact';
import { Toaster } from './components/ui/toaster';

function ScrollToTop() {
  const { pathname } = require('react-router-dom').useLocation();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions-digitales" element={<SolutionsDigitales />} />
          <Route path="/solutions-digitales/saas-logiciels" element={<SaaSLogiciels />} />
          <Route path="/solutions-digitales/sites-plateformes" element={<SitesPlateformes />} />
          <Route path="/solutions-digitales/hebergement-securite" element={<HebergementSecurite />} />
          <Route path="/talents-rh" element={<TalentsRH />} />
          <Route path="/accompagnement-evenements" element={<AccompagnementEvenements />} />
          <Route path="/mce-partenaires" element={<MCEPartenaires />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

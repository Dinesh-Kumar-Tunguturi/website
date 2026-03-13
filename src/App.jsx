import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Component Imports
import Navbar from './components/Navbar';
import CreatorScroller from './components/CreatorScroller';
import MagneticButton from './components/MagneticButton';
import CompanyTicker from './components/CompanyTicker';
import ProcessFlow from './components/ProcessFlow';
import AboutUs from './components/AboutUs';
import WhyChoose from './components/WhyChoose';
import DomainsSupport from './components/DomainsSupport';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Page Imports
import FeaturesPage from './pages/FeaturesPage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <div className="home-page">
    <div className="grain-overlay" />
    <Navbar />
    <main style={{ width: '100%', overflow: 'hidden' }}>
      <header className="hero-lyft">
        <div className="container">
          <HeroSection />
        </div>
      </header>
      <CreatorScroller />
      <HeroCTA />
      <CompanyTicker />
      <div id="process"><ProcessFlow /></div>
      <div id="about"><AboutUs /></div>
      <div id="why"><WhyChoose /></div>
      <DomainsSupport />
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><ContactSection /></div>
      <div id="pricing"><PricingSection /></div>
      <div id="faq"><FAQSection /></div>
    </main>
    <Footer />
  </div>
);

const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <div className="badge-creators">Helping Job Seekers Land More Interviews Faster</div>
    <div style={{ position: 'relative' }}>
      <h1 style={{ letterSpacing: '-0.05em' }}>
        Land More Interviews<br />Without Spending Hours Applying
      </h1>
    </div>
    <p className="hero-desc">
      We apply to 30+ jobs every single day on your behalf — consistently and strategically. We handle the hustle so you can focus on the interview.
    </p>
  </motion.div>
);

const HeroCTA = () => (
  <div className="btn-cta-wrapper">
    <div style={{ position: 'relative' }}>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <MagneticButton className="btn-cta">Get Started</MagneticButton>
      </Link>
      {/* <div className="handwritten free-text" style={{ bottom: '-40px', left: '-100px', transform: 'rotate(-5deg)' }}>
        It's free
        <svg style={{ position: 'absolute', width: 60, height: 30, top: -10, left: 60 }}>
          <path d="M5,25 Q30,10 60,5" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div> */}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* Mock auth routes */}
        <Route path="/login" element={<div style={{ padding: '100px' }}><h2>Login Page Placeholder</h2><Link to="/">Back Home</Link></div>} />
        <Route path="/signup" element={<div style={{ padding: '100px' }}><h2>Sign Up Page Placeholder</h2><Link to="/">Back Home</Link></div>} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

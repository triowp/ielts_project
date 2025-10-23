import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import AllTopicsSection from './sections/AllTopicsSection';
import PricingSection from './sections/PricingSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import { Analytics } from './utils/analytics';
import { usePageTracking } from './utils/conversionTracking';
import './App.css';

function App() {
  // Track landing page views and user behavior
  usePageTracking('Landing Page');

  return (
    <div className="App">
      <Analytics />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AllTopicsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

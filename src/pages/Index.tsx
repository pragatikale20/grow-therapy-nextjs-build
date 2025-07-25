
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

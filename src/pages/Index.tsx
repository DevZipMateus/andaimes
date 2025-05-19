
import React, { useEffect } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update meta tags for SEO
    document.title = "Andaimes Panorama - Locação de Andaimes e Equipamentos para Construção";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Andaimes Panorama oferece serviços de locação de andaimes, escoras metálicas, pisos metálicos e equipamentos para construção civil desde 1992. Entre em contato: (71) 99730-6777");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Andaimes Panorama oferece serviços de locação de andaimes, escoras metálicas, pisos metálicos e equipamentos para construção civil desde 1992. Entre em contato: (71) 99730-6777";
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <AboutUs />
        <Contact />
      </main>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;

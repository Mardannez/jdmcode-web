'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import FeaturedProjects from './FeaturedProjects';
import TrustIndicators from './TrustIndicators';
import ServicesOverview from './ServicesOverview';
import TestimonialHighlights from './TestimonialHighlights';
import CTASection from './CTASection';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function HomepageInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me gustaría discutir un proyecto contigo.');
    window.open(`https://wa.me/50489783555?text=${message}`, '_blank');
  };

  const handleProjectInquiry = () => {
    window.location.href = '/contact';
  };

  return (
    <>
      <HeroSection 
        onWhatsAppClick={isHydrated ? handleWhatsAppClick : () => {}}
        onProjectInquiry={isHydrated ? handleProjectInquiry : () => {}}
      />
     {/* <TrustIndicators />*/}
      <FeaturedProjects />
      <ServicesOverview />
     
      {/* <TestimonialHighlights /> */}.
      <CTASection 
        onWhatsAppClick={isHydrated ? handleWhatsAppClick : () => {}}
        onProjectInquiry={isHydrated ? handleProjectInquiry : () => {}}
      />
      <Footer />
      <WhatsAppButton onClick={isHydrated ? handleWhatsAppClick : () => {}} />
    </>
  );
}
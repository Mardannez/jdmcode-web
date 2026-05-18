'use client';

import { useEffect, useState } from 'react';
import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import ProjectInquiryForm from './ProjectInquiryForm';
import AvailabilityCalendar from './AvailabilityCalendar';
import SocialLinks from './SocialLinks';
import LocationMap from './LocationMap';
import FAQSection from './FAQSection';
import ResponseTimeInfo from './ResponseTimeInfo';

export default function ContactInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (!isHydrated) return;
    
    const message = encodeURIComponent('Hola! Me gustaría discutir un proyecto contigo.');
    const phoneNumber = '89783555';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-96 bg-muted"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 space-y-8">
            <div className="h-64 bg-muted rounded-xl"></div>
            <div className="h-96 bg-muted rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ContactHero onWhatsAppClick={handleWhatsAppClick} />
      <ContactMethods onWhatsAppClick={handleWhatsAppClick} />
      <div id="contact-form">
        <ProjectInquiryForm />
      </div>
      {/*<AvailabilityCalendar />*/}
      <ResponseTimeInfo />
      {/*<LocationMap />*/}
      <FAQSection />
      <SocialLinks />
    </>
  );
}
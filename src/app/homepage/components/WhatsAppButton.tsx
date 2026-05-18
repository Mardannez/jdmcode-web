'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface WhatsAppButtonProps {
  onClick: () => void;
}

export default function WhatsAppButton({ onClick }: WhatsAppButtonProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={isHydrated ? onClick : undefined}
      disabled={!isHydrated}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-conversion text-conversion-foreground shadow-prominent hover:scale-110 transition-all duration-200 hover:shadow-[0_20px_50px_rgba(5,150,105,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Contactar por WhatsApp"
    >
      <Icon name="ChatBubbleLeftRightIcon" size={24} />
    </button>
  );
}
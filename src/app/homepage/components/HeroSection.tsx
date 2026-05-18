'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onWhatsAppClick: () => void;
  onProjectInquiry: () => void;
}

export default function HeroSection({ onWhatsAppClick, onProjectInquiry }: HeroSectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-primary via-brand-purple to-primary overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm mb-6">
            <Icon name="CheckBadgeIcon" size={20} className="text-conversion" variant="solid" />
            <span className="text-sm font-medium text-white">Más de 7 años de experiencia comprobada</span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transformo Desafíos Empresariales en
            <span className="block mt-2 bg-gradient-to-r from-accent to-conversion bg-clip-text text-transparent">
              Soluciones Digitales Elegantes
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            Socio tecnológico confiable especializado en JavaScript, React, Next.js, Node.js y C#/.NET. Construyo aplicaciones web escalables que impulsan el crecimiento empresarial y superan expectativas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={isHydrated ? onWhatsAppClick : undefined}
              disabled={!isHydrated}
              className="group flex items-center space-x-2 rounded-lg bg-conversion px-8 py-4 text-base font-semibold text-conversion-foreground shadow-prominent transition-all duration-200 hover:scale-105 hover:shadow-[0_20px_50px_rgba(5,150,105,0.4)] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Hablemos por WhatsApp</span>
              <Icon name="ArrowRightIcon" size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={isHydrated ? onProjectInquiry : undefined}
              disabled={!isHydrated}
              className="flex items-center space-x-2 rounded-lg bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white border-2 border-white/20 transition-all duration-200 hover:bg-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
            >
              <Icon name="DocumentTextIcon" size={20} />
              <span>Solicitar Proyecto</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={24} className="text-conversion" variant="solid" />
              <span className="text-sm font-medium">10+ Proyectos Completados</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="StarIcon" size={24} className="text-accent" variant="solid" />
              <span className="text-sm font-medium">98% Satisfacción Cliente</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="ClockIcon" size={24} className="text-trust" variant="solid" />
              <span className="text-sm font-medium">Entrega Puntual Garantizada</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
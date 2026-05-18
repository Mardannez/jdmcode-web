'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  onWhatsAppClick: () => void;
  onProjectInquiry: () => void;
}

export default function CTASection({ onWhatsAppClick, onProjectInquiry }: CTASectionProps) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-primary via-brand-purple to-primary py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6">
          <Icon name="RocketLaunchIcon" size={20} className="text-accent" variant="solid" />
          <span className="text-sm font-medium text-white">Comienza Tu Proyecto Hoy</span>
        </div>

        <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          ¿Listo para Transformar Tu Idea en Realidad?
        </h2>

        <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Trabajemos juntos para crear soluciones digitales que impulsen tu negocio. Conversación inicial sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={isHydrated ? onWhatsAppClick : undefined}
            disabled={!isHydrated}
            className="group flex items-center space-x-2 rounded-lg bg-conversion px-8 py-4 text-base font-semibold text-conversion-foreground shadow-prominent transition-all duration-200 hover:scale-105 hover:shadow-[0_20px_50px_rgba(5,150,105,0.4)] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            <span>Contactar por WhatsApp</span>
            <Icon name="ArrowRightIcon" size={16} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={isHydrated ? onProjectInquiry : undefined}
            disabled={!isHydrated}
            className="flex items-center space-x-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary transition-all duration-200 hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
          >
            <Icon name="DocumentTextIcon" size={20} />
            <span>Solicitar Cotización</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-white/80">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircleIcon" size={20} className="text-conversion" variant="solid" />
            <span className="text-sm font-medium">Respuesta en 24 horas</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ShieldCheckIcon" size={20} className="text-accent" variant="solid" />
            <span className="text-sm font-medium">Consulta gratuita</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ClockIcon" size={20} className="text-trust" variant="solid" />
            <span className="text-sm font-medium">Sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me gustaría discutir un proyecto contigo.');
    window.open(`https://wa.me/89783555?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-primary via-brand-purple to-accent py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold text-white sm:text-4xl mb-6">
          ¿Listo para Transformar tu Idea en Realidad?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Trabajemos juntos para crear soluciones digitales que impulsen tu negocio. Con más de 7 años de experiencia, estoy listo para hacer realidad tu visión.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center space-x-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-prominent hover:scale-102 transition-all duration-200"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} />
            <span>Hablemos por WhatsApp</span>
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center space-x-2 rounded-lg bg-transparent border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            <Icon name="EnvelopeIcon" size={24} />
            <span>Enviar Mensaje</span>
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/90">
          <div className="flex items-center space-x-2">
            <Icon name="ClockIcon" size={24} />
            <span className="text-sm">Respuesta en 24h</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="ShieldCheckIcon" size={24} />
            <span className="text-sm">Confidencialidad Garantizada</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckBadgeIcon" size={24} />
            <span className="text-sm">Sin Compromiso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
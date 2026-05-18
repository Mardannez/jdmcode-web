import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola! Me interesa discutir un proyecto similar al caso de estudio que acabo de revisar.');
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-brand-purple">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-headline text-3xl font-bold text-white mb-6 sm:text-4xl">
          ¿Listo para Transformar tu Negocio?
        </h2>
        <p className="text-xl text-white/90 mb-10 leading-relaxed">
          Trabajemos juntos para crear una solución personalizada que impulse tu crecimiento y supere tus expectativas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-conversion px-8 py-4 text-lg font-semibold text-conversion-foreground shadow-prominent hover:scale-102 transition-all duration-200"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={24} />
            <span>Hablemos por WhatsApp</span>
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-prominent hover:scale-102 transition-all duration-200"
          >
            <Icon name="EnvelopeIcon" size={24} />
            <span>Enviar Consulta</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
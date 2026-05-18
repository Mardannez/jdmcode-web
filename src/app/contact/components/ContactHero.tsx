import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  onWhatsAppClick: () => void;
}

export default function ContactHero({ onWhatsAppClick }: ContactHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-brand-purple to-accent py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-white mr-2" />
            <span className="text-sm font-medium text-white">Disponible para Nuevos Proyectos</span>
          </div>
          
          <h1 className="font-headline text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6">
            Hablemos de Tu Proyecto
          </h1>
          
          <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl mb-8">
            ¿Tienes una idea que quieres convertir en realidad? Estoy aquí para ayudarte. Con más de 5 años de experiencia transformando desafíos empresariales en soluciones digitales elegantes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onWhatsAppClick}
              className="group flex items-center space-x-2 rounded-lg bg-conversion px-8 py-4 text-base font-semibold text-conversion-foreground shadow-prominent transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Iniciar Conversación</span>
              <Icon name="ArrowRightIcon" size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <a
              href="tel:+50489783555"
              className="flex items-center space-x-2 rounded-lg bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
            >
              <Icon name="PhoneIcon" size={20} />
              <span>+504 8978-3555</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: number;
  icon: string;
  title: string;
  description: string;
  value: string;
  action: string;
  actionType: 'email' | 'phone' | 'whatsapp' | 'link';
  available: string;
}

interface ContactMethodsProps {
  onWhatsAppClick: () => void;
}

export default function ContactMethods({ onWhatsAppClick }: ContactMethodsProps) {
  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      icon: 'EnvelopeIcon',
      title: 'Email',
      description: 'Envíame un correo y te responderé en 24 horas',
      value: 'dantrochez88@gmial.com',
      action: 'mailto:dantrochez88@gmial.com',
      actionType: 'email',
      available: 'Respuesta en 24h'
    },
    {
      id: 2,
      icon: 'PhoneIcon',
      title: 'Teléfono',
      description: 'Llámame directamente para consultas urgentes',
      value: '+504 8978-3555',
      action: 'tel:+504 8978-3555',
      actionType: 'phone',
      available: 'Lun-Vie 9:00-18:00'
    },
    {
      id: 3,
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp',
      description: 'Chatea conmigo para respuestas rápidas',
      value: 'Chat Directo',
      action: 'whatsapp',
      actionType: 'whatsapp',
      available: 'Respuesta inmediata'
    },
    {
      id: 4,
      icon: 'MapPinIcon',
      title: 'Ubicación',
      description: 'Reuniones presenciales en Choluteca',
      value: 'Choluteca, Honduras',
      action: 'https://maps.app.goo.gl/bsC5P5Ehow7fhYwV9',
      actionType: 'link',
      available: 'Con cita previa'
    }
  ];

  const handleMethodClick = (method: ContactMethod) => {
    if (method.actionType === 'whatsapp') {
      onWhatsAppClick();
    } else if (method.actionType === 'link') {
      window.open(method.action, '_blank');
    } else {
      window.location.href = method.action;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Múltiples Formas de Contactar
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Elige el método que más te convenga. Estoy disponible a través de varios canales para tu comodidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => handleMethodClick(method)}
              className="group bg-card rounded-xl p-6 shadow-subtle hover:shadow-prominent transition-all duration-300 hover:scale-102 text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={method.icon as any} size={24} />
                </div>
                <div className="flex items-center space-x-1 text-xs font-medium text-conversion">
                  <Icon name="ClockIcon" size={14} />
                  <span>{method.available}</span>
                </div>
              </div>
              
              <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                {method.title}
              </h3>
              
              <p className="text-sm text-text-secondary mb-3">
                {method.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  {method.value}
                </span>
                <Icon 
                  name="ArrowRightIcon" 
                  size={16} 
                  className="text-primary transition-transform group-hover:translate-x-1" 
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
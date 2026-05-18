import Icon from '@/components/ui/AppIcon';

interface ResponseMetric {
  id: number;
  icon: string;
  label: string;
  value: string;
  description: string;
}

export default function ResponseTimeInfo() {
  const metrics: ResponseMetric[] = [
    {
      id: 1,
      icon: 'ClockIcon',
      label: 'Tiempo de Respuesta',
      value: '< 24 horas',
      description: 'Respondo a todas las consultas en menos de un día laboral'
    },
    {
      id: 2,
      icon: 'ChatBubbleLeftRightIcon',
      label: 'WhatsApp',
      value: 'Inmediato',
      description: 'Respuestas rápidas para consultas urgentes'
    },
    {
      id: 3,
      icon: 'CalendarIcon',
      label: 'Primera Reunión',
      value: '2-3 días',
      description: 'Agenda tu consulta inicial en pocos días'
    },
    {
      id: 4,
      icon: 'DocumentTextIcon',
      label: 'Propuesta',
      value: '3-5 días',
      description: 'Recibe una propuesta detallada después de la consulta'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-brand-purple/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Compromiso de Respuesta
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Valoro tu tiempo. Aquí está mi compromiso de respuesta para diferentes tipos de comunicación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-prominent transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <Icon name={metric.icon as any} size={28} />
              </div>
              
              <div className="text-center">
                <h3 className="font-headline text-lg font-semibold text-text-primary mb-2">
                  {metric.label}
                </h3>
                
                <div className="text-3xl font-bold text-primary mb-3">
                  {metric.value}
                </div>
                
                <p className="text-sm text-text-secondary">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card rounded-2xl p-8 shadow-subtle">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success flex-shrink-0">
                <Icon name="CheckBadgeIcon" size={24} />
              </div>
              <div>
                <h3 className="font-headline text-xl font-semibold text-text-primary mb-2">
                  Garantía de Respuesta
                </h3>
                <p className="text-text-secondary">
                  Si no recibes respuesta en 24 horas, tu primera consulta es completamente gratuita.
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="ShieldCheckIcon" size={20} className="text-success" />
              <span>100% de satisfacción garantizada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
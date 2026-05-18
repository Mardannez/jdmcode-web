import Icon from '@/components/ui/AppIcon';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  icon: string;
}

interface TimelineSectionProps {
  timeline: TimelineItem[];
}

export default function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Trayectoria Profesional
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary via-brand-purple to-accent"></div>
          <p className="mt-4 text-lg text-text-secondary">
            Más de 7 años transformando ideas en soluciones digitales exitosas
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-brand-purple to-accent hidden lg:block"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-3 mb-4 lg:mb-0">
                    <div className="flex items-center space-x-4 lg:justify-end">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand-purple shadow-prominent">
                        <Icon name={item.icon as any} size={32} className="text-white" />
                      </div>
                      <span className="font-headline text-2xl font-bold text-primary lg:hidden">
                        {item.year}
                      </span>
                    </div>
                    <span className="hidden lg:block text-right font-headline text-2xl font-bold text-primary mt-2">
                      {item.year}
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <div className="rounded-xl bg-card p-6 shadow-subtle hover:shadow-prominent transition-shadow duration-300">
                      <h3 className="font-headline text-xl font-bold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-secondary mb-3">{item.company}</p>
                      <p className="text-text-secondary mb-4">{item.description}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-text-primary">Logros Clave:</p>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="CheckCircleIcon" size={20} className="text-conversion flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-text-secondary">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
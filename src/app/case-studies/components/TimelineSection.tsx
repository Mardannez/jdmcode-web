import Icon from '@/components/ui/AppIcon';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  milestone: boolean;
}

interface TimelineSectionProps {
  events: TimelineEvent[];
}

export default function TimelineSection({ events }: TimelineSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            Cronología del Proyecto
          </h2>
          <p className="text-lg text-text-secondary">
            Un recorrido detallado por las fases clave del desarrollo y los hitos alcanzados.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={event.id} className="relative flex gap-6 md:gap-8">
                <div className="flex-shrink-0 hidden md:flex">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-full ${
                      event.milestone
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-text-secondary'
                    } border-4 border-background shadow-subtle`}
                  >
                    <Icon
                      name={event.milestone ? 'StarIcon' : 'CheckCircleIcon'}
                      size={24}
                    />
                  </div>
                </div>
                <div className="flex-1 bg-card rounded-xl p-6 shadow-subtle border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {event.date}
                    </span>
                    {event.milestone && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                        <Icon name="TrophyIcon" size={16} />
                        Hito Clave
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline text-xl font-bold text-text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
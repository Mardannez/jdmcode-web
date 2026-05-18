import Icon from '@/components/ui/AppIcon';

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  skills: string[];
  icon: string;
  issuer: string;
  certificateUrl: string;
}

interface LearningTimelineProps {
  events: TimelineEvent[];
}

export default function LearningTimeline({ events }: LearningTimelineProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-subtle">
      <h2 className="font-headline mb-6 text-2xl font-bold text-text-primary">
        Línea de tiempo de aprendizaje
      </h2>
      <div className="relative">
        <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-border" />
        <div className="space-y-8">
          {events.map((event) => (
            <div
              key={event.certificateUrl}
              className="relative flex items-start space-x-4"
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand-purple text-2xl">
                  {event.icon}
                </div>
              </div>
              <div className="min-w-0 flex-1 pt-2">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {event.year}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-text-secondary">
                    {event.issuer}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold text-text-primary">
                  <a
                    href={event.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-2 transition-colors hover:text-primary hover:underline"
                  >
                    {event.title}
                  </a>
                </h3>
                <p className="mb-3 text-sm text-text-secondary">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-muted px-2 py-1 text-xs text-text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={event.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Ver credencial
                  <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

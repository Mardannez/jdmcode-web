interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  duration: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-brand-purple to-conversion hidden md:block" />
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex gap-6">
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-brand-purple text-white font-headline font-bold text-xl shadow-subtle z-10">
              {index + 1}
            </div>
            
            <div className="flex-1 bg-card rounded-xl border border-border p-6 shadow-subtle hover:shadow-prominent transition-shadow duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">{step.phase}</span>
                <span className="text-xs text-text-secondary bg-muted px-3 py-1 rounded-full">{step.duration}</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-text-primary mb-2">{step.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
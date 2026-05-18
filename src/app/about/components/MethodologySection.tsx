import Icon from '@/components/ui/AppIcon';

interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface MethodologySectionProps {
  methodology: MethodologyStep[];
}

export default function MethodologySection({ methodology }: MethodologySectionProps) {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Mi Metodología de Trabajo
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary via-brand-purple to-accent"></div>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Un proceso probado que garantiza resultados excepcionales y comunicación transparente
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {methodology.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="rounded-xl bg-background p-6 shadow-subtle hover:shadow-prominent transition-all duration-300 h-full border-2 border-transparent hover:border-primary">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand-purple">
                    <Icon name={step.icon as any} size={28} className="text-white" />
                  </div>
                  <span className="font-headline text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-headline text-xl font-bold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < methodology.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <Icon name="ChevronRightIcon" size={24} className="text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
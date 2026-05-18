import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface SolutionStep {
  id: number;
  phase: string;
  title: string;
  description: string;
  icon: string;
}

interface SolutionSectionProps {
  solutions: SolutionStep[];
  solutionImage: string;
  solutionImageAlt: string;
}

export default function SolutionSection({
  solutions,
  solutionImage,
  solutionImageAlt,
}: SolutionSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            La Solución
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            Implementamos un enfoque estratégico y tecnológico que transformó completamente la operación del negocio.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div key={solution.id} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name={solution.icon as any} size={20} className="text-primary" />
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {solution.phase}
                    </span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-text-primary mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-prominent">
              <AppImage
                src={solutionImage}
                alt={solutionImageAlt}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Icon from '@/components/ui/AppIcon';

interface Technology {
  id: number;
  name: string;
  category: string;
  icon: string;
  description: string;
}

interface TechStackSectionProps {
  technologies: Technology[];
}

export default function TechStackSection({ technologies }: TechStackSectionProps) {
  const categories = Array.from(new Set(technologies.map((tech) => tech.category)));

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            Stack Tecnológico
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Seleccionamos cuidadosamente las tecnologías más adecuadas para garantizar escalabilidad, rendimiento y mantenibilidad.
          </p>
        </div>
        {categories.map((category) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="font-headline text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded-full"></div>
              {category}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-prominent transition-all duration-300 border border-border"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={tech.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary mb-1">{tech.name}</h4>
                        <p className="text-sm text-text-secondary">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
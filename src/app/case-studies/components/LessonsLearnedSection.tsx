import Icon from '@/components/ui/AppIcon';

interface Lesson {
  id: number;
  title: string;
  description: string;
  category: 'technical' | 'process' | 'business';
}

interface LessonsLearnedSectionProps {
  lessons: Lesson[];
}

export default function LessonsLearnedSection({ lessons }: LessonsLearnedSectionProps) {
  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'technical':
        return {
          icon: 'CodeBracketIcon',
          label: 'Técnico',
          color: 'text-primary bg-primary/10',
        };
      case 'process':
        return {
          icon: 'CogIcon',
          label: 'Proceso',
          color: 'text-accent bg-accent/10',
        };
      case 'business':
        return {
          icon: 'BriefcaseIcon',
          label: 'Negocio',
          color: 'text-conversion bg-conversion/10',
        };
      default:
        return {
          icon: 'LightBulbIcon',
          label: 'General',
          color: 'text-text-secondary bg-muted',
        };
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            Lecciones Aprendidas
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            Insights valiosos y optimizaciones descubiertas durante el desarrollo que pueden beneficiar proyectos futuros.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lessons.map((lesson) => {
            const config = getCategoryConfig(lesson.category);
            return (
              <div
                key={lesson.id}
                className="bg-card rounded-xl p-6 shadow-subtle hover:shadow-prominent transition-all duration-300 border border-border"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${config.color} flex items-center justify-center`}>
                    <Icon name={config.icon as any} size={20} />
                  </div>
                  <span className={`text-sm font-semibold ${config.color.split(' ')[0]} uppercase tracking-wide`}>
                    {config.label}
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-text-primary mb-2">
                  {lesson.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {lesson.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
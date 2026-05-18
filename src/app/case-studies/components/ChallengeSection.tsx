import Icon from '@/components/ui/AppIcon';

interface Challenge {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ChallengeSectionProps {
  challenges: Challenge[];
}

export default function ChallengeSection({ challenges }: ChallengeSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            El Desafío
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            Identificamos los principales obstáculos que impedían el crecimiento del negocio y diseñamos una estrategia integral para superarlos.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-card rounded-xl p-8 shadow-subtle hover:shadow-prominent transition-all duration-300 border border-border"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-destructive/10">
                <Icon name={challenge.icon as any} size={28} className="text-destructive" />
              </div>
              <h3 className="font-headline text-xl font-bold text-text-primary mb-3">
                {challenge.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
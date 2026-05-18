import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
  trend: 'up' | 'down';
}

interface ResultsSectionProps {
  metrics: Metric[];
  impactDescription: string;
}

export default function ResultsSection({ metrics, impactDescription }: ResultsSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-success to-conversion">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center text-white">
          <h2 className="font-headline text-3xl font-bold mb-4 sm:text-4xl">
            Resultados Medibles
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {impactDescription}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                <Icon name={metric.icon as any} size={32} className="text-white" />
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <span className="font-headline text-4xl font-bold text-white">
                  {metric.value}
                </span>
                <Icon
                  name={metric.trend === 'up' ? 'ArrowTrendingUpIcon' : 'ArrowTrendingDownIcon'}
                  size={24}
                  className="text-white"
                />
              </div>
              <p className="text-white/90 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import Icon from '@/components/ui/AppIcon';

interface Value {
  title: string;
  description: string;
  icon: string;
}

interface ValuesSectionProps {
  values: Value[];
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold text-text-primary sm:text-4xl mb-4">
            Mis Valores Profesionales
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary via-brand-purple to-accent"></div>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Los principios que guían cada proyecto y relación con mis clientes
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="rounded-xl bg-card p-8 shadow-subtle hover:shadow-prominent transition-all duration-300 hover:scale-102"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand-purple mb-6">
                <Icon name={value.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="font-headline text-xl font-bold text-text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
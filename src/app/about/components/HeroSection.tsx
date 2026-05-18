import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function HeroSection({ name, title, description, image, imageAlt }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-brand-purple/5 to-accent/5 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-semibold text-primary">Desarrollador Full-Stack Senior</span>
            </div>
            <h1 className="font-headline text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl">
              {name}
            </h1>
            <p className="text-xl font-semibold text-secondary">{title}</p>
            <p className="text-lg text-text-secondary leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-conversion/10">
                  <span className="text-2xl font-bold text-conversion">7+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Años de</p>
                  <p className="text-xs text-text-secondary">Experiencia</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10">
                  <span className="text-2xl font-bold text-brand-purple">10+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Proyectos</p>
                  <p className="text-xs text-text-secondary">Completados</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-2xl font-bold text-accent">98%</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">Satisfacción</p>
                  <p className="text-xs text-text-secondary">del Cliente</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-brand-purple/20 to-accent/20 blur-2xl"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-prominent">
              <AppImage
                src={image}
                alt={imageAlt}
                className="h-[580px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import AppImage from '@/components/ui/AppImage';

interface CaseStudyHeroProps {
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  duration: string;
  heroImage: string;
  heroImageAlt: string;
}

export default function CaseStudyHero({
  title,
  subtitle,
  client,
  industry,
  duration,
  heroImage,
  heroImageAlt,
}: CaseStudyHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-brand-purple py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-white">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium">Caso de Éxito</span>
            </div>
            <h1 className="font-headline text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl mb-6">
              {title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {subtitle}
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-white/70 mb-1">Cliente</p>
                <p className="font-semibold text-lg">{client}</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Industria</p>
                <p className="font-semibold text-lg">{industry}</p>
              </div>
              <div>
                <p className="text-sm text-white/70 mb-1">Duración</p>
                <p className="font-semibold text-lg">{duration}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-prominent">
              <AppImage
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
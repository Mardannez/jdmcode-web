import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
  image: string;
  imageAlt: string;
  certificateUrl: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-headline mb-4 text-3xl font-bold text-text-primary sm:text-4xl">
            Certificaciones y formación continua
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary via-brand-purple to-accent"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            Comprometido con el aprendizaje continuo y la excelencia técnica
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <a
              key={cert.certificateUrl}
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver credencial oficial en ${cert.issuer}: ${cert.name}`}
              className="group block rounded-xl bg-background p-6 shadow-subtle transition-all duration-300 hover:shadow-prominent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-lg">
                <AppImage
                  src={cert.image}
                  alt={cert.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand-purple">
                  <Icon name={cert.icon as any} size={20} className="text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-headline mb-1 text-lg font-bold text-text-primary underline-offset-2 group-hover:underline">
                    {cert.name}
                  </h3>
                  <p className="mb-1 text-sm text-secondary">{cert.issuer}</p>
                  {cert.year ? (
                    <p className="mb-2 text-xs text-text-secondary">{cert.year}</p>
                  ) : null}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Ver credencial oficial
                    <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-xs text-text-secondary">
          Imágenes ilustrativas de{' '}
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            Unsplash
          </a>{' '}
          (licencia propia de Unsplash; libre uso sujeto a sus términos).
        </p>
      </div>
    </section>
  );
}

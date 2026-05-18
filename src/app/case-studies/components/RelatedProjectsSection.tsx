import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface RelatedProject {
  id: number;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  slug: string;
}

interface RelatedProjectsSectionProps {
  projects: RelatedProject[];
}

export default function RelatedProjectsSection({ projects }: RelatedProjectsSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-text-primary mb-4 sm:text-4xl">
            Proyectos Relacionados
          </h2>
          <p className="text-lg text-text-secondary">
            Explora otros casos de éxito similares que podrían interesarte.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/case-studies/${project.slug}`}
              className="group bg-card rounded-xl overflow-hidden shadow-subtle hover:shadow-prominent transition-all duration-300 border border-border"
            >
              <div className="overflow-hidden h-48">
                <AppImage
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-sm font-semibold text-primary mb-2">
                  {project.category}
                </span>
                <h3 className="font-headline text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Ver caso de estudio</span>
                  <Icon name="ArrowRightIcon" size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
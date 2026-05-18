'use client';

import { useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  icon: string;
}

interface Metric {
  label: string;
  value: string;
  icon: string;
}

interface Testimonial {
  client: string;
  role: string;
  comment: string;
  avatar: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  alt: string;
  technologies: Technology[];
  timeline: string;
  teamSize: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: Metric[];
  testimonial?: Testimonial;
  gallery: Array<{ url: string; alt: string }>;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (project && isHydrated) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project, isHydrated]);

  if (!project || !isHydrated) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 p-4">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-card shadow-prominent">
        <button
          onClick={onClose}
          className="sticky top-4 right-4 z-10 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white transition-all hover:bg-slate-900"
        >
          <Icon name="XMarkIcon" size={24} />
        </button>

        <div className="p-8">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center space-x-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {project.category}
                </span>
                <span className="text-sm text-text-secondary">{project.industry}</span>
              </div>
              <h2 className="font-headline text-3xl font-bold text-text-primary">{project.title}</h2>
            </div>
            <div className="flex space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
                >
                  <Icon name="GlobeAltIcon" size={18} />
                  <span>Ver Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 rounded-md bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105"
                >
                  <Icon name="CodeBracketIcon" size={18} />
                  <span>Ver Código</span>
                </a>
              )}
            </div>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-lg">
              <AppImage
                src={project.gallery[selectedGalleryImage].url}
                alt={project.gallery[selectedGalleryImage].alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedGalleryImage(index)}
                  className={`relative h-36 overflow-hidden rounded-lg transition-all ${
                    selectedGalleryImage === index ? 'ring-4 ring-primary' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <AppImage src={img.url} alt={img.alt} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-muted p-4">
              <div className="mb-2 flex items-center space-x-2 text-primary">
                <Icon name="ClockIcon" size={20} />
                <span className="text-sm font-medium">Duración</span>
              </div>
              <p className="font-semibold text-text-primary">{project.timeline}</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <div className="mb-2 flex items-center space-x-2 text-primary">
                <Icon name="UserGroupIcon" size={20} />
                <span className="text-sm font-medium">Equipo</span>
              </div>
              <p className="font-semibold text-text-primary">{project.teamSize}</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <div className="mb-2 flex items-center space-x-2 text-primary">
                <Icon name="CodeBracketIcon" size={20} />
                <span className="text-sm font-medium">Tecnologías</span>
              </div>
              <p className="font-semibold text-text-primary">{project.technologies.length}</p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <div className="mb-2 flex items-center space-x-2 text-primary">
                <Icon name="BriefcaseIcon" size={20} />
                <span className="text-sm font-medium">Industria</span>
              </div>
              <p className="font-semibold text-text-primary">{project.industry}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 font-headline text-xl font-bold text-text-primary">Descripción del Proyecto</h3>
            <p className="text-text-secondary leading-relaxed">{project.fullDescription}</p>
          </div>

          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border p-6">
              <div className="mb-3 flex items-center space-x-2 text-cta">
                <Icon name="ExclamationTriangleIcon" size={24} />
                <h4 className="font-headline text-lg font-bold">Desafío</h4>
              </div>
              <p className="text-sm text-text-secondary">{project.challenge}</p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <div className="mb-3 flex items-center space-x-2 text-primary">
                <Icon name="LightBulbIcon" size={24} />
                <h4 className="font-headline text-lg font-bold">Solución</h4>
              </div>
              <p className="text-sm text-text-secondary">{project.solution}</p>
            </div>
            <div className="rounded-lg border border-border p-6">
              <div className="mb-3 flex items-center space-x-2 text-conversion">
                <Icon name="CheckCircleIcon" size={24} />
                <h4 className="font-headline text-lg font-bold">Resultados</h4>
              </div>
              <p className="text-sm text-text-secondary">{project.results}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 font-headline text-xl font-bold text-text-primary">Métricas de Éxito</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {project.metrics.map((metric, index) => (
                <div key={index} className="rounded-lg bg-gradient-to-br from-primary/10 to-brand-purple/10 p-6">
                  <div className="mb-2 flex items-center space-x-2 text-primary">
                    <Icon name={metric.icon as any} size={24} />
                    <span className="text-sm font-medium">{metric.label}</span>
                  </div>
                  <p className="font-headline text-3xl font-bold text-text-primary">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-4 font-headline text-xl font-bold text-text-primary">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 rounded-lg bg-muted px-4 py-2 transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name={tech.icon as any} size={20} />
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="rounded-lg bg-gradient-to-br from-primary/5 to-brand-purple/5 p-6">
              <h3 className="mb-4 font-headline text-xl font-bold text-text-primary">Testimonio del Cliente</h3>
              <div className="flex items-start space-x-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  <AppImage
                    src={project.testimonial.avatar}
                    alt={project.testimonial.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="mb-3 italic text-text-secondary">&quot;{project.testimonial.comment}&quot;</p>
                  <div>
                    <p className="font-semibold text-text-primary">{project.testimonial.client}</p>
                    <p className="text-sm text-text-secondary">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
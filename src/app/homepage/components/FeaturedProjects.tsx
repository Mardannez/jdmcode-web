'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { featuredProjects as mockProjects } from '@/data/projects';


export default function FeaturedProjects() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? mockProjects.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev === mockProjects.length - 1 ? 0 : prev + 1);
  };

  const currentProject = mockProjects[currentIndex];

  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 px-4 py-2 mb-4">
            <Icon name="BriefcaseIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Proyectos Destacados</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Soluciones que Generan Resultados
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Explora proyectos recientes que demuestran experiencia técnica y impacto empresarial medible
          </p>
        </div>

        <div className="relative bg-card rounded-2xl shadow-prominent overflow-hidden">
          <div className="grid lg:grid-cols-2 lg:items-stretch gap-0">
            <div className="relative w-full min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] bg-muted/50 overflow-hidden">
              <Image
                key={currentProject.id}
                src={currentProject.image}
                alt={currentProject.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-top p-4 sm:p-6"
                unoptimized
              />

              <div className="absolute top-4 left-4 z-10">
                <span className="inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground shadow-subtle">
                  {currentProject.category}
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-base sm:text-lg text-text-secondary mb-6 leading-relaxed">
                  {currentProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-text-primary mb-3">Tecnologías Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) =>
                    <span
                      key={index}
                      className="inline-flex items-center space-x-1 rounded-md bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">

                        <Icon name="CodeBracketIcon" size={16} />
                        <span>{tech}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors">

                  <span>Ir a proyecto oficial</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </a>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={isHydrated ? handlePrevious : undefined}
                    disabled={!isHydrated}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-secondary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Proyecto anterior">

                    <Icon name="ChevronLeftIcon" size={20} className="text-text-primary" />
                  </button>
                  <span className="text-sm font-medium text-text-secondary">
                    {currentIndex + 1} / {mockProjects.length}
                  </span>
                  <button
                    onClick={isHydrated ? handleNext : undefined}
                    disabled={!isHydrated}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-muted hover:bg-secondary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Siguiente proyecto">

                    <Icon name="ChevronRightIcon" size={20} className="text-text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center space-x-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-subtle transition-all duration-200 hover:scale-102 hover:shadow-prominent">

            <span>Ver Todos los Proyectos</span>
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>);

}
'use client';

import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import ProjectModal from './ProjectModal';
import Icon from '@/components/ui/AppIcon';
import {
  buildPortfolioProjects,
  type PortfolioProject,
} from '@/data/projects';

type Project = PortfolioProject;

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

const PortfolioInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProjects = buildPortfolioProjects();

  const normalizeTechId = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]/g, '');

  const categoryMap = new Map<string, string>();
  mockProjects.forEach((p) => {
    const id = p.category.toLowerCase().replace(/\s+/g, '-');
    categoryMap.set(id, p.category);
  });
  const categories: FilterOption[] = Array.from(categoryMap.entries()).map(
    ([id, label]) => ({
      id,
      label,
      count: mockProjects.filter((p) => p.category === label).length,
    }),
  );

  const techMap = new Map<string, string>();
  mockProjects.forEach((p) =>
    p.technologies.forEach((t) => techMap.set(normalizeTechId(t.name), t.name)),
  );
  const technologies: FilterOption[] = Array.from(techMap.entries()).map(
    ([id, label]) => ({
      id,
      label,
      count: mockProjects.filter((p) =>
        p.technologies.some((t) => normalizeTechId(t.name) === id),
      ).length,
    }),
  );

  const industryMap = new Map<string, string>();
  mockProjects.forEach((p) => industryMap.set(p.industrySlug, p.industry));
  const industries: FilterOption[] = Array.from(industryMap.entries()).map(
    ([id, label]) => ({
      id,
      label,
      count: mockProjects.filter((p) => p.industrySlug === id).length,
    }),
  );

  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      project.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
    const matchesTechnology =
      selectedTechnology === 'all' ||
      project.technologies.some(
        (tech) => normalizeTechId(tech.name) === selectedTechnology,
      );
    const matchesIndustry =
      selectedIndustry === 'all' || project.industrySlug === selectedIndustry;
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTechnology && matchesIndustry && matchesSearch;
  });

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedTechnology('all');
    setSelectedIndustry('all');
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 h-32 animate-pulse rounded-lg bg-muted" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-96 animate-pulse rounded-lg bg-muted" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-headline text-4xl font-bold text-text-primary md:text-5xl">
            Portafolio de Proyectos
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Explora proyectos reales: sitios en producción, demos y sistemas
            desarrollados con stack moderno
          </p>
        </div>

        <FilterBar
          categories={categories}
          technologies={technologies}
          industries={industries}
          selectedCategory={selectedCategory}
          selectedTechnology={selectedTechnology}
          selectedIndustry={selectedIndustry}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onTechnologyChange={setSelectedTechnology}
          onIndustryChange={setSelectedIndustry}
          onSearchChange={setSearchQuery}
          onClearFilters={handleClearFilters}
        />

        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-text-secondary">
            Mostrando{' '}
            <span className="font-semibold text-text-primary">
              {filteredProjects.length}
            </span>{' '}
            de{' '}
            <span className="font-semibold text-text-primary">
              {mockProjects.length}
            </span>{' '}
            proyectos
          </p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-md p-2 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-text-secondary hover:bg-muted/80'
              }`}
            >
              <Icon name="Squares2X2Icon" size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`rounded-md p-2 transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-text-secondary hover:bg-muted/80'
              }`}
            >
              <Icon name="ListBulletIcon" size={20} />
            </button>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="rounded-lg bg-card p-12 text-center shadow-subtle">
            <Icon
              name="FolderOpenIcon"
              size={64}
              className="mx-auto mb-4 text-text-secondary opacity-50"
            />
            <h3 className="mb-2 font-headline text-xl font-bold text-text-primary">
              No se encontraron proyectos
            </h3>
            <p className="mb-6 text-text-secondary">
              Intenta ajustar tus filtros de búsqueda
            </p>
            <button
              onClick={handleClearFilters}
              className="rounded-md bg-primary px-6 py-2 font-semibold text-primary-foreground transition-all hover:scale-105"
            >
              Limpiar Filtros
            </button>
          </div>
        ) : (
          <div
            className={
              viewMode === 'grid'
                ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                : 'space-y-6'
            }
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        )}

        <div className="mt-12 rounded-lg bg-gradient-to-br from-primary/10 to-brand-purple/10 p-8 text-center">
          <h2 className="mb-4 font-headline text-2xl font-bold text-text-primary">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mb-6 text-text-secondary">
            Trabajemos juntos para convertir tu visión en realidad
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-subtle transition-all hover:scale-105 hover:shadow-prominent"
          >
            <span>Iniciar Conversación</span>
            <Icon name="ArrowRightIcon" size={20} />
          </a>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default PortfolioInteractive;

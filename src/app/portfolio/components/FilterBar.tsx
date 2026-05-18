'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterBarProps {
  categories: FilterOption[];
  technologies: FilterOption[];
  industries: FilterOption[];
  selectedCategory: string;
  selectedTechnology: string;
  selectedIndustry: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTechnologyChange: (technology: string) => void;
  onIndustryChange: (industry: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const FilterBar = ({
  categories,
  technologies,
  industries,
  selectedCategory,
  selectedTechnology,
  selectedIndustry,
  searchQuery,
  onCategoryChange,
  onTechnologyChange,
  onIndustryChange,
  onSearchChange,
  onClearFilters,
}: FilterBarProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="mb-8 rounded-lg bg-card p-6 shadow-subtle">
        <div className="h-10 animate-pulse rounded-md bg-muted" />
      </div>
    );
  }

  const activeFiltersCount = [selectedCategory, selectedTechnology, selectedIndustry].filter(f => f !== 'all').length;

  return (
    <div className="mb-8 rounded-lg bg-card p-6 shadow-subtle">
      <div className="mb-6 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex items-center space-x-3">
          <Icon name="FunnelIcon" size={24} className="text-primary" />
          <h2 className="font-headline text-xl font-bold text-text-primary">Filtrar Proyectos</h2>
          {activeFiltersCount > 0 && (
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              {activeFiltersCount} activos
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          {activeFiltersCount > 0 && (
            <button
              onClick={onClearFilters}
              className="flex items-center space-x-1 rounded-md bg-muted px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-muted/80"
            >
              <Icon name="XMarkIcon" size={16} />
              <span>Limpiar Filtros</span>
            </button>
          )}
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center space-x-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground md:hidden"
          >
            <Icon name={showMobileFilters ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} />
            <span>{showMobileFilters ? 'Ocultar' : 'Mostrar'} Filtros</span>
          </button>
        </div>
      </div>

      <div className={`space-y-4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
        <div className="relative">
          <Icon name="MagnifyingGlassIcon" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-md border border-border bg-background py-2 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">Categoría</label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">Todas las Categorías</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label} ({cat.count})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">Tecnología</label>
            <select
              value={selectedTechnology}
              onChange={(e) => onTechnologyChange(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">Todas las Tecnologías</option>
              {technologies.map((tech) => (
                <option key={tech.id} value={tech.id}>
                  {tech.label} ({tech.count})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">Industria</label>
            <select
              value={selectedIndustry}
              onChange={(e) => onIndustryChange(e.target.value)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="all">Todas las Industrias</option>
              {industries.map((ind) => (
                <option key={ind.id} value={ind.id}>
                  {ind.label} ({ind.count})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
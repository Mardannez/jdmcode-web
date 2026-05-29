'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import type { PortfolioProject } from '@/data/projects';

type Project = PortfolioProject;

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-card shadow-subtle transition-all duration-300 hover:shadow-prominent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex space-x-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-all hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="GlobeAltIcon" size={16} />
                  <span>Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 rounded-md bg-slate-700 px-3 py-2 text-sm font-medium text-white transition-all hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="CodeBracketIcon" size={16} />
                  <span>Código</span>
                </a>
              )}
            </div>
          </div>
        </div>
        {project.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            Destacado
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {project.category}
          </span>
          <span className="text-xs text-text-secondary">{project.industry}</span>
        </div>

        <h3 className="mb-2 font-headline text-xl font-bold text-text-primary line-clamp-1">
          {project.title}
        </h3>

        <p className="mb-4 text-sm text-text-secondary line-clamp-2">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-1 rounded-md bg-muted px-2 py-1 text-xs font-medium text-text-secondary"
            >
              <Icon name={tech.icon as any} size={14} />
              <span>{tech.name}</span>
            </div>
          ))}
          {project.technologies.length > 4 && (
            <div className="flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-text-secondary">
              +{project.technologies.length - 4}
            </div>
          )}
        </div>

        <div className="mb-4 flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="ClockIcon" size={14} />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="UserGroupIcon" size={14} />
            <span>{project.teamSize}</span>
          </div>
        </div>

        <button
          onClick={() => onViewDetails(project)}
          className="flex w-full items-center justify-center space-x-2 rounded-md bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/90 hover:scale-102"
        >
          <span>Ver Detalles</span>
          <Icon name="ArrowRightIcon" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

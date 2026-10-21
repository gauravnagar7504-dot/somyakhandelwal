import React from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featured?: boolean;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  className = '',
}) => {
  return (
    <article
      className={`bg-white rounded-2xl border border-slate-border overflow-hidden group hover:border-cobalt/60 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-card-hover ${className}`}
    >
      {/* Clickable Image Thumbnail */}
      <div
        className="relative w-full aspect-[16/10] overflow-hidden bg-slate-surface cursor-pointer group/img shrink-0"
        onClick={() => onSelect(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-navy shadow-sm border border-slate-border/50">
          {project.category}
        </div>

        {/* Floating Inspect Pill */}
        <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-navy text-xs font-medium shadow-sm opacity-90 group-hover/img:opacity-100 transition-opacity">
          <Eye className="w-3.5 h-3.5 text-cobalt" />
          <span>Inspect</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          {/* Role Header (Sprint detail removed) */}
          <div className="mb-3">
            <span className="font-semibold text-cobalt font-mono text-xs uppercase tracking-wider">
              {project.role.split(',')[0]}
            </span>
          </div>

          <h3
            className="font-display font-bold text-xl sm:text-2xl text-navy group-hover:text-cobalt transition-colors cursor-pointer mb-3 leading-snug line-clamp-2 min-h-[3.5rem] flex items-center"
            onClick={() => onSelect(project)}
          >
            {project.title}
          </h3>

          <p className="text-sm text-slate-text leading-relaxed line-clamp-3 mb-6">
            {project.brief}
          </p>
        </div>

        {/* Card Footer: Client & Button (Tags removed) */}
        <div className="pt-4 border-t border-slate-border flex items-center justify-between mt-auto">
          <span className="text-xs text-slate-text font-mono truncate max-w-[150px]" title={project.client}>
            {project.client}
          </span>
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover group/btn shrink-0"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

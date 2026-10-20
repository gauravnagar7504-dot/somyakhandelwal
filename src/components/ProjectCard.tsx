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
  featured = false,
  className = '',
}) => {
  return (
    <article
      className={`bg-white rounded-2xl border border-slate-border overflow-hidden group hover:border-cobalt transition-all duration-300 flex flex-col shadow-sm hover:shadow-card-hover ${className}`}
    >
      {/* Clickable Image Thumbnail */}
      <div
        className={`relative w-full overflow-hidden bg-slate-surface cursor-pointer ${
          featured ? 'aspect-[16/10]' : 'aspect-[4/3]'
        }`}
        onClick={() => onSelect(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-navy text-xs font-semibold shadow-sm border border-slate-border">
            {project.category}
          </span>
          {featured && (
            <span className="px-3 py-1 rounded-md bg-cobalt text-white text-xs font-semibold shadow-sm">
              Featured Case
            </span>
          )}
        </div>

        {/* Floating Inspect Pill */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-navy text-xs font-medium shadow-sm group-hover:text-cobalt transition-colors">
          <Eye className="w-3.5 h-3.5 text-cobalt" />
          <span>Inspect Case</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-7 flex flex-col justify-between flex-grow gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-slate-text text-xs uppercase tracking-wider">
            <span>{project.role}</span>
            <span>{project.timeline}</span>
          </div>

          <h3
            className="font-display font-bold text-xl md:text-2xl text-navy group-hover:text-cobalt transition-colors cursor-pointer"
            onClick={() => onSelect(project)}
          >
            {project.title}
          </h3>

          <p className="text-xs font-medium text-cobalt uppercase tracking-wider">
            {project.subtitle}
          </p>

          <p className="text-sm text-slate-text mt-1 leading-relaxed line-clamp-3">
            {project.brief}
          </p>
        </div>

        {/* Card Footer: Tags & Button */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-border mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-surface text-slate-text border border-slate-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt hover:text-cobalt-hover transition-colors"
          >
            <span>View Monograph</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

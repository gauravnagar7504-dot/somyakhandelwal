import React from 'react';

export type CategoryFilter = 'all' | 'graphic-design' | 'social-media' | 'websites' | 'content-seo';

interface ProjectFilterProps {
  activeFilter: CategoryFilter;
  onFilterChange: (filter: CategoryFilter) => void;
  counts: Record<CategoryFilter, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeFilter,
  onFilterChange,
  counts,
}) => {
  const filters: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Work' },
    { key: 'graphic-design', label: 'Graphic Design' },
    { key: 'social-media', label: 'Social Media' },
    { key: 'websites', label: 'Websites' },
    { key: 'content-seo', label: 'Content & SEO' },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
      {filters.map(({ key, label }) => {
        const isActive = activeFilter === key;
        const count = counts[key] || 0;

        return (
          <button
            key={key}
            type="button"
            onClick={() => onFilterChange(key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-cobalt ${
              isActive
                ? 'bg-cobalt text-white shadow-sm'
                : 'bg-slate-surface text-slate-text hover:text-navy hover:bg-slate-border/50'
            }`}
            aria-pressed={isActive}
          >
            <span>{label}</span>
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                isActive
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-border text-slate-text'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

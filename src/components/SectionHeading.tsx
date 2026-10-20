import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  badge,
}) => {
  return (
    <div
      className={`flex flex-col ${
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-cobalt">
            {eyebrow}
          </span>
          {badge && (
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-surface text-slate-text border border-slate-border">
              {badge}
            </span>
          )}
        </div>
      )}
      <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-text mt-4 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

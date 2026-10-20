import React from 'react';

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  deliverable: string;
  icon?: React.ReactNode;
}

interface ProcessStepsProps {
  stages: ProcessStage[];
  columns?: 3 | 4;
  dark?: boolean;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  stages,
  columns = 3,
  dark = false,
}) => {
  const gridClasses =
    columns === 4
      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
      : 'grid grid-cols-1 md:grid-cols-3 gap-6';

  return (
    <div className={gridClasses}>
      {stages.map((stage) => (
        <div
          key={stage.step}
          className={`${
            dark
              ? 'bg-white border border-white/20 text-navy hover:shadow-2xl shadow-xl'
              : 'bg-white border border-slate-border text-navy hover:border-cobalt shadow-sm'
          } rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300`}
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <span
                className={`px-3 py-1 rounded-md text-xs font-semibold font-mono ${
                  dark
                    ? 'bg-slate-surface border border-slate-border text-cobalt font-bold'
                    : 'bg-slate-surface border border-slate-border text-cobalt'
                }`}
              >
                {stage.step}
              </span>
              {stage.icon && (
                <div className={dark ? 'text-cobalt p-2 rounded-lg bg-slate-surface border border-slate-border' : 'text-slate-text'}>
                  {stage.icon}
                </div>
              )}
            </div>

            <h3 className="font-display font-bold text-lg sm:text-xl text-navy mb-2.5">
              {stage.title}
            </h3>

            <p className="text-sm text-slate-text leading-relaxed">
              {stage.description}
            </p>
          </div>

          <div className="pt-5 mt-6 border-t border-slate-border flex items-center gap-2 text-xs font-semibold text-cobalt">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
            <span>{stage.deliverable}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

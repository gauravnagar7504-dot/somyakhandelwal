import React, { useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-navy/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full border border-slate-border shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-border bg-slate-surface">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cobalt"></span>
            <span className="text-xs uppercase tracking-wider font-semibold text-cobalt">
              Concept Case Study
            </span>
            <span className="text-slate-border">|</span>
            <span className="text-xs text-slate-text">{project.category}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-text hover:text-navy hover:bg-white transition-colors"
            aria-label="Close case study modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-cobalt/10 text-cobalt">
                {project.category}
              </span>
              <span className="text-xs text-slate-text">• {project.timeline}</span>
              <span className="text-xs text-slate-text">• {project.role}</span>
            </div>
            <h2
              id="modal-project-title"
              className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-base text-slate-text font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Visual */}
          <div className="rounded-xl overflow-hidden border border-slate-border bg-slate-surface aspect-[16/10] relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-xs font-mono font-medium text-navy border border-slate-border">
              {project.client}
            </div>
          </div>

          {/* Key Metrics / Specs (if available) */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3">
              {project.stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-slate-surface rounded-lg p-3.5 border border-slate-border text-center"
                >
                  <span className="block text-xs uppercase tracking-wider text-slate-text mb-0.5">
                    {s.label}
                  </span>
                  <span className="font-display font-semibold text-base sm:text-lg text-navy">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* The Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cobalt mb-1.5">
                  The Brief &amp; Context
                </h3>
                <p className="text-sm text-slate-text leading-relaxed">
                  {project.brief}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cobalt mb-1.5">
                  The Challenge
                </h3>
                <p className="text-sm text-slate-text leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cobalt mb-1.5">
                  Strategic Approach &amp; Solution
                </h3>
                <p className="text-sm text-slate-text leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-cobalt mb-1.5">
                  Core Deliverables
                </h3>
                <ul className="space-y-1.5">
                  {project.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-navy flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Learnings Pullout */}
          <div className="p-5 rounded-xl bg-slate-surface border border-slate-border">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Reflections &amp; Design Takeaways
            </h4>
            <p className="text-sm text-slate-text italic leading-relaxed">
              "{project.learnings}"
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-border bg-slate-surface px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-text">
            Somya Khandelwal • Strategic Exploration Specimen
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-btn text-sm font-medium text-slate-text hover:text-navy transition-colors"
            >
              Close
            </button>
            <a
              href={`mailto:hello@somyakhandelwal.com?subject=Enquiry regarding ${encodeURIComponent(
                project.title
              )}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-btn bg-cobalt text-white text-sm font-medium hover:bg-cobalt-hover transition-colors"
            >
              <span>Inquire About Similar Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

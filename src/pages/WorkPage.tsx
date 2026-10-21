import React, { useState, useMemo } from 'react';
import { Search, Touchpad } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProjectFilter, CategoryFilter } from '../components/ProjectFilter';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ContactCTA } from '../components/ContactCTA';
import { projects } from '../data/projects';
import { Project } from '../types';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Compute category counts
  const counts = useMemo(() => {
    const c: Record<CategoryFilter, number> = {
      all: projects.length,
      'graphic-design': 0,
      'social-media': 0,
      websites: 0,
      'content-seo': 0,
    };
    projects.forEach((p) => {
      c[p.categorySlug] = (c[p.categorySlug] || 0) + 1;
    });
    return c;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.categorySlug === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <SEOHead
        title="Selected Work &amp; Case Studies"
        description="A curated collection of concept explorations across graphic design, social media strategy, web development, content writing, and SEO."
        canonicalPath="/work"
      />

      {/* Header / Intro */}
      <section className="w-full bg-white pt-14 md:pt-20 pb-12 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cobalt"></span>
            <span className="text-xs uppercase tracking-wider font-semibold text-cobalt font-mono">
              Selected Work
            </span>
          </div>

          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-[1.15]">
              Ideas, <span className="text-cobalt italic font-normal">brought to life.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Sticky Interactive Filter Bar */}
      <section className="sticky top-[68px] z-30 w-full bg-white/95 backdrop-blur-md py-4 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={counts}
          />
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-text">
            <Touchpad className="w-3.5 h-3.5 text-cobalt" />
            <span>Click any project to inspect full monograph</span>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full py-16 md:py-20 bg-slate-surface/30 min-h-[500px]">
        <div className="max-w-container mx-auto px-6 md:px-8">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-border p-8">
              <Search className="w-12 h-12 text-slate-text/50 mb-4" />
              <h3 className="font-display font-bold text-lg text-navy mb-2">
                No projects found in this category
              </h3>
              <p className="text-sm text-slate-text max-w-sm mb-6">
                Try switching to "All Work" to see all available concept case studies.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className="px-5 py-2.5 rounded-btn bg-cobalt text-white text-sm font-medium hover:bg-cobalt-hover transition-colors"
              >
                Reset to All Work
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Craft Perspective Section */}
      <section className="w-full py-16 bg-white border-t border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-wider font-semibold text-cobalt mb-2 block">
                Craft Perspective
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy mb-4">
                A methodology grounded in reduction and intentional rhythm.
              </h2>
              <p className="text-sm text-slate-text leading-relaxed">
                Every digital artifact here originates from a clear conceptual premise: removing gratuitous ornamentation to uncover structural clarity. No artificial hype metrics—only disciplined design systems, semantic typography, and resilient code.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-6 rounded-xl bg-slate-surface border border-slate-border">
                <span className="font-display text-3xl font-bold text-cobalt block mb-1">01</span>
                <span className="font-display text-base font-semibold text-navy block mb-2">
                  Editorial Hierarchy
                </span>
                <p className="text-xs text-slate-text leading-relaxed">
                  Type scales derived from architectural proportions to guide reading focus without noise.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-surface border border-slate-border">
                <span className="font-display text-3xl font-bold text-cobalt block mb-1">02</span>
                <span className="font-display text-base font-semibold text-navy block mb-2">
                  Systemic Intent
                </span>
                <p className="text-xs text-slate-text leading-relaxed">
                  Brand systems engineered for tangible cross-medium longevity across print, social, and web.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-surface border border-slate-border">
                <span className="font-display text-3xl font-bold text-cobalt block mb-1">03</span>
                <span className="font-display text-base font-semibold text-navy block mb-2">
                  Clean Syntax
                </span>
                <p className="text-xs text-slate-text leading-relaxed">
                  Semantic markup, responsive typography, and sub-second execution for modern web platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ContactCTA
        eyebrow="Collaboration Invitation"
        title="Have a project in mind?"
        description="Whether you need a full digital transformation or targeted strategic support across design, writing, or web development, let's explore how we can collaborate."
      />

      {/* Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

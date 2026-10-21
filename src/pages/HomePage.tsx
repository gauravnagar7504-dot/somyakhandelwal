import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Compass,
  FileText,
  Palette,
  Sparkles,
  Copy,
  Check,
  Eye,
  HelpCircle,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProjectModal } from '../components/ProjectModal';
import { FAQAccordion } from '../components/FAQAccordion';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { faqs } from '../data/faqs';
import { reviews } from '../data/reviews';
import { Project } from '../types';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Services Ticker Slider Items
  const tickerServices = [
    { title: 'Website Development', to: '/services#webdev' },
    { title: 'SEO & Organic Growth', to: '/services#seo' },
    { title: 'Graphic Designing', to: '/services#design' },
    { title: 'Content Writing', to: '/services#content' },
    { title: 'Social Media Marketing', to: '/services#smm' },
    { title: 'Brand Identity Systems', to: '/services#design' },
    { title: 'UI/UX & Web Design', to: '/services#webdev' },
    { title: 'Keyword & Search Strategy', to: '/services#seo' },
  ];

  // Testimonial rows for marquee showcase
  const row1 = reviews.slice(0, 4);
  const row2 = reviews.slice(4, 8);

  // Specific 3 projects matching prompt requirements:
  // Project A: 'A Better Digital First Impression' (Website Development)
  // Project B: 'A Social Presence with Purpose' (Social Media Marketing)
  // Project C: 'A Visual Identity Exploration' (Graphic Designing)
  const projectA = projects.find((p) => p.id === 'atelier-architects') || projects[1];
  const projectB = projects.find((p) => p.id === 'atelier-rouge') || projects[3];
  const projectC = projects.find((p) => p.id === 'aura-nocturne') || projects[0];

  const featuredProjects = [projectA, projectB, projectC];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@somyakhandelwal.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand your brand, audience, priorities, and goals.',
      icon: <Compass className="w-4 h-4 text-cobalt" />,
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Define the direction, deliverables, and practical next steps.',
      icon: <FileText className="w-4 h-4 text-cobalt" />,
    },
    {
      number: '03',
      title: 'Create',
      description: 'Turn the agreed direction into thoughtful, polished work.',
      icon: <Palette className="w-4 h-4 text-cobalt" />,
    },
    {
      number: '04',
      title: 'Refine',
      description: 'Review the details, incorporate feedback, and prepare the final deliverables.',
      icon: <Sparkles className="w-4 h-4 text-cobalt" />,
    },
  ];

  const principles = [
    {
      number: '01',
      title: 'Clarity before decoration',
      description: 'Every design decision should help communicate something clearly.',
    },
    {
      number: '02',
      title: 'Purpose behind every decision',
      description: 'Strategy and creativity should support the same goal.',
    },
    {
      number: '03',
      title: 'Attention to the details',
      description: 'Consistency, readability, and refinement make the difference.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Somya Khandelwal — Independent Creative & Digital Partner"
        description="I'm Somya Khandelwal. I bring strategy, content, design, and web together to help brands build a stronger digital presence."
        canonicalPath="/"
      />

      {/* ======================================================== */}
      {/* SECTION 2 — HERO SECTION                                  */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden bg-white border-b border-slate-border py-20 sm:py-28 md:py-36">
        {/* Subtle Architectural Grid Background with radial fade mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(20, 40, 75, 0.055) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(20, 40, 75, 0.055) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, #000 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, #000 20%, transparent 80%)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-container mx-auto px-6 md:px-8 flex flex-col items-center text-center">
          {/* Pill Badge */}
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 sm:gap-2.5 p-1 sm:pr-3.5 rounded-full border border-slate-border bg-white/95 shadow-sm backdrop-blur-sm hover:border-cobalt/40 hover:shadow-editorial transition-all duration-200 mb-8 sm:mb-10"
            title="Claim your newly joined discount"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Discount 30%
            </span>
            <span className="text-xs sm:text-sm text-slate-text font-medium flex items-center gap-1.5">
              For newly joined customers
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cobalt group-hover:translate-x-0.5 transition-all" />
            </span>
          </Link>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[88px] text-navy leading-[1.06] tracking-tight mb-6 sm:mb-8 max-w-4xl">
            Digital Marketing<br />Services
          </h1>

          {/* Subheading / Description */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-slate-text max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12 font-normal">
            Through careful keyword research and white hat SEO practices, we can help you achieve higher organic rankings and increased visibility in search results.
          </p>

          {/* Action CTA Button */}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-navy hover:bg-cobalt text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0"
          >
            Free Proposal
          </Link>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3 — SERVICES TICKER SLIDER                        */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden bg-cobalt py-4 sm:py-5 border-y border-cobalt-hover/40 select-none z-10 shadow-sm" aria-label="Our core services ticker">
        <div className="flex w-max animate-ticker-slider">
          {/* Loop Set 1 */}
          <div className="flex items-center shrink-0">
            {tickerServices.map((service, idx) => (
              <React.Fragment key={`ticker-1-${idx}`}>
                <Link
                  to={service.to}
                  className="font-display font-bold text-sm sm:text-base md:text-lg text-white hover:text-cobalt-tint uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer flex items-center"
                >
                  {service.title}
                </Link>
                <span className="flex items-center justify-center mx-5 sm:mx-8 text-cobalt-tint/80 shrink-0" aria-hidden="true">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                  </svg>
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* Loop Set 2 (Duplicate for seamless continuous loop) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {tickerServices.map((service, idx) => (
              <React.Fragment key={`ticker-2-${idx}`}>
                <Link
                  to={service.to}
                  tabIndex={-1}
                  className="font-display font-bold text-sm sm:text-base md:text-lg text-white hover:text-cobalt-tint uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer flex items-center"
                >
                  {service.title}
                </Link>
                <span className="flex items-center justify-center mx-5 sm:mx-8 text-cobalt-tint/80 shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                  </svg>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4 — SELECTED WORK (SYMMETRIC SHOWCASE)           */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-28 bg-[#F8FAFD] border-b border-slate-border" id="selected-work">
        <div className="max-w-container mx-auto px-6 md:px-8">
          {/* Section Heading — Centered, Balanced, and Clear */}
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-cobalt font-mono">
                SELECTED WORK
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-4">
              Good ideas deserve good execution.
            </h2>
            <p className="text-slate-text text-base sm:text-lg leading-relaxed">
              A curated selection of recent client projects across web development, brand identity, and social media marketing.
            </p>
          </div>

          {/* Fully Symmetric 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-14">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-border hover:border-cobalt/60 transition-all duration-300 shadow-sm hover:shadow-card-hover overflow-hidden h-full"
              >
                {/* Visual Thumbnail */}
                <div
                  className="relative w-full aspect-[16/10] overflow-hidden bg-slate-surface cursor-pointer group/img shrink-0"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                  {/* Category Pill Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-navy shadow-sm border border-slate-border/50">
                    {project.category}
                  </div>
                  {/* Inspect Case Pill */}
                  <div className="absolute bottom-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-navy text-xs font-medium shadow-sm flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 transition-opacity">
                    <Eye className="w-3.5 h-3.5 text-cobalt" />
                    <span>Inspect</span>
                  </div>
                </div>

                {/* Content Container (flex-col justify-between guarantees identical bottom alignment) */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Role Header (Sprint detail removed) */}
                    <div className="mb-3">
                      <span className="font-semibold text-cobalt font-mono text-xs uppercase tracking-wider">
                        {project.role.split(',')[0]}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      className="font-display font-bold text-xl sm:text-2xl text-navy group-hover:text-cobalt transition-colors cursor-pointer mb-3 leading-snug line-clamp-2 min-h-[3.5rem] flex items-center"
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.title}
                    </h3>

                    {/* Project Brief */}
                    <p className="text-sm text-slate-text leading-relaxed line-clamp-3 mb-6">
                      {project.brief}
                    </p>
                  </div>

                  {/* Bottom-Pinned Footer Bar */}
                  <div className="pt-4 border-t border-slate-border flex items-center justify-between mt-auto">
                    <span className="text-xs text-slate-text font-mono truncate max-w-[140px]" title={project.client}>
                      {project.client}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover group/btn shrink-0"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Secondary CTA */}
          <div className="text-center pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-btn bg-white border border-slate-border text-navy text-sm font-semibold hover:border-cobalt hover:text-cobalt hover:shadow-card-hover transition-all shadow-sm"
            >
              <span>Explore All Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5 — SERVICES OVERVIEW                            */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-24 bg-white border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          {/* Section Heading */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-cobalt font-mono">
                WHAT I CAN HELP WITH
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight">
              The right skills. Working together.
            </h2>
          </div>

          {/* Five Numbered Editorial Rows (Clean Typography, No Images on Home) */}
          <div className="bg-[#FAFBFD] rounded-2xl border border-slate-border shadow-sm overflow-hidden divide-y divide-slate-border mb-10">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group block p-6 lg:p-8 hover:bg-cobalt-subtle/50 transition-colors duration-200"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  {/* Two-digit index */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-2xl font-bold text-cobalt group-hover:text-navy transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div className="md:col-span-4">
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-navy group-hover:text-cobalt transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <div className="md:col-span-6">
                    <p className="text-sm sm:text-base text-slate-text leading-relaxed">
                      {service.shortDescription || service.description}
                    </p>
                  </div>

                  {/* Arrow Link Action */}
                  <div className="md:col-span-1 flex justify-end">
                    <span className="w-10 h-10 rounded-full border border-slate-border group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white text-navy flex items-center justify-center transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA: Explore All Services */}
          <div className="flex justify-end">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover group"
            >
              <span>Explore All Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6 — ABOUT SOMYA                                  */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-24 bg-[#F4F8FD] border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Side 1: Authentic Editorial Graphic / Monograph Plate */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-border shadow-editorial group">
                <div className="rounded-xl overflow-hidden border border-slate-border aspect-[4/3] bg-slate-surface relative mb-5">
                  <img
                    src="/images/content-system.jpg"
                    alt="Editorial typographic proof booklet with fountain pen in natural light"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-navy shadow-sm">
                    Studio Archive // 2025
                  </div>
                </div>

                <div className="bg-[#FAFBFD] p-5 rounded-xl border border-slate-border space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-text">
                    <span>SOMYA KHANDELWAL</span>
                    <span className="text-cobalt font-semibold">SOLO PRACTICE</span>
                  </div>
                  <p className="font-display font-semibold text-sm text-navy leading-snug">
                    Independent partner for strategy, content, design, and code.
                  </p>
                </div>
              </div>
            </div>

            {/* Side 2: Narrative & Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-cobalt font-mono">
                  THE PERSON BEHIND THE WORK
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-6 leading-[1.15]">
                Thoughtful work. A personal approach.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-slate-text leading-relaxed mb-8 max-w-xl">
                <p>
                  Good creative work begins with understanding the people behind a brand — what they want to communicate, who they want to reach, and where they want to go.
                </p>
                <p>
                  My approach brings strategy and creativity together to create work that feels considered, consistent, and purposeful.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-btn bg-cobalt text-white text-sm font-medium hover:bg-cobalt-hover transition-colors shadow-sm group"
              >
                <span>More About Me</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7 — WORK PROCESS                                 */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-24 bg-cobalt text-white border-b border-cobalt-hover shadow-inner">
        <div className="max-w-container mx-auto px-6 md:px-8">
          {/* Section Heading */}
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-white font-mono">
                HOW WE WORK
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Clear thinking. Thoughtful making.
            </h2>
          </div>

          {/* Horizontal 4-step timeline on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white rounded-xl border border-white/20 p-6 shadow-xl flex flex-col justify-between relative group hover:border-white hover:shadow-2xl transition-all duration-300 text-navy"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-border">
                    <span className="font-mono text-3xl font-bold text-cobalt">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-slate-surface text-cobalt border border-slate-border">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-navy mb-2.5">
                    Step {step.number} — {step.title}
                  </h3>

                  <p className="text-sm text-slate-text leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-border flex items-center gap-2 text-xs font-mono text-cobalt font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
                  <span>Phase {idx + 1} Delivery</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 8 — WORKING PRINCIPLES AND CREDIBILITY           */}
      {/* ======================================================== */}
      <section className="w-full py-20 bg-white border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-cobalt font-mono">
                FOUNDATIONAL STANDARDS
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
              Grounded in clarity, purpose, and detail.
            </h2>
          </div>

          {/* 3 Columns Editorial Layout with Fine Dividers */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-border border-y border-slate-border">
            {principles.map((p) => (
              <div key={p.number} className="py-8 md:py-6 md:px-8 first:pl-0 last:pr-0 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-cobalt uppercase tracking-widest mb-3 block">
                    Principle {p.number}
                  </span>
                  <h3 className="font-display font-bold text-xl text-navy mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-text leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION: CLIENT REVIEWS & ENDORSEMENTS (MARQUEE)         */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-28 bg-[#F4F8FD] border-b border-slate-border relative overflow-hidden" id="reviews">
        {/* Left & Right Edge Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#F4F8FD] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#F4F8FD] to-transparent z-10" />

        {/* Section Heading (Centered) */}
        <div className="max-w-3xl mx-auto px-6 mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-cobalt font-mono">
              CLIENT TESTIMONIALS
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[46px] text-navy tracking-tight leading-[1.18]">
            Words of praise from others about our presence.
          </h2>
        </div>

        {/* Two-Row Staggered Marquee Tracks */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {/* Row 1: Sliding Left */}
          <div className="animate-marquee-left flex gap-6 sm:gap-7">
            {[...row1, ...row1].map((review, idx) => (
              <div
                key={`row1-${review.id}-${idx}`}
                className="w-[330px] sm:w-[420px] shrink-0 bg-white rounded-3xl p-7 sm:p-8 border border-slate-border shadow-[0_4px_24px_rgba(20,40,75,0.04)] hover:shadow-card-hover hover:border-cobalt/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-cobalt mb-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-sans text-sm sm:text-[15px] text-navy font-medium leading-relaxed mb-6">
                    {review.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-border/80">
                  <img
                    src={review.avatarImage}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-border shadow-xs"
                    loading="lazy"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-display font-bold text-sm text-navy leading-snug truncate">
                      {review.name}
                    </span>
                    <span className="text-xs text-slate-text leading-tight mt-0.5 truncate">
                      {review.role} of {review.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Sliding Right */}
          <div className="animate-marquee-right flex gap-6 sm:gap-7">
            {[...row2, ...row2].map((review, idx) => (
              <div
                key={`row2-${review.id}-${idx}`}
                className="w-[330px] sm:w-[420px] shrink-0 bg-white rounded-3xl p-7 sm:p-8 border border-slate-border shadow-[0_4px_24px_rgba(20,40,75,0.04)] hover:shadow-card-hover hover:border-cobalt/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8 text-cobalt mb-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-sans text-sm sm:text-[15px] text-navy font-medium leading-relaxed mb-6">
                    {review.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-border/80">
                  <img
                    src={review.avatarImage}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-border shadow-xs"
                    loading="lazy"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-display font-bold text-sm text-navy leading-snug truncate">
                      {review.name}
                    </span>
                    <span className="text-xs text-slate-text leading-tight mt-0.5 truncate">
                      {review.role} of {review.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION: FREQUENTLY ASKED QUESTIONS (FAQs)              */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-24 bg-white border-b border-slate-border" id="faqs">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column (5 cols): Context & Direct Contact Prompt */}
            <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-cobalt font-mono">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>

              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight mb-8">
                Clear answers before we begin.
              </h2>

              {/* Contact Assistance Box */}
              <div className="w-full bg-[#F4F8FD] rounded-xl p-5 border border-slate-border">
                <div className="flex items-center gap-2 mb-2 text-navy font-semibold text-sm">
                  <HelpCircle className="w-4 h-4 text-cobalt" />
                  <span>Have a specific question?</span>
                </div>
                <p className="text-xs text-slate-text mb-4 leading-relaxed">
                  If your question isn't covered here, feel free to send a direct message. I typically reply within 24–48 business hours.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobalt hover:text-cobalt-hover hover:underline"
                >
                  <span>Ask a question directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column (7 cols): Interactive Accordion */}
            <div className="lg:col-span-7">
              <div className="bg-[#FAFBFD] rounded-2xl border border-slate-border p-6 sm:p-8 shadow-sm">
                <FAQAccordion items={faqs} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 9 — FINAL CONTACT CTA (CURVED BLUE BOX)           */}
      {/* ======================================================== */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="bg-cobalt rounded-3xl md:rounded-[36px] p-8 sm:p-12 md:p-14 lg:p-16 text-white shadow-xl relative overflow-hidden border border-white/10">
            {/* Ambient pattern */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />
            {/* Subtle ambient glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-14">
              {/* Left side: Text */}
              <div className="max-w-xl flex flex-col items-start">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-white/90 font-mono">
                    YOUR NEXT IDEA STARTS HERE
                  </span>
                </div>

                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight">
                  Have something good in mind?
                </h2>

                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 max-w-lg">
                  Tell me what you're working on. Let's figure out how to bring it to life.
                </p>

                <p className="text-xs text-white/75">
                  Have a quick question?{' '}
                  <a
                    href="mailto:hello@somyakhandelwal.com"
                    className="text-white underline underline-offset-2 font-semibold hover:text-white/90"
                  >
                    Get in touch
                  </a>{' '}
                  directly at hello@somyakhandelwal.com.
                </p>
              </div>

              {/* Right side: Action CTAs */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-3.5 shrink-0 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-cobalt font-semibold text-base hover:bg-slate-100 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span className="text-emerald-200 font-semibold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white/80" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Monograph Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

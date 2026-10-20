import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  FileText,
  Palette,
  Sparkles,
  Layers,
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

  // Hero Service Banners (Desktop Landscape & Mobile Portrait)
  const heroBanners = [
    {
      id: 'web-dev',
      title: 'Website Development',
      image: '/images/banner-web-dev.png',
      mobileImage: '/images/banner-mobile-web-dev.png',
      contactUrl: '/contact?service=Website%20Development',
    },
    {
      id: 'seo',
      title: 'SEO Services',
      image: '/images/banner-seo.png',
      mobileImage: '/images/banner-mobile-seo.png',
      contactUrl: '/contact?service=SEO%20%26%20Organic%20Growth',
    },
    {
      id: 'graphic-design',
      title: 'Graphic Designing',
      image: '/images/banner-graphic-design.png',
      mobileImage: '/images/banner-mobile-graphic-design.png',
      contactUrl: '/contact?service=Graphic%20Designing',
    },
    {
      id: 'content',
      title: 'Content Writing',
      image: '/images/banner-content-writing.png',
      mobileImage: '/images/banner-mobile-content-writing.png',
      contactUrl: '/contact?service=Content%20Writing',
    },
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      image: '/images/banner-social-media.png',
      mobileImage: '/images/banner-mobile-social-media.png',
      contactUrl: '/contact?service=Social%20Media%20Marketing',
    },
  ];

  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [isBannerPaused, setIsBannerPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setIsBannerPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsBannerPaused(false);
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      nextBanner();
    } else if (distance < -minSwipeDistance) {
      prevBanner();
    }
  };

  useEffect(() => {
    if (isBannerPaused) return;
    const interval = setInterval(() => {
      setActiveBannerIndex((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isBannerPaused, heroBanners.length]);

  const nextBanner = () => {
    setActiveBannerIndex((prev) => (prev + 1) % heroBanners.length);
  };

  const prevBanner = () => {
    setActiveBannerIndex((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  };

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
      {/* SECTION 2 — HERO (RESPONSIVE SERVICE BANNERS)             */}
      {/* ======================================================== */}
      <section className="w-full relative overflow-hidden bg-white border-b border-slate-border">
        <div
          className="relative w-full overflow-hidden select-none"
          onMouseEnter={() => setIsBannerPaused(true)}
          onMouseLeave={() => setIsBannerPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Banners Track */}
          <div
            className="flex w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeBannerIndex * 100}%)` }}
          >
            {heroBanners.map((banner) => (
              <div
                key={banner.id}
                className="w-full shrink-0 aspect-[4/5] sm:aspect-[4480/1911] overflow-hidden bg-slate-100"
              >
                <Link
                  to={banner.contactUrl}
                  className="block w-full h-full cursor-pointer focus:outline-none"
                  aria-label={`${banner.title} - Click to navigate to Contact Page`}
                  title={`Click to get in touch for ${banner.title}`}
                >
                  <picture className="w-full h-full block">
                    <source
                      media="(max-width: 639px)"
                      srcSet={banner.mobileImage}
                    />
                    <source
                      media="(min-width: 640px)"
                      srcSet={banner.image}
                    />
                    <img
                      src={banner.image}
                      alt={`${banner.title} banner`}
                      className="w-full h-full object-cover block select-none pointer-events-none"
                      style={{
                        imageRendering: '-webkit-optimize-contrast',
                        transform: 'translateZ(0)',
                        backfaceVisibility: 'hidden',
                      }}
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </Link>
              </div>
            ))}
          </div>

          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevBanner();
            }}
            aria-label="Previous service banner"
            className="absolute left-2.5 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy/60 hover:bg-cobalt text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm shadow-md hover:scale-105 z-20 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-7 sm:h-7" />
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextBanner();
            }}
            aria-label="Next service banner"
            className="absolute right-2.5 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-navy/60 hover:bg-cobalt text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm shadow-md hover:scale-105 z-20 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-7 sm:h-7" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-2.5 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 bg-navy/50 backdrop-blur-md px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-md">
            {heroBanners.map((banner, idx) => (
              <button
                key={banner.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveBannerIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}: ${banner.title}`}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeBannerIndex === idx
                    ? 'w-5 sm:w-7 bg-white shadow-sm'
                    : 'w-1.5 sm:w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4 — SELECTED WORK                                */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-24 bg-[#F8FAFD] border-b border-slate-border" id="selected-work">
        <div className="max-w-container mx-auto px-6 md:px-8">
          {/* Section Heading */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-cobalt">
                SELECTED WORK
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight">
              Good ideas deserve good execution.
            </h2>
          </div>

          {/* Asymmetric Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Project A: Large Featured Project (Full 12 cols with 7-5 internal split) */}
            <div className="lg:col-span-12 bg-white rounded-2xl border border-slate-border overflow-hidden group hover:border-cobalt transition-all duration-300 shadow-sm hover:shadow-card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center p-6 md:p-8">
                {/* Visual: Browser Frame Mockup (7 cols) */}
                <div
                  className="lg:col-span-7 rounded-xl overflow-hidden border border-slate-border bg-slate-surface cursor-pointer relative group/img"
                  onClick={() => setSelectedProject(projectA)}
                >
                  <div className="bg-slate-surface/80 px-3 py-2 border-b border-slate-border flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-border"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-border"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-border"></span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-text">
                      atelier-architects.concept
                    </span>
                    <span className="text-[10px] font-mono text-cobalt font-semibold">
                      Featured Build
                    </span>
                  </div>
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img
                      src={projectA.image}
                      alt={projectA.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-navy text-xs font-medium shadow-sm flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-cobalt" />
                      <span>Inspect Case</span>
                    </div>
                  </div>
                </div>

                {/* Details (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-text uppercase tracking-wider mb-2 font-mono">
                      <span className="px-2 py-0.5 rounded bg-slate-surface text-cobalt font-semibold border border-slate-border font-sans">
                        {projectA.category}
                      </span>
                      <span>Concept Study</span>
                    </div>

                    <h3
                      className="font-display font-bold text-2xl lg:text-3xl text-navy group-hover:text-cobalt transition-colors cursor-pointer mb-3"
                      onClick={() => setSelectedProject(projectA)}
                    >
                      {projectA.title}
                    </h3>

                    <p className="text-sm text-slate-text leading-relaxed mb-6">
                      {projectA.brief}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {projectA.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-surface text-slate-text border border-slate-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(projectA)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:text-cobalt-hover self-start group/btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project B: Supporting Preview (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-border overflow-hidden group hover:border-cobalt transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between">
              <div
                className="aspect-[16/10] w-full overflow-hidden bg-slate-surface relative cursor-pointer"
                onClick={() => setSelectedProject(projectB)}
              >
                <img
                  src={projectB.image}
                  alt={projectB.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-navy shadow-sm">
                  {projectB.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-medium text-navy shadow-sm flex items-center gap-1">
                  <Eye className="w-3 h-3 text-cobalt" />
                  <span>Inspect</span>
                </div>
              </div>

              <div className="p-6 md:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono text-slate-text uppercase tracking-wider block mb-2">
                    Social Campaign Concept
                  </span>
                  <h3
                    className="font-display font-bold text-xl lg:text-2xl text-navy group-hover:text-cobalt transition-colors cursor-pointer mb-2"
                    onClick={() => setSelectedProject(projectB)}
                  >
                    {projectB.title}
                  </h3>
                  <p className="text-sm text-slate-text leading-relaxed mb-6">
                    {projectB.brief}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-border flex items-center justify-between">
                  <span className="text-xs text-slate-text font-mono">Triptych Cadence</span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(projectB)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Project C: Supporting Preview (6 cols) */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-border overflow-hidden group hover:border-cobalt transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between">
              <div
                className="aspect-[16/10] w-full overflow-hidden bg-slate-surface relative cursor-pointer"
                onClick={() => setSelectedProject(projectC)}
              >
                <img
                  src={projectC.image}
                  alt={projectC.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-semibold text-navy shadow-sm">
                  {projectC.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-xs font-medium text-navy shadow-sm flex items-center gap-1">
                  <Eye className="w-3 h-3 text-cobalt" />
                  <span>Inspect</span>
                </div>
              </div>

              <div className="p-6 md:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-xs font-mono text-slate-text uppercase tracking-wider block mb-2">
                    Visual Identity Concept
                  </span>
                  <h3
                    className="font-display font-bold text-xl lg:text-2xl text-navy group-hover:text-cobalt transition-colors cursor-pointer mb-2"
                    onClick={() => setSelectedProject(projectC)}
                  >
                    {projectC.title}
                  </h3>
                  <p className="text-sm text-slate-text leading-relaxed mb-6">
                    {projectC.brief}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-border flex items-center justify-between">
                  <span className="text-xs text-slate-text font-mono">Foil &amp; Typography</span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(projectC)}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-cobalt hover:text-cobalt-hover"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA to view full portfolio */}
          <div className="text-center pt-2">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-btn bg-slate-surface border border-slate-border text-navy text-sm font-semibold hover:border-cobalt hover:text-cobalt transition-all shadow-sm"
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
      {/* SECTION 9 — FINAL CONTACT CTA                            */}
      {/* ======================================================== */}
      <section className="w-full py-20 md:py-24 bg-cobalt text-white border-b border-cobalt-hover shadow-inner">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left side: Text & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-white font-mono">
                  YOUR NEXT IDEA STARTS HERE
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight">
                Have something good in mind?
              </h2>

              <p className="text-base sm:text-lg text-white/90 max-w-lg mb-8 leading-relaxed">
                Tell me what you're working on. Let's figure out how to bring it to life.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-white text-cobalt font-semibold text-sm hover:bg-slate-100 transition-colors shadow-md group"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-btn border border-white/30 bg-white/10 text-white text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span className="text-emerald-200">Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-white/80" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-white/80">
                Have a quick question?{' '}
                <a
                  href="mailto:hello@somyakhandelwal.com"
                  className="text-white underline underline-offset-2 font-semibold hover:text-white/80"
                >
                  Get in touch
                </a>{' '}
                directly at hello@somyakhandelwal.com.
              </p>
            </div>

            {/* Right side: Clean Card with White Background for Extreme Legibility */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-white/20 shadow-2xl relative overflow-hidden text-navy">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cobalt"></span>
                    <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                      Direct Collaboration
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cobalt font-semibold">2025 ACTIVE</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-surface border border-slate-border">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-text block mb-1">
                      Available Disciplines
                    </span>
                    <span className="font-display font-semibold text-sm text-navy block">
                      SEO · Social Media · Content · Graphic Design · Web
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-surface border border-slate-border flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-text block">
                        Response Window
                      </span>
                      <span className="font-sans font-medium text-xs text-navy">
                        Within 24–48 Business Hours
                      </span>
                    </div>
                    <Layers className="w-5 h-5 text-cobalt" />
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-border flex items-center justify-between text-xs text-slate-text">
                  <span>Solo Studio Practice</span>
                  <span className="text-cobalt font-semibold">Bespoke 1:1 Engagements</span>
                </div>
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

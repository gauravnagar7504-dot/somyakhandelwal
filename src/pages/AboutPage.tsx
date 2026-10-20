import React from 'react';
import { Compass, FileText, Palette, Sparkles, Quote, CheckCircle2, Image as ImageIcon } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProcessSteps, ProcessStage } from '../components/ProcessStep';
import { ContactCTA } from '../components/ContactCTA';

export const AboutPage: React.FC = () => {
  const fourStageProcess: ProcessStage[] = [
    {
      step: '01 / Discover',
      title: 'Listen & Diagnose',
      description:
        'We begin by uncovering your core business premise, evaluating current digital touchpoints, studying audience search intent, and determining your real competitive edge.',
      deliverable: 'Discovery Brief & Opportunity Map',
      icon: <Compass className="w-5 h-5 text-cobalt" />,
    },
    {
      step: '02 / Plan',
      title: 'Structure & Roadmap',
      description:
        'Translating insights into clear technical architectures, content topic models, editorial schedules, or wireframes before writing a single line of copy or code.',
      deliverable: 'Strategic Blueprint & Milestone Plan',
      icon: <FileText className="w-5 h-5 text-cobalt" />,
    },
    {
      step: '03 / Create',
      title: 'Execute & Craft',
      description:
        'Iterative design and production cycles. Whether crafting search-optimized publications, brand assets, or responsive web platforms, we build with typographic precision.',
      deliverable: 'Production Builds & Content Assets',
      icon: <Palette className="w-5 h-5 text-cobalt" />,
    },
    {
      step: '04 / Refine',
      title: 'Optimize & Launch',
      description:
        'Testing cross-device performance, accessibility contrast, Core Web Vitals, and search crawlability before a seamless handover and ongoing metric review.',
      deliverable: 'Production Deployment & Guidelines',
      icon: <Sparkles className="w-5 h-5 text-cobalt" />,
    },
  ];

  const studioImages = [
    {
      title: 'Search Architecture & Analytics',
      subtitle: 'Keyword clusters & organic demand maps',
      image: '/images/seo-strategy.jpg',
      discipline: 'SEO & Growth',
    },
    {
      title: 'Editorial Systems & Publications',
      subtitle: 'Typographic proofs & brand tone specs',
      image: '/images/content-system.jpg',
      discipline: 'Content Writing',
    },
    {
      title: 'Tactile Brand Identity Materials',
      subtitle: 'Foil-stamped collateral & packaging standards',
      image: '/images/brand-identity.jpg',
      discipline: 'Graphic Design',
    },
    {
      title: 'Responsive Web Interfaces',
      subtitle: 'Sub-second frontend implementation',
      image: '/images/web-design.jpg',
      discipline: 'Web Development',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Somya Khandelwal"
        description="I'm Somya Khandelwal, an independent creative professional helping brands communicate clearly, build their online presence, and turn ideas into thoughtful digital experiences."
        canonicalPath="/about"
      />

      {/* 1. INTRODUCTION (HERO) */}
      <section className="w-full bg-white pt-14 md:pt-20 pb-20 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Narrative Rail (7 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-cobalt"></span>
                <span className="text-xs uppercase tracking-widest font-semibold text-cobalt">
                  A Little About Me
                </span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight mb-6 leading-[1.15]">
                Good work starts with <span className="text-cobalt">understanding</span> people.
              </h1>

              <p className="text-lg sm:text-xl text-slate-text mb-8 leading-relaxed max-w-xl font-normal">
                I'm Somya Khandelwal, an independent creative professional helping brands communicate clearly, build their online presence, and turn ideas into thoughtful digital experiences.
              </p>

              <div className="space-y-4 text-slate-text leading-relaxed text-base mb-10 max-w-xl">
                <p>
                  In a digital landscape often dominated by fast automated outputs and surface-level aesthetics, I focus on the intersection of deliberate design and real functional utility.
                </p>
                <p>
                  I work with founders, independent studios, and growing companies who value nuance, clarity, and hands-on craftsmanship. By managing strategy, writing, design, and web execution directly, we eliminate the communication friction inherent in traditional agency handoffs.
                </p>
              </div>

              {/* Meta Specification Cluster */}
              <div className="pt-8 border-t border-slate-border grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-text mb-1 font-medium">
                    Base / Reach
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    India • Global Clients
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-text mb-1 font-medium">
                    Engagement
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    Direct 1:1 with Founders
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-slate-text mb-1 font-medium">
                    Discipline
                  </span>
                  <span className="text-sm font-semibold text-navy">
                    Strategy &amp; Execution
                  </span>
                </div>
              </div>
            </div>

            {/* Right Editorial Photographic Container (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-slate-surface rounded-2xl p-6 sm:p-7 border border-slate-border shadow-editorial group">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-border">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cobalt"></span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-navy">
                      Studio Practice
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-text">EST. 2024</span>
                </div>

                {/* Studio Workspace Image Frame */}
                <div className="rounded-xl overflow-hidden border border-slate-border aspect-[4/3] bg-white relative mb-5 shadow-sm">
                  <img
                    src="/images/seo-strategy.jpg"
                    alt="Clean editorial studio workspace with laptop displaying organic search analytics and keyword data charts"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-navy shadow-sm">
                    SK Studio Desk
                  </div>
                  <div className="absolute bottom-3 right-3 bg-navy/90 backdrop-blur-md px-2.5 py-1 rounded text-white text-[11px] font-mono">
                    NEW DELHI // ARCHIVE
                  </div>
                </div>

                <div className="space-y-3 bg-white p-5 rounded-xl border border-slate-border">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-cobalt text-white flex items-center justify-center font-bold text-xs">
                      SK
                    </div>
                    <span className="text-xs font-mono text-cobalt font-semibold">VERIFIED PRACTICE</span>
                  </div>

                  <p className="text-sm font-display font-semibold text-navy leading-snug">
                    SEO • Social Media • Copywriting • Visual Design • Web Dev
                  </p>

                  <div className="pt-3 border-t border-slate-border flex items-center justify-between text-xs text-slate-text">
                    <span>Direct Communication</span>
                    <div className="flex items-center gap-1.5 text-navy font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cobalt" />
                      <span>Bespoke 1:1 Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STUDIO IN ACTION — PHOTO GALLERY SECTION */}
      <section className="w-full bg-white py-20 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <ImageIcon className="w-4 h-4 text-cobalt" />
              <span className="text-xs uppercase tracking-wider font-semibold text-cobalt">
                Process &amp; Studio Artifacts
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
              Crafting meaningful work across physical and digital mediums.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioImages.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-xl overflow-hidden border border-slate-border bg-slate-surface shadow-sm hover:shadow-card-hover transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/95 backdrop-blur-md text-navy shadow-sm">
                    {item.discipline}
                  </span>
                </div>
                <div className="p-4 bg-white border-t border-slate-border flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-text leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MY APPROACH */}
      <section className="w-full bg-slate-surface/60 border-b border-slate-border py-20 md:py-24">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt"></span>
              <span className="text-xs uppercase tracking-widest text-cobalt font-semibold">
                Philosophy &amp; Perspective
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight">
              Strategy with a creative point of view.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Core Argument */}
            <div className="lg:col-span-4 bg-white p-7 rounded-xl border border-slate-border shadow-sm flex flex-col">
              <h3 className="font-display font-bold text-lg text-navy mb-3">
                No cookie-cutter templates. No vanity noise.
              </h3>
              <p className="text-sm text-slate-text leading-relaxed mb-4">
                In an era saturated with automated assembly lines and transient growth hacks, what makes a brand durable is singular: deliberate intent.
              </p>
              <p className="text-sm text-slate-text leading-relaxed">
                Before a wireframe is mapped, a calendar is populated, or code is committed, we define the fundamental truth: What does this brand stand for, and why should anyone care?
              </p>
            </div>

            {/* Column 2: Deep Explanation */}
            <div className="lg:col-span-4 bg-white p-7 rounded-xl border border-slate-border shadow-sm flex flex-col">
              <h3 className="font-display font-bold text-lg text-navy mb-3">
                Context precedes aesthetic.
              </h3>
              <p className="text-sm text-slate-text leading-relaxed mb-4">
                Design isn't mere embellishment; it is structural communication. Marketing isn't shouting into the void; it is making a meaningful promise and proving it consistently.
              </p>
              <p className="text-sm text-slate-text leading-relaxed">
                By sitting directly with founders and leads, I strip away corporate abstraction to build platforms that elevate commercial objectives while honoring distinct cultural identity.
              </p>
            </div>

            {/* Column 3: Pull Quote */}
            <div className="lg:col-span-4 bg-white p-7 rounded-xl border border-slate-border shadow-sm flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-cobalt mb-4" />
                <blockquote className="font-display text-lg text-navy font-medium leading-snug mb-6">
                  “Tools and tactics evolve, but clarity of purpose and deep respect for the audience remain constant.”
                </blockquote>
              </div>
              <div className="pt-4 border-t border-slate-border flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider text-slate-text font-mono">Foundational Ethos</span>
                <span className="text-cobalt font-semibold">SK Practice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE GUIDING PRINCIPLES */}
      <section className="w-full bg-white border-b border-slate-border py-20 md:py-24">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-cobalt"></span>
              <span className="text-xs uppercase tracking-widest text-cobalt font-semibold">
                Core Standards
              </span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight">
              The principles behind every collaboration.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-slate-border border-y border-slate-border">
            {/* Principle 01 */}
            <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-cobalt font-mono">
                  01
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
                  Clarity over clutter
                </h3>
                <span className="text-xs uppercase tracking-wider text-slate-text block mt-1 font-medium">
                  Editorial Purity
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="text-base text-slate-text leading-relaxed">
                  Eliminating extraneous noise to let the brand's authentic message resonate cleanly across all digital touchpoints. If an element doesn't inform, guide, or inspire, it doesn't belong.
                </p>
              </div>
            </div>

            {/* Principle 02 */}
            <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-cobalt font-mono">
                  02
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
                  Creativity with purpose
                </h3>
                <span className="text-xs uppercase tracking-wider text-slate-text block mt-1 font-medium">
                  Commercial Utility
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="text-base text-slate-text leading-relaxed">
                  Every aesthetic decision—from typographic scales and color palettes to technical frameworks—is made in service of concrete brand goals and audience connection.
                </p>
              </div>
            </div>

            {/* Principle 03 */}
            <div className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-cobalt font-mono">
                  03
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
                  Consistency that builds trust
                </h3>
                <span className="text-xs uppercase tracking-wider text-slate-text block mt-1 font-medium">
                  Systemic Coherence
                </span>
              </div>
              <div className="md:col-span-6">
                <p className="text-base text-slate-text leading-relaxed">
                  Brands build credibility when their voice, visuals, and technical performance align without deviation. Consistent delivery compounds over time into deep audience loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOUR-STAGE COLLABORATION PROCESS */}
      <section className="w-full bg-cobalt text-white border-b border-cobalt-hover py-20 md:py-24 shadow-inner">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold tracking-wider text-white uppercase mb-3 block font-mono">
              How We Collaborate
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Four structured stages from brief to launch.
            </h2>
          </div>

          <ProcessSteps stages={fourStageProcess} columns={4} dark={true} />
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <ContactCTA
        eyebrow="Initiate Contact"
        title="Ready to start an intentional collaboration?"
        description="Whether you have an immediate brief or would like to explore options for upcoming quarters, let's start with a relaxed initial conversation."
      />
    </>
  );
};

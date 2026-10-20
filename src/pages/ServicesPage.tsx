import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown, ShieldAlert, Sparkles, Image as ImageIcon } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';
import { ServiceSectionDetail } from '../components/ServiceComponents';
import { FAQAccordion } from '../components/FAQAccordion';
import { ContactCTA } from '../components/ContactCTA';
import { services } from '../data/services';
import { faqs } from '../data/faqs';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services — Strategic & Creative Execution"
        description="The right mix of SEO, social media marketing, content writing, graphic design, and web development designed around your brand."
        canonicalPath="/services"
      />

      {/* Hero Section */}
      <section className="w-full bg-white pt-14 md:pt-20 pb-16 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-cobalt"></span>
            <span className="text-xs uppercase tracking-wider font-semibold text-cobalt">
              Services
            </span>
          </div>

          <div className="mb-10 max-w-4xl">
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-[1.15]">
              The right mix of <span className="text-cobalt">strategy, creativity,</span> and digital execution.
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4 pb-12 w-full sm:w-auto">
            <PrimaryButton to="/contact">
              <span>Start a Project Enquiry</span>
            </PrimaryButton>
            <SecondaryButton href="#seo" icon={false}>
              <span>Explore Visual Chapters</span>
              <ArrowDown className="w-4 h-4 ml-1" />
            </SecondaryButton>
          </div>

          {/* Quick Jump Visual Strip with image thumbnails in Cobalt Blue */}
          <div className="w-full bg-cobalt rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 border border-white/20 shadow-xl text-white">
            {services.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.id}`}
                className="p-3 rounded-xl bg-white text-navy hover:text-cobalt hover:border-cobalt transition-all flex flex-col gap-2.5 border border-slate-border group shadow-sm hover:shadow-md"
              >
                <div className="w-full aspect-[16/10] rounded-lg overflow-hidden bg-slate-surface border border-slate-border relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cobalt text-white">
                    {svc.number}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-navy group-hover:text-cobalt transition-colors truncate">
                    {svc.title}
                  </span>
                  <ArrowDown className="w-3.5 h-3.5 text-slate-text/60 group-hover:text-cobalt transition-transform group-hover:translate-y-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Chapters with Large Editorial Photography */}
      <div className="w-full">
        {services.map((service, index) => (
          <ServiceSectionDetail
            key={service.id}
            service={service}
            inverted={index % 2 === 1}
          />
        ))}
      </div>

      {/* Visual Artifacts & Deliverables Showcase */}
      <section className="w-full bg-white py-20 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <ImageIcon className="w-4 h-4 text-cobalt" />
                <span className="text-xs uppercase tracking-wider font-semibold text-cobalt">
                  Visual Deliverables
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight">
                Tangible artifacts crafted for real-world clarity.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:underline shrink-0"
            >
              <span>Enquire about custom deliverables</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((svc) => (
              <div
                key={svc.id}
                className="group rounded-xl overflow-hidden border border-slate-border bg-slate-surface shadow-sm hover:shadow-card-hover transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={svc.image}
                    alt={svc.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-navy shadow-sm">
                    {svc.categoryName}
                  </div>
                </div>
                <div className="p-5 bg-white border-t border-slate-border">
                  <h3 className="font-display font-bold text-base text-navy mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-text line-clamp-2 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest Commitment & Integrity Callout */}
      <section className="w-full bg-slate-surface/40 py-16 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cobalt/10 text-cobalt shrink-0 mt-0.5">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-bold text-lg text-navy">
                  Ethical Practice &amp; Honest Digital Work
                </h3>
                <p className="text-sm text-slate-text max-w-2xl leading-relaxed">
                  I believe in transparent communication. I do not promise overnight viral metrics, guaranteed #1 search rankings, or inflated engagement claims. Instead, every deliverable is grounded in verified technical best practices, defensible strategy, and meticulous craftsmanship designed to compound over time.
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cobalt hover:underline shrink-0"
            >
              <span>Learn about my ethos</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="w-full bg-white py-20 md:py-24 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-cobalt mb-3 block">
                Common Questions
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-navy tracking-tight mb-6">
                Everything you need to know before we begin.
              </h2>
              <div className="p-5 rounded-xl bg-slate-surface border border-slate-border text-sm text-slate-text space-y-2">
                <div className="flex items-center gap-2 font-medium text-navy">
                  <Sparkles className="w-4 h-4 text-cobalt" />
                  <span>Have a custom requirement?</span>
                </div>
                <p className="text-xs text-slate-text">
                  If your project spans multiple services or unique technical constraints, we can tailor an engagement framework to your exact needs.
                </p>
                <Link
                  to="/contact"
                  className="text-xs font-semibold text-cobalt hover:underline inline-block pt-1"
                >
                  Ask a specific question ↗
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-surface p-6 sm:p-8 rounded-2xl border border-slate-border shadow-sm">
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Service Combination CTA */}
      <ContactCTA
        eyebrow="Combined Partnerships"
        title="Looking for an integrated package?"
        description="Many founders prefer bundling Website Development with SEO Strategy and Copywriting for a unified launch. Let's discuss the right combination for your upcoming milestones."
      />
    </>
  );
};

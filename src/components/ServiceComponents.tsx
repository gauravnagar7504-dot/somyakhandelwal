import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { Service } from '../types';

interface ServiceItemProps {
  service: Service;
  index: number;
  showImage?: boolean;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ service, showImage = false }) => {
  return (
    <Link
      to={`/services#${service.id}`}
      className="group block p-6 lg:p-8 hover:bg-slate-surface transition-colors duration-200 border-b border-slate-border last:border-b-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Number */}
        <div className="md:col-span-1">
          <span className="font-display text-2xl font-semibold text-slate-text/70 group-hover:text-cobalt transition-colors font-mono">
            {service.number}
          </span>
        </div>

        {/* Title & Optional Thumbnail */}
        <div className={showImage ? 'md:col-span-4 flex items-center gap-4' : 'md:col-span-4'}>
          {showImage && (
            <div className="w-16 h-12 rounded-lg overflow-hidden border border-slate-border bg-slate-surface shrink-0 hidden sm:block">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          )}
          <div>
            <h3 className="font-display text-xl lg:text-2xl font-bold text-navy group-hover:text-cobalt transition-colors">
              {service.title}
            </h3>
            <span className="text-xs text-slate-text font-medium block mt-1">
              {service.discipline}
            </span>
          </div>
        </div>

        {/* Description (6 or 7 cols) */}
        <div className="md:col-span-6">
          <p className="text-sm md:text-base text-slate-text leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Arrow Action (1 col) */}
        <div className="md:col-span-1 flex justify-end">
          <span className="w-10 h-10 rounded-full border border-slate-border group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white text-navy flex items-center justify-center transition-all duration-200">
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

interface ServiceSectionDetailProps {
  service: Service;
  inverted?: boolean;
}

export const ServiceSectionDetail: React.FC<ServiceSectionDetailProps> = ({
  service,
  inverted = false,
}) => {
  return (
    <section
      id={service.id}
      className={`py-16 md:py-24 border-b border-slate-border scroll-mt-20 ${
        inverted ? 'bg-white' : 'bg-slate-surface/40'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Narrative Content (6 cols) */}
          <div
            className={`lg:col-span-6 flex flex-col gap-6 ${
              inverted ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-cobalt bg-cobalt/10 px-2.5 py-1 rounded">
                DISCIPLINE {service.number}
              </span>
              <span className="text-xs text-slate-text">{service.discipline}</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-navy tracking-tight">
              {service.number} / {service.title}
            </h2>

            <p className="text-lg text-cobalt font-medium italic">
              "{service.tagline}"
            </p>

            <p className="text-base text-slate-text leading-relaxed">
              {service.description}
            </p>

            {/* Key Deliverables Grid */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">
                Key Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-navy bg-white p-3 rounded-lg border border-slate-border shadow-sm"
                  >
                    <Check className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Agile Methodology Ribbon */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-text block mb-2">
                Agile Workflow Cadence
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {service.approach.map((step, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-surface border border-slate-border rounded-lg p-2.5 flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono font-bold text-cobalt">
                      0{idx + 1}
                    </span>
                    <p className="text-[11px] text-slate-text leading-tight mt-1 line-clamp-2" title={step}>
                      {step.split(' ')[0]} {step.split(' ')[1]}...
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Enquiry Link */}
            <div className="pt-2">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt hover:text-cobalt-hover group"
              >
                <span>Enquire about {service.title}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Photographic Visual in place of former text box (6 cols) */}
          <div
            className={`lg:col-span-6 ${
              inverted ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-border bg-white shadow-editorial group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-surface relative">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-border shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse"></span>
                  <span className="text-xs font-semibold text-navy">
                    {service.badge}
                  </span>
                </div>

                {/* Specimen Tag */}
                <div className="absolute bottom-4 right-4 bg-navy/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-mono flex items-center gap-1.5 shadow-sm">
                  <Eye className="w-3.5 h-3.5 text-cobalt-subtle" />
                  <span>Specimen {service.number} // Archive</span>
                </div>
              </div>

              {/* Photo Caption Strip */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-border flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-navy">
                    {service.title} Practice
                  </span>
                  <span className="text-[11px] text-slate-text">
                    Tangible deliverables &amp; strategic architecture
                  </span>
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="px-3 py-1.5 rounded-btn bg-slate-surface hover:bg-cobalt hover:text-white text-navy text-xs font-medium border border-slate-border transition-colors shrink-0"
                >
                  Request Scope
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

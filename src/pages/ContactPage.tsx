import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Copy, Globe, MapPin, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hello@somyakhandelwal.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEOHead
        title="Contact — Start a Conversation"
        description="Have a project, a question, or an idea to explore? Connect with Somya Khandelwal for SEO, social media, content, design, and web development."
        canonicalPath="/contact"
      />

      {/* Hero Header */}
      <section className="w-full bg-white pt-14 md:pt-20 pb-12 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-surface text-cobalt text-xs uppercase tracking-wider font-semibold mb-6 border border-slate-border">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt"></span>
              <span>Let's Connect</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight leading-[1.15]">
              Tell me what you're <span className="text-cobalt">dreaming up.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="w-full bg-slate-surface/30 py-16 md:py-20 border-b border-slate-border">
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* LEFT: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* RIGHT: Editorial Brand Rail & Direct Details (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Direct Details Card */}
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-slate-border shadow-sm flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-border">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-text">
                    Direct Contact
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs text-navy font-medium">Available Q2/Q3</span>
                  </div>
                </div>

                {/* Email Address & Copy Pill */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-slate-text font-medium">Direct Email</span>
                  <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-surface border border-slate-border">
                    <a
                      href={`mailto:${email}`}
                      className="font-display font-semibold text-sm sm:text-base text-navy hover:text-cobalt transition-colors truncate"
                    >
                      {email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-2 rounded-lg bg-white border border-slate-border text-slate-text hover:text-cobalt hover:border-cobalt transition-colors shrink-0"
                      title="Copy email address"
                      aria-label="Copy direct email address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-text" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5 text-sm">
                    <MapPin className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy font-medium block">Studio Location</strong>
                      <p className="text-xs text-slate-text mt-0.5 leading-relaxed">
                        India (IST) — Collaborating with founders worldwide across GMT, EST, and SGT time zones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-sm">
                    <Clock className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy font-medium block">Response Window</strong>
                      <p className="text-xs text-slate-text mt-0.5 leading-relaxed">
                        I personally review every enquiry and reply within 24–48 business hours with honest scope feedback.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-sm">
                    <Globe className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy font-medium block">Collaboration Format</strong>
                      <p className="text-xs text-slate-text mt-0.5 leading-relaxed">
                        Direct 1:1 async updates, scheduled video reviews, and collaborative Notion/Figma workspaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-5 border-t border-slate-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-text block mb-3">
                    Elsewhere on the Web
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-surface border border-slate-border text-navy hover:text-cobalt hover:border-cobalt transition-colors inline-flex items-center gap-1"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-text" />
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-surface border border-slate-border text-navy hover:text-cobalt hover:border-cobalt transition-colors inline-flex items-center gap-1"
                    >
                      <span>Twitter / X</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-text" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-surface border border-slate-border text-navy hover:text-cobalt hover:border-cobalt transition-colors inline-flex items-center gap-1"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-text" />
                    </a>
                    <a
                      href="https://substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-surface border border-slate-border text-navy hover:text-cobalt hover:border-cobalt transition-colors inline-flex items-center gap-1"
                    >
                      <span>Substack</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-text" />
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-border shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cobalt" />
                  <h3 className="font-display font-bold text-sm text-navy">
                    What happens after you reach out?
                  </h3>
                </div>
                <ol className="space-y-2 text-xs text-slate-text list-decimal list-inside leading-relaxed">
                  <li>I review your project notes and verify schedule alignment.</li>
                  <li>We connect via brief introductory call or email to clarify milestones.</li>
                  <li>You receive a tailored scope outline, timeline estimate, and investment terms.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy, Mail, ArrowUpRight } from 'lucide-react';

interface ContactCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  eyebrow = 'Start a Project',
  title = 'Have something good in mind?',
  description = "Let's turn your next idea into something meaningful. Reach out directly to discuss scope, timeline, and collaboration terms.",
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'hello@somyakhandelwal.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <div className="bg-cobalt border border-white/20 rounded-2xl py-14 md:py-16 px-6 md:px-12 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Subtle decorative grid/ambient touch */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          ></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4">
              {title}
            </h2>

            <p className="text-base text-white/90 max-w-lg mb-8 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 w-full sm:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-white text-cobalt font-semibold text-sm hover:bg-slate-100 transition-colors shadow-md group"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-btn border border-white/30 bg-white/10 text-white text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-colors"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span className="text-emerald-200">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white/80" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-white/80">
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>Direct: </span>
              <a
                href={`mailto:${email}`}
                className="text-white font-semibold hover:underline underline-offset-4"
              >
                {email}
              </a>
              <span className="text-white/40">|</span>
              <span>Typically replies within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

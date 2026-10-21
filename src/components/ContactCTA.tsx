import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy, ArrowUpRight } from 'lucide-react';

interface ContactCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  eyebrow = 'YOUR NEXT IDEA STARTS HERE',
  title = 'Have something good in mind?',
  description = "Tell me what you're working on. Let's figure out how to bring it to life.",
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'hello@somyakhandelwal.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
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
                  {eyebrow}
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4 leading-tight">
                {title}
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6 max-w-lg">
                {description}
              </p>

              <p className="text-xs text-white/75">
                Have a quick question?{' '}
                <a
                  href={`mailto:${email}`}
                  className="text-white underline underline-offset-2 font-semibold hover:text-white/90"
                >
                  Get in touch
                </a>{' '}
                directly at {email}.
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
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-white/10 text-white text-sm font-medium hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
                title="Copy email address"
              >
                {copied ? (
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
  );
};

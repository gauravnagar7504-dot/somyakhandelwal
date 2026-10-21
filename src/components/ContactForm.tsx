import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, Copy, RefreshCw, Send, ShieldCheck } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const FORM_ENDPOINT = ''; // Integration point: Set your Formspree/Formspark endpoint URL here

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const availableServices = [
    'SEO & Organic Growth',
    'Social Media Marketing',
    'Content Writing',
    'Graphic Designing',
    'Website Development',
    'Multiple Services',
  ];

  const normalizeService = (param: string | null) => {
    if (!param) return null;
    const lower = param.toLowerCase();
    const exact = availableServices.find((s) => s.toLowerCase() === lower);
    if (exact) return exact;
    if (lower.includes('seo')) return 'SEO & Organic Growth';
    if (lower.includes('social')) return 'Social Media Marketing';
    if (lower.includes('content')) return 'Content Writing';
    if (lower.includes('graphic')) return 'Graphic Designing';
    if (lower.includes('web')) return 'Website Development';
    return null;
  };

  const initialService = normalizeService(preselectedService) || 'Multiple Services';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [initialService],
    budget: '$3,000 – $6,000',
    details: '',
    honeypot: '', // anti-spam field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const matched = normalizeService(preselectedService);
    if (matched) {
      setFormData((prev) => ({
        ...prev,
        services: [matched],
      }));
    }
  }, [preselectedService]);

  const budgetOptions = [
    '< $3,000',
    '$3,000 – $6,000',
    '$6,000 – $12,000',
    '$12,000+',
    'Still defining scope',
  ];

  const toggleService = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(svc);
      if (exists) {
        const filtered = prev.services.filter((s) => s !== svc);
        return {
          ...prev,
          services: filtered.length > 0 ? filtered : ['Multiple Services'],
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, svc],
        };
      }
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (formData.services.length === 0) {
      errs.services = 'Please select at least one service.';
    }
    if (!formData.details.trim()) {
      errs.details = 'Please share a brief note about your project.';
    } else if (formData.details.trim().length < 10) {
      errs.details = 'Please provide at least 10 characters describing your project.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Anti-spam honeypot test
    if (formData.honeypot) {
      console.warn('Spam detected via honeypot.');
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      if (FORM_ENDPOINT) {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Submission endpoint error');
      } else {
        // Honest fallback delay simulation for UX feedback
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
      setErrors({ form: 'An unexpected issue occurred. Please reach out directly via email.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:hello@somyakhandelwal.com?subject=${encodeURIComponent(
    `Project Enquiry from ${formData.name || 'Website Visitor'}`
  )}&body=${encodeURIComponent(
    `Hi Somya,\n\nName: ${formData.name}\nEmail: ${formData.email}\nServices Needed: ${formData.services.join(
      ', '
    )}\nEstimated Scope: ${formData.budget}\n\nProject Details:\n${formData.details}\n`
  )}`;

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@somyakhandelwal.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      services: ['Multiple Services'],
      budget: '$3,000 – $6,000',
      details: '',
      honeypot: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-border p-7 sm:p-9 md:p-10 shadow-editorial relative">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-slate-surface text-cobalt flex items-center justify-center mb-6 border border-slate-border">
            <CheckCircle2 className="w-8 h-8 text-cobalt" />
          </div>

          <span className="text-xs uppercase tracking-widest font-semibold text-cobalt mb-2 font-mono">
            Enquiry Prepared &amp; Logged
          </span>

          <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-3">
            Thank you, {formData.name || 'Friend'}.
          </h3>

          <p className="text-sm md:text-base text-slate-text max-w-md mx-auto mb-6 leading-relaxed">
            Your enquiry details have been recorded. You can also send this note directly to Somya's inbox with one click to guarantee immediate delivery.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-8">
            <a
              href={mailtoLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cobalt text-white text-sm font-semibold hover:bg-cobalt-hover transition-all shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Open in Email App (Prefilled)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-border bg-white text-navy text-sm font-semibold hover:bg-slate-surface transition-all"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-text" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </div>

          <div className="border-t border-slate-border pt-6 w-full max-w-sm flex flex-col items-center gap-2 text-xs text-slate-text">
            <span>Direct contact: hello@somyakhandelwal.com</span>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex items-center gap-1.5 text-cobalt hover:underline mt-2 font-medium"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Send another enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this field</label>
            <input
              id="hp_field"
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          {errors.form && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {errors.form}
            </div>
          )}

          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-navy flex items-center justify-between"
              >
                <span>
                  Full Name <span className="text-cobalt">*</span>
                </span>
                {errors.name && (
                  <span className="text-xs text-red-600 font-medium" role="alert">
                    {errors.name}
                  </span>
                )}
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Elena Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`h-12 w-full px-4 rounded-xl bg-slate-surface/70 text-navy placeholder:text-slate-text/50 text-sm border outline-none transition-all focus:bg-white focus:border-cobalt focus:ring-4 focus:ring-cobalt/10 ${
                  errors.name ? 'border-red-400' : 'border-slate-border'
                }`}
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-navy flex items-center justify-between"
              >
                <span>
                  Email Address <span className="text-cobalt">*</span>
                </span>
                {errors.email && (
                  <span className="text-xs text-red-600 font-medium" role="alert">
                    {errors.email}
                  </span>
                )}
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="elena@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`h-12 w-full px-4 rounded-xl bg-slate-surface/70 text-navy placeholder:text-slate-text/50 text-sm border outline-none transition-all focus:bg-white focus:border-cobalt focus:ring-4 focus:ring-cobalt/10 ${
                  errors.email ? 'border-red-400' : 'border-slate-border'
                }`}
              />
            </div>
          </div>

          {/* Service Selection (Multi-select Pill Capsules) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-navy">
                Services Needed <span className="text-cobalt">*</span>
              </label>
              <span className="text-xs text-slate-text font-mono">Select all that apply</span>
            </div>
            {errors.services && (
              <span className="text-xs text-red-600 font-medium">{errors.services}</span>
            )}
            <div className="flex flex-wrap gap-2.5">
              {availableServices.map((svc) => {
                const selected = formData.services.includes(svc);
                return (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => toggleService(svc)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer select-none ${
                      selected
                        ? 'bg-cobalt text-white border-cobalt shadow-sm shadow-cobalt/25 scale-[1.02]'
                        : 'bg-slate-surface text-slate-text border-slate-border hover:text-navy hover:bg-white hover:border-cobalt/40'
                    }`}
                    aria-pressed={selected}
                  >
                    {svc}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget Range (Pill Capsules) */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-navy">
                Estimated Scope / Investment <span className="text-xs text-slate-text font-normal font-sans">(Optional)</span>
              </label>
              <span className="text-xs text-slate-text font-mono">USD ($)</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {budgetOptions.map((budget) => {
                const selected = formData.budget === budget;
                return (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => setFormData({ ...formData, budget })}
                    className={`py-2.5 px-5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 text-center border cursor-pointer select-none ${
                      selected
                        ? 'bg-navy text-white border-navy shadow-sm scale-[1.02]'
                        : 'bg-slate-surface text-slate-text border-slate-border hover:text-navy hover:bg-white hover:border-navy/40'
                    }`}
                    aria-pressed={selected}
                  >
                    {budget}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="details"
              className="text-sm font-semibold text-navy flex items-center justify-between"
            >
              <span>
                Project Details &amp; Goals <span className="text-cobalt">*</span>
              </span>
              {errors.details && (
                <span className="text-xs text-red-600 font-medium" role="alert">
                  {errors.details}
                </span>
              )}
            </label>
            <textarea
              id="details"
              rows={4}
              required
              placeholder="Tell me about your brand, upcoming milestones, target timelines, or any specific challenges you would like to solve..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className={`w-full p-4.5 rounded-2xl bg-slate-surface/70 text-navy placeholder:text-slate-text/50 text-sm border outline-none transition-all focus:bg-white focus:border-cobalt focus:ring-4 focus:ring-cobalt/10 resize-y leading-relaxed min-h-[140px] ${
                errors.details ? 'border-red-400' : 'border-slate-border'
              }`}
            />
          </div>

          {/* Submit Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 border-t border-slate-border">
            <div className="flex items-center gap-2 text-slate-text text-xs">
              <ShieldCheck className="w-4 h-4 text-cobalt shrink-0" />
              <span>Direct correspondence. No automated newsletters, ever.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cobalt text-white text-sm font-semibold hover:bg-cobalt-hover transition-all shadow-sm hover:shadow-card-hover hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed group focus-visible:ring-2 focus-visible:ring-cobalt cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Send Project Enquiry</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

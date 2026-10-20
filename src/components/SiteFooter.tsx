import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-cobalt border-t border-white/15 pt-16 pb-12 mt-auto text-white">
      <div className="max-w-container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link to="/" className="group inline-block">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-white/80 transition-colors">
                Somya Khandelwal
              </span>
            </Link>
            <p className="text-sm text-white/85 leading-relaxed max-w-sm">
              Independent creative &amp; digital partner helping ambitious brands build a stronger online presence through thoughtful strategy, meaningful content, and design that connects.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span className="text-xs text-white/85">
                Available for selective engagements in {currentYear}
              </span>
            </div>
          </div>

          {/* Navigation (2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </span>
            <nav className="flex flex-col gap-2.5 text-sm" aria-label="Footer Navigation">
              <Link to="/" className="text-white/85 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white/85 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/services" className="text-white/85 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/work" className="text-white/85 hover:text-white transition-colors">
                Work
              </Link>
              <Link to="/contact" className="text-white/85 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Disciplines (3 cols) */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-white/85">
              <li>
                <Link to="/services#seo" className="hover:text-white transition-colors">
                  SEO &amp; Organic Growth
                </Link>
              </li>
              <li>
                <Link to="/services#smm" className="hover:text-white transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services#content" className="hover:text-white transition-colors">
                  Content Writing &amp; Editorial
                </Link>
              </li>
              <li>
                <Link to="/services#design" className="hover:text-white transition-colors">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link to="/services#webdev" className="hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect (2 cols) */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white">
              Connect
            </span>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="mailto:hello@somyakhandelwal.com"
                className="text-white hover:text-white/80 underline underline-offset-4 font-semibold break-all"
              >
                hello@somyakhandelwal.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-white/70" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Twitter / X</span>
                <ArrowUpRight className="w-3 h-3 text-white/70" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-white/70" />
              </a>
              <a
                href="https://substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Substack</span>
                <ArrowUpRight className="w-3 h-3 text-white/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Colophon & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
          <p>
            © {currentYear} Somya Khandelwal. All rights reserved. Designed with editorial precision.
          </p>
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1 text-white/85 hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded px-1.5 py-1"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

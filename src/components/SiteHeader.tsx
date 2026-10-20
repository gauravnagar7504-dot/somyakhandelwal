import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-border transition-colors">
      <div className="h-[68px] max-w-container mx-auto px-6 md:px-8 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-cobalt rounded-md"
        >
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-navy group-hover:text-cobalt transition-colors">
            Somya Khandelwal
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? 'text-cobalt border-b-2 border-cobalt pb-0.5 font-bold'
                    : 'text-slate-text hover:text-navy'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Cluster */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-btn bg-cobalt text-white font-semibold text-sm hover:bg-cobalt-hover transition-colors shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-navy hover:bg-slate-100 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] z-50 bg-navy/60 backdrop-blur-sm md:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white border-b border-slate-border px-6 py-8 flex flex-col gap-6 shadow-2xl text-navy"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    aria-current={active ? 'page' : undefined}
                    className={`text-lg font-medium py-2.5 px-3.5 rounded-lg transition-colors flex items-center justify-between ${
                      active
                        ? 'bg-cobalt text-white font-semibold'
                        : 'text-navy hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-white"></span>}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-border flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-btn bg-cobalt text-white font-semibold text-center shadow-md hover:bg-cobalt-hover transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-text pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Available for selected Q2/Q3 collaborations</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

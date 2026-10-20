import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  to,
  href,
  onClick,
  children,
  icon = true,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn bg-cobalt text-white text-sm font-medium hover:bg-cobalt-hover transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group';

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  to,
  href,
  onClick,
  children,
  icon = false,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-btn border border-slate-border bg-white text-navy text-sm font-medium hover:border-navy hover:bg-slate-surface transition-colors focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group';

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${className}`}>
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${className}`}>
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
};

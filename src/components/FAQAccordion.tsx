import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '../types';

interface FAQAccordionProps {
  items: FAQ[];
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = '' }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={`divide-y divide-slate-border border-y border-slate-border ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-5 transition-colors">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full flex items-center justify-between gap-4 text-left group focus-visible:ring-2 focus-visible:ring-cobalt rounded-md p-1"
            >
              <span className="font-display font-medium text-base sm:text-lg text-navy group-hover:text-cobalt transition-colors">
                {item.question}
              </span>
              <span
                className={`p-1.5 rounded-full border border-slate-border group-hover:border-cobalt transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-slate-surface text-cobalt' : 'text-slate-text'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="pt-4 pb-2 text-sm sm:text-base text-slate-text leading-relaxed pr-8 animate-fadeIn"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

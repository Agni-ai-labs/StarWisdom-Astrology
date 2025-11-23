
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, icon, noPadding = false }) => {
  return (
    <div className={`
      relative overflow-hidden
      bg-black/20 backdrop-blur-xl
      border border-white/10
      rounded-2xl
      transition-all duration-300
      hover:border-white/20 hover:shadow-2xl hover:shadow-black/40
      group
      ${className}
    `}>
      {title && (
        <div className="flex items-center gap-3 p-6 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors">
          {icon && <span className="text-neutral-400 group-hover:text-white transition-colors duration-300">{icon}</span>}
          <h3 className="text-base font-semibold text-neutral-200 tracking-tight group-hover:text-white transition-colors">{title}</h3>
        </div>
      )}
      <div className={noPadding ? '' : (title ? 'p-6 pt-5' : 'p-6')}>
        {children}
      </div>
    </div>
  );
};

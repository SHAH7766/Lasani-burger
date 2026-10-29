import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
  };

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <img
        src="/images/logo/lasani-logo.png"
        alt="Lasani Burger & BBQ Logo"
        className={`${sizeClasses[size]} object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-md`}
      />
      <div className="flex flex-col text-left">
        <span className="font-display text-2xl sm:text-3xl tracking-wider text-white leading-none">
          LASANI
        </span>
        <span className="text-[10px] tracking-widest text-[#FFB52E] font-semibold uppercase">
          Burger & BBQ
        </span>
      </div>
    </Link>
  );
};

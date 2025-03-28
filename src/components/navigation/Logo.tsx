
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  scrolled: boolean;
  isOpen: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled, isOpen }) => {
  return (
    <Link 
      to="/" 
      className={cn(
        "font-playfair text-2xl font-bold transition-colors duration-300",
        {
          "text-travel-navy": scrolled || isOpen,
          "text-white": !scrolled && !isOpen,
        }
      )}
      aria-label="Sarang Tradelink"
    >
      Sarang<span className="text-travel-gold">Tradelink</span>
    </Link>
  );
};

export default Logo;


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
      className="font-playfair text-2xl font-bold text-travel-navy"
      aria-label="Sarang Tradelink"
    >
      Sarang<span className="text-travel-gold">Tradelink</span>
    </Link>
  );
};

export default Logo;


import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  scrolled: boolean;
  isOpen: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled, isOpen }) => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 font-playfair text-2xl font-bold"
      aria-label="Tradelink"
    >
      <img 
        src="/lovable-uploads/c1a8a20f-d1a5-4b57-b6bd-d6af18fe3aa9.png" 
        alt="Tradelink Logo" 
        className="h-16 w-auto"  // Enlarged logo size
      />
      <span className="text-black">Tradelink</span>
    </Link>
  );
};

export default Logo;

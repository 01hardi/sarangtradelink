
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
      aria-label="Sarang Tradelink"
    >
      <img 
        src="/lovable-uploads/c1a8a20f-d1a5-4b57-b6bd-d6af18fe3aa9.png" 
        alt="Sarang Logo" 
        className="h-10 w-auto"
      />
      <div>
        <span className="text-travel-bright-blue">Sarang</span>
        <span className="text-black">Tradelink</span>
      </div>
    </Link>
  );
};

export default Logo;

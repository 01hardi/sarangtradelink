
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
      className="flex items-center"
      aria-label="Sarang Tradelink"
    >
      <img 
        src="/lovable-uploads/07286576-af5c-491d-9e5b-1bd3e92cefb3.png" 
        alt="Sarang Tradelink Logo" 
        className="h-10 md:h-12" 
      />
    </Link>
  );
};

export default Logo;

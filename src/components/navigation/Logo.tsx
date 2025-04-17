
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
      className="flex items-center space-x-2"
      aria-label="Logo"
    >
      <img 
        src="/lovable-uploads/c1a8a20f-d1a5-4b57-b6bd-d6af18fe3aa9.png" 
        alt="Logo" 
        className="h-48 w-auto"
      />
    </Link>
  );
};

export default Logo;

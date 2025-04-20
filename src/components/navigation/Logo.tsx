
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
        src="/lovable-uploads/76ccaa30-053f-491c-9f82-3b68934408e2.png" 
        alt="Sarang Logo" 
        className="h-48 w-auto"
      />
    </Link>
  );
};

export default Logo;


import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  scrolled: boolean;
  isOpen: boolean;
}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link
      to="/"
      className="flex items-center justify-center"
      aria-label="Logo"
    >
      <div
        className="bg-transparent rounded flex items-center"
        style={{
          lineHeight: 0,
        }}
      >
        <div className="h-16 md:h-20 w-auto text-2xl font-bold text-travel-navy">
          Sarang
        </div>
      </div>
    </Link>
  );
};

export default Logo;

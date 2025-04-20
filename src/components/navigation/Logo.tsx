
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
      <div
        className="bg-transparent rounded"
        style={{
          lineHeight: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="/lovable-uploads/0f2d455a-d21b-4947-8ca0-dd65f1adf8fd.png"
          alt="Sarang Logo"
          className="h-16 md:h-20 w-auto"
          style={{
            background: "transparent",
          }}
        />
      </div>
    </Link>
  );
};

export default Logo;

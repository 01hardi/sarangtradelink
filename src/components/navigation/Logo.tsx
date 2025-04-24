
import React from "react";
import { Link } from "react-router-dom";
interface LogoProps {
  scrolled: boolean;
  isOpen: boolean;
}
const Logo: React.FC<LogoProps> = () => {
  return <Link to="/" className="flex items-center justify-center" aria-label="Logo">
      <div className="bg-transparent rounded flex items-center" style={{
      lineHeight: 0
    }}>
        <img src="/lovable-uploads/6bb57aac-f917-4bd5-9b5f-5619c16d7960.png" alt="Sarang Logo" style={{
        background: "transparent"
      }} className="h-16 md:h-10 w-auto" />
      </div>
    </Link>;
};
export default Logo;

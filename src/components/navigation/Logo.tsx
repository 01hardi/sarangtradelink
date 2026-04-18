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
        <img src="/photo-uploads/0f2d455a-d21b-4947-8ca0-dd65f1adf8fd.png" alt="Sarang Logo" style={{
        background: "transparent"
      }} className="h-10 md:h-10 w-auto" />
      </div>
    </Link>;
};
export default Logo;
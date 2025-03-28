
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavLink } from '@/components/navigation/NavTypes';

interface DesktopNavigationProps {
  navLinks: NavLink[];
  isActive: (path: string) => boolean;
  scrolled: boolean;
  servicesOpen: boolean;
  setServicesOpen: (open: boolean) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  navLinks,
  isActive,
  scrolled,
  servicesOpen,
  setServicesOpen
}) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          {link.dropdown ? (
            <button 
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                "flex items-center space-x-1 font-medium text-travel-navy transition-colors duration-300",
                {
                  "text-travel-gold": isActive(link.path),
                  "hover:text-travel-gold": true,
                }
              )}
            >
              <span>{link.name}</span>
              <ChevronDown size={16} />
            </button>
          ) : (
            <Link 
              to={link.path}
              className={cn(
                "font-medium text-travel-navy transition-colors duration-300",
                {
                  "text-travel-gold": isActive(link.path),
                  "hover:text-travel-gold": true,
                }
              )}
            >
              {link.name}
            </Link>
          )}
          
          {/* Dropdown Menu */}
          {link.dropdown && (
            <div 
              className={cn(
                "absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                {
                  "opacity-100 visible": servicesOpen
                }
              )}
            >
              <div className="py-2">
                {link.subLinks?.map((subLink) => (
                  <Link
                    key={subLink.name}
                    to={subLink.path}
                    className="block px-4 py-2 text-travel-navy hover:bg-travel-light-gray hover:text-travel-gold transition-colors duration-200"
                  >
                    {subLink.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNavigation;

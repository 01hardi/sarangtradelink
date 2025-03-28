
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/navigation/NavTypes';

interface MobileMenuProps {
  isOpen: boolean;
  servicesOpen: boolean;
  setServicesOpen: (open: boolean) => void;
  navLinks: NavLink[];
  isActive: (path: string) => boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  servicesOpen,
  setServicesOpen,
  navLinks,
  isActive,
}) => {
  return (
    <div 
      className={cn(
        "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
        {
          "max-h-[1000px] opacity-100 visible": isOpen,
          "max-h-0 opacity-0 invisible": !isOpen
        }
      )}
    >
      <div className="container mx-auto px-4 pb-6 bg-white">
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full py-2 font-medium text-travel-navy hover:text-travel-gold transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} className={servicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                  </button>
                  
                  <div 
                    className={cn(
                      "pl-4 space-y-2 overflow-hidden transition-all duration-300",
                      {
                        "max-h-[500px] mt-2": servicesOpen,
                        "max-h-0": !servicesOpen
                      }
                    )}
                  >
                    {link.subLinks?.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.path}
                        className="block py-2 text-travel-navy hover:text-travel-gold transition-colors"
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link 
                  to={link.path}
                  className={cn(
                    "block py-2 font-medium transition-colors",
                    {
                      "text-travel-gold": isActive(link.path),
                      "text-travel-navy hover:text-travel-gold": !isActive(link.path),
                    }
                  )}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Button
            variant="default"
            className="mt-4 w-full bg-travel-gold hover:bg-travel-navy text-white transition-colors"
          >
            Make Inquiry
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

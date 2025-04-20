
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { NavLink } from '@/components/navigation/NavTypes';

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  isActive: (path: string) => boolean;
  inDrawer?: boolean;
  closeDrawer?: () => void;
  // legacy for compatibility
  servicesOpen?: boolean;
  setServicesOpen?: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navLinks,
  isActive,
  inDrawer = false,
  closeDrawer,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        inDrawer ? "pb-8 px-4" : "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
        {
          "block": inDrawer ? true : isOpen,
          "hidden": inDrawer ? false : !isOpen
        }
      )}
    >
      <nav className="flex flex-col space-y-4">
        {navLinks.map((link) => (
          <div key={link.name}>
            {link.dropdown ? (
              <>
                <button
                  onClick={() => setExpanded((prev) => !prev)}
                  className="flex items-center justify-between w-full py-2 font-medium text-travel-navy hover:text-travel-gold transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronDown size={16} className={expanded ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>

                <div
                  className={cn(
                    "pl-4 space-y-2 overflow-hidden transition-all duration-300",
                    {
                      "max-h-[500px] mt-2": expanded,
                      "max-h-0": !expanded
                    }
                  )}
                >
                  {link.subLinks?.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      className="block py-2 text-travel-navy hover:text-travel-gold transition-colors"
                      onClick={closeDrawer}
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
                onClick={closeDrawer}
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}
        <Button
          variant="default"
          className="mt-4 w-full bg-travel-gold hover:bg-travel-navy text-white transition-colors"
          onClick={closeDrawer}
        >
          Make Inquiry
        </Button>
      </nav>
    </div>
  );
};

export default MobileMenu;

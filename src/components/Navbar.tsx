
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import TopInfoBar from '@/components/navigation/TopInfoBar';
import MobileMenu from '@/components/navigation/MobileMenu';
import DesktopNavigation from '@/components/navigation/DesktopNavigation';
import Logo from '@/components/navigation/Logo';
import { NavLink } from '@/components/navigation/NavTypes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'What We Do', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: true,
      subLinks: [
        { name: 'Travel Services', path: '/services/day-trips' },
        { name: 'Financial Services', path: '/services/financial-services' },
        { name: 'Accommodation & Airbnb', path: '/services/accommodation' },
        { name: 'Visa Services', path: '/services/visa-services' },
        { name: 'Transfer Services', path: '/services/transfer-services' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <TopInfoBar />
      
      {/* Main Navigation */}
      <header 
        className="fixed top-0 left-0 right-0 w-full z-50"
      >
        <div
          className="container mx-auto flex justify-between items-center py-1 px-4 glass animate-fade-in bg-transparent"
        >
          <Logo scrolled={scrolled} isOpen={isOpen} />
          
          <DesktopNavigation 
            navLinks={navLinks} 
            isActive={isActive} 
            scrolled={scrolled} 
            servicesOpen={servicesOpen}
            setServicesOpen={setServicesOpen}
          />
          
          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              className="bg-travel-bright-blue hover:bg-travel-sky-blue text-white"
            >
              Make Inquiry
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <MobileMenu 
          isOpen={isOpen}
          servicesOpen={servicesOpen}
          setServicesOpen={setServicesOpen}
          navLinks={navLinks}
          isActive={isActive}
        />
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-12 lg:h-20"></div>
    </>
  );
};

export default Navbar;

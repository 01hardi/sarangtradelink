
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, MapPin, Clock, Facebook, Instagram, Twitter
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '#',
      dropdown: true,
      subLinks: [
        { name: 'London Experience', path: '/services/london-experience' },
        { name: 'Visa Services', path: '/services/visa-services' },
        { name: 'Accommodation & Transfers', path: '/services/accommodation' },
        { name: 'UK Day Trips', path: '/services/day-trips' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-travel-navy text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex space-x-6 text-sm items-center">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+44 20 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>123 Westminster, London</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock size={14} />
              <span>Mon-Fri: 9AM - 6PM</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-travel-gold transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-travel-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-travel-gold transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
          {
            "bg-white shadow-md": scrolled || isOpen,
            "bg-transparent": !scrolled && !isOpen,
            "lg:bg-transparent": !scrolled && !isOpen,
            "lg:pt-8": !scrolled && !isOpen,
          }
        )}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link 
            to="/" 
            className={cn(
              "font-playfair text-2xl md:text-3xl font-bold transition-colors duration-300",
              {
                "text-travel-navy": scrolled || isOpen,
                "text-white": !scrolled && !isOpen,
                "lg:text-white": !scrolled && !isOpen,
              }
            )}
            aria-label="WanderLondon"
          >
            Wander<span className="text-travel-gold">London</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "flex items-center space-x-1 font-medium transition-colors duration-300",
                      {
                        "text-travel-navy": scrolled,
                        "text-white": !scrolled,
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
                      "font-medium transition-colors duration-300",
                      {
                        "text-travel-gold": isActive(link.path),
                        "text-travel-navy": scrolled && !isActive(link.path),
                        "text-white": !scrolled && !isActive(link.path),
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
          
          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              className="bg-travel-gold hover:bg-travel-navy text-white transition-colors duration-300"
            >
              Book Consultation
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-travel-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
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
                Book Consultation
              </Button>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-28"></div>
    </>
  );
};

export default Navbar;

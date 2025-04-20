import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Contact } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import Logo from '@/components/navigation/Logo';
import MobileMenu from '@/components/navigation/MobileMenu';
import { NavLink } from '@/components/navigation/NavTypes';
import InquiryForm from '@/components/InquiryForm';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const location = useLocation();
  const navLinks: NavLink[] = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'What We Do',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services',
    dropdown: true,
    subLinks: [{
      name: 'Travel Services',
      path: '/services/day-trips'
    }, {
      name: 'Financial Services',
      path: '/services/financial-services'
    }, {
      name: 'Accommodation & Airbnb',
      path: '/services/accommodation'
    }, {
      name: 'Visa Services',
      path: '/services/visa-services'
    }, {
      name: 'Transfer Services',
      path: '/services/transfer-services'
    }]
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'FAQ',
    path: '/faq'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <>
      <header className={cn("fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out bg-transparent shadow-none backdrop-blur-none")}>
        <div className="container mx-auto flex items-center justify-between px-4 py-[2px]">
          <div className="flex-1 flex justify-start">
            {/* Burger menu always visible */}
            <button className="text-gray-900" onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu size={28} />
            </button>
          </div>
          
          <div className="flex-1 flex justify-center">
            <Logo scrolled={false} isOpen={isOpen} />
          </div>
          
          <div className="flex-1 flex justify-end">
            {/* Contact Us button */}
            <Button variant="default" onClick={() => setShowContact(true)} className="bg-travel-gold rounded transition-colors flex gap-2 items-center text-slate-950 px-px mx-0 my-0 py-0 text-center bg-sky-500 hover:bg-sky-400">
              <Contact size={18} className="mr-1" />
              Contact Us
            </Button>
          </div>
        </div>

        {/* Drawer for menu */}
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent className="max-w-md w-full mx-auto">
            <div className="flex justify-between items-center px-4 pt-2">
              <Logo scrolled={false} isOpen={isOpen} />
              <button className="text-gray-900" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={28} />
              </button>
            </div>
            <div className="mt-4">
              <MobileMenu isOpen={isOpen} navLinks={navLinks} isActive={isActive} servicesOpen={false} setServicesOpen={() => {}} inDrawer={true} closeDrawer={() => setIsOpen(false)} />
            </div>
          </DrawerContent>
        </Drawer>

        {/* Inquiry Form Modal */}
        <Drawer open={showContact} onOpenChange={setShowContact}>
          <DrawerContent className="max-w-lg w-full mx-auto px-0 py-6">
            <div className="flex justify-between items-center px-6 pb-2">
              <h3 className="text-2xl font-bold text-travel-navy">Contact Us</h3>
              <button className="text-gray-900" onClick={() => setShowContact(false)} aria-label="Close contact form">
                <X size={28} />
              </button>
            </div>
            <div className="px-6 pb-4">
              <InquiryForm />
            </div>
          </DrawerContent>
        </Drawer>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>;
};
export default Navbar;
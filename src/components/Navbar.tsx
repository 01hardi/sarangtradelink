
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/navigation/Logo";
import { useLocation, Link } from "react-router-dom";

// No top info bar import or render

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Main Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between h-14">
          {/* Left: Hamburger button labeled "Menu" */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="flex items-center text-travel-navy font-medium gap-1"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((v) => !v)}
            >
              <Menu size={22} className="mr-1" />
              <span className="text-base">Menu</span>
            </button>
          </div>
          
          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" aria-label="Go to home">
              <Logo />
            </Link>
          </div>

          {/* Right: Contact Button */}
          <div className="flex-1 flex justify-end">
            <Button
              asChild
              className="rounded-lg bg-[#F26430] hover:bg-[#da5123] text-white px-4 py-2 min-w-[100px] font-medium text-base shadow-none"
              style={{ transition: "background 0.2s" }}
            >
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        {/* You can show/hide a sidebar here for mobile if needed */}
      </header>
      {/* Spacer for fixed header */}
      <div className="h-14"></div>
    </>
  );
};

export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FooterQuickLinks = () => {
  return (
    <div>
      <h3 className="font-playfair text-lg font-semibold mb-6">Quick Links</h3>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>What We Do</span>
          </Link>
        </li>
        <li>
          <Link to="/services/london-experience" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>London Experience</span>
          </Link>
        </li>
        <li>
          <Link to="/services/visa-services" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>Visa Services</span>
          </Link>
        </li>
        <li>
          <Link to="/services/accommodation" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>Accommodation & Transfers</span>
          </Link>
        </li>
        <li>
          <Link to="/services/day-trips" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>Day Trips</span>
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-gray-300 hover:text-travel-gold transition-colors flex items-center">
            <ArrowRight size={14} className="mr-2" />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterQuickLinks;

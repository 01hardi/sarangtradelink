
import React from "react";
import { Link } from "react-router-dom";
import FooterSocialLinks from "./footer/FooterSocialLinks";
import FooterQuickLinks from "./footer/FooterQuickLinks";
import FooterContactInfo from "./footer/FooterContactInfo";
import FooterNewsletter from "./footer/FooterNewsletter";

const Footer = () => {
  return (
    <footer className="bg-travel-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FooterSocialLinks />
          <FooterQuickLinks />
          <FooterContactInfo />
          <FooterNewsletter />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sarang Tradelink. All rights
              reserved.
            </p>
            <div className="flex space-x-4 text-sm text-gray-400">
              <Link
                to="/privacy-policy"
                className="hover:text-travel-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="hover:text-travel-gold transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/faq"
                className="hover:text-travel-gold transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

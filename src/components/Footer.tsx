
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-travel-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <h2 className="font-playfair text-2xl font-bold">
                Sarang<span className="text-travel-gold">Tradelink</span>
              </h2>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Sarang Tradelink specializes in creating unforgettable travel
              experiences in the UK. From guided tours to accommodations, we
              handle every aspect of your journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-travel-gold transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-travel-gold transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-travel-gold transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-travel-gold transition-colors p-2 rounded-full"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>What We Do</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/london-experience"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>London Experience</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/visa-services"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Visa Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/accommodation"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Accommodation & Transfers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/services/day-trips"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Day Trips</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-travel-gold transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin
                  size={18}
                  className="text-travel-gold mr-3 flex-shrink-0 mt-1"
                />
                <span className="text-gray-300">
                  22 Wheelers Lane, Bradville, Milton Keynes, England, MK137HW
                </span>
              </li>
              <li className="flex">
                <Phone
                  size={18}
                  className="text-travel-gold mr-3 flex-shrink-0"
                />
                <span className="text-gray-300">+44 7765793462</span>
              </li>
              <li className="flex">
                <Mail
                  size={18}
                  className="text-travel-gold mr-3 flex-shrink-0"
                />
                <span className="text-gray-300">info@sarangtradelink.com</span>
              </li>
              <li className="flex">
                <Clock
                  size={18}
                  className="text-travel-gold mr-3 flex-shrink-0"
                />
                <div className="text-gray-300">
                  <p>Monday - Friday: 9AM - 6PM</p>
                  <p>Saturday: 10AM - 4PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-transparent focus:border-travel-gold focus:bg-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-travel-gold hover:bg-travel-light-gold text-white transition-colors">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
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


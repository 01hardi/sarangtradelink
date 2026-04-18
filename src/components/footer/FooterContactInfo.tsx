import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const FooterContactInfo = () => {
  return (
    <div>
      <h3 className="font-playfair text-lg font-semibold mb-6">Contact Info</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin
            size={18}
            className="text-travel-gold mr-3 flex-shrink-0 mt-1"
          />
          <a 
            href="https://maps.google.com/?q=22+Wheelers+Lane,+Bradville,+Milton+Keynes,+England,+MK13+7HW" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            22 Wheelers Lane, Bradville, Milton Keynes, England, MK13 7HW
          </a>
        </li>
        <li className="flex items-center">
          <Phone size={18} className="text-travel-gold mr-3 flex-shrink-0" />
          <a href="tel:+447765793462" className="text-gray-300 hover:text-white transition-colors">
            +44 7765793462
          </a>
        </li>
        <li className="flex items-center">
          <Mail size={18} className="text-travel-gold mr-3 flex-shrink-0" />
          <a href="mailto:sarangtradelink@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            sarangtradelink@gmail.com
          </a>
        </li>
        <li className="flex items-start">
          <Clock size={18} className="text-travel-gold mr-3 flex-shrink-0 mt-1" />
          <div className="text-gray-300">
            <p>Monday - Friday: 9AM - 6PM</p>
            <p>Saturday: 10AM - 4PM</p>
            <p>Sunday: Closed</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterContactInfo;

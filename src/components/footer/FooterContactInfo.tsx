import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const FooterContactInfo = () => {
  return (
    <div>
      <h3 className="font-playfair text-lg font-semibold mb-6">Contact Info</h3>
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
          <Phone size={18} className="text-travel-gold mr-3 flex-shrink-0" />
          <span className="text-gray-300">+44 7765793462</span>
        </li>
        <li className="flex">
          <Mail size={18} className="text-travel-gold mr-3 flex-shrink-0" />
          <span className="text-gray-300">Sarangtradelink@gmail.com</span>
        </li>
        <li className="flex">
          <Clock size={18} className="text-travel-gold mr-3 flex-shrink-0" />
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

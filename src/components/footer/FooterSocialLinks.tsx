
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const FooterSocialLinks = () => {
  return (
    <div className="space-y-6">
      <Link to="/" className="inline-block">
        <h2 className="font-playfair text-2xl font-bold">
          Sarang<span className="text-travel-gold">Tradelink</span>
        </h2>
      </Link>
      <p className="text-gray-300 text-sm leading-relaxed">
        Sarang Tradelink specializes in creating unforgettable travel experiences
        in the UK. From guided tours to accommodations, we handle every aspect of
        your journey.
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
  );
};

export default FooterSocialLinks;

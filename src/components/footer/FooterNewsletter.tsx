
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FooterNewsletter = () => {
  return (
    <div>
      <h3 className="font-playfair text-lg font-semibold mb-6">Newsletter</h3>
      <p className="text-gray-300 mb-4">
        Subscribe to our newsletter for travel tips and exclusive offers.
      </p>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="email"
          placeholder="Your email address"
          required
          className="bg-white/10 border-transparent focus:border-travel-gold focus:bg-white/20 text-white placeholder:text-gray-400"
        />
        <Button type="submit" className="w-full bg-travel-gold hover:bg-travel-light-gold text-white transition-colors">
          Subscribe
        </Button>
      </form>
      <p className="mt-4 text-xs text-gray-400">
        By subscribing, you agree to our Privacy Policy and consent to receive
        updates from our company.
      </p>
    </div>
  );
};

export default FooterNewsletter;


import React from 'react';
import { Check } from 'lucide-react';

const ServiceBenefits: React.FC = () => {
  const benefits = [
    "FCA regulated third-party applications for secure transactions",
    "Competitive exchange rates that save you money",
    "Fast and reliable service with regular status updates",
    "Dedicated customer support available 7 days a week",
    "Transparent fee structure with no hidden costs"
  ];
  
  return (
    <div className="col-span-1 lg:col-span-2">
      <h3 className="text-2xl font-playfair font-bold mb-4">Why Choose Our Financial Services?</h3>
      <p className="text-gray-600 mb-4">
        At Sarang, we understand the importance of reliable and efficient financial services, especially for
        international travelers and students. Our team of experts is dedicated to providing you with the best
        possible service, ensuring your money reaches its destination safely and on time.
      </p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-travel-gold mr-2 shrink-0 mt-0.5" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceBenefits;

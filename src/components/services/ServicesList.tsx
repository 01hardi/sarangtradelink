
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from './servicesData';

const ServicesList: React.FC = () => {
  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md h-full">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={service.path}
                className="inline-flex items-center text-travel-gold hover:text-travel-navy transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

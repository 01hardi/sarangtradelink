
import React from 'react';
import ServiceItem from './ServiceItem';
import { services } from './servicesData';

const ServicesList: React.FC = () => {
  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

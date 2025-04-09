
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ServiceItemType } from './servicesData';

interface ServiceItemProps {
  service: ServiceItemType;
  index: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, index }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            {service.icon}
          </div>
          <h3 className="text-2xl font-playfair font-bold mb-4">{service.title}</h3>
          <p className="text-gray-600 mb-6">{service.description}</p>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="text-travel-gold mr-2">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            className="bg-travel-gold hover:bg-travel-navy text-white transition-colors"
            asChild
          >
            <Link to={service.path}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
        <img 
          src={`https://images.unsplash.com/photo-${index === 0 ? '1520967824495-b529902acfab' : 
                 index === 1 ? '1551269901-5c5e14c25df7' : 
                 index === 2 ? '1618160702438-9b02ab6515c9' : 
                 index === 3 ? '1513836279014-a89f7a76ae86' :
                 index === 4 ? '1580048915913-4f5f6825b5f3' :
                 '1566994861939-3d507cf1a414'}?auto=format&fit=crop&w=800&q=80`} 
          alt={service.title} 
          className="rounded-lg shadow-lg w-full h-auto"
          onError={(e) => {
            // Fallback image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>
    </div>
  );
};

export default ServiceItem;

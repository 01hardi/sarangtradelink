
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  href,
  className,
  delay = 0
}) => {
  return (
    <Link 
      to={href}
      className={cn(
        'group block p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift card-hover',
        className,
        'transition-all duration-300 opacity-0 animate-fade-in',
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <div className="mr-5 p-3 bg-travel-light-gray rounded-lg text-travel-navy group-hover:bg-travel-gold group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h3 className="font-playfair text-xl font-semibold text-travel-navy mb-2 group-hover:text-travel-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-travel-dark-gray mb-4">
            {description}
          </p>
          <div className="flex items-center font-medium text-travel-navy group-hover:text-travel-gold transition-colors duration-300">
            <span>Learn More</span>
            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

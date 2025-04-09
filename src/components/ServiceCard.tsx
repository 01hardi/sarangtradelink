
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
  const isHorizontal = className?.includes('flex-row');

  return (
    <Link 
      to={href}
      className={cn(
        'group block p-5 bg-white rounded-md hover:shadow-sm transition-all duration-300',
        className,
        'opacity-0 animate-fade-in',
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn("flex", isHorizontal ? "flex-row items-center" : "flex-col")}>
        <div className={cn(
          "p-2 bg-travel-light-gray rounded-md text-travel-navy",
          isHorizontal ? "mr-4 flex-shrink-0" : "mb-4"
        )}>
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-lg text-travel-navy mb-2">
            {title}
          </h3>
          <p className="text-travel-dark-gray text-sm mb-3">
            {description}
          </p>
          <div className="flex items-center text-sm font-medium text-travel-navy group-hover:text-travel-gold transition-colors duration-300">
            <span>Learn More</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;

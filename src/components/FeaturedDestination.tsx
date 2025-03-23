
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeaturedDestinationProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
  className?: string;
  imagePosition?: 'left' | 'right';
}

const FeaturedDestination: React.FC<FeaturedDestinationProps> = ({
  title,
  description,
  imageUrl,
  href,
  className,
  imagePosition = 'right'
}) => {
  return (
    <div 
      className={cn(
        'flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100',
        className,
        imagePosition === 'left' && 'md:flex-row-reverse'
      )}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 h-72 md:h-96 image-container">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover image-zoom"
        />
      </div>
      
      {/* Content */}
      <div className="w-full md:w-1/2 p-6 md:p-10">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-travel-navy mb-4">{title}</h3>
        <p className="text-travel-dark-gray mb-6">{description}</p>
        <Button 
          asChild
          variant="default" 
          className="bg-travel-gold hover:bg-travel-navy text-white group"
        >
          <Link to={href}>
            <span>Explore Destination</span>
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedDestination;


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
        'flex flex-col md:flex-row items-center bg-white rounded-md overflow-hidden shadow-sm',
        className,
        imagePosition === 'left' && 'md:flex-row-reverse'
      )}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 h-64 md:h-80 image-container">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover image-zoom"
          onError={(e) => {
            // Fallback to a placeholder image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>
      
      {/* Content */}
      <div className="w-full md:w-1/2 p-6 md:p-8">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-travel-navy mb-3">{title}</h3>
        <p className="text-travel-dark-gray text-sm mb-4">{description}</p>
        <Button 
          asChild
          variant="default" 
          className="bg-travel-navy hover:bg-travel-navy/90 text-white group"
        >
          <Link to={href}>
            <span>Explore Destination</span>
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedDestination;


import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  imageUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  location,
  rating,
  imageUrl,
  className
}) => {
  return (
    <div 
      className={cn(
        'bg-white p-5 rounded-md shadow-sm',
        className
      )}
    >
      {/* Rating */}
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < rating ? '#9A7D0A' : 'none'}
            color={i < rating ? '#9A7D0A' : '#D4D4D4'}
            className="mr-1"
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-travel-dark-gray text-sm italic mb-4">"{quote}"</p>
      
      {/* Author */}
      <div className="flex items-center">
        {imageUrl && (
          <div className="mr-3">
            <img 
              src={imageUrl} 
              alt={author} 
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder image if the original fails to load
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150";
              }}
            />
          </div>
        )}
        <div>
          <h4 className="font-medium text-sm text-travel-navy">{author}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

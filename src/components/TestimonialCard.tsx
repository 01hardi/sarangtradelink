
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
        'bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100',
        className
      )}
    >
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            fill={i < rating ? '#BF9D58' : 'none'}
            color={i < rating ? '#BF9D58' : '#D4D4D4'}
            className="mr-1"
          />
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-travel-dark-gray italic mb-6">"{quote}"</p>
      
      {/* Author */}
      <div className="flex items-center">
        {imageUrl && (
          <div className="mr-4">
            <img 
              src={imageUrl} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-travel-navy">{author}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

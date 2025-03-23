
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  subtitleClassName?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
  subtitleClassName = '',
  light = false,
}) => {
  return (
    <div className={cn('mb-8', centered && 'text-center', className)}>
      <h2 
        className={cn(
          'font-playfair text-2xl md:text-3xl font-bold relative',
          light ? 'text-white' : 'text-travel-navy',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            'mt-3 text-base',
            light ? 'text-gray-300' : 'text-travel-dark-gray',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

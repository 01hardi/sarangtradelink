
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
    <div className={cn('mb-10', centered && 'text-center', className)}>
      <h2 
        className={cn(
          'font-playfair text-3xl md:text-4xl font-bold relative inline-block pb-4',
          light ? 'text-white' : 'text-travel-navy',
          'after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-travel-gold after:w-16',
          centered && 'after:left-1/2 after:-translate-x-1/2'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            'mt-4 text-lg',
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

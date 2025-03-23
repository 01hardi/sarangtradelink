
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  id: string | number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  excerpt,
  imageUrl,
  date,
  author,
  className
}) => {
  return (
    <article 
      className={cn(
        'bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover-lift transition-transform duration-300',
        className
      )}
    >
      {/* Image */}
      <Link to={`/blog/${id}`} className="block image-container">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-56 object-cover image-zoom"
        />
      </Link>
      
      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="font-playfair text-xl font-bold text-travel-navy mb-2 line-clamp-2">
          <Link to={`/blog/${id}`} className="hover:text-travel-gold transition-colors">
            {title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-travel-dark-gray mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Read More */}
        <Link 
          to={`/blog/${id}`}
          className="inline-flex items-center font-medium text-travel-navy hover:text-travel-gold transition-colors"
        >
          <span>Read More</span>
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;

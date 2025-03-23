
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
        'bg-white rounded-md overflow-hidden shadow-sm transition-transform duration-300',
        className
      )}
    >
      {/* Image */}
      <Link to={`/blog/${id}`} className="block image-container">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover image-zoom"
        />
      </Link>
      
      {/* Content */}
      <div className="p-4">
        {/* Meta */}
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <div className="flex items-center mr-3">
            <Calendar size={12} className="mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User size={12} className="mr-1" />
            <span>{author}</span>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-base font-medium text-travel-navy mb-2 line-clamp-2">
          <Link to={`/blog/${id}`} className="hover:text-travel-gold transition-colors">
            {title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <p className="text-travel-dark-gray text-sm mb-3 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Read More */}
        <Link 
          to={`/blog/${id}`}
          className="inline-flex items-center text-sm font-medium text-travel-navy hover:text-travel-gold transition-colors"
        >
          <span>Read More</span>
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;

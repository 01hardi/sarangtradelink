
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Search, User, Calendar, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Top 10 Must-Visit Attractions in London",
    excerpt: "Discover the iconic landmarks and hidden gems that make London one of the world's most visited cities.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    date: "June 15, 2023",
    author: "Emma Thompson",
    category: "Attractions"
  },
  {
    id: 2,
    title: "A Complete Guide to London's Public Transportation",
    excerpt: "Navigate London like a local with our comprehensive guide to the city's efficient public transport system.",
    image: "https://images.unsplash.com/photo-1520967824895-b4568b3ce2e3?auto=format&fit=crop&w=800&q=80",
    date: "May 28, 2023",
    author: "James Wilson",
    category: "Travel Tips"
  },
  {
    id: 3,
    title: "Best London Food Markets for Culinary Enthusiasts",
    excerpt: "Explore London's vibrant food scene through its diverse markets offering flavors from around the world.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    date: "April 12, 2023",
    author: "Sarah Chen",
    category: "Food & Dining"
  },
  {
    id: 4,
    title: "London on a Budget: Free Activities and Attractions",
    excerpt: "Experience the best of London without breaking the bank with our guide to free museums, parks, and events.",
    image: "https://images.unsplash.com/photo-1498378624751-ead6e3b57fcd?auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2023",
    author: "David Patel",
    category: "Budget Travel"
  },
  {
    id: 5,
    title: "Day Trips from London: Exploring Beyond the City",
    excerpt: "Venture beyond London's borders to discover charming towns, historic sites, and beautiful countryside.",
    image: "https://images.unsplash.com/photo-1494922275507-58dc039ed337?auto=format&fit=crop&w=800&q=80",
    date: "February 20, 2023",
    author: "Emma Thompson",
    category: "Day Trips"
  },
  {
    id: 6,
    title: "London's Most Instagrammable Spots Revealed",
    excerpt: "Capture the perfect shots for your social media at these photogenic London locations.",
    image: "https://images.unsplash.com/photo-1618430419986-453075243b7a?auto=format&fit=crop&w=800&q=80",
    date: "January 10, 2023",
    author: "James Wilson",
    category: "Photography"
  }
];

// Sample categories
const categories = [
  { name: "Attractions", count: 12 },
  { name: "Travel Tips", count: 8 },
  { name: "Food & Dining", count: 6 },
  { name: "Budget Travel", count: 5 },
  { name: "Day Trips", count: 7 },
  { name: "Photography", count: 4 },
  { name: "History", count: 9 },
  { name: "Shopping", count: 3 },
];

// Sample recent posts (for sidebar)
const recentPosts = blogPosts.slice(0, 3);

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-travel-navy py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Our Blog</h1>
          <Breadcrumb className="text-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Blog</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
                    <Link to={`/blog/${post.id}`} className="block">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-48 object-cover object-center"
                      />
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                        <span className="inline-flex items-center">
                          <User size={14} className="mr-1" />
                          {post.author}
                        </span>
                        <span className="inline-flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="block">
                        <h3 className="text-xl font-bold mb-2 hover:text-travel-gold transition-colors">{post.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-travel-gold font-medium inline-flex items-center hover:text-travel-navy transition-colors"
                      >
                        Read More
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Search</h3>
                <div className="relative">
                  <Input 
                    type="text" 
                    placeholder="Search blog..." 
                    className="pr-10"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name} className="border-b border-gray-100 pb-2 last:border-0">
                      <Link 
                        to="#" 
                        className="flex justify-between hover:text-travel-gold transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-travel-light-gray px-2 rounded-full text-sm">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="font-medium line-clamp-2 hover:text-travel-gold transition-colors"
                        >
                          {post.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscribe */}
              <div className="bg-travel-navy p-6 rounded-lg shadow-md text-white">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="mb-4">Subscribe to get travel tips and exclusive offers straight to your inbox.</p>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-transparent focus:border-travel-gold focus:bg-white/20 text-white placeholder:text-gray-400 mb-3"
                />
                <Button 
                  className="w-full bg-travel-gold hover:bg-travel-light-gold text-white transition-colors"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

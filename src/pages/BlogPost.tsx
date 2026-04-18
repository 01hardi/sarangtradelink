
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { User, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SectionHeading from '@/components/SectionHeading';

// Sample blog posts data
const blogPostsData = [
  {
    id: "1",
    title: "Top 10 Must-Visit Attractions in London",
    content: `<p class="mb-4">London, one of the world's most visited cities, is a treasure trove of iconic landmarks, historic sites, and cultural institutions. From royal palaces to modern marvels, here's our definitive list of the top 10 must-visit attractions in the British capital.</p>
              <h3 class="text-xl font-bold mb-3 mt-6">1. The Tower of London</h3>
              <p class="mb-4">Dating back to 1066, this historic fortress has served as a royal palace, prison, and treasury. Today, it houses the Crown Jewels, including the Imperial State Crown adorned with over 2,800 diamonds. Don't miss the famous Yeoman Warders (Beefeaters) tours for fascinating tales of intrigue and imprisonment.</p>
              <h3 class="text-xl font-bold mb-3 mt-6">2. The British Museum</h3>
              <p class="mb-4">Home to one of the world's most comprehensive historical collections, the British Museum houses around eight million works from all continents. Highlights include the Rosetta Stone, the Parthenon sculptures, and Egyptian mummies. Best of all, admission is free.</p>
              <h3 class="text-xl font-bold mb-3 mt-6">3. Buckingham Palace</h3>
              <p class="mb-4">The official residence of the British monarch, Buckingham Palace is a must-visit, especially during the Changing of the Guard ceremony. The State Rooms are open to visitors for 10 weeks each summer and on selected dates during winter and spring.</p>
              <p class="mb-4">London's rich tapestry of attractions offers something for every visitor, from history enthusiasts to modern art lovers. While these top 10 sites are undoubtedly worth your time, remember that the city's charm also lies in its hidden corners, local pubs, and distinctive neighborhoods. Take time to wander and discover the London that resonates with you.</p>`,
    excerpt: "Discover the iconic landmarks and hidden gems that make London one of the world's most visited cities.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    date: "June 15, 2023",
    author: "Emma Thompson",
    category: "Attractions",
    tags: ["London", "Sightseeing", "Tourist Attractions", "Travel Guide"],
    comments: 12
  },
  {
    id: "2",
    title: "A Complete Guide to London's Public Transportation",
    content: `<p class="mb-4">Navigating London's comprehensive public transportation system can seem daunting at first, but it's actually one of the most efficient ways to explore the city. This guide will help you understand the various transportation options available and how to use them like a local.</p>
              <h3 class="text-xl font-bold mb-3 mt-6">The London Underground (The Tube)</h3>
              <p class="mb-4">The Tube is the oldest underground railway network in the world and remains the backbone of London's public transportation system. With 11 lines covering 270 stations, it's often the fastest way to travel around the city, especially during rush hour when road traffic is at its heaviest.</p>
              <h3 class="text-xl font-bold mb-3 mt-6">Buses</h3>
              <p class="mb-4">London's iconic red buses are not just a symbol of the city but also a practical way to get around. With over 700 routes, buses reach parts of London that the Tube doesn't cover. Plus, traveling by bus offers the added benefit of sightseeing as you journey through the streets.</p>
              <p class="mb-4">Understanding and utilizing London's public transportation system will significantly enhance your visit to the city. It's not just about getting from point A to point B; it's about experiencing the city as locals do, observing daily life, and perhaps even making some unexpected discoveries along the way.</p>`,
    excerpt: "Navigate London like a local with our comprehensive guide to the city's efficient public transport system.",
    image: "https://images.unsplash.com/photo-1520967824895-b4568b3ce2e3?auto=format&fit=crop&w=800&q=80",
    date: "May 28, 2023",
    author: "James Wilson",
    category: "Travel Tips",
    tags: ["London", "Public Transport", "Travel Tips", "Underground"],
    comments: 8
  }
];

// Related posts
const relatedPosts = [
  {
    id: "3",
    title: "Best London Food Markets for Culinary Enthusiasts",
    excerpt: "Explore London's vibrant food scene through its diverse markets offering flavors from around the world.",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=80",
    date: "April 12, 2023",
    author: "Sarah Chen",
    category: "Food & Dining"
  },
  {
    id: "4",
    title: "London on a Budget: Free Activities and Attractions",
    excerpt: "Experience the best of London without breaking the bank with our guide to free museums, parks, and events.",
    image: "https://images.unsplash.com/photo-1498378624751-ead6e3b57fcd?auto=format&fit=crop&w=800&q=80",
    date: "March 5, 2023",
    author: "David Patel",
    category: "Budget Travel"
  },
  {
    id: "5",
    title: "Day Trips from London: Exploring Beyond the City",
    excerpt: "Venture beyond London's borders to discover charming towns, historic sites, and beautiful countryside.",
    image: "https://images.unsplash.com/photo-1494922275507-58dc039ed337?auto=format&fit=crop&w=800&q=80",
    date: "February 20, 2023",
    author: "Emma Thompson",
    category: "Day Trips"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  
  // Find the blog post by id
  const post = blogPostsData.find(post => post.id === id) || blogPostsData[0];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-travel-navy py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">{post.title}</h1>
          <Breadcrumb className="text-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Blog Post Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
                <div className="p-8">
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                    <span className="inline-flex items-center">
                      <User size={16} className="mr-1" />
                      {post.author}
                    </span>
                    <span className="inline-flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center">
                      <Tag size={16} className="mr-1" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center">
                      <MessageSquare size={16} className="mr-1" />
                      {post.comments} Comments
                    </span>
                  </div>
                  
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {post.tags.map(tag => (
                      <Link 
                        key={tag} 
                        to="#" 
                        className="bg-travel-light-gray px-3 py-1 rounded-full text-sm hover:bg-travel-gold hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Social Share */}
                  <div className="flex items-center mt-8 pt-6 border-t border-gray-100">
                    <span className="font-medium mr-4 inline-flex items-center">
                      <Share2 size={18} className="mr-2" />
                      Share this post:
                    </span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full bg-[#3b5998] text-white hover:bg-[#3b5998]/90">
                        <Facebook size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full bg-[#1da1f2] text-white hover:bg-[#1da1f2]/90">
                        <Twitter size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full bg-[#0077b5] text-white hover:bg-[#0077b5]/90">
                        <Linkedin size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Author Box */}
              <div className="bg-white p-8 rounded-lg shadow-md mt-10 flex flex-col md:flex-row gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                  alt={post.author} 
                  className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                  <p className="text-gray-600 mb-4">Emma is the founder of WanderLondon and has been exploring the city for over 15 years. She's passionate about sharing London's hidden gems and cultural treasures with visitors from around the world.</p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-travel-gold hover:text-white">
                      <Facebook size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-travel-gold hover:text-white">
                      <Twitter size={18} />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-travel-gold hover:text-white">
                      <Linkedin size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="#" className="flex items-center text-gray-600 hover:text-travel-gold transition-colors">
                      <span className="mr-2">→</span>
                      Attractions
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center text-gray-600 hover:text-travel-gold transition-colors">
                      <span className="mr-2">→</span>
                      Travel Tips
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center text-gray-600 hover:text-travel-gold transition-colors">
                      <span className="mr-2">→</span>
                      Food & Dining
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center text-gray-600 hover:text-travel-gold transition-colors">
                      <span className="mr-2">→</span>
                      Budget Travel
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center text-gray-600 hover:text-travel-gold transition-colors">
                      <span className="mr-2">→</span>
                      Day Trips
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map((rPost) => (
                    <div key={rPost.id} className="flex gap-3">
                      <img 
                        src={rPost.image} 
                        alt={rPost.title} 
                        className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <Link 
                          to={`/blog/${rPost.id}`} 
                          className="font-medium line-clamp-2 hover:text-travel-gold transition-colors"
                        >
                          {rPost.title}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{rPost.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link 
                      key={tag} 
                      to="#" 
                      className="bg-travel-light-gray px-3 py-1 rounded-full text-sm hover:bg-travel-gold hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                  <Link to="#" className="bg-travel-light-gray px-3 py-1 rounded-full text-sm hover:bg-travel-gold hover:text-white transition-colors">
                    City Tours
                  </Link>
                  <Link to="#" className="bg-travel-light-gray px-3 py-1 rounded-full text-sm hover:bg-travel-gold hover:text-white transition-colors">
                    Museums
                  </Link>
                  <Link to="#" className="bg-travel-light-gray px-3 py-1 rounded-full text-sm hover:bg-travel-gold hover:text-white transition-colors">
                    History
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Explore More" 
            title="Related Articles"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {relatedPosts.map((rPost) => (
              <div key={rPost.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
                <Link to={`/blog/${rPost.id}`} className="block">
                  <img 
                    src={rPost.image} 
                    alt={rPost.title} 
                    className="w-full h-48 object-cover object-center"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={14} className="mr-1" />
                    <span>{rPost.date}</span>
                  </div>
                  <Link to={`/blog/${rPost.id}`} className="block">
                    <h3 className="text-xl font-bold mb-2 hover:text-travel-gold transition-colors">{rPost.title}</h3>
                  </Link>
                  <Link 
                    to={`/blog/${rPost.id}`} 
                    className="text-travel-gold font-medium inline-flex items-center hover:text-travel-navy transition-colors mt-3"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

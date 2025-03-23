
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <h1 className="font-playfair text-9xl font-bold text-travel-navy mb-6">404</h1>
          <h2 className="text-2xl font-medium text-travel-navy mb-4">Page Not Found</h2>
          <p className="text-travel-dark-gray mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button 
            asChild
            className="bg-travel-gold hover:bg-travel-navy text-white"
          >
            <Link to="/">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

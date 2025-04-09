
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const ServiceHero: React.FC = () => {
  return (
    <div className="relative bg-travel-navy py-20">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1520967824495-b529902acfab?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Our Services</h1>
        <Breadcrumb className="text-white">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default ServiceHero;

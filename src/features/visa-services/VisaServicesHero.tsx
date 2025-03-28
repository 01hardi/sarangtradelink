
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const VisaServicesHero: React.FC = () => {
  return (
    <div className="relative bg-travel-navy py-16">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Visa Services</h1>
        <Breadcrumb className="text-white">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Visa Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default VisaServicesHero;

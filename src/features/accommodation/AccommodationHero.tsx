
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const AccommodationHero: React.FC = () => {
  return (
    <div className="bg-travel-navy py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">Accommodation Services</h1>
        <p className="text-white/90 text-lg max-w-3xl">
          Book directly with verified hosts and save on platform fees while enjoying hassle-free stays in premium locations.
        </p>
        <Breadcrumb className="text-white mt-6">
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
              <BreadcrumbPage>Accommodation Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default AccommodationHero;

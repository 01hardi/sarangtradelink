
import React from 'react';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import InquiryForm from '@/components/InquiryForm';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-travel-navy py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Contact Us</h1>
          <Breadcrumb className="text-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Contact Us</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionHeading 
                subtitle="Get In Touch" 
                title="We're Here to Help You"
                className="text-left"
              />
              <p className="text-gray-600 mb-8">
                Have questions about our services or need more information? Our friendly team is ready to assist you with any inquiries you may have about planning your perfect London experience.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-travel-gold/10 p-3 rounded-full mr-4">
                    <MapPin className="text-travel-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                    <p className="text-gray-600">123 Westminster, London, UK SW1A 1AA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-travel-gold/10 p-3 rounded-full mr-4">
                    <Phone className="text-travel-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                    <p className="text-gray-600">+44 7765793462</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-travel-gold/10 p-3 rounded-full mr-4">
                    <Mail className="text-travel-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-600">info@wanderlondon.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-travel-gold/10 p-3 rounded-full mr-4">
                    <Clock className="text-travel-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-600">Saturday: 10AM - 4PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-playfair font-bold mb-6">Send Us a Message</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Find Us" 
            title="Our Location"
          />
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5463608598347!2d-0.12982352341697507!3d51.50073301882345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2sus!4v1621527021012!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="WanderLondon Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

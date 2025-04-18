import React from "react";
import Layout from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-travel-navy py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/london-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            What We Do
          </h1>
          <Breadcrumb className="text-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>What we do</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                subtitle="About Our Services"
                title="Crafting Unforgettable London Experiences"
                className="text-left"
              />
              <p className="text-gray-600 mb-6">
                At WanderLondon, we specialize in creating tailor-made experiences that showcase the 
                best of London and the UK. From expertly guided tours to comprehensive travel solutions, 
                we're here to make your British journey extraordinary.
              </p>
              <p className="text-gray-600 mb-6">
                Our dedicated team combines deep local knowledge with personalized service to deliver 
                experiences that go beyond typical tourist attractions. We handle everything from 
                accommodation and transport to specialized tours and financial services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
                  <h3 className="text-travel-gold text-4xl font-bold mb-2">
                    15K+
                  </h3>
                  <p className="text-travel-navy font-medium">
                    Happy Travelers
                  </p>
                </div>
                <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
                  <h3 className="text-travel-gold text-4xl font-bold mb-2">
                    12+
                  </h3>
                  <p className="text-travel-navy font-medium">
                    Years Experience
                  </p>
                </div>
                <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
                  <h3 className="text-travel-gold text-4xl font-bold mb-2">
                    30+
                  </h3>
                  <p className="text-travel-navy font-medium">
                    Expert Guides
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-team.jpg"
                alt="WanderLondon Experience"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-travel-gold p-4 rounded-lg hidden md:block">
                <div className="flex items-center space-x-2 text-white">
                  <MapPin size={24} />
                  <div>
                    <p className="font-bold">Visit Us</p>
                    <p className="text-sm">Central London Office</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The WanderLondon Difference"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Our guides are passionate Londoners who share authentic insights and 
                hidden gems of the city.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Complete Solutions
              </h3>
              <p className="text-gray-600">
                From visa assistance to accommodation, we handle all aspects of your 
                UK experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tailored Service</h3>
              <p className="text-gray-600">
                Every itinerary is customized to match your interests, schedule, and 
                preferences perfectly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our dedicated team is always available to assist you throughout your 
                journey in the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Team"
            title="Meet Our Travel Experts"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg group">
                <img
                  src="/images/team-1.jpg"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-travel-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Michael Anderson</h3>
              <p className="text-travel-gold">Managing Director</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg group">
                <img
                  src="/images/team-2.jpg"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-travel-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Sophie Taylor</h3>
              <p className="text-travel-gold">Head of Operations</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg group">
                <img
                  src="/images/team-3.jpg"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-travel-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Daniel Lee</h3>
              <p className="text-travel-gold">Travel Experience Manager</p>
            </div>
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg group">
                <img
                  src="/images/team-4.jpg"
                  alt="Team Member"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-travel-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-travel-gold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Rachel Martinez</h3>
              <p className="text-travel-gold">Customer Relations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              subtitle="Get in Touch"
              title="Start Planning Your London Adventure"
            />
            <div className="mt-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

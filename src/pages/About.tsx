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
            About Us
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
                subtitle="Our Story"
                title="We Create Unforgettable Experiences in London"
                className="text-left"
              />
              <p className="text-gray-600 mb-6">
                Founded in 2010, WanderLondon started with a simple mission: to
                help visitors experience London like a local. What began as a
                small tour guide service has grown into a comprehensive travel
                agency specializing in creating personalized London experiences.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced locals knows every corner of this
                magnificent city, from the iconic landmarks to the hidden gems
                that don't make it into standard tour guides. We pride ourselves
                on our attention to detail, personalized service, and commitment
                to making your London visit truly special.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
                  <h3 className="text-travel-gold text-4xl font-bold mb-2">
                    10+
                  </h3>
                  <p className="text-travel-navy font-medium">
                    Years of Experience
                  </p>
                </div>
                <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
                  <h3 className="text-travel-gold text-4xl font-bold mb-2">
                    5000+
                  </h3>
                  <p className="text-travel-navy font-medium">
                    Happy Customers
                  </p>
                </div>
                <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
                  <h3 className="text-travel-gold text-4xl font-bold mb-2">
                    25+
                  </h3>
                  <p className="text-travel-navy font-medium">Expert Guides</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-team.jpg"
                alt="WanderLondon Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-travel-gold p-4 rounded-lg hidden md:block">
                <div className="flex items-center space-x-2 text-white">
                  <MapPin size={24} />
                  <div>
                    <p className="font-bold">Our Location</p>
                    <p className="text-sm">123 Westminster, London</p>
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
            title="Our Values & Mission"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Our guides are London natives who know the city inside out,
                sharing authentic insights and stories.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                We tailor each experience to your preferences, ensuring you get
                exactly what you want from your visit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">
                We believe in experiences that connect you with local culture,
                not just ticking off tourist attractions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl text-travel-gold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Sustainable Tourism
              </h3>
              <p className="text-gray-600">
                We're committed to responsible travel practices that respect
                London's heritage and environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Meet Our Experts"
            title="Our Dedicated Team"
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
              <h3 className="text-xl font-semibold">Emma Thompson</h3>
              <p className="text-travel-gold">Founder & CEO</p>
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
              <h3 className="text-xl font-semibold">James Wilson</h3>
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
              <h3 className="text-xl font-semibold">Sarah Chen</h3>
              <p className="text-travel-gold">Marketing Director</p>
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
              <h3 className="text-xl font-semibold">David Patel</h3>
              <p className="text-travel-gold">Lead Tour Guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              subtitle="Get In Touch"
              title="Have Questions? Contact Us"
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

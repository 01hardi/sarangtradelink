
import React from 'react';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const FAQ = () => {
  // Sample FAQ data
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services does WanderLondon offer?",
          answer: "WanderLondon offers a comprehensive range of services including guided London tours, visa assistance, accommodation booking, airport transfers, and day trips to popular destinations around the UK. We specialize in creating personalized experiences tailored to your interests and preferences."
        },
        {
          question: "How far in advance should I book a tour?",
          answer: "We recommend booking tours at least 2-3 weeks in advance, especially during peak season (May to September). For special requests or large groups, earlier booking (4-6 weeks) is advisable. However, we do try to accommodate last-minute bookings when possible."
        },
        {
          question: "Do you offer private tours?",
          answer: "Yes, we specialize in private tours customized to your interests and schedule. Private tours provide a more personalized experience and flexibility in terms of pace, focus, and itinerary adjustments."
        }
      ]
    },
    {
      category: "Booking & Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For certain packages, we offer a deposit option with the balance due before your arrival."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Our standard cancellation policy allows full refunds for cancellations made at least 7 days before the scheduled service. Cancellations between 3-7 days receive a 50% refund. Cancellations less than 3 days before the service are non-refundable. Special events and peak season bookings may have different terms, which will be clearly stated at the time of booking."
        },
        {
          question: "Do you offer group discounts?",
          answer: "Yes, we offer discounts for groups of 5 or more people. The exact discount depends on the specific tour or service and the size of the group. Please contact us for a customized quote for your group."
        }
      ]
    },
    {
      category: "Tour Information",
      questions: [
        {
          question: "How long do your London tours typically last?",
          answer: "Our standard London tours range from 3 to 8 hours, depending on the itinerary. Half-day tours usually last 3-4 hours, while full-day comprehensive tours can last 7-8 hours. We also offer shorter 2-hour focused tours of specific areas or attractions, as well as multi-day packages."
        },
        {
          question: "Are your tours wheelchair accessible?",
          answer: "Many of our tours are wheelchair accessible, and we strive to accommodate all visitors. However, some historical sites in London have limited accessibility. When booking, please inform us of any accessibility requirements, and we'll create an appropriate itinerary and provide information about the accessibility of specific attractions."
        },
        {
          question: "What languages are your tours available in?",
          answer: "Our tours are primarily conducted in English, but we offer guides who speak several other languages including French, Spanish, German, Italian, Mandarin, and Japanese. Please request your preferred language when booking, and we'll do our best to accommodate your needs."
        }
      ]
    },
    {
      category: "Visa & Travel Information",
      questions: [
        {
          question: "Can you help with UK visa applications?",
          answer: "Yes, we provide comprehensive visa assistance services. Our team can guide you through the application process, help prepare documentation, and provide supporting materials related to your travel arrangements in the UK. Please note that while we offer assistance, the final decision rests with UK immigration authorities."
        },
        {
          question: "What is the best time to visit London?",
          answer: "London is a year-round destination, but each season offers different experiences. Spring (April-June) and autumn (September-October) generally offer pleasant weather and fewer crowds. Summer (July-August) is peak tourist season with longer days but more crowds and higher prices. Winter (November-March) has festive charm around Christmas and New Year, with lower hotel rates but shorter daylight hours and cooler weather."
        },
        {
          question: "Do I need travel insurance for my trip to London?",
          answer: "While not mandatory, we strongly recommend purchasing comprehensive travel insurance that covers medical emergencies, trip cancellation, and personal belongings. This is especially important for international visitors, as medical care in the UK can be expensive for non-residents without proper insurance coverage."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-travel-navy py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/faq-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Frequently Asked Questions</h1>
          <Breadcrumb className="text-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>FAQ</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Search Section */}
      <section className="py-10 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">How Can We Help You?</h2>
              <p className="text-gray-600 mt-2">Search our FAQ for quick answers to common questions</p>
            </div>
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for answers..." 
                className="pr-10 h-12"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Find Answers" 
            title="Frequently Asked Questions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-playfair font-bold mb-6 pb-4 border-b border-gray-100">{category.category}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${index}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-travel-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-8">If you couldn't find the answer to your question in our FAQ, please don't hesitate to contact us directly. Our team is ready to assist you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-travel-gold hover:bg-travel-light-gold text-white transition-colors"
                asChild
              >
                <a href="/contact">Contact Us</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-travel-navy transition-colors"
              >
                <a href="mailto:info@wanderlondon.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

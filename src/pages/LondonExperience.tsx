import React from 'react';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Check } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';

const LondonExperience = () => {
  const tourPackages = [
    {
      id: 1,
      title: "Royal London Tour",
      duration: "4 hours",
      groupSize: "Up to 8 people",
      price: "£79",
      rating: 4.9,
      reviews: 124,
      description: "Explore the royal heritage of London with visits to Buckingham Palace, St. James's Palace, and Kensington Palace. Learn about the British monarchy and witness the Changing of the Guard ceremony (schedule permitting).",
      highlights: [
        "Watch the iconic Changing of the Guard ceremony",
        "Explore the exterior of Buckingham Palace",
        "Visit the Royal Parks and gardens",
        "See St. James's Palace and Kensington Palace",
        "Expert guide with royal history knowledge"
      ],
      image: "/images/royal-london.jpg"
    },
    {
      id: 2,
      title: "Historic London Walking Tour",
      duration: "3 hours",
      groupSize: "Up to 12 people",
      price: "£59",
      rating: 4.8,
      reviews: 98,
      description: "Step back in time as you walk through London's historic streets. Visit the Tower of London, explore the ancient City of London, and discover hidden alleys and courtyards with stories dating back to Roman times.",
      highlights: [
        "Tour the Tower of London with a Yeoman Warder",
        "Walk along the historic Thames riverfront",
        "Visit St. Paul's Cathedral and the Monument",
        "Explore medieval streets and historic pubs",
        "Learn about the Great Fire of London and the Plague"
      ],
      image: "/images/historic-london.jpg"
    },
    {
      id: 3,
      title: "Literary London Experience",
      duration: "5 hours",
      groupSize: "Up to 10 people",
      price: "£85",
      rating: 4.7,
      reviews: 76,
      description: "Discover London through the eyes of famous authors and poets. Visit locations featured in classic novels, see where famous writers lived and worked, and enjoy a traditional afternoon tea in a literary-themed setting.",
      highlights: [
        "Visit Shakespeare's Globe Theatre",
        "Explore Bloomsbury, home to the Bloomsbury Group",
        "See locations from Dickens' novels",
        "Visit the British Library's treasures",
        "Enjoy afternoon tea in a historic literary location"
      ],
      image: "/images/literary-london.jpg"
    },
    {
      id: 4,
      title: "Modern London Architecture Tour",
      duration: "4 hours",
      groupSize: "Up to 8 people",
      price: "£69",
      rating: 4.8,
      reviews: 82,
      description: "Experience London's striking contemporary architecture on this guided tour of the city's most innovative buildings. From the Shard to the Gherkin, discover how modern design has transformed London's skyline.",
      highlights: [
        "Visit The Shard and enjoy panoramic views",
        "Explore the City of London's modern icons",
        "See the innovative designs at King's Cross",
        "Learn about sustainable architecture trends",
        "Photograph London's most distinctive buildings"
      ],
      image: "/images/modern-london.jpg"
    }
  ];

  const attractions = [
    {
      name: "Tower of London",
      description: "Historic castle on the north bank of the River Thames, home to the Crown Jewels.",
      image: "/images/tower-london.jpg"
    },
    {
      name: "Buckingham Palace",
      description: "The London residence and administrative headquarters of the monarch of the United Kingdom.",
      image: "/images/buckingham-palace.jpg"
    },
    {
      name: "British Museum",
      description: "Public institution dedicated to human history, art, and culture with a permanent collection of 8 million works.",
      image: "/images/british-museum.jpg"
    },
    {
      name: "London Eye",
      description: "A giant Ferris wheel on the South Bank offering panoramic views of the city.",
      image: "/images/london-eye.jpg"
    },
    {
      name: "Westminster Abbey",
      description: "Gothic abbey church and UNESCO World Heritage Site, the traditional place of coronation and burial for English monarchs.",
      image: "/images/westminster-abbey.jpg"
    },
    {
      name: "St. Paul's Cathedral",
      description: "Anglican cathedral with a distinctive dome, sitting at the highest point of the City of London.",
      image: "/images/st-pauls.jpg"
    }
  ];

  const cityPasses = [
    {
      name: "London Pass",
      description: "Access to 80+ attractions including the Tower of London, Westminster Abbey, and a Hop-on Hop-off Bus Tour.",
      price: "From £89 (1-day) to £169 (6-day)",
      image: "/images/london-pass.jpg"
    },
    {
      name: "London Explorer Pass",
      description: "Choose 3, 5, or 7 attractions from a list of 20+ popular sites, including Madame Tussauds and the London Eye.",
      price: "From £64 (3 attractions) to £109 (7 attractions)",
      image: "/images/explorer-pass.jpg"
    },
    {
      name: "London Travelcard",
      description: "Unlimited travel on London's public transport network, including the Underground, buses, and trains within London zones.",
      price: "From £13.50 (1-day) to £68.60 (7-day)",
      image: "/images/travel-card.jpg"
    }
  ];

  return (
    <Layout>
      <div className="relative bg-travel-navy py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/london-experience-bg.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">London Experience & City Top Attractions</h1>
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
                <BreadcrumbPage>London Experience</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading 
                subtitle="London Highlights" 
                title="Explore the Best of London with Our Guided Tours"
                className="text-left"
              />
              <p className="text-gray-600 mb-6">
                Experience the best of London with our expertly crafted tours and exclusive access to the city's top attractions. 
                From royal palaces to historic landmarks, hidden gems to cultural hotspots, our knowledgeable guides will bring 
                London's rich history and vibrant present to life.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're a first-time visitor or a returning traveler, our London Experience services are designed to provide 
                unforgettable memories and deeper insights into this magnificent city. Choose from our range of guided tours, 
                skip-the-line tickets, and city passes for a seamless London adventure.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-travel-light-gray p-4 rounded-lg text-center">
                  <h3 className="text-travel-gold text-3xl font-bold mb-2">25+</h3>
                  <p className="text-travel-navy font-medium">Unique Tours</p>
                </div>
                <div className="bg-travel-light-gray p-4 rounded-lg text-center">
                  <h3 className="text-travel-gold text-3xl font-bold mb-2">50+</h3>
                  <p className="text-travel-navy font-medium">Attractions</p>
                </div>
                <div className="bg-travel-light-gray p-4 rounded-lg text-center">
                  <h3 className="text-travel-gold text-3xl font-bold mb-2">100%</h3>
                  <p className="text-travel-navy font-medium">Satisfaction</p>
                </div>
                <div className="bg-travel-light-gray p-4 rounded-lg text-center">
                  <h3 className="text-travel-gold text-3xl font-bold mb-2">15+</h3>
                  <p className="text-travel-navy font-medium">Expert Guides</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/images/london-experience-main.jpg" 
                alt="London Experience" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="Expert-Led Tours" 
            title="London Tours"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {tourPackages.map(tour => (
              <Card key={tour.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-64">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-travel-gold text-white font-medium">Most Popular</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{tour.title}</CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{tour.rating}</span>
                        <span className="text-gray-500 ml-1">({tour.reviews} reviews)</span>
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-1">From</div>
                      <div className="text-2xl font-bold text-travel-navy">{tour.price}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {tour.groupSize}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  <div className="space-y-2">
                    {tour.highlights.slice(0, 3).map((highlight, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-travel-gold mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-travel-gold hover:bg-travel-navy text-white transition-colors">
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button 
              variant="outline" 
              className="border-travel-gold text-travel-gold hover:bg-travel-gold hover:text-white transition-colors"
            >
              View All Tours
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="attractions" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-travel-light-gray">
                <TabsTrigger value="attractions" className="data-[state=active]:bg-travel-gold data-[state=active]:text-white">
                  Major Landmarks
                </TabsTrigger>
                <TabsTrigger value="passes" className="data-[state=active]:bg-travel-gold data-[state=active]:text-white">
                  Skip-the-Line & City Passes
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="attractions">
              <SectionHeading 
                subtitle="Must-See Destinations" 
                title="London's Top Attractions"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {attractions.map((attraction, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={attraction.image} 
                        alt={attraction.name} 
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button className="bg-white text-travel-navy hover:bg-travel-gold hover:text-white transition-colors">
                          Learn More
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2">{attraction.name}</h3>
                      <p className="text-gray-600 text-sm">{attraction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="passes">
              <SectionHeading 
                subtitle="Save Time & Money" 
                title="Skip-the-Line & City Passes"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {cityPasses.map((pass, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img 
                      src={pass.image} 
                      alt={pass.name} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2">{pass.name}</h3>
                      <p className="text-gray-600 mb-4">{pass.description}</p>
                      <div className="text-travel-navy font-semibold mb-4">{pass.price}</div>
                      <Button className="w-full bg-travel-gold hover:bg-travel-navy text-white transition-colors">
                        Purchase Pass
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-travel-navy text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="What Our Clients Say" 
            title="Unforgettable London Experiences"
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Add testimonials content here */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-travel-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading 
              subtitle="Book Your Experience" 
              title="Ready to Explore London?"
              light={true}
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

export default LondonExperience;

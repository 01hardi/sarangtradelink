import { TourPackage } from './TourPackageCard';
import { Attraction } from './AttractionCard';
import { CityPass } from './CityPassCard';

export const tourPackages: TourPackage[] = [
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

export const attractions: Attraction[] = [
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

export const cityPasses: CityPass[] = [
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

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "The Royal London Tour exceeded all my expectations! Our guide was incredibly knowledgeable about the monarchy's history and took us to places I wouldn't have discovered on my own. Watching the Changing of the Guard with expert commentary made it so much more meaningful.",
    author: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "We booked the Historic London Walking Tour and it was the highlight of our trip. Our guide brought London's past to life with fascinating stories. The small group size made it feel personal, and we appreciated having time to take photos and ask questions.",
    author: "David Chen",
    location: "Toronto, Canada",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The Literary London Experience was perfect for a book lover like me! Walking in the footsteps of Dickens and Shakespeare while hearing passages from their works was magical. The afternoon tea in that beautiful library was the perfect ending to a wonderful day.",
    author: "Emma Williams",
    location: "Melbourne, Australia",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=150&h=150"
  }
];


import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Camera, Utensils, Museums, Castle, Ship, Ticket } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Activity {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const activities: Activity[] = [
  {
    id: 1,
    name: "Historical Tours",
    description: "Guided tours of castles, cathedrals and historic sites with expert commentary on British history and heritage.",
    icon: <Castle className="h-10 w-10 text-travel-gold" />
  },
  {
    id: 2,
    name: "Cultural Experiences",
    description: "Visit world-class museums, art galleries and cultural landmarks with skip-the-line access and guided tours.",
    icon: <Museums className="h-10 w-10 text-travel-gold" />
  },
  {
    id: 3,
    name: "Culinary Adventures",
    description: "Food tours, cooking classes and dining experiences showcasing Britain's diverse culinary landscape.",
    icon: <Utensils className="h-10 w-10 text-travel-gold" />
  },
  {
    id: 4,
    name: "Photography Tours",
    description: "Expertly guided tours to the most photogenic locations in the UK, perfect for both amateurs and professionals.",
    icon: <Camera className="h-10 w-10 text-travel-gold" />
  },
  {
    id: 5,
    name: "River Cruises",
    description: "Scenic boat tours along Britain's famous waterways, including the Thames, Avon, and Scottish lochs.",
    icon: <Ship className="h-10 w-10 text-travel-gold" />
  },
  {
    id: 6,
    name: "Entertainment & Shows",
    description: "Premium tickets to West End shows, concerts, sporting events and seasonal performances across the UK.",
    icon: <Ticket className="h-10 w-10 text-travel-gold" />
  }
];

const PopularActivities: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Popular UK Activities"
          subtitle="Unforgettable experiences throughout your journey"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {activities.map((activity) => (
            <Card key={activity.id} className="border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="flex justify-center mb-4">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-center mb-3">{activity.name}</h3>
                <p className="text-gray-600 text-center">{activity.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Button className="w-full bg-travel-navy hover:bg-travel-gold text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularActivities;

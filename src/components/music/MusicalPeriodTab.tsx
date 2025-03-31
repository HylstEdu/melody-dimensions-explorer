
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import GenreCard from "@/components/music/GenreCard";
import TimelineCard from "@/components/music/TimelineCard";
import { LucideIcon } from "lucide-react";

interface MusicalPeriodTabProps {
  value: string;
  title: string;
  description: string;
  timelineEvents: Array<{
    year: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
  }>;
  genres: Array<{
    title: string;
    description: string;
    icon?: React.ReactNode;
    imageSrc?: string;
    linkUrl?: string;
    characteristics?: Array<{title: string, description: string}>;
    artists?: Array<{name: string, description?: string}>;
    timeframe?: string;
  }>;
}

const MusicalPeriodTab = ({ 
  value, 
  title, 
  description, 
  timelineEvents, 
  genres 
}: MusicalPeriodTabProps) => {
  return (
    <TabsContent value={value}>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>
        
        <div className="md:col-span-1">
          <TimelineCard 
            title="Chronologie" 
            description="Événements clés de cette période"
            events={timelineEvents}
          />
        </div>
        
        <div className="md:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            {genres.map((genre, index) => (
              <GenreCard 
                key={index}
                {...genre}
              />
            ))}
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default MusicalPeriodTab;

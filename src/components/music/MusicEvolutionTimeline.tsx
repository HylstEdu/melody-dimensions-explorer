
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import TimelineCard from "@/components/music/TimelineCard";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface MusicEvolutionTimelineProps {
  events: TimelineEvent[];
}

const MusicEvolutionTimeline: React.FC<MusicEvolutionTimelineProps> = ({ events }) => {
  return (
    <Card className="mb-10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          L'évolution de la musique moderne
        </CardTitle>
        <CardDescription>
          Un aperçu chronologique des moments clés qui ont façonné les genres musicaux du 20ème siècle à nos jours
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="flex overflow-x-auto pb-4 pl-4">
          <div className="flex gap-4">
            {events.map((era, index) => (
              <TimelineCard 
                key={index}
                title={era.title}
                description={era.description}
                events={[{ year: era.year, title: era.title, description: era.description }]}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MusicEvolutionTimeline;

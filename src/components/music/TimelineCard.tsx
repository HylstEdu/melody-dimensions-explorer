
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineCardProps {
  title: string;
  description?: string;
  events: TimelineEvent[];
}

const TimelineCard = ({ title, description, events }: TimelineCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {events.map((event, index) => (
            <div key={index} className={`relative ${index < events.length - 1 ? "pb-5" : ""}`}>
              {index < events.length - 1 && (
                <div className="absolute left-[19px] top-7 bottom-0 w-[2px] bg-border" />
              )}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
                  {event.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <div className="font-medium">{event.title}</div>
                    <div className="text-sm text-muted-foreground">{event.year}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineCard;


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface GenreCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
  linkUrl?: string;
  linkText?: string;
  characteristics?: Array<{title: string, description: string}>;
  artists?: Array<{name: string, description?: string}>;
  timeframe?: string;
}

const GenreCard = ({ 
  title, 
  description, 
  icon,
  imageSrc,
  linkUrl = "", 
  linkText = "En savoir plus", 
  characteristics = [],
  artists = [],
  timeframe
}: GenreCardProps) => {
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon && <div className="text-primary">{icon}</div>}
          <div>
            <CardTitle>{title}</CardTitle>
            {timeframe && <span className="text-xs text-muted-foreground">{timeframe}</span>}
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        {imageSrc && (
          <div className="relative h-40 w-full overflow-hidden rounded-lg mb-4">
            <img 
              src={imageSrc} 
              alt={`Illustration du genre ${title}`} 
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {characteristics.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Caractéristiques</h4>
            <ul className="space-y-1">
              {characteristics.map((char, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{char.title}:</span> {char.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {artists.length > 0 && (
          <div>
            <h4 className="text-sm font-medium mb-2">Artistes représentatifs</h4>
            <ul className="space-y-1">
              {artists.map((artist, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{artist.name}</span>
                  {artist.description && <span className="text-xs text-muted-foreground"> — {artist.description}</span>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      {linkUrl && (
        <CardFooter>
          <Button asChild variant="outline" size="sm">
            <Link to={linkUrl}>{linkText}</Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default GenreCard;

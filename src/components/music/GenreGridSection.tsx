
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Calendar, User, Sparkles } from "lucide-react";

interface Genre {
  name: string;
  description: string;
  timeframe: string;
  artists: string[];
  keyCharacteristics: string[];
  instruments?: string[];
  influencedBy?: string[];
  subgenres?: string[];
}

interface GenreGridSectionProps {
  title: string;
  description?: string;
  genres: Genre[];
  columns?: 1 | 2 | 3 | 4;
}

const GenreGridSection = ({
  title,
  description,
  genres,
  columns = 3
}: GenreGridSectionProps) => {
  const columnClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {description && <p className="text-muted-foreground mt-2">{description}</p>}
      </div>

      <div className={`grid ${columnClass} gap-6`}>
        {genres.map((genre, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5 text-primary" />
                {genre.name}
              </CardTitle>
              <CardDescription>{genre.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{genre.timeframe}</span>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Artistes représentatifs</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {genre.artists.map((artist, idx) => (
                    <Badge key={idx} variant="outline">{artist}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Caractéristiques clés</span>
                </div>
                <ul className="text-sm space-y-1 list-disc pl-5">
                  {genre.keyCharacteristics.map((char, idx) => (
                    <li key={idx}>{char}</li>
                  ))}
                </ul>
              </div>
              
              {genre.instruments && (
                <div className="text-sm">
                  <p className="font-medium">Instruments typiques:</p>
                  <p className="text-muted-foreground">{genre.instruments.join(", ")}</p>
                </div>
              )}
              
              {genre.subgenres && genre.subgenres.length > 0 && (
                <div className="text-sm">
                  <p className="font-medium">Sous-genres notables:</p>
                  <p className="text-muted-foreground">{genre.subgenres.join(", ")}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GenreGridSection;

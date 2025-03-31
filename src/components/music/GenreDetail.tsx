
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftIcon, LucideIcon } from "lucide-react";

interface Artist {
  name: string;
  description?: string;
  image?: string;
}

interface Characteristic {
  title: string;
  description: string;
}

interface Instrument {
  name: string;
  description?: string;
  image?: string;
}

interface GenreDetailProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  timeframe?: string;
  characteristics?: Characteristic[];
  artists?: Artist[];
  instruments?: Instrument[];
  subgenres?: { name: string; description: string }[];
  onBack: () => void;
}

const GenreDetail = ({
  title,
  description,
  icon,
  image,
  timeframe,
  characteristics = [],
  artists = [],
  instruments = [],
  subgenres = [],
  onBack
}: GenreDetailProps) => {
  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack} className="mb-4 -ml-2">
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Retour aux genres
      </Button>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                {icon && <div className="h-8 w-8 flex items-center justify-center">{icon}</div>}
                <div>
                  <CardTitle className="text-2xl">{title}</CardTitle>
                  {timeframe && <CardDescription>{timeframe}</CardDescription>}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{description}</p>
              
              {characteristics.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold">Caractéristiques principales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {characteristics.map((char, idx) => (
                      <div key={idx} className="border rounded-md p-3">
                        <h4 className="font-medium">{char.title}</h4>
                        <p className="text-sm text-muted-foreground">{char.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          {subgenres.length > 0 && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Sous-genres et variantes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {subgenres.map((subgenre, idx) => (
                    <div key={idx} className="border rounded-md p-3">
                      <h4 className="font-medium">{subgenre.name}</h4>
                      <p className="text-sm text-muted-foreground">{subgenre.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="md:w-1/3 space-y-6">
          {image && (
            <Card>
              <CardContent className="p-0 overflow-hidden">
                <img 
                  src={image}
                  alt={title} 
                  className="w-full h-auto object-cover aspect-video" 
                />
              </CardContent>
            </Card>
          )}
          
          {artists.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Artistes notables</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {artists.map((artist, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {artist.image && (
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div>
                      <h4 className="font-medium">{artist.name}</h4>
                      {artist.description && <p className="text-sm text-muted-foreground">{artist.description}</p>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
          
          {instruments.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instruments typiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {instruments.map((instrument, idx) => (
                    <Badge key={idx} variant="outline">{instrument.name}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenreDetail;

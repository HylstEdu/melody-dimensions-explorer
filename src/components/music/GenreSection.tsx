
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Music, Headphones, Clock, User, Album, ListMusic, PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";

export interface Artist {
  name: string;
  description?: string;
  image?: string;
  years?: string;
}

export interface Subgenre {
  name: string;
  description: string;
  era?: string;
}

export interface Album {
  title: string;
  artist: string;
  year: string;
  image?: string;
  link?: string;
}

export interface GenreProps {
  name: string;
  description: string;
  history: string;
  era: string;
  keyArtists: Artist[];
  characteristics: string[];
  subgenres: Subgenre[];
  keyAlbums?: Album[];
  influences?: string[];
  influencedBy?: string[];
  image?: string;
  color?: string;
  slug?: string;
}

const GenreSection: React.FC<GenreProps> = ({
  name,
  description,
  history,
  era,
  keyArtists,
  characteristics,
  subgenres,
  keyAlbums = [],
  influences = [],
  influencedBy = [],
  image,
  color = "bg-primary/10",
  slug
}) => {
  return (
    <section className="py-6" id={slug}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-3xl font-bold">{name}</h2>
            <Badge variant="outline" className="text-sm">{era}</Badge>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">{description}</p>
          
          <div className={`${color} p-6 rounded-lg mb-6`}>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Histoire et développement
            </h3>
            <p className="leading-relaxed">{history}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <ListMusic className="h-5 w-5" />
              Caractéristiques musicales
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {characteristics.map((char, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {(influences.length > 0 || influencedBy.length > 0) && (
            <div className="flex flex-wrap gap-6 mb-6">
              {influencedBy.length > 0 && (
                <div className="flex-1 min-w-[200px]">
                  <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Influencé par</h4>
                  <ul className="space-y-1">
                    {influencedBy.map((genre, index) => (
                      <li key={index} className="text-sm">
                        <Link to={`#${genre.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                          {genre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {influences.length > 0 && (
                <div className="flex-1 min-w-[200px]">
                  <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-2">A influencé</h4>
                  <ul className="space-y-1">
                    {influences.map((genre, index) => (
                      <li key={index} className="text-sm">
                        <Link to={`#${genre.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">
                          {genre}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <PlusSquare className="h-5 w-5" />
              Sous-genres
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subgenres.map((subgenre, index) => (
                <Card key={index} className="border bg-card/50">
                  <CardHeader className="py-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{subgenre.name}</CardTitle>
                      {subgenre.era && <Badge variant="outline" className="text-xs">{subgenre.era}</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="py-2">
                    <p className="text-sm text-muted-foreground">{subgenre.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3">
          {image && (
            <Card className="mb-6 overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={image} 
                  alt={`Illustration du genre ${name}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          )}
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                Artistes représentatifs
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {keyArtists.map((artist, index) => (
                  <div key={index} className="flex items-center gap-3">
                    {artist.image ? (
                      <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src={artist.image} alt={artist.name} className="h-full w-full object-cover" />
                      </div>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{artist.name}</p>
                      {artist.years && <p className="text-xs text-muted-foreground">{artist.years}</p>}
                      {artist.description && <p className="text-xs text-muted-foreground mt-1">{artist.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {keyAlbums.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Album className="h-5 w-5" />
                  Albums essentiels
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {keyAlbums.map((album, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {album.image ? (
                        <div className="h-12 w-12 overflow-hidden flex-shrink-0">
                          <img src={album.image} alt={album.title} className="h-full w-full object-cover" />
                        </div>
                      ) : (
                        <div className="h-12 w-12 bg-muted flex items-center justify-center flex-shrink-0">
                          <Album className="h-5 w-5 text-muted-foreground" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium">{album.title}</p>
                        <p className="text-xs text-muted-foreground">{album.artist}, {album.year}</p>
                        {album.link && (
                          <Button variant="link" size="sm" asChild className="px-0 py-0 h-auto text-xs">
                            <a href={album.link} target="_blank" rel="noopener noreferrer">Écouter</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      <Separator className="my-10" />
    </section>
  );
};

export default GenreSection;

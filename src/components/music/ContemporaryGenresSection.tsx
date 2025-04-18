
import React from 'react';
import GenreGridSection from "@/components/music/GenreGridSection";

interface Genre {
  name: string;
  description: string;
  timeframe: string;
  artists: string[];
  keyCharacteristics: string[];
}

interface ContemporaryGenresSectionProps {
  genres: Genre[];
}

const ContemporaryGenresSection: React.FC<ContemporaryGenresSectionProps> = ({ genres }) => {
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold mb-2">Genres contemporains et émergents</h2>
      <p className="text-muted-foreground mb-6">
        Découvrez les styles musicaux qui définissent notre époque, fruits d'innovations technologiques et de croisements culturels
      </p>
      
      <GenreGridSection 
        title="Tendances musicales actuelles" 
        genres={genres} 
        columns={3}
      />
    </div>
  );
};

export default ContemporaryGenresSection;


import React from 'react';
import GenreCard from "@/components/music/GenreCard";

interface FusionGenre {
  title: string;
  description: string;
  icon: React.ReactNode;
  characteristics: Array<{title: string, description: string}>;
  artists: Array<{name: string, description: string}>;
  timeframe: string;
  imageSrc: string;
}

interface FusionGenresSectionProps {
  genres: FusionGenre[];
}

const FusionGenresSection: React.FC<FusionGenresSectionProps> = ({ genres }) => {
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold mb-2">Les fusions de genres</h2>
      <p className="text-muted-foreground mb-6">
        Des rencontres musicales qui transcendent les frontières traditionnelles et créent de nouvelles expressions artistiques
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {genres.map((genre, idx) => (
          <GenreCard 
            key={idx}
            title={genre.title}
            description={genre.description}
            icon={genre.icon}
            characteristics={genre.characteristics}
            artists={genre.artists}
            timeframe={genre.timeframe}
            imageSrc={genre.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default FusionGenresSection;


import React from "react";

import { genreCategories } from "@/data/music/genreCategories";
import { mainGenres } from "@/data/music/mainGenres";

import GenreNavigation from "@/components/music/GenreNavigation";
import GenreSection from "@/components/music/GenreSection";

interface GenresPrincipauxSectionProps {
  activeGenre: string;
  setActiveGenre: (id: string) => void;
}

const GenresPrincipauxSection: React.FC<GenresPrincipauxSectionProps> = ({
  activeGenre,
  setActiveGenre,
}) => {
  return (
    <div className="space-y-20">
      <GenreNavigation
        categories={genreCategories}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      {mainGenres.map((genre) => (
        <GenreSection key={genre.slug} {...genre} />
      ))}
    </div>
  );
};

export default GenresPrincipauxSection;


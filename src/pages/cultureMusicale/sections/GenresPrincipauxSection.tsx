
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
  // On va scroller à l'ancre quand on change de genre
  const handleGenreChange = (id: string) => {
    setActiveGenre(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-20">
      <GenreNavigation
        categories={genreCategories}
        activeGenre={activeGenre}
        setActiveGenre={handleGenreChange}
      />

      {mainGenres.map((genre) => (
        <GenreSection key={genre.slug} {...genre} />
      ))}
    </div>
  );
};

export default GenresPrincipauxSection;

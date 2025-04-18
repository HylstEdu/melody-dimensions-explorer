
import React, { useState } from 'react';
import { 
  genreCategories, 
  musicInfluenceData, 
  musicEvolution, 
  contemporaryGenres, 
  fusionGenres, 
  mainGenres 
} from '@/data/musicGenresData';

import MusicHeader from '@/components/music/MusicHeader';
import GenreNavigation from '@/components/music/GenreNavigation';
import MusicEvolutionTimeline from '@/components/music/MusicEvolutionTimeline';
import GenreSection from '@/components/music/GenreSection';
import ContemporaryGenresSection from '@/components/music/ContemporaryGenresSection';
import FusionGenresSection from '@/components/music/FusionGenresSection';
import MusicalPeriodsSection from '@/components/music/MusicalPeriodsSection';
import MusicInfluenceChartSection from '@/components/music/MusicInfluenceChartSection';
import EducationalSection from '@/components/music/EducationalSection';

const CultureMusicale = () => {
  const [activeGenre, setActiveGenre] = useState("rock");

  return (
    <div className="container py-10">
      <MusicHeader 
        title="Encyclopédie des Genres Musicaux"
        description="Explorez la riche diversité des genres musicaux à travers l'histoire, les caractéristiques, et les artistes emblématiques qui ont façonné notre patrimoine sonore mondial"
      />
      
      <GenreNavigation 
        categories={genreCategories}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      
      <MusicEvolutionTimeline events={musicEvolution} />
      
      <div className="mt-10 space-y-8">
        <h2 className="text-2xl font-bold mb-6">Explorez les principaux genres musicaux</h2>
        
        {mainGenres.map((genre) => (
          <GenreSection key={genre.name} {...genre} />
        ))}
      </div>
      
      <ContemporaryGenresSection genres={contemporaryGenres} />
      
      <FusionGenresSection genres={fusionGenres} />
      
      <MusicalPeriodsSection />
      
      <MusicInfluenceChartSection genres={musicInfluenceData} />
      
      <EducationalSection />
    </div>
  );
};

export default CultureMusicale;

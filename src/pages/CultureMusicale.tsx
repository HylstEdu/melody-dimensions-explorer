
import React, { useState } from 'react';

import { genreCategories } from '@/data/music/genreCategories';
import { musicInfluenceData } from '@/data/music/musicInfluenceData';
import { musicEvolution } from '@/data/music/musicEvolution';
import { contemporaryGenres } from '@/data/music/contemporaryGenres';
import { fusionGenres } from '@/data/music/fusionGenres';
import { mainGenres } from '@/data/music/mainGenres';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import MusicHeader from '@/components/music/MusicHeader';
import GenreNavigation from '@/components/music/GenreNavigation';
import MusicEvolutionTimeline from '@/components/music/MusicEvolutionTimeline';
import GenreSection from '@/components/music/GenreSection';
import ContemporaryGenresSection from '@/components/music/ContemporaryGenresSection';
import FusionGenresSection from '@/components/music/FusionGenresSection';
import MusicalPeriodsSection from '@/components/music/MusicalPeriodsSection';
import MusicInfluenceChartSection from '@/components/music/MusicInfluenceChartSection';
import GenreGridSection from '@/components/music/GenreGridSection';

const CultureMusicale = () => {
  const [activeGenre, setActiveGenre] = useState("rock");

  return (
    <div className="container py-10 space-y-12">
      <MusicHeader 
        title="Encyclopédie des Genres Musicaux"
        description="Explorez la riche diversité des genres musicaux à travers l'histoire, les caractéristiques, et les artistes emblématiques qui ont façonné notre patrimoine sonore mondial"
      />
      
      <Tabs defaultValue="genres" className="w-full">
        <TabsList className="w-full justify-start mb-8">
          <TabsTrigger value="genres">Genres Principaux</TabsTrigger>
          <TabsTrigger value="evolution">Évolution</TabsTrigger>
          <TabsTrigger value="contemporain">Contemporain</TabsTrigger>
          <TabsTrigger value="fusion">Fusion</TabsTrigger>
          <TabsTrigger value="periodes">Périodes</TabsTrigger>
        </TabsList>

        <TabsContent value="genres" className="space-y-8">
          <GenreNavigation 
            categories={genreCategories}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          
          {mainGenres.map((genre) => (
            <GenreSection key={genre.slug} {...genre} />
          ))}
        </TabsContent>

        <TabsContent value="evolution">
          <div className="space-y-12">
            <MusicEvolutionTimeline events={musicEvolution} />
            <MusicInfluenceChartSection genres={musicInfluenceData} />
          </div>
        </TabsContent>

        <TabsContent value="contemporain">
          <ContemporaryGenresSection genres={contemporaryGenres} />
        </TabsContent>

        <TabsContent value="fusion">
          <FusionGenresSection genres={fusionGenres} />
        </TabsContent>

        <TabsContent value="periodes">
          <MusicalPeriodsSection />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CultureMusicale;

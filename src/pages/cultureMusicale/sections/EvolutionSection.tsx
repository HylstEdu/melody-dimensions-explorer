import React from "react";

import { musicEvolution } from "@/data/music/musicEvolution";
import { musicInfluenceData } from "@/data/music/musicInfluenceData";

import MusicEvolutionTimeline from "@/components/music/MusicEvolutionTimeline";
import MusicInfluenceChartSection from "@/components/music/MusicInfluenceChartSection";

const EvolutionSection: React.FC = () => {
  return (
    <div className="space-y-12">
      <MusicEvolutionTimeline events={musicEvolution} />
      <MusicInfluenceChartSection genres={musicInfluenceData} />
    </div>
  );
};

export default EvolutionSection;

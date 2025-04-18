
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart } from "lucide-react";
import MusicInfluenceChart from "@/components/music/MusicInfluenceChart";

interface Genre {
  id: string;
  name: string;
  description: string;
  color: string;
  influences?: string[];
}

interface MusicInfluenceChartSectionProps {
  genres: Genre[];
}

const MusicInfluenceChartSection: React.FC<MusicInfluenceChartSectionProps> = ({ genres }) => {
  return (
    <div className="mt-14 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            Influences et connexions entre les genres musicaux
          </CardTitle>
          <CardDescription>
            Visualisation des relations et de l'évolution entre les principaux genres et sous-genres
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[500px]">
          <MusicInfluenceChart 
            title="Carte des influences musicales"
            description="Interconnexions entre les différents genres musicaux à travers l'histoire"
            genres={genres}
          />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Cette visualisation illustre comment les genres musicaux s'influencent mutuellement à travers le temps, 
            créant un riche écosystème sonore en constante évolution.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MusicInfluenceChartSection;

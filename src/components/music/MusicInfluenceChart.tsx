
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Genre {
  id: string;
  name: string;
  description: string;
  color: string;
  influences?: string[];
}

interface MusicInfluenceChartProps {
  title: string;
  description?: string;
  genres: Genre[];
}

const MusicInfluenceChart = ({ title, description, genres }: MusicInfluenceChartProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="relative h-[400px] w-full">
          {genres.map((genre, index) => {
            // Calculate position in a circular pattern
            const angle = (2 * Math.PI * index) / genres.length;
            const radius = 150;
            const centerX = 200;
            const centerY = 200;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            return (
              <React.Fragment key={genre.id}>
                {/* Draw connections to influences */}
                {genre.influences && genre.influences.map(influenceId => {
                  const influenceGenre = genres.find(g => g.id === influenceId);
                  if (!influenceGenre) return null;
                  
                  const influenceIndex = genres.indexOf(influenceGenre);
                  const influenceAngle = (2 * Math.PI * influenceIndex) / genres.length;
                  const influenceX = centerX + radius * Math.cos(influenceAngle);
                  const influenceY = centerY + radius * Math.sin(influenceAngle);
                  
                  return (
                    <svg key={`${genre.id}-${influenceId}`} className="absolute top-0 left-0 w-full h-full pointer-events-none">
                      <path
                        d={`M ${x} ${y} C ${(x + influenceX) / 2} ${(y + influenceY) / 2 - 30}, ${(x + influenceX) / 2} ${(y + influenceY) / 2 - 30}, ${influenceX} ${influenceY}`}
                        stroke={genre.color}
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="4 2"
                      />
                    </svg>
                  );
                })}

                {/* Genre bubble */}
                <div 
                  className="absolute p-3 rounded-full border shadow-sm flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 hover-scale"
                  style={{
                    top: `${y}px`,
                    left: `${x}px`,
                    backgroundColor: `${genre.color}20`,
                    borderColor: genre.color,
                    width: '120px',
                    height: '120px'
                  }}
                >
                  <div className="text-center">
                    <div className="font-medium" style={{ color: genre.color }}>{genre.name}</div>
                    <div className="text-xs text-muted-foreground">{genre.description}</div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MusicInfluenceChart;


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";

interface FrequencySpectrumCardProps {
  title: string;
  description?: string;
  data: Array<{
    name: string;
    value: number;
    fill?: string;
  }>;
}

const FrequencySpectrumCard = ({ 
  title,
  description,
  data 
}: FrequencySpectrumCardProps) => {
  const chartConfig = {
    spectrum: {
      label: "Amplitude",
      color: "#8B5CF6"
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="h-52">
          <ChartContainer config={chartConfig}>
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                tickLine={false}
                axisLine={false}
                fontSize={12}
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                fontSize={12}
                width={30}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar 
                dataKey="value" 
                fill="#8B5CF6" 
                radius={[4, 4, 0, 0]}
                fillOpacity={0.9}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FrequencySpectrumCard;

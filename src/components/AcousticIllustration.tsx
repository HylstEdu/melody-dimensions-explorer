
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AcousticIllustrationProps {
  title: string;
  description?: string;
  imageSrc: string;
  caption?: string;
}

const AcousticIllustration = ({
  title,
  description,
  imageSrc,
  caption
}: AcousticIllustrationProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-0">
        <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-auto object-contain"
          />
        </div>
        {caption && (
          <div className="p-4 text-sm text-muted-foreground italic text-center">
            {caption}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AcousticIllustration;

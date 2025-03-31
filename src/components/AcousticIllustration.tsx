
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface AcousticIllustrationProps {
  title: string;
  description?: string;
  imageSrc: string;
  caption?: string;
  aspectRatio?: "auto" | "square" | "video" | "wide";
}

const AcousticIllustration = ({
  title,
  description,
  imageSrc,
  caption,
  aspectRatio = "auto"
}: AcousticIllustrationProps) => {
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "video": return "aspect-video";
      case "wide": return "aspect-[16/9]";
      default: return "aspect-auto";
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="p-0">
        <div className={`${getAspectRatioClass()} bg-muted flex items-center justify-center overflow-hidden p-4`}>
          <img 
            src={imageSrc} 
            alt={title}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        {caption && (
          <div className="p-6 text-sm text-muted-foreground italic text-center">
            {caption}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AcousticIllustration;

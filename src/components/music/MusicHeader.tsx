
import React from 'react';

interface MusicHeaderProps {
  title: string;
  description?: string;
}

const MusicHeader: React.FC<MusicHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && (
        <p className="text-lg text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default MusicHeader;

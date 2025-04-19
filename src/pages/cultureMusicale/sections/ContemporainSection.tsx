
import React from 'react';

import { contemporaryGenres } from '@/data/music/contemporaryGenres';

import ContemporaryGenresSection from '@/components/music/ContemporaryGenresSection';

const ContemporainSection: React.FC = () => {
  return <ContemporaryGenresSection genres={contemporaryGenres} />;
};

export default ContemporainSection;

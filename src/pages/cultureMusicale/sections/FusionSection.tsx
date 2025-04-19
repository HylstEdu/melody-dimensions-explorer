
import React from 'react';

import { fusionGenres } from '@/data/music/fusionGenres';

import FusionGenresSection from '@/components/music/FusionGenresSection';

const FusionSection: React.FC = () => {
  return <FusionGenresSection genres={fusionGenres} />;
};

export default FusionSection;

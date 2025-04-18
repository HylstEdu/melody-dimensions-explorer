
export interface Artist {
  name: string;
  description: string;
  years: string;
}

export interface Album {
  title: string;
  artist: string;
  year: string;
  link: string;
}

export interface Subgenre {
  name: string;
  description: string;
  era: string;
}

export interface MusicGenre {
  name: string;
  description: string;
  history: string;
  era: string;
  characteristics: string[];
  keyArtists: Artist[];
  subgenres: Subgenre[];
  keyAlbums: Album[];
  influences: string[];
  influencedBy: string[];
  image: string;
  color: string;
  slug: string;
}

export interface GenreCharacteristic {
  title: string;
  description: string;
}

export interface FusionGenre {
  title: string;
  description: string;
  icon: JSX.Element;
  characteristics: GenreCharacteristic[];
  artists: { name: string; description: string }[];
  timeframe: string;
  imageSrc: string;
}

export interface ContemporaryGenre {
  name: string;
  description: string;
  timeframe: string;
  artists: string[];
  keyCharacteristics: string[];
}

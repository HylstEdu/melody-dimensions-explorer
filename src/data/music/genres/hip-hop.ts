
import { MusicGenre } from "@/types/music";

export const hipHopGenre: MusicGenre = {
  name: "Hip-Hop",
  description: "Culture et mouvement musical né dans le Bronx à New York dans les années 1970, caractérisé par la rime, le flow et les beats sampleés.",
  history: "Le hip-hop est né dans les quartiers du Bronx à New York au début des années 1970, comme une forme d'expression culturelle de la jeunesse afro-américaine et latino-américaine. DJ Kool Herc, Afrika Bambaataa et Grandmaster Flash sont souvent cités comme les pionniers qui ont posé les bases du genre. Dans les années 1980-90, le hip-hop s'est diversifié et commercialisé avec l'émergence de différentes écoles (East Coast, West Coast, Dirty South). Aujourd'hui, c'est l'un des genres musicaux les plus influents au monde, ayant évolué en de nombreux sous-styles et fusionné avec d'autres genres.",
  era: "1970s - présent",
  characteristics: [
    "MCing (rap)",
    "DJing (manipulation de disques)",
    "Beats rythmiques et samples",
    "Expression personnelle et sociale",
    "Éléments de compétition (battles)"
  ],
  keyArtists: [
    {
      name: "Tupac Shakur",
      description: "Icône du rap West Coast, poète et activiste",
      years: "1991-1996"
    },
    {
      name: "The Notorious B.I.G.",
      description: "Figure majeure du rap East Coast",
      years: "1992-1997"
    },
    {
      name: "Jay-Z",
      description: "Rappeur, homme d'affaires et producteur influent",
      years: "1996-présent"
    },
    {
      name: "Kendrick Lamar",
      description: "Artiste novateur mêlant complexité lyrique et conscience sociale",
      years: "2004-présent"
    }
  ],
  subgenres: [
    {
      name: "Trap",
      description: "Caractérisé par des hi-hats rapides, des basses profondes et des sujets souvent liés à la vie de rue.",
      era: "2000s - présent"
    },
    {
      name: "Conscious Rap",
      description: "Axé sur la conscience sociale et politique, avec des paroles réfléchies et engagées.",
      era: "1980s - présent"
    },
    {
      name: "Drill",
      description: "Style sombre et agressif né à Chicago, avec des instrumentales minimalistes et des paroles directes.",
      era: "2010s - présent"
    },
    {
      name: "Alternative Hip-Hop",
      description: "Fusion avec d'autres genres comme le rock, le jazz ou l'électronique, souvent avec des thèmes moins conventionnels.",
      era: "1990s - présent"
    }
  ],
  keyAlbums: [
    {
      title: "Illmatic",
      artist: "Nas",
      year: "1994",
      link: "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1"
    },
    {
      title: "To Pimp a Butterfly",
      artist: "Kendrick Lamar",
      year: "2015",
      link: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP"
    }
  ],
  influences: ["R&B contemporain", "Pop urbaine", "Musique électronique"],
  influencedBy: ["Funk", "Soul", "Poésie parlée", "Disco"],
  image: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1",
  color: "bg-red-500/10",
  slug: "hip-hop"
};

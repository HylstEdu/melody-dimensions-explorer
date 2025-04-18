
import { MusicGenre } from "@/types/music";

export const electroniqueGenre: MusicGenre = {
  name: "Électronique",
  description: "Genre musical utilisant principalement des instruments électroniques et technologies de production numérique pour créer des sons et compositions.",
  history: "La musique électronique a émergé dans les années 1960-1970 avec le développement des synthétiseurs. Des pionniers comme Kraftwerk et des studios comme ceux de la BBC Radiophonic Workshop ont ouvert la voie. Le genre a explosé dans les années 1980 avec la démocratisation des équipements électroniques, puis s'est diversifié en d'innombrables sous-genres dans les années 1990-2000, de la techno à l'ambient en passant par la house et la drum and bass. L'ère numérique a facilité la production, permettant une évolution constante du genre.",
  era: "1970s - présent",
  characteristics: [
    "Sons générés électroniquement",
    "Utilisation de séquenceurs et échantillonneurs",
    "Importance du rythme et de la répétition",
    "Innovation sonore et expérimentation",
    "Souvent orientée vers la danse"
  ],
  keyArtists: [
    {
      name: "Kraftwerk",
      description: "Groupe allemand pionnier de la musique électronique",
      years: "1970-présent"
    },
    {
      name: "Daft Punk",
      description: "Duo français emblématique de la French Touch",
      years: "1993-2021"
    },
    {
      name: "Aphex Twin",
      description: "Artiste britannique innovant, figure de l'IDM",
      years: "1985-présent"
    },
    {
      name: "Jean-Michel Jarre",
      description: "Compositeur français pionnier, célèbre pour ses spectacles",
      years: "1971-présent"
    }
  ],
  subgenres: [
    {
      name: "House",
      description: "Style développé à Chicago, caractérisé par un tempo entre 120-130 BPM et une forte influence disco.",
      era: "1980s - présent"
    },
    {
      name: "Techno",
      description: "Développée à Detroit, caractérisée par des percussions mécaniques et une approche futuriste.",
      era: "1980s - présent"
    },
    {
      name: "Ambient",
      description: "Musique atmosphérique qui privilégie la texture sonore et l'atmosphère plutôt que la mélodie ou le rythme.",
      era: "1970s - présent"
    },
    {
      name: "Drum and Bass",
      description: "Caractérisée par des tempos rapides (160-180 BPM) et des lignes de basse profondes avec des breakbeats complexes.",
      era: "1990s - présent"
    }
  ],
  keyAlbums: [
    {
      title: "Computer World",
      artist: "Kraftwerk",
      year: "1981",
      link: "https://open.spotify.com/album/39CfGGjJBYxToBvUphvWvC"
    },
    {
      title: "Discovery",
      artist: "Daft Punk",
      year: "2001",
      link: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc"
    }
  ],
  influences: ["Trap", "Pop contemporaine", "Musique expérimentale"],
  influencedBy: ["Musique concrète", "Disco", "Synthpop"],
  image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85",
  color: "bg-purple-500/10",
  slug: "electronique"
};

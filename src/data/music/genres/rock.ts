
import { MusicGenre } from "@/types/music";

export const rockGenre: MusicGenre = {
  name: "Rock",
  description: "Genre musical caractérisé par des instruments électriques et un rythme marqué, ayant émergé dans les années 1950 aux États-Unis.",
  history: "Le rock trouve ses racines dans le rock 'n' roll des années 1950, mêlant influences du rhythm and blues et de la country. À partir des Beatles et des Rolling Stones dans les années 1960, il s'est diversifié en d'innombrables sous-genres. Des mouvements comme le psychédélique des années 60, le hard rock des années 70, le punk, le metal, le grunge et l'alternatif ont façonné son évolution jusqu'à aujourd'hui.",
  era: "1950s - présent",
  characteristics: [
    "Instruments électriques (guitare électrique, basse, batterie)",
    "Structures couplet-refrain",
    "Accentuation rythmique sur les temps 2 et 4",
    "Utilisation fréquente de la distorsion",
    "Performance énergique"
  ],
  keyArtists: [
    {
      name: "The Beatles",
      description: "Groupe britannique pionnier qui a révolutionné le genre",
      years: "1960-1970"
    },
    {
      name: "Led Zeppelin",
      description: "Précurseurs du hard rock et heavy metal",
      years: "1968-1980"
    },
    {
      name: "Nirvana",
      description: "Figure de proue du mouvement grunge",
      years: "1987-1994"
    },
    {
      name: "Queen",
      description: "Innovateurs combinant rock, opéra et divers styles",
      years: "1970-1991"
    }
  ],
  subgenres: [
    {
      name: "Hard Rock",
      description: "Version plus lourde et agressive du rock, caractérisée par des guitares distordues et un son puissant.",
      era: "1970s - présent"
    },
    {
      name: "Punk Rock",
      description: "Réaction minimaliste contre l'excès du rock progressif, marqué par sa simplicité, sa vitesse et son attitude DIY.",
      era: "1970s - présent"
    },
    {
      name: "Grunge",
      description: "Fusion du punk et du heavy metal née à Seattle, caractérisée par des guitares déformées et des paroles introspectives.",
      era: "1980s - 1990s"
    },
    {
      name: "Rock Progressif",
      description: "Approche expérimentale avec structures complexes, longues compositions et virtuosité instrumentale.",
      era: "1960s - présent"
    }
  ],
  keyAlbums: [
    {
      title: "Dark Side of the Moon",
      artist: "Pink Floyd",
      year: "1973",
      link: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv"
    },
    {
      title: "Nevermind",
      artist: "Nirvana",
      year: "1991",
      link: "https://open.spotify.com/album/2guirTSEqLizK7j9i1MTTZ"
    }
  ],
  influences: ["Punk", "Metal", "Indie Rock"],
  influencedBy: ["Blues", "Country", "R&B"],
  image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
  color: "bg-blue-500/10",
  slug: "rock"
};

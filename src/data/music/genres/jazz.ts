
import { MusicGenre } from "@/types/music";

export const jazzGenre: MusicGenre = {
  name: "Jazz",
  description: "Genre musical né aux États-Unis au début du XXe siècle, caractérisé par l'improvisation, le swing et une expression individuelle forte.",
  history: "Le jazz est né à La Nouvelle-Orléans au début des années 1900, issu d'un mélange de musiques africaines, européennes et américaines. Il s'est développé à travers plusieurs périodes distinctes: le jazz traditionnel, le swing, le bebop, le cool jazz, le hard bop, le free jazz, la fusion et le jazz contemporain. Chaque période a apporté des innovations musicales significatives qui ont influencé non seulement le jazz mais aussi d'autres genres musicaux.",
  era: "1900s - présent",
  characteristics: [
    "Improvisation",
    "Swing et syncopation",
    "Harmonie sophistiquée",
    "Expression individuelle",
    "Instrumentation variée"
  ],
  keyArtists: [
    {
      name: "Louis Armstrong",
      description: "Trompettiste et chanteur révolutionnaire, figure majeure du début du jazz",
      years: "1901-1971"
    },
    {
      name: "Duke Ellington",
      description: "Pianiste, compositeur et chef d'orchestre légendaire",
      years: "1899-1974"
    },
    {
      name: "Miles Davis",
      description: "Trompettiste innovateur, pionnier de nombreux styles de jazz",
      years: "1926-1991"
    },
    {
      name: "John Coltrane",
      description: "Saxophoniste visionnaire qui a repoussé les limites harmoniques",
      years: "1926-1967"
    }
  ],
  subgenres: [
    {
      name: "Bebop",
      description: "Style de jazz rapide et complexe développé dans les années 1940, caractérisé par des tempos rapides et une virtuosité technique.",
      era: "1940s - 1950s"
    },
    {
      name: "Cool Jazz",
      description: "Style plus relaxé et retenu, en réaction au bebop frénétique, utilisant des arrangements plus subtils et des tempos modérés.",
      era: "1950s - 1960s"
    },
    {
      name: "Fusion",
      description: "Combinaison du jazz avec des éléments du rock, du funk et du R&B, souvent avec des instruments électroniques.",
      era: "1970s - présent"
    },
    {
      name: "Free Jazz",
      description: "Approche expérimentale qui abandonne les conventions harmoniques traditionnelles pour une expression plus libre.",
      era: "1960s - présent"
    }
  ],
  keyAlbums: [
    {
      title: "Kind of Blue",
      artist: "Miles Davis",
      year: "1959",
      link: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA"
    },
    {
      title: "A Love Supreme",
      artist: "John Coltrane",
      year: "1965",
      link: "https://open.spotify.com/album/3VyiXinsvitFxYsIT7QCcJ"
    }
  ],
  influences: ["Fusion", "R&B", "Musique contemporaine"],
  influencedBy: ["Blues", "Ragtime", "Musique africaine"],
  image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
  color: "bg-amber-500/10",
  slug: "jazz"
};

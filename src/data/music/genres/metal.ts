
import { MusicGenre } from "@/types/music";

export const metalGenre: MusicGenre = {
  name: "Metal",
  description: "Genre musical dérivé du hard rock, caractérisé par sa puissance sonore, ses guitares distordues, sa rythmique intense et ses vocaux expressifs.",
  history: "Le metal a émergé à la fin des années 1960 et au début des années 1970, avec des groupes comme Black Sabbath qui ont introduit des sonorités plus sombres et lourdes que le rock traditionnel. Dans les années 1980, le genre s'est diversifié avec l'émergence du thrash, du death et du black metal. Les années 1990 ont vu naître le nu metal et le metal progressif, tandis que les années 2000 ont continué à voir de nouvelles fusions et évolutions du genre. Aujourd'hui, le metal comprend d'innombrables sous-genres, chacun avec ses propres caractéristiques sonores et son public dédié.",
  era: "1970s - présent",
  characteristics: [
    "Guitares électriques distordues",
    "Sections rythmiques puissantes",
    "Techniques vocales variées (du chant mélodique au growl)",
    "Virtuosité instrumentale",
    "Thématiques souvent sombres ou fantastiques"
  ],
  keyArtists: [
    {
      name: "Black Sabbath",
      description: "Considérés comme les fondateurs du heavy metal",
      years: "1968-2017"
    },
    {
      name: "Metallica",
      description: "Groupe emblématique du thrash metal devenu mainstream",
      years: "1981-présent"
    },
    {
      name: "Iron Maiden",
      description: "Piliers du heavy metal britannique avec leur mascotte Eddie",
      years: "1975-présent"
    },
    {
      name: "Slayer",
      description: "Pionniers du thrash metal avec une approche extrême",
      years: "1981-2019"
    }
  ],
  subgenres: [
    {
      name: "Thrash Metal",
      description: "Caractérisé par des tempos rapides, une agressivité technique et des riffs complexes.",
      era: "1980s - présent"
    },
    {
      name: "Death Metal",
      description: "Extrême dans sa brutalité, avec des vocaux gutturaux, des blast beats et des thèmes macabres.",
      era: "1980s - présent"
    },
    {
      name: "Black Metal",
      description: "Reconnaissable à son atmosphère froide, ses cris aigus et son esthétique souvent liée à l'occulte.",
      era: "1980s - présent"
    },
    {
      name: "Power Metal",
      description: "Version plus mélodique et épique, avec des thèmes fantastiques et des vocaux souvent plus aigus.",
      era: "1980s - présent"
    }
  ],
  keyAlbums: [
    {
      title: "Master of Puppets",
      artist: "Metallica",
      year: "1986",
      link: "https://open.spotify.com/album/2Lq2qX3hYhiuPckC8Flj21"
    },
    {
      title: "Paranoid",
      artist: "Black Sabbath",
      year: "1970",
      link: "https://open.spotify.com/album/6r7LZXAVueS5DqdrvXJJK7"
    }
  ],
  influences: ["Metal progressif", "Metal symphonique", "Metalcore"],
  influencedBy: ["Hard Rock", "Punk", "Musique classique"],
  image: "https://images.unsplash.com/photo-1518972559570-7cc1309f3229",
  color: "bg-neutral-700/20",
  slug: "metal"
};

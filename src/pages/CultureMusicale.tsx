import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Music, 
  Headphones, 
  Radio, 
  Disc, 
  Music2, 
  ArrowRight, 
  Volume2, 
  Mic2, 
  PieChart, 
  Globe, 
  Clock,
  Guitar,
  Drumstick,
  Piano,
  Mic,
  BookOpen
} from "lucide-react";

import GenreSection from "@/components/music/GenreSection";
import GenreCard from "@/components/music/GenreCard";
import GenreGridSection from "@/components/music/GenreGridSection";
import MusicalPeriodTab from "@/components/music/MusicalPeriodTab";
import MusicInfluenceChart from "@/components/music/MusicInfluenceChart";
import TimelineCard from "@/components/music/TimelineCard";

// Define the music influence data for the chart
const musicInfluenceData = [
  {
    id: "rock",
    name: "Rock",
    description: "1950s-present",
    color: "#3b82f6",
    influences: ["blues", "country", "folk"]
  },
  {
    id: "blues",
    name: "Blues",
    description: "1890s-present",
    color: "#1d4ed8",
    influences: ["folk", "jazz"]
  },
  {
    id: "jazz",
    name: "Jazz",
    description: "1900s-present",
    color: "#eab308",
    influences: ["blues", "classical"]
  },
  {
    id: "classical",
    name: "Classique",
    description: "1730-1820",
    color: "#d97706",
    influences: []
  },
  {
    id: "electronic",
    name: "Électronique",
    description: "1970s-present",
    color: "#8b5cf6",
    influences: ["disco", "rock", "jazz"]
  },
  {
    id: "hip-hop",
    name: "Hip-Hop",
    description: "1970s-present",
    color: "#ef4444",
    influences: ["funk", "soul", "electronic"]
  },
  {
    id: "metal",
    name: "Metal",
    description: "1970s-present",
    color: "#4b5563",
    influences: ["rock", "classical"]
  },
  {
    id: "folk",
    name: "Folk",
    description: "Ancestral-present",
    color: "#22c55e",
    influences: []
  },
  {
    id: "country",
    name: "Country",
    description: "1920s-present",
    color: "#f97316",
    influences: ["folk", "blues"]
  },
  {
    id: "pop",
    name: "Pop",
    description: "1950s-present",
    color: "#ec4899",
    influences: ["rock", "electronic", "r&b"]
  },
  {
    id: "r&b",
    name: "R&B",
    description: "1940s-present",
    color: "#06b6d4",
    influences: ["blues", "jazz", "gospel"]
  },
  {
    id: "funk",
    name: "Funk",
    description: "1960s-present",
    color: "#84cc16",
    influences: ["jazz", "r&b"]
  },
  {
    id: "disco",
    name: "Disco",
    description: "1970s-1980s",
    color: "#f43f5e",
    influences: ["funk", "soul"]
  },
  {
    id: "soul",
    name: "Soul",
    description: "1950s-present",
    color: "#0ea5e9",
    influences: ["gospel", "r&b"]
  },
  {
    id: "gospel",
    name: "Gospel",
    description: "1930s-present",
    color: "#0284c7",
    influences: ["spiritual"]
  }
];

// Genre categories for quick navigation
const genreCategories = [
  { id: "rock", name: "Rock & Metal", icon: <Guitar className="h-4 w-4" /> },
  { id: "electronic", name: "Électronique", icon: <Disc className="h-4 w-4" /> },
  { id: "jazz-blues", name: "Jazz & Blues", icon: <Music2 className="h-4 w-4" /> },
  { id: "hip-hop", name: "Hip-Hop & R&B", icon: <Mic2 className="h-4 w-4" /> },
  { id: "world", name: "Musique du Monde", icon: <Globe className="h-4 w-4" /> },
  { id: "classical", name: "Classique", icon: <Piano className="h-4 w-4" /> },
  { id: "pop", name: "Pop & Disco", icon: <Radio className="h-4 w-4" /> },
  { id: "folk", name: "Folk & Country", icon: <Mic className="h-4 w-4" /> },
  { id: "other", name: "Autres genres", icon: <Music className="h-4 w-4" /> },
];

// Main featured genres with detailed content
const mainGenres = [
  {
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
  },
  {
    name: "Jazz",
    description: "Forme musicale développée aux États-Unis au début du XXe siècle, caractérisée par l'improvisation, les rythmes syncopés et le swing.",
    history: "Né à La Nouvelle-Orléans au début du 20e siècle, le jazz est issu du croisement des traditions musicales africaines et européennes, notamment des spirituals, du blues et du ragtime. Il a évolué à travers diverses périodes: le jazz traditionnel de La Nouvelle-Orléans (1910s), l'ère du swing (1930s-40s), le bebop (1940s), le cool jazz et hard bop (1950s), le free jazz (1960s), et la fusion (1970s). Chaque période apportant ses innovations musicales et ses figures emblématiques.",
    era: "1900s - présent",
    characteristics: [
      "Improvisation",
      "Swing et rythmes syncopés",
      "Interaction entre les musiciens",
      "Harmonies complexes (accords de septième, neuvième)",
      "Utilisation du blue note",
      "Virtuosité instrumentale"
    ],
    keyArtists: [
      {
        name: "Louis Armstrong",
        description: "Trompettiste et chanteur pionnier, a défini le rôle du soliste",
        years: "1920s-1960s"
      },
      {
        name: "Miles Davis",
        description: "Trompettiste visionnaire ayant traversé plusieurs courants jazz",
        years: "1940s-1991"
      },
      {
        name: "John Coltrane",
        description: "Saxophoniste qui a poussé les limites de l'harmonie",
        years: "1950s-1967"
      },
      {
        name: "Ella Fitzgerald",
        description: "Chanteuse virtuose connue pour son scat et sa précision",
        years: "1930s-1990s"
      }
    ],
    subgenres: [
      {
        name: "Bebop",
        description: "Style rapide et techniquement exigeant développé dans les années 1940, avec des harmonies complexes et des improvisations virtuoses.",
        era: "1940s - 1950s"
      },
      {
        name: "Cool Jazz",
        description: "Réaction plus légère et retenue au bebop, caractérisée par des tempos plus lents et des arrangements plus subtils.",
        era: "1950s"
      },
      {
        name: "Jazz Fusion",
        description: "Mélange du jazz avec le rock, le funk et le R&B, souvent avec des instruments électriques et des influences de musiques du monde.",
        era: "1970s - présent"
      },
      {
        name: "Free Jazz",
        description: "Approche expérimentale abandonnant les structures harmoniques et rythmiques conventionnelles pour une expression plus libre.",
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
        link: "https://open.spotify.com/album/47zRjMtRZ9eDsYGmHANLQs"
      }
    ],
    influences: ["Funk", "Soul", "Contemporary Jazz"],
    influencedBy: ["Blues", "Ragtime", "Spirituals"],
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f",
    color: "bg-yellow-500/10",
    slug: "jazz"
  },
  {
    name: "Électronique",
    description: "Large catégorie musicale créée principalement avec des instruments électroniques comme les synthétiseurs, les boîtes à rythmes et les ordinateurs.",
    history: "La musique électronique trouve ses origines au début du 20e siècle avec des instruments comme le Theremin (1920) et les premiers synthétiseurs. À partir des années 1970, les innovateurs comme Kraftwerk ont popularisé l'utilisation d'instruments électroniques. L'explosion de la dance music électronique dans les années 1980-90 avec la house, la techno et la trance a transformé la culture club mondiale. Aujourd'hui, les technologies numériques ont démocratisé la production, rendant ce genre omniprésent dans la musique contemporaine.",
    era: "1970s - présent",
    characteristics: [
      "Production assistée par ordinateur (DAW)",
      "Sons synthétisés et échantillonnés",
      "Structures rythmiques répétitives",
      "Absence fréquente d'instruments traditionnels",
      "Importance de la production et du mixage",
      "Variations dynamiques par ajout/retrait d'éléments"
    ],
    keyArtists: [
      {
        name: "Kraftwerk",
        description: "Pionniers allemands de la musique électronique",
        years: "1970s-présent"
      },
      {
        name: "Daft Punk",
        description: "Duo français ayant révolutionné la house et l'electro",
        years: "1993-2021"
      },
      {
        name: "Aphex Twin",
        description: "Producteur britannique connu pour son approche expérimentale",
        years: "1990s-présent"
      },
      {
        name: "Jean-Michel Jarre",
        description: "Compositeur français pionnier des spectacles électroniques",
        years: "1970s-présent"
      }
    ],
    subgenres: [
      {
        name: "Techno",
        description: "Genre né à Detroit dans les années 1980, caractérisé par un tempo rapide et des rythmes mécaniques répétitifs.",
        era: "1980s - présent"
      },
      {
        name: "House",
        description: "Développé à Chicago dans les années 1980, reconnaissable à son rythme four-on-the-floor et ses influences disco.",
        era: "1980s - présent"
      },
      {
        name: "Ambient",
        description: "Musique atmosphérique qui met l'accent sur le ton et l'atmosphère plutôt que sur le rythme ou la structure traditionnelle.",
        era: "1970s - présent"
      },
      {
        name: "Drum and Bass",
        description: "Caractérisé par des tempos rapides (160-180 BPM) et des lignes de basse lourdes avec des breaks de batterie complexes.",
        era: "1990s - présent"
      }
    ],
    keyAlbums: [
      {
        title: "Trans-Europe Express",
        artist: "Kraftwerk",
        year: "1977",
        link: "https://open.spotify.com/album/0HwkdQDryfX8zQhJ0Cex3L"
      },
      {
        title: "Discovery",
        artist: "Daft Punk",
        year: "2001",
        link: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc"
      }
    ],
    influences: ["Dubstep", "EDM", "Vaporwave"],
    influencedBy: ["Disco", "Experimental", "Synthpop"],
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
    color: "bg-purple-500/10",
    slug: "electronique"
  },
  {
    name: "Hip-Hop",
    description: "Culture artistique et mouvement musical développé dans le Bronx à New York dans les années 1970, caractérisé par quatre éléments principaux: le rap (MCing), le DJing, le breakdance et le graffiti.",
    history: "Né dans le Bronx à la fin des années 1970, le hip-hop a émergé comme une expression culturelle des communautés afro-américaines et latinos. DJ Kool Herc, Afrika Bambaataa et Grandmaster Flash ont posé ses fondations. Des groupes comme Run-DMC et Public Enemy ont popularisé le genre dans les années 1980. Les années 1990 ont vu l'émergence de la rivalité Est-Ouest et du gangsta rap. Depuis, le hip-hop s'est diversifié en de nombreuses variantes et est devenu l'une des forces culturelles dominantes dans le monde.",
    era: "1970s - présent",
    characteristics: [
      "Paroles rappées sur des beats",
      "Échantillonnage (sampling) et boucles",
      "Importance du rythme et des basses",
      "Storytelling et expressions de réalités sociales",
      "Freestyling et battles",
      "Fusion d'influences musicales diverses"
    ],
    keyArtists: [
      {
        name: "Tupac Shakur",
        description: "Rappeur emblématique connu pour ses paroles socialement conscientes",
        years: "1990s"
      },
      {
        name: "The Notorious B.I.G.",
        description: "Rappeur influent de la côte Est reconnu pour son flow",
        years: "1990s"
      },
      {
        name: "Jay-Z",
        description: "Rappeur et homme d'affaires ayant marqué plusieurs décennies",
        years: "1990s-présent"
      },
      {
        name: "Missy Elliott",
        description: "Rappeuse innovante qui a redéfini les limites du genre",
        years: "1990s-présent"
      }
    ],
    subgenres: [
      {
        name: "Gangsta Rap",
        description: "Style qui dépeint la vie dans les quartiers défavorisés et la culture des gangs, souvent avec des paroles explicites.",
        era: "1980s - présent"
      },
      {
        name: "Trap",
        description: "Originaire du Sud des États-Unis, caractérisé par des lignes de hi-hat rapides, des basses profondes et des thèmes liés au trafic de drogue.",
        era: "2000s - présent"
      },
      {
        name: "Conscious Rap",
        description: "Met l'accent sur la sensibilisation sociale et l'élévation politique de la communauté à travers des paroles réfléchies.",
        era: "1980s - présent"
      },
      {
        name: "Alternative Hip-Hop",
        description: "S'éloigne du hip-hop mainstream en explorant des thèmes non conventionnels et des productions expérimentales.",
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
        title: "The Chronic",
        artist: "Dr. Dre",
        year: "1992",
        link: "https://open.spotify.com/album/2Zi7uXrYMECe0TlN1dt5xf"
      }
    ],
    influences: ["Trap", "Grime", "Cloud Rap"],
    influencedBy: ["Funk", "Soul", "Spoken Word"],
    image: "https://images.unsplash.com/photo-1547380109-a2fffa5a13db",
    color: "bg-red-500/10",
    slug: "hip-hop"
  },
  {
    name: "Metal",
    description: "Genre musical extrême du rock caractérisé par des guitares lourdement distordues, des tempos rapides, des batteries intenses et des voix souvent puissantes ou gutturales.",
    history: "Le metal est né à la fin des années 1960 et au début des années 1970 avec des groupes comme Black Sabbath, Deep Purple et Led Zeppelin qui ont introduit des sons plus lourds et sombres au rock. Dans les années 1980, la New Wave of British Heavy Metal (avec Iron Maiden, Judas Priest) et le thrash metal américain (Metallica, Slayer) ont ajouté vitesse et technicité. Les années 1990 ont vu une diversification extrême avec l'émergence du death metal, black metal, nu metal et bien d'autres sous-genres, chacun explorant différentes dimensions de l'intensité musicale.",
    era: "1970s - présent",
    characteristics: [
      "Guitares distordues et accordées bas",
      "Solos techniques et riffs puissants",
      "Batterie double pédale et rythmiques complexes",
      "Voix extrêmes (du chant mélodique aux growls)",
      "Thèmes lyriques souvent sombres ou fantastiques",
      "Esthétique visuelle distincte"
    ],
    keyArtists: [
      {
        name: "Black Sabbath",
        description: "Groupe fondateur du heavy metal",
        years: "1968-2017"
      },
      {
        name: "Metallica",
        description: "Pionniers du thrash metal devenus icônes mondiales",
        years: "1981-présent"
      },
      {
        name: "Iron Maiden",
        description: "Piliers de la New Wave of British Heavy Metal",
        years: "1975-présent"
      },
      {
        name: "Slayer",
        description: "Figures emblématiques du thrash metal américain",
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
        description: "Style extrême avec voix gutturales, guitares ultra-distordues et thèmes macabres.",
        era: "1980s - présent"
      },
      {
        name: "Black Metal",
        description: "Reconnaissable à ses blast beats, ses voix criées et son atmosphère souvent froide et misanthropique.",
        era: "1980s - présent"
      },
      {
        name: "Power Metal",
        description: "Version plus mélodique et épique, souvent avec des thèmes fantastiques et mythologiques.",
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
    influences: ["Metalcore", "Progressive Metal", "Djent"],
    influencedBy: ["Hard Rock", "Punk", "Classical"],
    image: "https://images.unsplash.com/photo-1652752571208-945fa4845b58",
    color: "bg-gray-800/20",
    slug: "metal"
  },
  {
    name: "Musique Classique",
    description: "Tradition musicale occidentale savante s'étendant principalement du 9ème au 20ème siècle, caractérisée par des compositions écrites et interprétées selon des normes strictes.",
    history: "La musique classique occidentale s'est développée sur plus d'un millénaire, depuis le chant grégorien médiéval jusqu'aux expérimentations contemporaines. Chaque période—Médiévale, Renaissance, Baroque, Classique, Romantique, Moderne et Contemporaine—a apporté ses innovations en matière de formes, d'instrumentation et d'harmonie. Des compositeurs comme Bach, Mozart, Beethoven, Chopin, Debussy et Stravinsky ont chacun révolutionné l'art musical de leur époque, créant un riche héritage qui continue d'influencer toutes les formes de musique aujourd'hui.",
    era: "9ème siècle - présent",
    characteristics: [
      "Compositions écrites et formelles",
      "Interprétation d'après partition",
      "Instrumentation orchestrale et de chambre",
      "Structures musicales complexes (sonate, fugue, etc.)",
      "Développement thématique élaboré",
      "Traditions d'interprétation établies"
    ],
    keyArtists: [
      {
        name: "Ludwig van Beethoven",
        description: "Compositeur révolutionnaire entre classicisme et romantisme",
        years: "1770-1827"
      },
      {
        name: "Wolfgang Amadeus Mozart",
        description: "Prodige et maître de la période classique",
        years: "1756-1791"
      },
      {
        name: "Johann Sebastian Bach",
        description: "Génie de la période baroque et maître du contrepoint",
        years: "1685-1750"
      },
      {
        name: "Claude Debussy",
        description: "Innovateur de l'impressionnisme musical",
        years: "1862-1918"
      }
    ],
    subgenres: [
      {
        name: "Musique baroque",
        description: "Période caractérisée par l'ornementation, le contrepoint et la basse continue.",
        era: "1600-1750"
      },
      {
        name: "Période classique",
        description: "Époque marquée par la clarté, l'équilibre et la forme sonate.",
        era: "1730-1820"
      },
      {
        name: "Musique romantique",
        description: "Style mettant l'accent sur l'émotion, l'individualisme et le nationalisme.",
        era: "1800-1910"
      },
      {
        name: "Musique contemporaine",
        description: "Œuvres du 20ème et 21ème siècles explorant de nouveaux langages musicaux, techniques et technologies.",
        era: "1900-présent"
      }
    ],
    keyAlbums: [
      {
        title: "Les Quatre Saisons",
        artist: "Antonio Vivaldi",
        year: "1725",
        link: "https://open.spotify.com/album/6qOHEZjaUhvDvDj3GmUcgQ"
      },
      {
        title: "Symphonie No. 9",
        artist: "Ludwig van Beethoven",
        year: "1824",
        link: "https://open.spotify.com/album/6Dh0I1WhGLYxbkhXcJ2XoP"
      }
    ],
    influences: ["Contemporary Classical", "Film Music", "Post-Classical"],
    influencedBy: ["Gregorian Chant", "Folk Music", "Church Music"],
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76",
    color: "bg-amber-500/10",
    slug: "classique"
  },
  {
    name: "Blues",
    description: "Genre musical originaire des communautés afro-américaines du Sud des États-Unis à la fin du 19e siècle, caractérisé par les blue notes et un modèle d'appel-réponse.",
    history: "Le blues est né dans les communautés afro-américaines du Sud des États-Unis à la fin du 19ème siècle, émergeant des chants de travail, field hollers, spirituals et ballades. Le Delta blues du Mississippi a posé les fondations au début du 20ème siècle avec des artistes comme Charley Patton et Robert Johnson. La Grande Migration vers le Nord a transformé le genre en Chicago Blues électrifié dans les années 1940-50 avec Muddy Waters et Howlin' Wolf. Le blues a été fondamental pour l'émergence du jazz, du rhythm and blues, du rock 'n' roll et pratiquement toute la musique populaire moderne.",
    era: "1890s - présent",
    characteristics: [
      "Structure à 12 mesures",
      "Blue notes (altération des 3ème et 7ème degrés)",
      "Forme d'appel-réponse",
      "Paroles souvent mélancoliques ou introspectives",
      "Instrumentation souvent centrée sur la guitare",
      "Utilisation du shuffle et du swing"
    ],
    keyArtists: [
      {
        name: "Robert Johnson",
        description: "Figure légendaire du Delta blues",
        years: "1911-1938"
      },
      {
        name: "Muddy Waters",
        description: "Pionnier du Chicago blues électrique",
        years: "1940s-1980s"
      },
      {
        name: "B.B. King",
        description: "Guitariste virtuose connu pour son phrasé expressif",
        years: "1940s-2015"
      },
      {
        name: "Bessie Smith",
        description: "Impératrice du blues et chanteuse influente",
        years: "1920s-1937"
      }
    ],
    subgenres: [
      {
        name: "Delta Blues",
        description: "Style rural originaire du Delta du Mississippi, joué généralement en solo à la guitare acoustique ou au piano.",
        era: "1920s - 1940s"
      },
      {
        name: "Chicago Blues",
        description: "Version électrifiée développée après la migration des musiciens du Sud vers Chicago, avec ajout de batterie, basse et harmonica amplifié.",
        era: "1940s - 1960s"
      },
      {
        name: "Blues Rock",
        description: "Fusion du blues avec le rock caractérisée par un jeu de guitare électrique énergique et des structures rock.",
        era: "1960s - présent"
      },
      {
        name: "Jump Blues",
        description: "Style énergique et dansant qui a précédé le R&B, combinant des éléments de big band swing et de blues.",
        era: "1940s - 1950s"
      }
    ],
    keyAlbums: [
      {
        title: "The Complete Recordings",
        artist: "Robert Johnson",
        year: "1936-37",
        link: "https://open.spotify.com/album/0eUMnoci6zorPt2JXWQCp1"
      },
      {
        title: "Live at the Regal",
        artist: "B.B. King",
        year: "1965",
        link: "https://open.spotify.com/album/1aJnUqBI8Wtekd4AGokg4F"
      }
    ],
    influences: ["Rock", "R&B", "Soul"],
    influencedBy: ["Work Songs", "Spirituals", "Folk"],
    image: "https://images.unsplash.com/photo-1515890922410-ae767899d6b3",
    color: "bg-blue-800/10",
    slug: "blues"
  },
  {
    name: "World Music",
    description: "Terme englobant les traditions musicales du monde entier, particulièrement les musiques folk et ethniques en dehors des traditions occidentales populaires.",
    history: "Le terme 'World Music' a émergé comme catégorie commerciale dans les années 1980 pour désigner les musiques non occidentales, bien que ces traditions existent depuis des millénaires. Chaque région du monde possède ses propres styles musicaux profondément ancrés dans ses cultures et histoires locales. Depuis les années 1990, la mondialisation et les échanges culturels ont favorisé les fusions et collaborations entre musiciens de différentes traditions. Aujourd'hui, ces musiques connaissent un regain d'intérêt pour leur authenticité et leur diversité dans un paysage musical de plus en plus homogénéisé.",
    era: "Traditions anciennes - présent",
    characteristics: [
      "Instruments traditionnels régionaux",
      "Gammes et modes non occidentaux",
      "Rythmes complexes ou inhabituels",
      "Techniques vocales spécifiques à chaque culture",
      "Contextes souvent rituels ou cérémoniels",
      "Transmission orale des traditions"
    ],
    keyArtists: [
      {
        name: "Youssou N'Dour",
        description: "Chanteur sénégalais et ambassadeur de la musique africaine",
        years: "1980s-présent"
      },
      {
        name: "Ravi Shankar",
        description: "Virtuose indien du sitar qui a popularisé la musique classique indienne",
        years: "1940s-2012"
      },
      {
        name: "Cesária Évora",
        description: "Chanteuse cap-verdienne connue comme la 'Diva aux pieds nus'",
        years: "1980s-2011"
      },
      {
        name: "Mercedes Sosa",
        description: "Chanteuse argentine icône du mouvement nueva canción",
        years: "1960s-2009"
      }
    ],
    subgenres: [
      {
        name: "Afrobeat",
        description: "Fusion de musiques traditionnelles yoruba, jazz, highlife et funk, développée par Fela Kuti au Nigeria.",
        era: "1970s - présent"
      },
      {
        name: "Raï",
        description: "Genre algérien combinant musique folklorique, orchestration orientale et influence occidentale, souvent avec des thèmes sociaux.",
        era: "1920s - présent"
      },
      {
        name: "Bossa Nova",
        description: "Style brésilien fusionnant la samba et le cool jazz américain, caractérisé par des harmonies sophistiquées et un rythme délicat.",
        era: "1950s - présent"
      },
      {
        name: "Flamenco",
        description: "Art andalou combinant chant (cante), danse (baile), guitare (toque) et percussions (palmas), avec une forte expressivité émotionnelle.",
        era: "18ème siècle - présent"
      }
    ],
    keyAlbums: [
      {
        title: "Talking Timbuktu",
        artist: "Ali Farka Touré & Ry Cooder",
        year: "1994",
        link: "https://open.spotify.com/album/0HMbPmORP5AQUSGDgr4l0E"
      },
      {
        title: "Buena Vista Social Club",
        artist: "Buena Vista Social Club",
        year: "1997",
        link: "https://open.spotify.com/album/6DPdEaZ0KDBCCgXyy4q8bi"
      }
    ],
    influences: ["Fusion", "Contemporary World", "Cultural Crossovers"],
    influencedBy: ["Folk Traditions", "Cultural Rituals", "Regional Instruments"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    color: "bg-green-700/10",
    slug: "world-music"
  },
  {
    name: "Pop",
    description: "Genre de musique populaire qui se caractérise par des mélodies accrocheuses, des structures simples et un attrait auprès du grand public.",
    history: "La musique pop moderne a émergé dans les années 1950 avec le rock 'n' roll et s'est véritablement définie dans les années 1960 avec la British Invasion menée par les Beatles. Les décennies suivantes ont vu l'évolution du genre à travers différents styles: le disco des années 70, la pop synthétique des années 80, la teen pop des années 90, jusqu'aux productions électroniques contemporaines. Le genre a toujours reflété les avancées technologiques de son époque et s'est constamment réinventé tout en maintenant son accessibilité commerciale.",
    era: "1950s - présent",
    characteristics: [
      "Mélodies accrocheuses et mémorisables",
      "Structure couplet-refrain avec des hooks",
      "Chansons généralement de 3-4 minutes",
      "Production soignée et contemporaine",
      "Accent sur la voix et la personnalité de l'artiste",
      "Orientation commerciale et radio-friendly"
    ],
    keyArtists: [
      {
        name: "Michael Jackson",
        description: "Roi de la Pop qui a révolutionné la musique et la danse",
        years: "1970s-2009"
      },
      {
        name: "Madonna",
        description: "Reine de la Pop connue pour ses réinventions constantes",
        years: "1980s-présent"
      },
      {
        name: "The Beatles",
        description: "Groupe britannique qui a transformé la pop music",
        years: "1960-1970"
      },
      {
        name: "Taylor Swift",
        description: "Auteure-compositrice-interprète aux succès multiples",
        years: "2000s-présent"
      }
    ],
    subgenres: [
      {
        name: "Synthpop",
        description: "Style utilisant principalement des synthétiseurs, populaire dans les années 1980.",
        era: "1980s - présent"
      },
      {
        name: "Bubblegum Pop",
        description: "Pop légère et accrocheuse destinée principalement aux adolescents et préadolescents.",
        era: "1960s - présent"
      },
      {
        name: "Dance-Pop",
        description: "Fusion de pop avec des éléments de dance music, orientée vers les clubs et les pistes de danse.",
        era: "1980s - présent"
      },
      {
        name: "Indie Pop",
        description: "Version alternative de la pop, souvent produite par des labels indépendants avec une approche moins conventionnelle.",
        era: "1980s - présent"
      }
    ],
    keyAlbums: [
      {
        title: "Thriller",
        artist: "Michael Jackson",
        year: "1982",
        link: "https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ"
      },
      {
        title: "Like a Prayer",
        artist: "Madonna",
        year: "1989",
        link: "https://open.spotify.com/album/7cS7eaDYXyUZL7OfDZwwXG"
      }
    ],
    influences: ["K-Pop", "Electropop", "Contemporary Pop"],
    influencedBy: ["Rock & Roll", "Disco", "R&B"],
    image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b",
    color: "bg-pink-500/10",
    slug: "pop"
  },
];

// Contemporary subgenres for the grid section
const contemporaryGenres = [
  {
    name: "Vaporwave",
    description: "Genre électronique né sur internet caractérisé par la nostalgie des années 80/90 et l'esthétique rétro",
    timeframe: "2010s - présent",
    artists: ["Macintosh Plus", "Saint Pepsi", "2814"],
    keyCharacteristics: [
      "Samples ralentis d'easy listening et de pop des années 80",
      "Esthétique visuelle inspirée du consumérisme et de la technologie rétro",
      "Ambiances mélancoliques et oniriques"
    ]
  },
  {
    name: "Post-Dubstep",
    description: "Évolution du dubstep vers des sonorités plus introspectives et expérimentales",
    timeframe: "Late 2000s - présent",
    artists: ["James Blake", "Mount Kimbie", "Burial"],
    keyCharacteristics: [
      "Rythmiques syncopées et minimalistes",
      " atmosphères émotionnelles et spatiales",
      "Mélange de vocaux traités et de basses profondes"
    ]
  },
  {
    name: "Hyperpop",
    description: "Style extrême mélangeant pop conventionnelle avec des éléments exagérés d'EDM et de hip-hop",
    timeframe: "2010s - présent",
    artists: ["100 gecs", "Charli XCX", "Sophie"],
    keyCharacteristics: [
      "Production maximale et saturée",
      "Auto-tune et effets vocaux poussés à l'extrême",
      "Mélange de genres et d'influences diverses"
    ]
  },
  {
    name: "Afrobeats",
    description: "Musique contemporaine d'Afrique de l'Ouest fusionnant highlife, dancehall et hip-hop",
    timeframe: "2000s - présent",
    artists: ["Wizkid", "Burna Boy", "Davido"],
    keyCharacteristics: [
      "Rythmes percussifs complexes",
      "Mélodies accrocheuses et chant souvent en pidgin",
      "Production contemporaine avec des influences globales"
    ]
  },
  {
    name: "Indie Folk",
    description: "Fusion de folk traditionnel avec des sensibilités indie rock et une production contemporaine",
    timeframe: "2000s - présent",
    artists: ["Bon Iver", "Fleet Foxes", "Sufjan Stevens"],
    keyCharacteristics: [
      "Instrumentation acoustique avec des touches électroniques",
      "Arrangements harmoniques riches et introspection lyrique",
      "Approche DIY et indépendante de la production"
    ]
  },
  {
    name: "Lo-fi Hip Hop",
    description: "Style instrumental caractérisé par des imperfections sonores délibérées et des ambiances relaxantes",
    timeframe: "2010s - présent",
    artists: ["Nujabes", "J Dilla", "Chillhop Music"],
    keyCharacteristics: [
      "Beats downtempo avec du craquement de vinyle",
      "Échantillons de jazz et de soul",
      "Atmosphère nostalgique et relaxante"
    ]
  }
];

// Fusion genres showcase
const fusionGenres = [
  {
    title: "Jazz Fusion",
    description: "Mélange du jazz avec le rock, le funk et le R&B, souvent avec des instruments électriques et des influences de musiques du monde.",
    icon: <Music2 className="h-5 w-5" />,
    characteristics: [
      {title: "Instrumentation", description: "Instruments électriques, synthétiseurs avec techniques jazz"},
      {title: "Structure", description: "Improvisation sur des rythmes complexes et grooves funk"},
    ],
    artists: [
      {name: "Miles Davis", description: "Période Bitches Brew"},
      {name: "Weather Report", description: "Groupe fondateur"},
      {name: "Herbie Hancock", description: "Période Headhunters"}
    ],
    timeframe: "1970s - présent",
    imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  },
  {
    title: "Nu-Metal",
    description: "Fusion de metal alternatif avec des éléments de hip-hop, de musique électronique et de funk.",
    icon: <Guitar className="h-5 w-5" />,
    characteristics: [
      {title: "Son", description: "Guitares accordées bas avec DJs et rap"},
      {title: "Thèmes", description: "Angoisses personnelles et aliénation sociale"},
    ],
    artists: [
      {name: "Korn", description: "Pionniers du genre"},
      {name: "Limp Bizkit", description: "Approche rap-metal"},
      {name: "Linkin Park", description: "Version plus mélodique"}
    ],
    timeframe: "Mid 1990s - Early 2000s",
    imageSrc: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3"
  },
  {
    title: "Trip-Hop",
    description: "Fusion de hip-hop avec de l'ambient, du soul et du jazz, créant une atmosphère sombre et cinématique.",
    icon: <Disc className="h-5 w-5" />,
    characteristics: [
      {title: "Rythme", description: "Beats lents et ambiance mélancolique"},
      {title: "Production", description: "Samples obscurs et textures atmosphériques"},
    ],
    artists: [
      {name: "Massive Attack", description: "Fondateurs du Bristol sound"},
      {name: "Portishead", description: "Approche nostalgique et cinématique"},
      {name: "Tricky", description: "Style expérimental et personnel"}
    ],
    timeframe: "1990s - présent",
    imageSrc: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b"
  },
  {
    title: "Afrobeat",
    description: "Fusion de musiques traditionnelles yoruba, jazz, highlife et funk, développée par Fela Kuti au Nigeria.",
    icon: <Drumstick className="h-5 w-5" />,
    characteristics: [
      {title: "Rythme", description: "Polyrhythmes complexes avec section cuivre"},
      {title: "Structure", description: "Morceaux longs avec engagement politique"},
    ],
    artists: [
      {name: "Fela Kuti", description: "Créateur du genre"},
      {name: "Tony Allen", description: "Batteur historique et innovateur"},
      {name: "Seun Kuti", description: "Continuation de l'héritage"}
    ],
    timeframe: "1970s - présent",
    imageSrc: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
  }
];

// Timeline data for the evolution section
const musicEvolution = [
  {
    year: "1900-1920",
    title: "Émergence du Jazz",
    description: "Naissance du jazz à La Nouvelle-Orléans et développement du blues dans le Delta du Mississippi"
  },
  {
    year: "1950s",
    title: "Révolution du Rock'n'Roll",
    description: "Elvis Presley, Little Richard et Chuck Berry popularisent un nouveau son qui révolutionne la musique populaire"
  },
  {
    year: "1960s",
    title: "L'ère des Beatles et de la contre-culture",
    description: "Explosion créative avec la British Invasion, le rock psychédélique et le mouvement hippie"
  },
  {
    year: "1970s",
    title: "Diversification des genres",
    description: "Développement du punk, du disco, du heavy metal et du hip-hop émergent"
  },
  {
    year: "1980s",
    title: "Ère MTV et synthétiseurs",
    description: "La new wave, la synth-pop et le hair metal dominent avec l'influence grandissante des clips vidéo"
  },
  {
    year: "1990s",
    title: "Alternative et électronique",
    description: "Le grunge, la britpop et l'explosion de la musique électronique transforment le paysage musical"
  },
  {
    year: "2000s",
    title: "Démocratisation numérique",
    description: "MP3, Auto-Tune et production assistée par ordinateur révolutionnent la création et la distribution"
  },
  {
    year: "2010s-présent",
    title: "L'ère du streaming",
    description: "Explosion des genres hybrides, domination du hip-hop et accès illimité à toute l'histoire musicale"
  }
];

const CultureMusicale = () => {
  const [activeGenre, setActiveGenre] = useState("rock");

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Encyclopédie des Genres Musicaux</h1>
        <p className="text-lg text-muted-foreground">
          Explorez la riche diversité des genres musicaux à travers l'histoire, les caractéristiques, 
          et les artistes emblématiques qui ont façonné notre patrimoine sonore mondial
        </p>
      </div>
      
      {/* Desktop navigation tabs */}
      <div className="hidden md:block mb-10">
        <TabsList className="flex-wrap">
          {genreCategories.map((category) => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              className="flex items-center gap-1"
              onClick={() => setActiveGenre(category.id)}
            >
              {category.icon}
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {/* Mobile dropdown */}
      <div className="md:hidden mb-10">
        <Card className="p-3">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-2">
              {genreCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeGenre === category.id ? "default" : "outline"}
                  className="flex items-center gap-1"
                  onClick={() => setActiveGenre(category.id)}
                >
                  {category.icon}
                  <span className="text-xs">{category.name}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
      
      {/* Music Evolution Timeline */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            L'évolution de la musique moderne
          </CardTitle>
          <CardDescription>
            Un aperçu chronologique des moments clés qui ont façonné les genres musicaux du 20ème siècle à nos jours
          </CardDescription>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex overflow-x-auto pb-4 pl-4">
            <div className="flex gap-4">
              {musicEvolution.map((era, index) => (
                <TimelineCard 
                  key={index}
                  title={era.title}
                  description={era.description}
                  events={[{ year: era.year, title: era.title, description: era.description }]}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Main genres detailed exploration */}
      <div className="mt-10 space-y-8">
        <h2 className="text-2xl font-bold mb-6">Explorez les principaux genres musicaux</h2>
        
        {mainGenres.map((genre) => (
          <GenreSection key={genre.name} {...genre} />
        ))}
      </div>
      
      {/* Contemporary and emerging genres */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-2">Genres contemporains et émergents</h2>
        <p className="text-muted-foreground mb-6">
          Découvrez les styles musicaux qui définissent notre époque, fruits d'innovations technologiques et de croisements culturels
        </p>
        
        <GenreGridSection 
          title="Tendances musicales actuelles" 
          genres={contemporaryGenres} 
          columns={3}
        />
      </div>
      
      {/* Genre fusion showcase */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-2">Les fusions de genres</h2>
        <p className="text-muted-foreground mb-6">
          Des rencontres musicales qui transcendent les frontières traditionnelles et créent de nouvelles expressions artistiques
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fusionGenres.map((genre, idx) => (
            <GenreCard 
              key={idx}
              title={genre.title}
              description={genre.description}
              icon={genre.icon}
              characteristics={genre.characteristics}
              artists={genre.artists}
              timeframe={genre.timeframe}
              imageSrc={genre.imageSrc}
            />
          ))}
        </div>
      </div>
      
      {/* Musical Periods */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-6">Les périodes majeures de la musique classique</h2>
        
        <Tabs defaultValue="baroque">
          <TabsList className="flex-wrap mb-6">
            <TabsTrigger value="medieval">Médiévale</TabsTrigger>
            <TabsTrigger value="renaissance">Renaissance</TabsTrigger>
            <TabsTrigger value="baroque">Baroque</TabsTrigger>
            <TabsTrigger value="classical">Classique</TabsTrigger>
            <TabsTrigger value="romantic">Romantique</TabsTrigger>
            <TabsTrigger value="modern">Moderne</TabsTrigger>
            <TabsTrigger value="contemporary">Contemporaine</TabsTrigger>
          </TabsList>
          
          <MusicalPeriodTab 
            value="baroque"
            title="Période baroque (1600-1750)"
            description="Époque marquée par l'ornementation, le contrepoint et l'importance du contraste"
            timelineEvents={[
              { year: "1600", title: "Naissance de l'opéra", description: "Premiers opéras de Monteverdi" },
              { year: "1685", title: "Naissance de Bach et Händel", description: "Deux figures majeures de la période" },
              { year: "1725", title: "Les Quatre Saisons", description: "Chef-d'œuvre de Vivaldi" }
            ]}
            genres={[
              { 
                title: "Musique instrumentale", 
                description: "Développement du concerto et de la suite orchestrale",
                characteristics: [
                  { title: "Basse continue", description: "Fondement harmonique omniprésent" },
                  { title: "Ornementation", description: "Utilisation abondante de trilles et mordants" }
                ],
                artists: [
                  { name: "J.S. Bach", description: "Maître du contrepoint" },
                  { name: "A. Vivaldi", description: "Innovateur du concerto" }
                ]
              },
              { 
                title: "Opéra baroque", 
                description: "Naissance et développement de l'art lyrique",
                characteristics: [
                  { title: "Da capo aria", description: "Structure ABA avec ornements improvisés" },
                  { title: "Récitatif", description: "Passages narratifs entre les arias" }
                ],
                artists: [
                  { name: "C. Monteverdi", description: "Pionnier de l'opéra" },
                  { name: "G.F. Händel", description: "Opéras et oratorios" }
                ]
              }
            ]}
          />
          
          <MusicalPeriodTab 
            value="classical"
            title="Période classique (1730-1820)"
            description="Caractérisée par l'équilibre, la clarté formelle et l'élégance"
            timelineEvents={[
              { year: "1756", title: "Naissance de Mozart", description: "L'un des plus grands génies musicaux" },
              { year: "1770", title: "Naissance de Beethoven", description: "Le pont entre classicisme et romantisme" },
              { year: "1791", title: "Mort de Mozart", description: "Dernière œuvre : Requiem inachevé" }
            ]}
            genres={[
              { 
                title: "Symphonie classique", 
                description: "Établissement de la forme en quatre mouvements",
                characteristics: [
                  { title: "Forme sonate", description: "Structure avec exposition, développement et réexposition" },
                  { title: "Orchestration", description: "Équilibre entre les sections" }
                ],
                artists: [
                  { name: "J. Haydn", description: "Père de la symphonie" },
                  { name: "W.A. Mozart", description: "Raffinement et équilibre" }
                ]
              },
              { 
                title: "Musique de chambre", 
                description: "Développement du quatuor à cordes",
                characteristics: [
                  { title: "Dialogue instrumental", description: "Équilibre entre les voix" },
                  { title: "Clarté formelle", description: "Structures claires et symétriques" }
                ],
                artists: [
                  { name: "J. Haydn", description: "Innovateur du quatuor" },
                  { name: "L. Boccherini", description: "Élégance italienne" }
                ]
              }
            ]}
          />
          
          <MusicalPeriodTab 
            value="romantic"
            title="Période romantique (1800-1910)"
            description="Marquée par l'expression des émotions, le nationalisme et l'expansion de l'orchestre"
            timelineEvents={[
              { year: "1804", title: "Symphonie héroïque", description: "Œuvre révolutionnaire de Beethoven" },
              { year: "1830", title: "Symphonie fantastique", description: "Programme narratif de Berlioz" },
              { year: "1876", title: "L'Anneau du Nibelung", description: "Tétralogie monumentale de Wagner" }
            ]}
            genres={[
              { 
                title: "Musique à programme", 
                description: "Œuvres basées sur des histoires ou des idées extra-musicales",
                characteristics: [
                  { title: "Leitmotiv", description: "Thèmes associés à des personnages ou idées" },
                  { title: "Orchestration colorée", description: "Recherche de nouvelles sonorités" }
                ],
                artists: [
                  { name: "H. Berlioz", description: "Orchestrateur innovant" },
                  { name: "F. Liszt", description: "Créateur du poème symphonique" }
                ]
              },
              { 
                title: "Opéra romantique", 
                description: "Drame musical avec orchestre développé",
                characteristics: [
                  { title: "Drame musical", description: "Fusion de musique et action dramatique" },
                  { title: "Nationalisme", description: "Utilisation de thèmes folkloriques" }
                ],
                artists: [
                  { name: "R. Wagner", description: "Révolutionnaire du drame musical" },
                  { name: "G. Verdi", description: "Maître de l'opéra italien" }
                ]
              }
            ]}
          />
          
          {/* More MusicalPeriodTab components can be added for other periods */}
        </Tabs>
      </div>
      
      {/* Music Influence Chart */}
      <div className="mt-14 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Influences et connexions entre les genres musicaux
            </CardTitle>
            <CardDescription>
              Visualisation des relations et de l'évolution entre les principaux genres et sous-genres
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[500px]">
            <MusicInfluenceChart 
              title="Carte des influences musicales"
              description="Interconnexions entre les différents genres musicaux à travers l'histoire"
              genres={musicInfluenceData}
            />
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              Cette visualisation illustre comment les genres musicaux s'influencent mutuellement à travers le temps, 
              créant un riche écosystème sonore en constante évolution.
            </p>
          </CardFooter>
        </Card>
      </div>
      
      {/* Educational section */}
      <div className="mt-14 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Pour aller plus loin
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Cette encyclopédie des genres musicaux n'est qu'une introduction à l'immense diversité des expressions musicales 
              à travers le monde et l'histoire. Pour approfondir vos connaissances, nous vous invitons à :
            </p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Explorer les ressources de notre section <Button variant="link" asChild className="p-0 h-auto"><a href="/ressources">Ressources</a></Button> pour des ouvrages, documentaires et sites spécialisés
              </li>
              <li>
                Suivre l'actualité musicale dans notre section <Button variant="link" asChild className="p-0 h-auto"><a href="/actualite">Actualité</a></Button> pour découvrir les évolutions contemporaines
              </li>
              <li>
                Participer à des concerts, festivals et événements locaux pour vivre les genres musicaux dans leur contexte de performance
              </li>
              <li>
                Utiliser des plateformes de streaming pour créer des playlists exploratoires par genre et découvrir de nouveaux artistes
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="flex items-center gap-2">
              <a href="/ressources">
                <ArrowRight className="h-4 w-4" />
                Accéder à nos ressources musicologiques
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CultureMusicale;

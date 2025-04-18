import { Music2, Guitar, Disc, Drumstick } from "lucide-react";
import { createIcon } from "./utils";

export const fusionGenres = [
  {
    title: "Jazz Fusion",
    description: "Mélange du jazz avec le rock, le funk et le R&B, souvent avec des instruments électriques et des influences de musiques du monde.",
    icon: createIcon(Music2, "h-5 w-5"),
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
    icon: createIcon(Guitar, "h-5 w-5"),
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
    icon: createIcon(Disc, "h-5 w-5"),
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
    icon: createIcon(Drumstick, "h-5 w-5"),
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

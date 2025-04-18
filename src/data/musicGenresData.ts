import { 
  Music, 
  Headphones, 
  Radio, 
  Disc, 
  Music2, 
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
import React from "react";

// Function to create icon elements to avoid syntax errors in data objects
const createIcon = (Icon: React.ElementType, className: string = "h-4 w-4") => {
  return React.createElement(Icon, { className });
};

// Genre categories for quick navigation
export const genreCategories = [
  { id: "rock", name: "Rock & Metal", icon: createIcon(Guitar) },
  { id: "electronic", name: "Électronique", icon: createIcon(Disc) },
  { id: "jazz-blues", name: "Jazz & Blues", icon: createIcon(Music2) },
  { id: "hip-hop", name: "Hip-Hop & R&B", icon: createIcon(Mic2) },
  { id: "world", name: "Musique du Monde", icon: createIcon(Globe) },
  { id: "classical", name: "Classique", icon: createIcon(Piano) },
  { id: "pop", name: "Pop & Disco", icon: createIcon(Radio) },
  { id: "folk", name: "Folk & Country", icon: createIcon(Mic) },
  { id: "other", name: "Autres genres", icon: createIcon(Music) },
];

// Define the music influence data for the chart
export const musicInfluenceData = [
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

// Timeline data for the evolution section
export const musicEvolution = [
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

// Contemporary subgenres for the grid section
export const contemporaryGenres = [
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

// Main featured genres with detailed content
export const mainGenres = [
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
        description: "Style extrême avec voix gutturales, guitares ultra-distordées et thèmes macabres.",
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
    image: "https://images.unsplash.com/photo-1652783447

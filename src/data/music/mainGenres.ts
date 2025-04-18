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
    image: "https://images.unsplash.com/photo-1652783447-image-of-metal-music",
    color: "bg-red-500/10",
    slug: "metal"
  }
];

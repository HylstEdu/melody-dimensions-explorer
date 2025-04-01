
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Book, Music, History, Globe, Search, Filter, Radio, Play } from "lucide-react";
import GenreSection, { GenreProps } from "@/components/music/GenreSection";

const CultureMusicale = () => {
  const [filterGenre, setFilterGenre] = useState<string | null>(null);
  
  // Catégories musicales principales
  const genreCategories = [
    { id: "all", name: "Tous les genres" },
    { id: "rock", name: "Rock" },
    { id: "electronic", name: "Électronique" },
    { id: "jazz", name: "Jazz & Blues" },
    { id: "hiphop", name: "Hip-Hop & Rap" },
    { id: "pop", name: "Pop" },
    { id: "metal", name: "Metal" },
    { id: "folk", name: "Folk & Traditionnel" },
    { id: "classical", name: "Classique" }
  ];
  
  // Données complètes sur les genres musicaux
  const musicGenres: GenreProps[] = [
    // ROCK
    {
      name: "Rock",
      slug: "rock",
      description: "Genre musical né dans les années 1950, caractérisé par une forte présence de guitare électrique, basse et batterie.",
      history: "Le rock est né aux États-Unis dans les années 1950, fusionnant des éléments du blues, du jazz et de la country. Initialement appelé rock 'n' roll avec des pionniers comme Chuck Berry et Elvis Presley, il s'est diversifié dans les années 1960-70 avec l'émergence de nombreux sous-genres, notamment via l'influence britannique des Beatles et des Rolling Stones. Depuis, le rock continue d'évoluer et d'influencer la culture populaire mondiale.",
      era: "Depuis les années 1950",
      keyArtists: [
        { name: "The Beatles", years: "1960-1970", description: "Groupe britannique révolutionnaire, à l'origine de nombreuses innovations musicales" },
        { name: "The Rolling Stones", years: "Depuis 1962", description: "L'un des groupes les plus durables et influents" },
        { name: "Led Zeppelin", years: "1968-1980", description: "Pionnier du hard rock et du rock psychédélique" },
        { name: "Queen", years: "1970-1991", description: "Connu pour ses harmonies vocales et son éclectisme musical" }
      ],
      characteristics: [
        "Instrumentation: guitare électrique, basse, batterie",
        "Structure classique couplet-refrain",
        "Importance du rythme et des riffs",
        "Performances scéniques énergiques",
        "Thèmes lyriques variés allant de l'amour à la rébellion"
      ],
      subgenres: [
        { name: "Rock Psychédélique", description: "Caractérisé par des sons distordus et des expériences sonores, influencé par les drogues psychédéliques", era: "Fin 1960s" },
        { name: "Hard Rock", description: "Version plus agressive et plus lourde du rock, avec des guitares distordues et un volume élevé", era: "Années 1970" },
        { name: "Rock Progressif", description: "Compositions complexes, longues, avec des influences classiques et jazz", era: "Années 1970" },
        { name: "Punk Rock", description: "Retour à un son brut, rapide, avec une attitude rebelle et anti-establishment", era: "Milieu 1970s" },
        { name: "New Wave", description: "Fusion du punk avec des éléments électroniques et pop, plus accessible", era: "Fin 1970s-1980s" },
        { name: "Grunge", description: "Son lourd influencé par le punk et le metal, originaire de Seattle", era: "Années 1990" },
        { name: "Britpop", description: "Renaissance du rock britannique, influencé par les années 1960", era: "Années 1990" },
        { name: "Rock Indépendant", description: "Éthique DIY, son alternatif éloigné des circuits commerciaux", era: "Depuis 1980s" }
      ],
      keyAlbums: [
        { title: "Sgt. Pepper's Lonely Hearts Club Band", artist: "The Beatles", year: "1967", link: "https://open.spotify.com/album/6QaVfG1pHYl1z15ZxkvVDW" },
        { title: "Dark Side of the Moon", artist: "Pink Floyd", year: "1973", link: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv" }
      ],
      influences: ["Punk Rock", "Grunge", "New Wave", "Hard Rock", "Metal"],
      influencedBy: ["Blues", "Jazz", "Country"],
      image: "/images/culture-musicale/rock.jpg",
      color: "bg-blue-100 dark:bg-blue-950/20"
    },
    // PUNK ROCK
    {
      name: "Punk Rock",
      slug: "punk-rock",
      description: "Genre caractérisé par sa simplicité musicale, son attitude rebelle et son rejet des conventions.",
      history: "Né au milieu des années 1970 en réaction au rock progressif jugé prétentieux et à la situation sociale difficile. Des groupes comme The Ramones aux États-Unis et Sex Pistols au Royaume-Uni ont établi l'esthétique punk avec des morceaux courts, rapides et directs. Le mouvement s'est rapidement associé à une contre-culture visuelle distinctive et à une philosophie DIY (Do It Yourself).",
      era: "Depuis le milieu des années 1970",
      keyArtists: [
        { name: "The Ramones", years: "1974-1996", description: "Pionniers américains avec leur style minimaliste" },
        { name: "Sex Pistols", years: "1975-1978", description: "Groupe britannique provocateur qui a popularisé le mouvement" },
        { name: "The Clash", years: "1976-1986", description: "Connu pour son engagement politique et ses fusions musicales" },
        { name: "Dead Kennedys", years: "1978-1986", description: "Groupe américain connu pour son activisme politique radical" }
      ],
      characteristics: [
        "Morceaux courts et rapides",
        "Instrumentation minimaliste et directe",
        "Son brut et peu produit",
        "Paroles souvent politiques ou provocatrices",
        "Attitude DIY (Do It Yourself)",
        "Rejet des conventions musicales établies"
      ],
      subgenres: [
        { name: "Hardcore Punk", description: "Version plus rapide, plus agressive et plus bruyante du punk", era: "Début 1980s" },
        { name: "Post-Punk", description: "Évolution expérimentale du punk, avec des structures plus complexes et diverses influences", era: "Fin 1970s-1980s" },
        { name: "Pop Punk", description: "Fusion du punk avec des éléments pop plus mélodiques et accessibles", era: "Années 1990-2000s" },
        { name: "Anarcho-Punk", description: "Fortement politisé avec des messages anarchistes et anti-establishment", era: "Années 1980" }
      ],
      influences: ["Hardcore", "Emo", "Grunge", "Alternative Rock"],
      influencedBy: ["Rock", "Garage Rock"],
      image: "/images/culture-musicale/punk.jpg",
      color: "bg-red-100 dark:bg-red-950/20"
    },
    // METAL
    {
      name: "Metal",
      slug: "metal",
      description: "Genre caractérisé par sa puissance sonore, ses guitares lourdes, sa rythmique intense et ses performances virtuoses.",
      history: "Le metal est apparu à la fin des années 1960 avec des groupes comme Black Sabbath qui ont développé un son plus sombre et plus lourd à partir du hard rock. Le genre s'est diversifié dans les années 1980 avec la New Wave of British Heavy Metal, puis a éclaté en nombreux sous-genres. Dans les années 1990-2000, le metal s'est encore fragmenté tout en gagnant une reconnaissance critique et culturelle plus large.",
      era: "Depuis la fin des années 1960",
      keyArtists: [
        { name: "Black Sabbath", years: "1968-2017", description: "Considéré comme le premier groupe de heavy metal" },
        { name: "Judas Priest", years: "Depuis 1969", description: "Pionnier du son et de l'esthétique metal" },
        { name: "Iron Maiden", years: "Depuis 1975", description: "Connu pour ses compositions épiques et ses performances live" },
        { name: "Metallica", years: "Depuis 1981", description: "L'un des groupes de metal les plus influents et commercialement réussis" }
      ],
      characteristics: [
        "Guitares distordues et puissantes",
        "Rythmiques intenses et souvent complexes",
        "Technicité instrumentale et virtuosité",
        "Voix variées (du chant clair aux growls)",
        "Thèmes lyriques souvent sombres ou fantastiques",
        "Volume sonore élevé et énergie intense"
      ],
      subgenres: [
        { name: "Heavy Metal", description: "Le style original, avec des riffs puissants et un chant clair", era: "Fin 1960s-1970s" },
        { name: "Thrash Metal", description: "Plus rapide et agressif, influence du punk hardcore", era: "Années 1980" },
        { name: "Death Metal", description: "Extrêmement lourd avec des voix gutturales et des thèmes macabres", era: "Années 1980-1990" },
        { name: "Black Metal", description: "Son brut, voix criées, atmosphères glaciales et thèmes occultes", era: "Années 1980-1990" },
        { name: "Power Metal", description: "Mélodique, épique, avec des thèmes fantastiques et mythologiques", era: "Années 1980-présent" },
        { name: "Doom Metal", description: "Lent, lourd, atmosphérique, avec des thèmes mélancoliques", era: "Années 1970-présent" },
        { name: "Progressive Metal", description: "Techniques complexes, structures non conventionnelles", era: "Années 1980-présent" },
        { name: "Nu Metal", description: "Fusion avec le rap et d'autres genres alternatifs", era: "Années 1990-2000s" }
      ],
      keyAlbums: [
        { title: "Master of Puppets", artist: "Metallica", year: "1986", link: "https://open.spotify.com/album/2Lq2qX3hYhiuPckC8Flj21" },
        { title: "Paranoid", artist: "Black Sabbath", year: "1970", link: "https://open.spotify.com/album/6r7LZXAVueS5DqdrvXJJK7" }
      ],
      influences: ["Extreme Metal", "Nu Metal", "Metalcore"],
      influencedBy: ["Hard Rock", "Blues Rock", "Classical Music"],
      image: "/images/culture-musicale/metal.jpg",
      color: "bg-gray-200 dark:bg-gray-900/40"
    },
    // JAZZ
    {
      name: "Jazz",
      slug: "jazz",
      description: "Genre musical né au début du XXe siècle, caractérisé par l'improvisation, le swing et l'expression personnelle.",
      history: "Le jazz est né à La Nouvelle-Orléans au début du XXe siècle, fruit de la rencontre des traditions musicales africaines et européennes. Il s'est développé à travers différentes phases: le New Orleans jazz, le swing des big bands des années 1930-40, le bebop révolutionnaire des années 1940-50, suivi par le cool jazz, le hard bop, le free jazz, et la fusion. Chaque période a apporté des innovations tout en préservant l'essence improvisatoire du jazz.",
      era: "Depuis le début du XXe siècle",
      keyArtists: [
        { name: "Louis Armstrong", years: "1901-1971", description: "Trompettiste et chanteur révolutionnaire du jazz ancien" },
        { name: "Duke Ellington", years: "1899-1974", description: "Compositeur et chef d'orchestre emblématique" },
        { name: "Charlie Parker", years: "1920-1955", description: "Saxophoniste, figure centrale du bebop" },
        { name: "Miles Davis", years: "1926-1991", description: "Trompettiste innovateur à travers plusieurs ères du jazz" },
        { name: "John Coltrane", years: "1926-1967", description: "Saxophoniste spirituel et expérimental" }
      ],
      characteristics: [
        "Improvisation centrale à la pratique",
        "Rythme syncopé et feeling du 'swing'",
        "Interaction spontanée entre musiciens",
        "Harmonie sophistiquée avec accords complexes",
        "Expression personnelle forte et individualité sonore",
        "Mélange d'influences culturelles diverses"
      ],
      subgenres: [
        { name: "New Orleans Jazz", description: "Le style originel avec des ensembles polyphoniques", era: "1910s-1920s" },
        { name: "Swing", description: "Jazz des big bands, dansant et populaire", era: "1930s-1940s" },
        { name: "Bebop", description: "Style rapide et virtuose, harmoniquement complexe", era: "1940s-1950s" },
        { name: "Cool Jazz", description: "Plus détendu et subtil que le bebop", era: "1950s-1960s" },
        { name: "Hard Bop", description: "Retour à des racines plus blues et gospel", era: "1950s-1960s" },
        { name: "Free Jazz", description: "Abandon des structures traditionnelles pour une liberté totale", era: "1960s-1970s" },
        { name: "Jazz Fusion", description: "Mélange du jazz avec le rock et autres genres", era: "1970s-présent" },
        { name: "Jazz contemporain", description: "Intégration d'éléments modernes et d'influences mondiales", era: "1980s-présent" }
      ],
      keyAlbums: [
        { title: "Kind of Blue", artist: "Miles Davis", year: "1959", link: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA" },
        { title: "A Love Supreme", artist: "John Coltrane", year: "1965", link: "https://open.spotify.com/album/7Eoz7hJvaX1eFkbpQxC5PA" }
      ],
      influences: ["R&B", "Soul", "Funk", "Hip-Hop"],
      influencedBy: ["Blues", "Ragtime", "Musiques africaines et européennes"],
      image: "/images/culture-musicale/jazz.jpg",
      color: "bg-amber-100 dark:bg-amber-950/20"
    },
    // BLUES
    {
      name: "Blues",
      slug: "blues",
      description: "Genre musical né à la fin du XIXe siècle dans les communautés afro-américaines du Sud des États-Unis, exprimant la mélancolie et les difficultés de la vie.",
      history: "Le blues trouve ses racines dans les chants de travail, les field hollers et les spirituals des esclaves afro-américains. Il s'est formalisé à la fin du XIXe siècle dans le Sud des États-Unis. D'abord rural et acoustique (Delta blues), il a migré vers le Nord avec la Grande Migration et s'est électrifié dans les villes comme Chicago dans les années 1940-50. Le blues a été fondamental dans le développement du jazz, du rhythm and blues, du rock 'n' roll et de la pop moderne.",
      era: "Depuis la fin du XIXe siècle",
      keyArtists: [
        { name: "Robert Johnson", years: "1911-1938", description: "Figure légendaire du Delta blues" },
        { name: "Muddy Waters", years: "1913-1983", description: "Pionnier du Chicago blues électrique" },
        { name: "B.B. King", years: "1925-2015", description: "Influent guitariste connu pour son phrasé expressif" },
        { name: "Bessie Smith", years: "1894-1937", description: "L'impératrice du blues, chanteuse emblématique" }
      ],
      characteristics: [
        "Structure AAB (répétition d'une ligne suivie d'une conclusion)",
        "Gamme blues avec 'blue notes' (3e et 7e bémolisées)",
        "Expression vocale émotive et personnelle",
        "Call and response (appel et réponse) entre voix et instrument",
        "Rythmes shuffle caractéristiques",
        "Thèmes lyriques reflétant les difficultés personnelles et sociales"
      ],
      subgenres: [
        { name: "Delta Blues", description: "Style rural acoustique originaire du delta du Mississippi", era: "1920s-1940s" },
        { name: "Chicago Blues", description: "Version électrifiée et urbaine du blues", era: "1940s-1960s" },
        { name: "Jump Blues", description: "Style énergique précurseur du R&B, avec cuivres", era: "1940s" },
        { name: "Texas Blues", description: "Style influencé par le country, avec guitare single-note proéminente", era: "1950s-présent" },
        { name: "British Blues", description: "Interprétation britannique du blues américain", era: "1960s" },
        { name: "Blues Rock", description: "Fusion du blues traditionnel avec le rock", era: "1960s-présent" }
      ],
      keyAlbums: [
        { title: "The Complete Recordings", artist: "Robert Johnson", year: "1936-1937", link: "https://open.spotify.com/album/3JlvRjvj3GcyFk9R2Qj2Wf" },
        { title: "Live at the Regal", artist: "B.B. King", year: "1965", link: "https://open.spotify.com/album/27mIh7NSsM7NKyS76UpEs7" }
      ],
      influences: ["Jazz", "Rock", "R&B", "Soul", "Country"],
      influencedBy: ["Work Songs", "Field Hollers", "Spirituals"],
      image: "/images/culture-musicale/blues.jpg",
      color: "bg-indigo-100 dark:bg-indigo-950/20"
    },
    // ÉLECTRONIQUE
    {
      name: "Musique Électronique",
      slug: "electronic",
      description: "Genre musical qui utilise principalement des instruments électroniques et des technologies numériques pour la production sonore.",
      history: "La musique électronique a émergé dans les laboratoires expérimentaux du début du XXe siècle, mais s'est développée significativement avec l'invention du synthétiseur dans les années 1960. Les années 1970 ont vu l'émergence de pionniers comme Kraftwerk, tandis que les années 1980 ont popularisé la musique électronique avec le synth-pop. Les années 1990 ont été marquées par l'explosion des raves et de la culture club, et depuis les années 2000, la musique électronique s'est diversifiée en d'innombrables sous-genres tout en s'intégrant pleinement à la musique populaire.",
      era: "Depuis les années 1950",
      keyArtists: [
        { name: "Kraftwerk", years: "Depuis 1970", description: "Groupe allemand pionnier de la musique électronique moderne" },
        { name: "Daft Punk", years: "1993-2021", description: "Duo français emblématique ayant popularisé la house et l'électro" },
        { name: "Aphex Twin", years: "Depuis 1991", description: "Artiste britannique innovateur en musique électronique expérimentale" },
        { name: "Jean-Michel Jarre", years: "Depuis 1971", description: "Compositeur français connu pour ses spectacles monumentaux" }
      ],
      characteristics: [
        "Production sonore via des moyens électroniques",
        "Utilisation de synthétiseurs, boîtes à rythmes, ordinateurs",
        "Importance du rythme répétitif et de la structure",
        "Manipulation sonore et expérimentation",
        "Souvent orientée vers la danse et l'expérience collective",
        "Evolution constante avec les technologies"
      ],
      subgenres: [
        { name: "Techno", description: "Genre rythmique né à Detroit, caractérisé par des beats répétitifs", era: "Années 1980-présent" },
        { name: "House", description: "Genre né à Chicago, plus mélodique que la techno avec influences disco", era: "Années 1980-présent" },
        { name: "Trance", description: "Caractérisée par des mélodies entraînantes et un tempo entre 125-150 BPM", era: "Années 1990-présent" },
        { name: "Drum and Bass", description: "Tempo rapide (160-180 BPM) avec basses profondes et breaks complexes", era: "Années 1990-présent" },
        { name: "Ambient", description: "Atmosphérique, sans rythme défini, centrée sur la texture sonore", era: "Années 1970-présent" },
        { name: "Dubstep", description: "Caractérisé par des basses lourdes et un rythme syncopé", era: "Début 2000s-présent" },
        { name: "IDM", description: "Musique électronique complexe et expérimentale", era: "Années 1990-présent" },
        { name: "Synthwave", description: "Inspirée des bandes sonores des années 1980, très mélodique", era: "Années 2000-présent" }
      ],
      keyAlbums: [
        { title: "Trans-Europe Express", artist: "Kraftwerk", year: "1977", link: "https://open.spotify.com/album/0eIpZTscvGOWGECinder" },
        { title: "Discovery", artist: "Daft Punk", year: "2001", link: "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc" }
      ],
      influences: ["Pop électronique", "EDM", "Dubstep", "Trip-Hop"],
      influencedBy: ["Musique concrète", "Musique expérimentale"],
      image: "/images/culture-musicale/electronic.jpg",
      color: "bg-cyan-100 dark:bg-cyan-950/20"
    },
    // HIP-HOP
    {
      name: "Hip-Hop",
      slug: "hip-hop",
      description: "Culture et genre musical né dans le Bronx (New York) dans les années 1970, initialement caractérisé par quatre éléments: le rap (MCing), le DJing, le breakdance et le graffiti.",
      history: "Le hip-hop est né dans le South Bronx à New York à la fin des années 1970, lors de block parties où des DJ comme Kool Herc isolaient les breaks de funk et de soul. Le rap s'est développé comme une forme d'expression sur ces beats. Dans les années 1980-90, le genre s'est diversifié avec des styles comme le gangsta rap et des innovations comme les samples. Depuis les années 2000, le hip-hop est devenu le genre musical le plus populaire mondialement, influençant tous les aspects de la culture populaire contemporaine.",
      era: "Depuis la fin des années 1970",
      keyArtists: [
        { name: "Grandmaster Flash", years: "Depuis les années 1970", description: "DJ pionnier qui a développé des techniques fondamentales" },
        { name: "Run-DMC", years: "1981-2002", description: "Groupe qui a popularisé le hip-hop mainstream" },
        { name: "Tupac Shakur", years: "1991-1996", description: "Rappeur emblématique connu pour ses textes poétiques et engagés" },
        { name: "The Notorious B.I.G.", years: "1992-1997", description: "Figure majeure du hip-hop de la côte Est" },
        { name: "Jay-Z", years: "Depuis 1996", description: "Rappeur devenu homme d'affaires et producteur influent" }
      ],
      characteristics: [
        "Rythmes échantillonnés ou programmés",
        "Paroles rappées plutôt que chantées",
        "Utilisation de samples d'autres morceaux",
        "Battements réguliers et basses profondes",
        "Importance du flow et du rythme dans la délivrance vocale",
        "Contenu lyrique allant de l'autobiographie au commentaire social"
      ],
      subgenres: [
        { name: "Old School Hip-Hop", description: "Le style original des années 1970-80", era: "1970s-1980s" },
        { name: "Gangsta Rap", description: "Centré sur la vie dans les quartiers difficiles et la criminalité", era: "Fin 1980s-1990s" },
        { name: "Conscious Hip-Hop", description: "Axé sur des messages sociaux et politiques", era: "1980s-présent" },
        { name: "Trap", description: "Rythmiques complexes de hi-hat, basses lourdes et thèmes liés à la vie de rue", era: "2000s-présent" },
        { name: "Alternative Hip-Hop", description: "Fusion avec d'autres genres et approches expérimentales", era: "1990s-présent" },
        { name: "Drill", description: "Style sombre originaire de Chicago avec paroles crues", era: "2010s-présent" },
        { name: "Cloud Rap", description: "Production atmosphérique et éthérée", era: "2010s-présent" }
      ],
      keyAlbums: [
        { title: "Illmatic", artist: "Nas", year: "1994", link: "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wioob1" },
        { title: "To Pimp a Butterfly", artist: "Kendrick Lamar", year: "2015", link: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP" }
      ],
      influences: ["Trap", "Grime", "R&B contemporain"],
      influencedBy: ["Funk", "Soul", "Jamaican Sound System Culture"],
      image: "/images/culture-musicale/hiphop.jpg",
      color: "bg-orange-100 dark:bg-orange-950/20"
    },
    // POP
    {
      name: "Pop",
      slug: "pop",
      description: "Genre caractérisé par son accessibilité, ses mélodies accrocheuses et son orientation vers le grand public.",
      history: "La musique pop moderne a émergé dans les années 1950 avec le rock 'n' roll, mais s'est véritablement définie comme genre distinct dans les années 1960. Des artistes comme The Beatles ont créé le modèle du groupe pop, tandis que les années 1970-80 ont vu l'émergence de la pop disco et synthétique. Les années 1990-2000 ont été dominées par des artistes pop manufacturés et des boys/girls bands, tandis que les années 2010 ont vu la pop fusionner avec l'électronique, le R&B et le hip-hop. La pop reste le genre le plus commercialement viable, constamment en évolution pour refléter les goûts contemporains.",
      era: "Depuis les années 1950",
      keyArtists: [
        { name: "Michael Jackson", years: "1964-2009", description: "Le 'Roi de la Pop', artiste le plus vendu de tous les temps" },
        { name: "Madonna", years: "Depuis 1982", description: "La 'Reine de la Pop', connue pour ses réinventions constantes" },
        { name: "ABBA", years: "1972-1982, 2021-présent", description: "Groupe suédois emblématique de la pop des années 1970" },
        { name: "Taylor Swift", years: "Depuis 2006", description: "Artiste contemporaine ayant évolué de la country à la pop mainstream" }
      ],
      characteristics: [
        "Mélodies accrocheuses et faciles à retenir",
        "Structures simples (couplet-refrain-couplet-refrain)",
        "Production soignée et raffinée",
        "Durée des morceaux généralement autour de 3-4 minutes",
        "Accent sur la voix et la personnalité de l'artiste",
        "Adaptabilité aux tendances musicales contemporaines"
      ],
      subgenres: [
        { name: "Bubblegum Pop", description: "Pop légère et insouciante ciblant un public jeune", era: "Années 1960-1970" },
        { name: "Dance Pop", description: "Pop orientée vers la danse avec des rythmes électroniques", era: "Années 1980-présent" },
        { name: "Teen Pop", description: "Ciblant spécifiquement les adolescents", era: "Années 1990-2000s" },
        { name: "Synth Pop", description: "Utilisation prédominante de synthétiseurs", era: "Années 1980-présent" },
        { name: "Indie Pop", description: "Pop alternative avec une sensibilité indépendante", era: "Années 1990-présent" },
        { name: "K-Pop", description: "Pop sud-coréenne, souvent en groupes avec chorégraphies élaborées", era: "Années 2000-présent" }
      ],
      keyAlbums: [
        { title: "Thriller", artist: "Michael Jackson", year: "1982", link: "https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ" },
        { title: "1989", artist: "Taylor Swift", year: "2014", link: "https://open.spotify.com/album/5fy0X0JmZRZnVa2UEicmSp" }
      ],
      influences: ["Dance Pop", "Électro-Pop", "K-Pop", "Latin Pop"],
      influencedBy: ["Rock 'n' Roll", "R&B", "Disco"],
      image: "/images/culture-musicale/pop.jpg",
      color: "bg-pink-100 dark:bg-pink-950/20"
    },
    // FOLK & TRADITIONNEL
    {
      name: "Folk & Musiques Traditionnelles",
      slug: "folk",
      description: "Musiques transmises par tradition orale, représentant l'identité culturelle des communautés et régions du monde.",
      history: "Les musiques folk et traditionnelles existent depuis que les humains font de la musique, mais le concept moderne de 'folk' comme genre s'est cristallisé au XIXe siècle avec la collecte et la préservation des traditions orales. Le folk revival américain des années 1930-40 a remis en lumière ces musiques, suivi par le revival des années 1960 avec des artistes comme Bob Dylan. Depuis, le folk a connu des fusions avec le rock (folk rock) et d'autres genres, tout en préservant sa connexion aux racines culturelles et à l'authenticité.",
      era: "Depuis des siècles, revival moderne depuis les années 1930",
      keyArtists: [
        { name: "Woody Guthrie", years: "1912-1967", description: "Figure emblématique du folk américain et de la protest song" },
        { name: "Bob Dylan", years: "Depuis 1961", description: "Révolutionnaire du folk, lauréat du prix Nobel de littérature" },
        { name: "Joan Baez", years: "Depuis 1959", description: "Chanteuse engagée du folk revival des années 1960" },
        { name: "Fairport Convention", years: "Depuis 1967", description: "Pionniers du folk rock britannique" }
      ],
      characteristics: [
        "Instruments acoustiques traditionnels",
        "Transmission souvent orale avant d'être écrite",
        "Récits narratifs et ballades",
        "Connexion forte à l'identité culturelle et régionale",
        "Simplicité structurelle accessible aux amateurs",
        "Thèmes liés à la vie quotidienne, l'histoire et les traditions"
      ],
      subgenres: [
        { name: "Folk américain", description: "Traditions des États-Unis, influencé par les musiques européennes et africaines", era: "19e siècle-présent" },
        { name: "Folk britannique", description: "Traditions des îles britanniques, avec ballades anciennes et musique celtique", era: "Traditionnel-présent" },
        { name: "Folk Rock", description: "Fusion du folk avec l'instrumentation et l'énergie du rock", era: "Années 1960-présent" },
        { name: "Contemporary Folk", description: "Folk moderne avec influences de pop et d'autres genres", era: "Années 1980-présent" },
        { name: "World Folk", description: "Traditions folkloriques du monde entier", era: "Traditionnel-présent" },
        { name: "Anti-folk", description: "Approche punk et subversive du folk", era: "Années 1980-présent" }
      ],
      keyAlbums: [
        { title: "The Freewheelin' Bob Dylan", artist: "Bob Dylan", year: "1963", link: "https://open.spotify.com/album/0o1uFxZ1VTviqvNaYkTJek" },
        { title: "Blue", artist: "Joni Mitchell", year: "1971", link: "https://open.spotify.com/album/1vz94WpXDVYIEGja8cjFNa" }
      ],
      influences: ["Folk Rock", "Americana", "Singer-Songwriter"],
      influencedBy: ["Traditions orales", "Musiques ethniques"],
      image: "/images/culture-musicale/folk.jpg",
      color: "bg-emerald-100 dark:bg-emerald-950/20"
    },
    // CLASSIQUE
    {
      name: "Musique Classique",
      slug: "classical",
      description: "Tradition musicale occidentale savante s'étendant du Moyen Âge à nos jours, caractérisée par sa complexité compositionnelle et son interprétation formelle.",
      history: "La musique classique occidentale s'est développée sur plus d'un millénaire, commençant par le chant grégorien médiéval, évoluant vers la polyphonie de la Renaissance, puis le baroque avec Bach et Vivaldi. La période classique (Mozart, Beethoven) a standardisé les formes musicales, suivie par l'expressivité romantique du 19e siècle. Le 20e siècle a vu des innovations radicales avec l'atonalité et le sérialisme, tandis que la musique classique contemporaine intègre des influences diverses tout en maintenant un lien avec sa tradition riche.",
      era: "Moyen Âge à aujourd'hui",
      keyArtists: [
        { name: "Johann Sebastian Bach", years: "1685-1750", description: "Maître baroque du contrepoint et de la fugue" },
        { name: "Wolfgang Amadeus Mozart", years: "1756-1791", description: "Génie de la période classique" },
        { name: "Ludwig van Beethoven", years: "1770-1827", description: "Révolutionnaire entre classicisme et romantisme" },
        { name: "Igor Stravinsky", years: "1882-1971", description: "Compositeur majeur du 20e siècle" }
      ],
      characteristics: [
        "Notation musicale précise et complexe",
        "Interprétation par des orchestres, ensembles ou solistes formés",
        "Structures formelles développées (sonate, symphonie, concerto)",
        "Développement thématique et harmonie sophistiquée",
        "Absence d'amplification électronique (traditionnellement)",
        "Grande diversité stylistique selon les périodes historiques"
      ],
      subgenres: [
        { name: "Musique Médiévale", description: "Du chant grégorien à l'Ars Nova", era: "500-1400" },
        { name: "Renaissance", description: "Développement de la polyphonie vocale", era: "1400-1600" },
        { name: "Baroque", description: "Ornementation et contrepoint complexe", era: "1600-1750" },
        { name: "Classicisme", description: "Clarté, équilibre et structures formelles", era: "1750-1820" },
        { name: "Romantisme", description: "Expression émotionnelle et nationalisme", era: "1800-1910" },
        { name: "Modernisme", description: "Innovations harmoniques radicales et atonalité", era: "1890-1975" },
        { name: "Contemporain", description: "Éclectisme stylistique et nouvelles approches", era: "1945-présent" }
      ],
      keyAlbums: [
        { title: "Les Quatre Saisons", artist: "Antonio Vivaldi", year: "1725", link: "https://open.spotify.com/album/2fmTTbGkNuo6g7xGUdrAIu" },
        { title: "Requiem en Ré mineur", artist: "Wolfgang Amadeus Mozart", year: "1791", link: "https://open.spotify.com/album/10ETAyfGYc1dYnWTkf4vqV" }
      ],
      influences: ["Musique de film", "Progressive Rock", "Ambient"],
      influencedBy: ["Chant grégorien", "Musiques folkloriques européennes"],
      image: "/images/culture-musicale/classical.jpg",
      color: "bg-purple-100 dark:bg-purple-950/20"
    }
  ];
  
  // Filtrer les genres en fonction de la catégorie sélectionnée
  const filteredGenres = filterGenre && filterGenre !== 'all' 
    ? musicGenres.filter(genre => genre.slug === filterGenre || genre.slug.includes(filterGenre))
    : musicGenres;

  return (
    <div className="container py-10">
      <div className="mb-10">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'accueil
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">Culture Musicale</h1>
        <p className="text-lg text-muted-foreground">
          Explorez l'histoire, les genres et les influences de la musique à travers les âges et les cultures.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <Card className="md:w-2/3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-primary" />
              Encyclopédie des genres musicaux
            </CardTitle>
            <CardDescription>
              Notre guide complet pour comprendre l'évolution et la diversité des genres musicaux à travers le monde.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              La musique, dans toute sa diversité, représente un miroir de l'évolution des sociétés humaines. 
              Chaque genre musical raconte une histoire unique, née de contextes culturels spécifiques mais souvent 
              enrichie par des influences croisées et des fusions créatives. De la musique classique occidentale aux 
              traditions folkloriques mondiales, du rock révolutionnaire aux innovations électroniques, cette encyclopédie 
              vous invite à explorer la richesse du patrimoine musical mondial.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {genreCategories.map((category) => (
                <Button 
                  key={category.id}
                  variant={filterGenre === category.id ? "default" : "outline"}
                  onClick={() => setFilterGenre(category.id === 'all' ? null : category.id)}
                  className="flex items-center gap-2"
                >
                  {category.id === 'all' ? (
                    <Globe className="h-4 w-4" />
                  ) : (
                    <Music className="h-4 w-4" />
                  )}
                  {category.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="md:w-1/3 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Radio className="h-5 w-5 text-primary" />
              Explorer par le son
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              La meilleure façon de comprendre un genre musical est de l'écouter. Découvrez notre sélection d'œuvres emblématiques.
            </p>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a 
                  href="https://open.spotify.com/playlist/37i9dQZF1DXdLEN7aqioXM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Histoire du Rock
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a 
                  href="https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Exploration Jazz
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a 
                  href="https://open.spotify.com/playlist/37i9dQZF1DX10zKzsJ2jva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Évolution Électronique
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a 
                  href="https://open.spotify.com/playlist/37i9dQZF1DX82GYcclJ3Ug" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Hip-Hop Classiques
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Music className="h-5 w-5 text-primary" />
            Genres Musicaux
            {filterGenre && filterGenre !== 'all' && (
              <Badge variant="outline" className="ml-2">
                Filtré: {genreCategories.find(c => c.id === filterGenre)?.name}
              </Badge>
            )}
          </h2>
          {filterGenre && (
            <Button variant="ghost" size="sm" onClick={() => setFilterGenre(null)} className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              Effacer le filtre
            </Button>
          )}
        </div>
        
        <div className="space-y-4">
          {filteredGenres.length > 0 ? (
            filteredGenres.map((genre, index) => (
              <GenreSection key={index} {...genre} />
            ))
          ) : (
            <div className="text-center py-12">
              <Music className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <h3 className="text-xl font-semibold">Aucun genre musical trouvé</h3>
              <p className="text-muted-foreground mt-2">Veuillez sélectionner une autre catégorie</p>
            </div>
          )}
        </div>
      </div>
      
      <Separator className="my-10" />
      
      <div className="bg-gradient-to-r from-muted/50 to-background p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Comprendre les influences musicales</h2>
        <p className="text-lg text-muted-foreground mb-6">
          La musique est un art en constante évolution où les genres s'influencent mutuellement, 
          créant de nouvelles formes d'expression. Explorez comment les différents styles musicaux 
          s'interconnectent et se transforment au fil du temps.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Fusions et Évolutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les genres musicaux ne sont jamais statiques. Ils évoluent constamment à travers les fusions, 
                expérimentations et réinterprétations. Des genres comme le jazz-rock, l'électro-swing ou le folk-tronica 
                témoignent de cette richesse créative née du mélange des traditions.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contextes Sociopolitiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                De nombreux genres musicaux sont nés en réponse à des conditions sociales ou politiques spécifiques. 
                Le punk a émergé comme réaction au conservatisme des années 1970, tandis que le hip-hop s'est développé 
                comme expression des communautés marginalisées des centres urbains américains.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Révolutions Technologiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Les avancées technologiques transforment profondément la création musicale. L'invention de la guitare 
                électrique a ouvert la voie au rock, tandis que les synthétiseurs et ordinateurs ont révolutionné la 
                production sonore, donnant naissance à d'innombrables genres électroniques.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <Button asChild>
            <Link to="/actualite" className="flex items-center gap-2">
              Découvrir les dernières actualités musicales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CultureMusicale;


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, HelpCircle, History, Music, NotebookPen, FileText, Layers, Globe, Headphones, ArrowLeft, Play, ExternalLink } from "lucide-react";

import GenreGridSection from "@/components/music/GenreGridSection";
import MusicalPeriodTab from "@/components/music/MusicalPeriodTab";
import MusicInfluenceChart from "@/components/music/MusicInfluenceChart";
import TimelineCard from "@/components/music/TimelineCard";

const CultureMusicale = () => {
  const classicalGenres = [
    {
      name: "Musique Baroque",
      description: "Caractérisée par l'ornementation et la complexité contrapuntique",
      timeframe: "1600-1750",
      artists: ["Johann Sebastian Bach", "Antonio Vivaldi", "Georg Friedrich Händel"],
      keyCharacteristics: [
        "Utilisation extensive du contrepoint",
        "Ornementation riche",
        "Basse continue",
        "Contrastes dynamiques"
      ],
      instruments: ["Clavecin", "Viole de gambe", "Orgue", "Violon baroque"],
      subgenres: ["Opéra baroque", "Cantate", "Concerto grosso", "Suite"]
    },
    {
      name: "Période Classique",
      description: "Clarté structurelle et équilibre formel",
      timeframe: "1750-1820",
      artists: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Joseph Haydn"],
      keyCharacteristics: [
        "Formes sonate et rondo",
        "Mélodies équilibrées",
        "Harmonie tonale claire",
        "Orchestration standardisée"
      ],
      instruments: ["Piano", "Quatuor à cordes", "Orchestre symphonique"],
      subgenres: ["Symphonie classique", "Concerto", "Opéra buffa", "Musique de chambre"]
    },
    {
      name: "Musique Sacrée",
      description: "Œuvres vocales et instrumentales destinées au culte",
      timeframe: "Toutes périodes",
      artists: ["Giovanni Pierluigi da Palestrina", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart"],
      keyCharacteristics: [
        "Textes liturgiques",
        "Polyphonie vocale",
        "Utilisation de l'orgue",
        "Atmosphère spirituelle"
      ],
      instruments: ["Voix", "Orgue", "Ensemble vocal", "Instruments baroques"],
      subgenres: ["Messe", "Requiem", "Motet", "Cantique"]
    }
  ];

  const romanticGenres = [
    {
      name: "Romantisme précoce",
      description: "Exaltation des émotions et individualisme",
      timeframe: "1800-1850",
      artists: ["Franz Schubert", "Frédéric Chopin", "Robert Schumann"],
      keyCharacteristics: [
        "Expressivité émotionnelle",
        "Formes libres",
        "Lyrisme mélodique",
        "Colorations harmoniques riches"
      ],
      instruments: ["Piano", "Orchestre symphonique", "Voix lyrique", "Violon"],
      subgenres: ["Lied", "Nocturne", "Étude", "Ballade"]
    },
    {
      name: "Romantisme tardif",
      description: "Grandiose et complexité accrue",
      timeframe: "1850-1910",
      artists: ["Johannes Brahms", "Richard Wagner", "Gustav Mahler"],
      keyCharacteristics: [
        "Développement thématique complexe",
        "Harmonies chromatiques",
        "Orchestration massive",
        "Durées étendues"
      ],
      instruments: ["Orchestre symphonique", "Opéra", "Piano"],
      subgenres: ["Symphonie", "Poème symphonique", "Opéra wagnérien"]
    },
    {
      name: "Nationalisme musical",
      description: "Inspiration du folklore et de l'identité nationale",
      timeframe: "1840-1930",
      artists: ["Bedřich Smetana", "Antonín Dvořák", "Edvard Grieg"],
      keyCharacteristics: [
        "Mélodies folkloriques",
        "Rythmes nationaux",
        "Thèmes patriotiques",
        "Harmonies modales"
      ],
      instruments: ["Orchestre symphonique", "Instruments traditionnels"],
      subgenres: ["Poème symphonique nationaliste", "Opéra national", "Danses folkloriques"]
    }
  ];

  const modernGenres = [
    {
      name: "Impressionnisme",
      description: "Évocation d'atmosphères et de sensations",
      timeframe: "1875-1925",
      artists: ["Claude Debussy", "Maurice Ravel", "Erik Satie"],
      keyCharacteristics: [
        "Harmonies non fonctionnelles",
        "Timbres évocateurs",
        "Inspiration extra-musicale",
        "Rythmes fluides"
      ],
      instruments: ["Piano", "Harpe", "Instruments à vent", "Orchestre coloré"],
      subgenres: ["Préludes impressionnistes", "Poèmes symphoniques", "Ballets"]
    },
    {
      name: "Expressionnisme",
      description: "Distorsion émotionnelle et atonalité",
      timeframe: "1908-1930",
      artists: ["Arnold Schoenberg", "Alban Berg", "Anton Webern"],
      keyCharacteristics: [
        "Atonalité",
        "Dissonance",
        "Expression intense",
        "Formes brèves"
      ],
      instruments: ["Ensembles de chambre", "Voix", "Orchestre"],
      subgenres: ["Opéra expressionniste", "Lied", "Pièces pour piano"]
    },
    {
      name: "Néo-classicisme",
      description: "Retour aux formes et esthétiques classiques",
      timeframe: "1920-1950",
      artists: ["Igor Stravinsky", "Paul Hindemith", "Serge Prokofiev"],
      keyCharacteristics: [
        "Tonalité élargie",
        "Formes classiques revisitées",
        "Objectivité",
        "Clarté rythmique"
      ],
      instruments: ["Orchestre", "Ensembles de chambre", "Piano"],
      subgenres: ["Symphonie néo-classique", "Concerto", "Opéra"]
    }
  ];

  const contemporaryGenres = [
    {
      name: "Musique sérielle",
      description: "Organisation mathématique des paramètres sonores",
      timeframe: "1950-présent",
      artists: ["Pierre Boulez", "Karlheinz Stockhausen", "Milton Babbitt"],
      keyCharacteristics: [
        "Sérialisme intégral",
        "Structures mathématiques",
        "Dissonances contrôlées",
        "Complexité rythmique"
      ],
      instruments: ["Ensembles mixtes", "Électronique", "Percussion", "Instruments préparés"],
      subgenres: ["Musique stochastique", "Musique spectrale", "Post-sérialisme"]
    },
    {
      name: "Musique concrète",
      description: "Utilisation de sons enregistrés comme matériau musical",
      timeframe: "1948-présent",
      artists: ["Pierre Schaeffer", "Pierre Henry", "Bernard Parmegiani"],
      keyCharacteristics: [
        "Sons concrets transformés",
        "Collages sonores",
        "Absence de notation traditionnelle",
        "Spatialisation du son"
      ],
      instruments: ["Bandes magnétiques", "Haut-parleurs", "Ordinateurs"],
      subgenres: ["Acousmatique", "Musique mixte", "Création radiophonique"]
    },
    {
      name: "Minimalisme",
      description: "Répétition de motifs simples avec variations progressives",
      timeframe: "1960-présent",
      artists: ["Steve Reich", "Philip Glass", "Terry Riley"],
      keyCharacteristics: [
        "Répétition",
        "Processus",
        "Tonalité simple",
        "Pulsation régulière"
      ],
      instruments: ["Ensembles instrumentaux", "Voix", "Électronique"],
      subgenres: ["Phase music", "Process music", "Post-minimalisme"]
    }
  ];

  const genreInfluences = [
    { 
      id: "baroque", 
      name: "Baroque",
      description: "1600-1750",
      color: "#8B5CF6"
    },
    { 
      id: "classical", 
      name: "Classique",
      description: "1750-1820",
      color: "#EC4899",
      influences: ["baroque"]
    },
    { 
      id: "romantic", 
      name: "Romantisme",
      description: "1800-1910",
      color: "#10B981",
      influences: ["classical"]
    },
    { 
      id: "modern", 
      name: "Moderne",
      description: "1890-1975",
      color: "#F59E0B",
      influences: ["romantic", "baroque"]
    },
    { 
      id: "contemporary", 
      name: "Contemporain",
      description: "1945-présent",
      color: "#3B82F6",
      influences: ["modern"]
    }
  ];

  const listeningRecommendations = [
    {
      title: "Bach - Toccata et Fugue en ré mineur",
      period: "Musique Baroque",
      link: "https://www.youtube.com/watch?v=ho9rZjlsyYY"
    },
    {
      title: "Mozart - Symphonie n°40",
      period: "Musique Classique",
      link: "https://www.youtube.com/watch?v=JTc1mDieQI8"
    },
    {
      title: "Beethoven - Symphonie n°5",
      period: "Musique Romantique",
      link: "https://www.youtube.com/watch?v=fOk8Tm815lE"
    },
    {
      title: "Debussy - Clair de lune",
      period: "Impressionnisme",
      link: "https://www.youtube.com/watch?v=WNcsUNKlAKw"
    },
    {
      title: "Stravinsky - Le Sacre du printemps",
      period: "Modernisme",
      link: "https://www.youtube.com/watch?v=EkwqPJZe8ms"
    }
  ];

  const musicResources = [
    {
      title: "IRCAM - Centre Pompidou",
      description: "Institut de recherche et coordination acoustique/musique",
      link: "https://www.ircam.fr/"
    },
    {
      title: "Philharmonie de Paris",
      description: "Ressources musicales, concerts et expositions",
      link: "https://philharmoniedeparis.fr/"
    },
    {
      title: "Musicologie.org",
      description: "Encyclopédie et ressources de musicologie",
      link: "https://www.musicologie.org/"
    },
    {
      title: "Grove Music Online",
      description: "Encyclopédie de référence sur la musique",
      link: "https://www.oxfordmusiconline.com/"
    }
  ];

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
          Explorez l'histoire de la musique à travers les âges, des origines à nos jours.
        </p>
      </div>

      <Tabs defaultValue="classical" className="mb-10">
        <TabsList className="mb-4 flex flex-wrap">
          <TabsTrigger value="classical">Musique Classique</TabsTrigger>
          <TabsTrigger value="romantic">Musique Romantique</TabsTrigger>
          <TabsTrigger value="modern">Musique Moderne</TabsTrigger>
          <TabsTrigger value="contemporary">Musique Contemporaine</TabsTrigger>
          <TabsTrigger value="world">Musiques du Monde</TabsTrigger>
        </TabsList>

        <MusicalPeriodTab
          value="classical"
          title="Musique Classique"
          description="La musique classique couvre une vaste période allant du baroque au début du XXe siècle, caractérisée par des formes structurées et une esthétique raffinée."
          timelineEvents={[
            { year: "1600", title: "Début de la période baroque", description: "Émergence de l'opéra et développement du style concertant.", icon: <History className="h-5 w-5" /> },
            { year: "1750", title: "Mort de Jean-Sébastien Bach", description: "Fin de la période baroque et transition vers le classicisme.", icon: <History className="h-5 w-5" /> },
            { year: "1770", title: "Premières œuvres de Mozart", description: "Développement du classicisme viennois.", icon: <History className="h-5 w-5" /> },
            { year: "1820", title: "Fin de la période classique", description: "Début du romantisme musical.", icon: <History className="h-5 w-5" /> },
          ]}
          genres={[
            {
              title: "Musique Baroque",
              description: "Caractérisée par l'ornementation et la complexité contrapuntique",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/baroque.jpg",
              linkUrl: "/genres/baroque",
              characteristics: [
                { title: "Contrepoint", description: "Technique d'écriture où plusieurs mélodies indépendantes se combinent harmonieusement." },
                { title: "Basse continue", description: "Ligne de basse continue soutenant l'harmonie, souvent jouée par le clavecin et la viole de gambe." },
                { title: "Ornementation", description: "Utilisation de trilles, de gruppetto et d'autres ornements pour embellir la mélodie." },
              ],
              artists: [
                { name: "Johann Sebastian Bach", description: "Maître du baroque, connu pour ses œuvres pour orgue, ses cantates et ses concertos." },
                { name: "Antonio Vivaldi", description: "Compositeur virtuose, célèbre pour ses concertos pour violon, notamment Les Quatre Saisons." },
                { name: "Georg Friedrich Händel", description: "Compositeur d'opéras et d'oratorios, dont le Messie." },
              ],
              timeframe: "1600-1750",
            },
            {
              title: "Période Classique",
              description: "Clarté structurelle et équilibre formel",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/classique.jpg",
              linkUrl: "/genres/classique",
              characteristics: [
                { title: "Forme sonate", description: "Structure en trois parties : exposition, développement et récapitulation." },
                { title: "Mélodie", description: "Mélodies claires et équilibrées, souvent accompagnées d'une harmonie simple." },
                { title: "Orchestration", description: "Utilisation standardisée de l'orchestre symphonique." },
              ],
              artists: [
                { name: "Wolfgang Amadeus Mozart", description: "Prodige musical, compositeur de symphonies, de concertos et d'opéras." },
                { name: "Ludwig van Beethoven", description: "Compositeur révolutionnaire, connu pour ses symphonies et ses sonates pour piano." },
                { name: "Joseph Haydn", description: "Père de la symphonie et du quatuor à cordes." },
              ],
              timeframe: "1750-1820",
            },
          ]}
        />

        <MusicalPeriodTab
          value="romantic"
          title="Musique Romantique"
          description="Le romantisme musical met l'accent sur l'émotion, l'individualisme et l'expression personnelle, avec des œuvres souvent grandioses et passionnées."
          timelineEvents={[
            { year: "1820", title: "Début de la période romantique", description: "Émergence de compositeurs tels que Schubert et Beethoven.", icon: <History className="h-5 w-5" /> },
            { year: "1830", title: "Apogée du romantisme", description: "Œuvres de Chopin, Liszt et Schumann.", icon: <History className="h-5 w-5" /> },
            { year: "1850", title: "Romantisme tardif", description: "Wagner et Brahms dominent la scène musicale.", icon: <History className="h-5 w-5" /> },
            { year: "1900", title: "Fin du romantisme", description: "Mahler et Strauss marquent la fin de cette période.", icon: <History className="h-5 w-5" /> },
          ]}
          genres={[
            {
              title: "Romantisme précoce",
              description: "Exaltation des émotions et individualisme",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/romantique-precoce.jpg",
              linkUrl: "/genres/romantismeprecoce",
              characteristics: [
                { title: "Expressivité", description: "Accent mis sur l'expression des émotions et des sentiments personnels." },
                { title: "Liberté formelle", description: "Utilisation de formes musicales plus libres et moins rigides que dans le classicisme." },
                { title: "Mélodies", description: "Mélodies lyriques et passionnées." },
              ],
              artists: [
                { name: "Franz Schubert", description: "Maître du lied, compositeur de mélodies expressives et intimes." },
                { name: "Frédéric Chopin", description: "Virtuose du piano, compositeur de nocturnes, de mazurkas et de polonaises." },
                { name: "Robert Schumann", description: "Compositeur de symphonies, de musique de chambre et de lieder." },
              ],
              timeframe: "1800-1850",
            },
            {
              title: "Romantisme tardif",
              description: "Grandiose et complexité accrue",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/romantique-tardif.jpg",
              linkUrl: "/genres/romantismetardif",
              characteristics: [
                { title: "Orchestration", description: "Utilisation d'orchestres massifs et de couleurs instrumentales riches." },
                { title: "Harmonies", description: "Harmonies complexes et chromatiques." },
                { title: "Durées", description: "Œuvres de longue durée, souvent conçues comme des voyages émotionnels." },
              ],
              artists: [
                { name: "Johannes Brahms", description: "Compositeur de symphonies, de concertos et de musique de chambre." },
                { name: "Richard Wagner", description: "Compositeur d'opéras révolutionnaires, tels que la Tétralogie." },
                { name: "Gustav Mahler", description: "Compositeur de symphonies monumentales et expressives." },
              ],
              timeframe: "1850-1910",
            },
          ]}
        />

        <MusicalPeriodTab
          value="modern"
          title="Musique Moderne"
          description="La musique moderne explore de nouvelles voies esthétiques, remettant en question les conventions du passé et expérimentant avec l'atonalité, le rythme et le timbre."
          timelineEvents={[
            { year: "1900", title: "Début de la musique moderne", description: "Émergence de compositeurs tels que Debussy et Stravinsky.", icon: <History className="h-5 w-5" /> },
            { year: "1913", title: "Le Sacre du printemps", description: "Création du Sacre du printemps de Stravinsky, un scandale qui marque l'histoire de la musique.", icon: <History className="h-5 w-5" /> },
            { year: "1920", title: "Expressionnisme", description: "Développement de l'expressionnisme musical avec Schoenberg et Berg.", icon: <History className="h-5 w-5" /> },
            { year: "1945", title: "Fin de la musique moderne", description: "La fin de la Seconde Guerre mondiale marque une transition vers la musique contemporaine.", icon: <History className="h-5 w-5" /> },
          ]}
          genres={[
            {
              title: "Impressionnisme",
              description: "Évocation d'atmosphères et de sensations",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/impressionnisme.jpg",
              linkUrl: "/genres/impressionnisme",
              characteristics: [
                { title: "Harmonies", description: "Harmonies non fonctionnelles et utilisation de gammes modales." },
                { title: "Timbres", description: "Timbres délicats et raffinés." },
                { title: "Inspiration", description: "Inspiration de la nature et des arts visuels." },
              ],
              artists: [
                { name: "Claude Debussy", description: "Compositeur de Prélude à l'après-midi d'un faune et de La Mer." },
                { name: "Maurice Ravel", description: "Compositeur de Boléro et de Daphnis et Chloé." },
                { name: "Erik Satie", description: "Compositeur d'oeuvres minimalistes et humoristiques." },
              ],
              timeframe: "1875-1925",
            },
            {
              title: "Expressionnisme",
              description: "Distorsion émotionnelle et atonalité",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/expressionnisme.jpg",
              linkUrl: "/genres/expressionnisme",
              characteristics: [
                { title: "Atonalité", description: "Absence de tonalité et utilisation de la dissonance." },
                { title: "Émotion", description: "Expression intense des émotions et des sentiments." },
                { title: "Formes", description: "Formes musicales brèves et concentrées." },
              ],
              artists: [
                { name: "Arnold Schoenberg", description: "Compositeur de Pierrot lunaire et de Moïse et Aaron." },
                { name: "Alban Berg", description: "Compositeur de Wozzeck et de Lulu." },
                { name: "Anton Webern", description: "Compositeur d'oeuvres minimalistes et atonales." },
              ],
              timeframe: "1908-1930",
            },
          ]}
        />

        <MusicalPeriodTab
          value="contemporary"
          title="Musique Contemporaine"
          description="La musique contemporaine englobe une grande diversité de styles et de techniques, allant de la musique sérielle à la musique électronique, en passant par le minimalisme et la musique concrète."
          timelineEvents={[
            { year: "1945", title: "Début de la musique contemporaine", description: "Après la Seconde Guerre mondiale, de nouvelles esthétiques émergent.", icon: <History className="h-5 w-5" /> },
            { year: "1950", title: "Musique concrète", description: "Pierre Schaeffer crée la musique concrète en utilisant des sons enregistrés.", icon: <History className="h-5 w-5" /> },
            { year: "1960", title: "Minimalisme", description: "Le minimalisme se développe avec des compositeurs tels que Reich et Glass.", icon: <History className="h-5 w-5" /> },
            { year: "1970", title: "Musique électronique", description: "La musique électronique prend de l'importance avec l'essor des synthétiseurs.", icon: <History className="h-5 w-5" /> },
          ]}
          genres={[
            {
              title: "Musique sérielle",
              description: "Organisation mathématique des paramètres sonores",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/serielle.jpg",
              linkUrl: "/genres/serielle",
              characteristics: [
                { title: "Sérialisme", description: "Organisation de tous les paramètres musicaux (hauteur, durée, intensité, timbre) en séries." },
                { title: "Mathématiques", description: "Utilisation de structures mathématiques complexes." },
                { title: "Dissonance", description: "Dissonances contrôlées et absence de tonalité." },
              ],
              artists: [
                { name: "Pierre Boulez", description: "Compositeur de Structures et de Le Marteau sans maître." },
                { name: "Karlheinz Stockhausen", description: "Compositeur de Gruppen et de Kontakte." },
                { name: "Milton Babbitt", description: "Compositeur de Philomel et de Correspondences." },
              ],
              timeframe: "1950-présent",
            },
            {
              title: "Musique concrète",
              description: "Utilisation de sons enregistrés comme matériau musical",
              icon: <Music className="h-5 w-5" />,
              imageSrc: "/images/culture-musicale/concrete.jpg",
              linkUrl: "/genres/concrete",
              characteristics: [
                { title: "Sons concrets", description: "Utilisation de sons enregistrés de la vie quotidienne." },
                { title: "Collages", description: "Collages sonores et transformations des sons." },
                { title: "Absence", description: "Absence de notation traditionnelle." },
              ],
              artists: [
                { name: "Pierre Schaeffer", description: "Fondateur de la musique concrète, compositeur d'Étude aux chemins de fer." },
                { name: "Pierre Henry", description: "Compositeur de Symphonie pour un homme seul." },
                { name: "Bernard Parmegiani", description: "Compositeur de De Natura Sonorum." },
              ],
              timeframe: "1948-présent",
            },
          ]}
        />

        <TabsContent value="world">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold mb-2">Musiques du Monde</h2>
              <p className="text-muted-foreground mb-6">
                Les musiques du monde représentent la diversité des expressions musicales à travers les différentes cultures et régions du globe. Ces traditions musicales, souvent liées à l'histoire et aux pratiques culturelles locales, offrent une richesse inestimable au patrimoine musical mondial.
              </p>
            </div>

            {[
              {
                region: "Afrique",
                description: "Grande diversité rythmique et importance de la percussion",
                genres: ["Highlife", "Afrobeat", "Soukous", "Mbalax"],
                instruments: ["Djembé", "Kora", "Balafon", "Talking drum"]
              },
              {
                region: "Asie",
                description: "Systèmes de gammes et d'ornementations complexes",
                genres: ["Musique carnatique", "Gagaku", "Gamelan", "Qawwali"],
                instruments: ["Sitar", "Erhu", "Koto", "Gamelan"]
              },
              {
                region: "Amérique latine",
                description: "Rythmes syncopés et influence des traditions africaines et européennes",
                genres: ["Samba", "Tango", "Son cubain", "Cumbia"],
                instruments: ["Maracas", "Guitare flamenca", "Cuatro", "Cajón"]
              },
              {
                region: "Moyen-Orient",
                description: "Microtonalité et improvisation modale",
                genres: ["Maqâm", "Gnawa", "Chaabi", "Soufi"],
                instruments: ["Oud", "Ney", "Santour", "Darbuka"]
              },
              {
                region: "Europe de l'Est",
                description: "Métriques irrégulières et ornementation vocale",
                genres: ["Klezmer", "Sevdah", "Rebetiko", "Musique tsigane"],
                instruments: ["Cymbalum", "Gadulka", "Davul", "Accordéon diatonique"]
              },
              {
                region: "Océanie",
                description: "Chants polyphoniques et instruments à percussion",
                genres: ["Haka", "Waiata", "Corroboree", "Hula"],
                instruments: ["Didgeridoo", "Ukulele", "Log drum", "Nose flute"]
              }
            ].map((region, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{region.region}</CardTitle>
                  <CardDescription>{region.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm mb-2">Genres principaux:</h4>
                      <div className="flex flex-wrap gap-1">
                        {region.genres.map((genre, i) => (
                          <Badge key={i} variant="outline">{genre}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">Instruments caractéristiques:</h4>
                      <div className="flex flex-wrap gap-1">
                        {region.instruments.map((instrument, i) => (
                          <Badge key={i} variant="outline">{instrument}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Influence des musiques du monde sur la musique occidentale</h3>
            <p className="text-muted-foreground mb-6">
              Depuis le début du XXe siècle, les compositeurs et musiciens occidentaux se sont inspirés des musiques traditionnelles du monde entier, enrichissant leurs créations par des éléments rythmiques, mélodiques et harmoniques issus de cultures diverses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Le cas de Steve Reich</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Le compositeur minimaliste américain Steve Reich a été profondément influencé par les musiques d'Afrique de l'Ouest, notamment les polyrythmies ghanéennes, qu'il a étudiées à l'Université de Californie. Cette influence se retrouve dans ses œuvres comme "Drumming" et "Music for 18 Musicians".
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://www.youtube.com/watch?v=ILpCKQlDmhc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Écouter Drumming
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>La world music</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Depuis les années 1980, la "world music" s'est développée comme catégorie musicale englobant les musiques traditionnelles et les fusions entre musiques occidentales et non-occidentales. Des artistes comme Peter Gabriel, Paul Simon, ou Youssou N'Dour ont contribué à populariser ces métissages musicaux.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://www.youtube.com/watch?v=Hq-2iGtymQA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Découvrir Youssou N'Dour
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      <MusicInfluenceChart title="Influences entre périodes musicales" genres={genreInfluences} />

      <Separator className="my-8" />

      <div>
        <h2 className="text-2xl font-bold mb-4">Écoute guidée</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sélection musicale</h3>
            <p className="text-muted-foreground mb-3">
              Découvrez des œuvres emblématiques de chaque période musicale.
            </p>
            <div className="space-y-2">
              {listeningRecommendations.map((item, index) => (
                <div key={index} className="bg-muted/30 p-3 rounded-md flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.period}</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">
                      <Play className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Analyse d'œuvres</h3>
            <p className="text-muted-foreground mb-3">
              Plongez au cœur de la musique avec nos analyses détaillées.
            </p>
            <Card className="bg-primary/5 border-none">
              <CardContent className="pt-6">
                <h4 className="text-lg font-medium mb-2">Analyse du mois : Le Boléro de Ravel</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Une exploration de l'orchestration magistrale et de la répétition hypnotique dans cette œuvre emblématique de 1928.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Structure en crescendo continu
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Technique d'orchestration et de timbres
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Influence sur la musique du XXe siècle
                  </li>
                </ul>
                <Button className="w-full" variant="default" asChild>
                  <Link to="/culture/analyses/bolero-ravel">Lire l'analyse complète</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Ressources en ligne</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {musicResources.map((resource, index) => (
            <Card key={index} className="card-hover h-full">
              <CardHeader>
                <CardTitle className="text-base">{resource.title}</CardTitle>
                <CardDescription className="text-xs">{resource.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Visiter
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="bg-primary/5 p-6 rounded-lg mt-10">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-2">Approfondissez vos connaissances</h2>
            <p className="text-muted-foreground mb-4">
              MéloDimensions vous propose un parcours complet pour explorer l'univers de la musique classique et contemporaine.
              Découvrez nos différentes sections pour une immersion totale dans la culture musicale.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button variant="outline" asChild>
                <Link to="/technique" className="w-full">Aspects techniques</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/societe" className="w-full">Fonctions sociales</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/physique-son" className="w-full">Physique du son</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/actualite" className="w-full">Actualités musicales</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col justify-center">
            <div className="bg-card p-4 rounded-lg border shadow-sm">
              <h3 className="font-medium mb-2">Quiz musical</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Testez vos connaissances sur l'histoire de la musique et les différentes périodes musicales.
              </p>
              <Button variant="default" className="w-full" asChild>
                <Link to="/culture/quiz">Commencer le quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureMusicale;

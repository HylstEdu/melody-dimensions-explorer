import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, HelpCircle, History, Music, NotebookPen, FileText, Layers, Globe, Headphones } from "lucide-react";

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

  return (
    <div className="container py-10">
      <div className="mb-10">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/musique" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Retour à Musique
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">Culture Musicale</h1>
        <p className="text-lg text-muted-foreground">
          Explorez l'histoire de la musique à travers les âges, des origines à nos jours.
        </p>
      </div>

      <Tabs defaultValue="classical" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="classical">Musique Classique</TabsTrigger>
          <TabsTrigger value="romantic">Musique Romantique</TabsTrigger>
          <TabsTrigger value="modern">Musique Moderne</TabsTrigger>
          <TabsTrigger value="contemporary">Musique Contemporaine</TabsTrigger>
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
      </Tabs>

      <Separator className="my-8" />

      <MusicInfluenceChart title="Influences entre périodes musicales" genres={genreInfluences} />

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Ressources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Articles détaillés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explorez des articles approfondis sur les différentes périodes et genres musicaux.
              </p>
              <Button asChild variant="outline">
                <Link to="/culture/articles">Lire les articles</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-primary" />
                Analyse comparative
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comparez les caractéristiques des différentes périodes musicales pour mieux comprendre leur évolution.
              </p>
              <Button asChild variant="outline">
                <Link to="/culture/comparaisons">Voir les comparaisons</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Musique du monde
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez les traditions musicales du monde entier et leur influence sur la musique occidentale.
              </p>
              <Button asChild variant="outline">
                <Link to="/culture/monde">Explorer la musique du monde</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-primary/5 p-6 rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">Écoute guidée</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sélection musicale</h3>
            <p className="text-muted-foreground mb-3">
              Découvrez des œuvres emblématiques de chaque période musicale.
            </p>
            <div className="space-y-2">
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Bach - Toccata et Fugue en ré mineur</p>
                  <p className="text-xs text-muted-foreground">Musique Baroque</p>
                </div>
                <Headphones className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Mozart - Symphonie n°40</p>
                  <p className="text-xs text-muted-foreground">Musique Classique</p>
                </div>
                <Headphones className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Beethoven - Symphonie n°5</p>
                  <p className="text-xs text-muted-foreground">Musique Romantique</p>
                </div>
                <Headphones className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Analyse d'œuvres</h3>
            <p className="text-muted-foreground mb-3">
              Plongez au cœur de la musique avec nos analyses détaillées.
            </p>
            <Button className="w-full" variant="default">
              Explorer les analyses
            </Button>
            <p className="text-sm text-center text-muted-foreground mt-3">
              Découvrez les secrets des grands compositeurs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureMusicale;

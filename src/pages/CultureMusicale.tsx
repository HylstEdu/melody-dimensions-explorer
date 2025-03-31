import { 
  BookOpen, 
  Music, 
  Music2, 
  Music3, 
  Music4, 
  Disc, 
  Radio, 
  FileAudio, 
  Mic2 
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import GenreCard from "@/components/music/GenreCard";
import TimelineCard from "@/components/music/TimelineCard";
import MusicalPeriodTab from "@/components/music/MusicalPeriodTab";
import MusicInfluenceChart from "@/components/music/MusicInfluenceChart";

const CultureMusicale = () => {
  // Données pour la carte d'influence des genres musicaux
  const genresInfluence = [
    { id: "blues", name: "Blues", description: "1890-1950", color: "#0EA5E9" },
    { id: "jazz", name: "Jazz", description: "1920-présent", color: "#8B5CF6", influences: ["blues"] },
    { id: "rock", name: "Rock", description: "1950-présent", color: "#F97316", influences: ["blues", "jazz"] },
    { id: "soul", name: "Soul", description: "1950-1980", color: "#D946EF", influences: ["blues", "gospel"] },
    { id: "funk", name: "Funk", description: "1960-1980", color: "#10B981", influences: ["jazz", "soul"] },
    { id: "disco", name: "Disco", description: "1970-1980", color: "#FBBF24", influences: ["funk", "soul"] },
    { id: "hiphop", name: "Hip-hop", description: "1970-présent", color: "#EC4899", influences: ["funk", "disco"] },
    { id: "gospel", name: "Gospel", description: "1930-présent", color: "#6366F1", influences: ["blues"] }
  ];

  // Données pour les périodes classiques
  const classicalTimelineEvents = [
    {
      year: "1600-1750",
      title: "Période baroque",
      description: "Développement de la basse continue, ornementation abondante",
      icon: <Music className="h-5 w-5" />
    },
    {
      year: "1750-1820",
      title: "Période classique",
      description: "Émergence de la forme sonate et de la symphonie moderne",
      icon: <Music2 className="h-5 w-5" />
    },
    {
      year: "1820-1900",
      title: "Période romantique",
      description: "Expressivité émotionnelle et nationalisme musical",
      icon: <Music3 className="h-5 w-5" />
    },
    {
      year: "1900-1945",
      title: "Moderne précoce",
      description: "Rupture avec la tonalité traditionnelle",
      icon: <Music4 className="h-5 w-5" />
    },
    {
      year: "1945-présent",
      title: "Contemporain",
      description: "Expérimentation de nouvelles techniques et technologies",
      icon: <FileAudio className="h-5 w-5" />
    }
  ];

  const classicalGenres = [
    {
      title: "Baroque",
      description: "Style orné avec contrepoints complexes et basse continue",
      timeframe: "1600-1750",
      icon: <Music className="h-5 w-5" />,
      characteristics: [
        { title: "Ornementation", description: "Trilles, mordants et fioritures abondantes" },
        { title: "Basse continue", description: "Ligne de basse sur laquelle l'harmonie est construite" }
      ],
      artists: [
        { name: "J.S. Bach", description: "Maître du contrepoint" },
        { name: "Antonio Vivaldi", description: "Les Quatre Saisons" },
        { name: "G.F. Händel", description: "Musique d'apparat et oratorios" }
      ],
      linkUrl: "/culture/classique/baroque"
    },
    {
      title: "Classique",
      description: "Clarté, équilibre et structures formelles",
      timeframe: "1750-1820",
      icon: <Music2 className="h-5 w-5" />,
      characteristics: [
        { title: "Forme sonate", description: "Structure en exposition, développement et réexposition" },
        { title: "Orchestration", description: "Ensembles standardisés avec rôles définis" }
      ],
      artists: [
        { name: "W.A. Mozart", description: "Génie polyvalent et prolifique" },
        { name: "Ludwig van Beethoven", description: "Transition vers le romantisme" },
        { name: "Joseph Haydn", description: "Père de la symphonie" }
      ],
      linkUrl: "/culture/classique/periode-classique"
    },
    {
      title: "Romantique",
      description: "Expression émotionnelle intense et individualisme",
      timeframe: "1820-1900",
      icon: <Music3 className="h-5 w-5" />,
      characteristics: [
        { title: "Expressivité", description: "Émotions et sentiments personnels" },
        { title: "Nationalisme", description: "Incorporation d'éléments folkloriques" }
      ],
      artists: [
        { name: "Frédéric Chopin", description: "Poète du piano" },
        { name: "Richard Wagner", description: "Drames musicaux et leitmotivs" },
        { name: "Piotr Ilitch Tchaïkovski", description: "Mélodies mémorables" }
      ],
      linkUrl: "/culture/classique/romantique"
    },
    {
      title: "Impressionniste",
      description: "Atmosphères, couleurs sonores et fluidité",
      timeframe: "1875-1925",
      icon: <Music4 className="h-5 w-5" />,
      characteristics: [
        { title: "Harmonie", description: "Accords non-fonctionnels et modes anciens" },
        { title: "Timbre", description: "Exploration des couleurs orchestrales" }
      ],
      artists: [
        { name: "Claude Debussy", description: "Innovateur harmonique" },
        { name: "Maurice Ravel", description: "Orchestrateur brillant" },
        { name: "Erik Satie", description: "Minimalisme avant-gardiste" }
      ],
      linkUrl: "/culture/classique/impressionnisme"
    }
  ];

  // Données pour les genres populaires
  const popularTimelineEvents = [
    {
      year: "1920-1950",
      title: "Jazz et Blues",
      description: "Émergence des styles fondateurs de la musique populaire moderne",
      icon: <Disc className="h-5 w-5" />
    },
    {
      year: "1950-1970",
      title: "Rock'n'roll et Soul",
      description: "L'âge d'or du rock et la naissance de la soul music",
      icon: <Radio className="h-5 w-5" />
    },
    {
      year: "1970-1990",
      title: "Disco, Funk et Hip-hop",
      description: "Diversification des genres et naissance du rap",
      icon: <Mic2 className="h-5 w-5" />
    },
    {
      year: "1990-2010",
      title: "Pop globale et électronique",
      description: "Mondialisation et démocratisation de la production musicale",
      icon: <Music4 className="h-5 w-5" />
    },
    {
      year: "2010-présent",
      title: "Streaming et hybridation",
      description: "Fusion des genres et nouveaux modes de consommation",
      icon: <FileAudio className="h-5 w-5" />
    }
  ];

  const popularGenres = [
    {
      title: "Jazz",
      description: "Improvisation, swing et créativité collective",
      timeframe: "1920-présent",
      imageSrc: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      characteristics: [
        { title: "Improvisation", description: "Solos spontanés sur des progressions d'accords" },
        { title: "Swing", description: "Rythme ternaire caractéristique" }
      ],
      artists: [
        { name: "Louis Armstrong", description: "Trompettiste pionnier" },
        { name: "Duke Ellington", description: "Compositeur et chef d'orchestre" },
        { name: "Miles Davis", description: "Innovateur constant" }
      ],
      linkUrl: "/culture/populaire/jazz"
    },
    {
      title: "Rock",
      description: "Énergie, amplification et rébellion",
      timeframe: "1950-présent",
      imageSrc: "https://images.unsplash.com/photo-1598387993441-a364f854c3a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      characteristics: [
        { title: "Instruments", description: "Guitares électriques, basse, batterie" },
        { title: "Attitude", description: "Esprit rebelle et énergie brute" }
      ],
      artists: [
        { name: "The Beatles", description: "Révolution musicale des années 60" },
        { name: "Led Zeppelin", description: "Pionniers du hard rock" },
        { name: "Nirvana", description: "Figures du grunge" }
      ],
      linkUrl: "/culture/populaire/rock"
    },
    {
      title: "Hip-hop",
      description: "Expression urbaine, rythmes et poésie parlée",
      timeframe: "1970-présent",
      imageSrc: "https://images.unsplash.com/photo-1471478331774-77ffc3248de3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      characteristics: [
        { title: "Rap", description: "Paroles rythmées sur des beats" },
        { title: "Sampling", description: "Réutilisation de fragments musicaux existants" }
      ],
      artists: [
        { name: "Grandmaster Flash", description: "Pionnier du DJ'ing" },
        { name: "Tupac Shakur", description: "Icône du rap West Coast" },
        { name: "Kendrick Lamar", description: "Artiste contemporain acclamé" }
      ],
      linkUrl: "/culture/populaire/hip-hop"
    },
    {
      title: "Électronique",
      description: "Sons synthétisés et production assistée par ordinateur",
      timeframe: "1970-présent",
      imageSrc: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      characteristics: [
        { title: "Synthétiseurs", description: "Création de sons électroniques" },
        { title: "Rythme", description: "Beats répétitifs et structures dansantes" }
      ],
      artists: [
        { name: "Kraftwerk", description: "Pionniers allemands" },
        { name: "Daft Punk", description: "Duo français emblématique" },
        { name: "Aphex Twin", description: "Producteur expérimental" }
      ],
      linkUrl: "/culture/populaire/electronique"
    }
  ];

  // Données pour les musiques du monde
  const worldMusicTimelineEvents = [
    {
      year: "Traditions anciennes",
      title: "Racines culturelles",
      description: "Traditions orales et instruments acoustiques",
      icon: <Music className="h-5 w-5" />
    },
    {
      year: "1950-1980",
      title: "Visibilité internationale",
      description: "Premiers enregistrements et tournées mondiales",
      icon: <Disc className="h-5 w-5" />
    },
    {
      year: "1980-2000",
      title: "World Music",
      description: "Émergence du terme et popularisation",
      icon: <Radio className="h-5 w-5" />
    },
    {
      year: "2000-présent",
      title: "Fusions globales",
      description: "Collaborations transculturelles et hybridation",
      icon: <FileAudio className="h-5 w-5" />
    }
  ];

  const worldMusicGenres = [
    {
      title: "Afrique",
      description: "Richesse rythmique et traditions vocales",
      icon: <Music className="h-5 w-5" />,
      characteristics: [
        { title: "Polyrhythmes", description: "Superposition de structures rythmiques complexes" },
        { title: "Instruments", description: "Djembé, kora, balafon et traditions vocales" }
      ],
      artists: [
        { name: "Youssou N'Dour", description: "Star sénégalaise" },
        { name: "Miriam Makeba", description: "Voix d'Afrique du Sud" },
        { name: "Fela Kuti", description: "Créateur de l'afrobeat" }
      ],
      linkUrl: "/culture/monde/afrique"
    },
    {
      title: "Amérique latine",
      description: "Rythmes dansants et métissage culturel",
      icon: <Music2 className="h-5 w-5" />,
      characteristics: [
        { title: "Percussions", description: "Congas, bongos, cajon et autres" },
        { title: "Danses", description: "Salsa, samba, tango liés à la musique" }
      ],
      artists: [
        { name: "Buena Vista Social Club", description: "Collectif cubain" },
        { name: "Caetano Veloso", description: "Tropicalisme brésilien" },
        { name: "Celia Cruz", description: "Reine de la salsa" }
      ],
      linkUrl: "/culture/monde/amerique-latine"
    },
    {
      title: "Asie",
      description: "Systèmes musicaux sophistiqués et anciens",
      icon: <Music3 className="h-5 w-5" />,
      characteristics: [
        { title: "Gammes", description: "Systèmes modaux différents de l'Occident" },
        { title: "Instruments", description: "Sitar, tabla, gamelan, erhu" }
      ],
      artists: [
        { name: "Ravi Shankar", description: "Virtuose du sitar indien" },
        { name: "Ali Akbar Khan", description: "Maître du sarod" },
        { name: "Nusrat Fateh Ali Khan", description: "Chant qawwali" }
      ],
      linkUrl: "/culture/monde/asie"
    },
    {
      title: "Europe et Méditerranée",
      description: "Traditions folkloriques et influences croisées",
      icon: <Music4 className="h-5 w-5" />,
      characteristics: [
        { title: "Modalité", description: "Échelles et modes traditionnels" },
        { title: "Instruments", description: "Accordéon, bouzouki, violon, duduk" }
      ],
      artists: [
        { name: "The Chieftains", description: "Musique irlandaise" },
        { name: "Maria del Mar Bonet", description: "Tradition catalane" },
        { name: "Goran Bregović", description: "Musiques balkaniques" }
      ],
      linkUrl: "/culture/monde/europe"
    }
  ];

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Culture Musicale</h1>
        <p className="text-lg text-muted-foreground">
          Explorez l'histoire, les genres et l'évolution de la musique à travers les époques et les cultures.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Évolution et interconnexions des genres musicaux</h2>
        <MusicInfluenceChart
          title="Influences entre genres musicaux"
          description="Visualisation des connexions et influences entre les grands genres musicaux"
          genres={genresInfluence}
        />
      </div>

      <Tabs defaultValue="classique" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="classique">Musique Classique</TabsTrigger>
          <TabsTrigger value="populaire">Musiques Populaires</TabsTrigger>
          <TabsTrigger value="monde">Musiques du Monde</TabsTrigger>
          <TabsTrigger value="instruments">Instruments</TabsTrigger>
        </TabsList>
        
        <MusicalPeriodTab
          value="classique"
          title="Musique Classique Occidentale"
          description="La musique classique occidentale s'étend du XVIIe siècle à nos jours, avec des périodes distinctes marquées par des innovations esthétiques et techniques. De l'ornementation baroque à l'expérimentation contemporaine, cette tradition écrite a profondément influencé toute l'histoire musicale."
          timelineEvents={classicalTimelineEvents}
          genres={classicalGenres}
        />

        <MusicalPeriodTab
          value="populaire"
          title="Musiques Populaires"
          description="Les musiques populaires modernes, nées au XXe siècle, sont caractérisées par leur accessibilité, leur diffusion de masse et leur lien avec les évolutions technologiques et sociales. Du blues au hip-hop en passant par le rock et l'électronique, ces genres continuent d'évoluer rapidement."
          timelineEvents={popularTimelineEvents}
          genres={popularGenres}
        />

        <MusicalPeriodTab
          value="monde"
          title="Musiques du Monde"
          description="Les musiques traditionnelles et folkloriques du monde entier représentent une richesse culturelle inestimable. Chaque région a développé des styles, instruments et techniques vocales uniques, souvent liés à des pratiques rituelles, sociales ou festives spécifiques."
          timelineEvents={worldMusicTimelineEvents}
          genres={worldMusicGenres}
        />
        
        <TabsContent value="instruments">
          <Card>
            <CardHeader>
              <CardTitle>Les instruments à travers le monde</CardTitle>
              <CardDescription>Exploration des outils de création musicale et leur évolution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Les instruments de musique sont les extensions de l'expression humaine, permettant de transformer 
                l'intention artistique en sons. Leur diversité reflète la richesse des cultures mondiales.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold">Familles d'instruments occidentaux</h3>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Cordes</h4>
                    <p className="text-muted-foreground">
                      Instruments dont le son est produit par la vibration de cordes tendues. On distingue:
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-medium">Cordes frottées</span>: violon, alto, violoncelle, contrebasse</li>
                      <li><span className="font-medium">Cordes pincées</span>: guitare, harpe, luth, mandoline</li>
                      <li><span className="font-medium">Cordes frappées</span>: piano, cymbalum</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Vents</h4>
                    <p className="text-muted-foreground">
                      Instruments dont le son est produit par la vibration d'une colonne d'air. On distingue:
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-medium">Bois</span>: flûte, hautbois, clarinette, saxophone</li>
                      <li><span className="font-medium">Cuivres</span>: trompette, cor, trombone, tuba</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Percussions</h4>
                    <p className="text-muted-foreground">
                      Instruments dont le son est produit par frappe ou secouement:
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-medium">Membranophones</span>: tambours, timbales, congas</li>
                      <li><span className="font-medium">Idiophones</span>: xylophones, triangles, cymbales</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-semibold">Instruments traditionnels par région</h3>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Asie</h4>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-medium">Inde</span>: sitar, tabla, sarod, tampura</li>
                      <li><span className="font-medium">Chine</span>: erhu, guzheng, pipa, dizi</li>
                      <li><span className="font-medium">Japon</span>: koto, shamisen, shakuhachi</li>
                      <li><span className="font-medium">Indonésie</span>: gamelan (ensemble d'instruments)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Afrique</h4>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-medium">Percussions</span>: djembé, talking drum, balafon</li>
                      <li><span className="font-medium">Cordes</span>: kora, ngoni, mbira (piano à pouces)</li>
                      <li><span className="font-medium">Vents</span>: flûte peule, alghaïta</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Moyen-Orient</h4>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-medium">Cordes</span>: oud, qanun, santour</li>
                      <li><span className="font-medium">Percussions</span>: darbuka, riq, bendir</li>
                      <li><span className="font-medium">Vents</span>: ney, duduk, zurna</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">Amériques</h4>
                    <ul className="list-disc pl-5 text-sm">
                      <li><span className="font-medium">Amérique latine</span>: charango, quena, maracas, cuatro</li>
                      <li><span className="font-medium">Amérique du Nord</span>: banjo, harmonica, washboard</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">Instruments électroniques et numériques</h3>
                <p className="text-muted-foreground">
                  L'évolution technologique a permis l'émergence de nouveaux moyens de création sonore:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Synthétiseurs</h4>
                    <p className="text-sm text-muted-foreground">
                      Du Minimoog aux workstations numériques modernes, ces instruments créent des sons par génération et manipulation électronique.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Samplers</h4>
                    <p className="text-sm text-muted-foreground">
                      Permettent d'échantillonner, manipuler et rejouer des sons enregistrés, révolutionnant la production musicale.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Contrôleurs MIDI</h4>
                    <p className="text-sm text-muted-foreground">
                      Interfaces permettant de contrôler des sons générés par ordinateur avec une expressivité instrumentale.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Articles à la une</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5 text-primary" />
                Les influences du jazz
              </CardTitle>
              <CardDescription>Comment le jazz a façonné la musique moderne</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Musicien de jazz jouant du saxophone" 
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Du blues au bebop, en passant par le swing et le free jazz, explorez l'évolution d'un genre révolutionnaire.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <Link to="/culture/jazz">Lire l'article</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music2 className="h-5 w-5 text-primary" />
                La musique à l'ère du numérique
              </CardTitle>
              <CardDescription>Streaming, algorithmes et création musicale</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Studio d'enregistrement numérique" 
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Comment les plateformes de streaming et l'intelligence artificielle transforment notre relation à la musique.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <Link to="/culture/numerique">Lire l'article</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Grandes œuvres classiques
              </CardTitle>
              <CardDescription>Les chefs-d'œuvre intemporels à connaître</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Partition de musique classique" 
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-muted-foreground mb-4">
                Une sélection des compositions essentielles qui ont marqué l'histoire de la musique classique occidentale.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
                <Link to="/culture/classiques">Lire l'article</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div className="bg-muted/50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Outils pédagogiques</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <Music3 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Chronologie interactive</h3>
              <p className="text-muted-foreground mb-3">
                Parcourez les grandes époques de l'histoire musicale et leurs caractéristiques principales.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/culture/chronologie">Découvrir</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <Music4 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Bibliothèque d'écoute</h3>
              <p className="text-muted-foreground mb-3">
                Une collection d'extraits musicaux représentatifs des différents genres et périodes.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link to="/culture/ecoute">Explorer</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureMusicale;

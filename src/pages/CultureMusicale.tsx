
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MusicIcon, BookOpen, Globe, Clock } from "lucide-react";
import GenreGridSection from "@/components/music/GenreGridSection";
import MusicalPeriodTab from "@/components/music/MusicalPeriodTab";
import MusicInfluenceChart from "@/components/music/MusicInfluenceChart";

const CultureMusicale = () => {
  // Classical music genres
  const classicalGenres = [
    {
      name: "Musique Baroque",
      description: "Période marquée par une complexité harmonique et l'utilisation du contrepoint",
      timeframe: "1600-1750",
      artists: ["Jean-Sébastien Bach", "Antonio Vivaldi", "Georg Friedrich Haendel"],
      keyCharacteristics: [
        "Utilisation intensive du contrepoint",
        "Ornementation élaborée",
        "Basse continue"
      ],
      instruments: "Clavecin, violon baroque, hautbois baroque, viole de gambe",
      subgenres: ["Concerto grosso", "Oratorio", "Suite baroque"]
    },
    {
      name: "Classicisme",
      description: "Période caractérisée par l'élégance, la clarté et l'équilibre",
      timeframe: "1750-1820",
      artists: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Joseph Haydn"],
      keyCharacteristics: [
        "Forme sonate",
        "Clarté harmonique", 
        "Équilibre architectural",
        "Symétrie des phrases"
      ],
      instruments: "Piano-forte, instruments à vents, quatuor à cordes",
      subgenres: ["Symphonie classique", "Sonate classique", "Quatuor à cordes"]
    },
    {
      name: "Romantisme",
      description: "Expression intense des émotions et accent sur l'individualité",
      timeframe: "1800-1910",
      artists: ["Frédéric Chopin", "Franz Liszt", "Piotr Ilitch Tchaïkovski"],
      keyCharacteristics: [
        "Expression émotionnelle intense",
        "Virtuosité instrumentale",
        "Exploration de thèmes nationaux",
        "Programmes narratifs"
      ],
      instruments: "Piano moderne, orchestre symphonique élargi",
      subgenres: ["Poème symphonique", "Drame musical", "Nocturne"]
    },
  ];

  // Popular music genres
  const popularGenres = [
    {
      name: "Jazz",
      description: "Genre musical né aux États-Unis caractérisé par l'improvisation et le swing",
      timeframe: "Début du 20ème siècle - présent",
      artists: ["Louis Armstrong", "Miles Davis", "Ella Fitzgerald", "Duke Ellington"],
      keyCharacteristics: [
        "Improvisation",
        "Swing",
        "Blue notes",
        "Polyrythmies",
        "Interactions entre musiciens"
      ],
      instruments: "Saxophone, trompette, piano, contrebasse, batterie",
      subgenres: ["Bebop", "Cool jazz", "Free jazz", "Fusion", "Latin jazz"]
    },
    {
      name: "Rock",
      description: "Genre musical dérivé du rock 'n' roll et du blues, caractérisé par des guitares amplifiées",
      timeframe: "Années 1950 - présent",
      artists: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
      keyCharacteristics: [
        "Guitares électriques amplifiées",
        "Rythmique puissante",
        "Structure couplet-refrain",
        "Énergie et attitude rebelle"
      ],
      instruments: "Guitare électrique, basse, batterie, clavier",
      subgenres: ["Hard rock", "Prog rock", "Punk rock", "Indie rock", "Alternatif"]
    },
    {
      name: "Hip-Hop",
      description: "Mouvement culturel et musical né dans le Bronx, mêlant rythmes et paroles débitées",
      timeframe: "Fin des années 1970 - présent",
      artists: ["Grandmaster Flash", "Tupac Shakur", "Jay-Z", "Nas"],
      keyCharacteristics: [
        "Samples et beats",
        "Flow rythmique des paroles",
        "Narration urbaine",
        "Engagement social et politique",
        "Techniques de DJ"
      ],
      instruments: "Platines, samplers, boîtes à rythmes, synthétiseurs",
      subgenres: ["Old school", "Gangsta rap", "Trap", "Conscious rap", "Cloud rap"]
    },
  ];

  // World music genres
  const worldGenres = [
    {
      name: "Flamenco",
      description: "Expression musicale et dansée de l'Andalousie, mêlant influences gitanes et arabes",
      timeframe: "18ème siècle - présent",
      artists: ["Paco de Lucía", "Camarón de la Isla", "Lole y Manuel"],
      keyCharacteristics: [
        "Chant expressif (cante)",
        "Guitare virtuose",
        "Danse rythmique (baile)",
        "Palmas (claquements de mains)",
        "Structure rythmique complexe"
      ],
      instruments: "Guitare flamenca, cajón, palmas",
      subgenres: ["Soleá", "Bulería", "Seguiriya", "Fandango"]
    },
    {
      name: "Musique Traditionnelle Chinoise",
      description: "Tradition musicale millénaire basée sur la pentatonique et l'harmonie cosmique",
      timeframe: "Antiquité - présent",
      artists: ["Liu Fang", "Wu Man", "Guo Gan"],
      keyCharacteristics: [
        "Gammes pentatoniques",
        "Ornementation délicate",
        "Représentation de la nature",
        "Philosophie taoïste de l'harmonie"
      ],
      instruments: "Erhu, guzheng, pipa, dizi, yangqin",
      subgenres: ["Musique de cour", "Opéra chinois", "Musique folklorique"]
    },
    {
      name: "Reggae",
      description: "Genre musical jamaïcain aux rythmes syncopés et messages spirituels",
      timeframe: "Années 1960 - présent",
      artists: ["Bob Marley", "Peter Tosh", "Jimmy Cliff", "Burning Spear"],
      keyCharacteristics: [
        "Rythme accentué sur le temps faible (offbeat)",
        "Basse proéminente",
        "Thèmes spirituels et sociaux",
        "Tempo modéré",
        "Connection au rastafari"
      ],
      instruments: "Guitare, basse, batterie, orgue, cuivres",
      subgenres: ["Dub", "Dancehall", "Roots reggae", "Ska", "Rocksteady"]
    },
  ];

  // Contemporary music genres
  const contemporaryGenres = [
    {
      name: "Électronique",
      description: "Musique créée principalement avec des instruments électroniques et assistée par ordinateur",
      timeframe: "Années 1970 - présent",
      artists: ["Daft Punk", "Aphex Twin", "Jean-Michel Jarre", "Kraftwerk"],
      keyCharacteristics: [
        "Sons synthétisés",
        "Rythmes programmés",
        "Structures évolutives",
        "Manipulation sonore",
        "Production numérique"
      ],
      instruments: "Synthétiseurs, boîtes à rythmes, ordinateurs, contrôleurs MIDI",
      subgenres: ["Techno", "House", "Ambient", "Drum and Bass", "IDM"]
    },
    {
      name: "Pop contemporaine",
      description: "Musique populaire actuelle caractérisée par la production moderne et l'accessibilité",
      timeframe: "Années 2000 - présent",
      artists: ["Beyoncé", "Taylor Swift", "Ed Sheeran", "The Weeknd"],
      keyCharacteristics: [
        "Production ultra-polie",
        "Mélodies accrocheuses",
        "Structure formatée pour la radio",
        "Fusion de genres",
        "Présence massive sur les plateformes numériques"
      ],
      instruments: "Voix, instruments virtuels, synthétiseurs, guitare, percussion programmée",
      subgenres: ["Electropop", "R&B contemporain", "Pop alternative", "K-pop"]
    },
    {
      name: "Néo-Soul / R&B alternatif",
      description: "Fusion moderne de soul, jazz et R&B avec des éléments contemporains",
      timeframe: "Années 1990 - présent",
      artists: ["D'Angelo", "Erykah Badu", "Frank Ocean", "FKA Twigs"],
      keyCharacteristics: [
        "Arrangements sophistiqués",
        "Influences jazz et soul vintage",
        "Expérimentation sonore",
        "Lyrics introspectifs",
        "Groove organique"
      ],
      instruments: "Instruments live, synthétiseurs, programmation subtile, voix",
      subgenres: ["Alternative R&B", "Future soul", "Jazz-rap", "Progressive soul"]
    },
  ];

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Culture Musicale</h1>
        <p className="text-lg text-muted-foreground">
          Explorez les différents genres, époques et courants qui ont façonné l'histoire de la musique.
        </p>
      </div>

      <Tabs defaultValue="periodes" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="periodes">Périodes historiques</TabsTrigger>
          <TabsTrigger value="genres">Genres musicaux</TabsTrigger>
          <TabsTrigger value="influences">Influences & évolutions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="periodes">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Chronologie musicale</h2>
            <p className="text-muted-foreground">
              La musique occidentale s'est développée à travers plusieurs périodes distinctes, chacune avec ses propres caractéristiques stylistiques, innovations et compositeurs emblématiques.
            </p>
          </div>

          <Tabs defaultValue="classique">
            <TabsList className="mb-6">
              <TabsTrigger value="medievale">Médiévale</TabsTrigger>
              <TabsTrigger value="renaissance">Renaissance</TabsTrigger>
              <TabsTrigger value="classique">Classique</TabsTrigger>
              <TabsTrigger value="moderne">Moderne</TabsTrigger>
              <TabsTrigger value="contemporaine">Contemporaine</TabsTrigger>
            </TabsList>
            
            <MusicalPeriodTab
              value="medievale"
              title="Période Médiévale (500-1400)"
              description="L'époque médiévale voit l'émergence du plain-chant grégorien, des troubadours et l'établissement de la notation musicale."
              timelineEvents={[
                {
                  year: "590-604",
                  title: "Le pape Grégoire Ier",
                  description: "Compilation et standardisation du chant grégorien"
                },
                {
                  year: "1000-1100",
                  title: "Guido d'Arezzo",
                  description: "Invention de la notation musicale sur portée"
                },
                {
                  year: "1150-1250",
                  title: "École de Notre-Dame",
                  description: "Développement de la polyphonie et du motet"
                },
                {
                  year: "1300-1377",
                  title: "Ars Nova",
                  description: "Innovations rythmiques et structurelles par Guillaume de Machaut"
                }
              ]}
              genres={[
                {
                  title: "Chant Grégorien",
                  description: "Musique sacrée monodique chantée a cappella",
                  characteristics: [
                    {title: "Texture", description: "Monophonique (une seule ligne mélodique)"},
                    {title: "Rythme", description: "Libre, suivant le texte liturgique"}
                  ],
                  artists: [
                    {name: "Anonymes (moines)"}
                  ],
                  timeframe: "6ème-14ème siècles"
                },
                {
                  title: "Musique des Troubadours",
                  description: "Chansons profanes sur l'amour courtois et la chevalerie",
                  characteristics: [
                    {title: "Forme", description: "Strophique avec refrains"},
                    {title: "Thèmes", description: "Amour courtois, exploits chevaleresques"}
                  ],
                  artists: [
                    {name: "Bernard de Ventadour"},
                    {name: "Thibaut de Champagne"}
                  ],
                  timeframe: "12ème-13ème siècles"
                }
              ]}
            />
            
            <MusicalPeriodTab
              value="renaissance"
              title="Renaissance (1400-1600)"
              description="Période marquée par un retour aux idéaux de l'Antiquité, l'humanisme, et l'essor de la polyphonie vocale."
              timelineEvents={[
                {
                  year: "1425-1450",
                  title: "Guillaume Dufay",
                  description: "Développement du style bourguignon"
                },
                {
                  year: "1501",
                  title: "Ottaviano Petrucci",
                  description: "Premières partitions musicales imprimées"
                },
                {
                  year: "1540-1550",
                  title: "Concile de Trente",
                  description: "Réforme de la musique sacrée catholique"
                },
                {
                  year: "1550-1600",
                  title: "École vénitienne",
                  description: "Développement de la polychoralité par Andrea et Giovanni Gabrieli"
                }
              ]}
              genres={[
                {
                  title: "Chanson polyphonique",
                  description: "Compositions profanes à plusieurs voix",
                  characteristics: [
                    {title: "Texture", description: "Polyphonique (3-5 voix)"},
                    {title: "Forme", description: "Formes fixes comme le rondeau et la ballade"}
                  ],
                  artists: [
                    {name: "Josquin des Prez"},
                    {name: "Clément Janequin"}
                  ],
                  timeframe: "15ème-16ème siècles"
                },
                {
                  title: "Madrigal",
                  description: "Composition vocale expressive sur des textes poétiques",
                  characteristics: [
                    {title: "Expression", description: "Word painting (illustration musicale du texte)"},
                    {title: "Harmonie", description: "Chromatisme et dissonances expressives"}
                  ],
                  artists: [
                    {name: "Carlo Gesualdo"},
                    {name: "Claudio Monteverdi"}
                  ],
                  timeframe: "16ème siècle"
                }
              ]}
            />
            
            <MusicalPeriodTab
              value="classique"
              title="Période Classique (1600-1900)"
              description="Englobant les périodes baroque, classique et romantique, cette ère a vu l'établissement de formes musicales qui perdurent encore aujourd'hui."
              timelineEvents={[
                {
                  year: "1607",
                  title: "Monteverdi - Orfeo",
                  description: "Un des premiers opéras importants"
                },
                {
                  year: "1750",
                  title: "Mort de J.S. Bach",
                  description: "Marque conventionnellement la fin de l'ère baroque"
                },
                {
                  year: "1803",
                  title: "Beethoven - Symphonie n°3",
                  description: "Œuvre pivotale annonçant le romantisme"
                },
                {
                  year: "1876",
                  title: "Wagner - L'Anneau du Nibelung",
                  description: "Apogée du drame musical romantique"
                }
              ]}
              genres={[
                {
                  title: "Baroque",
                  description: "Style ornemental riche en contrepoint et basse continue",
                  characteristics: [
                    {title: "Forme", description: "Concerto, sonate, suite"},
                    {title: "Technique", description: "Basse continue, ornementation élaborée"}
                  ],
                  artists: [
                    {name: "J.S. Bach"},
                    {name: "G.F. Haendel"}
                  ],
                  timeframe: "1600-1750"
                },
                {
                  title: "Classicisme",
                  description: "Style équilibré privilégiant la clarté et la symétrie",
                  characteristics: [
                    {title: "Forme", description: "Forme sonate, symphonie classique"},
                    {title: "Esthétique", description: "Équilibre, clarté, élégance"}
                  ],
                  artists: [
                    {name: "W.A. Mozart"},
                    {name: "L.v. Beethoven (période précoce)"}
                  ],
                  timeframe: "1750-1820"
                },
                {
                  title: "Romantisme",
                  description: "Expression émotionnelle intense, nationalisme et innovation formelle",
                  characteristics: [
                    {title: "Expression", description: "Émotions exacerbées, individualité"},
                    {title: "Innovations", description: "Harmonie étendue, orchestration riche"}
                  ],
                  artists: [
                    {name: "Frédéric Chopin"},
                    {name: "Richard Wagner"}
                  ],
                  timeframe: "1820-1900"
                }
              ]}
            />
            
            <MusicalPeriodTab
              value="moderne"
              title="Période Moderne (1900-1960)"
              description="Époque de rupture avec les traditions et d'innovations radicales en réponse aux bouleversements de la première moitié du 20ème siècle."
              timelineEvents={[
                {
                  year: "1913",
                  title: "Stravinsky - Le Sacre du Printemps",
                  description: "Révolution rythmique et harmonique"
                },
                {
                  year: "1923",
                  title: "Schönberg - Méthode de composition à 12 sons",
                  description: "Développement du dodécaphonisme"
                },
                {
                  year: "1939-1945",
                  title: "Seconde Guerre Mondiale",
                  description: "Dispersion des compositeurs et nouvelles influences"
                },
                {
                  year: "1948",
                  title: "Musique concrète",
                  description: "Pierre Schaeffer commence ses expériences à la RTF"
                }
              ]}
              genres={[
                {
                  title: "Impressionnisme musical",
                  description: "Style évocateur inspiré des impressionnistes en peinture",
                  characteristics: [
                    {title: "Harmonie", description: "Gammes par tons, modes exotiques"},
                    {title: "Texture", description: "Sonorités vaporeuses, timbres recherchés"}
                  ],
                  artists: [
                    {name: "Claude Debussy"},
                    {name: "Maurice Ravel"}
                  ],
                  timeframe: "1890-1920"
                },
                {
                  title: "Dodécaphonisme",
                  description: "Technique de composition utilisant les 12 sons de la gamme chromatique",
                  characteristics: [
                    {title: "Technique", description: "Séries de 12 sons sans hiérarchie tonale"},
                    {title: "Expression", description: "Expressionnisme, tension dissonante"}
                  ],
                  artists: [
                    {name: "Arnold Schönberg"},
                    {name: "Alban Berg"}
                  ],
                  timeframe: "1920-1950"
                }
              ]}
            />
            
            <MusicalPeriodTab
              value="contemporaine"
              title="Période Contemporaine (1960-présent)"
              description="Caractérisée par une grande diversité d'approches, du minimalisme à l'expérimentation électronique et l'éclatement des genres."
              timelineEvents={[
                {
                  year: "1965",
                  title: "Terry Riley - In C",
                  description: "Œuvre fondatrice du minimalisme"
                },
                {
                  year: "1970s",
                  title: "Essor de la musique électronique",
                  description: "Développement des synthétiseurs et de la musique assistée par ordinateur"
                },
                {
                  year: "1980s",
                  title: "Retour à la tonalité",
                  description: "Mouvement néo-romantique et postmoderne"
                },
                {
                  year: "2000s",
                  title: "Ère numérique",
                  description: "Démocratisation des outils de création et diffusion musicale"
                }
              ]}
              genres={[
                {
                  title: "Minimalisme",
                  description: "Style basé sur la répétition et les changements graduels",
                  characteristics: [
                    {title: "Structure", description: "Processus répétitifs, phasage"},
                    {title: "Texture", description: "Pulsation constante, superpositions rythmiques"}
                  ],
                  artists: [
                    {name: "Steve Reich"},
                    {name: "Philip Glass"}
                  ],
                  timeframe: "1960-présent"
                },
                {
                  title: "Musique spectrale",
                  description: "Basée sur l'analyse du spectre sonore et ses transformations",
                  characteristics: [
                    {title: "Harmonie", description: "Dérivée du spectre harmonique naturel"},
                    {title: "Recherche", description: "Exploration du timbre et microtonalité"}
                  ],
                  artists: [
                    {name: "Gérard Grisey"},
                    {name: "Tristan Murail"}
                  ],
                  timeframe: "1970-présent"
                }
              ]}
            />
          </Tabs>
        </TabsContent>
        
        <TabsContent value="genres">
          <div className="space-y-16">
            <GenreGridSection 
              title="Musique Classique" 
              description="Traditions musicales savantes européennes développées du Moyen Âge à nos jours"
              genres={classicalGenres}
              columns={3}
            />
            
            <Separator className="my-8" />
            
            <GenreGridSection 
              title="Musique Populaire"
              description="Genres ayant émergé aux 20ème et 21ème siècles avec une large diffusion culturelle"
              genres={popularGenres}
              columns={3}
            />
            
            <Separator className="my-8" />
            
            <GenreGridSection 
              title="Musiques du Monde"
              description="Traditions musicales issues de diverses cultures à travers le globe"
              genres={worldGenres}
              columns={3}
            />
            
            <Separator className="my-8" />
            
            <GenreGridSection 
              title="Musique Contemporaine"
              description="Genres actuels reflétant l'évolution technologique et la fusion des influences"
              genres={contemporaryGenres}
              columns={3}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="influences">
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Interconnexions musicales</h2>
              <p className="text-muted-foreground">
                La musique est un phénomène culturel en constante évolution, où les genres s'influencent mutuellement à travers le temps et l'espace.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Évolution des genres</CardTitle>
                  <CardDescription>Comment les styles musicaux se transforment au fil du temps</CardDescription>
                </CardHeader>
                <CardContent>
                  <MusicInfluenceChart />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Influences transculturelles</CardTitle>
                  <CardDescription>Échanges entre traditions musicales à travers le monde</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Les échanges culturels ont toujours joué un rôle crucial dans l'évolution musicale, créant des fusions et des hybridations riches.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Exemples marquants:</h3>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-muted-foreground">
                        <li>Fusion du blues africain-américain et de la country pour créer le rock'n'roll</li>
                        <li>Influence des modes arabes sur le flamenco espagnol</li>
                        <li>Impact des rythmes africains sur la musique cubaine et brésilienne</li>
                        <li>Synthèse des traditions indiennes et occidentales dans la world music</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium">Facteurs d'influence:</h3>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div className="bg-primary/10 p-3 rounded-md">
                          <h4 className="font-medium">Migrations</h4>
                          <p className="text-sm text-muted-foreground">Déplacements de populations et diaspora</p>
                        </div>
                        
                        <div className="bg-primary/10 p-3 rounded-md">
                          <h4 className="font-medium">Colonisation</h4>
                          <p className="text-sm text-muted-foreground">Impositions et métissages culturels</p>
                        </div>
                        
                        <div className="bg-primary/10 p-3 rounded-md">
                          <h4 className="font-medium">Technologie</h4>
                          <p className="text-sm text-muted-foreground">Diffusion mondiale et accessibilité</p>
                        </div>
                        
                        <div className="bg-primary/10 p-3 rounded-md">
                          <h4 className="font-medium">Économie</h4>
                          <p className="text-sm text-muted-foreground">Circuits commerciaux et industrie</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Études de cas: fusions musicales significatives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold">Jazz-fusion</h3>
                    <p className="text-sm text-muted-foreground">
                      Dans les années 1960-70, Miles Davis et d'autres musiciens ont fusionné le jazz avec le rock et les musiques électroniques, créant un nouveau langage musical qui a influencé des générations d'artistes.
                    </p>
                    <p className="text-sm font-medium">Œuvres clés: "Bitches Brew" (Miles Davis), "Birds of Fire" (Mahavishnu Orchestra)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold">Afrobeat</h3>
                    <p className="text-sm text-muted-foreground">
                      Fela Kuti a créé l'afrobeat en mélangeant les rythmes yoruba, le highlife ghanéen, le jazz et le funk américain, donnant naissance à un style politiquement engagé qui résonne encore aujourd'hui.
                    </p>
                    <p className="text-sm font-medium">Œuvres clés: "Zombie" (Fela Kuti), "Open & Close" (Fela Kuti)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold">Trip-hop</h3>
                    <p className="text-sm text-muted-foreground">
                      Né à Bristol dans les années 1990, le trip-hop combine hip-hop, musique électronique, dub jamaïcain et ambiances cinématographiques, créant une esthétique urbaine distinctive.
                    </p>
                    <p className="text-sm font-medium">Œuvres clés: "Dummy" (Portishead), "Blue Lines" (Massive Attack)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Ressources d'apprentissage</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Analyses musicales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explorations détaillées des œuvres emblématiques, de leurs structures et de leur contexte historique.
              </p>
              <Button asChild variant="outline">
                <Link to="/culture/analyses">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Atlas musical
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Cartographie des traditions musicales mondiales et de leurs interconnexions culturelles.
              </p>
              <Button asChild variant="outline">
                <Link to="/culture/atlas">Explorer</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Chronologie interactive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Parcourez l'histoire de la musique à travers une ligne du temps interactive et multimédia.
              </p>
              <Button asChild variant="outline">
                <Link to="/culture/chronologie">Naviguer</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CultureMusicale;

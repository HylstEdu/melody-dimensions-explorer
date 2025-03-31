
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, BookOpen, Music, Waveform, Settings, Lightbulb, BookOpen as Book, Clock } from "lucide-react";
import FrequencySpectrumCard from "@/components/FrequencySpectrumCard";

const AspectsTechniques = () => {
  const theorySpectrumData = [
    { name: "Fondamentale", value: 100, fill: "#8B5CF6" },
    { name: "2ᵉ harm.", value: 50, fill: "#8B5CF6" },
    { name: "3ᵉ harm.", value: 33, fill: "#8B5CF6" },
    { name: "4ᵉ harm.", value: 25, fill: "#8B5CF6" },
    { name: "5ᵉ harm.", value: 20, fill: "#8B5CF6" },
    { name: "6ᵉ harm.", value: 17, fill: "#8B5CF6" },
  ];

  const productionSpectrumData = [
    { name: "Sub", value: 45, fill: "#8B5CF6" },
    { name: "Bass", value: 65, fill: "#8B5CF6" },
    { name: "Low-mid", value: 80, fill: "#8B5CF6" },
    { name: "Mid", value: 70, fill: "#8B5CF6" },
    { name: "High-mid", value: 55, fill: "#8B5CF6" },
    { name: "High", value: 40, fill: "#8B5CF6" },
  ];

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Aspects Techniques</h1>
        <p className="text-lg text-muted-foreground">
          Explorez les fondements techniques de la musique, de la théorie à la production moderne.
        </p>
      </div>

      <Tabs defaultValue="theorie" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="theorie">Théorie Musicale</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="technologies">Technologies</TabsTrigger>
          <TabsTrigger value="notation">Notation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="theorie">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Les bases de la théorie musicale</CardTitle>
                  <CardDescription>Comprendre le langage de la musique</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    La théorie musicale est l'ensemble des principes qui régissent l'organisation des sons dans la musique. 
                    Elle fournit le vocabulaire et la grammaire nécessaires pour comprendre, analyser et créer de la musique.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notation et solfège</h3>
                      <p className="text-muted-foreground">
                        La notation musicale permet de transcrire les idées musicales sur papier, 
                        tandis que le solfège développe la capacité à lire et interpréter cette notation.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Lecture des notes sur une portée</li>
                        <li>Compréhension des rythmes et des mesures</li>
                        <li>Interprétation des nuances et articulations</li>
                        <li>Technique du chant à vue</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Harmonie et contrepoint</h3>
                      <p className="text-muted-foreground">
                        L'harmonie étudie la combinaison verticale des sons (accords), 
                        le contrepoint explore leur combinaison horizontale (mélodies simultanées).
                      </p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        <li>Analyse des progressions d'accords</li>
                        <li>Construction des cadences</li>
                        <li>Règles du mouvement des voix</li>
                        <li>Techniques d'imitation et de canon</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Structures et formes</h3>
                      <p className="text-muted-foreground">
                        L'architecture musicale organise les idées dans le temps, créant cohérence et développement.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="font-medium">Formes courantes:</h4>
                        <div className="grid grid-cols-2 gap-2 mt-1 text-sm">
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Forme sonate</p>
                            <p className="text-xs text-muted-foreground">Exposition, développement, réexposition</p>
                          </div>
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Forme ABA</p>
                            <p className="text-xs text-muted-foreground">Section, contraste, retour</p>
                          </div>
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Forme rondo</p>
                            <p className="text-xs text-muted-foreground">ABACA... Refrain alternant</p>
                          </div>
                          <div className="bg-background p-2 rounded">
                            <p className="font-medium">Variations</p>
                            <p className="text-xs text-muted-foreground">Thème modifié successivement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Rythme et métrique</h3>
                      <p className="text-muted-foreground">
                        Organisation des durées et des accentuations, créant mouvement et pulsation.
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Métriques simples</h4>
                          <ul className="text-xs text-muted-foreground list-disc pl-4">
                            <li>Binaire: 2/4, 4/4</li>
                            <li>Ternaire: 3/4, 3/8</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Métriques complexes</h4>
                          <ul className="text-xs text-muted-foreground list-disc pl-4">
                            <li>Asymétriques: 5/8, 7/4</li>
                            <li>Composées: 6/8, 9/8, 12/8</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Intervalles et gammes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium">Types d'intervalles</h4>
                        <p className="text-xs text-muted-foreground mb-1">Distance entre deux notes:</p>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div>- Seconde</div>
                          <div>- Sixte</div>
                          <div>- Tierce</div>
                          <div>- Septième</div>
                          <div>- Quarte</div>
                          <div>- Octave</div>
                          <div>- Quinte</div>
                          <div>- Neuvième+</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Types de gammes</h4>
                        <p className="text-xs text-muted-foreground mb-1">Séquences organisées de notes:</p>
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          <div>- Majeure</div>
                          <div>- Pentatonique</div>
                          <div>- Mineure naturelle</div>
                          <div>- Blues</div>
                          <div>- Mineure harmonique</div>
                          <div>- Modes grecs</div>
                          <div>- Mineure mélodique</div>
                          <div>- Gammes exotiques</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <FrequencySpectrumCard
                title="Série harmonique"
                description="Base acoustique de la théorie musicale"
                data={theorySpectrumData}
              />
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Applications pratiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-medium">Composition</h3>
                      <p className="text-muted-foreground">
                        Appliquer les principes théoriques pour créer des œuvres cohérentes et expressives
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Improvisation</h3>
                      <p className="text-muted-foreground">
                        Créer spontanément en s'appuyant sur les structures harmoniques et rythmiques
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Analyse musicale</h3>
                      <p className="text-muted-foreground">
                        Décoder les œuvres pour comprendre leurs structures et techniques
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Éducation musicale</h3>
                      <p className="text-muted-foreground">
                        Transmettre les connaissances et développer l'oreille musicale
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="production">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Production musicale</CardTitle>
                  <CardDescription>Du studio à la diffusion</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    La production musicale englobe tous les aspects techniques de l'enregistrement, 
                    du mixage et du mastering d'une œuvre musicale, ainsi que sa préparation pour la diffusion.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Enregistrement</h3>
                      <p className="text-muted-foreground">
                        Des techniques de prise de son aux équipements spécialisés, 
                        découvrez comment capturer le son avec précision et créativité.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Techniques essentielles:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Placement de microphones</li>
                          <li>Traitement du signal</li>
                          <li>Préamplification</li>
                          <li>Conversion analogique/numérique</li>
                          <li>Gestion des prises et versions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Mixage</h3>
                      <p className="text-muted-foreground">
                        L'art d'équilibrer les différents éléments sonores pour créer un ensemble cohérent, 
                        expressif et adapté au format de diffusion visé.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Outils de mixage:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Égalisation (EQ)</li>
                          <li>Compression dynamique</li>
                          <li>Effets spatiaux (reverb, delay)</li>
                          <li>Automation</li>
                          <li>Bus et groupes</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Mastering</h3>
                      <p className="text-muted-foreground">
                        La touche finale qui optimise le son pour différentes plateformes de diffusion 
                        et assure la cohérence entre les morceaux d'un album.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Processus de mastering:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Égalisation finale</li>
                          <li>Compression multi-bande</li>
                          <li>Maximisation du niveau</li>
                          <li>Stéréo enhancement</li>
                          <li>Préparation pour formats spécifiques</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Workflow de production</h3>
                    <div className="relative">
                      <div className="absolute top-0 bottom-0 left-[15%] w-0.5 bg-primary/20"></div>
                      
                      <div className="grid md:grid-cols-4 gap-4 relative">
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">1. Pré-production</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Planification, arrangements, maquettes et préparation des sessions
                          </p>
                        </div>
                        
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">2. Enregistrement</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Captation des instruments, pistes multipistes, édition des prises
                          </p>
                        </div>
                        
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">3. Mixage</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Balance, effets, automation, traitement général
                          </p>
                        </div>
                        
                        <div className="bg-background p-3 rounded-md relative">
                          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-4 h-4 bg-primary rounded-full z-10"></div>
                          <h4 className="font-medium">4. Mastering</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Finalisation, optimisation pour la diffusion, cohérence globale
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Rôle du producteur</h3>
                      <p className="text-muted-foreground">
                        Au-delà de la technique, le producteur est souvent un collaborateur créatif qui aide à concrétiser la vision artistique.
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Direction artistique</p>
                          <p className="text-xs text-muted-foreground">Guider les choix esthétiques</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Gestion de projet</p>
                          <p className="text-xs text-muted-foreground">Budget, planning, coordination</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Styles de production</h3>
                      <p className="text-muted-foreground">
                        Chaque genre musical a ses conventions de production qui définissent son identité sonore.
                      </p>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Production minimaliste</p>
                          <p className="text-xs text-muted-foreground">Folk, jazz acoustique</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Production dense</p>
                          <p className="text-xs text-muted-foreground">Pop moderne, EDM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <FrequencySpectrumCard
                title="Spectre audible"
                description="Répartition typique des fréquences en production"
                data={productionSpectrumData}
              />
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Configuration de studio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">Home Studio Basique</h3>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-0.5">
                      <li>Interface audio</li>
                      <li>Microphone à condensateur</li>
                      <li>Casque de monitoring</li>
                      <li>DAW (station audionumérique)</li>
                      <li>Traitement acoustique minimal</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">Studio Professionnel</h3>
                    <ul className="list-disc pl-4 text-xs text-muted-foreground space-y-0.5">
                      <li>Console de mixage</li>
                      <li>Convertisseurs haut de gamme</li>
                      <li>Collection de microphones</li>
                      <li>Monitoring précis</li>
                      <li>Traitement acoustique complet</li>
                      <li>Outboard hardware</li>
                    </ul>
                  </div>
                  
                  <div className="mt-4 text-sm">
                    <p className="italic text-muted-foreground">
                      "Le meilleur équipement est celui qui vous permet de capturer votre vision créative sans obstacles techniques."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="technologies">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Technologies musicales</CardTitle>
              <CardDescription>L'impact du numérique sur la création musicale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Les technologies ont profondément transformé la façon dont la musique est créée, 
                produite et consommée, offrant de nouvelles possibilités créatives et de nouveaux défis.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Settings className="h-5 w-5 text-muted-foreground" />
                    DAW et instruments virtuels
                  </h3>
                  <p className="text-muted-foreground">
                    Les stations de travail audio numériques et les instruments virtuels 
                    ont démocratisé la production musicale, rendant accessibles des sons auparavant hors de portée.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="text-sm font-medium">Principales DAW:</h4>
                    <div className="grid grid-cols-2 gap-1 mt-1 text-xs">
                      <div>• Ableton Live</div>
                      <div>• Logic Pro</div>
                      <div>• Pro Tools</div>
                      <div>• FL Studio</div>
                      <div>• Cubase</div>
                      <div>• Reaper</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Waveform className="h-5 w-5 text-muted-foreground" />
                    Traitement audio avancé
                  </h3>
                  <p className="text-muted-foreground">
                    Les algorithmes modernes permettent des manipulations du son autrefois impossibles, ouvrant de nouveaux horizons créatifs.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Correction de hauteur</p>
                      <p className="text-xs text-muted-foreground">Auto-Tune, Melodyne</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Time-stretching</p>
                      <p className="text-xs text-muted-foreground">Élastique Pro, Warp</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-muted-foreground" />
                    Intelligence artificielle
                  </h3>
                  <p className="text-muted-foreground">
                    De la composition assistée au mastering automatisé, l'IA transforme rapidement 
                    les processus créatifs et techniques de la production musicale.
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Composition</p>
                      <p className="text-xs text-muted-foreground">AIVA, Amper Music</p>
                    </div>
                    <div className="bg-primary/10 p-2 rounded-md">
                      <p className="text-sm font-medium">Mastering</p>
                      <p className="text-xs text-muted-foreground">LANDR, iZotope Ozone</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Évolution des technologies musicales</h3>
                <div className="relative">
                  <div className="absolute top-0 left-[5%] bottom-0 w-0.5 bg-primary/20"></div>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">1980s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Révolution MIDI et synthétiseurs numériques</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          L'adoption du protocole MIDI en 1983 permet aux instruments électroniques de communiquer entre eux.
                          Les synthétiseurs comme le Yamaha DX7 et le Roland D-50 définissent le son de la décennie.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">1990s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Production assistée par ordinateur</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Les premiers séquenceurs et DAW comme Cubase et Pro Tools transforment les ordinateurs personnels
                          en studios virtuels. La musique électronique explose en popularité avec l'émergence des échantillonneurs numériques.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">2000s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Démocratisation de la production</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Des logiciels comme FL Studio et Reason deviennent accessibles au grand public. 
                          L'Auto-Tune devient un effet créatif. Le format MP3 et les plateformes d'échange
                          bouleversent la distribution musicale.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">2010s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">Mobile et cloud</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Les applications musicales sur tablettes et smartphones permettent la création en mobilité. 
                          Le streaming transforme la consommation musicale. Les services cloud facilitent la collaboration à distance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-12 gap-4">
                      <div className="md:col-span-2 flex items-center justify-center">
                        <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold">2020s</div>
                      </div>
                      <div className="md:col-span-10 bg-background p-4 rounded-lg relative">
                        <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-primary rounded-full"></div>
                        <h4 className="font-medium">IA et réalité augmentée</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          Les algorithmes d'IA génèrent des compositions, assistent le mixage et le mastering. 
                          Les interfaces haptiques et la réalité augmentée transforment l'interaction avec les instruments virtuels.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Impacts sur les pratiques musicales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Création sans frontières</h3>
                  <p className="text-sm text-muted-foreground">
                    La technologie a permis aux musiciens de collaborer à distance, effaçant les contraintes géographiques
                    et facilitant les échanges interculturels.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Hybridation des processus</h3>
                  <p className="text-sm text-muted-foreground">
                    Les frontières entre composition, enregistrement et production se sont estompées,
                    créant un processus créatif plus fluide et intégré.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Nouvelles esthétiques</h3>
                  <p className="text-sm text-muted-foreground">
                    Des genres comme l'ambient, le glitch, l'IDM n'auraient pas existé sans les technologies 
                    qui ont permis leur développement.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Enjeux contemporains</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Propriété intellectuelle</h3>
                  <p className="text-sm text-muted-foreground">
                    L'échantillonnage, l'IA générative et le remix posent de nouvelles questions 
                    sur la nature de la création et les droits d'auteur.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Surcharge d'options</h3>
                  <p className="text-sm text-muted-foreground">
                    La profusion d'outils peut créer une paralysie créative. Certains artistes
                    reviennent à des contraintes volontaires pour stimuler leur créativité.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium">Durabilité numérique</h3>
                  <p className="text-sm text-muted-foreground">
                    Le streaming et l'obsolescence technologique posent des questions sur la pérennité
                    des œuvres musicales à l'ère numérique.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notation">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Systèmes de notation musicale</CardTitle>
                  <CardDescription>L'écriture de la musique à travers les cultures et les époques</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    La notation musicale permet de préserver et transmettre les idées musicales au-delà de la tradition orale. 
                    Différentes cultures et traditions ont développé leurs propres systèmes adaptés à leurs besoins spécifiques.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notation occidentale</h3>
                      <p className="text-muted-foreground">
                        Le système de portées à 5 lignes avec des notes et rythmes standardisés, développé progressivement depuis le Moyen Âge.
                      </p>
                      <div className="bg-muted p-3 rounded-md mt-2">
                        <h4 className="text-sm font-medium">Éléments clés:</h4>
                        <ul className="list-disc pl-4 text-xs text-muted-foreground mt-1 space-y-1">
                          <li>Clés (sol, fa, ut)</li>
                          <li>Altérations (dièses, bémols)</li>
                          <li>Figures rythmiques</li>
                          <li>Indications d'expression</li>
                          <li>Organisation en mesures</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notations alternatives</h3>
                      <p className="text-muted-foreground">
                        Des systèmes développés pour répondre à des besoins spécifiques ou simplifier l'apprentissage musical.
                      </p>
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Tablature</h4>
                          <p className="text-xs text-muted-foreground">
                            Système indiquant les positions des doigts plutôt que les hauteurs de notes,
                            couramment utilisé pour guitare et autres instruments à frettes.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Notation Chiffrée</h4>
                          <p className="text-xs text-muted-foreground">
                            Utilisation de chiffres pour représenter les degrés d'une gamme, comme dans
                            la méthode Kodály ou certaines notations pour musique chinoise.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notations contemporaines</h3>
                      <p className="text-muted-foreground">
                        Innovations graphiques du 20ème siècle pour représenter de nouveaux sons et techniques.
                      </p>
                      <div className="space-y-3 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Notation graphique</h4>
                          <p className="text-xs text-muted-foreground">
                            Utilisation de symboles visuels non standardisés pour suggérer des gestes sonores,
                            popularisée par des compositeurs comme John Cage et Karlheinz Stockhausen.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Notation électronique</h4>
                          <p className="text-xs text-muted-foreground">
                            Représentations spécifiques pour musique électronique et concrète,
                            comme les sonagrammes et les séquenceurs visuels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Évolution de la notation occidentale</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Neumes médiévaux</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          8ème-11ème siècles: Symboles placés au-dessus du texte pour indiquer des contours mélodiques approximatifs
                        </p>
                      </div>
                      
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Notation sur portée</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          11ème siècle: Guido d'Arezzo développe un système avec lignes horizontales pour préciser les hauteurs
                        </p>
                      </div>
                      
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Notation mensurelle</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          13ème-16ème siècles: Symbolisation précise des durées et rythmes pour la polyphonie
                        </p>
                      </div>
                      
                      <div className="bg-background p-3 rounded-md">
                        <h4 className="font-medium">Notation moderne</h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          17ème siècle à aujourd'hui: Standardisation du système avec barres de mesure et indications expressives
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Notations non-occidentales</h3>
                      <p className="text-muted-foreground">
                        Divers systèmes développés à travers le monde selon les besoins spécifiques de différentes traditions musicales.
                      </p>
                      <div className="grid grid-cols-1 gap-2 mt-2">
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Notation chinoise Jianpu</p>
                          <p className="text-xs text-muted-foreground">Système numérique (1-7) pour représenter les notes d'une gamme</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Sargam indien</p>
                          <p className="text-xs text-muted-foreground">Syllabes (Sa, Re, Ga, Ma...) pour les notes, avec symboles pour les ornements</p>
                        </div>
                        <div className="bg-muted p-2 rounded-md">
                          <p className="text-sm font-medium">Notation arabe</p>
                          <p className="text-xs text-muted-foreground">Systèmes adaptés aux micro-intervalles et modes maqam spécifiques</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Outils numériques</h3>
                      <p className="text-muted-foreground">
                        L'ère informatique a révolutionné l'édition et la diffusion de la notation musicale.
                      </p>
                      <div className="space-y-4 mt-2">
                        <div>
                          <h4 className="text-sm font-medium">Logiciels d'édition de partitions</h4>
                          <div className="grid grid-cols-3 gap-1 mt-1 text-xs">
                            <div className="bg-primary/10 p-1 rounded text-center">Finale</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Sibelius</div>
                            <div className="bg-primary/10 p-1 rounded text-center">MuseScore</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Dorico</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Notion</div>
                            <div className="bg-primary/10 p-1 rounded text-center">Flat.io</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Formats numériques</h4>
                          <div className="grid grid-cols-3 gap-1 mt-1 text-xs">
                            <div className="bg-primary/10 p-1 rounded text-center">MusicXML</div>
                            <div className="bg-primary/10 p-1 rounded text-center">MIDI</div>
                            <div className="bg-primary/10 p-1 rounded text-center">PDF</div>
                            <div className="bg-primary/10 p-1 rounded text-center">LilyPond</div>
                            <div className="bg-primary/10 p-1 rounded text-center">MEI</div>
                            <div className="bg-primary/10 p-1 rounded text-center">OMR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Applications pratiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-medium">Composition</h3>
                    <p className="text-muted-foreground">
                      La notation permet aux compositeurs de développer des structures complexes et d'assurer la transmission fidèle de leurs œuvres.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Interprétation</h3>
                    <p className="text-muted-foreground">
                      Pour les interprètes, la notation sert de guide tout en laissant une marge d'expression personnelle.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Analyse musicale</h3>
                    <p className="text-muted-foreground">
                      La représentation visuelle facilite l'étude des structures, motifs et techniques compositionnelles.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium">Pédagogie</h3>
                    <p className="text-muted-foreground">
                      Différents systèmes de notation sont adaptés à différents niveaux d'apprentissage et traditions d'enseignement.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compétences connexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted p-3 rounded-md">
                      <h3 className="text-sm font-medium">Lecture à vue</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Capacité à jouer ou chanter une partition lors d'une première lecture, 
                        compétence essentielle pour les musiciens professionnels.
                      </p>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <h3 className="text-sm font-medium">Transcription</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Art de mettre par écrit une musique entendue, nécessitant une oreille affûtée et une connaissance approfondie de la notation.
                      </p>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <h3 className="text-sm font-medium">Orchestration</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Connaissance des techniques d'écriture pour différents instruments et ensembles,
                        tenant compte de leurs spécificités et registres.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-sm italic text-center text-muted-foreground p-4 bg-primary/5 rounded-lg">
                <p>"La notation est à la musique ce que la carte est au territoire : une représentation utile mais incomplète."</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Ressources techniques</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Guides pratiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Des tutoriels pas à pas pour maîtriser les différents aspects de la production musicale, de l'enregistrement au mixage.
              </p>
              <Button asChild variant="outline">
                <Link to="/technique/guides">Consulter les guides</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Outils et logiciels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Une sélection d'outils recommandés pour la création musicale, avec des comparatifs et des conseils d'utilisation.
              </p>
              <Button asChild variant="outline">
                <Link to="/technique/outils">Découvrir les outils</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                Glossaire technique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Un dictionnaire complet des termes techniques utilisés en production musicale, théorie et acoustique.
              </p>
              <Button asChild variant="outline">
                <Link to="/technique/glossaire">Explorer le glossaire</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="bg-primary/5 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Formation continue</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Parcours d'apprentissage</h3>
            <p className="text-muted-foreground mb-3">
              Suivez nos programmes structurés pour approfondir vos connaissances techniques.
            </p>
            <div className="space-y-2">
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Production électronique</p>
                  <p className="text-xs text-muted-foreground">Du débutant au niveau avancé</p>
                </div>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Ingénierie du son</p>
                  <p className="text-xs text-muted-foreground">Techniques professionnelles</p>
                </div>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="bg-background p-3 rounded-md flex items-center justify-between">
                <div>
                  <p className="font-medium">Composition moderne</p>
                  <p className="text-xs text-muted-foreground">De l'inspiration à la partition</p>
                </div>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Workshops et masterclasses</h3>
            <p className="text-muted-foreground mb-3">
              Sessions intensives avec des professionnels pour perfectionner vos compétences.
            </p>
            <Button className="w-full" variant="default">
              Consulter le calendrier
            </Button>
            <p className="text-sm text-center text-muted-foreground mt-3">
              Formats disponibles en présentiel et en ligne
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AspectsTechniques;

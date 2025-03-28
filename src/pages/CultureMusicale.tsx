
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Music, Music2, Music3, Music4 } from "lucide-react";

const CultureMusicale = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Culture Musicale</h1>
        <p className="text-lg text-muted-foreground">
          Explorez l'histoire, les genres et l'évolution de la musique à travers les époques et les cultures.
        </p>
      </div>

      <Tabs defaultValue="histoire" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="histoire">Histoire de la Musique</TabsTrigger>
          <TabsTrigger value="genres">Genres Musicaux</TabsTrigger>
          <TabsTrigger value="instruments">Instruments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="histoire">
          <Card>
            <CardHeader>
              <CardTitle>Évolution de la musique à travers les âges</CardTitle>
              <CardDescription>Des premiers sons à la musique contemporaine</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                L'histoire de la musique est aussi ancienne que l'humanité elle-même. 
                Depuis les premiers instruments préhistoriques jusqu'aux productions numériques actuelles, 
                elle reflète l'évolution des sociétés et des technologies.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Antiquité et Moyen Âge</h3>
                  <p className="text-muted-foreground">
                    Des modes grecs aux chants grégoriens, découvrez les fondements théoriques qui ont influencé toute la musique occidentale.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Renaissance et Baroque</h3>
                  <p className="text-muted-foreground">
                    L'émergence de la polyphonie et des premières formes musicales complexes, avec des figures comme Monteverdi et Bach.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Classicisme et Romantisme</h3>
                  <p className="text-muted-foreground">
                    L'âge d'or de la musique occidentale, des symphonies de Mozart aux œuvres passionnées de Chopin et Liszt.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">XX<sup>e</sup> siècle et contemporain</h3>
                  <p className="text-muted-foreground">
                    L'explosion des styles et des expérimentations, du jazz à la musique électronique en passant par le minimalisme.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="genres">
          <Card>
            <CardHeader>
              <CardTitle>La diversité des genres musicaux</CardTitle>
              <CardDescription>Une exploration des différentes expressions musicales à travers le monde</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Les genres musicaux représentent les différentes façons dont la musique s'exprime selon les époques, 
                les cultures et les contextes sociaux. Chaque genre possède ses codes, son histoire et son évolution propre.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Musiques populaires</h3>
                  <p className="text-muted-foreground">
                    Du rock au hip-hop, en passant par la pop et l'électro, ces genres ont révolutionné la culture contemporaine.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Musiques traditionnelles</h3>
                  <p className="text-muted-foreground">
                    Des musiques africaines aux folklores asiatiques, découvrez la richesse des expressions culturelles mondiales.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Musiques savantes</h3>
                  <p className="text-muted-foreground">
                    De la musique classique aux compositions contemporaines, ces œuvres explorent les limites de l'art musical.
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <Link to="/culture/genres/carte-interactive">
                    Explorer la carte interactive des genres musicaux
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="instruments">
          <Card>
            <CardHeader>
              <CardTitle>Les instruments à travers le monde</CardTitle>
              <CardDescription>Exploration des outils de création musicale et leur évolution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Les instruments de musique sont les extensions de l'expression humaine, permettant de transformer 
                l'intention artistique en sons. Leur diversité reflète la richesse des cultures mondiales.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Familles d'instruments</h3>
                  <p className="text-muted-foreground">
                    Des cordes aux percussions, en passant par les vents et les claviers, chaque famille possède ses caractéristiques sonores propres.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Instruments électroniques</h3>
                  <p className="text-muted-foreground">
                    Des premiers synthétiseurs aux stations de travail numériques actuelles, l'électronique a révolutionné la création musicale.
                  </p>
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

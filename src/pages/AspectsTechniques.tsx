
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, BookOpen, Music } from "lucide-react";

const AspectsTechniques = () => {
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
        </TabsList>
        
        <TabsContent value="theorie">
          <Card>
            <CardHeader>
              <CardTitle>Les bases de la théorie musicale</CardTitle>
              <CardDescription>Comprendre le langage de la musique</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Harmonie et contrepoint</h3>
                  <p className="text-muted-foreground">
                    L'harmonie étudie la combinaison verticale des sons (accords), 
                    le contrepoint explore leur combinaison horizontale (mélodies simultanées).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="production">
          <Card>
            <CardHeader>
              <CardTitle>Production musicale</CardTitle>
              <CardDescription>Du studio à la diffusion</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Mixage</h3>
                  <p className="text-muted-foreground">
                    L'art d'équilibrer les différents éléments sonores pour créer un ensemble cohérent, 
                    expressif et adapté au format de diffusion visé.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Mastering</h3>
                  <p className="text-muted-foreground">
                    La touche finale qui optimise le son pour différentes plateformes de diffusion 
                    et assure la cohérence entre les morceaux d'un album.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="technologies">
          <Card>
            <CardHeader>
              <CardTitle>Technologies musicales</CardTitle>
              <CardDescription>L'impact du numérique sur la création musicale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Les technologies ont profondément transformé la façon dont la musique est créée, 
                produite et consommée, offrant de nouvelles possibilités créatives et de nouveaux défis.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">DAW et instruments virtuels</h3>
                  <p className="text-muted-foreground">
                    Les stations de travail audio numériques et les instruments virtuels 
                    ont démocratisé la production musicale, rendant accessibles des sons auparavant hors de portée.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Intelligence artificielle</h3>
                  <p className="text-muted-foreground">
                    De la composition assistée au mastering automatisé, l'IA transforme rapidement 
                    les processus créatifs et techniques de la production musicale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Ressources techniques</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default AspectsTechniques;

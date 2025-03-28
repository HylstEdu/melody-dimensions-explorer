
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Globe, ArrowRight, Music } from "lucide-react";
import { Link } from "react-router-dom";

const CultureMusicale = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 gradient-heading">Culture Musicale</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explorez l'évolution de la musique à travers les époques, les genres, et les traditions
          musicales du monde entier.
        </p>
      </header>

      <Tabs defaultValue="histoire" className="max-w-5xl mx-auto mb-16">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="histoire">Histoire de la musique</TabsTrigger>
          <TabsTrigger value="genres">Genres musicaux</TabsTrigger>
          <TabsTrigger value="monde">Musiques du monde</TabsTrigger>
        </TabsList>

        <TabsContent value="histoire" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">L'évolution de la musique à travers les âges</h2>
              <p className="mb-4">
                La musique accompagne l'humanité depuis ses origines préhistoriques. Des premiers
                instruments de percussion et flûtes primitives aux technologies numériques actuelles,
                son évolution reflète celle des sociétés qui l'ont créée.
              </p>
              <p className="mb-4">
                Chaque époque a apporté ses innovations et transformations, tant dans les instruments
                que dans les formes musicales et les pratiques d'écoute.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/culture/histoire/chronologie">Chronologie interactive <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Instruments de musique historiques" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-acoustic-500" />
                  Préhistoire et Antiquité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les premiers instruments retrouvés datent de plus de 40 000 ans. Les civilisations antiques 
                  comme l'Égypte, la Mésopotamie et la Grèce ont développé les premières théories musicales.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-acoustic-500" />
                  Moyen Âge à Baroque
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  De la musique sacrée médiévale aux innovations de la Renaissance et du Baroque, cette période
                  a établi les fondements de la musique occidentale que nous connaissons aujourd'hui.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Music className="h-5 w-5 text-acoustic-500" />
                  Ère moderne
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  L'industrialisation, l'enregistrement sonore et la mondialisation ont révolutionné la 
                  création et la diffusion musicale, conduisant à l'immense diversité actuelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="genres" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Exploration des genres musicaux</h2>
              <p className="mb-4">
                Les genres musicaux sont des catégories qui regroupent des œuvres musicales partageant 
                certaines caractéristiques stylistiques, techniques ou culturelles.
              </p>
              <p className="mb-4">
                Loin d'être des catégories hermétiques, les genres s'influencent mutuellement, se transforment 
                au fil du temps et donnent naissance à de nombreux sous-genres et hybridations.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/culture/genres/carte-interactive">Carte des genres <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Collection de disques vinyles" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Musique classique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Tradition savante occidentale s'étendant sur plusieurs siècles, de la Renaissance à nos jours.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/culture/genres/classique">Découvrir</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Jazz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Né au début du XXe siècle à La Nouvelle-Orléans, caractérisé par l'improvisation et le swing.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/culture/genres/jazz">Découvrir</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Rock</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Dérivé du rock and roll des années 1950, englobant une multitude de sous-genres.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/culture/genres/rock">Découvrir</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Électronique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Créée principalement avec des technologies électroniques, des premiers synthétiseurs à l'ère numérique.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/culture/genres/electronique">Découvrir</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="monde" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Traditions musicales du monde</h2>
              <p className="mb-4">
                Chaque culture à travers le monde a développé ses propres traditions musicales, reflétant 
                son histoire, ses valeurs et son environnement.
              </p>
              <p className="mb-4">
                Ces musiques traditionnelles utilisent souvent des instruments spécifiques, des systèmes d'échelles 
                et des formes rythmiques qui leur sont propres, créant une richesse sonore extraordinaire.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/culture/monde/carte">Atlas musical <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Instruments de musique traditionnels" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-acoustic-500" />
                  Musiques asiatiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Des traditions millénaires comme la musique classique indienne, chinoise ou japonaise 
                  ont développé des systèmes théoriques et esthétiques sophistiqués.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/culture/monde/inde">Inde</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/culture/monde/chine">Chine</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/culture/monde/japon">Japon</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-acoustic-500" />
                  Musiques africaines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Caractérisées par leur richesse rythmique et leurs fonctions sociales, les musiques africaines 
                  ont influencé de nombreux genres contemporains comme le jazz, le blues ou la samba.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/culture/monde/afrique-ouest">Afrique de l'Ouest</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/culture/monde/afrique-centrale">Afrique centrale</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Figures marquantes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Compositeurs influents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez les grands compositeurs qui ont révolutionné la musique au fil des siècles, 
                de Bach à Stravinsky en passant par Mozart, Beethoven et Debussy.
              </p>
              <Button variant="outline" asChild>
                <Link to="/culture/compositeurs">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Artistes légendaires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explorez les carrières et l'impact des artistes qui ont marqué la musique populaire 
                du XXe siècle à nos jours, des Beatles à Beyoncé.
              </p>
              <Button variant="outline" asChild>
                <Link to="/culture/artistes">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Innovateurs techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Rencontrez les visionnaires qui ont transformé la production et la technologie musicale, 
                de Léon Theremin à Brian Eno et aux pionniers de la musique électronique.
              </p>
              <Button variant="outline" asChild>
                <Link to="/culture/innovateurs">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CultureMusicale;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Headphones, Laptop, Music, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AspectsTechniques = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 gradient-heading">Aspects Techniques</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          De la théorie musicale aux technologies d'enregistrement, explorez les aspects techniques
          qui sous-tendent la création et la production musicale.
        </p>
      </header>

      <Tabs defaultValue="theorie" className="max-w-5xl mx-auto mb-16">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="theorie">Théorie musicale</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="diffusion">Diffusion et droits</TabsTrigger>
        </TabsList>

        <TabsContent value="theorie" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Fondamentaux de la théorie musicale</h2>
              <p className="mb-4">
                La théorie musicale fournit un langage et des concepts pour comprendre, analyser et 
                créer de la musique. Elle englobe les principes d'harmonie, de mélodie et de rythme.
              </p>
              <p className="mb-4">
                Ces connaissances sont essentielles tant pour les musiciens classiques que pour les 
                artistes contemporains, offrant une base commune pour l'expression musicale.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/technique/theorie/bases">Cours interactif <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Partition musicale" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Music className="h-5 w-5 text-music-500" />
                  Harmonie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  L'harmonie étudie la construction et l'enchaînement des accords. Elle s'intéresse aux 
                  relations verticales entre les notes et à leur progression dans le temps.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-music-500" />
                  Mélodie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  La mélodie concerne la succession horizontale des notes. Elle est souvent l'élément le plus 
                  mémorable d'une composition et peut être analysée en termes de phrases et de motifs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Settings className="h-5 w-5 text-music-500" />
                  Rythme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Le rythme organise la musique dans le temps. Il inclut des concepts comme la métrique, 
                  le tempo, les motifs rythmiques et la syncopation.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="production" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Production musicale</h2>
              <p className="mb-4">
                La production musicale moderne combine art et technologie pour transformer une idée musicale 
                en un enregistrement fini. Elle englobe l'enregistrement, l'édition, le mixage et le mastering.
              </p>
              <p className="mb-4">
                Avec la démocratisation des outils numériques, cette discipline autrefois réservée aux professionnels 
                est désormais accessible aux créateurs indépendants.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/technique/production/home-studio">Guide du home studio <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Studio d'enregistrement" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Headphones className="h-5 w-5 text-music-500" />
                  Enregistrement et édition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  L'enregistrement capte les performances musicales, tandis que l'édition permet de les 
                  perfectionner. Les technologies numériques offrent une flexibilité sans précédent.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/technique/production/enregistrement">Techniques</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/technique/production/microphones">Microphones</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Laptop className="h-5 w-5 text-music-500" />
                  Mixage et mastering
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Le mixage équilibre les différents éléments d'un enregistrement, tandis que le mastering 
                  finalise le son pour la distribution. Ces étapes cruciales façonnent l'expérience d'écoute.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/technique/production/mixage">Mixage</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/technique/production/mastering">Mastering</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="diffusion" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Diffusion et droits musicaux</h2>
              <p className="mb-4">
                La diffusion musicale a connu une révolution avec l'avènement du numérique, passant 
                des supports physiques au streaming et aux plateformes sociales.
              </p>
              <p className="mb-4">
                Parallèlement, les droits d'auteur et les aspects légaux restent essentiels pour protéger 
                le travail des créateurs et assurer leur rémunération équitable.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/technique/diffusion/plateformes">Guide des plateformes <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Streaming musical sur smartphone" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Droits d'auteur et licences</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Les droits d'auteur protègent les créations musicales et garantissent une compensation 
                pour leur utilisation. En France, la Sacem gère ces droits collectivement.
              </p>
              <p className="mb-4">
                Même pour un événement public organisé par une association, l'autorisation de la Sacem 
                et le paiement des droits sont obligatoires, sauf pour les œuvres du domaine public.
              </p>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" asChild>
                  <Link to="/technique/diffusion/droits">Comprendre les droits</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/technique/diffusion/licences">Types de licences</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Ressources pratiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Logiciels de production</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez les DAW (Digital Audio Workstations), synthétiseurs virtuels et autres 
                outils essentiels pour la création musicale moderne.
              </p>
              <Button variant="outline" asChild>
                <Link to="/technique/logiciels">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Équipement recommandé</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Guides d'achat et comparatifs pour constituer votre studio, du matériel de base aux 
                configurations professionnelles.
              </p>
              <Button variant="outline" asChild>
                <Link to="/technique/equipement">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Tutoriels et formations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Accédez à des tutoriels vidéo, exercices pratiques et ressources pédagogiques pour 
                développer vos compétences techniques.
              </p>
              <Button variant="outline" asChild>
                <Link to="/technique/tutoriels">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AspectsTechniques;

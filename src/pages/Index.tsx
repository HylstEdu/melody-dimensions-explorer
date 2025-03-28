
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRightIcon, BookOpenIcon, HeadphonesIcon, MusicIcon } from "lucide-react";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      
      {/* Articles récents */}
      <section className="py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Articles récents</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez nos derniers articles sur le monde fascinant de la musique.
            </p>
          </div>
          
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Les bases de l'acoustique musicale</CardTitle>
                <CardDescription>Physique du Son</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Ondes sonores" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Explorez les principes fondamentaux qui régissent la propagation du son et comment ils s'appliquent à la musique.
                </p>
                <Button variant="outline" asChild size="sm" className="gap-1">
                  <Link to="/physique-son/acoustique">
                    Lire l'article <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>L'évolution des genres musicaux</CardTitle>
                <CardDescription>Culture Musicale</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Instruments de musique" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Retracez l'histoire des principaux genres musicaux et leurs influences croisées à travers les époques.
                </p>
                <Button variant="outline" asChild size="sm" className="gap-1">
                  <Link to="/culture/genres">
                    Lire l'article <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>La musique à l'ère numérique</CardTitle>
                <CardDescription>Aspects Techniques</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Studio numérique" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground mb-4">
                  Comment les technologies numériques ont révolutionné la création, la production et la diffusion musicale.
                </p>
                <Button variant="outline" asChild size="sm" className="gap-1">
                  <Link to="/technique/numerique">
                    Lire l'article <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Section ressources */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ressources pédagogiques</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Des outils interactifs pour approfondir vos connaissances musicales.
            </p>
          </div>
          
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-music-100 text-music-600">
                <BookOpenIcon className="h-6 w-6" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Glossaire musical</h3>
                <p className="mt-2 text-muted-foreground">
                  Un lexique complet des termes techniques utilisés en musique, des plus basiques aux plus spécialisés.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-acoustic-100 text-acoustic-600">
                <HeadphonesIcon className="h-6 w-6" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Bibliothèque sonore</h3>
                <p className="mt-2 text-muted-foreground">
                  Écoutez des exemples sonores illustrant les concepts théoriques abordés dans nos articles.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <MusicIcon className="h-6 w-6" />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Quizz musicaux</h3>
                <p className="mt-2 text-muted-foreground">
                  Testez vos connaissances avec nos quiz interactifs couvrant tous les aspects de la musique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

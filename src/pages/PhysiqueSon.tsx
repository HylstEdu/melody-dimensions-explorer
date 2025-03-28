
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Volume2, Ear, Waveform } from "lucide-react";
import { Link } from "react-router-dom";

const PhysiqueSon = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 gradient-heading">La Physique du Son</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Découvrez les principes scientifiques qui définissent la nature du son, sa propagation
          et sa perception par l'oreille humaine.
        </p>
      </header>

      <Tabs defaultValue="acoustique" className="max-w-5xl mx-auto mb-16">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="acoustique">Les bases de l'acoustique</TabsTrigger>
          <TabsTrigger value="ondes">Caractéristiques des ondes</TabsTrigger>
          <TabsTrigger value="audition">L'audition humaine</TabsTrigger>
        </TabsList>
        <TabsContent value="acoustique" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Qu'est-ce que le son ?</h2>
              <p className="mb-4">
                Le son est une onde de pression qui se propage dans un milieu élastique, comme l'air ou l'eau. 
                Contrairement à la lumière, le son ne peut pas se propager dans le vide.
              </p>
              <p className="mb-4">
                Cette onde est créée par la vibration d'un objet, qui comprime et dilate le milieu environnant,
                créant ainsi des zones de surpression et de dépression qui se propagent.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/physique-son/acoustique/definition">En savoir plus <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Visualisation d'ondes sonores" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Équation de propagation du son</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L'équation des ondes acoustiques dans un fluide homogène s'écrit :
              </p>
              <div className="bg-muted p-4 rounded-md font-mono text-center mb-4">
                ∂²p/∂t² = c² ∇²p
              </div>
              <p>
                Où p est la pression acoustique, t le temps, c la vitesse du son dans le milieu,
                et ∇² l'opérateur laplacien. Cette équation décrit comment l'onde sonore se propage
                dans l'espace et le temps.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ondes" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Caractéristiques des ondes sonores</h2>
              <p className="mb-4">
                Les ondes sonores sont caractérisées par plusieurs paramètres qui déterminent
                comment nous les percevons : fréquence, amplitude, phase et timbre.
              </p>
              <p className="mb-4">
                La fréquence, mesurée en hertz (Hz), détermine la hauteur du son perçu, tandis que
                l'amplitude, souvent mesurée en décibels (dB), correspond à l'intensité sonore.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/physique-son/ondes/caracteristiques">Explorer ces concepts <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1557858310-9052820906f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Visualisation de fréquences sonores" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Waveform className="h-5 w-5 text-music-500" />
                  Fréquence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  La fréquence détermine la hauteur d'un son. Plus la fréquence est élevée, plus le son est aigu.
                  Elle se mesure en hertz (Hz), qui correspond au nombre d'oscillations par seconde.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Volume2 className="h-5 w-5 text-music-500" />
                  Amplitude
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  L'amplitude représente l'intensité du son. Plus grande est l'amplitude, plus le son est fort.
                  L'intensité sonore est généralement mesurée en décibels (dB).
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Ear className="h-5 w-5 text-music-500" />
                  Timbre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Le timbre est ce qui permet de distinguer deux sons de même hauteur et de même intensité.
                  Il est déterminé par la présence et l'intensité des harmoniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="audition" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">L'audition humaine</h2>
              <p className="mb-4">
                L'audition humaine est un processus complexe qui commence par la captation des ondes sonores
                par l'oreille externe, puis leur conversion en signaux nerveux par l'oreille interne.
              </p>
              <p className="mb-4">
                L'oreille humaine peut percevoir des sons de fréquences comprises entre 20 Hz et 20 000 Hz,
                mais cette gamme varie selon l'âge et peut être affectée par divers facteurs.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/physique-son/audition">Comprendre l'audition <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516224398532-64c583939345?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Anatomie de l'oreille" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Anatomie de l'oreille</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                L'oreille humaine est composée de trois parties principales :
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li><strong>L'oreille externe</strong> : composée du pavillon et du conduit auditif, elle capte et dirige les ondes sonores vers le tympan.</li>
                <li><strong>L'oreille moyenne</strong> : comprend le tympan et trois osselets (marteau, enclume, étrier) qui amplifient les vibrations.</li>
                <li><strong>L'oreille interne</strong> : contient la cochlée, où les vibrations sont converties en signaux électriques envoyés au cerveau.</li>
              </ol>
              <p>
                Ce système sophistiqué nous permet de percevoir une vaste gamme de sons et de les localiser dans l'espace.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Explorer plus en profondeur</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Instruments de musique et acoustique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez comment les principes d'acoustique s'appliquent aux différentes familles d'instruments 
                et comment leur conception influence leur son caractéristique.
              </p>
              <Button variant="outline" asChild>
                <Link to="/physique-son/instruments">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Acoustique des salles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explorez comment l'architecture et les matériaux influencent la propagation du son dans 
                les espaces clos, et l'importance de l'acoustique dans les salles de concert.
              </p>
              <Button variant="outline" asChild>
                <Link to="/physique-son/acoustique-salles">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PhysiqueSon;

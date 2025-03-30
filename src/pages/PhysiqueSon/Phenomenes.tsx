import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Waves, 
  RepeatIcon,
  ArrowLeftIcon,
  Waveform
} from "lucide-react";

const Phenomenes = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/physique-son" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Retour à Physique du Son
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">Phénomènes Acoustiques</h1>
        <p className="text-lg text-muted-foreground">
          Découvrez les phénomènes fascinants qui régissent le comportement du son dans différents environnements.
        </p>
      </div>

      <Tabs defaultValue="doppler" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="doppler">Effet Doppler</TabsTrigger>
          <TabsTrigger value="resonance">Résonance</TabsTrigger>
          <TabsTrigger value="harmoniques">Harmoniques</TabsTrigger>
          <TabsTrigger value="battements">Battements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="doppler">
          <Card>
            <CardHeader>
              <CardTitle>L'effet Doppler</CardTitle>
              <CardDescription>Le changement de fréquence perçue d'une onde en mouvement relatif</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    L'effet Doppler est le changement de fréquence d'une onde pour un observateur en mouvement par rapport à la source de cette onde. Ce phénomène explique pourquoi le son d'une sirène d'ambulance semble plus aigu lorsqu'elle s'approche, puis plus grave lorsqu'elle s'éloigne.
                  </p>
                  <h3 className="text-lg font-semibold">Formule simplifiée</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <p className="font-mono">f' = f × (v + v<sub>r</sub>)/(v + v<sub>s</sub>)</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Où f' est la fréquence perçue, f est la fréquence émise, v est la vitesse du son dans le milieu,
                      v<sub>r</sub> est la vitesse du récepteur et v<sub>s</sub> est la vitesse de la source.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <Waveform className="w-full h-auto text-acoustic-600 animate-pulse-slow" />
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-acoustic-600 rounded-full animate-wave"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Applications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Radars de vitesse (pour mesurer la vitesse des véhicules)</li>
                  <li>Échographie médicale et effet Doppler couleur</li>
                  <li>Astronomie (pour déterminer si les galaxies s'éloignent ou se rapprochent)</li>
                  <li>Sonars et systèmes de navigation sous-marine</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resonance">
          <Card>
            <CardHeader>
              <CardTitle>Résonance</CardTitle>
              <CardDescription>Quand un système vibre à sa fréquence naturelle</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    La résonance est un phénomène qui se produit lorsqu'un système est soumis à des oscillations de même fréquence (ou proche) que sa fréquence propre. Le système absorbe alors l'énergie des oscillations et son amplitude augmente considérablement.
                  </p>
                  <h3 className="text-lg font-semibold">Fréquence de résonance</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <p className="font-mono">f = 1/(2π) × √(k/m)</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Où f est la fréquence de résonance, k est la constante de raideur et m est la masse.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <RepeatIcon className="w-full h-auto text-acoustic-600" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Exemples de résonance</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Le pont de Tacoma Narrows (détruit par résonance due au vent)</li>
                  <li>Les instruments à cordes et à vent (utilisation de la résonance pour amplifier le son)</li>
                  <li>Les circuits RLC en électronique</li>
                  <li>Les cavités acoustiques (comme les caisses de résonance des instruments)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="harmoniques">
          <Card>
            <CardHeader>
              <CardTitle>Harmoniques</CardTitle>
              <CardDescription>Les multiples entiers de la fréquence fondamentale</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    Les harmoniques sont des multiples entiers de la fréquence fondamentale d'une onde sonore. Elles contribuent au timbre unique de chaque instrument ou voix, permettant de distinguer un piano d'un violon même lorsqu'ils jouent la même note.
                  </p>
                  <h3 className="text-lg font-semibold">Séries harmoniques</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <p className="font-mono">f<sub>n</sub> = n × f<sub>0</sub></p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Où f<sub>n</sub> est la fréquence de la n-ième harmonique et f<sub>0</sub> est la fréquence fondamentale.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <Waves className="w-full h-auto text-acoustic-600" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Importance des harmoniques</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Déterminent le timbre caractéristique de chaque instrument</li>
                  <li>Permettent la synthèse sonore (additive, soustractive)</li>
                  <li>Sont à la base de l'analyse spectrale en acoustique</li>
                  <li>Essentiels pour la compréhension de l'acoustique des salles</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="battements">
          <Card>
            <CardHeader>
              <CardTitle>Battements</CardTitle>
              <CardDescription>Interférences entre deux ondes de fréquences légèrement différentes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    Les battements sont des variations périodiques de l'amplitude sonore résultant de la superposition de deux ondes de fréquences légèrement différentes. Ce phénomène est utilisé pour accorder les instruments de musique.
                  </p>
                  <h3 className="text-lg font-semibold">Fréquence des battements</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <p className="font-mono">f<sub>battements</sub> = |f<sub>1</sub> - f<sub>2</sub>|</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Où f<sub>1</sub> et f<sub>2</sub> sont les fréquences des deux ondes.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <Waveform className="w-full h-auto text-acoustic-600" />
                    <Waveform className="w-full h-auto text-acoustic-400 absolute top-0 left-0 opacity-50" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Applications des battements</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Accordage d'instruments de musique</li>
                  <li>Création d'effets sonores (tremolo, vibrato)</li>
                  <li>Détection d'ondes radio en télécommunications</li>
                  <li>Thérapie par sons binauraux (utilisation de battements pour influencer les ondes cérébrales)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Expériences interactives</CardTitle>
            <CardDescription>Visualisez les phénomènes acoustiques avec nos simulations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Nos simulations interactives vous permettent de manipuler les paramètres et d'observer en temps réel le comportement des ondes sonores.
            </p>
            <Button asChild variant="outline">
              <Link to="/physique-son/phenomenes/simulations">Explorer les simulations</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Articles approfondis</CardTitle>
            <CardDescription>Pour aller plus loin dans votre compréhension</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Consultez nos articles détaillés rédigés par des experts en acoustique pour approfondir vos connaissances.
            </p>
            <Button asChild variant="outline">
              <Link to="/physique-son/phenomenes/articles">Lire les articles</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Phenomenes;

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Music, 
  Violin,
  ArrowLeftIcon,
  Wind,
  Drumstick  
} from "lucide-react";

const Instruments = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/physique-son" className="flex items-center gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Retour à Physique du Son
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-4">Instruments et Acoustique</h1>
        <p className="text-lg text-muted-foreground">
          Comment les lois de la physique acoustique influencent la conception et le son des instruments de musique.
        </p>
      </div>

      <Tabs defaultValue="cordes" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="cordes">Instruments à cordes</TabsTrigger>
          <TabsTrigger value="vents">Instruments à vent</TabsTrigger>
          <TabsTrigger value="percussion">Percussions</TabsTrigger>
          <TabsTrigger value="electroniques">Instruments électroniques</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cordes">
          <Card>
            <CardHeader>
              <CardTitle>Instruments à cordes</CardTitle>
              <CardDescription>Vibration des cordes et amplification par résonance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    Les instruments à cordes produisent leur son par la vibration des cordes tendues. La hauteur du son dépend de la longueur, de la tension et de la masse linéique de la corde.
                  </p>
                  <h3 className="text-lg font-semibold">Fréquence fondamentale d'une corde vibrante</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <p className="font-mono">f = (1/2L) × √(T/μ)</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Où L est la longueur de la corde, T est la tension et μ est la masse linéique.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <Violin className="w-full h-auto text-acoustic-600" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cordes frottées</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Violon</li>
                    <li>Alto</li>
                    <li>Violoncelle</li>
                    <li>Contrebasse</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    L'archet fait vibrer la corde par adhérence-glissement (stick-slip).
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cordes pincées</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Guitare</li>
                    <li>Harpe</li>
                    <li>Luth</li>
                    <li>Banjo</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Le pincement déplace la corde qui oscille ensuite librement.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="vents">
          <Card>
            <CardHeader>
              <CardTitle>Instruments à vent</CardTitle>
              <CardDescription>Colonnes d'air vibrantes et résonateurs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    Les instruments à vent produisent des sons par la vibration d'une colonne d'air à l'intérieur d'un tube. La hauteur du son dépend principalement de la longueur du tube et de la position des trous ou des pistons.
                  </p>
                  <h3 className="text-lg font-semibold">Fréquence fondamentale d'un tube</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <p className="font-mono">
                      <strong>Tube fermé à une extrémité:</strong> f = v/(4L)<br />
                      <strong>Tube ouvert aux deux extrémités:</strong> f = v/(2L)
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Où v est la vitesse du son dans l'air et L est la longueur du tube.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <Wind className="w-full h-auto text-acoustic-600" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bois</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Flûte</li>
                    <li>Clarinette</li>
                    <li>Hautbois</li>
                    <li>Saxophone</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    L'anche ou le biseau fait vibrer l'air dans le tube.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Cuivres</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Trompette</li>
                    <li>Trombone</li>
                    <li>Cor</li>
                    <li>Tuba</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Les lèvres du musicien font office d'anche et mettent l'air en vibration.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="percussion">
          <Card>
            <CardHeader>
              <CardTitle>Percussions</CardTitle>
              <CardDescription>Vibration de membranes, plaques et barres</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    Les instruments à percussion produisent du son par l'impact direct ou indirect sur une surface vibrante, qui peut être une membrane tendue, une plaque ou une barre.
                  </p>
                  <h3 className="text-lg font-semibold">Types de vibrations</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <p className="font-mono">
                      <strong>Membrane:</strong> Modes de vibration complexes<br />
                      <strong>Barre:</strong> f ~ 1/L² × √(EI/ρA)
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Où E est le module de Young, I est le moment d'inertie, ρ est la densité, 
                      A est l'aire de la section et L est la longueur.
                    </p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <Drumstick className="w-full h-auto text-acoustic-600" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Membranophones</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Tambour</li>
                    <li>Timbale</li>
                    <li>Djembé</li>
                    <li>Caisse claire</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Utilisent une membrane tendue comme résonateur principal.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Idiophones</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Xylophone</li>
                    <li>Marimba</li>
                    <li>Vibraphone</li>
                    <li>Triangle</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    L'instrument lui-même vibre pour produire le son.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="electroniques">
          <Card>
            <CardHeader>
              <CardTitle>Instruments électroniques</CardTitle>
              <CardDescription>Génération et manipulation électronique du son</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <p>
                    Les instruments électroniques génèrent ou modifient le son par des moyens électriques ou électroniques, soit en créant des signaux électriques qui sont convertis en son, soit en captant et transformant des vibrations acoustiques.
                  </p>
                  <h3 className="text-lg font-semibold">Méthodes de synthèse</h3>
                  <div className="p-4 bg-acoustic-50 rounded-md">
                    <ul className="space-y-1">
                      <li><strong>Synthèse additive:</strong> Somme d'harmoniques</li>
                      <li><strong>Synthèse soustractive:</strong> Filtrage d'un signal riche</li>
                      <li><strong>Modulation FM:</strong> Modulation de fréquence</li>
                      <li><strong>Modélisation physique:</strong> Simule le comportement acoustique</li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative w-full max-w-xs">
                    <Music className="w-full h-auto text-acoustic-600" />
                  </div>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instruments électriques</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Guitare électrique</li>
                    <li>Basse électrique</li>
                    <li>Piano électrique</li>
                    <li>Violon électrique</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Utilisent des capteurs pour transformer les vibrations mécaniques en signaux électriques.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Instruments numériques</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Synthétiseurs</li>
                    <li>Samplers</li>
                    <li>Boîtes à rythmes</li>
                    <li>Instruments virtuels</li>
                  </ul>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Utilisent des processus numériques pour générer ou manipuler le son.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Laboratoire acoustique</CardTitle>
            <CardDescription>Analyse spectrale et modélisation des instruments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Découvrez nos outils d'analyse qui permettent de visualiser et comprendre les caractéristiques acoustiques des instruments de musique.
            </p>
            <Button asChild variant="outline">
              <Link to="/physique-son/instruments/laboratoire">Accéder au laboratoire</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conception et lutherie</CardTitle>
            <CardDescription>L'art et la science de la fabrication d'instruments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Explorez comment les luthiers utilisent les principes acoustiques pour concevoir et améliorer les instruments de musique.
            </p>
            <Button asChild variant="outline">
              <Link to="/physique-son/instruments/lutherie">En savoir plus</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Instruments;

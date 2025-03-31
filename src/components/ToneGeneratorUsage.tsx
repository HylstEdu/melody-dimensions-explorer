
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Volume2, Music, Headphones, Mic } from "lucide-react";

const ToneGeneratorUsage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Utilisations du générateur de sons</CardTitle>
        <CardDescription>
          Découvrez les applications pratiques et scientifiques de cet outil sonore
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="applications" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="experiments">Expériences</TabsTrigger>
            <TabsTrigger value="tonality">Tonalité</TabsTrigger>
            <TabsTrigger value="waveforms">Formes d'onde</TabsTrigger>
          </TabsList>
          
          <TabsContent value="applications" className="space-y-4 mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <Volume2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Test d'équipement</h3>
                  <p className="text-muted-foreground">
                    Idéal pour tester le câblage électrique d'appareils audio et diagnostiquer les problèmes de lecture, 
                    ou pour évaluer la gamme de fréquences que vos haut-parleurs, subwoofers ou casques peuvent reproduire.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Accordage d'instruments</h3>
                  <p className="text-muted-foreground">
                    Utilisez cet outil pour écouter la hauteur précise de n'importe quelle note et développer 
                    votre oreille musicale. Parfait pour accorder à l'oreille des instruments comme une guitare, 
                    un piano ou un violon.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Test d'audition</h3>
                  <p className="text-muted-foreground">
                    Testez votre audition pour déterminer les fréquences les plus hautes et les plus basses que 
                    vous pouvez percevoir. En général, l'audition humaine s'étend de 20 à 17 000 Hz, mais la 
                    perception des hautes fréquences diminue avec l'âge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Acouphènes</h3>
                  <p className="text-muted-foreground">
                    Si vous souffrez d'acouphènes à tonalité pure, cet outil peut vous aider à déterminer 
                    leur fréquence exacte, facilitant la découverte de sons masquants pour soulager la gêne auditive. 
                    <span className="text-xs block mt-1 italic">Note: Ceci n'est pas un équipement médical et ne remplace pas un diagnostic médical approprié.</span>
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="experiments" className="space-y-6 mt-4">
            <div>
              <h3 className="text-xl font-medium mb-3">Expériences acoustiques fascinantes</h3>
              
              <div className="space-y-6 mt-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Battements acoustiques</h4>
                  <p className="text-muted-foreground mb-3">
                    Ouvrez ce générateur dans deux onglets et jouez simultanément deux sons de fréquences légèrement différentes 
                    (par exemple, 600 Hz et 602 Hz). Vous percevrez une pulsation rythmique fascinante.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ce phénomène acoustique, appelé "battement", se produit lorsque deux fréquences distinctes mais proches 
                    sont jouées ensemble. Bien que ces sons soient de hauteurs différentes, notre cerveau les interprète 
                    comme un seul son pulsant.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Battements binauraux</h4>
                  <p className="text-muted-foreground mb-3">
                    Avec un casque, ouvrez le générateur dans deux onglets. Réglez une fréquence différente 
                    dans chaque onglet (par exemple 440 Hz et 444 Hz) et ajustez la balance pour que chaque 
                    oreille n'entende qu'une seule fréquence.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Votre cerveau interprétera ces deux fréquences distinctes comme un nouveau troisième son. 
                    Certaines personnes trouvent que l'écoute des battements binauraux favorise la concentration 
                    pendant la méditation, améliore le sommeil ou soulage les douleurs chroniques.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tonality" className="mt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Qu'est-ce que la tonalité ?</h3>
              
              <div className="prose max-w-none dark:prose-invert prose-sm">
                <p>
                  La tonalité correspond à notre perception de la fréquence d'un son. Cette fréquence est produite 
                  par des vibrations créant des ondes sonores.
                </p>
                
                <p>
                  Prenons l'exemple d'une guitare : le son entendu provient de la vibration des cordes, créant 
                  des ondes qui se propagent dans l'air jusqu'à nos oreilles.
                </p>
                
                <p>
                  Les vibrations rapides génèrent des fréquences élevées (sons aigus), tandis que les vibrations 
                  lentes produisent des fréquences basses (sons graves). Ces fréquences sont mesurées en Hertz (Hz).
                </p>
                
                <p>
                  Notre générateur de sons produit des sons purs à fréquence unique, mais la majorité des sons 
                  musicaux dans la réalité sont composés d'un mélange complexe de plusieurs fréquences.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="waveforms" className="mt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-4">Les différentes formes d'onde</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Onde sinusoïdale</h4>
                  <p className="text-muted-foreground">
                    Produit le son le plus doux et le plus "propre". C'est la forme d'onde la plus simple, 
                    toutes les autres pouvant être obtenues en combinant différentes ondes sinusoïdales.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Onde carrée</h4>
                  <p className="text-muted-foreground">
                    Contrairement aux ondes sinusoïdales qui contiennent une seule fondamentale, les ondes carrées 
                    possèdent différentes harmoniques qui créent un son plus riche et plus "bourdonnant".
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Onde en dents de scie</h4>
                  <p className="text-muted-foreground">
                    Similaire aux ondes carrées mais encore plus "bourdonnante". Idéale pour créer un 
                    son dur et distordu avec un caractère distinctif.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Onde triangulaire</h4>
                  <p className="text-muted-foreground">
                    Se situe entre le son bourdonnant des ondes carrées et la pureté des ondes sinusoïdales. 
                    Produit un son plus brillant, plus respirant et plus naturel.
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Ces formes d'onde sont appelées "périodiques" car, lorsqu'elles sont répétées, 
                  elles créent un son constant avec des caractéristiques sonores spécifiques.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ToneGeneratorUsage;


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AudioWaveform, Waves } from "lucide-react";
import AcousticIllustration from "@/components/AcousticIllustration";

const SoundWaves = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              Caractéristiques des ondes sonores
            </CardTitle>
            <CardDescription>Fréquence, amplitude, timbre et leurs effets sur la musique</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              Les ondes sonores sont des vibrations qui se propagent dans un milieu (air, eau, solides). Leurs caractéristiques déterminent ce que nous entendons et ressent physiquement.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Fréquence (Hz)</h3>
                <p className="text-muted-foreground">
                  Détermine la hauteur du son. Plus la fréquence est élevée, plus le son est aigu. L'oreille humaine perçoit généralement les fréquences entre 20 Hz et 20 000 Hz.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Amplitude (dB)</h3>
                <p className="text-muted-foreground">
                  Détermine le volume sonore. Une plus grande amplitude correspond à un son plus fort. L'amplitude est généralement mesurée en décibels (dB).
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Timbre</h3>
                <p className="text-muted-foreground">
                  La "couleur" du son, ce qui nous permet de distinguer deux instruments jouant la même note. Le timbre est lié à la forme de l'onde et à la présence d'harmoniques.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Longueur d'onde (λ)</h3>
                <p className="text-muted-foreground">
                  Distance entre deux points consécutifs de même phase dans l'onde. λ = c/f où c est la vitesse du son et f la fréquence.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Phase</h3>
                <p className="text-muted-foreground">
                  Position de l'onde à un moment donné du cycle. La phase est importante pour comprendre les phénomènes d'interférence constructive et destructive.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <AcousticIllustration 
          title="Formes d'ondes fondamentales"
          description="Les différents types d'ondes en acoustique"
          imageSrc="/images/waveforms.svg"
          caption="De haut en bas: onde sinusoïdale, carrée, triangulaire et en dents de scie"
          aspectRatio="wide"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Ondes stationnaires</CardTitle>
            <CardDescription>Formation et importance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Les ondes stationnaires se forment par la superposition d'ondes incidentes et réfléchies de même fréquence et amplitude, créant des points fixes appelés nœuds et ventres.
            </p>
            <p className="text-muted-foreground">
              Ce phénomène est fondamental dans le fonctionnement des instruments à cordes et à vent, où les ondes stationnaires déterminent les fréquences de résonance.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Types de sons</CardTitle>
            <CardDescription>Classification des ondes sonores</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Son pur</h3>
              <p className="text-xs text-muted-foreground">
                Onde sinusoïdale à une seule fréquence, rare dans la nature
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Son complexe périodique</h3>
              <p className="text-xs text-muted-foreground">
                Combinaison de plusieurs sinusoïdes harmoniques (ex: instruments de musique)
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Bruit</h3>
              <p className="text-xs text-muted-foreground">
                Signal apériodique avec un spectre continu (ex: bruit blanc, rose)
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Son transitoire</h3>
              <p className="text-xs text-muted-foreground">
                Son de courte durée comme une percussion ou un plectre sur une corde
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interférences</CardTitle>
            <CardDescription>Interaction entre ondes sonores</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Lorsque deux ondes se rencontrent, elles peuvent s'additionner (interférence constructive) ou s'annuler (interférence destructive).
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="bg-green-50 p-2 rounded-md">
                <p className="font-semibold text-green-700">Constructive</p>
                <p className="text-xs text-green-600">Amplification du son</p>
              </div>
              
              <div className="bg-red-50 p-2 rounded-md">
                <p className="font-semibold text-red-700">Destructive</p>
                <p className="text-xs text-red-600">Diminution ou annulation du son</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SoundWaves;

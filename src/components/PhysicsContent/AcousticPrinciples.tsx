
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2, Waves } from "lucide-react";
import AcousticIllustration from "@/components/AcousticIllustration";

const AcousticPrinciples = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="h-5 w-5 text-primary" />
              Les fondements de l'acoustique
            </CardTitle>
            <CardDescription>Comprendre comment le son se comporte dans différents environnements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              L'acoustique est la science qui étudie le son, sa production, sa propagation et sa perception. Elle joue un rôle fondamental dans la compréhension de la musique et tout phénomène sonore.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Compression et raréfaction</h3>
                <p className="text-muted-foreground">
                  Le son se propage sous forme d'ondes de pression, alternant entre compression (molécules rapprochées) et raréfaction (molécules éloignées) du milieu.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Vitesse du son</h3>
                <p className="text-muted-foreground">
                  La vitesse du son varie selon le milieu: environ 343 m/s dans l'air à 20°C, 1500 m/s dans l'eau et jusqu'à 5000 m/s dans certains solides.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Réflexion et réverbération</h3>
                <p className="text-muted-foreground">
                  Dans une salle de concert, les ondes sonores se réfléchissent sur les surfaces, créant un effet de réverbération qui enrichit le son original.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Absorption et diffusion</h3>
                <p className="text-muted-foreground">
                  Les matériaux acoustiques peuvent absorber certaines fréquences ou diffuser le son de manière plus uniforme dans l'espace, modifiant ainsi l'acoustique d'un lieu.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <AcousticIllustration 
          title="Propagation des ondes sonores"
          description="Comment le son se déplace dans l'air"
          imageSrc="/images/sound-waves-propagation.svg"
          caption="Illustration de la compression et de la raréfaction de l'air lors de la propagation sonore"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Acoustique des salles</CardTitle>
            <CardDescription>Comment l'espace affecte le son</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              La conception acoustique d'une salle influence profondément la manière dont le son s'y propage et est perçu par les auditeurs.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Temps de réverbération optimal selon l'usage</li>
              <li>Élimination des échos indésirables</li>
              <li>Distribution uniforme du son</li>
              <li>Isolation acoustique des bruits extérieurs</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Impédance acoustique</CardTitle>
            <CardDescription>Résistance à la propagation du son</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              L'impédance acoustique mesure la résistance qu'un milieu oppose à la propagation des ondes sonores.
            </p>
            <div className="bg-muted p-3 rounded-md">
              <p className="font-mono text-sm">Z = ρ × c</p>
              <p className="text-xs text-muted-foreground mt-1">
                Où Z est l'impédance acoustique, ρ est la densité du milieu et c est la vitesse du son dans ce milieu
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Intensité sonore</CardTitle>
            <CardDescription>Puissance acoustique par unité de surface</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              L'intensité sonore diminue avec le carré de la distance à la source (loi en 1/r²).
            </p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Chuchotement</span>
                <span>30 dB</span>
              </div>
              <div className="flex justify-between">
                <span>Conversation normale</span>
                <span>60 dB</span>
              </div>
              <div className="flex justify-between">
                <span>Concert de rock</span>
                <span>110 dB</span>
              </div>
              <div className="flex justify-between">
                <span>Seuil de douleur</span>
                <span>130 dB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AcousticPrinciples;

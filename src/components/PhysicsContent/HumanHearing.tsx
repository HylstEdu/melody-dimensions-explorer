
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Ear } from "lucide-react";
import AcousticIllustration from "@/components/AcousticIllustration";

const HumanHearing = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ear className="h-5 w-5 text-primary" />
              L'audition humaine
            </CardTitle>
            <CardDescription>Comment notre cerveau perçoit et interprète les sons</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              L'oreille humaine est un organe sensoriel complexe capable de détecter une large gamme de fréquences sonores et de les convertir en signaux neurologiques interprétables par notre cerveau.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Anatomie de l'oreille</h3>
                <p className="text-muted-foreground">
                  L'oreille se divise en trois parties: externe (pavillon, conduit auditif), moyenne (tympan, osselets) et interne (cochlée, cellules ciliées). Chaque partie joue un rôle spécifique dans la transmission et la transformation du son en impulsions nerveuses.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Perception des fréquences</h3>
                <p className="text-muted-foreground">
                  L'oreille humaine peut généralement percevoir des sons entre 20 Hz et 20 000 Hz, avec une sensibilité maximale entre 2 000 et 5 000 Hz. Cette plage correspond à la majorité des sons de la parole humaine.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Seuils auditifs</h3>
                <p className="text-muted-foreground">
                  Le seuil d'audition varie selon la fréquence. Nous sommes plus sensibles aux moyennes fréquences qu'aux extrêmes du spectre audible. Le seuil de douleur se situe généralement autour de 130 dB.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Localisation spatiale</h3>
                <p className="text-muted-foreground">
                  Notre capacité à localiser la source d'un son dépend principalement des différences de temps et d'intensité entre les deux oreilles, ainsi que des modifications spectrales causées par notre anatomie.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <AcousticIllustration 
          title="L'anatomie de l'oreille humaine"
          description="Détails des composantes de l'oreille"
          imageSrc="/images/ear-anatomy.svg"
          caption="Les trois parties de l'oreille: externe, moyenne et interne"
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Psychoacoustique</CardTitle>
            <CardDescription>Perception subjective du son</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              La psychoacoustique étudie la relation entre les caractéristiques physiques du son et les sensations auditives qu'elles produisent.
            </p>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold">Hauteur perçue</h3>
                <p className="text-xs text-muted-foreground">Ne dépend pas uniquement de la fréquence fondamentale</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold">Sonie (intensité perçue)</h3>
                <p className="text-xs text-muted-foreground">Varie avec la fréquence et la durée du son</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold">Masquage auditif</h3>
                <p className="text-xs text-muted-foreground">Un son peut en cacher un autre de fréquence proche</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Effet de précédence</CardTitle>
            <CardDescription>Localisation des sons dans l'espace</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              L'effet de précédence (ou effet Haas) désigne notre tendance à percevoir un son comme provenant de la première source qui nous atteint, même si d'autres sources émettent le même son avec un léger retard.
            </p>
            <p className="text-muted-foreground">
              Ce phénomène est crucial pour notre capacité à localiser les sons dans des environnements réverbérants et est largement exploité dans les systèmes audio stéréophoniques.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Protection auditive</CardTitle>
            <CardDescription>Prévention des dommages auditifs</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              L'exposition prolongée à des sons de forte intensité peut endommager irréversiblement les cellules ciliées de la cochlée, entraînant une perte auditive permanente.
            </p>
            
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Limiter l'exposition aux sons forts</li>
              <li>Porter des protections auditives en environnement bruyant</li>
              <li>Respecter des périodes de repos auditif</li>
              <li>Éviter l'écoute au casque à volume élevé</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default HumanHearing;

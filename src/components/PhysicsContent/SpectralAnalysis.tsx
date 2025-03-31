
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FrequencySpectrumCard from "@/components/FrequencySpectrumCard";
import { BarChart2 } from "lucide-react";

const SpectralAnalysis = () => {
  const frequencySpectrumData = [
    { name: "Bass", value: 65, fill: "#8B5CF6" },
    { name: "Low-mid", value: 42, fill: "#8B5CF6" },
    { name: "Mid", value: 85, fill: "#8B5CF6" },
    { name: "High-mid", value: 37, fill: "#8B5CF6" },
    { name: "Treble", value: 55, fill: "#8B5CF6" },
    { name: "Ultra", value: 15, fill: "#8B5CF6" },
  ];

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-primary" />
              Analyse spectrale du son
            </CardTitle>
            <CardDescription>Décomposition des sons en leurs fréquences constitutives</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              L'analyse spectrale décompose un son complexe en ses fréquences constitutives, révélant sa composition harmonique. Cette technique est essentielle en acoustique musicale, traitement audio et reconnaissance vocale.
            </p>
            
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Série de Fourier</h3>
              <p className="text-muted-foreground">
                Toute onde sonore périodique peut être décomposée en une somme de sinusoïdes de fréquences multiples de la fondamentale. C'est le principe mathématique derrière la décomposition spectrale.
              </p>
              <div className="bg-muted p-3 rounded-md mt-2">
                <p className="font-mono text-sm">f(t) = a₀ + Σ [aₙ·cos(nωt) + bₙ·sin(nωt)]</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Où a₀, aₙ et bₙ sont les coefficients de Fourier, ω est la fréquence angulaire fondamentale et n est l'indice harmonique
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Transformée de Fourier</h3>
                <p className="text-muted-foreground">
                  Extension de la série de Fourier pour les signaux non périodiques. La Transformée de Fourier Rapide (FFT) est son implémentation algorithmique efficace utilisée dans les analyseurs de spectre.
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Spectrogramme</h3>
                <p className="text-muted-foreground">
                  Représentation visuelle du spectre sonore évoluant dans le temps. Particulièrement utile pour analyser des sons complexes et variables comme la parole ou la musique.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <FrequencySpectrumCard 
          title="Spectre de fréquences" 
          description="Répartition de l'énergie selon les fréquences"
          data={frequencySpectrumData}
        />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Analyse temps-fréquence</CardTitle>
            <CardDescription>Au-delà de Fourier</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Contrairement à la transformée de Fourier classique qui perd l'information temporelle, les méthodes temps-fréquence comme la transformée en ondelettes permettent de localiser les composantes fréquentielles dans le temps.
            </p>
            
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Applications</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground">
                <li>Compression audio (MP3, AAC)</li>
                <li>Reconnaissance vocale</li>
                <li>Analyse musicologique</li>
                <li>Détection de défauts acoustiques</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Formats spectraux</CardTitle>
            <CardDescription>Types de représentation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Spectre d'amplitude</h3>
              <p className="text-xs text-muted-foreground">
                Représente l'amplitude de chaque composante fréquentielle
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Spectre de phase</h3>
              <p className="text-xs text-muted-foreground">
                Montre le décalage de phase pour chaque fréquence
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Spectre de puissance</h3>
              <p className="text-xs text-muted-foreground">
                Représente l'énergie contenue dans chaque bande de fréquence
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold">Spectrogramme</h3>
              <p className="text-xs text-muted-foreground">
                Visualisation 3D (temps, fréquence, intensité)
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Timbre et spectre</CardTitle>
            <CardDescription>L'empreinte sonore unique</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Le timbre, cette qualité qui permet de distinguer deux sons de même hauteur et intensité, est intimement lié au contenu spectral du son.
            </p>
            
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold">Formants</h3>
                <p className="text-xs text-muted-foreground">Régions du spectre acoustique amplifiées par les résonateurs (cavités buccales, corps d'instrument...)</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold">Enveloppe spectrale</h3>
                <p className="text-xs text-muted-foreground">Courbe qui suit les maxima du spectre et caractérise le timbre</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold">Transitoires d'attaque</h3>
                <p className="text-xs text-muted-foreground">Les premières millisecondes d'un son, cruciales pour l'identification de sa source</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SpectralAnalysis;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Volume2, AudioWaveform } from "lucide-react";
import { Link } from "react-router-dom";
import WaveVisualizer from "@/components/WaveVisualizer";
import AudioPlayer from "@/components/AudioPlayer";
import FrequencySpectrumCard from "@/components/FrequencySpectrumCard";
import AcousticIllustration from "@/components/AcousticIllustration";
import AcousticPrinciples from "@/components/PhysicsContent/AcousticPrinciples";
import SoundWaves from "@/components/PhysicsContent/SoundWaves";
import HumanHearing from "@/components/PhysicsContent/HumanHearing";
import SpectralAnalysis from "@/components/PhysicsContent/SpectralAnalysis";
import { Badge } from "@/components/ui/badge";
import ToneGenerator from "@/components/ToneGenerator";
import ToneGeneratorUsage from "@/components/ToneGeneratorUsage";

const PhysiqueSon = () => {
  const frequencySpectrumData = [
    { name: "Bass", value: 65, fill: "#8B5CF6" },
    { name: "Low-mid", value: 42, fill: "#8B5CF6" },
    { name: "Mid", value: 85, fill: "#8B5CF6" },
    { name: "High-mid", value: 37, fill: "#8B5CF6" },
    { name: "Treble", value: 55, fill: "#8B5CF6" },
    { name: "Ultra", value: 15, fill: "#8B5CF6" },
  ];

  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Physique du Son</h1>
        <p className="text-lg text-muted-foreground">
          Explorez les fondements scientifiques de la musique, de l'acoustique à la perception auditive.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 mb-10">
        <div className="col-span-12 md:col-span-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Visualisation interactive des ondes sonores</CardTitle>
              <CardDescription>
                Modifiez la fréquence, l'amplitude et la phase pour explorer les caractéristiques des ondes sonores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <WaveVisualizer />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Écoutez et comparez</CardTitle>
              <CardDescription>Exemples sonores pour illustrer les concepts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AudioPlayer 
                src="/audio/sine440.mp3" 
                title="Son pur (440 Hz)" 
                description="Une fréquence pure sans harmoniques"
              />
              <AudioPlayer 
                src="/audio/complex-tone.mp3" 
                title="Son complexe" 
                description="Son avec harmoniques multiples"
              />
              <AudioPlayer 
                src="/audio/doppler-effect.mp3" 
                title="Effet Doppler" 
                description="Changement de fréquence perçue"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Cliquez d'abord sur la page puis réessayez de lire le son si vous rencontrez des problèmes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-6 mb-10">
        <Card className="overflow-hidden">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Créateur de Note</CardTitle>
                <CardDescription>Générez des sons avec des paramètres précis</CardDescription>
              </div>
              <Badge variant="music">Nouveau</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <ToneGenerator />
          </CardContent>
        </Card>
        
        <ToneGeneratorUsage />
      </div>

      <Tabs defaultValue="acoustique" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="acoustique">Acoustique</TabsTrigger>
          <TabsTrigger value="ondes">Ondes Sonores</TabsTrigger>
          <TabsTrigger value="audition">Audition Humaine</TabsTrigger>
          <TabsTrigger value="spectre">Analyse Spectrale</TabsTrigger>
        </TabsList>
        
        <TabsContent value="acoustique">
          <AcousticPrinciples />
        </TabsContent>
        
        <TabsContent value="ondes">
          <SoundWaves />
        </TabsContent>
        
        <TabsContent value="audition">
          <HumanHearing />
        </TabsContent>
        
        <TabsContent value="spectre">
          <SpectralAnalysis />
        </TabsContent>
      </Tabs>
      
      <Separator className="my-8" />
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Explorer plus en profondeur</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="h-5 w-5 text-primary" />
                Phénomènes acoustiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez les phénomènes acoustiques fascinants comme l'effet Doppler, les battements, et les harmoniques.
              </p>
              <Button asChild variant="outline">
                <Link to="/physique-son/phenomenes">En savoir plus</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AudioWaveform className="h-5 w-5 text-primary" />
                Instruments et acoustique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comment les lois de l'acoustique influencent la conception et le son des instruments de musique.
              </p>
              <Button asChild variant="outline">
                <Link to="/physique-son/instruments">En savoir plus</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PhysiqueSon;

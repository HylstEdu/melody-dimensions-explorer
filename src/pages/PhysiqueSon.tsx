
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
                Modifiez la fréquence et l'amplitude pour explorer les caractéristiques des ondes sonores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WaveVisualizer />
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
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="acoustique" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="acoustique">Acoustique</TabsTrigger>
          <TabsTrigger value="ondes">Ondes Sonores</TabsTrigger>
          <TabsTrigger value="audition">Audition Humaine</TabsTrigger>
          <TabsTrigger value="spectre">Analyse Spectrale</TabsTrigger>
        </TabsList>
        
        <TabsContent value="acoustique">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Les fondements de l'acoustique</CardTitle>
                <CardDescription>Comprendre comment le son se comporte dans différents environnements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  L'acoustique est la science qui étudie le son, sa production, sa propagation et sa perception. Elle joue un rôle fondamental dans la compréhension de la musique.
                </p>
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
                      Les matériaux acoustiques peuvent absorber certaines fréquences ou diffuser le son de manière plus uniforme dans l'espace.
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
        </TabsContent>
        
        <TabsContent value="ondes">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Caractéristiques des ondes sonores</CardTitle>
                <CardDescription>Fréquence, amplitude, timbre et leurs effets sur la musique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Les ondes sonores sont des vibrations qui se propagent dans un milieu (air, eau, solides). Leurs caractéristiques déterminent ce que nous entendons.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Fréquence (Hz)</h3>
                    <p className="text-muted-foreground">
                      Détermine la hauteur du son. Plus la fréquence est élevée, plus le son est aigu.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Amplitude (dB)</h3>
                    <p className="text-muted-foreground">
                      Détermine le volume sonore. Une plus grande amplitude correspond à un son plus fort.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Timbre</h3>
                    <p className="text-muted-foreground">
                      La "couleur" du son, ce qui nous permet de distinguer deux instruments jouant la même note.
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
            />
          </div>
        </TabsContent>
        
        <TabsContent value="audition">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>L'audition humaine</CardTitle>
                <CardDescription>Comment notre cerveau perçoit et interprète les sons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  L'oreille humaine est un organe sensoriel complexe capable de détecter une large gamme de fréquences sonores et de les convertir en signaux neurologiques interprétables par notre cerveau.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Anatomie de l'oreille</h3>
                    <p className="text-muted-foreground">
                      L'oreille se divise en trois parties: externe (pavillon, conduit auditif), moyenne (tympan, osselets) et interne (cochlée, cellules ciliées).
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Perception des fréquences</h3>
                    <p className="text-muted-foreground">
                      L'oreille humaine peut généralement percevoir des sons entre 20 Hz et 20 000 Hz, avec une sensibilité maximale entre 2 000 et 5 000 Hz.
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
        </TabsContent>
        
        <TabsContent value="spectre">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Analyse spectrale du son</CardTitle>
                <CardDescription>Décomposition des sons en leurs fréquences constitutives</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  L'analyse spectrale décompose un son complexe en ses fréquences constitutives, révélant sa composition harmonique. Cette technique est essentielle en acoustique musicale et en traitement audio.
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Série de Fourier</h3>
                  <p className="text-muted-foreground">
                    Toute onde sonore périodique peut être décomposée en une somme de sinusoïdes de fréquences multiples de la fondamentale. C'est le principe mathématique derrière la décomposition spectrale.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <FrequencySpectrumCard 
              title="Spectre de fréquences" 
              description="Répartition de l'énergie selon les fréquences"
              data={frequencySpectrumData}
            />
          </div>
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

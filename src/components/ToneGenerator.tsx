
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PlayIcon, PauseIcon, Volume2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface NoteInfo {
  name: string;
  frequency: number;
}

// Musical notes with their frequencies
const musicalNotes: Record<string, NoteInfo[]> = {
  "3": [ // Octave 3
    { name: "C3", frequency: 130.81 },
    { name: "C#3/Db3", frequency: 138.59 },
    { name: "D3", frequency: 146.83 },
    { name: "D#3/Eb3", frequency: 155.56 },
    { name: "E3", frequency: 164.81 },
    { name: "F3", frequency: 174.61 },
    { name: "F#3/Gb3", frequency: 185.00 },
    { name: "G3", frequency: 196.00 },
    { name: "G#3/Ab3", frequency: 207.65 },
    { name: "A3", frequency: 220.00 },
    { name: "A#3/Bb3", frequency: 233.08 },
    { name: "B3", frequency: 246.94 }
  ],
  "4": [ // Octave 4
    { name: "C4", frequency: 261.63 }, // Do (middle C)
    { name: "C#4/Db4", frequency: 277.18 },
    { name: "D4", frequency: 293.66 }, // Ré
    { name: "D#4/Eb4", frequency: 311.13 },
    { name: "E4", frequency: 329.63 }, // Mi
    { name: "F4", frequency: 349.23 }, // Fa
    { name: "F#4/Gb4", frequency: 369.99 },
    { name: "G4", frequency: 392.00 }, // Sol
    { name: "G#4/Ab4", frequency: 415.30 },
    { name: "A4", frequency: 440.00 }, // La (concert pitch)
    { name: "A#4/Bb4", frequency: 466.16 },
    { name: "B4", frequency: 493.88 } // Si
  ],
  "5": [ // Octave 5
    { name: "C5", frequency: 523.25 },
    { name: "C#5/Db5", frequency: 554.37 },
    { name: "D5", frequency: 587.33 },
    { name: "D#5/Eb5", frequency: 622.25 },
    { name: "E5", frequency: 659.26 },
    { name: "F5", frequency: 698.46 },
    { name: "F#5/Gb5", frequency: 739.99 },
    { name: "G5", frequency: 783.99 },
    { name: "G#5/Ab5", frequency: 830.61 },
    { name: "A5", frequency: 880.00 },
    { name: "A#5/Bb5", frequency: 932.33 },
    { name: "B5", frequency: 987.77 }
  ]
};

const waveformTypes = ["sine", "square", "sawtooth", "triangle"];

const ToneGenerator = () => {
  const [frequency, setFrequency] = useState<number>(440);
  const [volume, setVolume] = useState<number>(0.5);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [waveform, setWaveform] = useState<OscillatorType>("sine");
  const [customFrequency, setCustomFrequency] = useState<number>(440);
  const [selectedOctave, setSelectedOctave] = useState<string>("4");
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorNodeRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Clean up audio context when component unmounts
    return () => {
      stopSound();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(console.error);
      }
    };
  }, []);

  // Update oscillator parameters when they change
  useEffect(() => {
    if (oscillatorNodeRef.current) {
      oscillatorNodeRef.current.frequency.value = frequency;
    }
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = volume;
    }
  }, [frequency, volume]);
  
  // Update oscillator type when waveform changes
  useEffect(() => {
    if (oscillatorNodeRef.current) {
      oscillatorNodeRef.current.type = waveform;
    }
  }, [waveform]);

  const startSound = () => {
    try {
      stopSound(); // Stop any existing sound
      
      // Create audio context if it doesn't exist
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      
      // Create oscillator and gain node
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      // Configure nodes
      oscillator.type = waveform;
      oscillator.frequency.value = frequency;
      gainNode.gain.value = volume;
      
      // Connect nodes
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      // Start oscillator
      oscillator.start();
      
      // Store references
      oscillatorNodeRef.current = oscillator;
      gainNodeRef.current = gainNode;
      
      setIsPlaying(true);
      toast.success("Son en cours de lecture");
    } catch (error) {
      console.error("Error starting audio:", error);
      toast.error("Erreur lors de la lecture audio. Veuillez d'abord interagir avec la page.");
    }
  };
  
  const stopSound = () => {
    if (oscillatorNodeRef.current) {
      try {
        oscillatorNodeRef.current.stop();
        oscillatorNodeRef.current.disconnect();
        oscillatorNodeRef.current = null;
        
        if (gainNodeRef.current) {
          gainNodeRef.current.disconnect();
          gainNodeRef.current = null;
        }
        
        setIsPlaying(false);
        toast.info("Son arrêté");
      } catch (error) {
        console.error("Error stopping audio:", error);
      }
    }
  };
  
  const togglePlay = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound();
    }
  };
  
  const handleNoteChange = (note: string) => {
    const selectedNote = musicalNotes[selectedOctave].find(n => n.name === note);
    if (selectedNote) {
      setFrequency(selectedNote.frequency);
      setCustomFrequency(selectedNote.frequency);
    }
  };
  
  const handleOctaveChange = (octave: string) => {
    setSelectedOctave(octave);
  };
  
  const handleCustomFrequencyChange = (values: number[]) => {
    const newFreq = values[0];
    setCustomFrequency(newFreq);
    setFrequency(newFreq);
  };
  
  const formatFrequency = (freq: number): string => {
    return freq < 10 ? freq.toFixed(2) : freq < 100 ? freq.toFixed(1) : Math.round(freq).toString();
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="notes" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="notes">Notes musicales</TabsTrigger>
          <TabsTrigger value="custom">Fréquence personnalisée</TabsTrigger>
          <TabsTrigger value="presets">Préréglages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="notes" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Octave</h3>
                <Select value={selectedOctave} onValueChange={handleOctaveChange}>
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Octave" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4 (milieu)</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
                {musicalNotes[selectedOctave].map((note) => (
                  <Button
                    key={note.name}
                    variant={frequency === note.frequency ? "default" : "outline"}
                    className="h-16"
                    onClick={() => handleNoteChange(note.name)}
                  >
                    <div className="text-center">
                      <div className="font-medium">{note.name}</div>
                      <div className="text-xs opacity-70">{formatFrequency(note.frequency)} Hz</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium mb-2">À propos de cette note</h3>
                  <p className="text-sm">
                    Fréquence actuelle: <span className="font-semibold">{formatFrequency(frequency)} Hz</span>
                  </p>
                  <p className="text-sm">
                    {frequency === 440 ? (
                      <>Le La 440 Hz (A4) est la note de référence utilisée pour l'accordage des instruments de musique.</>
                    ) : frequency === 261.63 ? (
                      <>Le Do du milieu (C4) est la note centrale du piano, située au milieu du clavier.</>
                    ) : (
                      <>Cette fréquence correspond à une hauteur spécifique dans l'échelle musicale occidentale.</>
                    )}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="custom" className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">
                  Fréquence personnalisée: {formatFrequency(customFrequency)} Hz
                </label>
                {customFrequency === 440 && (
                  <Badge variant="music">La 440</Badge>
                )}
              </div>
              <Slider
                value={[customFrequency]}
                min={20}
                max={20000}
                step={1}
                onValueChange={handleCustomFrequencyChange}
              />
            </div>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              <Button variant="outline" onClick={() => handleCustomFrequencyChange([100])}>100 Hz</Button>
              <Button variant="outline" onClick={() => handleCustomFrequencyChange([440])}>440 Hz</Button>
              <Button variant="outline" onClick={() => handleCustomFrequencyChange([1000])}>1 kHz</Button>
              <Button variant="outline" onClick={() => handleCustomFrequencyChange([10000])}>10 kHz</Button>
            </div>
            
            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium mb-1">Informations sur les fréquences</h3>
                  <p className="text-xs text-muted-foreground">
                    L'audition humaine typique s'étend de 20 Hz à 20 kHz, avec une sensibilité optimale entre 2 et 5 kHz.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Les basses fréquences (20-250 Hz) procurent des sons graves, les moyennes fréquences (250-2000 Hz) correspondent à la voix humaine, et les hautes fréquences (2-20 kHz) aux sons aigus.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="presets" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Button 
              variant="outline" 
              className="justify-start h-auto py-3 px-4"
              onClick={() => {
                setFrequency(50);
                setCustomFrequency(50);
                setWaveform("sine");
              }}
            >
              <div className="text-left">
                <div className="font-medium">Basse profonde</div>
                <div className="text-xs text-muted-foreground">50 Hz, Sinusoïdale</div>
              </div>
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start h-auto py-3 px-4"
              onClick={() => {
                setFrequency(440);
                setCustomFrequency(440);
                setWaveform("sine");
              }}
            >
              <div className="text-left">
                <div className="font-medium">La 440</div>
                <div className="text-xs text-muted-foreground">440 Hz, Sinusoïdale</div>
              </div>
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start h-auto py-3 px-4"
              onClick={() => {
                setFrequency(1000);
                setCustomFrequency(1000);
                setWaveform("sine");
              }}
            >
              <div className="text-left">
                <div className="font-medium">Test auditif 1kHz</div>
                <div className="text-xs text-muted-foreground">1000 Hz, Sinusoïdale</div>
              </div>
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start h-auto py-3 px-4"
              onClick={() => {
                setFrequency(100);
                setCustomFrequency(100);
                setWaveform("square");
              }}
            >
              <div className="text-left">
                <div className="font-medium">Synthé rétro</div>
                <div className="text-xs text-muted-foreground">100 Hz, Carrée</div>
              </div>
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start h-auto py-3 px-4"
              onClick={() => {
                setFrequency(200);
                setCustomFrequency(200);
                setWaveform("sawtooth");
              }}
            >
              <div className="text-left">
                <div className="font-medium">Son électronique</div>
                <div className="text-xs text-muted-foreground">200 Hz, Dents de scie</div>
              </div>
            </Button>
            
            <Button 
              variant="outline"
              className="justify-start h-auto py-3 px-4"
              onClick={() => {
                setFrequency(300);
                setCustomFrequency(300);
                setWaveform("triangle");
              }}
            >
              <div className="text-left">
                <div className="font-medium">Ton doux</div>
                <div className="text-xs text-muted-foreground">300 Hz, Triangulaire</div>
              </div>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium">Forme d'onde</label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {waveformTypes.map((type) => (
                <Button
                  key={type}
                  variant={waveform === type ? "default" : "outline"}
                  onClick={() => setWaveform(type as OscillatorType)}
                  className="text-xs sm:text-sm capitalize"
                >
                  {type === "sine" ? "Sinusoïdale" : 
                   type === "square" ? "Carrée" :
                   type === "sawtooth" ? "Dents de scie" : 
                   "Triangulaire"}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                Volume: {Math.round(volume * 100)}%
              </label>
            </div>
            <Slider
              value={[volume]}
              min={0}
              max={1}
              step={0.01}
              onValueChange={(values) => setVolume(values[0])}
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center space-y-4">
          <Button 
            onClick={togglePlay}
            size="lg"
            className={`h-16 w-48 text-lg ${isPlaying ? "bg-red-500 hover:bg-red-600" : ""}`}
          >
            {isPlaying ? (
              <><PauseIcon className="mr-2 h-5 w-5" /> Arrêter</>
            ) : (
              <><PlayIcon className="mr-2 h-5 w-5" /> Jouer le son</>
            )}
          </Button>
          <p className="text-sm text-muted-foreground text-center mt-2">
            Cliquez d'abord sur la page pour activer l'audio
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToneGenerator;

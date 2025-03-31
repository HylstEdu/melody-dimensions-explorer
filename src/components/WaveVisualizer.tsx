
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PlayIcon, PauseIcon } from "lucide-react";
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";
import { toast } from "sonner";

interface WaveVisualizerProps {
  initialFrequency?: number;
  initialAmplitude?: number;
  initialPhase?: number;
}

const WaveVisualizer = ({ 
  initialFrequency = 1, 
  initialAmplitude = 50,
  initialPhase = 0
}: WaveVisualizerProps) => {
  const [frequency, setFrequency] = useState(initialFrequency);
  const [amplitude, setAmplitude] = useState(initialAmplitude);
  const [phase, setPhase] = useState(initialPhase);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  // Generate wave data for visualization
  const generateWaveData = () => {
    const data = [];
    for (let i = 0; i <= 100; i++) {
      data.push({
        x: i,
        y: amplitude * Math.sin(frequency * i * Math.PI / 50 + phase)
      });
    }
    return data;
  };

  const [waveData, setWaveData] = useState(generateWaveData());

  // Update wave visualization when parameters change
  useEffect(() => {
    setWaveData(generateWaveData());
    
    // Update audio oscillator if it exists
    if (oscillator) {
      oscillator.frequency.value = frequency * 110; // Scale for audible range
    }
    
    if (gainNode) {
      gainNode.gain.value = amplitude / 100 * 0.3; // Scale for comfortable volume
    }
  }, [frequency, amplitude, phase]);

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  };

  const playSound = () => {
    try {
      // Create audio context if it doesn't exist
      let ctx;
      
      try {
        ctx = audioContext || new (window.AudioContext || (window as any).webkitAudioContext)();
      } catch (error) {
        console.error("Failed to create AudioContext:", error);
        toast.error("Impossible de créer un contexte audio. Vérifiez que votre navigateur supporte l'API Web Audio.");
        return;
      }
      
      setAudioContext(ctx);
      
      // Create oscillator
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      // Configure nodes
      osc.type = 'sine';
      osc.frequency.value = frequency * 110; // Scale for audible range
      gain.gain.value = amplitude / 100 * 0.3; // Scale for comfortable volume
      
      // Connect and start
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      
      setOscillator(osc);
      setGainNode(gain);
      setIsPlaying(true);
      
      toast.success("Lecture en cours");
    } catch (error) {
      console.error("Audio playback error:", error);
      toast.error("Erreur lors de la lecture audio. Veuillez d'abord interagir avec la page.");
    }
  };

  const stopSound = () => {
    if (oscillator) {
      try {
        oscillator.stop();
        setIsPlaying(false);
        toast.info("Lecture arrêtée");
      } catch (error) {
        console.error("Error stopping oscillator:", error);
      }
      setOscillator(null);
    }
  };

  // Clean up audio context when component unmounts
  useEffect(() => {
    return () => {
      stopSound();
      if (audioContext) {
        try {
          audioContext.close();
        } catch (error) {
          console.error("Error closing audio context:", error);
        }
      }
    };
  }, []);

  const chartConfig = {
    waveform: {
      label: "Onde",
      color: "#8B5CF6"
    }
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="h-48">
              <ChartContainer config={chartConfig}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={waveData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <XAxis dataKey="x" hide />
                    <YAxis hide domain={[-100, 100]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="y" 
                      stroke="#8B5CF6" 
                      strokeWidth={2} 
                      dot={false} 
                      activeDot={false}
                      isAnimationActive={true}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Fréquence: {frequency.toFixed(1)} Hz</label>
                  <span className="text-sm text-muted-foreground">(Hauteur)</span>
                </div>
                <Slider
                  value={[frequency]}
                  min={0.5}
                  max={5}
                  step={0.1}
                  onValueChange={(value) => setFrequency(value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Amplitude: {amplitude.toFixed(0)}%</label>
                  <span className="text-sm text-muted-foreground">(Volume)</span>
                </div>
                <Slider
                  value={[amplitude]}
                  min={5}
                  max={100}
                  step={1}
                  onValueChange={(value) => setAmplitude(value[0])}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Phase: {phase.toFixed(1)} rad</label>
                  <span className="text-sm text-muted-foreground">(Décalage)</span>
                </div>
                <Slider
                  value={[phase]}
                  min={0}
                  max={Math.PI * 2}
                  step={0.1}
                  onValueChange={(value) => setPhase(value[0])}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center mt-4">
        <Button 
          onClick={togglePlay} 
          variant="outline"
          className="flex items-center gap-2 w-40"
          type="button"
        >
          {isPlaying ? (
            <>
              <PauseIcon className="h-4 w-4" />
              Arrêter le son
            </>
          ) : (
            <>
              <PlayIcon className="h-4 w-4" />
              Écouter l'onde
            </>
          )}
        </Button>
      </div>
      
      <p className="text-sm text-muted-foreground text-center">
        Cliquez d'abord sur la page pour activer l'audio, puis utilisez le bouton "Écouter l'onde" pour entendre le son généré
      </p>
    </div>
  );
};

export default WaveVisualizer;

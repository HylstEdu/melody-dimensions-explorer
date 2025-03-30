
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface AudioPlayerProps {
  src: string;
  title: string;
  description?: string;
}

const AudioPlayer = ({ src, title, description }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element when component mounts
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.volume = volume / 100;
    
    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
    });
    
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    
    audio.addEventListener("error", (e) => {
      console.error("Audio error:", e);
      toast.error(`Erreur de chargement du son: ${title}`);
    });
    
    audioRef.current = audio;
    
    // Clean up
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [src, title]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      toast.info(`Son arrêté: ${title}`);
    } else {
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            toast.success(`Lecture: ${title}`);
          })
          .catch(error => {
            console.error("Playback error:", error);
            toast.error("Impossible de lire le son. Essayez d'interagir avec la page d'abord.");
          });
      }
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <Card className="p-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-sm">{title}</h4>
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
          <Button 
            onClick={togglePlay} 
            size="sm" 
            variant="outline" 
            className="h-8 w-8 p-0"
            disabled={!isLoaded}
            type="button"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
        
        <div className="flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <Slider
            value={[volume]}
            min={0}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="w-full"
          />
        </div>
      </div>
    </Card>
  );
};

export default AudioPlayer;

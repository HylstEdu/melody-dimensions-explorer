
import React, { useState, useRef, useEffect } from "react";
import { PlayIcon, PauseIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";

interface AudioPlayerProps {
  src: string;
  title: string;
  description?: string;
}

const AudioPlayer = ({ src, title, description }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleAudioEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = (event: ErrorEvent) => {
      console.error("Audio error:", event);
      toast.error("Cliquez d'abord sur la page puis réessayez de lire le son.");
    };

    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleAudioEnd);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleAudioEnd);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // Create a user interaction promise if needed
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started playing successfully
          })
          .catch(error => {
            console.error("Playback error:", error);
            toast.error("Cliquez d'abord sur la page puis réessayez de lire le son.");
          });
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="border rounded-md p-3">
      <audio ref={audioRef} src={src} preload="metadata" />
      
      <div className="flex items-center gap-2 mb-2">
        <Button 
          onClick={togglePlay} 
          variant="secondary" 
          size="sm" 
          className="h-8 w-8 p-0 flex items-center justify-center"
        >
          {isPlaying ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
        </Button>
        
        <div className="flex-1">
          <h4 className="text-sm font-medium">{title}</h4>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="text-xs w-8 text-muted-foreground">
          {formatTime(currentTime)}
        </div>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={0.1}
          onValueChange={(value) => handleTimeChange(value)}
          className="flex-1"
        />
        <div className="text-xs w-8 text-muted-foreground">
          {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

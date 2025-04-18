
import { Guitar, Disc, Music2, Mic2, Globe, Piano, Radio, Mic, Music } from "lucide-react";
import { createIcon } from "./utils";

export const genreCategories = [
  { id: "rock", name: "Rock & Metal", icon: createIcon(Guitar) },
  { id: "electronic", name: "Électronique", icon: createIcon(Disc) },
  { id: "jazz-blues", name: "Jazz & Blues", icon: createIcon(Music2) },
  { id: "hip-hop", name: "Hip-Hop & R&B", icon: createIcon(Mic2) },
  { id: "world", name: "Musique du Monde", icon: createIcon(Globe) },
  { id: "classical", name: "Classique", icon: createIcon(Piano) },
  { id: "pop", name: "Pop & Disco", icon: createIcon(Radio) },
  { id: "folk", name: "Folk & Country", icon: createIcon(Mic) },
  { id: "other", name: "Autres genres", icon: createIcon(Music) },
];

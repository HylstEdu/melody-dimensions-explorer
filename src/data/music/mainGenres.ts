
// Ajout éventuel de genres majeurs complémentaires

import { rockGenre } from "./genres/rock";
import { jazzGenre } from "./genres/jazz";
import { electroniqueGenre } from "./genres/electronique";
import { hipHopGenre } from "./genres/hip-hop";
import { metalGenre } from "./genres/metal";

// Vérification : les genres « Metal » est déjà présent; 
// éventuellement ajouter Pop, Blues, Reggae, Country si souhaité (non demandés directement)
// Ici on garde juste les principaux demandés (rock, jazz, électro, hip-hop, metal)

export const mainGenres = [
  rockGenre,
  jazzGenre,
  electroniqueGenre,
  hipHopGenre,
  metalGenre,
];


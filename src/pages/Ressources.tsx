
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link as LinkIcon, BookOpen, Headphones, Music, Lightbulb, School, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

// Types for our resources
interface Resource {
  name: string;
  url: string;
  description: string;
  badges?: string[];
}

// Resource categories
const resourceCategories = [
  {
    id: "education",
    label: "Éducation",
    icon: School,
    resources: [
      {
        name: "Musicologie.org",
        url: "https://www.musicologie.org/",
        description: "Portail de ressources pédagogiques sur l'histoire de la musique, la théorie musicale et les grandes œuvres.",
        badges: ["Français", "Gratuit"]
      },
      {
        name: "Teoria",
        url: "https://www.teoria.com/",
        description: "Exercices interactifs et tutoriels sur la théorie musicale, le solfège et l'entraînement de l'oreille.",
        badges: ["Anglais", "Exercices"]
      },
      {
        name: "Musescore",
        url: "https://musescore.org/",
        description: "Logiciel gratuit d'édition de partitions et base de données communautaire de partitions gratuites.",
        badges: ["Multilingue", "Open Source"]
      },
      {
        name: "IMSLP - Petrucci Music Library",
        url: "https://imslp.org/",
        description: "Immense bibliothèque de partitions libres de droits, principalement classiques.",
        badges: ["Multilingue", "Partitions"]
      },
      {
        name: "LilyPond",
        url: "http://lilypond.org/",
        description: "Système de gravure musicale open-source produisant des partitions de qualité professionnelle.",
        badges: ["Technique", "Open Source"]
      }
    ]
  },
  {
    id: "ressources-techniques",
    label: "Ressources techniques",
    icon: Headphones,
    resources: [
      {
        name: "Audio Engineering Society",
        url: "https://www.aes.org/",
        description: "Organisation professionnelle dédiée à l'avancement des sciences et pratiques de l'audio.",
        badges: ["Anglais", "Professionnel"]
      },
      {
        name: "Sound On Sound",
        url: "https://www.soundonsound.com/",
        description: "Magazine en ligne avec des tutoriels, tests de matériel et conseils techniques pour l'enregistrement et la production.",
        badges: ["Anglais", "Production"]
      },
      {
        name: "Audiofanzine",
        url: "https://fr.audiofanzine.com/",
        description: "Portail francophone dédié aux musiciens avec actualités, tests, tutoriels et petites annonces.",
        badges: ["Français", "Communauté"]
      },
      {
        name: "Pro Audio Files",
        url: "https://theproaudiofiles.com/",
        description: "Articles et tutoriels sur l'ingénierie du son, la production et le mixage.",
        badges: ["Anglais", "Tutoriels"]
      },
      {
        name: "FileForum",
        url: "https://fileforum.betanews.com/",
        description: "Dépôt de logiciels audio et vidéo, avec de nombreux outils gratuits pour les musiciens.",
        badges: ["Anglais", "Logiciels"]
      }
    ]
  },
  {
    id: "histoire-theorie",
    label: "Histoire & Théorie",
    icon: BookOpen,
    resources: [
      {
        name: "Grove Music Online",
        url: "https://www.oxfordmusiconline.com/",
        description: "Encyclopédie complète de la musique et des musiciens, référence académique majeure.",
        badges: ["Anglais", "Académique"]
      },
      {
        name: "Centre de Documentation de la Musique Contemporaine",
        url: "https://www.cdmc.asso.fr/",
        description: "Ressources sur la musique contemporaine, avec partitions, enregistrements et analyses.",
        badges: ["Français", "Contemporain"]
      },
      {
        name: "Music Theory Online",
        url: "http://www.mtosmt.org/",
        description: "Journal électronique de la Society for Music Theory avec des articles académiques sur la théorie musicale.",
        badges: ["Anglais", "Académique"]
      },
      {
        name: "Hyperphysics - Music Physics",
        url: "http://hyperphysics.phy-astr.gsu.edu/hbase/music/musinscon.html",
        description: "Ressource pédagogique sur les aspects physiques du son et de la musique.",
        badges: ["Anglais", "Physique"]
      },
      {
        name: "Musiconis",
        url: "https://musiconis.huma-num.fr/",
        description: "Base de données iconographiques pour l'étude des représentations de la musique au Moyen Âge.",
        badges: ["Français", "Iconographie"]
      }
    ]
  },
  {
    id: "musique-societe",
    label: "Musique & Société",
    icon: Lightbulb,
    resources: [
      {
        name: "UNESCO - Patrimoine Culturel Immatériel",
        url: "https://ich.unesco.org/fr/listes?text=musique",
        description: "Inventaire des traditions musicales reconnues comme patrimoine culturel immatériel de l'humanité.",
        badges: ["Multilingue", "Culturel"]
      },
      {
        name: "International Council for Traditional Music",
        url: "https://www.ictmusic.org/",
        description: "Organisation dédiée à l'étude, la pratique et la préservation des musiques traditionnelles.",
        badges: ["Anglais", "Traditions"]
      },
      {
        name: "Music and Social Justice",
        url: "https://www.musicandsocialjustice.org/",
        description: "Ressources sur l'intersection entre la musique et les mouvements sociaux.",
        badges: ["Anglais", "Engagé"]
      },
      {
        name: "Musique Info",
        url: "https://www.musiqueinfo.com/",
        description: "Actualités et analyses sur l'industrie musicale et ses évolutions socio-économiques.",
        badges: ["Français", "Industrie"]
      },
      {
        name: "Music Psychology Research",
        url: "https://musicpsychology.co.uk/",
        description: "Articles et ressources sur la psychologie de la musique et ses effets sur le comportement humain.",
        badges: ["Anglais", "Psychologie"]
      }
    ]
  },
  {
    id: "multimedia",
    label: "Multimédia",
    icon: Video,
    resources: [
      {
        name: "Medici.tv",
        url: "https://www.medici.tv/",
        description: "Plateforme de streaming dédiée à la musique classique avec concerts, opéras et masterclasses.",
        badges: ["Multilingue", "Classique"]
      },
      {
        name: "OpenCulture - Free Music",
        url: "https://www.openculture.com/free_music",
        description: "Collection de ressources musicales gratuites et légales pour l'éducation et l'inspiration.",
        badges: ["Anglais", "Gratuit"]
      },
      {
        name: "Europeana Music",
        url: "https://www.europeana.eu/fr/collections/topic/62-musique",
        description: "Collections numérisées d'archives musicales européennes : partitions, enregistrements, instruments.",
        badges: ["Multilingue", "Archives"]
      },
      {
        name: "Philharmonie de Paris - Ressources numériques",
        url: "https://digital.philharmoniedeparis.fr/",
        description: "Concerts filmés, conférences et documents pédagogiques de la Philharmonie de Paris.",
        badges: ["Français", "Éducatif"]
      },
      {
        name: "Archive.org Audio Archive",
        url: "https://archive.org/details/audio",
        description: "Immense collection d'enregistrements audio du domaine public et sous licences libres.",
        badges: ["Anglais", "Archives"]
      }
    ]
  }
];

const Ressources = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Ressources Musicales</h1>
        <p className="text-lg text-muted-foreground">
          Une sélection de sites, outils et références pour approfondir vos connaissances musicales
        </p>
      </div>

      <Tabs defaultValue="education" className="mb-10">
        <TabsList className="mb-6 flex flex-wrap">
          {resourceCategories.map(category => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              <category.icon className="h-4 w-4" />
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {resourceCategories.map(category => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <category.icon className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">{category.label}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.resources.map((resource, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-start justify-between">
                      {resource.name}
                    </CardTitle>
                    <CardDescription>
                      {resource.badges && resource.badges.map(badge => (
                        <Badge key={badge} variant="outline" className="mr-1 mt-1">
                          {badge}
                        </Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter className="pt-4 border-t">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <LinkIcon className="h-4 w-4 mr-2" />
                        Visiter le site
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="mt-10">
        <CardHeader>
          <CardTitle>Proposer une ressource</CardTitle>
          <CardDescription>
            Connaissez-vous une ressource pertinente qui pourrait enrichir cette liste ?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Nous sommes constamment à la recherche de nouvelles ressources de qualité pour enrichir 
            notre base de données. Si vous connaissez un site, un outil ou une référence qui mériterait 
            d'être ajouté à notre sélection, n'hésitez pas à nous en faire part.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a href="mailto:geoffroy.streit@gmail.com" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              Suggérer une ressource
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Ressources;

import React from "react";
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ChangeType = "feature" | "fix" | "improvement" | "update" | "docs";

interface ChangelogItem {
  date: string;
  version: string;
  changes: {
    type: ChangeType;
    description: string;
  }[];
}

const changelogData: ChangelogItem[] = [
  {
    date: "22 Novembre 2024",
    version: "0.2.0",
    changes: [
      {
        type: "feature",
        description: "Ajout de la page Physique du Son avec sections sur l'acoustique, les ondes et l'audition"
      },
      {
        type: "feature",
        description: "Création de la navigation principale et du pied de page"
      },
      {
        type: "feature",
        description: "Intégration avec GitHub et Supabase"
      }
    ]
  },
  {
    date: "23 Novembre 2024",
    version: "0.2.1",
    changes: [
      {
        type: "fix",
        description: "Correction d'une erreur avec l'icône WaveformIcon manquante"
      },
      {
        type: "feature",
        description: "Ajout du composant Changelog pour suivre l'évolution du projet"
      },
      {
        type: "improvement",
        description: "Amélioration de la structure du site et de la navigation"
      }
    ]
  },
  {
    date: "24 Novembre 2024",
    version: "0.2.2",
    changes: [
      {
        type: "update",
        description: "Mise à jour du README avec des informations détaillées sur le projet"
      },
      {
        type: "improvement",
        description: "Optimisation de la performance et correction de bugs mineurs"
      },
      {
        type: "feature",
        description: "Ajout de métadonnées pour améliorer le référencement"
      }
    ]
  },
  {
    date: "25 Novembre 2024",
    version: "0.3.0",
    changes: [
      {
        type: "feature",
        description: "Développement complet de la page Culture Musicale avec sections Histoire, Genres et Instruments"
      },
      {
        type: "feature",
        description: "Ajout d'articles à la une dans la section Culture Musicale"
      },
      {
        type: "improvement",
        description: "Enrichissement du contenu pédagogique avec des outils interactifs"
      },
      {
        type: "update",
        description: "Mise à jour du changelog pour refléter les derniers développements"
      }
    ]
  },
  {
    date: "26 Novembre 2024",
    version: "0.4.0",
    changes: [
      {
        type: "feature",
        description: "Ajout de la page Musicothérapie avec informations détaillées sur les approches et applications"
      },
      {
        type: "feature",
        description: "Implémentation du fil d'Ariane (breadcrumbs) pour améliorer la navigation"
      },
      {
        type: "improvement",
        description: "Amélioration de la structure du site avec des liens 'En savoir plus' vers des sections détaillées"
      },
      {
        type: "update",
        description: "Mise à jour du système de navigation pour faciliter l'accès aux sous-sections"
      }
    ]
  },
  {
    date: "27 Novembre 2024",
    version: "0.5.0",
    changes: [
      {
        type: "docs",
        description: "Création du fichier melody_dimensions_explorer.md avec documentation détaillée du projet"
      },
      {
        type: "feature",
        description: "Amélioration du composant BreadcrumbNav avec des descriptions pour chaque section"
      },
      {
        type: "improvement",
        description: "Optimisation de la navigation avec un fil d'Ariane sticky pour une meilleure expérience utilisateur"
      },
      {
        type: "update",
        description: "Enrichissement des méta-informations pour les sections et sous-sections"
      }
    ]
  },
  {
    date: "28 Novembre 2024",
    version: "0.6.0",
    changes: [
      {
        type: "feature",
        description: "Ajout des pages 'Phénomènes acoustiques' et 'Instruments et acoustique' avec contenu détaillé"
      },
      {
        type: "improvement",
        description: "Enrichissement du contenu sur l'effet Doppler, la résonance, les harmoniques et les battements"
      },
      {
        type: "improvement",
        description: "Ajout d'informations détaillées sur l'acoustique des instruments à cordes, à vent, à percussion et électroniques"
      },
      {
        type: "update",
        description: "Mise à jour des fils d'Ariane pour inclure les nouvelles pages"
      }
    ]
  }
];

const getBadgeVariant = (type: ChangeType) => {
  switch (type) {
    case "feature":
      return "default";
    case "fix":
      return "destructive";
    case "improvement":
      return "secondary";
    case "update":
      return "outline";
    case "docs":
      return "secondary"; // Changed from "blue" to "secondary" as "blue" is not a valid variant
    default:
      return "default";
  }
};

const Changelog: React.FC = () => {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Journal des modifications</h1>
        <p className="text-lg text-muted-foreground">
          Suivez l'évolution du site et les nouvelles fonctionnalités ajoutées au fil du temps.
        </p>
      </div>

      <div className="space-y-8">
        {changelogData.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <CardTitle>{item.date}</CardTitle>
                <Badge variant="outline" className="text-sm">v{item.version}</Badge>
              </div>
              <CardDescription>Version {item.version}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {item.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start gap-2">
                    <Badge variant={getBadgeVariant(change.type)} className="mt-0.5">
                      {change.type}
                    </Badge>
                    <span>{change.description}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Changelog;

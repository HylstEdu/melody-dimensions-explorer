
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbConfig {
  [key: string]: {
    label: string;
    parent?: string;
    description?: string;
  };
}

const routeConfig: BreadcrumbConfig = {
  "/": { label: "Accueil" },
  "/physique-son": { 
    label: "Physique du Son", 
    parent: "/",
    description: "Découvrez les principes fondamentaux de l'acoustique et de la perception auditive"
  },
  "/culture": { 
    label: "Culture Musicale", 
    parent: "/",
    description: "Explorez l'histoire et les genres de la musique à travers les époques"
  },
  "/technique": { 
    label: "Aspects Techniques", 
    parent: "/",
    description: "Apprenez les bases de la théorie musicale, la composition et la production"
  },
  "/societe": { 
    label: "Fonctions Sociales", 
    parent: "/",
    description: "Comprenez le rôle de la musique dans la société et ses diverses applications"
  },
  "/societe/musicotherapie": { 
    label: "Musicothérapie", 
    parent: "/societe",
    description: "Découvrez comment la musique est utilisée à des fins thérapeutiques"
  },
  "/societe/neurosciences": { 
    label: "Neurosciences et Musique", 
    parent: "/societe",
    description: "Explorez les effets de la musique sur le cerveau et la cognition"
  },
  "/societe/anthropologie": { 
    label: "Anthropologie Musicale", 
    parent: "/societe",
    description: "Étudiez le rôle de la musique dans différentes cultures et sociétés"
  },
  "/societe/politique": { 
    label: "Musique et Politique", 
    parent: "/societe",
    description: "Analysez les liens entre musique, engagement politique et mouvements sociaux"
  },
  "/societe/identite": { 
    label: "Identité et Musique", 
    parent: "/societe",
    description: "Découvrez comment la musique façonne et exprime l'identité individuelle et collective"
  },
  "/societe/education/methodes": { 
    label: "Méthodes Pédagogiques", 
    parent: "/societe",
    description: "Explorez les différentes approches d'enseignement et d'apprentissage musical"
  },
  "/changelog": {
    label: "Journal des modifications",
    parent: "/",
    description: "Suivez l'évolution du site et les nouvelles fonctionnalités"
  }
};

export function BreadcrumbNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Construire le chemin de fil d'Ariane
  const buildBreadcrumbs = () => {
    const breadcrumbs = [];
    let currentRoute = currentPath;

    // Ajouter la route actuelle
    if (routeConfig[currentRoute]) {
      breadcrumbs.unshift({
        path: currentRoute,
        label: routeConfig[currentRoute].label,
        description: routeConfig[currentRoute].description || "",
        isCurrent: true,
      });
    }

    // Ajouter les routes parentes
    while (routeConfig[currentRoute]?.parent) {
      const parentRoute = routeConfig[currentRoute].parent as string;
      
      if (routeConfig[parentRoute]) {
        breadcrumbs.unshift({
          path: parentRoute,
          label: routeConfig[parentRoute].label,
          description: routeConfig[parentRoute].description || "",
          isCurrent: false,
        });
      }
      
      currentRoute = parentRoute;
    }

    // Si le fil d'Ariane n'a pas commencé par l'accueil, l'ajouter
    if (breadcrumbs.length > 0 && breadcrumbs[0].path !== "/") {
      breadcrumbs.unshift({
        path: "/",
        label: "Accueil",
        description: "Page d'accueil de MéloDimensions",
        isCurrent: false,
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();
  
  // Ne rien afficher si on est sur la page d'accueil ou si la route n'est pas configurée
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <div className="bg-background/60 backdrop-blur-sm sticky top-0 z-10 border-b">
      <Breadcrumb className="px-4 py-2 mx-auto max-w-7xl">
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.path}>
              <BreadcrumbItem>
                {crumb.isCurrent ? (
                  <BreadcrumbPage title={crumb.description}>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={crumb.path} className="flex items-center" title={crumb.description}>
                      {crumb.path === "/" && <Home className="h-3.5 w-3.5 mr-1" />}
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < breadcrumbs.length - 1 && (
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

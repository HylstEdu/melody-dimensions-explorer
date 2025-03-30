
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
  };
}

const routeConfig: BreadcrumbConfig = {
  "/": { label: "Accueil" },
  "/physique-son": { label: "Physique du Son", parent: "/" },
  "/culture": { label: "Culture Musicale", parent: "/" },
  "/technique": { label: "Aspects Techniques", parent: "/" },
  "/societe": { label: "Fonctions Sociales", parent: "/" },
  "/societe/musicotherapie": { label: "Musicothérapie", parent: "/societe" },
  "/societe/neurosciences": { label: "Neurosciences et Musique", parent: "/societe" },
  "/societe/anthropologie": { label: "Anthropologie Musicale", parent: "/societe" },
  "/societe/politique": { label: "Musique et Politique", parent: "/societe" },
  "/societe/identite": { label: "Identité et Musique", parent: "/societe" },
  "/societe/education/methodes": { label: "Méthodes Pédagogiques", parent: "/societe" },
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
    <Breadcrumb className="px-4 py-2 mb-2">
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path}>
            <BreadcrumbItem>
              {crumb.isCurrent ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={crumb.path} className="flex items-center">
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
  );
}


import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4 gradient-heading">404</h1>
        <div className="sound-wave mx-auto mb-6">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="text-xl text-foreground mb-4">Cette page semble s'être perdue dans l'espace sonore</p>
        <p className="text-muted-foreground mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée vers une autre fréquence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Rechercher sur le site
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Newspaper, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Physique du Son", href: "/physique-son" },
    { name: "Culture Musicale", href: "/culture" },
    { name: "Aspects Techniques", href: "/technique" },
    { name: "Fonctions Sociales", href: "/societe" },
    { name: "Actualité", href: "/actualite", icon: Newspaper },
    { name: "Ressources", href: "/ressources", icon: LinkIcon }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recherche pour:", searchQuery);
    // Implémenter la recherche ultérieurement
  };

  return (
    <nav className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="sound-wave">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="text-xl font-display font-semibold">MéloDimensions</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "nav-link",
                    isActive(item.href) && "active",
                    "flex items-center gap-1"
                  )}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-64 pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block nav-link",
                  isActive(item.href) && "active",
                  "flex items-center gap-1"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                {item.name}
              </Link>
            ))}
            <form onSubmit={handleSearchSubmit} className="mt-4 relative">
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-full pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

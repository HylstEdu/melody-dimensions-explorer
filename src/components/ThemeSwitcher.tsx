
import { Button } from "@/components/ui/button";
import { Moon, Sun, Palette, Music } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "pastel" | "cabaret";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Get stored theme or system preference
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 data-[theme=light]:rotate-0 data-[theme=light]:scale-100 data-[theme=dark]:rotate-90 data-[theme=dark]:scale-0 data-[theme=pastel]:rotate-90 data-[theme=pastel]:scale-0 data-[theme=cabaret]:rotate-90 data-[theme=cabaret]:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 data-[theme=light]:rotate-90 data-[theme=light]:scale-0 data-[theme=dark]:rotate-0 data-[theme=dark]:scale-100 data-[theme=pastel]:rotate-90 data-[theme=pastel]:scale-0 data-[theme=cabaret]:rotate-90 data-[theme=cabaret]:scale-0" />
          <Palette className="absolute h-5 w-5 rotate-90 scale-0 transition-all data-[theme=light]:rotate-90 data-[theme=light]:scale-0 data-[theme=dark]:rotate-90 data-[theme=dark]:scale-0 data-[theme=pastel]:rotate-0 data-[theme=pastel]:scale-100 data-[theme=cabaret]:rotate-90 data-[theme=cabaret]:scale-0" />
          <Music className="absolute h-5 w-5 rotate-90 scale-0 transition-all data-[theme=light]:rotate-90 data-[theme=light]:scale-0 data-[theme=dark]:rotate-90 data-[theme=dark]:scale-0 data-[theme=pastel]:rotate-90 data-[theme=pastel]:scale-0 data-[theme=cabaret]:rotate-0 data-[theme=cabaret]:scale-100" />
          <span className="sr-only">Changer de thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Thèmes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => updateTheme("light")} className="flex items-center gap-2">
          <Sun className="h-4 w-4" />
          <span>Clair</span>
          {theme === "light" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateTheme("dark")} className="flex items-center gap-2">
          <Moon className="h-4 w-4" />
          <span>Sombre</span>
          {theme === "dark" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateTheme("pastel")} className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span>Pastel</span>
          {theme === "pastel" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateTheme("cabaret")} className="flex items-center gap-2">
          <Music className="h-4 w-4" />
          <span>Cabaret</span>
          {theme === "cabaret" && <span className="ml-auto">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;

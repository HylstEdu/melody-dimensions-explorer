
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import RssFeedReader from "@/components/RssFeedReader";
import { Rss, Info } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Actualite = () => {
  return (
    <div className="container py-10">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-4xl font-bold">Actualités Musicales</h1>
          <Rss className="h-6 w-6 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground">
          Restez informé des dernières nouvelles et événements du monde musical
        </p>
      </div>
      
      <Alert className="mb-8 bg-muted/50">
        <Info className="h-4 w-4" />
        <AlertTitle>Flux RSS en direct</AlertTitle>
        <AlertDescription>
          Cette page affiche les dernières actualités musicales provenant des flux RSS de Radio France.
          Cliquez sur les différents onglets pour explorer les différentes sources d'actualités musicales.
        </AlertDescription>
      </Alert>

      <Separator className="my-8" />

      <RssFeedReader />
    </div>
  );
};

export default Actualite;

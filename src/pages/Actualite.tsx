
import RssFeedReader from "@/components/RssFeedReader";
import { Rss } from "lucide-react";

const Actualite = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold mb-4">Actualités Musicales</h1>
          <Rss className="h-6 w-6 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground">
          Restez informé des dernières nouvelles et événements du monde musical
        </p>
      </div>

      <RssFeedReader />
    </div>
  );
};

export default Actualite;

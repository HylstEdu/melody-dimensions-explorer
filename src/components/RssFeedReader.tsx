
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Newspaper, Calendar, Link as LinkIcon, Rss, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Types for our RSS feed data
export interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  contentSnippet?: string;
  creator?: string;
  categories?: string[];
}

interface RssFeedSource {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

const RSS_SOURCES: RssFeedSource[] = [
  { 
    id: "franceinter", 
    name: "France Inter", 
    url: "https://www.radiofrance.fr/franceinter/rss",
    icon: <Newspaper className="h-4 w-4" />
  },
  { 
    id: "franceculture", 
    name: "France Culture", 
    url: "https://www.radiofrance.fr/franceculture/rss",
    icon: <Newspaper className="h-4 w-4" />
  },
  { 
    id: "francemusique", 
    name: "France Musique", 
    url: "https://www.radiofrance.fr/francemusique/rss",
    icon: <Newspaper className="h-4 w-4" />
  },
  { 
    id: "fip", 
    name: "Fip", 
    url: "https://www.radiofrance.fr/fip/rss",
    icon: <Newspaper className="h-4 w-4" />
  },
  { 
    id: "mouv", 
    name: "Mouv'", 
    url: "https://www.radiofrance.fr/mouv/rss",
    icon: <Newspaper className="h-4 w-4" />
  }
];

const RssFeedReader = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSource, setActiveSource] = useState("francemusique");
  const { toast } = useToast();

  // Format date to French format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      
      try {
        const parser = new Parser();
        const selectedSource = RSS_SOURCES.find(source => source.id === activeSource);
        
        if (!selectedSource) {
          throw new Error("Source RSS non trouvée");
        }
        
        // In a real environment, you'd need a CORS proxy
        // For this example, we'll simulate a response
        // In production, use: const feed = await parser.parseURL(selectedSource.url);
        
        // Simulate RSS parsing with a delay
        setTimeout(() => {
          // This is placeholder data - in real usage you would parse the actual RSS feed
          setFeedItems([
            {
              title: `Découverte musicale : les tendances du printemps 2025`,
              link: "#",
              pubDate: "2025-03-28T14:30:00",
              contentSnippet: "Les critiques musicaux de France Musique présentent les nouvelles tendances qui s'affirment ce printemps dans le paysage musical français et international.",
              creator: "France Musique",
              categories: ["Tendances"]
            },
            {
              title: "Interview exclusive avec le compositeur Jean-Michel Roland",
              link: "#",
              pubDate: "2025-03-25T09:15:00",
              contentSnippet: "Le compositeur revient sur son parcours et présente sa nouvelle œuvre qui sera interprétée en avant-première au festival de musique contemporaine de Paris.",
              creator: "France Musique",
              categories: ["Interview"]
            },
            {
              title: "Le Festival de Printemps dévoile sa programmation 2025",
              link: "#",
              pubDate: "2025-03-21T11:45:00",
              contentSnippet: "Plus de 50 concerts de musique classique et contemporaine sont prévus dans différents lieux emblématiques de la capitale du 15 mai au 12 juin 2025.",
              creator: "France Musique",
              categories: ["Événement"]
            }
          ]);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Erreur lors du chargement du flux RSS:", error);
        toast({
          variant: "destructive",
          title: "Erreur de chargement",
          description: "Impossible de charger le flux RSS. Veuillez réessayer plus tard."
        });
        setLoading(false);
      }
    };

    fetchFeed();
  }, [activeSource, toast]);

  return (
    <>
      <Tabs defaultValue={activeSource} value={activeSource} onValueChange={setActiveSource} className="mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <TabsList>
            {RSS_SOURCES.map(source => (
              <TabsTrigger key={source.id} value={source.id} className="flex items-center gap-1">
                {source.icon}
                {source.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Rss className="h-4 w-4" />
            S'abonner au flux RSS
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Skeleton loaders
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <Skeleton className="h-5 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-24 w-full" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-4 w-1/3" />
                </CardFooter>
              </Card>
            ))
          ) : feedItems.length > 0 ? (
            feedItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <CardHeader className="pb-2 flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Newspaper className="h-3.5 w-3.5" />
                      {item.creator || RSS_SOURCES.find(s => s.id === activeSource)?.name}
                    </CardDescription>
                  </div>
                  {item.categories && item.categories[0] && (
                    <Badge variant="music" className="ml-2 mt-1">
                      {item.categories[0]}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.contentSnippet}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(item.pubDate)}
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      Lire plus
                      <LinkIcon className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <Rss className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <p className="text-lg font-medium">Aucune actualité disponible</p>
              <p className="text-muted-foreground mt-2">Veuillez réessayer plus tard ou choisir une autre source</p>
            </div>
          )}
        </div>
      </Tabs>

      <div className="bg-muted/40 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">À propos de nos sources d'actualités</h2>
        <p className="text-muted-foreground mb-6">
          MéloDimensions agrège des actualités provenant des principaux médias français spécialisés dans la musique et la culture.
          Consultez régulièrement cette page pour rester informé des dernières nouveautés du monde musical.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {RSS_SOURCES.map((source, i) => (
            <div key={i} className="bg-card p-3 rounded text-center">
              <p className="font-medium">{source.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RssFeedReader;

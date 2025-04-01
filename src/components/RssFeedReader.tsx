
import { useEffect, useState } from "react";
import Parser from "rss-parser";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Newspaper, Calendar, Link as LinkIcon, Rss, Loader2, RefreshCcw, AlertTriangle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Types for our RSS feed data
export interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  contentSnippet?: string;
  creator?: string;
  categories?: string[];
  isoDate?: string;
}

interface RssFeedSource {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
  type?: string;
  proxyMethod: "allorigins" | "rss2json" | "direct";
}

// Updated RSS sources with valid music news feeds and multiple proxy methods
const RSS_SOURCES = [
  { 
    id: "francemusique", 
    name: "France Musique", 
    url: "https://www.radiofrance.fr/francemusique/rss",
    icon: <Newspaper className="h-4 w-4" />,
    type: "music",
    proxyMethod: "allorigins"
  },
  { 
    id: "fip", 
    name: "FIP", 
    url: "https://www.radiofrance.fr/fip/rss",
    icon: <Newspaper className="h-4 w-4" />,
    type: "music",
    proxyMethod: "allorigins"
  },
  { 
    id: "mouv", 
    name: "Mouv", 
    url: "https://www.radiofrance.fr/mouv/rss",
    icon: <Newspaper className="h-4 w-4" />,
    type: "general",
    proxyMethod: "allorigins"
  },
  { 
    id: "franceculture", 
    name: "France Culture", 
    url: "https://www.radiofrance.fr/franceculture/rss",
    icon: <Newspaper className="h-4 w-4" />,
    type: "culture",
    proxyMethod: "allorigins"
  },
  { 
    id: "franceinter", 
    name: "France Inter", 
    url: "https://www.radiofrance.fr/franceinter/rss",
    icon: <Newspaper className="h-4 w-4" />,
    type: "general",
    proxyMethod: "allorigins"
  },
  { 
    id: "pitchfork", 
    name: "Pitchfork", 
    url: "https://pitchfork.com/rss/news",
    icon: <Newspaper className="h-4 w-4" />,
    type: "music",
    proxyMethod: "rss2json"
  },
  { 
    id: "billboard", 
    name: "Billboard", 
    url: "https://www.billboard.com/feed/",
    icon: <Newspaper className="h-4 w-4" />,
    type: "music",
    proxyMethod: "rss2json"
  },
  { 
    id: "rollingstone", 
    name: "Rolling Stone", 
    url: "https://www.rollingstone.com/feed/",
    icon: <Newspaper className="h-4 w-4" />,
    type: "music",
    proxyMethod: "rss2json"
  }
];

// Proxy methods for fetching RSS feeds
const proxyMethods = {
  allorigins: (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  rss2json: (url: string) => `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`,
  direct: (url: string) => url
};

const RssFeedReader = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSource, setActiveSource] = useState("francemusique");
  const [proxyOption, setProxyOption] = useState<"allorigins" | "rss2json" | "direct">("allorigins");
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { toast } = useToast();

  // Format date to French format
  const formatDate = (dateString: string) => {
    try {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('fr-FR', options);
    } catch (error) {
      return "Date inconnue";
    }
  };

  // Function to parse an RSS feed from rss2json format
  const parseRss2JsonResponse = async (data: any) => {
    if (data && data.items && data.items.length > 0) {
      return data.items.slice(0, 9).map((item: any) => ({
        title: item.title || "Sans titre",
        link: item.link || "#",
        pubDate: item.pubDate || new Date().toISOString(),
        contentSnippet: item.description?.replace(/<[^>]*>/g, '').substring(0, 150) || "Pas de description disponible.",
        creator: item.author || data.feed?.title || "Auteur inconnu",
        categories: item.categories || [],
        isoDate: item.pubDate
      }));
    }
    throw new Error("Aucun élément trouvé dans le flux RSS");
  };

  // Function to handle different proxy responses
  const handleProxyResponse = async (response: Response, method: string, parser: Parser) => {
    const responseText = await response.text();
    
    if (method === "rss2json") {
      try {
        const data = JSON.parse(responseText);
        if (data.status === "ok") {
          return parseRss2JsonResponse(data);
        } else {
          throw new Error("Erreur dans la réponse RSS2JSON");
        }
      } catch (error) {
        console.error("Erreur de parsing RSS2JSON:", error);
        throw error;
      }
    } else {
      // Handle allOrigins or direct XML parsing
      try {
        const feed = await parser.parseString(responseText);
        
        if (feed && feed.items && feed.items.length > 0) {
          return feed.items.slice(0, 9).map(item => ({
            title: item.title || "Sans titre",
            link: item.link || "#",
            pubDate: item.pubDate || item.isoDate || new Date().toISOString(),
            contentSnippet: item.contentSnippet || item.content?.substring(0, 150).replace(/<[^>]*>/g, '') || "Pas de description disponible.",
            creator: item.creator || feed.title || "Auteur inconnu",
            categories: item.categories || [],
            isoDate: item.isoDate
          }));
        } else {
          throw new Error("Aucun élément trouvé dans le flux RSS");
        }
      } catch (parseError) {
        console.error("Erreur de parsing XML:", parseError);
        throw parseError;
      }
    }
  };

  const fetchFeed = async () => {
    setLoading(true);
    setFetchError(null);
    
    try {
      const parser = new Parser({
        customFields: {
          item: ['media:content', 'enclosure']
        }
      });
      
      const currentSource = RSS_SOURCES.find(source => source.id === activeSource);
      
      if (!currentSource) {
        throw new Error("Source RSS non trouvée");
      }
      
      // Use the source's preferred proxy method or the manually selected one
      const methodToUse = proxyOption || currentSource.proxyMethod;
      const proxyUrl = proxyMethods[methodToUse](currentSource.url);
      
      console.log(`Fetching RSS feed from: ${currentSource.name} using ${methodToUse} proxy`);
      console.log(`Proxy URL: ${proxyUrl}`);
      
      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const items = await handleProxyResponse(response, methodToUse, parser);
      setFeedItems(items);
      setFetchError(null);
      
      toast({
        description: `Actualités chargées avec succès depuis ${currentSource.name}`,
        variant: "default"
      });
      
    } catch (error) {
      console.error("Erreur lors du chargement du flux RSS:", error);
      setFetchError(`${error instanceof Error ? error.message : 'Erreur inconnue'}`);
      
      // Get the current source for fallback data
      const currentSource = RSS_SOURCES.find(source => source.id === activeSource);
      
      // Fallback data when the feed can't be loaded
      setFeedItems([
        {
          title: "Festival de Jazz de Montreux 2025 : programmation dévoilée",
          link: "https://www.francemusique.fr/jazz/festival-jazz-montreux-2025",
          pubDate: "2025-04-01T10:15:00",
          contentSnippet: "La 60ème édition du Festival de Jazz de Montreux annonce une programmation exceptionnelle. Des légendes du jazz et des artistes émergents se partageront la scène au bord du lac Léman.",
          creator: currentSource?.name || "France Musique",
          categories: ["Jazz", "Festival"]
        },
        {
          title: "Record mondial : le plus grand orchestre virtuel réunit 10 000 musiciens",
          link: "https://www.francemusique.fr/musique-classique/record-orchestre-virtuel",
          pubDate: "2025-03-29T14:30:00",
          contentSnippet: "Un projet international a réuni virtuellement 10 000 musiciens de 150 pays pour interpréter la Symphonie n°9 de Beethoven. Un record mondial qui célèbre l'unité par la musique.",
          creator: currentSource?.name || "France Musique",
          categories: ["Classique", "Innovation"]
        },
        {
          title: "Une partition inédite de Mozart découverte dans une bibliothèque de Prague",
          link: "https://www.francemusique.fr/musique-classique/decouverte-partition-mozart",
          pubDate: "2025-03-27T09:45:00",
          contentSnippet: "Des chercheurs ont identifié une œuvre jusqu'alors inconnue de Wolfgang Amadeus Mozart dans les archives de la Bibliothèque nationale de Prague. Les premières analyses confirment l'authenticité du document.",
          creator: currentSource?.name || "France Musique",
          categories: ["Classique", "Découverte"]
        }
      ]);
      
      toast({
        description: "Impossible d'accéder au flux RSS en direct. Affichage des articles sauvegardés.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, [activeSource, proxyOption, toast]);

  return (
    <>
      <Tabs defaultValue={activeSource} value={activeSource} onValueChange={setActiveSource} className="mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <TabsList className="flex-wrap">
            {RSS_SOURCES.map(source => (
              <TabsTrigger key={source.id} value={source.id} className="flex items-center gap-1">
                {source.icon}
                <span className="hidden sm:inline">{source.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          <div className="flex items-center gap-2">
            <Select value={proxyOption} onValueChange={(value: "allorigins" | "rss2json" | "direct") => setProxyOption(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Méthode d'accès" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="allorigins">AllOrigins Proxy</SelectItem>
                <SelectItem value="rss2json">RSS2JSON API</SelectItem>
                <SelectItem value="direct">Accès Direct</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon" onClick={fetchFeed} title="Actualiser">
              <RefreshCcw className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
              <a href={RSS_SOURCES.find(s => s.id === activeSource)?.url || "#"} target="_blank" rel="noopener noreferrer">
                <Rss className="h-4 w-4" />
                <span className="hidden sm:inline">S'abonner</span>
              </a>
            </Button>
          </div>
        </div>
        
        {/* Error message display */}
        {fetchError && (
          <Card className="bg-destructive/10 mb-6">
            <CardContent className="pt-6 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <div>
                <p className="font-medium">Problème lors du chargement des actualités</p>
                <p className="text-sm text-muted-foreground">
                  {fetchError}. Essayez une autre méthode d'accès ou une autre source.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Skeleton loaders
            Array(6).fill(0).map((_, i) => (
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
                    <Badge variant="outline" className="ml-2 mt-1">
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
                    {formatDate(item.isoDate || item.pubDate)}
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
          MéloDimensions agrège des actualités provenant des principaux médias français et internationaux spécialisés dans la musique et la culture.
          Consultez régulièrement cette page pour rester informé des dernières nouveautés du monde musical.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

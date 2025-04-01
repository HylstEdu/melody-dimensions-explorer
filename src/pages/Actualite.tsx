
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Newspaper, Calendar, Music, Link as LinkIcon, Rss } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Temporary mock data for news items
const MOCK_NEWS = [
  {
    title: "Les tendances musicales qui façonneront 2023",
    source: "Musique Magazine",
    date: "2023-10-15",
    summary: "De l'IA dans la composition à la renaissance des vinyles, découvrez les tendances qui façonneront le paysage musical cette année.",
    url: "#",
    category: "tendances"
  },
  {
    title: "Le festival 'Harmonie Urbaine' annonce sa programmation",
    source: "Info Concerts",
    date: "2023-10-12",
    summary: "Le festival qui mélange classique et urbain dévoile une programmation ambitieuse pour sa 5ème édition.",
    url: "#",
    category: "evenements"
  },
  {
    title: "Nouvelle étude sur les bienfaits de la musique pour la concentration",
    source: "Science Musicale",
    date: "2023-10-10",
    summary: "Des chercheurs ont découvert de nouveaux liens entre certains genres musicaux et l'amélioration des capacités cognitives.",
    url: "#",
    category: "recherche"
  },
  {
    title: "Sortie de l'album 'Résonances' : une fusion audacieuse de jazz et d'électro",
    source: "Critiques Musicales",
    date: "2023-10-08",
    summary: "Le nouveau projet du trio Harmonic Pulse repousse les frontières des genres avec une approche innovante.",
    url: "#",
    category: "sorties"
  },
  {
    title: "Les conservatoires adaptent leurs méthodes à l'ère numérique",
    source: "Éducation Musicale",
    date: "2023-10-05",
    summary: "Face à l'évolution des pratiques musicales, les institutions traditionnelles repensent leur approche pédagogique.",
    url: "#",
    category: "education"
  },
  {
    title: "Intelligence artificielle et composition : révolution ou menace ?",
    source: "Tech Music",
    date: "2023-10-02",
    summary: "Alors que l'IA compose des morceaux de plus en plus élaborés, la communauté musicale s'interroge sur ses implications.",
    url: "#",
    category: "technologie"
  }
];

// Types for our RSS feed data
interface NewsItem {
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  category: string;
}

const Actualite = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const { toast } = useToast();

  useEffect(() => {
    // In a real implementation, this would fetch from actual RSS feeds
    // For now, we'll use our mock data
    const fetchNews = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setNewsItems(MOCK_NEWS);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités:", error);
        toast({
          variant: "destructive",
          title: "Erreur de chargement",
          description: "Impossible de charger les dernières actualités musicales."
        });
        setLoading(false);
      }
    };

    fetchNews();
  }, [toast]);

  // Filter news by category
  const filteredNews = activeCategory === "all" 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  // Format date to French format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

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

      <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <TabsList>
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value="tendances">Tendances</TabsTrigger>
            <TabsTrigger value="evenements">Événements</TabsTrigger>
            <TabsTrigger value="sorties">Sorties</TabsTrigger>
            <TabsTrigger value="technologie">Technologie</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Rss className="h-4 w-4" />
            S'abonner au flux RSS
          </Button>
        </div>
        
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
          ) : filteredNews.length > 0 ? (
            filteredNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <CardHeader className="pb-2 flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Newspaper className="h-3.5 w-3.5" />
                      {news.source}
                    </CardDescription>
                  </div>
                  {news.category && (
                    <Badge variant="music" className="ml-2 mt-1">
                      {news.category}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{news.summary}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-4 border-t">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(news.date)}
                  </span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={news.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      Lire plus
                      <LinkIcon className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <Music className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <p className="text-lg font-medium">Aucune actualité trouvée dans cette catégorie</p>
              <p className="text-muted-foreground mt-2">Essayez une autre catégorie ou revenez plus tard</p>
            </div>
          )}
        </div>
      </Tabs>

      <div className="bg-muted/40 rounded-lg p-6 mt-8">
        <h2 className="text-2xl font-bold mb-4">Sources d'actualités</h2>
        <p className="text-muted-foreground mb-6">
          MéloDimensions agrège des actualités provenant de diverses sources spécialisées dans le domaine musical.
          Nous mettons régulièrement à jour notre flux pour vous offrir les informations les plus pertinentes.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Musique Magazine", "Info Concerts", "Science Musicale", "Critiques Musicales"].map((source, i) => (
            <div key={i} className="bg-card p-3 rounded text-center">
              <p className="font-medium">{source}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actualite;

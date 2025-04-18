
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Music, Headphones, BookOpen } from "lucide-react";

const APropos = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">À propos de MéloDimensions</h1>
        <p className="text-lg text-muted-foreground">
          Découvrez ma passion pour la musique et le partage des connaissances.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 mb-10">
        <div className="col-span-12 md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Ma mission</CardTitle>
              <CardDescription>
                Explorer et partager les multiples dimensions de l'univers musical
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                MéloDimensions est né de ma passion pour la musique sous toutes ses formes. 
                Mon objectif est de créer un espace où les sciences, l'art et la culture musicale se rencontrent 
                pour offrir une compréhension approfondie de cet art universel.
              </p>
              <p>
                Compositeur amateur et passionné de techniques du son, je souhaite partager mes connaissances 
                et découvertes dans un format accessible à tous. De la physique des ondes sonores aux implications 
                sociétales de différents genres musicaux, en passant par les aspects techniques de la production, 
                j'aspire à couvrir l'intégralité du spectre musical.
              </p>
              <p>
                Strasbourgeois d'origine et de cœur, je mêle influences locales et perspectives globales 
                dans mon approche de la musique. Mon éclectisme musical et ma curiosité technique 
                nourrissent continuellement ce projet de partage.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>L'auteur</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-muted mb-4 flex items-center justify-center text-4xl font-bold text-muted-foreground">
                  GS
                </div>
                <h3 className="text-xl font-semibold">Geoffroy Streit</h3>
                <p className="text-muted-foreground">alias Hylst</p>
                <p className="text-sm text-muted-foreground mt-1">Strasbourg, France</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Music className="h-4 w-4" />
                  <span>Compositeur occasionnel</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Headphones className="h-4 w-4" />
                  <span>Passionné de techniques du son</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>Explorateur musical</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <a href="mailto:geoffroy.streit@gmail.com" className="flex items-center gap-2 text-primary hover:underline justify-center">
                  <Mail className="h-4 w-4" />
                  geoffroy.streit@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Mon approche</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Multidisciplinaire</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Je considère la musique comme un phénomène à la croisée de nombreuses disciplines. 
                Mon approche vise à intégrer ces perspectives variées pour une compréhension plus riche 
                et plus complète de l'expérience musicale.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Accessible à tous</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Je m'efforce de présenter des informations complexes de manière claire et 
                accessible, avec des explications progressives adaptées aussi bien aux novices 
                qu'aux passionnés avertis.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>En constante évolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Comme la musique elle-même, MéloDimensions est en perpétuel développement. 
                J'enrichis continuellement son contenu pour offrir une expérience toujours 
                plus pertinente et enrichissante.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="text-center my-16">
        <p className="text-xl italic">
          "La musique exprime ce qui ne peut être dit et sur quoi il est impossible de rester silencieux."
        </p>
        <p className="mt-2 text-muted-foreground">— Victor Hugo</p>
      </div>
    </div>
  );
};

export default APropos;

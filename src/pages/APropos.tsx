
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

const APropos = () => {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">À propos de MéloDimensions</h1>
        <p className="text-lg text-muted-foreground">
          Découvrez notre mission, notre équipe et notre approche de la musique.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-6 mb-10">
        <div className="col-span-12 md:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Notre mission</CardTitle>
              <CardDescription>
                Explorer et partager les multiples dimensions de l'univers musical
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                MéloDimensions est né de la passion pour la musique sous toutes ses formes et dimensions. 
                Notre objectif est de créer un espace où les sciences, l'art et la culture musicale se rencontrent 
                pour offrir une compréhension holistique de cet art universel.
              </p>
              <p>
                De la physique des ondes sonores aux implications sociétales de différents genres musicaux, 
                en passant par les aspects techniques de la production et l'histoire riche des mouvements musicaux, 
                nous aspirons à couvrir l'intégralité du spectre musical.
              </p>
              <p>
                Que vous soyez musicien, enseignant, étudiant, ou simplement passionné par la musique, 
                nous espérons que MéloDimensions vous offrira des perspectives nouvelles et enrichissantes 
                sur cet art qui nous unit tous.
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
                <p className="text-muted-foreground">Fondateur et créateur de contenu</p>
              </div>
              <p className="mb-4 text-center">
                Passionné de musique et de pédagogie, cherchant à rendre accessibles 
                les concepts complexes liés à l'univers musical.
              </p>
              <div className="flex justify-center">
                <a href="mailto:geoffroy.streit@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                  <Mail size={16} />
                  geoffroy.streit@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6">Notre approche</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Multidisciplinaire</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nous considérons la musique comme un phénomène à la croisée de nombreuses disciplines : 
                acoustique, psychologie, sociologie, histoire, technologie et bien plus encore.
                Notre approche vise à intégrer ces perspectives variées pour une compréhension plus riche.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Accessible à tous</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nous nous efforçons de présenter des informations complexes de manière claire et 
                accessible, avec des outils interactifs et des explications progressives adaptées 
                aussi bien aux novices qu'aux experts.
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
                Nous élargissons continuellement notre contenu et affinons nos outils pour 
                offrir une expérience toujours plus riche et pertinente.
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

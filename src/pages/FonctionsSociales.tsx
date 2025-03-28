
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Heart, School, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FonctionsSociales = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4 gradient-heading">Fonctions Sociales</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explorez comment la musique façonne les sociétés, influence les individus et contribue
          à notre développement psychologique et social.
        </p>
      </header>

      <Tabs defaultValue="societe" className="max-w-5xl mx-auto mb-16">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="societe">Musique et société</TabsTrigger>
          <TabsTrigger value="therapie">Applications thérapeutiques</TabsTrigger>
          <TabsTrigger value="education">Éducation musicale</TabsTrigger>
        </TabsList>

        <TabsContent value="societe" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">La musique comme vecteur culturel</h2>
              <p className="mb-4">
                À travers l'histoire, la musique a joué un rôle central dans la formation et l'expression 
                des identités collectives, qu'elles soient nationales, ethniques, générationnelles ou sociales.
              </p>
              <p className="mb-4">
                Elle reflète les valeurs, préoccupations et aspirations d'une société tout en contribuant 
                à sa cohésion et à son évolution culturelle.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/societe/identite">Explorer ce thème <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Concert avec public enthousiaste" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="h-5 w-5 text-accent" />
                  Cohésion sociale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  La musique rassemble les gens, transcendant les barrières linguistiques et culturelles. 
                  Des rituels ancestraux aux concerts modernes, elle crée des expériences collectives unifiantes.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BookOpen className="h-5 w-5 text-accent" />
                  Contestation et résistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  La musique a souvent servi d'outil de protestation et de résistance politique. Des spirituals 
                  afro-américains au rock contestataire, elle donne voix aux marginalisés et aux opprimés.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="therapie" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Musique et bien-être</h2>
              <p className="mb-4">
                Les effets thérapeutiques de la musique sont reconnus depuis l'Antiquité et sont aujourd'hui 
                validés par la recherche scientifique moderne. La musicothérapie est désormais une discipline clinique établie.
              </p>
              <p className="mb-4">
                Des hôpitaux aux centres de bien-être, la musique est utilisée pour réduire l'anxiété, 
                gérer la douleur, améliorer les fonctions cognitives et faciliter la communication.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/societe/musicotherapie">Découvrir la musicothérapie <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Séance de musicothérapie" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Applications cliniques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                La musicothérapie est utilisée dans de nombreux contextes thérapeutiques :
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Santé mentale</strong> : traitement de l'anxiété, de la dépression et des troubles post-traumatiques.</li>
                <li><strong>Neurologie</strong> : rééducation après AVC, traitement de la maladie de Parkinson et d'Alzheimer.</li>
                <li><strong>Pédiatrie</strong> : accompagnement des enfants hospitalisés et traitement des troubles du développement.</li>
                <li><strong>Gestion de la douleur</strong> : réduction de la perception de la douleur chronique et aiguë.</li>
              </ul>
              <p>
                Les approches peuvent être réceptives (écoute) ou actives (création musicale), adaptées aux besoins spécifiques de chaque patient.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="education" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Éducation musicale et développement</h2>
              <p className="mb-4">
                La pratique et l'éducation musicales contribuent significativement au développement cognitif, 
                émotionnel et social, particulièrement pendant l'enfance et l'adolescence.
              </p>
              <p className="mb-4">
                Des approches pédagogiques spécifiques facilitent l'éveil à l'écoute, au chant, au rythme 
                et à la pratique instrumentale, développant des compétences transférables à d'autres domaines.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/societe/education/methodes">Méthodes pédagogiques <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1588731222907-7d9bf2feb453?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Enfants participant à un atelier musical" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <School className="h-5 w-5 text-acoustic-500" />
                  Bénéfices cognitifs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  L'apprentissage musical améliore la mémoire, l'attention, les capacités spatiales 
                  et les compétences linguistiques. Ces effets sont particulièrement marqués lorsque 
                  la pratique commence tôt dans l'enfance.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Heart className="h-5 w-5 text-acoustic-500" />
                  Développement émotionnel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  La musique aide à développer l'intelligence émotionnelle, offrant un moyen d'exprimer 
                  et de comprendre les émotions complexes. Elle favorise également l'empathie et la 
                  régulation émotionnelle.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <section className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Perspectives interdisciplinaires</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Neurosciences et musique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explorez comment notre cerveau traite la musique et pourquoi elle peut avoir des effets 
                si profonds sur notre cognition, nos émotions et notre comportement.
              </p>
              <Button variant="outline" asChild>
                <Link to="/societe/neurosciences">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Anthropologie musicale</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez comment la musique reflète et façonne les structures sociales, les rituels 
                et les systèmes de croyance à travers les cultures du monde.
              </p>
              <Button variant="outline" asChild>
                <Link to="/societe/anthropologie">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Musique et politique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Analysez le pouvoir politique de la musique, de la propagande aux mouvements de 
                résistance, et son rôle dans la construction des identités nationales.
              </p>
              <Button variant="outline" asChild>
                <Link to="/societe/politique">Découvrir</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FonctionsSociales;

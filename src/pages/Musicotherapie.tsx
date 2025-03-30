
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, BrainCircuit, Music, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Musicotherapie = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4 gradient-heading">Musicothérapie</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Explorez comment la musique est utilisée comme outil thérapeutique pour améliorer 
          la santé physique, psychologique et émotionnelle.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Qu'est-ce que la musicothérapie?</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                La musicothérapie est une discipline thérapeutique qui utilise la musique et ses éléments 
                (son, rythme, mélodie, harmonie) pour améliorer la santé physique, émotionnelle, 
                cognitive et sociale des individus. Elle est pratiquée par des professionnels 
                certifiés ayant suivi une formation spécialisée.
              </p>
              <p>
                Contrairement à une simple écoute de musique ou à une activité musicale récréative, 
                la musicothérapie implique l'utilisation systématique et ciblée de la musique 
                pour atteindre des objectifs thérapeutiques spécifiques dans le cadre d'un 
                plan de traitement personnalisé.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Approches de la musicothérapie</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="active">
                  <AccordionTrigger>Musicothérapie active</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Dans cette approche, les patients participent activement à la création musicale, 
                      que ce soit en jouant d'un instrument, en chantant ou en composant. Cette 
                      participation active peut aider à:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Améliorer la coordination motrice</li>
                      <li>Développer l'expression personnelle et la communication</li>
                      <li>Favoriser la confiance en soi et l'estime de soi</li>
                      <li>Encourager la socialisation et la coopération</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="receptive">
                  <AccordionTrigger>Musicothérapie réceptive</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Cette approche implique l'écoute de musique, suivie d'une réflexion et d'une 
                      discussion sur les émotions et les pensées évoquées. Elle peut être utilisée pour:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Favoriser la relaxation et réduire le stress</li>
                      <li>Stimuler des souvenirs et faciliter l'évocation d'émotions</li>
                      <li>Améliorer l'humeur et diminuer l'anxiété</li>
                      <li>Faciliter le traitement émotionnel et la résilience</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="improvisation">
                  <AccordionTrigger>Improvisation musicale</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      L'improvisation musicale permet aux patients d'explorer librement la musique sans 
                      contraintes techniques, ce qui peut:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Encourager l'expression spontanée des émotions</li>
                      <li>Développer la créativité et la flexibilité cognitive</li>
                      <li>Créer un espace sécuritaire d'exploration personnelle</li>
                      <li>Faciliter la communication non-verbale pour ceux qui ont des difficultés à exprimer leurs sentiments</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Applications cliniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BrainCircuit className="h-6 w-6 text-music-500" />
                    Neurologie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Maladie de Parkinson:</strong> Amélioration de la démarche et de la motricité grâce à des stimuli rythmiques.</li>
                    <li><strong>Récupération après AVC:</strong> Stimulation de la plasticité neuronale et rééducation du langage.</li>
                    <li><strong>Démence/Alzheimer:</strong> Accès aux souvenirs émotionnels et amélioration de l'humeur.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-6 w-6 text-music-500" />
                    Santé mentale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li><strong>Dépression et anxiété:</strong> Régulation de l'humeur et expression émotionnelle.</li>
                    <li><strong>Traumatismes:</strong> Traitement émotionnel non-verbal des expériences traumatiques.</li>
                    <li><strong>Schizophrénie:</strong> Amélioration de l'attention et des interactions sociales.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-6 w-6 text-music-500" />
                    Pédiatrie et développement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Troubles du développement</h4>
                      <ul className="space-y-2">
                        <li><strong>Autisme:</strong> Amélioration de la communication et des habiletés sociales.</li>
                        <li><strong>TDAH:</strong> Développement de l'attention et de la régulation comportementale.</li>
                        <li><strong>Troubles du langage:</strong> Stimulation des compétences linguistiques via le chant.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Soins pédiatriques</h4>
                      <ul className="space-y-2">
                        <li><strong>Gestion de la douleur:</strong> Diminution de la perception de la douleur lors des procédures médicales.</li>
                        <li><strong>Enfants hospitalisés:</strong> Réduction de l'anxiété et facilitation de l'expression des émotions.</li>
                        <li><strong>Prématurés:</strong> Stabilisation des signes vitaux et promotion du développement.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
        
        <div className="md:col-span-1">
          <aside>
            <Card>
              <CardHeader>
                <CardTitle>Ressources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Associations professionnelles</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-primary hover:underline">Fédération Française de Musicothérapie</a></li>
                    <li><a href="#" className="text-primary hover:underline">Association de Musicothérapie Américaine</a></li>
                    <li><a href="#" className="text-primary hover:underline">World Federation of Music Therapy</a></li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Recherche scientifique</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-primary hover:underline">Journal of Music Therapy</a></li>
                    <li><a href="#" className="text-primary hover:underline">Nordic Journal of Music Therapy</a></li>
                    <li><a href="#" className="text-primary hover:underline">Music and Medicine Journal</a></li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-semibold mb-2">Formation</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pour devenir musicothérapeute, une formation spécialisée est nécessaire, généralement 
                    après une formation initiale en musique, psychologie ou santé.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#">
                      Explorer les formations
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6">
              <Card className="bg-music-50 border-music-200">
                <CardHeader>
                  <CardTitle className="text-music-800">Témoignages</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic border-l-4 border-music-300 pl-4 py-2 mb-4">
                    "La musicothérapie a transformé notre approche des soins aux patients atteints de démence. 
                    Nous observons des moments de lucidité et de connexion qui semblaient impossibles auparavant."
                    <footer className="text-sm font-medium mt-2">— Dr. Claire Martin, Neurologue</footer>
                  </blockquote>
                  
                  <blockquote className="italic border-l-4 border-music-300 pl-4 py-2">
                    "Après mon AVC, je ne pouvais plus parler. C'est en chantant que j'ai retrouvé progressivement 
                    mes mots. La musique m'a redonné une voix."
                    <footer className="text-sm font-medium mt-2">— Michel, 62 ans, patient</footer>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
      
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6">Découvrez plus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Neurosciences et musique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explorez les fondements neurologiques des effets thérapeutiques de la musique 
                et comment le cerveau traite les stimuli musicaux.
              </p>
              <Button variant="outline" asChild>
                <Link to="/societe/neurosciences">En savoir plus</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Musique et émotion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Découvrez pourquoi la musique est capable d'évoquer des émotions si puissantes 
                et comment ces réponses émotionnelles sont exploitées en thérapie.
              </p>
              <Button variant="outline" asChild>
                <Link to="/emotion">En savoir plus</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Applications pratiques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Apprenez comment intégrer des approches musicothérapeutiques dans votre 
                pratique professionnelle ou dans votre vie quotidienne.
              </p>
              <Button variant="outline" asChild>
                <Link to="#">En savoir plus</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Musicotherapie;

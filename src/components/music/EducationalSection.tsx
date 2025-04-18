
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const EducationalSection: React.FC = () => {
  return (
    <div className="mt-14 mb-10">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Pour aller plus loin
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Cette encyclopédie des genres musicaux n'est qu'une introduction à l'immense diversité des expressions musicales 
            à travers le monde et l'histoire. Pour approfondir vos connaissances, nous vous invitons à :
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Explorer les ressources de notre section <Button variant="link" asChild className="p-0 h-auto"><a href="/ressources">Ressources</a></Button> pour des ouvrages, documentaires et sites spécialisés
            </li>
            <li>
              Suivre l'actualité musicale dans notre section <Button variant="link" asChild className="p-0 h-auto"><a href="/actualite">Actualité</a></Button> pour découvrir les évolutions contemporaines
            </li>
            <li>
              Participer à des concerts, festivals et événements locaux pour vivre les genres musicaux dans leur contexte de performance
            </li>
            <li>
              Utiliser des plateformes de streaming pour créer des playlists exploratoires par genre et découvrir de nouveaux artistes
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild className="flex items-center gap-2">
            <a href="/ressources">
              <ArrowRight className="h-4 w-4" />
              Accéder à nos ressources musicologiques
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EducationalSection;

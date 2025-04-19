
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const terms = [
  { term: "Accord", definition: "Un groupe de notes jouées simultanément." },
  { term: "Arpège", definition: "Notes d’un accord jouées successivement." },
  { term: "Cadence", definition: "Suite d'accords marquant la fin d’une phrase musicale." },
  { term: "Dièse", definition: "Signe augmentant la hauteur d’une note d’un demi-ton." },
  { term: "Gammes", definition: "Succession ordonnée de notes." },
  { term: "Harmony", definition: "Combinaison de notes jouées simultanément." },
  { term: "Intervalle", definition: "Distance entre deux sons." },
  { term: "Modulation", definition: "Changement de tonalité dans un morceau." },
  { term: "Octave", definition: "Intervalle entre deux notes de même nom." },
  { term: "Tempo", definition: "Vitesse d’exécution d’un morceau." },
  { term: "Timbre", definition: "Caractéristique sonore qui permet de distinguer les instruments." },
  { term: "Tonique", definition: "Première note d’une gamme, base tonale." },
];

const GlossaireMusicaux: React.FC = () => {
  return (
    <section className="container py-10">
      <Card>
        <CardHeader>
          <CardTitle>Glossaire des termes musicaux</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-3">
            {terms.map(({ term, definition }) => (
              <li key={term}>
                <strong>{term}: </strong>{definition}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default GlossaireMusicaux;

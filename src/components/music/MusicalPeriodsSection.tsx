
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MusicalPeriodTab from "@/components/music/MusicalPeriodTab";

const MusicalPeriodsSection: React.FC = () => {
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold mb-6">Les périodes majeures de la musique classique</h2>
      
      <Tabs defaultValue="baroque">
        <TabsList className="flex-wrap mb-6">
          <TabsTrigger value="medieval">Médiévale</TabsTrigger>
          <TabsTrigger value="renaissance">Renaissance</TabsTrigger>
          <TabsTrigger value="baroque">Baroque</TabsTrigger>
          <TabsTrigger value="classical">Classique</TabsTrigger>
          <TabsTrigger value="romantic">Romantique</TabsTrigger>
          <TabsTrigger value="modern">Moderne</TabsTrigger>
          <TabsTrigger value="contemporary">Contemporaine</TabsTrigger>
        </TabsList>
        
        <MusicalPeriodTab 
          value="baroque"
          title="Période baroque (1600-1750)"
          description="Époque marquée par l'ornementation, le contrepoint et l'importance du contraste"
          timelineEvents={[
            { year: "1600", title: "Naissance de l'opéra", description: "Premiers opéras de Monteverdi" },
            { year: "1685", title: "Naissance de Bach et Händel", description: "Deux figures majeures de la période" },
            { year: "1725", title: "Les Quatre Saisons", description: "Chef-d'œuvre de Vivaldi" }
          ]}
          genres={[
            { 
              title: "Musique instrumentale", 
              description: "Développement du concerto et de la suite orchestrale",
              characteristics: [
                { title: "Basse continue", description: "Fondement harmonique omniprésent" },
                { title: "Ornementation", description: "Utilisation abondante de trilles et mordants" }
              ],
              artists: [
                { name: "J.S. Bach", description: "Maître du contrepoint" },
                { name: "A. Vivaldi", description: "Innovateur du concerto" }
              ]
            },
            { 
              title: "Opéra baroque", 
              description: "Naissance et développement de l'art lyrique",
              characteristics: [
                { title: "Da capo aria", description: "Structure ABA avec ornements improvisés" },
                { title: "Récitatif", description: "Passages narratifs entre les arias" }
              ],
              artists: [
                { name: "C. Monteverdi", description: "Pionnier de l'opéra" },
                { name: "G.F. Händel", description: "Opéras et oratorios" }
              ]
            }
          ]}
        />
        
        <MusicalPeriodTab 
          value="classical"
          title="Période classique (1730-1820)"
          description="Caractérisée par l'équilibre, la clarté formelle et l'élégance"
          timelineEvents={[
            { year: "1756", title: "Naissance de Mozart", description: "L'un des plus grands génies musicaux" },
            { year: "1770", title: "Naissance de Beethoven", description: "Le pont entre classicisme et romantisme" },
            { year: "1791", title: "Mort de Mozart", description: "Dernière œuvre : Requiem inachevé" }
          ]}
          genres={[
            { 
              title: "Symphonie classique", 
              description: "Établissement de la forme en quatre mouvements",
              characteristics: [
                { title: "Forme sonate", description: "Structure avec exposition, développement et réexposition" },
                { title: "Orchestration", description: "Équilibre entre les sections" }
              ],
              artists: [
                { name: "J. Haydn", description: "Père de la symphonie" },
                { name: "W.A. Mozart", description: "Raffinement et équilibre" }
              ]
            },
            { 
              title: "Musique de chambre", 
              description: "Développement du quatuor à cordes",
              characteristics: [
                { title: "Dialogue instrumental", description: "Équilibre entre les voix" },
                { title: "Clarté formelle", description: "Structures claires et symétriques" }
              ],
              artists: [
                { name: "J. Haydn", description: "Innovateur du quatuor" },
                { name: "L. Boccherini", description: "Élégance italienne" }
              ]
            }
          ]}
        />
        
        <MusicalPeriodTab 
          value="romantic"
          title="Période romantique (1800-1910)"
          description="Marquée par l'expression des émotions, le nationalisme et l'expansion de l'orchestre"
          timelineEvents={[
            { year: "1804", title: "Symphonie héroïque", description: "Œuvre révolutionnaire de Beethoven" },
            { year: "1830", title: "Symphonie fantastique", description: "Programme narratif de Berlioz" },
            { year: "1876", title: "L'Anneau du Nibelung", description: "Tétralogie monumentale de Wagner" }
          ]}
          genres={[
            { 
              title: "Musique à programme", 
              description: "Œuvres basées sur des histoires ou des idées extra-musicales",
              characteristics: [
                { title: "Leitmotiv", description: "Thèmes associés à des personnages ou idées" },
                { title: "Orchestration colorée", description: "Recherche de nouvelles sonorités" }
              ],
              artists: [
                { name: "H. Berlioz", description: "Orchestrateur innovant" },
                { name: "F. Liszt", description: "Créateur du poème symphonique" }
              ]
            },
            { 
              title: "Opéra romantique", 
              description: "Drame musical avec orchestre développé",
              characteristics: [
                { title: "Drame musical", description: "Fusion de musique et action dramatique" },
                { title: "Nationalisme", description: "Utilisation de thèmes folkloriques" }
              ],
              artists: [
                { name: "R. Wagner", description: "Révolutionnaire du drame musical" },
                { name: "G. Verdi", description: "Maître de l'opéra italien" }
              ]
            }
          ]}
        />
      </Tabs>
    </div>
  );
};

export default MusicalPeriodsSection;

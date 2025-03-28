
import { SectionCard } from "./SectionCard";
import { Music, Brain, Volume2, FileText, Users } from "lucide-react";

export function FeatureSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explorez les multiples dimensions de la musique
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            La musique est un univers complexe qui intègre science, art, culture et société.
            Découvrez chaque dimension à travers notre approche pédagogique.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          <SectionCard
            title="Physique du Son"
            description="Découvrez les principes d'acoustique, la nature des ondes sonores et le fonctionnement de l'audition humaine."
            icon={<Volume2 className="h-6 w-6" />}
            to="/physique-son"
            color="primary"
          />
          <SectionCard
            title="Culture Musicale"
            description="Explorez l'histoire, les genres et les traditions musicales à travers les époques et les régions du monde."
            icon={<Music className="h-6 w-6" />}
            to="/culture"
            color="secondary"
          />
          <SectionCard
            title="Aspects Techniques"
            description="Apprenez les bases de la théorie musicale, la composition, l'enregistrement et la production."
            icon={<FileText className="h-6 w-6" />}
            to="/technique"
            color="accent"
          />
          <SectionCard
            title="Fonctions Sociales"
            description="Comprenez le rôle de la musique dans la société, son influence culturelle et son pouvoir émotionnel."
            icon={<Users className="h-6 w-6" />}
            to="/societe"
            color="primary"
          />
          <SectionCard
            title="L'Audition Humaine"
            description="Explorez comment notre cerveau perçoit et interprète les sons, de l'anatomie de l'oreille à la psychoacoustique."
            icon={<Brain className="h-6 w-6" />}
            to="/audition"
            color="secondary"
          />
          <SectionCard
            title="Musique et Émotion"
            description="Découvrez comment la musique évoque des émotions et affecte notre état psychologique et physiologique."
            icon={<Volume2 className="h-6 w-6" />}
            to="/emotion"
            color="accent"
          />
        </div>
      </div>
    </div>
  );
}

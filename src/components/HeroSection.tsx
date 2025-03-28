
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:flex lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <div className="sound-wave mb-4">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="hidden sm:mb-8 sm:flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-foreground/20">
                Explorez les différentes dimensions de la musique.{' '}
                <Link to="/a-propos" className="font-semibold text-primary">
                  <span className="absolute inset-0" aria-hidden="true" />
                  En savoir plus <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <span className="gradient-heading">Musique</span> : Science, Art & Culture
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              De la physique des ondes sonores à l'impact culturel à travers les âges, découvrez 
              toutes les facettes qui font de la musique une expérience unique et universelle.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button asChild size="lg">
                <Link to="/physique-son">Explorer</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/culture">Découvrir les genres</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Image d'un studio d'enregistrement avec piano et équipement audio"
              className="w-[36rem] rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

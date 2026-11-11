import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-space-xl mb-12">
      <div className="bg-surface-container-high rounded-2xl p-8 lg:p-16 text-center flex flex-col items-center justify-center space-y-6 relative overflow-hidden shadow-sm">
        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-2">
          <Calendar className="w-6 h-6" />
        </div>
        <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">
          Votre Parenthèse Personnalisée
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface max-w-2xl leading-tight">
          Franchissez les portes du Sanctuaire Terreia
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl leading-relaxed">
          Qu’il s’agisse d’une immersion thermale de deux heures ou d’une journée complète de régénération holistique, nos praticiennes façonnent votre rituel sur-mesure.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Link href="/soins" className="inline-flex items-center justify-center font-label-md text-label-md tracking-wider uppercase bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-8 py-4 rounded-full shadow-md transition-all duration-300">
            <span>Réserver une Consultation</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link href="/formules" className="inline-flex items-center justify-center font-label-md text-label-md tracking-wider uppercase bg-surface-container-lowest text-on-surface hover:bg-surface hover:text-primary px-8 py-4 rounded-full shadow-sm transition-all duration-300">
            <span>Découvrir les Packs</span>
          </Link>
        </div>
        <p className="font-label-sm text-label-sm text-tertiary pt-4">
          Accueil téléphonique du lundi au dimanche : +261 38 90 584 49 • Ivato, Antananarivo, Madagascar
        </p>
      </div>
    </section>
  );
}
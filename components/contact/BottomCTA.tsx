import Link from "next/link";
import { Calendar, Phone } from "lucide-react";

export default function BottomCTA() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-16">
      <div className="bg-primary rounded-3xl p-8 lg:p-12 text-on-primary relative overflow-hidden shadow-xl">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/20 blur-2xl pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-secondary/20 blur-2xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/20 text-primary-fixed text-label-sm font-label-sm uppercase tracking-widest">
              <Calendar className="w-4 h-4" />
              <span>Disponibilités d'Exception</span>
            </div>
            <h2 className="font-display-lg text-headline-lg lg:text-[44px] tracking-tight">
              Prêt à goûter au repos absolu ?
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl">
              Réservez directement votre plage horaire en ligne pour accéder immédiatement aux bassins chauds et aux rituels botaniques Terreia.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            {/* CORRIGÉ : /reservation -> /soins */}
            <Link href="/soins" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim font-label-md text-label-md uppercase tracking-wider px-8 py-4 rounded-full shadow-lg transition-all duration-300">
              <span>Choisir un Rituel</span>
              <Calendar className="w-4 h-4" />
            </Link>
            <a href="tel:+33142685000" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-on-primary/10 hover:bg-on-primary/20 text-on-primary font-label-md text-label-md uppercase tracking-wider px-6 py-4 rounded-full transition-all">
              <Phone className="w-4 h-4" />
              <span>+261 38 90 584 49</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
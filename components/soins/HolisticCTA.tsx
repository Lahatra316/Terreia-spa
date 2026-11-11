import Link from "next/link";
import { Brain, CheckCircle2, ArrowRight, Phone } from "lucide-react";

export default function HolisticCTA() {
  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin pb-space-xl">
      <div className="bg-primary text-on-primary rounded-2xl p-space-xl md:p-14 relative overflow-hidden shadow-md">
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
          <div className="lg:col-span-8 space-y-space-sm">
            <div className="inline-flex items-center gap-2 bg-on-primary/10 rounded-full px-4 py-1.5">
              <Brain className="w-4 h-4 text-secondary-fixed" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-semibold">
                Diagnostic Holistique Offert
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-primary leading-tight">
              Vous hésitez entre plusieurs rituels ou pratiques ?
            </h2>
            <p className="font-body-md text-body-md text-on-primary/80 max-w-2xl leading-relaxed">
              Nos herboristes et maîtres praticiens vous conseillent selon votre niveau de fatigue, vos besoins musculaires et votre constitution ayurvédique ou thermique du moment.
            </p>
            <div className="flex flex-wrap items-center gap-space-lg pt-2 text-on-primary/90 font-body-sm text-body-sm">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-secondary-fixed" /> Sans engagement</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-secondary-fixed" /> Réponse sous 2h ouvrées</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-secondary-fixed" /> Écoute bienveillante</span>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col gap-space-sm items-start lg:items-end">
            {/* CORRIGÉ : /reservation -> /contact */}
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-md text-label-md tracking-wider uppercase bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim px-8 py-4 rounded-full shadow-lg transition-all duration-300">
              <span>Demander un Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+33142685000" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-md text-label-md text-on-primary hover:text-secondary-fixed px-6 py-2 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Parler à un Praticien</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Hourglass, CheckCircle2 } from "lucide-react";

export default function PhilosophyStats() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-space-xl">
      <div className="bg-primary text-on-primary rounded-2xl p-8 lg:p-16 shadow-xl relative overflow-hidden">
        {/* Décor SVG */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none">
          <svg className="w-full h-full fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,72.7,41.4C64,53.7,52.2,63.7,39.1,70.8C25.9,77.9,13,82.1,-0.6,83.1C-14.2,84.1,-28.4,81.9,-41.2,75.2C-54,68.5,-65.4,57.3,-73.4,43.9C-81.4,30.5,-86,15.2,-85.4,0.3C-84.9,-14.6,-79.1,-29.2,-70.2,-41.3C-61.2,-53.5,-49.2,-63.9,-36,-71.4C-22.7,-78.9,-8.3,-83.4,3.7,-89.8L44.7,-76.4Z" transform="translate(100 100)"></path>
          </svg>
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-on-primary/10 px-3 py-1 rounded-full text-secondary-fixed">
              <Hourglass className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Rythme • Respiration</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg leading-tight">
              L’Art de ralentir le tempo intérieur
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface opacity-90 max-w-xl leading-relaxed">
              Dans un monde dominé par l’hyper-vitesse, nous considérons la lenteur comme une forme d’élégance vitale. Nos rituels ne sont pas chronométrés pour s'enchaîner, mais orchestrés comme des passages : une transition consciente vers le silence organique.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-secondary-fixed font-label-md text-label-md">
                <CheckCircle2 className="w-5 h-5" />
                <span>Transition sensorielle de 20 min incluse</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-fixed font-label-md text-label-md">
                <CheckCircle2 className="w-5 h-5" />
                <span>Infusions adaptogènes sur-mesure</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 pt-6 lg:pt-0">
            <div className="bg-on-primary/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col justify-center items-center">
              <span className="font-display-lg text-headline-lg lg:text-[44px] font-headline-lg text-secondary-fixed leading-none">100%</span>
              <span className="font-label-md text-label-md uppercase tracking-wider mt-2 text-inverse-on-surface font-semibold">Extraits Purs</span>
              <span className="font-body-sm text-body-sm text-surface-dim mt-1">Aucun conservateur de synthèse</span>
            </div>
            <div className="bg-on-primary/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col justify-center items-center">
              <span className="font-display-lg text-headline-lg lg:text-[44px] font-headline-lg text-secondary-fixed leading-none">0 min</span>
              <span className="font-label-md text-label-md uppercase tracking-wider mt-2 text-inverse-on-surface font-semibold">D’Écran ou Hâte</span>
              <span className="font-body-sm text-body-sm text-surface-dim mt-1">Déconnexion digitale absolue</span>
            </div>
            <div className="bg-on-primary/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col justify-center items-center">
              <span className="font-display-lg text-headline-lg lg:text-[44px] font-headline-lg text-secondary-fixed leading-none">12</span>
              <span className="font-label-md text-label-md uppercase tracking-wider mt-2 text-inverse-on-surface font-semibold">Familles Partenaires</span>
              <span className="font-body-sm text-body-sm text-surface-dim mt-1">Micro-coopératives rémunérées équitablement</span>
            </div>
            <div className="bg-on-primary/10 backdrop-blur-sm p-4 rounded-xl text-center flex flex-col justify-center items-center">
              <span className="font-display-lg text-headline-lg lg:text-[44px] font-headline-lg text-secondary-fixed leading-none">432Hz</span>
              <span className="font-label-md text-label-md uppercase tracking-wider mt-2 text-inverse-on-surface font-semibold">Bains Harmoniques</span>
              <span className="font-body-sm text-body-sm text-surface-dim mt-1">Fréquences sonores thérapeutiques</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
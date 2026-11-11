import { ShieldCheck, Waves, Gift } from "lucide-react";

export default function PageHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low py-16 lg:py-24">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-secondary">
              <Waves className="w-4 h-4" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em]">Voyages Sensoriels & Rituels Complets</span>
            </div>
            
            <h1 className="font-headline-lg text-display-lg text-on-surface tracking-tight">
              L'art des traversées bienfaisantes,<br/>
              <span className="italic font-normal text-secondary">pensées pour suspendre le temps.</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light">
              Chaque formule est une partition immersive mariant thermes minéraux, soins botaniques et collations herbalistes. Conçus pour restaurer les équilibres vitaux, nos packs vous invitent à ralentir au rythme des saisons aixoises.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-2 text-on-surface-variant font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" /> Soins sur-mesure inclus
              </span>
              <span className="flex items-center gap-2">
                <Waves className="w-5 h-5 text-primary" /> Accès illimité aux bassins d'argile
              </span>
              <span className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-primary" /> Bons cadeaux valables 12 mois
              </span>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_12px_36px_-8px_rgba(78,86,75,0.12)]">
              <img 
                className="w-full h-80 lg:h-[400px] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIPvyoSksKSP-clMF-PZWDBug1v9lXsgULPTs4Tm6S5dLZLQMT0LIlUGP0kxBvdmQULckQ341Rrlw_PcSJOmq8qCbc7-yCcSKbPMlgiIK1QBX57sSTl2KAhFJSStnKbCDGnUrNTgi3CVkkkFMn3Wd66X1o-4kkCc_7riq60_5ZImAuf-suRiIdFQ71CzQ8CNbCpTIo3v-py98C90TsT0SD2eu-A9Co-NlvgoLQPizK" 
                alt="Sanctuaire de Provence" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                <p className="font-headline-sm text-headline-sm italic">« Un retour à l'essentiel, guidé par la lenteur végétale. »</p>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed mt-1">Sanctuaire de Provence</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
import { Leaf, Droplets, Sun, Sprout } from "lucide-react";

export default function PageHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-low py-16 lg:py-24">
      <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
      
      <div className="max-w-[1280px] mx-auto px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-highest/70 backdrop-blur-sm">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">L'Apothicairerie Gourmande</span>
            </div>
            
            <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-[1.08]">
              L'Alchimie des Saveurs, <br/>
              <span className="italic font-normal text-secondary">selon les Cycles Lunaires</span>
            </h1>
            
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Conçue main dans la main avec nos naturopathes et herboristes cueillants, la table Terreia célèbre une nutrition cellulaire vivante. Chaque infusion, bouillon et élixir est harmonisé selon le rythme circadien pour prolonger la quintessence de vos soins thermiques.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <Sprout className="w-5 h-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">100% Biologique</span>
                  <span className="font-body-sm text-body-sm text-tertiary">Terroirs certifiés & vivants</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-secondary" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Extraction Lente</span>
                  <span className="font-body-sm text-body-sm text-tertiary">Vitalité enzymatique préservée</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-primary-container" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Accord Circadien</span>
                  <span className="font-body-sm text-body-sm text-tertiary">Herboristerie selon l'heure</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container aspect-[4/5] max-h-[500px] w-full">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACX8A62WsSUp6UrCDNEU8w13MCXA5qMEUd9Qm-ivS1GohHU1PJo6RmFF3hDrP22GaKrJLxGCtX0jdpfCPqzTpgvGfkU-d3c2lpJ0bEcD2kN7Zhyh5L9rchfx_0l_cbdc-_Igk109TcDKNLZlivHNz_k_pnIUphYp7_KVm8-uv1TgVsaD22lhq_K3ZSC-ptIVh2zXIBDDqS7lfQbN35japCcJSyoNem4M0n-RXBWfgB" 
                alt="Récolte du jour" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface/85 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary block">Récolte du Jour</span>
                    <p className="font-headline-sm text-headline-sm text-on-surface">Jardin d'Herbes Médicinales Terreia</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-on-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
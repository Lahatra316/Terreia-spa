// components/saveur/Sidebar.tsx
"use client";

import { useState } from "react";
import { ShieldCheck, Sprout, Hourglass, Droplets, ArrowRight, Sparkles } from "lucide-react";
import TableBookingModal from "./TableBookingModal";

export default function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
        
        {/* Carte Charte */}
        <div className="p-6 lg:p-8 rounded-3xl bg-surface-container-lowest shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none"></div>
          
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-secondary" />
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">Notre Manifeste</span>
          </div>
          
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3">La Charte Culinaire Terreia</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-6">
            Nous pensons que ce qui pénètre le corps nourrit autant l'âme que les rituels appliqués sur la peau. Notre table suit des règles d'or inébranlables.
          </p>
          
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                <Sprout className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-label-md text-label-md font-semibold text-on-surface">100% Biologique & Biodynamique</h4>
                <p className="font-body-sm text-body-sm text-tertiary">Zéro pesticide, semences paysannes non modifiées et respect strict du calendrier lunaire Maria Thun.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                <LeafIcon />
              </div>
              <div>
                <h4 className="font-label-md text-label-md font-semibold text-on-surface">0 km Herbes du Jardin</h4>
                <p className="font-body-sm text-body-sm text-tertiary">Mélisse, romarin, sauge sclarée et menthe poivrée sont cueillis chaque matin dans le cloître du sanctuaire.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                <Hourglass className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-label-md text-label-md font-semibold text-on-surface">Extraction Lente & Cuisson Douce</h4>
                <p className="font-body-sm text-body-sm text-tertiary">Aucune cuisson n'excède 42°C pour nos préparations crues, garantissant l'intégrité intégrale des enzymes vivantes.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                <Droplets className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-label-md text-label-md font-semibold text-on-surface">Eau Vortexée & Dynamisée</h4>
                <p className="font-body-sm text-body-sm text-tertiary">Nos eaux de tisanes subissent une triple filtration céramique et une restructuration par vortex magnétique.</p>
              </div>
            </div>
          </div>

          {/* Widget Conseil */}
          <div className="mt-8 p-4 rounded-2xl bg-surface-container-low flex flex-col gap-2">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Conseil Naturopathique</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Vous hésitez sur l'accord parfait avec votre massage ? Notre herboriste de comptoir est à votre disposition dans le salon de thé.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-primary hover:text-primary-container transition-colors cursor-pointer"
              >
                <span>Demander un diagnostic tisane</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Widget Service Continu */}
        <div className="p-5 rounded-2xl bg-surface-container flex items-center gap-4">
          <Sparkles className="w-8 h-8 text-secondary shrink-0" />
          <div>
            <p className="font-label-md text-label-md text-on-surface font-semibold">Service Continu</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Le salon de thé et la cuisine vitalité vous accueillent sans interruption de 10h30 à 19h30.</p>
          </div>
        </div>

      </aside>

      <TableBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function LeafIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
}
// components/formules/PackCard.tsx
"use client";

import { useState } from "react";
import { Clock, CheckCircle2, ArrowRight, Calendar, Star, Heart } from "lucide-react";
import { Pack } from "./data";
import PackBookingModal from "./PackBookingModal";

export default function PackCard({ pack }: { pack: Pack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 group ${
        pack.isHighlighted 
          ? "shadow-[0_20px_48px_-6px_rgba(70,102,72,0.18)] scale-[1.02] relative border border-primary/20" 
          : "shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(78,86,75,0.1)]"
      }`}>
        
        {pack.isHighlighted && (
          <div className={`${pack.type === 'duo' ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary'} py-1.5 text-center font-label-sm text-label-sm uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2`}>
            {pack.type === 'duo' ? <Heart className="w-4 h-4" /> : <Star className="w-4 h-4" />}
            {pack.highlightText}
          </div>
        )}

        <div className="relative h-56 overflow-hidden">
          <img src={pack.image} alt={pack.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full">
            <span className={`font-label-sm text-label-sm uppercase tracking-widest font-semibold ${pack.type === 'duo' ? 'text-secondary' : 'text-primary'}`}>
              {pack.categoryLabel}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 bg-on-surface/80 backdrop-blur-sm text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {pack.duration}
          </div>
        </div>

        <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-baseline justify-between">
              <h2 className="font-headline-md text-headline-md text-on-surface">{pack.title}</h2>
              <div className="text-right">
                <span className={`font-headline-md text-headline-md font-semibold ${pack.isHighlighted && pack.type === 'duo' ? 'text-primary font-bold' : 'text-secondary'}`}>
                  {pack.price}
                </span>
                <span className="block font-label-sm text-label-sm text-tertiary">
                  {pack.type === 'duo' ? 'pour 2 personnes' : 'par personne'}
                </span>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
              {pack.description}
            </p>

            <div className={`mt-6 p-4 rounded-xl space-y-3 ${pack.isHighlighted && pack.type === 'duo' ? 'bg-primary/5' : 'bg-surface-container-low'}`}>
              <span className={`font-label-sm text-label-sm uppercase tracking-wider block font-semibold ${pack.isHighlighted && pack.type === 'duo' ? 'text-primary' : 'text-secondary'}`}>
                Itinéraire du soin
              </span>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: feature.replace(/(.*?):/, '<strong>$1 :</strong>') }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bouton de réservation (sans le bouton bon cadeau) */}
          <div className="pt-6 mt-auto">
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`w-full font-label-md text-label-md uppercase tracking-wider py-3.5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container`}
            >
              <span>Réserver ce rituel</span>
              {pack.isHighlighted ? <Calendar className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      <PackBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pack={pack} 
      />
    </>
  );
}
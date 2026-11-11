// components/soins/TreatmentCard.tsx
"use client"; // <-- Important car on utilise useState

import { useState } from "react";
import { Treatment } from "./data";
import { Sparkles, Calendar, Clock, Droplets } from "lucide-react";
import BookingModal from "./BookingModal"; // <-- Importer la modale

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const { gridClass, layout, image, imageHeight = "h-56", badge, time, categoryName, title, price, description, tags } = treatment;
  const [isModalOpen, setIsModalOpen] = useState(false); // <-- État de la modale

  const isHorizontal = layout === "horizontal";

  return (
    <>
      <article className={`${gridClass} bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 group flex ${isHorizontal ? 'flex-col md:flex-row' : 'flex-col justify-between'}`}>
        
        {/* Image */}
        <div className={`relative overflow-hidden ${isHorizontal ? 'md:w-1/2 min-h-[320px]' : imageHeight}`}>
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          {badge && (
            <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md rounded-full px-3 py-1 font-label-sm text-label-sm uppercase tracking-widest text-primary flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> {badge}
            </div>
          )}
          <div className="absolute bottom-4 left-4 bg-on-surface/80 backdrop-blur-sm text-on-primary px-3 py-1 rounded-full font-label-md text-label-md flex items-center gap-1.5">
            {categoryName.includes("Thermes") ? <Droplets className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
            {time}
          </div>
        </div>

        {/* Contenu */}
        <div className={`p-space-lg flex flex-col justify-between flex-1 ${isHorizontal ? 'md:w-1/2' : ''}`}>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">{categoryName}</span>
              <span className="font-headline-md text-headline-md text-secondary font-medium">{price}</span>
            </div>
            <h2 className={`text-on-surface leading-snug mb-3 ${isHorizontal ? 'font-headline-lg text-headline-lg' : 'font-headline-md text-headline-md'}`}>
              {title}
            </h2>
            <p className={`text-on-surface-variant leading-relaxed ${isHorizontal ? 'font-body-md text-body-md' : 'font-body-sm text-body-sm'}`}>
              {description}
            </p>
            
            {tags && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {tags.map(tag => (
                  <span key={tag} className="bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-space-md">
            {/* On ouvre la modale au clic */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container transition-colors py-3 px-6 rounded-full font-label-md text-label-md uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Réserver ce soin</span>
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </article>

      {/* Rendu de la Modale */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        treatment={treatment} 
      />
    </>
  );
}
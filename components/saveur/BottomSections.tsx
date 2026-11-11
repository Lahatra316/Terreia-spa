// components/saveur/BottomSections.tsx
"use client";

import { useState } from "react";
import TableBookingModal from "./TableBookingModal";

export default function BottomSections() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Bannière d'images */}
      <section className="w-full py-16 bg-surface-container-low relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-sm bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB027UP8wFdSYIM5E292LyZQtBOWkcoZqrRiAy1vgotH9GXlYaXth86vrzw3Jg1_Un6CVIoLXVrgTXkYIa47k5mHVWB78Sg8mxdigj_92OzysXKbC3p_97CLo_-ucFLHRPpFtmLDd7rQeFP06log-5wmhJNDyB43W-V5RIVwzkkewQh5C9Mh4gdlEA4VMHpzidw1AsyqcCmJc0RZwa2Z09pxAxhdUgl67w3oiOan24t" alt="Infusion" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-5">
                <span className="font-headline-sm text-headline-sm text-inverse-on-surface">L'Art de l'Infusion Lente</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-sm bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK8_oCWOI_S1Vz9wDcvR4Krgs7O82i8-7yKBOjdiZchYCg3RiFxxKi1eK0iBlGSFJXDmrkDZJq1kgp8BtQeXnEZqNV0VmGP-TFKERaC2LHIRjklBRNbSOLeRGbrW5nFUh8jd1Xb_lqJPnAzrl19xgzQmHgbaZ4aHybgbbP_TGq1SvBBEXAGBY0YKQn4Kx3J25TIZYVgV2ngR1R93qC5aECzNIenu9peqSqTOJuPJqL" alt="Jus" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-5">
                <span className="font-headline-sm text-headline-sm text-inverse-on-surface">Énergétique des Végétaux</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-sm bg-surface-container">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChDiy2r69iDkjckgRHGFK1jkGLa4X9zKWbq2hmg2MLYSqPfgd3abY2bPVFZoCJNXoWpADlBHQF2UcnJXOr82DkoENdlRGzqApLVkdmRjM8QqH-XF0rh8o167q0Au1_d9kmlQ1KItOezGm5PKyF65Wn9xWvsXDDZsdZqmEpUfn8UaIcvufiDCudeupNiQlD9m73nSb54uyIxP3oDsGjf2jjzfniciuB0ToNFek4igbd" alt="Douceurs" />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent flex items-end p-5">
                <span className="font-headline-sm text-headline-sm text-inverse-on-surface">Douceurs Vivantes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Callout CTA */}
      <section className="w-full py-16 bg-background">
        <div className="max-w-[1280px] mx-auto px-margin">
          <div className="p-8 lg:p-12 rounded-3xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Expérience Complète</span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Prolongez votre soin par une table privée</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Réservez un salon privatif au jardin d'hiver avec menu dégustation détox sur mesure, en synchronisation immédiate avec vos rituels de massages ou vos bains thermaux.
              </p>
            </div>
            <div className="shrink-0">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center font-label-md text-label-md tracking-wider uppercase bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container px-8 py-4 rounded-full shadow-lg transition-all duration-300"
              >
                Réserver une Table & Soin
              </button>
            </div>
          </div>
        </div>
      </section>

      <TableBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
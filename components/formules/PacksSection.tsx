"use client";

import { useState } from "react";
import { User, Users } from "lucide-react";
import { packs } from "./data";
import PackCard from "./PackCard";
import Link from "next/link";

export default function PacksSection() {
  const [activeTab, setActiveTab] = useState<"solo" | "duo">("solo");

  const filteredPacks = packs.filter((p) => p.type === activeTab);

  return (
    <section className="max-w-[1280px] mx-auto px-margin py-space-xl w-full">
      {/* Sélecteur (Toggle) */}
      <div className="flex flex-col items-center mb-12">
        <div className="bg-surface-container p-1.5 rounded-full inline-flex items-center shadow-inner gap-1">
          <button 
            onClick={() => setActiveTab("solo")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-300 ${
              activeTab === "solo" 
                ? "bg-primary text-on-primary shadow-sm" 
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <User className="w-4 h-4" />
            <span>Packs Individuels</span>
          </button>
          
          <button 
            onClick={() => setActiveTab("duo")}
            className={`flex items-center gap-2 px-8 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-300 ${
              activeTab === "duo" 
                ? "bg-primary text-on-primary shadow-sm" 
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Packs Duo</span>
          </button>
        </div>
        <p className="font-body-sm text-body-sm text-tertiary mt-4 text-center">
          Sélectionnez votre escapade : sérénité introspective ou partage en suite privative.
        </p>
      </div>

      {/* Grille des Packs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPacks.map((pack) => (
          <PackCard key={pack.id} pack={pack} />
        ))}
      </div>

      {/* Bannière de rappel (si on est sur Solo) */}
      {activeTab === "solo" && (
        <div className="mt-16 bg-gradient-to-r from-surface-container via-surface-container-low to-surface-container rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_36px_-8px_rgba(78,86,75,0.05)]">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
              <Users className="w-7 h-7 text-on-secondary-container" />
            </div>
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Moments Complices</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Vous venez à deux ? Nos Suites Duo vous attendent.</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Duo Complicité (260€), Duo Évasion (320€) ou formule Gourmandise (390€) avec salon thermal privatisé.
              </p>
            </div>
          </div>
          <button 
            onClick={() => setActiveTab("duo")}
            className="shrink-0 bg-secondary text-on-secondary hover:bg-on-secondary-fixed-variant px-6 py-3 rounded-full font-label-md text-label-md uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <span>Découvrir les 3 Packs Duo</span>
          </button>
        </div>
      )}
    </section>
  );
}
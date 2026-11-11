"use client";

import { useState, Fragment } from "react";
import { treatments } from "@/components/soins/data";
import PageHeader from "@/components/soins/PageHeader";
import TreatmentCard from "@/components/soins/TreatmentCard";
import Timeline from "@/components/soins/Timeline";
import HolisticCTA from "@/components/soins/HolisticCTA";
import { Droplets } from "lucide-react";

const categories = [
  { id: "all", label: "Tous les Soins & Espaces" },
  { id: "corps", label: "Soins du Corps" },
  { id: "visage", label: "Soins du Visage" },
  { id: "thermes", label: "Espaces Thermaux" },
  { id: "yoga", label: "Pratiques & Yoga" },
];

export default function SoinsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTreatments = treatments.filter(
    (t) => activeFilter === "all" || t.category === activeFilter
  );

  return (
    <div className="flex flex-col w-full bg-background min-h-screen pt-32">
      <PageHeader />

      <section className="max-w-[1280px] w-full mx-auto px-margin pb-space-lg">
        {/* Filtres */}
        <div className="flex flex-wrap items-center gap-space-sm overflow-x-auto pb-2 mb-space-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-6 py-2.5 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                activeFilter === cat.id
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span>{cat.label}</span>
              {activeFilter === cat.id && <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>}
            </button>
          ))}
        </div>

        {/* Grille Asymétrique */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {filteredTreatments.map((treatment, index) => (
            <Fragment key={treatment.id}>
              {/* La citation insérée avant la 6ème carte */}
              {index === 5 && (
                <div className="lg:col-span-12 my-space-md bg-secondary-fixed/30 rounded-2xl p-space-xl flex flex-col md:flex-row items-center justify-between gap-gutter mb-6">
                  <div className="space-y-space-xs max-w-xl">
                    <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary font-semibold">Hydrothérapie & Thermalisme</span>
                    <p className="font-headline-md text-headline-md text-on-secondary-fixed italic">
                      « L’eau thermale dissout les crispations de l’esprit là où la parole ne suffit plus. »
                    </p>
                  </div>
                  <div className="flex items-center gap-space-md shrink-0">
                    <div className="text-right">
                      <span className="font-label-md text-label-md block text-secondary font-medium">Bassin Naturel Tempéré</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Filtration bioactive végétale</span>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center shadow-sm text-primary">
                      <Droplets className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* La carte de soin */}
              <TreatmentCard treatment={treatment} />
            </Fragment>
          ))}
        </div>
      </section>

      <Timeline />
      <HolisticCTA />
    </div>
  );
}
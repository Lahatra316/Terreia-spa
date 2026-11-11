import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConceptPillars() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-space-xl">
      {/* En-tête de section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-8 bg-secondary"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary">La Trinité Terreia</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Trois univers dédiés à la lenteur et au recueillement</h2>
        </div>
        <p className="font-body-md text-body-md text-tertiary max-w-md font-light leading-relaxed">
          Chaque espace a été façonné avec des matières minérales vivantes pour rééquilibrer vos rythmes biologiques dans la plus pure discrétion.
        </p>
      </div>

      {/* Grille des 3 cartes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        
        {/* Carte 1 : Les Soins */}
        <article className="group relative rounded-xl overflow-hidden bg-surface-container-low shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(78,86,75,0.1)] transition-all duration-500 flex flex-col">
          <div className="relative h-72 w-full overflow-hidden">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzpfsP3Y-RL0L_4kF9RAS8-2lWa2OPpavvqsWN2yMFyIEHTXIKaCVvHcnoJN6Pb7y05ATnXlSosYH6a0Xaqtb5qk9tcEp8-YzIEyvN0XgKBN28iOpBbBVV4dL2VHvwzTImi-vg64wx4YsH9BA116gDSe5M8kKKUlxVFqC52gYOgUtOtWGm6BlCobRmntiHhoCoS-Zpv2VoCKfcRgzEcyBCPTUvhVygpNvqim3S5Le6')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
              Rituels Corporels
            </span>
          </div>
          <div className="p-8 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">Les Soins</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-6">
                Massages ancestraux à l'huile tiède de Ravensara, frictions aux poudres volcaniques et digitopression pour dissoudre les tensions les plus profondes.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Huiles Primaires</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Quartz Rose</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Gestuelle Ayurvédique</span>
              </div>
            </div>
            <Link href="/soins" className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary group-hover:text-primary transition-colors">
              <span>Explorer le menu des soins</span>
              <ArrowRight className="w-[16px] h-[16px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>

        {/* Carte 2 : La Relaxation */}
        <article className="group relative rounded-xl overflow-hidden bg-surface-container-low shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(78,86,75,0.1)] transition-all duration-500 flex flex-col">
          <div className="relative h-72 w-full overflow-hidden">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_vVWBjdNO01njNdum8Ukpdxpmeyn_XTc7mwURLwofVWo9KgZxZNW6kaXMqkFaWbnEDL2UcH5eIpk0jBl21yqMbVIi36KwD-bDq4k_UbBEyHrNYzRKbr3ngjOu1p8i_g7EmIGviU5Qnzh_B4VpAypzIWawGAk9OMWsrFmosZRbFprr2j12mf0WgAvNqjf7p0sqbkI3pZ7Vcu2MQIdfGOKVe2uJiFSuEAP3M-enKZz2')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
              Bains & Chaleur
            </span>
          </div>
          <div className="p-8 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">La Relaxation</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-6">
                Hammam en marbre brut aux effluves d'eucalyptus sauvage, sauna au cèdre rouge du Japon et bain thermal à remous filtré sur lit de roches volcaniques.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Vapeur Détox</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">38°C Thermal</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Halothérapie</span>
              </div>
            </div>
            <Link href="/soins" className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary group-hover:text-primary transition-colors">
              <span>Découvrir les thermes</span>
              <ArrowRight className="w-[16px] h-[16px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>

        {/* Carte 3 : Terreia Saveur */}
        <article className="group relative rounded-xl overflow-hidden bg-surface-container-low shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(78,86,75,0.1)] transition-all duration-500 flex flex-col">
          <div className="relative h-72 w-full overflow-hidden">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                 style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5r8fz2M843-oey3Wu1mw7FZxosSz20jp3m-XektTT9qFuS8VFKEUylp27vxDiRxWwHARSSX6NNF_i5bD_AnjqCVnkL83L2hdYVdrLjWbm4eAYzCR0qFVe_ZDrROkp5rqolNUBM2h2RJGcvxEelzbOSn4gccUk9Bk1M0Cx1ZEMzhkVgHDdha8PeiQYLwYqWcK6dxiylTusecxyomtGh5kvY8nOsYbOJjsA9MhJXdHO')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
            <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">
              Nutrition Vivante
            </span>
          </div>
          <div className="p-8 flex flex-col flex-1 justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">Terreia Saveur</h3>
              <p className="font-body-md text-body-md text-on-surface-variant font-light leading-relaxed mb-6">
                Bar d'herboristerie vivante, décoctions médicinales pressées à froid et collations saines élaborées par nos naturopathes pour prolonger les bienfaits.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Élixirs Botaniques</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Cru & Bio</span>
                <span className="px-3 py-1 rounded-full bg-surface-container-highest/70 font-label-sm text-label-sm text-tertiary">Miels Sauvages</span>
              </div>
            </div>
            <Link href="/terreia-saveur" className="inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary group-hover:text-primary transition-colors">
              <span>Explorer la tisanerie</span>
              <ArrowRight className="w-[16px] h-[16px] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
import { Sprout, Handshake, Waves, ArrowRight } from "lucide-react";

export default function ThreePillars() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-space-xl">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">Fondations Éthiques</span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
          Les Trois Piliers d’un Sanctuaire Vrai
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          La noblesse de notre art réside dans l'engagement sans compromis envers les femmes, les hommes et la terre qui nous confient leurs trésors.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pilier 1 */}
        <div className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Sprout className="w-6 h-6" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              100% Botanique & Biologique
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Toutes nos émulsions, baumes d’argile rouge et sérums de massage sont formulés dans notre laboratoire provençal à partir d’ingrédients certifiés biologiques, sans dérivés pétrochimiques, sans parfums synthétiques ni conservateurs agressifs.
            </p>
          </div>
          <div className="pt-6 flex items-center gap-2 text-primary font-label-md text-label-md font-semibold">
            <span>Certification Écocert • Cosmos</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        
        {/* Pilier 2 */}
        <div className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Filières Équitables à Madagascar
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Nous achetons nos huiles précieuses et beurres végétaux avec une prime de valorisation de 35% au-dessus du cours mondial. 5% de nos bénéfices annuels financent directement la scolarisation d’enfants dans la région de Sava et Nosy Be.
            </p>
          </div>
          <div className="pt-6 flex items-center gap-2 text-secondary font-label-md text-label-md font-semibold">
            <span>Commerce Solidaire Audité</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
        
        {/* Pilier 3 */}
        <div className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center">
              <Waves className="w-6 h-6" />
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Éco-Sanctuaire Préservé
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              De nos bassins thermiques filtrés par phytorégénération aux peignoirs en lin biologique tissés en France, l’empreinte environnementale de Terreia est mesurée, neutralisée et réinjectée dans des programmes de reforestation côtière.
            </p>
          </div>
          <div className="pt-6 flex items-center gap-2 text-tertiary font-label-md text-label-md font-semibold">
            <span>Bilan Carbone Négatif</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
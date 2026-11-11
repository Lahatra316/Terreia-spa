import { UserCheck, Car } from "lucide-react";

export default function PageHeader() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin pt-12 pb-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/40 text-on-secondary-fixed">
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Sanctuaire & Accueil Privé</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Conciergerie <span className="italic font-normal text-primary">& Accès</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant pt-2">
            Que ce soit pour préparer une parenthèse thermale sur-mesure, orchestrer une privatisation de nos bains secrets ou réserver une suite duo, nos maîtres d'accueil veillent à chaque détail.
          </p>
        </div>
        
        <div className="flex items-center gap-4 p-2 rounded-full bg-surface-container-low shadow-sm">
          <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-lowest rounded-full shadow-sm">
            <UserCheck className="w-5 h-5 text-primary" />
            <div className="text-left">
              <span className="block font-label-sm text-label-sm text-tertiary uppercase">Réponse garantie</span>
              <span className="block font-label-md text-label-md text-on-surface font-semibold">Sous 2 heures ouvrées</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-lowest rounded-full shadow-sm">
            <Car className="w-5 h-5 text-secondary" />
            <div className="text-left">
              <span className="block font-label-sm text-label-sm text-tertiary uppercase">Voiturier offert</span>
              <span className="block font-label-md text-label-md text-on-surface font-semibold">Bornes 22kW disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
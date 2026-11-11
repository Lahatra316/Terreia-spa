export default function PageHeader() {
  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin pt-32 pb-space-lg relative">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter relative z-10">
        <div className="max-w-2xl space-y-space-md">
          <div className="flex items-center gap-space-sm text-secondary">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em]">Sanctuaire Holistique • Aix-en-Provence</span>
            <span className="w-8 h-[1px] bg-secondary-fixed-dim"></span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight leading-[1.08]">
            L’Éveil des Sens & <span className="italic font-normal text-primary">la Paix Botanique</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Chaque protocole est une immersion contemplative façonnée selon les cycles végétaux, les élixirs d’herboristerie fine et la pureté des thermes minéraux.
          </p>
        </div>

        {/* Widget Atmosphère */}
        <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm max-w-xs w-full space-y-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Atmosphère Actuelle</span>
            <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Calme absolu
            </span>
          </div>
          <div className="flex items-baseline gap-space-sm pt-1">
            <span className="font-headline-md text-headline-md text-on-surface font-light">24.5°C</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Bains chauds à 36.8°C</span>
          </div>
          <p className="font-body-sm text-body-sm text-tertiary pt-1">Diffusion aromatique : Sauge sclarée & Cèdre atlas</p>
        </div>
      </div>
    </section>
  );
}
export default function Timeline() {
  const steps = [
    { num: "1", title: "Infusion & Écoute", desc: "Tisane d'accueil aux herbes fraîches du domaine et échange personnalisé avec votre praticien." },
    { num: "2", title: "Halte Thermale", desc: "Passage par le bain thermal ou le hammam pour détendre le tissu myofascial avant manipulation." },
    { num: "3", title: "Protocole Dédié", desc: "Immersion sensorielle totale en cabine feutrée aux senteurs botaniques bienfaisantes." },
    { num: "4", title: "Salon de Repos", desc: "Dégustation d'élixirs vivants et transition douce au son des fontaines minérales." },
  ];

  return (
    <section className="max-w-[1280px] w-full mx-auto px-margin py-space-xl">
      <div className="bg-surface-container rounded-2xl p-space-xl">
        <div className="max-w-xl mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">L'Art de Vivre Terreia</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Comment se déroule votre échappée ?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">Nous recommandons d’arriver 25 minutes avant votre soin pour vous imprégner de la quiétude des lieux.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
          {steps.map((step) => (
            <div key={step.num} className="space-y-space-xs">
              <div className="flex items-center gap-space-sm mb-2">
                <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center font-semibold">{step.num}</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary">Étape {step.num}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{step.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
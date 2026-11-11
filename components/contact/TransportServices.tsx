import { Zap, CarFront, Train, Luggage } from "lucide-react";

export default function TransportServices() {
  const services = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Parking & Bornes",
      desc: "Parc souterrain sécurisé réservé aux membres. 6 bornes de charge ultra-rapide 22kW offertes durant vos soins.",
      badge: "Badge fourni à l'entrée",
      color: "bg-primary-fixed/60 text-primary"
    },
    {
      icon: <CarFront className="w-6 h-6" />,
      title: "Service Voiturier",
      desc: "Prise en charge de votre véhicule dès le rond-point des Fontaines par nos maîtres voituriers en livrée de lin.",
      badge: "Disponible 7j/7",
      color: "bg-secondary-container/60 text-secondary"
    },
    {
      icon: <Train className="w-6 h-6" />,
      title: "Accès Métro & Gare",
      desc: "Gare TGV Aix à 12 minutes (liaison par chauffeur hybride Terreia sur demande préalable auprès de la conciergerie).",
      badge: "Navette privée disponible",
      color: "bg-tertiary-fixed/60 text-tertiary"
    },
    {
      icon: <Luggage className="w-6 h-6" />,
      title: "Consigne & Vestiaire",
      desc: "Casiers biométriques ventilés avec peignoir préchauffé en coton gaufré, chaussons botaniques et nébulisateur thermal.",
      badge: "Inclus avec chaque rituel",
      color: "bg-primary-container/40 text-on-primary-container"
    }
  ];

  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Votre Arrivée Sereine</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Transports, Stationnement & Services</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Chaque aspect logistique est pensé pour que votre déconnexion débute dès votre descente de véhicule.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm space-y-4 transition-transform hover:-translate-y-1 duration-300">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.color}`}>
                {s.icon}
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">{s.title}</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex-grow">{s.desc}</p>
              <span className="inline-flex font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider">{s.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
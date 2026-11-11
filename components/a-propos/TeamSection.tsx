import { BadgeCheck } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Vao Razanatsimba",
      role: "Spécialiste Rituels Énergétiques & Ravintsara",
      desc: "Originaire d’Antananarivo, Vao pratique le toucher profond avec une précision remarquable, dénouant les mémoires musculaires logées au creux du dos.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuiddGXAulgkQbyPlntSo_RavexTWXve8UQ72r1D-D_so2kzR2ZOAkYzExTZAFQcWqocFBfU7qwRb85THNZg5QUrrNnl6BTol8-heYDitBudvvav6XRytG2x5yPiBH60xa-OLkO6x8e1hVv-bt3IchnfjB0mBmMZraoCFY4XQmK9jfztKtQHcbiTVlnd25mlNp0mO6ZgUwbF_HkUX82dCHD24O8MLZwoBy69uvndbZ",
      badge: "Maître Praticienne",
      exp: "14 ans",
      quote: "« L'écoute du corps commence par le silence »"
    },
    {
      name: "Clémence de Vallon",
      role: "Sculptural Kobido & Soins Botaniques Terreia",
      desc: "Diplômée des plus prestigieuses académies de dermo-esthétique, Clémence allie stimulation lymphatique millimétrée et pureté des beurres de baobab pour défroisser les traits.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Lk1qb1NaaYBoLxybevbUWfsfNCerMBfj9g4R27MhZ9spptR7z8hpn3VUHpVg6VXNzO9Dc4ppOZ0bsmnbCrg6PebtYDfIDlvGR4-H5-G61d4veg9WdEIwM_bifWCzP0J7isIEMkcohgoGSScenyJgZvni25T7lb1kfgcQT69OROwPVuMHj3r8OTjndvQr3gx2WKQB4Ks_PjQ251eW7D1WT4P5OL2-5fMyyEQO-brG",
      badge: "Facialiste Experte",
      exp: "9 ans",
      quote: "« Le visage est le miroir de notre paix intérieure »"
    },
    {
      name: "Kanto Andriamainty",
      role: "Bains Sonores & Halothérapie Harmonique",
      desc: "Kanto accorde les bols tibétains et diapasons thérapeutiques avec la respiration des hôtes pour créer des ondes alpha propices à une régénération nerveuse immédiate.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9lmeL6gN2P3cuUHUlMbgs8V2pvuASD9Y6oMZumgldxVOires13XPNSX-HyKfo31xEqJnm7I52O1XBdP5y3IV8nJcwoSS5KlJnGaXqgRzJ2mT6rYg25cc0P-TSDl6T_cTNhpNZom_fcPhL-PheqQ3NS-UDDC1qwhwlguiKYKKzJYPT2uhjR-wlfChjwIHMKyTuyiZn7o3CA4cMHZ-5JiPHNufhRA6vqtvVmiih_mgv",
      badge: "Sonothérapeute",
      exp: "11 ans",
      quote: "« La vibration traverse ce que le geste n'atteint pas »"
    }
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl my-space-md">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">Mains Savantes • Savoir-Faire</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">Les Gardiennes de nos Rituels</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">
              Chaque praticienne de Terreia possède une double expertise : l'anatomie contemporaine et l'héritage des massages traditionnels de l'océan Indien.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-tertiary font-label-md text-label-md">
            <BadgeCheck className="w-4 h-4 text-primary" />
            <span>Formées selon le protocole Terreia Sanctuary</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative overflow-hidden h-[340px]">
                <img className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src={member.img} alt={member.name} />
                <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-widest">{member.badge}</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{member.name}</h3>
                  <p className="font-label-md text-label-md text-primary font-medium mt-1">{member.role}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-3 leading-relaxed">{member.desc}</p>
                </div>
                <div className="pt-5 mt-2 flex items-center justify-between font-label-sm text-label-sm text-tertiary">
                  <span>Expérience : {member.exp}</span>
                  <span className="italic text-on-surface-variant">{member.quote}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Quel équipement dois-je apporter pour mon soin ?",
    a: "Absolument aucun. Terreia vous munit d'un vestiaire privatif garni d'un peignoir en coton biologique lourd, de sandales de lin antidérapantes, d'un maillot hydrofuge si désiré et de serviettes fraîches à discrétion. Seul votre calme d'esprit est requis."
  },
  {
    q: "Combien de temps avant le soin dois-je arriver ?",
    a: "Nous préconisons d'arriver 30 minutes avant le début de votre protocole de soin. Ce délai vous permet de savourer l'infusion d'accueil, de remplir votre fiche sensorielle et de débuter l'immersion progressive dans notre lagune tiède."
  },
  {
    q: "Les bains thermaux sont-ils mixtes ?",
    a: "Le grand lagon calcaire et les saunas d'argile sont des espaces partagés mixtes, où le port du maillot de bain décent est obligatoire. Pour les hôtes désirant une intimité totale, nous proposons nos deux Suites Royales avec bains privatifs."
  },
  {
    q: "Comment s'effectue l'annulation ou le report ?",
    a: "Toute annulation ou modification sans frais est possible jusqu'à 24 heures avant l'horaire convenu. Pour les privatisations complètes du domaine, le préavis sans frais est de 7 jours ouvrés."
  },
  {
    q: "Peut-on privatiser le sanctuaire pour un événement ?",
    a: "Absolument. Nous accueillons les retraites de sérénité d'entreprise, les célébrations intimes et les tournages prestigieux. Notre conciergerie conçoit alors une carte gastronomique sur-mesure et un aménagement exclusif."
  },
  {
    q: "Les bons cadeaux sont-ils valables sur l'ensemble des soins ?",
    a: "Tous nos bons cadeaux Terreia ont une validité de 12 mois à compter de leur édition et sont convertibles en montants libres applicables sur nos massages, nos produits d'apothicaire ou notre salon Terreia Saveur."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-surface-container-low/70 py-16">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Réponses Pratiques</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Questions Courantes</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tout ce qu'il convient de savoir avant votre venue dans notre havre provençal.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-primary font-label-md text-label-md">
            <HelpCircle className="w-5 h-5" />
            <span>Besoin d'une réponse personnalisée ? Joignez nos concierges.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Colonne 1 */}
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm transition-all duration-300">
                  <button onClick={() => toggleAccordion(idx)} className="w-full flex items-center justify-between text-left gap-4">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{faq.q}</span>
                    <span className="text-primary shrink-0 transition-transform duration-300">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                    <p className="font-body-md text-body-md text-on-surface-variant pt-3 border-t border-outline-variant/30">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Colonne 2 */}
          <div className="space-y-4">
            {faqs.slice(3, 6).map((faq, idx) => {
              const realIdx = idx + 3;
              const isOpen = openIndex === realIdx;
              return (
                <div key={realIdx} className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm transition-all duration-300">
                  <button onClick={() => toggleAccordion(realIdx)} className="w-full flex items-center justify-between text-left gap-4">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{faq.q}</span>
                    <span className="text-primary shrink-0 transition-transform duration-300">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                    <p className="font-body-md text-body-md text-on-surface-variant pt-3 border-t border-outline-variant/30">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
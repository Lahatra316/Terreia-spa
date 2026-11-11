// components/formules/BespokeSection.tsx
"use client";

import { useActionState } from "react";
import { Sliders, Building2, Utensils, Flower2, Headphones, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitBespokeRequest, ActionState } from "@/app/actions"; // Import de l'action

export default function BespokeSection() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(submitBespokeRequest, null);

  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="bg-surface-container-lowest rounded-3xl p-6 lg:p-12 shadow-[0_20px_48px_-6px_rgba(78,86,75,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Texte gauche */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-primary">
                <Sliders className="w-4 h-4" />
                <span className="font-label-sm text-label-sm uppercase tracking-[0.2em]">Bespoke & Conciergerie</span>
              </div>
              
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Une demande sur-mesure<br/>
                <span className="italic font-normal text-secondary">ou une privatisation complète ?</span>
              </h2>
              
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Pour une célébration intime, une parenthèse pré-mariage, un séminaire de déconnexion ou une cure thermale individualisée, notre Concierge Bien-Être compose votre itinéraire entièrement sur-mesure.
              </p>
              
              <div className="space-y-3 pt-2 font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                  </span>
                  <span>Privatisation totale ou partielle des Bains & Suites Thermales</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Utensils className="w-3.5 h-3.5" />
                  </span>
                  <span>Menus végétariens ou crus sur-mesure élaborés par notre Chef</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Flower2 className="w-3.5 h-3.5" />
                  </span>
                  <span>Interventions exclusives : sonothérapeute, professeur de yoga</span>
                </div>
              </div>
              
              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                  <Headphones className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">Conciergerie Terreia</p>
                  <p className="font-body-sm text-body-sm text-tertiary">Réponse discrète sous 24h ouvrées</p>
                </div>
              </div>
            </div>

            {/* Formulaire droite connecté */}
            <div className="lg:col-span-6 bg-surface-container-low p-6 lg:p-8 rounded-2xl">
              <form action={formAction} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-1">Votre Prénom *</label>
                    <input required name="firstName" type="text" placeholder="Clara" className="w-full bg-surface-container-lowest px-4 py-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-1">Votre Nom *</label>
                    <input required name="lastName" type="text" placeholder="de Montalembert" className="w-full bg-surface-container-lowest px-4 py-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-1">Adresse Email *</label>
                    <input required name="email" type="email" placeholder="contact@exemple.fr" className="w-full bg-surface-container-lowest px-4 py-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-1">Téléphone</label>
                    <input name="phone" type="tel" placeholder="+33 6 00 00 00 00" className="w-full bg-surface-container-lowest px-4 py-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-1">Type d'Événement</label>
                    <select name="eventType" className="w-full bg-surface-container-lowest px-4 py-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
                      <option>Privatisation Complète (Soirée)</option>
                      <option>Cure Personnalisée Multi-Jours</option>
                      <option>Parenthèse Entre Amies / Duo</option>
                      <option>Événement d'Entreprise / Retraite</option>
                      <option>Autre demande sur-mesure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-1">Nombre d'Invités</label>
                    <input name="guestCount" type="number" min="1" max="40" defaultValue="2" className="w-full bg-surface-container-lowest px-4 py-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" />
                  </div>
                </div>
                
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-tertiary mb-1">Détails de vos souhaits</label>
                  <textarea name="message" rows={3} placeholder="Décrivez l'ambiance recherchée, vos rituels favoris ou toute intention particulière..." className="w-full bg-surface-container-lowest px-4 py-3 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary shadow-sm resize-none"></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                >
                  <span>{isPending ? "Envoi en cours..." : "Envoyer ma demande de privatisation"}</span>
                  <Send className="w-4 h-4" />
                </button>

                {state?.success && (
                  <div className="flex items-center gap-2 justify-center p-3 bg-primary-fixed text-on-primary-fixed rounded-lg text-center font-body-sm mt-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4" /> {state.message}
                  </div>
                )}
                {state?.error && (
                  <div className="flex items-center gap-2 justify-center p-3 bg-red-100 text-red-700 rounded-lg text-center font-body-sm mt-2 animate-in fade-in">
                    <AlertCircle className="w-4 h-4" /> {state.error}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
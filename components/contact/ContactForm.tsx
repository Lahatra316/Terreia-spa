// components/contact/ContactForm.tsx
"use client";

import { useActionState, useState } from "react";
import { Flower2, Key, Gift, Send, Lock, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { submitContactMessage, ActionState } from "@/app/actions";

export default function ContactForm() {
  const [motif, setMotif] = useState("information");
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(submitContactMessage, null);

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-8 lg:p-10 shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] relative overflow-hidden">
      {/* Décoration d'arrière-plan */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Écoute Personnalisée</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Écrire à la conciergerie</h2>
          </div>
          <Mail className="w-10 h-10 text-primary-container" />
        </div>

        <form className="space-y-4" action={formAction}>
          {/* Input caché pour le motif */}
          <input type="hidden" name="contactReason" value={motif} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block font-label-md text-label-md text-tertiary uppercase tracking-wider">Nom & Prénom *</label>
              <input required name="name" type="text" placeholder="Hélène de Valombre" className="w-full bg-surface-container-low text-on-surface font-body-md rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-tertiary/60" />
            </div>
            <div className="space-y-1">
              <label className="block font-label-md text-label-md text-tertiary uppercase tracking-wider">Adresse Courriel *</label>
              <input required name="email" type="email" placeholder="h.valombre@elegance.fr" className="w-full bg-surface-container-low text-on-surface font-body-md rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-tertiary/60" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block font-label-md text-label-md text-tertiary uppercase tracking-wider">Téléphone de Contact</label>
              <input name="phone" type="tel" placeholder="+33 6 12 34 56 78" className="w-full bg-surface-container-low text-on-surface font-body-md rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-tertiary/60" />
            </div>
            <div className="space-y-1">
              <label className="block font-label-md text-label-md text-tertiary uppercase tracking-wider">Créneau de Rappel</label>
              <select name="callbackTime" className="w-full bg-surface-container-low text-on-surface font-body-md rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                <option value="matin">Matinée (09h00 – 12h30)</option>
                <option value="apresmidi">Après-midi (14h00 – 18h00)</option>
                <option value="soiree">Soirée calme (18h00 – 20h30)</option>
                <option value="email">Par email uniquement</option>
              </select>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <span className="block font-label-md text-label-md text-tertiary uppercase tracking-wider">Nature de votre requête</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button type="button" onClick={() => setMotif("Information Soins")} className={`text-left p-3.5 rounded-xl transition-all flex items-center gap-2.5 ${motif === "Information Soins" ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`}>
                <Flower2 className="w-4 h-4" />
                <span className="font-label-md text-label-md font-medium">Information Soins</span>
              </button>
              <button type="button" onClick={() => setMotif("Privatisation")} className={`text-left p-3.5 rounded-xl transition-all flex items-center gap-2.5 ${motif === "Privatisation" ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`}>
                <Key className="w-4 h-4" />
                <span className="font-label-md text-label-md font-medium">Privatisation</span>
              </button>
              <button type="button" onClick={() => setMotif("Bon Cadeau")} className={`text-left p-3.5 rounded-xl transition-all flex items-center gap-2.5 ${motif === "Bon Cadeau" ? "bg-primary text-on-primary" : "bg-surface-container-low text-on-surface hover:bg-surface-container"}`}>
                <Gift className="w-4 h-4" />
                <span className="font-label-md text-label-md font-medium">Bon Cadeau</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block font-label-md text-label-md text-tertiary uppercase tracking-wider">Message ou souhaits spécifiques</label>
            <textarea name="message" rows={4} placeholder="Précisez ici vos sensibilités cutanées, le nombre de convives, une occasion romantique particulière..." className="w-full bg-surface-container-low text-on-surface font-body-md rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-tertiary/60 resize-none"></textarea>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <input type="checkbox" id="privacy" defaultChecked required className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer" />
            <label htmlFor="privacy" className="font-body-sm text-body-sm text-tertiary cursor-pointer">
              J'accepte que Terreia conserve mes coordonnées pour organiser mon accueil thermal. Données strictement confidentielles.
            </label>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button 
              type="submit" 
              disabled={isPending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-widest px-8 py-4 rounded-full shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all disabled:opacity-50"
            >
              <span>{isPending ? "Envoi..." : "Transmettre mon message"}</span>
              <Send className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-tertiary">
              <Lock className="w-4 h-4 text-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Chiffrement 256-bit</span>
            </div>
          </div>

          {/* Messages d'état */}
          {state?.success && (
            <div className="p-4 rounded-xl bg-primary-fixed text-on-primary-fixed font-body-sm flex items-center gap-3 mt-4 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span>{state.message}</span>
            </div>
          )}
          {state?.error && (
            <div className="p-4 rounded-xl bg-red-100 text-red-700 font-body-sm flex items-center gap-3 mt-4 animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{state.error}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
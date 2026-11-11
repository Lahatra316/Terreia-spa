// components/home/NewsletterCTA.tsx
"use client";
import { useActionState } from "react"; // React 19 / Next.js 15+
import { Sparkles, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { submitForm } from "@/app/actions";

export default function NewsletterCTA() {
  // useActionState gère l'état (chargement, succès, erreur)
  const [state, formAction, isPending] = useActionState(submitForm, null);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin pt-space-md pb-space-lg">
      <div className="relative rounded-3xl bg-surface-container-high overflow-hidden p-10 lg:p-20 text-center flex flex-col items-center">
        {/* Décorations */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-primary-fixed-dim/30 blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-secondary-fixed-dim/30 blur-2xl pointer-events-none"></div>
        
        <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary mb-6 shadow-sm z-10">
          <Sparkles className="w-6 h-6" />
        </div>
        <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary mb-3 z-10">Une invitation au lâcher-prise</span>
        <h2 className="font-display-lg text-headline-lg lg:text-[44px] leading-tight text-on-surface max-w-2xl mb-6 z-10">
          Votre parenthèse commence ici
        </h2>
        <p className="font-body-lg text-body-lg text-tertiary max-w-xl font-light mb-10 leading-relaxed z-10">
          Rejoignez notre cercle d'initiés pour recevoir nos récits saisonniers, nos créations botaniques éphémères et nos créneaux privilégiés.
        </p>
        
        {/* Formulaire connecté à l'action */}
        <form action={formAction} className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 mb-6 z-10">
          <input type="hidden" name="type" value="Newsletter" />
          <input type="hidden" name="name" value="Abonné Newsletter" />
          
          <div className="relative w-full">
            <input 
              required 
              type="email" 
              name="email" 
              placeholder="Votre adresse email personnelle" 
              className="w-full px-6 py-4 rounded-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-tertiary/70 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" 
            />
          </div>
          <button 
            type="submit" 
            disabled={isPending}
            className="w-full sm:w-auto shrink-0 px-8 py-4 rounded-full bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Envoi..." : "S'inscrire"}
          </button>
        </form>

        {/* Messages de succès ou d'erreur */}
        {state?.success && (
          <div className="flex items-center gap-2 text-primary font-body-sm font-medium mb-4 animate-in fade-in z-10">
            <CheckCircle2 className="w-4 h-4" />
            <span>{state.message}</span>
          </div>
        )}
        {state?.error && (
          <div className="flex items-center gap-2 text-red-600 font-body-sm font-medium mb-4 animate-in fade-in z-10">
            <AlertCircle className="w-4 h-4" />
            <span>{state.error}</span>
          </div>
        )}

        <div className="flex items-center gap-6 text-tertiary font-label-sm text-label-sm tracking-wider uppercase z-10">
          <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> Confidentialité Absolue</span>
          <span className="w-1 h-1 rounded-full bg-tertiary/40"></span>
          <span>Un courriel par solstice</span>
        </div>
      </div>
    </section>
  );
}
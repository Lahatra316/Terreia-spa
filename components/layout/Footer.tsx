// components/layout/Footer.tsx
"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Sparkles, Clock, MapPin, Phone, Camera, TreePine, Mail, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { submitForm, ActionState } from "@/app/actions";

export default function Footer() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(submitForm, null);

  return (
    <footer className="w-full bg-surface-container-low mt-space-xl pt-space-xl pb-space-lg">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-space-xl">
          
          {/* Brand & Description */}
          <div className="space-y-space-md">
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface">Terreia</span>
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Spa Sanctuaire</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Un havre d'apaisement absolu où la quintessence botanique rencontre l'art du soin holistique. Une parenthèse sensorielle intemporelle au cœur de Madagascar.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary">Art de vivre & Sérénité</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Nos Espaces & Soins</h3>
            <ul className="space-y-space-sm">
              <li>
                <Link href="/soins" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Bains Thermiques & Sauna d'Argile
                </Link>
              </li>
              <li>
                <Link href="/soins" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Rituels Botaniques & Massages
                </Link>
              </li>
              <li>
                <Link href="/soins" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Bain Sonore & Halothérapie
                </Link>
              </li>
              <li>
                <Link href="/formules" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Suites Privatives Duo
                </Link>
              </li>
              <li>
                <Link href="/terreia-saveur" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">
                  Herboristerie & Élixirs Terreia
                </Link>
              </li>
            </ul>
          </div>

          {/* Practical Info */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Informations Pratiques</h3>
            <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-space-xs">
                <Clock className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">Ouvert 7 jours sur 7</p>
                  <p>Lundi – Dimanche : 09h00 – 21h00</p>
                </div>
              </div>
              <div className="flex items-start gap-space-xs">
                <MapPin className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-semibold">Sanctuaire d'Ivato</p>
                  <p>Ivato, Antananarivo 105, Madagascar</p>
                </div>
              </div>
              <div className="flex items-center gap-space-xs pt-1">
                <Phone className="w-[18px] h-[18px] text-primary shrink-0" />
                <a href="tel:+33142685000" className="hover:text-primary transition-colors font-medium">
                  +261 38 90 584 49
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter & Socials */}
          <div className="space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Newsletter Bien-Être</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Recevez nos rituels de saison, nos invitations exclusives et la philosophie Terreia.
            </p>
            
            <form className="space-y-space-xs" action={formAction}>
              <input type="hidden" name="type" value="Newsletter (Footer)" />
              <input type="hidden" name="name" value="Abonné Footer" />
              
              <div className="bg-surface-container-lowest rounded-full p-1 pl-4 flex items-center justify-between shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)]">
                <input 
                  name="email"
                  className="bg-transparent w-full font-body-sm text-body-sm text-on-surface placeholder:text-tertiary focus:outline-none pr-2" 
                  placeholder="Votre adresse email..." 
                  type="email" 
                  required
                />
                <button 
                  disabled={isPending}
                  className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors disabled:opacity-50" 
                  type="submit"
                  aria-label="S'inscrire à la newsletter"
                >
                  {isPending ? (
                    <span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <ArrowRight className="w-[18px] h-[18px]" />
                  )}
                </button>
              </div>
              <span className="font-label-sm text-label-sm text-tertiary block px-2 pt-1">
                Confidentialité préservée. Écrits mensuels mesurés.
              </span>
            </form>

            {state?.success && (
              <div className="flex items-start gap-2 text-primary font-body-sm pt-1 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{state.message}</span>
              </div>
            )}
            {state?.error && (
              <div className="flex items-start gap-2 text-red-600 font-body-sm pt-1 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{state.error}</span>
              </div>
            )}
            
            <div className="flex items-center gap-space-md pt-space-xs">
              <a href="#" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-primary hover:bg-primary transition-colors" aria-label="Instagram">
                <Camera className="w-[18px] h-[18px]" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-primary hover:bg-primary transition-colors" aria-label="Nature">
                <TreePine className="w-[18px] h-[18px]" />
              </a>
              <a href="mailto:contact@terreia-spa.mg" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-primary hover:bg-primary transition-colors" aria-label="Email">
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Copyright & Legal) */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-outline-variant/30">
          <div className="font-label-md text-label-md text-tertiary text-center md:text-left">
            © 2024 Terreia Spa Sanctuaire. Tous droits réservés. L'art du répit intérieur.
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-space-lg gap-y-2">
            <Link href="/mentions-legales" className="font-label-md text-label-md text-tertiary hover:text-on-surface transition-colors">
              Mentions Légales
            </Link>
            <Link href="/politique-confidentialite" className="font-label-md text-label-md text-tertiary hover:text-on-surface transition-colors">
              Politique de Confidentialité
            </Link>
            <Link href="/conditions-generales" className="font-label-md text-label-md text-tertiary hover:text-on-surface transition-colors">
              Conditions Générales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
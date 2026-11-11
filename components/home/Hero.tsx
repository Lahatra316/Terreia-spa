"use client";
import Link from "next/link";
import { Leaf, ShieldCheck, Trees, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // On garde le -mt-28 pour que l'image passe sous le header, 
    // et on ajoute un pt-40 (au lieu de pt-28) pour faire descendre le contenu
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden -mt-28 pt-40">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACfRQ7zoji0bl0jRSxE4lUF85JmWJw0LmA4DPCBe4q1Z7rry-A6yv6Q_SsRaonrWW06ysHvukP3M405rpF44W4jz0NFSChNaR5dR6sX_sYUVi981sf8jvig8Y19-EL0kry_HsYUBAKtgJcjkB4xmbILT4J8R2Eg__5BLCrqa6in7htZqqrA15JJSLqHgHq1R7cUATNrO2q13tOavHsT0AejiuCNSo9OeZyXoiScm-O')" }}
      ></div>
      
      {/* Dégradés de superposition pour la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

      {/* Contenu Principal - Split Layout */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-margin py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLONNE GAUCHE : Logo & Message */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            {/* Conteneur du logo avec fond vert foncé pour le contraste */}
            <div className="bg-primary/95 backdrop-blur-md p-8 lg:p-10 rounded-[2rem] shadow-2xl border border-white/10 mb-8 w-full max-w-sm flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl pointer-events-none"></div>
              
              {/* Filtre CSS pour rendre le logo blanc et ressortir sur le fond vert */}
              <img 
                src="/logo.png" 
                alt="Terreia Spa" 
                className="w-48 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                style={{ filter: "brightness(0) invert(1)" }} 
              />
              
              <div className="mt-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary-fixed" />
                <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary-fixed">Depuis 2018</span>
              </div>
            </div>

            {/* Badge de localisation */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface/80 backdrop-blur-md shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-md text-label-md uppercase tracking-[0.22em] text-secondary text-center lg:text-left">Ivato, Antananarivo</span>
            </div>

            {/* Titre */}
            <h1 className="font-display-lg text-display-lg text-on-surface leading-[1.1] tracking-tight text-center lg:text-left">
              L'Art de la Quiétude & <br/>
              <span className="italic font-display-lg font-light text-primary">Reconnexion Botanique</span>
            </h1>
          </motion.div>

          {/* COLONNE DROITE : Détails, Boutons & Confiance */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center lg:pl-10"
          >
            <div className="bg-surface/60 backdrop-blur-lg p-8 lg:p-10 rounded-3xl border border-white/50 shadow-xl">
              <p className="font-body-lg text-body-lg text-on-surface-variant font-light mb-8 leading-relaxed">
                Une oasis sensorielle où s'unissent l'eau thermale millénaire, les plantes rares de Madagascar et l'harmonie des gestes holistiques ancestraux. Franchissez nos portes pour une immersion hors du temps.
              </p>

              {/* Bouton d'action (Visite 360 supprimée) */}
              <div className="flex items-center mb-10">
                <Link href="/soins" className="w-full sm:w-auto font-label-md text-label-md uppercase tracking-[0.14em] px-8 py-4 rounded-full bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group">
                  <span>Découvrir nos soins</span>
                  <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Badges de confiance */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-secondary/20">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <Leaf className="w-6 h-6 text-primary" />
                  <div>
                    <span className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">100% Bio</span>
                    <span className="block font-body-sm text-body-sm text-tertiary">Extraits de Madagascar</span>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <ShieldCheck className="w-6 h-6 text-secondary" />
                  <div>
                    <span className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">Praticiennes Maîtres</span>
                    <span className="block font-body-sm text-body-sm text-tertiary">Certifiées Ayurvéda & Thaï</span>
                  </div>
                </div>
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
                  <Trees className="w-6 h-6 text-primary-container" />
                  <div>
                    <span className="block font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">Éco-Sanctuaire</span>
                    <span className="block font-body-sm text-body-sm text-tertiary">Bains passifs & bois noble</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
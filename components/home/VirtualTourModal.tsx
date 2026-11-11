// components/home/VirtualTourModal.tsx
"use client";

import { X, Map, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VirtualTourModal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0a160c]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl bg-[#fef8f4] rounded-3xl shadow-[0_30px_80px_-15px_rgba(10,22,12,0.35)] overflow-hidden border border-white/60 flex flex-col md:flex-row max-h-[92vh]"
          >
            
            {/* ======================================================== */}
            {/* COLONNE GAUCHE (Éditorial & Ambiance) */}
            {/* ======================================================== */}
            <div className="md:w-5/12 bg-[#1e2b20] text-[#fef8f4] relative p-8 md:p-10 flex flex-col justify-between overflow-hidden">
              {/* Image de fond et lumières */}
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#865138]/30 blur-3xl pointer-events-none"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity pointer-events-none" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLumPPJqPwBTPL9S2G4KdlwnKblVz6naOjchU_UxxaueJXrM2fo1YT5xtZr2QtIzzitZV2f2HH6GcdAy2w64iNXy4gQODIDLngdzP6-ZeyNslH2ud2zDs824pmJvFFNe82x1i2Pw3Oxcv9qwgIQchPPXJirh5lhUqFnE1K9IWAUr-elb0d578ECefKT3eZHOAoyfGOrfYMOcVq1HXflFMG2kWeGAHXhqoEHopNERGC')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b20] via-[#1e2b20]/80 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fcb797]"></span>
                  <span className="text-[10px] uppercase font-medium tracking-[0.24em] text-[#fcb797]">Visite Immersive 360°</span>
                </div>

                <div>
                  <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-normal leading-tight">
                    Explorez le Sanctuaire Terreia
                  </h2>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="text-xs uppercase tracking-wider text-[#ece7e3]/80 font-light">Plongez au cœur de nos espaces</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-[#ece7e3]/90 leading-relaxed font-light">
                    Parcourez librement les allées d'eau, nos cabines privatives duo et l'espace de méditation au sel de rose. Une immersion sensorielle à 360° pour préparer votre venue.
                  </p>
                </div>
              </div>

              {/* Footer Gauche */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-[#ece7e3]/70">
                <div className="flex items-center gap-1.5">
                  <Play className="w-4 h-4 text-[#fcb797]" />
                  <span>Expérience interactive</span>
                </div>
                <span className="font-['EB_Garamond',serif] italic text-[#fcb797]">Terreia Sanctuaire</span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLONNE DROITE (Action) */}
            {/* ======================================================== */}
            <div className="md:w-7/12 p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-[#fef8f4]">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#c4c8c1]/30">
                <div>
                  <h3 className="font-['EB_Garamond',serif] text-2xl text-[#0a160c] font-normal">Prêt pour l'immersion ?</h3>
                  <p className="text-xs text-[#434843] font-light mt-0.5">Cliquez sur l'aperçu pour lancer la visite guidée.</p>
                </div>
                <motion.button 
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-[#f2ede9] hover:bg-[#e6e2de] text-[#0a160c] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="py-6 space-y-6 flex-1 flex flex-col justify-center">
                {/* Grande zone cliquable pour lancer la visite */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-inner border border-[#c4c8c1]/40"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLumPPJqPwBTPL9S2G4KdlwnKblVz6naOjchU_UxxaueJXrM2fo1YT5xtZr2QtIzzitZV2f2HH6GcdAy2w64iNXy4gQODIDLngdzP6-ZeyNslH2ud2zDs824pmJvFFNe82x1i2Pw3Oxcv9qwgIQchPPXJirh5lhUqFnE1K9IWAUr-elb0d578ECefKT3eZHOAoyfGOrfYMOcVq1HXflFMG2kWeGAHXhqoEHopNERGC')" }}
                  ></div>
                  <div className="absolute inset-0 bg-[#0a160c]/40 group-hover:bg-[#0a160c]/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 text-[#0a160c] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Map className="w-8 h-8" />
                    </div>
                  </div>
                </motion.div>

                <div className="text-center space-y-2">
                  <p className="text-xs text-[#434843] font-light leading-relaxed">
                    Vous serez redirigé vers notre plateforme de visite virtuelle. Notre conciergerie reste à votre écoute pour toute demande spécifique.
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Link 
                  href="/reservation"
                  onClick={onClose}
                  className="w-full group py-3.5 px-6 rounded-full bg-[#1e2b20] hover:bg-[#0a160c] text-white font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3"
                >
                  <span>Réserver un créneau</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <div className="flex items-center justify-center gap-2 text-[11px] text-[#434843]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>Places limitées par créneau</span>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
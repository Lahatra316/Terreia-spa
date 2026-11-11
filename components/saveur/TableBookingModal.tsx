// components/saveur/TableBookingModal.tsx
"use client";

import { useActionState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Calendar, Clock, Users, ArrowRight, User, Mail, Coffee, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitTableReservation, ActionState } from "@/app/actions";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TableBookingModal({ isOpen, onClose }: ModalProps) {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(submitTableReservation, null);

  useEffect(() => {
    if (state?.success) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state, onClose]);

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
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB027UP8wFdSYIM5E292LyZQtBOWkcoZqrRiAy1vgotH9GXlYaXth86vrzw3Jg1_Un6CVIoLXVrgTXkYIa47k5mHVWB78Sg8mxdigj_92OzysXKbC3p_97CLo_-ucFLHRPpFtmLDd7rQeFP06log-5wmhJNDyB43W-V5RIVwzkkewQh5C9Mh4gdlEA4VMHpzidw1AsyqcCmJc0RZwa2Z09pxAxhdUgl67w3oiOan24t')" }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b20] via-[#1e2b20]/80 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fcb797]"></span>
                  <span className="text-[10px] uppercase font-medium tracking-[0.24em] text-[#fcb797]">Terreia Saveur</span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c4c8c1]/70 block mb-1">L'Apothicairerie Gourmande</span>
                  <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-normal leading-tight">
                    Réserver une Table
                  </h2>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="text-xs uppercase tracking-wider text-[#ece7e3]/80 font-light">Prolongez votre expérience</span>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-[#ece7e3]/90 leading-relaxed font-light">
                    Notre table célèbre une nutrition cellulaire vivante. Chaque infusion, bouillon et élixir est harmonisé selon le rythme circadien pour prolonger la quintessence de vos soins.
                  </p>
                  
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-[11px] text-[#ece7e3]/80">
                      <Leaf className="w-4 h-4 text-[#fcb797]" />
                      <span>100% Biologique & Biodynamique</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#ece7e3]/80">
                      <Coffee className="w-4 h-4 text-[#fcb797]" />
                      <span>Extraction Lente & Cuisson Douce</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Gauche */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-[#ece7e3]/70">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#fcb797]" />
                  <span>Service continu de 10h30 à 19h30</span>
                </div>
                <span className="font-['EB_Garamond',serif] italic text-[#fcb797]">Terreia Sanctuaire</span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* COLONNE DROITE (Formulaire) */}
            {/* ======================================================== */}
            <div className="md:w-7/12 p-6 md:p-10 flex flex-col justify-between overflow-y-auto bg-[#fef8f4]">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#c4c8c1]/30">
                <div>
                  <h3 className="font-['EB_Garamond',serif] text-2xl text-[#0a160c] font-normal">Votre table vous attend</h3>
                  <p className="text-xs text-[#434843] font-light mt-0.5">Veuillez renseigner vos coordonnées pour réserver.</p>
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

              {/* ETAT DE SUCCÈS */}
              <AnimatePresence mode="wait">
                {state?.success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-4 flex flex-col items-center justify-center h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#e6e2de] mx-auto flex items-center justify-center text-[#865138]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-['EB_Garamond',serif] text-2xl text-[#0a160c] font-normal">Votre table est réservée</h4>
                    <p className="text-xs text-[#434843] max-w-sm mx-auto font-light leading-relaxed">
                      Notre équipe a bien reçu votre demande. Un email de confirmation vous a été envoyé. Nous avons hâte de vous accueillir au salon de thé.
                    </p>
                    <button 
                      onClick={onClose}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#f2ede9] text-[#0a160c] text-xs uppercase tracking-widest hover:bg-[#e6e2de] transition-colors font-medium cursor-pointer"
                    >
                      Retour à la carte
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ staggerChildren: 0.05 }}
                    action={formAction} 
                    className="space-y-5 pt-4"
                  >
                    {/* CHAMPS CACHÉS POUR LE BACKEND */}
                    <input type="hidden" name="type" value="Réservation de Table (Terreia Saveur)" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Nom & Prénom <span className="text-[#865138]">*</span></label>
                        <div className="relative">
                          <input required name="name" type="text" placeholder="Éléonore de Valmont" className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all placeholder:text-[#747872]/50" />
                          <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747872]/40" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Adresse électronique <span className="text-[#865138]">*</span></label>
                        <div className="relative">
                          <input required name="email" type="email" placeholder="eleonore@demeure.fr" className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all placeholder:text-[#747872]/50" />
                          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747872]/40" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Date souhaitée <span className="text-[#865138]">*</span></label>
                        <div className="relative">
                          <input required name="date" type="date" className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Heure d'arrivée <span className="text-[#865138]">*</span></label>
                        <div className="relative">
                          <input required name="time" type="time" className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Nombre de convives <span className="text-[#865138]">*</span></label>
                        <div className="relative">
                          <input required name="guests" type="number" min="1" max="20" defaultValue="2" className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all" />
                          <Users className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747872]/40" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Régimes / Allergies</label>
                        <input name="message" type="text" placeholder="Vegan, sans gluten..." className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all placeholder:text-[#747872]/50" />
                      </div>
                    </div>

                    <div className="pt-2 space-y-3">
                      <button 
                        type="submit" 
                        disabled={isPending}
                        className="w-full group py-3.5 px-6 rounded-full bg-[#1e2b20] hover:bg-[#0a160c] text-white font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                      >
                        <Calendar className="w-[18px] h-[18px] text-[#fcb797] transition-transform duration-300 group-hover:scale-110" />
                        <span>{isPending ? "Envoi en cours..." : "Confirmer ma réservation"}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      
                      {state?.error && (
                        <div className="flex items-center gap-2 text-red-600 font-body-sm font-medium pt-2 animate-in fade-in justify-center text-center">
                          <AlertCircle className="w-4 h-4 shrink-0" /> <span>{state.error}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-center gap-2 text-[11px] text-[#434843]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        <span>Service continu • Sans frais d'annulation sous 24h</span>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
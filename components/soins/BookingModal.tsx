// components/soins/BookingModal.tsx
"use client";

import { useActionState, useEffect } from "react";
import { X, CheckCircle2, AlertCircle, Calendar, Sparkles, ArrowRight, User, Mail, Phone, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitReservation, ActionState } from "@/app/actions";
import { Treatment } from "./data";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatment: Treatment;
}

export default function BookingModal({ isOpen, onClose, treatment }: ModalProps) {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(submitReservation, null);

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
            {/* COLONNE GAUCHE (Éditorial & Dynamique) */}
            {/* ======================================================== */}
            <div className="md:w-5/12 bg-[#1e2b20] text-[#fef8f4] relative p-8 md:p-10 flex flex-col justify-between overflow-hidden">
              {/* Image de fond et lumières */}
              <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#865138]/30 blur-3xl pointer-events-none"></div>
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none" 
                style={{ backgroundImage: `url('${treatment.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2b20] via-[#1e2b20]/80 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fcb797]"></span>
                  <span className="text-[10px] uppercase font-medium tracking-[0.24em] text-[#fcb797]">Réservation de Soin</span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#c4c8c1]/70 block mb-1">{treatment.categoryName}</span>
                  <h2 className="font-['EB_Garamond',serif] text-3xl md:text-4xl text-white font-normal leading-tight">{treatment.title}</h2>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="font-['EB_Garamond',serif] text-2xl text-[#fcb797] font-medium">{treatment.price}</span>
                    <span className="text-xs uppercase tracking-wider text-[#ece7e3]/80 font-light">• {treatment.time}</span>
                  </div>
                </div>

                {/* Description et Tags */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-[#ece7e3]/90 leading-relaxed font-light">
                    {treatment.description}
                  </p>
                  
                  {treatment.tags && treatment.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {treatment.tags.map((tag, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#fcb797] bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Gauche */}
              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-[#ece7e3]/70">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#fcb797]" />
                  <span>Annulation sans frais jusqu'à 24h</span>
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
                  <h3 className="font-['EB_Garamond',serif] text-2xl text-[#0a160c] font-normal">Planifier votre soin</h3>
                  <p className="text-xs text-[#434843] font-light mt-0.5">Veuillez renseigner vos coordonnées pour accorder votre venue.</p>
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
                    <h4 className="font-['EB_Garamond',serif] text-2xl text-[#0a160c] font-normal">Votre demande a été confiée</h4>
                    <p className="text-xs text-[#434843] max-w-sm mx-auto font-light leading-relaxed">
                      Notre concierge du Domaine a réservé votre alvéole pour le <strong className="text-[#0a160c] font-medium">{treatment.title}</strong>. Un email de confirmation vous a été envoyé.
                    </p>
                    <button 
                      onClick={onClose}
                      className="mt-4 px-6 py-2.5 rounded-full bg-[#f2ede9] text-[#0a160c] text-xs uppercase tracking-widest hover:bg-[#e6e2de] transition-colors font-medium cursor-pointer"
                    >
                      Retourner aux soins
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
                    <input type="hidden" name="treatmentName" value={treatment.title} />
                    <input type="hidden" name="treatmentPrice" value={treatment.price} />
                    <input type="hidden" name="itemType" value="Soin" />

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
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Téléphone mobile</label>
                        <div className="relative">
                          <input name="phone" type="tel" placeholder="+33 6 12 34 56 78" className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all placeholder:text-[#747872]/50" />
                          <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#747872]/40" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] block">Date souhaitée <span className="text-[#865138]">*</span></label>
                        <div className="relative">
                          <input required name="preferredDate" type="date" className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all" />
                        </div>
                      </div>
                    </div>

                    {/* SÉLECTEUR D'HORAIRE */}
                    <div className="space-y-2 pt-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843]">Créneau horaire</span>
                        <span className="text-[11px] text-[#865138] font-medium">Espace thermes</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-xs">
                        {["09:30", "11:00", "14:30", "17:00"].map((time) => (
                          <label key={time} className="cursor-pointer">
                            <input type="radio" name="preferredTime" value={time} defaultChecked={time === "11:00"} className="peer sr-only"/>
                            <div className="py-2 text-center rounded-xl bg-[#f8f3ef] border border-[#c4c8c1]/40 text-[#1d1b19] peer-checked:bg-[#1e2b20] peer-checked:text-white peer-checked:border-[#1e2b20] hover:bg-[#e6e2de] transition-all">
                              {time.replace(':', 'h')}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#434843] flex justify-between">
                        <span>Sensibilités particulières</span>
                        <span className="text-[#747872]/70 font-light lowercase">Facultatif</span>
                      </label>
                      <input name="message" type="text" placeholder="Allergies botaniques, pression douce..." className="w-full bg-[#f8f3ef]/70 hover:bg-[#f8f3ef] focus:bg-white text-[#1d1b19] text-sm rounded-xl px-4 py-2.5 outline-none border border-[#c4c8c1]/40 focus:border-[#865138] transition-all placeholder:text-[#747872]/50"/>
                    </div>

                    <div className="pt-2 space-y-3">
                      <button 
                        type="submit" 
                        disabled={isPending}
                        className="w-full group py-3.5 px-6 rounded-full bg-[#1e2b20] hover:bg-[#0a160c] text-white font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                      >
                        <Calendar className="w-[18px] h-[18px] text-[#fcb797] transition-transform duration-300 group-hover:scale-110" />
                        <span>{isPending ? "Envoi en cours..." : "Confirmer la Demande de Soin"}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      
                      {state?.error && (
                        <div className="flex items-center gap-2 text-red-600 font-body-sm font-medium pt-2 animate-in fade-in justify-center text-center">
                          <AlertCircle className="w-4 h-4 shrink-0" /> <span>{state.error}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-center gap-2 text-[11px] text-[#434843]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                        <span>Paiement sécurisé sur place à l'accueil</span>
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
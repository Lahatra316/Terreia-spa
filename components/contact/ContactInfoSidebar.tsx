import { MapPin, Phone, Diamond, Clock, Moon, ExternalLink } from "lucide-react";

export default function ContactInfoSidebar() {
  return (
    <div className="lg:col-span-5 space-y-4">
      
      {/* Adresse & Carte */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary">Adresse du Sanctuaire</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-1">Le Domaine des Bains Secrets</h3>
          </div>
          <MapPin className="w-6 h-6 text-secondary" />
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Niché au cœur de la verdure d'Ivato, à l'abri de l'effervescence de la capitale.
        </p>
        
        <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-label-md text-label-md text-on-surface font-semibold">Ivato, Antananarivo</p>
            <p className="font-body-sm text-body-sm text-tertiary">Madagascar • Coordonnées : -18.810477, 47.463504</p>
          </div>
        </div>

        {/* Carte Interactive Google Maps */}
        <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-sm group border border-outline-variant/30">
          <iframe 
            src="https://maps.google.com/maps?q=-18.810477,47.463504&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-surface/90 backdrop-blur-md shadow-sm border border-outline-variant/20 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm font-semibold text-on-surface uppercase tracking-wider">Sanctuaire Ouvert</span>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=-18.810477,47.463504" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pointer-events-auto font-label-sm text-label-sm uppercase tracking-wider text-primary hover:text-primary-container flex items-center gap-1 font-semibold transition-colors"
            >
              Itinéraire <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Contacts directs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] hover:bg-surface-container-low transition-colors group">
          <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-3 group-hover:scale-110 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Hotline Soins</span>
          <p className="font-headline-sm text-headline-sm text-on-surface mt-1">+261 38 90 584 49</p>
          <p className="font-body-sm text-body-sm text-tertiary mt-0.5">Ligne directe des hôtes</p>
        </div>
        
        <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] hover:bg-surface-container-low transition-colors group">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container mb-3 group-hover:scale-110 transition-transform">
            <Diamond className="w-5 h-5" />
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Conciergerie VIP</span>
          <p className="font-body-md text-body-md font-semibold text-on-surface mt-1 truncate">sarobidyravakiniaina6@gmail.com</p>
          <p className="font-body-sm text-body-sm text-tertiary mt-0.5">Suites & Cures exclusives</p>
        </div>
      </div>

      {/* Horaires */}
      <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Clock className="w-5 h-5 text-primary" />
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Horaires des Bains</h4>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-primary-fixed/50 text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold uppercase">Septennal</span>
        </div>
        
        <div className="space-y-2 pt-1 font-body-sm text-body-sm">
          <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-lg">
            <span className="text-on-surface font-medium">Lundi – Mercredi</span>
            <span className="text-tertiary">09h00 – 21h00</span>
          </div>
          <div className="flex items-center justify-between py-2 bg-secondary-container/40 px-3 rounded-lg">
            <div className="flex items-center gap-1.5">
              <Moon className="w-4 h-4 text-secondary" />
              <span className="text-on-surface font-semibold">Jeudi Nocturne</span>
            </div>
            <span className="text-on-secondary-container font-semibold">09h00 – 23h00</span>
          </div>
          <div className="flex items-center justify-between py-2 bg-surface-container-low px-3 rounded-lg">
            <span className="text-on-surface font-medium">Vendredi – Dimanche</span>
            <span className="text-tertiary">08h30 – 21h30</span>
          </div>
        </div>
        <p className="font-label-sm text-label-sm text-tertiary italic pt-1">
          *Dernière admission 1h30 avant la fermeture.
        </p>
      </div>
    </div>
  );
}
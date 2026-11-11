import Link from "next/link";
import { Clock, CheckCircle2, Heart } from "lucide-react";

export default function FeaturedPacks() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl my-space-md">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary block mb-3">Immersions Signature</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Nos Formules d'Exception</h2>
          <p className="font-body-md text-body-md text-tertiary font-light leading-relaxed">
            Pensées comme des parcours complets de régénération cellulaire, associant le pouvoir de l'hydrothérapie aux bienfaits de la phytothérapie pure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="rounded-2xl p-8 lg:p-12 bg-surface-container-low shadow-[0_12px_36px_-8px_rgba(78,86,75,0.06)] hover:shadow-[0_20px_48px_-6px_rgba(78,86,75,0.1)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-surface-container-highest font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Individuel</span>
                <div className="flex items-center gap-1.5 text-secondary font-label-md text-label-md">
                  <Clock className="w-[18px] h-[18px]" />
                  <span>120 minutes</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Rituel Sérénité Botanique</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Une déconnexion totale pensée pour apaiser le système nerveux et nourrir les peaux fatiguées par le stress urbain.
                </p>
              </div>
              <div className="flex items-baseline gap-2 py-4 border-y border-outline-variant/30">
                <span className="font-display-lg text-[42px] leading-tight text-primary font-headline-md">140€</span>
                <span className="font-body-sm text-body-sm text-tertiary">/ personne • Tout inclus</span>
              </div>
              <div className="space-y-3 pt-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface block font-semibold">Le parcours comprend :</span>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Accès libre de 45 min au bassin thermal, sauna cèdre et hammam</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Gommage velouté aux coques de cacao et sels marins non raffinés (25 min)</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Massage personnalisé aux huiles précieuses bio de Madagascar (50 min)</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Rituel dégustation : infusion sur mesure au salon de repos végétalisé</span></div>
              </div>
            </div>
            <div className="pt-10">
              {/* CORRIGÉ : /reservation -> /formules */}
              <Link href="/formules" className="w-full inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-[0.14em] py-4 rounded-full bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
                Réserver le Rituel Sérénité
              </Link>
            </div>
          </div>

          <div className="rounded-2xl p-8 lg:p-12 bg-primary/10 shadow-[0_16px_40px_-8px_rgba(70,102,72,0.12)] hover:shadow-[0_24px_54px_-6px_rgba(70,102,72,0.16)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 left-0 h-1.5 bg-gradient-to-r from-secondary to-primary"></div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">Expérience En Privatif</span>
                <div className="flex items-center gap-1.5 text-secondary font-label-md text-label-md font-medium">
                  <Clock className="w-[18px] h-[18px]" />
                  <span>150 minutes</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-[18px] h-[18px] text-secondary" />
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">Pour deux personnes</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Duo Complicité & Suite Privée</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Une retraite partagée dans une suite exclusive avec baignoire double en granit et lit de repos sous voûte étoilée.
                </p>
              </div>
              <div className="flex items-baseline gap-2 py-4 border-y border-outline-variant/40">
                <span className="font-display-lg text-[42px] leading-tight text-primary font-headline-md">260€</span>
                <span className="font-body-sm text-body-sm text-tertiary">/ pour 2 personnes • Clé en main</span>
              </div>
              <div className="space-y-3 pt-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface block font-semibold">Le parcours comprend :</span>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Accès exclusif à la Suite Privative 'Nymphéa' avec jacuzzi privé (45 min)</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Double massage synchrone signature aux baumes tièdes de vanille bourbon (60 min)</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Enveloppement corporel relaxant à la cire végétale bio d'arganier (25 min)</span></div>
                <div className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0" /><span className="font-body-sm text-body-sm text-on-surface-variant">Plateau 'Terreia Saveur' gourmand : bouchées crues, fruits frais & élixirs floraux</span></div>
              </div>
            </div>
            <div className="pt-10">
              {/* CORRIGÉ : /reservation -> /formules */}
              <Link href="/formules" className="w-full inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-[0.14em] py-4 rounded-full bg-secondary text-on-secondary hover:bg-on-secondary-container hover:text-white transition-colors shadow-sm">
                Réserver le Duo Complicité
              </Link>
            </div>
          </div>

        </div>
        
        <div className="mt-12 text-center">
          <p className="font-body-sm text-body-sm text-tertiary">
            Vous souhaitez composer un rituel sur-mesure ou offrir une carte cadeau personnalisée ? 
            <Link href="/contact" className="text-primary underline underline-offset-4 hover:text-on-surface font-medium ml-1">Consultez notre conciergerie bien-être</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
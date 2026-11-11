import { Leaf, Mountain, Flower2 } from "lucide-react";

export default function PageHero() {
  return (
    <div className="w-full bg-background">
      {/* Top Subtle Brand Eyebrow Bar */}
      <section className="w-full max-w-[1280px] mx-auto px-margin pt-12 pb-6">
        <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.25em] text-secondary font-semibold">Manifeste • Volume IV</span>
            <span className="text-outline-variant">/</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary">Notre Genèse Botanique</span>
          </div>
          <div className="hidden md:flex items-center gap-2 font-label-md text-label-md text-tertiary">
            <Leaf className="w-4 h-4 text-primary" />
            <span>Ivato • Antananarivo • Nosy Be</span>
          </div>
        </div>
      </section>

      {/* Editorial Hero Statement Section */}
      <section className="w-full max-w-[1280px] mx-auto px-margin pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
          <div className="lg:col-span-8 flex flex-col gap-4 pr-0 lg:pr-12">
            <span className="font-label-md text-label-md tracking-[0.2em] uppercase text-secondary font-semibold">Sanctuaire Holistique • Philosophie Fondatrice</span>
            <h1 className="font-display-lg text-display-lg text-on-surface leading-[1.08] tracking-tight">
              L’Âme de <span className="italic font-display-lg text-primary">Terreia Spa</span> — une rencontre sacrée entre la luxuriance brute de l’océan Indien et l’art ancestral du bien-être holistique.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl pt-2 leading-relaxed">
              Né de la vision singulière de terres fertiles et sauvages, notre sanctuaire d'Ivato tisse une passerelle sensorielle intemporelle. Ici, la nature n’est pas un décor : elle est la guérisseuse, le rythme premier, la respiration retrouvée.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between self-stretch pt-6 lg:pt-0">
            <div className="bg-surface-container p-4 rounded-xl w-full shadow-sm">
              <div className="flex items-center justify-between pb-2">
                <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary">Altitude • Terroir</span>
                <Mountain className="w-4 h-4 text-primary" />
              </div>
              {/* CORRECTION ICI : Altitude et texte mis à jour pour Antananarivo */}
              <p className="font-headline-sm text-headline-sm text-on-surface">1 280 mètres</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">
                Hautes Terres centrales, berceau de nos récoltes sauvages autour d’Antananarivo, distillées à la vapeur douce en basse pression.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3 pt-6 text-tertiary font-label-sm text-label-sm tracking-widest uppercase">
              <span className="w-12 h-[1px] bg-outline-variant"></span>
              <span>Chapitre Premier</span>
            </div>
          </div>
        </div>

        {/* Editorial Photographic Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter pt-12 items-center">
          <div className="md:col-span-7 relative group overflow-hidden rounded-xl shadow-md">
            <img className="w-full h-[460px] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA03Ld9bCfmTJic_qxFgzuN9f6SUBzLzcMeByPxLzAAA3RMy60DAqdrGtmgrpwKAi-P9EN7aYB6ya7EpwRWt9w3HgeMFLL37wg8bIwUIyCa8goD3QcxSKwRb9Wa0JZ0wVFp4CoUFGD0MoAzHmkejG4P_bBHpaj_-E-QQ3ySnKodyUABIwaPrzJkrjir9dmi25vUYQhc1WdPjwsTDUkEY3zrVrY1Q3puJO-7gm0XKu8C" alt="Atrium Minéral" />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent text-on-primary">
              <p className="font-label-md text-label-md tracking-wider uppercase text-secondary-fixed">Atrium Minéral • Bassin d’Argile</p>
              <p className="font-body-sm text-body-sm opacity-90">L'immersion commence là où les pas ralentissent et le silence s'amplifie.</p>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-md">
              <img className="w-full h-[260px] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClaI2VJHx8JrSYAATqP0X88MM7CXxkNig05X5CpHxQ_T6_azcaqzzHFYeOVfZgefQJvgZ7M2mPKiQa87Dq4uTGIcdG19LLk3eXDzbPDc_a7q2JudsR0cQCRI7SAaKveAD7u-szuUEvb7-paZo2OyQPItTnRn_dPhJsPU0t19Xl7866wbWZltdU9rprEthXWiVp9qnEWksg4kmUnbLRCnpOohucsWG8RXi-VupecV2j" alt="Rituels Vivants" />
              <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-semibold">Rituels Vivants</span>
              </div>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-2 text-secondary mb-3">
                <Flower2 className="w-5 h-5" />
                <span className="font-label-sm text-label-sm uppercase tracking-widest font-semibold">Cueillette Responsable</span>
              </div>
              <p className="font-headline-sm text-headline-sm text-on-surface italic">
                « Nous n’extrayons pas simplement des actifs; nous transmettons la mémoire vibrante d’une terre insulaire intouchée. »
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
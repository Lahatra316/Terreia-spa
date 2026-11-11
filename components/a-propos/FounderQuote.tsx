import { Quote } from "lucide-react";

export default function FounderQuote() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-margin py-space-xl">
      <div className="bg-surface-container p-8 lg:p-16 rounded-2xl shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-md">
              <img className="w-full h-[420px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvNte-J3otIglBRqhCcOIQv6Vn1ZkRbAX9NAKkT0s2mic9yLKo4f1GAWH9mW_zx5mYAexof-U7WfhGDvksNpu-GA29DOZLZ41i_Wc7bmgvVD8VFdj6qunpREjQ3pANJWhW8cOAXFVXov_oQ8VbO9fTX94qSbPds6fwLlXDjCz8dosIoe6tB9zE4zU_OFmBijnlvd5TqoIcgz2EYBRWOkpHwgeViTz2qOrgv72DeLvR" alt="Aina Randriam" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-on-background/90 to-transparent text-on-primary">
                <span className="font-headline-sm text-headline-sm">Aina Randriam</span>
                <p className="font-label-md text-label-md text-secondary-fixed">Fondatrice & Directrice Botanique Terreia</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6 lg:pl-8">
            <Quote className="w-12 h-12 text-secondary opacity-40" />
            <blockquote className="font-headline-md text-[24px] lg:text-[30px] leading-tight text-on-surface italic">
              « J’ai grandi avec l’odeur piquante du ravintsara froissé entre les paumes et la douceur souveraine du beurre de baobab. En créant Terreia, je ne souhaitais pas concevoir un spa ordinaire, mais offrir un refuge sacré où la nature insulaire rend aux citadins la souveraineté de leur souffle. »
            </blockquote>
            <div className="pt-2">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Formée en naturopathie à Paris et initiée aux secrets des plantes par les femmes aînées des Hautes Terres Malgaches, Aina imagine chaque protocole comme un voyage alchimique respectueux de l’écologie du vivant.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div>
                <span className="font-headline-sm text-headline-sm text-primary">2018</span>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary">Création du Sanctuaire</p>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant hidden sm:block"></div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary">100%</span>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary">Filière Directe Producteurs</p>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant hidden sm:block"></div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary">14 000+</span>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary">Hôtes Apaisés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

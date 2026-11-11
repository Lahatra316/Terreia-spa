import { Leaf, Cloud, Flower2, Brain, Droplet, ShieldCheck } from "lucide-react";

export default function BotanicalAlchemy() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl my-space-md">
      <div className="max-w-[1280px] mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-surface-container px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">Médecine Végétale • Origines</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
              L’Alchimie sacrée des Terres Malgaches
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Madagascar abrite plus de 12 000 espèces végétales dont près de 80% sont strictement endémiques au globe. Loin des extraits synthétiques standardisés, Terreia s’approvisionne directement au sein de coopératives familiales et de réserves forestières sanctuarisées.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Chaque goutte d’huile essentielle distillée pour nos protocoles provient de parcelles préservées de la Grande Île, récoltée à l’aube lorsque la concentration en principes actifs atteint son acmé vibratoire.
            </p>
            <div className="bg-surface-container-low p-4 rounded-xl space-y-2 mt-6 shadow-sm">
              <div className="flex items-center gap-2 text-secondary">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">Distillation Douce Basse Pression</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Nos alambics artisanaux fonctionnent en circuit court avec de l’eau de source des massifs, respectant l'intégrité moléculaire des molécules aromatiques rares.
              </p>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <div className="bg-surface-container p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Feuilles Sauvages</span>
                    <Cloud className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Ravintsara</h3>
                  <p className="font-label-md text-label-md italic text-tertiary mb-2">Cinnamomum camphora ct. 1,8-cinéole</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Considéré comme l’« arbre aux bonnes feuilles », cet élixir pulmonaire et régénérant cellulaire restaure l’oxygénation profonde et dissout la fatigue nerveuse tenace.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-tertiary font-label-sm text-label-sm">
                  <span>Région : Plateau Central</span>
                  <span className="text-primary font-semibold">Immunité • Souffle</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Écorce & Rameaux</span>
                    <Leaf className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Niaouli de l’Est</h3>
                  <p className="font-label-md text-label-md italic text-tertiary mb-2">Melaleuca quinquenervia</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Puissant purificateur de la barrière cutanée, le Niaouli tonifie les tissus fatigués et neutralise les toxines urbaines accumulées.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-tertiary font-label-sm text-label-sm">
                  <span>Région : Canal des Pangalanes</span>
                  <span className="text-primary font-semibold">Détox • Clarté</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Fleurs d’Or</span>
                    <Brain className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Ylang-Ylang Extra</h3>
                  <p className="font-label-md text-label-md italic text-tertiary mb-2">Cananga odorata forma genuina</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Cueillies avant l’aube sur l’île aux Parfums, ses corolles délivrent un parfum voluptueux réducteur instantané d'hormones de stress et harmonisateur cardiaque.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-tertiary font-label-sm text-label-sm">
                  <span>Région : Nosy Be</span>
                  <span className="text-primary font-semibold">Calme • Émotion</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-surface-container p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Graines Pressées à Froid</span>
                    <Droplet className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Huile de Baobab</h3>
                  <p className="font-label-md text-label-md italic text-tertiary mb-2">Adansonia grandidieri</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    L’« Arbre Mère » nous offre une huile somptueuse, gorgée d’acides gras oméga-6 et 9, redonnant aux tissus une souplesse et une lumière sans égal.
                  </p>
                </div>
                <div className="mt-4 pt-2 flex items-center justify-between text-tertiary font-label-sm text-label-sm">
                  <span>Région : Menabe Sauvage</span>
                  <span className="text-primary font-semibold">Nutrition • Éclat</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
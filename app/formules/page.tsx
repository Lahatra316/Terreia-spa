import PageHero from "@/components/formules/PageHero";
import PacksSection from "@/components/formules/PacksSection";
import BespokeSection from "@/components/formules/BespokeSection";

export default function FormulesPage() {
  return (
    // pt-32 pour ne pas cacher le contenu sous le header flottant
    <div className="flex flex-col w-full bg-background min-h-screen pt-32">
      <PageHero />
      <PacksSection />
      <BespokeSection />
    </div>
  );
}
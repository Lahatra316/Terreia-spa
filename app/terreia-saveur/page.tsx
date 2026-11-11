import PageHero from "@/components/saveur/PageHero";
import MenuSection from "@/components/saveur/MenuSection";
import BottomSections from "@/components/saveur/BottomSections";

export default function TerreiaSaveurPage() {
  return (
    // pt-32 pour compenser le header flottant
    <div className="flex flex-col w-full bg-background min-h-screen pt-32">
      <PageHero />
      <MenuSection />
      <BottomSections />
    </div>
  );
}
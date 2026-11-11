import PageHero from "@/components/a-propos/PageHero";
import BotanicalAlchemy from "@/components/a-propos/BotanicalAlchemy";
import PhilosophyStats from "@/components/a-propos/PhilosophyStats";
import ThreePillars from "@/components/a-propos/ThreePillars";
import TeamSection from "@/components/a-propos/TeamSection";
import FounderQuote from "@/components/a-propos/FounderQuote";
import FinalCTA from "@/components/a-propos/FinalCTA";

export default function AProposPage() {
  return (
    // pt-32 permet de compenser le header flottant
    <div className="flex flex-col w-full bg-background min-h-screen pt-32">
      <PageHero />
      <BotanicalAlchemy />
      <PhilosophyStats />
      <ThreePillars />
      <TeamSection />
      <FounderQuote />
      <FinalCTA />
    </div>
  );
}
import Hero from "@/components/home/Hero";
import ConceptPillars from "@/components/home/ConceptPillars";
import FeaturedPacks from "@/components/home/FeaturedPacks";
import Testimonial from "@/components/home/Testimonial";
import NewsletterCTA from "@/components/home/NewsletterCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Hero />
      <ConceptPillars />
      <FeaturedPacks />
      <Testimonial />
      <NewsletterCTA />
    </div>
  );
}
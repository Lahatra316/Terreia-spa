import PageHeader from "@/components/contact/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoSidebar from "@/components/contact/ContactInfoSidebar";
import TransportServices from "@/components/contact/TransportServices";
import Atmosphere from "@/components/contact/Atmosphere";
import FAQSection from "@/components/contact/FAQSection";
import BottomCTA from "@/components/contact/BottomCTA";

export default function ContactPage() {
  return (
    // pt-32 pour compenser le header flottant
    <div className="flex flex-col w-full bg-background min-h-screen pt-32">
      <PageHeader />
      
      {/* Section principale avec formulaire et infos */}
      <section className="w-full max-w-[1280px] mx-auto px-margin pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <ContactForm />
          <ContactInfoSidebar />
        </div>
      </section>

      <TransportServices />
      <Atmosphere />
      <FAQSection />
      <BottomCTA />
    </div>
  );
}
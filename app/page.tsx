import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import CooperationSection from "@/components/CooperationSection";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <ClientsSection />
        <ServicesSection />
        <WorkSection />
        <CooperationSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer variant="home" />
    </>
  );
}

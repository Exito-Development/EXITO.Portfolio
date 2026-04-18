import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ServicesSection from "@/components/ServicesSection";
import StackSection from "@/components/StackSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Ticker />
      <ServicesSection />
      <StackSection />
      <ProcessSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

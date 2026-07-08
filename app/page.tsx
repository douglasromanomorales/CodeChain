import IntroSequence from "@/components/IntroSequence";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Journey from "@/components/Journey";
import ProcessFlow from "@/components/ProcessFlow";
import AISection from "@/components/AISection";
import LowCode from "@/components/LowCode";
import Cases from "@/components/Cases";
import HowItWorks from "@/components/HowItWorks";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ChainDivider } from "@/components/ChainMotif";

export default function Home() {
  return (
    <>
      <IntroSequence />
      <Nav />
      <main>
        <Hero />
        <Numbers />
        <TechStack />
        <Services />
        <div className="section-pad">
          <ChainDivider />
        </div>
        <Journey />
        <ProcessFlow />
        <AISection />
        <LowCode />
        <Cases />
        <HowItWorks />
        <Differentials />
        <FAQ />
        <Contact />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

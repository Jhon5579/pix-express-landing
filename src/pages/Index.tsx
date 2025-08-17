import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { VSLSection } from "@/components/sections/VSLSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { OffersSection } from "@/components/sections/OffersSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <UrgencyBanner />
      <div className="pt-12">
        <VSLSection />
      <ProblemSection />
      <SolutionSection />
      <OffersSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;

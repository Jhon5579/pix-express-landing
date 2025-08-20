import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { VSLSection } from "@/components/sections/VSLSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { UrgencySection } from "@/components/sections/UrgencySection";
import { OffersSection } from "@/components/sections/OffersSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { ProofConceptSection } from "@/components/sections/ProofConceptSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ReinforcedGuaranteeSection } from "@/components/sections/ReinforcedGuaranteeSection";
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
        <UrgencySection />
        <OffersSection />
        <TestimonialsSection />
        <AuthoritySection />
        <ProofConceptSection />
        <ReinforcedGuaranteeSection />
        <FAQSection />
        <FinalCTASection />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;

import React, { Suspense } from "react";
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { VSLSection } from "@/components/sections/VSLSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ResourcePreloader, criticalResources } from "@/components/performance/ResourcePreloader";

// Lazy load components below the fold for better performance
const ProblemSection = React.lazy(() => import("@/components/sections/ProblemSection").then(m => ({default: m.ProblemSection})));
const SolutionSection = React.lazy(() => import("@/components/sections/SolutionSection").then(m => ({default: m.SolutionSection})));
const UrgencySection = React.lazy(() => import("@/components/sections/UrgencySection").then(m => ({default: m.UrgencySection})));
const OffersSection = React.lazy(() => import("@/components/sections/OffersSection").then(m => ({default: m.OffersSection})));
const AuthoritySection = React.lazy(() => import("@/components/sections/AuthoritySection").then(m => ({default: m.AuthoritySection})));
const ProofConceptSection = React.lazy(() => import("@/components/sections/ProofConceptSection").then(m => ({default: m.ProofConceptSection})));
const ReinforcedGuaranteeSection = React.lazy(() => import("@/components/sections/ReinforcedGuaranteeSection").then(m => ({default: m.ReinforcedGuaranteeSection})));
const FAQSection = React.lazy(() => import("@/components/sections/FAQSection").then(m => ({default: m.FAQSection})));
const FinalCTASection = React.lazy(() => import("@/components/sections/FinalCTASection").then(m => ({default: m.FinalCTASection})));
const FooterSection = React.lazy(() => import("@/components/sections/FooterSection").then(m => ({default: m.FooterSection})));

const LoadingSkeleton = () => (
  <div className="py-16 bg-bg-section">
    <div className="max-w-4xl mx-auto px-4">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen critical-render">
      {/* Preload critical resources */}
      <ResourcePreloader resources={criticalResources} />
      
      {/* Critical above-the-fold content - loads immediately */}
      <UrgencyBanner />
      <div className="pt-12">
        <VSLSection />
        <TestimonialsSection />
        
        {/* Below-the-fold content - lazy loaded for performance */}
        <Suspense fallback={<LoadingSkeleton />}>
          <ProblemSection />
          <SolutionSection />
          <UrgencySection />
          <OffersSection />
          <AuthoritySection />
          <ProofConceptSection />
          <ReinforcedGuaranteeSection />
          <FAQSection />
          <FinalCTASection />
          <FooterSection />
        </Suspense>
      </div>
    </main>
  );
};

export default Index;

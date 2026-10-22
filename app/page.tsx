
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";

import EnterpriseAIDilemma from "../components/EnterpriseAIDilemma";
import AismIntroduction from "../components/AismIntroduction";
import EnterpriseAIComparison from "../components/EnterpriseAIComparison";
import AismModel from "../components/AismModel";
import CapabilitiesSection from "../components/CapabilitiesSection";
import AismFrameworksSection from "../components/AismFrameworksSection";
import AIMaturityAssessment from "../components/AIMaturityAssessment";
import InsightsSection from "../components/InsightsSection";
import FinalCTASection from "../components/FinalCTASection";
import SiteFooter from "../components/SiteFooter";

import Hero2 from "../components/Hero2";

export default function HomePage() {
  return (
    <>
      <main className="prosight-home">
        {/* Header and hero share the gradient background */}
        <div className="prosight-home__top">
          <SiteHeader />
         <Hero2 />
        </div>



        {/* Homepage sections */}

          
        <EnterpriseAIDilemma />
        <AismIntroduction />
        <EnterpriseAIComparison />
        <AismModel />
        <CapabilitiesSection />
        <AismFrameworksSection />
        <AIMaturityAssessment />
        <InsightsSection />
        <FinalCTASection />
      </main>

      {/* Footer stays outside the main content */}
      <SiteFooter />
    </>
  );
}

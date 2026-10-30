
import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";

import EnterpriseAIDilemma from "../components/EnterpriseAIDilemma";
import AismIntroduction from "../components/AismIntroduction";
import EnterpriseAIComparison from "../components/EnterpriseAIComparison";
import FrameworksOverview from "../components/FrameworksOverview";
import CapabilitiesSection from "../components/CapabilitiesSection";
import AismFrameworksSection from "../components/AismFrameworksSection";
import AIMaturityAssessment from "../components/AIMaturityAssessment";
import InsightsSection from "../components/InsightsSection";
import FinalCTASection from "../components/FinalCTASection";
import SiteFooter from "../components/SiteFooter";
import AISMModelSection from "../components/AISMModelSection";
import Hero2 from "../components/Hero2";

import Hero3 from "../components/Hero3";
export default function HomePage() {
  return (
    <>
      <main className="prosight-home">
        {/* Header and hero share the gradient background */}
        <div className="prosight-home__top">
          <SiteHeader />
            <Hero3 />
     
        </div>

        {/* Homepage sections */}
          
        <EnterpriseAIDilemma />
        <AismIntroduction />
        <EnterpriseAIComparison />
     
        <AISMModelSection />
        <CapabilitiesSection />
      <FrameworksOverview />
        <AIMaturityAssessment />
        <InsightsSection />
        <FinalCTASection />
      </main>

      {/* Footer stays outside the main content */}
      <SiteFooter />
    </>
  );
}

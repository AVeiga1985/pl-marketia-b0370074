
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import SolutionsSection from "@/components/SolutionsSection";
import MiniCasesSection from "@/components/MiniCasesSection";
import TrustSection from "@/components/TrustSection";
import OrbitalTimelineSection from "@/components/OrbitalTimelineSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ChallengesSection />
      <SolutionsSection />
      <MiniCasesSection />
      <TrustSection />
      <OrbitalTimelineSection />
      <DifferentialsSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;

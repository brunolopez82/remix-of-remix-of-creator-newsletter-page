import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SampleIssues from "@/components/SampleIssues";
import BenefitsSection from "@/components/BenefitsSection";
import AboutAuthor from "@/components/AboutAuthor";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  const handleSubscribe = () => navigate("/thank-you");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Bento grid — background color shows through 1px gaps between tiles */}
      <div className="mx-auto px-5 lg:px-10 pb-5 lg:pb-10">
        <div className="flex flex-col gap-[2px] bg-black rounded-2xl overflow-hidden p-[2px]">
          <HeroSection onSubscribe={handleSubscribe} />
          <SampleIssues />
          <BenefitsSection />
          <AboutAuthor />
          <SubscribeSection onSubscribe={handleSubscribe} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;

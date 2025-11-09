import HeroSection from "./pages/HeroSection";
import HeroHome from "@/components/HeroHome";
import FeatureList from "@/components/FeatureList";
import { ModernFooter as Footer } from "@/components/ui/modern-footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroHome />
      <FeatureList />
      <Footer />
    </main>
  );
}
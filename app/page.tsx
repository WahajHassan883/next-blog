import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategorySection from "@/components/CategorySection";
import QuotesSection from "@/components/QuotesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection/>
        <FeaturedSection/>
        <CategorySection/>
        <QuotesSection/>
      </main>
    </div>
  );
}

import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import CategorySection from "@/components/CategorySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection/>
        <FeaturedSection/>
        <CategorySection/>
      </main>
    </div>
  );
}

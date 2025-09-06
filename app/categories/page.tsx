import CategoriesGrid from "@/components/CategoriesGrid";
import CategoriesHero from "@/components/CategoriesHero";
import CategorySection from "@/components/CategorySection";

export default function Categories(){
   return(
      <div className="min-h-screen bg-background">
        <CategoriesHero/>
        <CategorySection/>
        <CategoriesGrid/>
      </div>
   );
}
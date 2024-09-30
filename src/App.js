import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import BenefitSection from "./components/benefitSection/BenefitSection";
import IngredientSection from "./components/ingredientSection/IngredientSection";
import SubcribeSection from "./components/subcribeSection/SubcribeSection";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitSection />
        <IngredientSection />
        <SubcribeSection />
      </main>
      <Footer />
    </>
  );
}

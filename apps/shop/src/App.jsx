import Header from "./components/header/Header";
import HeroSection from "./components/section/heroSection/HeroSection";
import BenefitSection from "./components/section/benefitSection/BenefitSection";
import IngredientSection from "./components/section/ingredientSection/IngredientSection";
import MadeSection from "./components/section/madeSection/MadeSection";
import ProductsSection from "./components/section/productsSection/ProductsSection";
import TopSellersSection from "./components/section/topSellersSection/TopSellersSection";
import ResponseSection from "./components/section/responseSection/ResponseSection";
import SubcribeSection from "./components/section/subcribeSection/SubcribeSection";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitSection />
        <IngredientSection />
        <MadeSection />
        <ProductsSection />
        <TopSellersSection />
        <ResponseSection />
        <SubcribeSection />
      </main>
      <Footer />
    </>
  );
}

import Header from "./components/header/Header";
import HeroSection from "./components/section/heroSection/HeroSection";
import BenefitSection from "./components/section/benefitSection/BenefitSection";
import IngredientSection from "./components/section/ingredientSection/IngredientSection";
import MadeSection from "./components/section/madeSection/MadeSection";
import ProductsSection from "./components/section/productsSection/ProductsSection";
import TopSellersSection from "./components/section/topSellersSection/TopSellersSection";
import ResponseSection from "./components/section/responseSection/ResponseSection";
import SubscribeSection from "./components/section/subscribeSection/SubscribeSection";
import Footer from "./components/footer/Footer";
import OrderModal from "./components/modal/orderModal/OrderModal";
import CheckoutReturnHandler from "./components/checkout/CheckoutReturnHandler";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <CheckoutReturnHandler />
      <Header />
      <main>
        <HeroSection />
        <BenefitSection />
        <IngredientSection />
        <MadeSection />
        <ProductsSection />
        <TopSellersSection />
        <ResponseSection />
        <SubscribeSection />
      </main>
      <Footer />
      <OrderModal />
    </CartProvider>
  );
}

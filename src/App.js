import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import BenefitSection from "./components/benefitSection/BenefitSection";
// import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BenefitSection />
      </main>
      {/* <Footer /> */}
    </>
  );
}

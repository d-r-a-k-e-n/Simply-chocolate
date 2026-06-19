import Button from "../../ui/button/Button.jsx";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-section__container">
          <h2 className="hero-section__title">
            Treat yourself or a loved one to our finest ingredients for a moment
            of pure delight!
          </h2>

          <div className="hero-section__button-container">
            <a href="#products-section">
              <Button variant="primary">Buy now</Button>
            </a>
            <a href="#made-section">
              <Button variant="ghost">How it’s made</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

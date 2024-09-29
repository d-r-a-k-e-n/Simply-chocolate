import Button from "../button/Button.jsx";
import { BUTTON_STYLE } from "../button/button.js";
import "./heroSection.css";
import "../button/button.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__container">
          <h2 className="hero-section__title">
            Treat yourself or a loved one to our finest ingredients for a moment
            of pure delight!
          </h2>

          <div className="hero-section__button-container">
            <ul className="hero-section__button-list">
              <li className="hero-section__button-item">
                <Button style={BUTTON_STYLE.ORANGE}>Buy now</Button>
              </li>
              <li className="hero-section__button-item">
                <Button style={BUTTON_STYLE.TRANSPARENT}>How it’s made</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

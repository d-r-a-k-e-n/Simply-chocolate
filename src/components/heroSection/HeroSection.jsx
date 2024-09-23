import Button from "../button/Button.jsx";
import { BUTTON_STYLE } from "../button/button.js";
import "./heroSection.css";
import "../button/button.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container">
          <h2 className="hero__title">
            Treat yourself or a loved one to our finest ingredients for a moment
            of pure delight!
          </h2>

          <div className="button-container">
            <ul className="button__list">
              <li className="button__item">
                <Button style={BUTTON_STYLE.ORANGE}>Buy now</Button>
              </li>
              <li className="button__item">
                <Button style={BUTTON_STYLE.TRANSPARENT}>How it’s made</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import Button from "../button/Button.jsx";
import OrderModal from "../orderModal/OrderModal";
import "./heroSection.css";
import "../button/button.css";

export default function HeroSection() {
  const [orderModalIsOpen, setOrderModalIsOpen] = useState(false);
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-section__container">
          <h2 className="hero-section__title">
            Treat yourself or a loved one to our finest ingredients for a moment
            of pure delight!
          </h2>

          <div className="hero-section__button-container">
            <ul className="hero-section__button-list">
              <a href="#">
                <li className="hero-section__button-item">
                  <button
                    className={"button button--orange"}
                    onClick={() => setOrderModalIsOpen(true)}
                  >
                    Buy now
                  </button>
                </li>
              </a>
              <a href="#made-section">
                <li className="hero-section__button-item">
                  <Button className={"button button--transparent"}>
                    How it’s made
                  </Button>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <OrderModal
        isOpen={orderModalIsOpen}
        onClose={() => setOrderModalIsOpen(false)}
      />
    </section>
  );
}

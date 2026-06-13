import React, { useState } from "react";
import Button from "../../ui/button/Button.jsx";
import OrderModal from "../../modal/orderModal/OrderModal";
import "./heroSection.css";
import "../../ui/button/button.css";

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
            <Button
              className={'button button--orange'}
              onClick={() => setOrderModalIsOpen(true)}
            >
              Buy now
            </Button>
            <a href="#made-section">
              <Button className={'button button--transparent'}>
                How it’s made
              </Button>
            </a>
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

import NewsModal from "../newsModal/NewsModal";
import "./subcribeSection.css";
import "../button/button.css";
import React, { useState } from "react";

export default function SubcribeSection() {
  const [modalSubcribeIsOpen, setModalSubcribeIsOpen] = useState(false);
  return (
    <section className="subcribe-section">
      <div className="container subcribe-section__container">
        <h2 className="subcribe-section__title">
          explore our new chocolate first
        </h2>
        <p className="subcribe-section__text">
          From the velvety texture to the rich and complex flavor, our New
          Chocolate is a true indulgence that will leave you craving more. Made
          with only the finest ingredients and handcrafted with the utmost care,
          each piece is a work of art that is sure to please.
        </p>
        <button
          className="button button--orange subcribe-section__btn"
          onClick={() => setModalSubcribeIsOpen(true)}
        >
          Subscribe
        </button>
      </div>
      <NewsModal
        isOpen={modalSubcribeIsOpen}
        onClose={() => setModalSubcribeIsOpen(false)}
      />
    </section>
  );
}

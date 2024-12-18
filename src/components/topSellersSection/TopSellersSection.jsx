import React, { useState } from "react";

import OrderModal from "../orderModal/OrderModal";
import ChocolateWithNuts from "./../../img/seller/chocolate-with-nuts.jpg";
import ChocolateMix from "./../../img/seller/chocolate-mix.jpg";
import DarkChocolate from "./../../img/seller/dark-chocolate.jpg";

import "./topSellersSection.css";

export default function TopSellersSection() {
  const [orderModalIsOpen, setOrderModalIsOpen] = useState(false);
  return (
    <section className="top-sellers-section" id="top-sellers-section">
      <div className="container">
        <h2 className="top-sellers-section__title">
          <span className="title-accent">top</span> sellers
        </h2>
        <ul className="top-sellers-section__list">
          <li className="top-sellers-section__item">
            <img
              src={ChocolateWithNuts}
              alt="Chocolate With Nuts"
              className="top-sellers-section__img"
            />
            <p className="top-sellers-section__text">
              Crazy enough chocolate originates from a bean just like the coffee
              bean called Cacao. Cacao has been around for thousands of years
              and was first discovered by the Native American tribe called the
              Mayans.
            </p>
          </li>
          <li className="top-sellers-section__item">
            <img
              src={ChocolateMix}
              alt="Chocolate Mix"
              className="top-sellers-section__img"
            />
          </li>
          <li className="top-sellers-section__item">
            <img
              src={DarkChocolate}
              alt="Dark Chocolate"
              className="top-sellers-section__img"
            />
          </li>
        </ul>

        <div className="top-sellers-section__container">
          <p className="top-sellers-section__text top-sellers-section__text-btn">
            Crazy enough chocolate originates from a bean just like the coffee
            bean called Cacao. Cacao has been around for thousands of years and
            was first discovered by the Native American tribe called the Mayans.
          </p>
          <button
            className="button button--orange top-sellers-section__btn"
            onClick={() => setOrderModalIsOpen(true)}
          >
            Buy now
          </button>
        </div>
      </div>
      <OrderModal
        isOpen={orderModalIsOpen}
        onClose={() => setOrderModalIsOpen(false)}
      />
    </section>
  );
}

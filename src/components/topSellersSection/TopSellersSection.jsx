import "./topSellersSection.css";
import ChocolateWithNuts from "./../../img/seller/chocolate-with-nuts.jpg";
import ChocolateMix from "./../../img/seller/chocolate-mix.jpg";
import DarkChocolate from "./../../img/seller/dark-chocolate.jpg";
import Button from "../button/Button";

export default function TopSellersSection() {
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
          <Button className="button button--orange top-sellers-section__btn">
            Buy now
          </Button>
        </div>
      </div>
    </section>
  );
}

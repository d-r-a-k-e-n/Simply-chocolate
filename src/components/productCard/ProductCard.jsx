import Button from "../button/Button";

import "./productCard.css";

export default function ProductCard({ title, photo, ingredient, prise }) {
  return (
    <li className="products-section__item">
      <img className="products-section__item-img" src={photo} alt="" />
      <h3 className="products-section__item-title">{title}</h3>
      <p className="products-section__item-description">
        {ingredient} | {prise}
      </p>
      <Button className="button button--transparent-or products-section__item-btn">
        Buy
      </Button>
    </li>
  );
}

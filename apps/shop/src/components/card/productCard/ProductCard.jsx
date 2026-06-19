import Button from "../../ui/button/Button";

import "./productCard.css";

export default function ProductCard({ title, photo, ingredient, prise, onBuy }) {
  return (
    <li className="products-section__item">
      <img className="products-section__item-img" src={photo} alt="" />
      <h3 className="products-section__item-title">{title}</h3>
      <p className="products-section__item-description">
        {ingredient} | {(prise / 100).toFixed(2)} $
      </p>
      <Button variant="outline" className="products-section__item-btn" onClick={onBuy}>
        Buy
      </Button>
    </li>
  );
}

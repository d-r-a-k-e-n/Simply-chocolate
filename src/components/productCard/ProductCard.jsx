import "./productCard.css";
import ClassicMilkChocolate from "../../img/our-products/classic-milk-chocolate.jpg";
import Button from "../button/Button";

export default function ProductCard() {
  return (
    <li className="products-section__item">
      <img
        className="products-section__item-img"
        src={ClassicMilkChocolate}
        alt=""
      />
      <h3 className="products-section__item-title">Classic</h3>
      <p className="products-section__item-description">
        Milk chocolate | 45 UAH
      </p>
      <Button className="button button--transparent-or products-section__item-btn">
        Buy
      </Button>
    </li>
  );
}

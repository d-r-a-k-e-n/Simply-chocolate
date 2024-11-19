import "./benefitSection.css";
import BenefitCard from "../benefitCard/BenefitCard.jsx";
import { ReactComponent as Chocolate } from "./../../img/icons/chocolate.svg";
import { ReactComponent as Coin } from "./../../img/icons/coin.svg";
import { ReactComponent as Spoon } from "./../../img/icons/spoon.svg";

export default function BenefitSection() {
  return (
    <section className="benefit-section">
      <div className="container">
        <ul className="benefit-section__list">
          <BenefitCard
            icon={<Chocolate />}
            title={"Unsurpassed taste"}
            text={
              "Crafted with the finest quality cocoa beans and a dedication to perfection, each bite is a decadent experience that simply cannot be matched. Savor the richness and complexity of our Unsurpassed Taste and discover a new level of chocolate bliss."
            }
          />
          <BenefitCard
            icon={<Coin />}
            title={"Affordable price"}
            text={
              "Indulge in high-quality chocolate without breaking the bank with Simply Chocolate's selection of affordable treats. Enjoy mouth-watering truffles and velvety chocolate bars without sacrificing taste or quality. Browse our selection and indulge in affordable luxury today."
            }
          />
          <BenefitCard
            icon={<Spoon />}
            title={"Own production"}
            text={
              "We take pride in our own production process, ensuring that every step is carefully crafted to perfection. From selecting the finest ingredients to handcrafting each piece, our attention to detail is evident in every bite."
            }
          />
        </ul>
      </div>
    </section>
  );
}

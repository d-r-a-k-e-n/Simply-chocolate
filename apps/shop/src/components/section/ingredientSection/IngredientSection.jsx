import "./ingredientSection.css";
import IngredientCard from "../../card/ingredientCard/IngredientCard";
import {ingredientData} from "./ingredientData";

export default function IngredientSection() {
  return (
    <section className="ingredient-section">
      <div className="container">
        <h2 className="ingredient-section__title">
          It all adds up to one exceptional
          <span className="title-accent"> taste</span> sensation
        </h2>
        <p className="ingredient-section__description">
          At Simply Chocolate, we believe that the secret to exceptional
          chocolate is in the details. From the sourcing of the finest
          ingredients to the careful crafting of each individual piece, every
          step of our process adds up to one exceptional taste sensation.
        </p>
        <ul className="ingredient-section__list">
          {ingredientData.map(({ className, img, title, text, button }) => (
            <IngredientCard
              key={title}
              className={className}
              img={img}
              title={title}
              text={text}
              button={button}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

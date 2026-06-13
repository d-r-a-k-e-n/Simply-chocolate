import "./ingredientSection.css";
import IngredientCard from "../ingredientCard/IngredientCard";

import Chocolate from "./../../img/ingredient/chocolate.png";
import Milk from "./../../img/ingredient/milk.png";
import Nuts from "./../../img/ingredient/nuts.png";
import Semi from "./../../img/ingredient/semi.png";

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
          <IngredientCard
            className={"front front-accent"}
            img={Chocolate}
            title={"milk chocolate"}
            text={
              "Milk chocolate is a solid chocolate confectionery containing cocoa, sugar and milk. It is the most consumed type of chocolate. Chocolate was originally sold and consumed as a beverage in pre-Columbian times. Although four-fifths of all milk chocolate is sold in the United States and Europe."
            }
            button={"chocolate"}
          />
          <IngredientCard
            className={"front front-light"}
            img={Milk}
            title={"milk"}
            text={
              "Milk is a white liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals (including breastfed human infants) before they are able to digest solid food.Early-lactation milk, which is called colostrum, contains antibodies that strengthen the immune system."
            }
            button={"milk "}
          />
          <IngredientCard
            className={"front front-section"}
            img={Nuts}
            title={"nuts"}
            text={
              "Almonds, pistachios, and walnuts are some types of nuts that contain healthy nutrients. When eaten as part of a nutrient-dense diet, these 9 nuts may offer benefits such as reducing your risk of heart disease. They’re a good source of fiber, healthy fats, and plant protein. Plus, they’re great on their own."
            }
            button={"nuts"}
          />
          <IngredientCard
            className={"front front-light"}
            img={Semi}
            title={"semi - sweet chocolate"}
            text={
              "Semi-sweet chocolate has a cocoa solid content of 35 to 65%. One of the best ways to gain an understanding of this type of chocolate is to compare it to a different type of chocolate. Semisweet is darker than milk chocolate. In a taste comparison, it has a slightly bitter taste whereas milk chocolate is sweeter and more mellow. "
            }
            button={"sweet"}
          />
        </ul>
      </div>
    </section>
  );
}

import "./ingredientCard.css";

export default function ingredientCard({
  className,
  img,
  title,
  text,
  button,
}) {
  return (
    <li className="ingredient-section__item">
      <div className={className}>
        <img src={img} className="ingredient-section__img" />
        <h2 className="ingredient-section__item-title-front">{title}</h2>
      </div>

      <div className="back">
        <h2 className="ingredient-section__item-title-back">{title}</h2>

        <button className="ingredient-section__btn button button--orange">
          {button}
        </button>
        <button className="ingredient-section__btn button button--transparent-or">
          the benefits
        </button>

        <p className="ingredient-section__text">{text}</p>
      </div>
    </li>
  );
}

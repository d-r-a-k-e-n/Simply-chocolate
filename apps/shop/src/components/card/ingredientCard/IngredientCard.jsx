import Button from "../../ui/button/Button";

import "./ingredientCard.css";

export default function IngredientCard({
  className,
  img,
  title,
  text,
  button,
  isActive,
  onToggle,
}) {
  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <li
      className={`ingredient-section__item${isActive ? " is-active" : ""}`}
      onClick={() => onToggle(title)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle(title);
        }
      }}
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={`${title} ingredient card`}
    >
      <div className={`ingredient-card__front ${className}`}>
        <img className="ingredient-section__img" src={img} alt={`${title} img`} />
        <h2 className="ingredient-section__item-title-front">{title}</h2>
      </div>

      <div className="ingredient-card__back back">
        <div className="ingredient-card__back-content">
          <h2 className="ingredient-section__item-title-back">{title}</h2>

          <div className="ingredient-card__actions">
            <Button
              className="ingredient-section__btn button button--orange"
              onClick={handleButtonClick}
            >
              {button}
            </Button>
            <Button
              className="ingredient-section__btn button button--transparent-or"
              onClick={handleButtonClick}
            >
              the benefits
            </Button>
          </div>

          <p className="ingredient-section__text">{text}</p>
        </div>
      </div>
    </li>
  );
}

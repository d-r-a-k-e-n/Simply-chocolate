import "./responseCard.css";
import Review from "./../../img/review.jpg";

export default function ResponseCard() {
  return (
    <div className="response-section__item">
      <img className="response-section__item-img" src={Review} alt="Review" />
      <div className="response-section__item-container">
        <h3 className="response-section__item-title">Victoria Dobrzhanska</h3>
        <p className="response-section__item-text">
          I love this chocolate bar. Perfect combination of light crispy wafer,
          covered in a thin layer chocolate.
        </p>
      </div>
    </div>
  );
}

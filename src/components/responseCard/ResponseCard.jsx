import "./responseCard.css";
import Review from "./../../img/review.jpg";

export default function ResponseCard({ name, text }) {
  return (
    <div className="response-section__item">
      <img className="response-section__item-img" src={Review} alt="Review" />
      <div className="response-section__item-container">
        <h3 className="response-section__item-title">{name}</h3>
        <p className="response-section__item-text">{text}</p>
      </div>
    </div>
  );
}

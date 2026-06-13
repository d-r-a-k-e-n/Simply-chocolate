import "./benefitCard.css";

export default function BenefitCard({ icon, title, text }) {
  return (
    <li className="benefit-section__item">
      <div className="benefit-section__icon">{icon}</div>
      <h2 className="benefit-section__title">{title}</h2>
      <p className="benefit-section__text">{text}</p>
    </li>
  );
}

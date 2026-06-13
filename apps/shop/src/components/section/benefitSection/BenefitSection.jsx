import "./benefitSection.css";
import { benefitData } from './benefitData';
import BenefitCard from "../../card/benefitCard/BenefitCard.jsx";

export default function BenefitSection() {
  return (
    <section className="benefit-section">
      <div className="container">
        <ul className="benefit-section__list">
          {benefitData.map(({title, icon, text }) => {
            const IconComponent = icon;
            return (
              <BenefitCard
                key={title}
                icon={<IconComponent />}
                title={title}
                text={text}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

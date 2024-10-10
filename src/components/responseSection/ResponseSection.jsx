import Button from "../button/Button";
import ResponseCard from "../responseCard/ResponseCard";
import "./responseSection.css";

export default function ResponseSection() {
  return (
    <section className="response-section" id="response-section">
      <div className="container">
        <h2 className="response-section__title">
          <span className="title-accent">chocolate</span> is loved
        </h2>
        <ul className="response-section__list">
          <ResponseCard />
          <ResponseCard />
          <ResponseCard />
        </ul>

        <Button className="button button--transparent-or response-section__btn">
          Leave a review
        </Button>
      </div>
    </section>
  );
}

import ResponseCard from "../responseCard/ResponseCard";
import ReviewModal from "../reviewModal/ReviewModal";
import "./responseSection.css";
import React, { useState } from "react";

export default function ResponseSection() {
  const [modalResponseIsOpen, setModalResponseIsOpen] = useState(false);
  return (
    <section className="response-section" id="response-section">
      <div className="container">
        <h2 className="response-section__title">
          <span className="title-accent">chocolate</span> is loved
        </h2>
        <div className="swiper-container">
          <ul className="response-section__list">
            <ResponseCard />
            <ResponseCard />
            <ResponseCard />
          </ul>
        </div>
        <button
          className="button button--transparent-or response-section__btn"
          onClick={() => setModalResponseIsOpen(true)}
        >
          Leave a review
        </button>
      </div>
      <ReviewModal
        isOpen={modalResponseIsOpen}
        onClose={() => setModalResponseIsOpen(false)}
      />
    </section>
  );
}

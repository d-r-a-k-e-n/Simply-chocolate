import React, { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ResponseCard from "../responseCard/ResponseCard";
import ReviewModal from "../reviewModal/ReviewModal";

import "swiper/css";
import "./responseSection.css";

export default function ResponseSection() {
  const [modalResponseIsOpen, setModalResponseIsOpen] = useState(false);
  const review = [
    {
      name: "Victoria Dobrzhanska",
      text: "I love this chocolate bar. Perfect combination of light crispy wafer, covered in a thin layer chocolate.",
    },
    {
      name: "Nazar Babenko",
      text: "This chocolate confection is a delight! A delight! The wafer is light and crisp, the hazelnut cream is smooth, and the chocolate is good.",
    },
    {
      name: "Olena Kampusch",
      text: " Chocolate is a family favourite treat. Love the delicious smooth chocolate and the creaminess inside. The wafer is soft but crunchy.",
    },
    {
      name: "Natalia Sus",
      text: "The chocolate assortment was delicious. Both dark and milk chocolate pieces were smooth and just right on the sweetness level. ",
    },
    {
      name: "Danilo Nottingham",
      text: "This is delicious. It so rich and flavorful you don’t need to use as many. I love topping an apple with almond butter and these chips for a snack.",
    },
    {
      name: "Irina Tydnyuk",
      text: "This is simply the best chocolate around, and I'm just thrilled to support a local company! Best local chocolate - world class :)",
    },
  ];

  return (
    <section className="response-section" id="response-section">
      <div className="container">
        <h2 className="response-section__title">
          <span className="title-accent">chocolate</span> is loved
        </h2>
        <div className="swiper-container">
          <ul className="response-section__list swiper-wrapper">
            <Swiper
              modules={[Autoplay]}
              breakpoints={{
                1140: { slidesPerView: 3, spaceBetween: 28 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                375: { slidesPerView: 1, spaceBetween: 10 },
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
            >
              {review.map((element) => (
                <SwiperSlide key={element.name}>
                  <ResponseCard name={element.name} text={element.text} />
                </SwiperSlide>
              ))}
            </Swiper>
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

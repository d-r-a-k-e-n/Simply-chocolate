import React, { useEffect, useState } from 'react';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { responseService } from '../../../services/response.service';

import Button from "../../ui/button/Button";
import ResponseCard from "../../card/responseCard/ResponseCard";
import ReviewModal from "../../modal/reviewModal/ReviewModal";

import "swiper/css";
import "./responseSection.css";

export default function ResponseSection() {
  const [modalResponseIsOpen, setModalResponseIsOpen] = useState(false);
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await responseService.getAll();
        if (response && response.data) {
          setResponseData(response.data);
        } else if (Array.isArray(response)) {
          setResponseData(response);
        }
      } catch (error) {
        console.error('Error: ', error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="response-section" id="response-section">
      <div className="container">
        <h2 className="response-section__title">
          <span className="title-accent">chocolate</span> is loved
        </h2>
        <div className="swiper-container">
          <ul className="response-section__list">
            {responseData && responseData.length > 0 ? (
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
                {responseData.map((element) => (
                  <SwiperSlide key={element._id}>
                    <ResponseCard name={element.name} text={element.text} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="response-section__no-response">No response</p>
            )}
          </ul>
        </div>
        <Button
          className="button button--transparent-or response-section__btn"
          onClick={() => setModalResponseIsOpen(true)}
        >
          Leave a review
        </Button>
      </div>
      <ReviewModal
        isOpen={modalResponseIsOpen}
        onClose={() => setModalResponseIsOpen(false)}
      />
    </section>
  );
}

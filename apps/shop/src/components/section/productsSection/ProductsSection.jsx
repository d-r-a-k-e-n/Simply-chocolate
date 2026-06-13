import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../../card/productCard/ProductCard";
import {productsData} from "./productsData";
import "./productsSection.css";
import "swiper/css";

export default function ProductsSection() {
  return (
    <section className="products-section" id="products-section">
      <div className="container">
        <h2 className="products-section__title">
          Our <span className="title-accent">products</span>
        </h2>
        <ul className="products-section__list">
          <Swiper
            breakpoints={{
              1140: { slidesPerView: 4, spaceBetween: 18 },
              880: { slidesPerView: 3, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              375: { slidesPerView: 1, spaceBetween: 10 },
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {productsData.map(({ title, photo, ingredient, prise }) => (
              <SwiperSlide key={title}>
                <ProductCard
                  title={title}
                  photo={photo}
                  ingredient={ingredient}
                  prise={prise}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}

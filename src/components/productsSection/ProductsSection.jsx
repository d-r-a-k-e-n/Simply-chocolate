import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../productCard/ProductCard";
import "./productsSection.css";
import "swiper/css";

import Orange from "../../img/our-products/orange-chocolate.jpg";
import AppleCranberry from "../../img/our-products/apple-chocolate.jpg";
import LimeSeaSalt from "../../img/our-products/lime-chocolate.jpg";
import Pineapple from "../../img/our-products/pineapple-chocolate.jpg";
import ClassicMilk from "../../img/our-products/classic-milk-chocolate.jpg";
import Honey from "../../img/our-products/honey-chocolate.jpg";
import RoastedFruits from "../../img/our-products/roasted-chocplate.jpg";
import ClassicWhite from "../../img/our-products/classic-white-chocolate.jpg";

export default function ProductsSection() {
  const products = [
    {
      title: "Orange",
      photo: Orange,
      ingredient: "Dark chocolate",
      prise: "45 UAH",
    },
    {
      title: "Apple&cranberry",
      photo: AppleCranberry,
      ingredient: "Milk chocolate",
      prise: "50 UAH",
    },
    {
      title: "Lime&sea salt",
      photo: LimeSeaSalt,
      ingredient: "Dark chocolate",
      prise: "66 UAH",
    },
    {
      title: "Pineapple",
      photo: Pineapple,
      ingredient: "Dark chocolate",
      prise: "54 UAH",
    },
    {
      title: "Classic Milk",
      photo: ClassicMilk,
      ingredient: "Milk chocolate",
      prise: "45 UAH",
    },
    {
      title: "Honey",
      photo: Honey,
      ingredient: "Milk chocolate",
      prise: "50 UAH",
    },
    {
      title: "Roasted fruits",
      photo: RoastedFruits,
      ingredient: "Dark chocolate",
      prise: "66 UAH",
    },
    {
      title: "Classic White",
      photo: ClassicWhite,
      ingredient: "White chocolate",
      prise: "54 UAH",
    },
  ];

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
            {products.map((element) => (
              <SwiperSlide key={element.title}>
                <ProductCard
                  title={element.title}
                  photo={element.photo}
                  ingredient={element.ingredient}
                  prise={element.prise}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}
